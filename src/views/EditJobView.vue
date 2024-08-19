<script setup>
import router from "../router";
import { reactive, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

const form = reactive({
  type: "Full-Time",
  title: "",
  description: "",
  location: "",
  salary: "",
  company: {
    name: "",
    description: "",
    contactEmail: "",
    contactPhone: "",
  },
});

const state = reactive({
  job: {},
  isLoading: true,
});

const toast = useToast();
const route = useRoute();
const jobId = route.params.id;

const handleSubmit = async () => {
  const updatedJob = {
    type: form.type,
    title: form.title,
    description: form.description,
    location: form.location,
    salary: form.salary,
    company: {
      name: form.company.name,
      description: form.company.description,
      contactEmail: form.company.contactEmail,
      contactPhone: form.company.contactPhone,
    },
  };

  try {
    const res = await axios.put(
      `http://localhost:5000/jobs/${jobId}`,
      updatedJob
    );
    // console.log(res);
    toast.success("Updated job successfully!");
    router.push(`/job/${res.data.id}`);
  } catch (error) {
    console.log("Error updating job");
  }
};

onMounted(async () => {
  try {
    const res = await axios.get(`http://localhost:5000/jobs/${jobId}`);
    state.job = res.data;
    // Populate inputs
    form.type = state.job.type;
    form.title = state.job.title;
    form.description = state.job.description;
    form.location = state.job.location;
    form.salary = state.job.salary;
    form.company.name = state.job.company.name;
    form.company.description = state.job.company.description;
    form.company.contactEmail = state.job.company.contactEmail;
    form.company.contactPhone = state.job.company.contactPhone;
  } catch (error) {
    console.error("Error fetching job" + error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <div class="bg-green-200">
    <div class="container mx-auto py-8">
      <div class="bg-white p-5 rounded-lg">
        <div v-if="state.isLoading" class="text-center"><PulseLoader /></div>
        <form v-else @submit.prevent="handleSubmit">
          <div class="flex flex-col mb-4">
            <label for="name" class="mb-2">Type</label>
            <select
              v-model="form.type"
              class="w-full p-2 border border-2 border-gray-300 rounded-lg"
            >
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
            </select>
          </div>
          <div class="flex flex-col mb-4">
            <label for="name" class="mb-2">Title</label>
            <input
              v-model="form.title"
              class="w-full p-2 border border-2 border-gray-300 rounded-lg"
              type="text"
              placeholder="title"
            />
          </div>
          <div class="flex flex-col mb-4">
            <label for="name" class="mb-2">Job Description</label>
            <textarea
              v-model="form.description"
              class="w-full p-2 border border-2 border-gray-300 rounded-lg"
              type="text"
              placeholder="Job Description"
            ></textarea>
          </div>
          <div class="flex flex-col mb-4">
            <label for="name" class="mb-2">Job Location</label>
            <input
              v-model="form.location"
              class="w-full p-2 border border-2 border-gray-300 rounded-lg"
              type="text"
              placeholder="Job Location"
            />
          </div>
          <div class="flex flex-col mb-4">
            <label for="name" class="mb-2">Job Salary</label>
            <input
              v-model="form.salary"
              class="w-full p-2 border border-2 border-gray-300 rounded-lg"
              type="text"
              placeholder="Job Salary"
            />
          </div>
          <div class="flex flex-col mb-4">
            <label for="name" class="mb-2">Company Name</label>
            <input
              v-model="form.company.name"
              class="w-full p-2 border border-2 border-gray-300 rounded-lg"
              type="text"
              placeholder="Company Name"
            />
          </div>
          <div class="flex flex-col mb-4">
            <label for="name" class="mb-2">Company Description</label>
            <input
              v-model="form.company.description"
              class="w-full p-2 border border-2 border-gray-300 rounded-lg"
              type="text"
              placeholder="Company Description"
            />
          </div>
          <div class="flex flex-col mb-4">
            <label for="name" class="mb-2">Company Email</label>
            <input
              v-model="form.company.contactEmail"
              class="w-full p-2 border border-2 border-gray-300 rounded-lg"
              type="text"
              placeholder="Company Email"
            />
          </div>
          <div class="flex flex-col mb-4">
            <label for="name" class="mb-2">Company Phone</label>
            <input
              v-model="form.company.contactPhone"
              class="w-full p-2 border border-2 border-gray-300 rounded-lg"
              type="text"
              placeholder="Company Phone"
            />
          </div>
          <div>
            <button
              type="submit"
              class="w-full bg-green-500 py-2 rounded-lg text-white"
            >
              Update Job
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
