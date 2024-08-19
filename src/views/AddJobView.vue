<script setup>
import axios from "axios";
import { reactive, onMounted } from "vue";
import router from "../router";
import { useToast } from "vue-toastification";

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

const toast = useToast();
const handleSubmit = async () => {
  const data = {
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
    const response = await axios.post("http://localhost:5000/jobs", data);
    console.log(response);
    toast.success("Sucessfully added a job", {
      timeout: 2000,
    });
    router.push(`/job/${response.data.id}`);
  } catch (error) {
    toast.error("Error adding a job!", {
      timeout: 2000,
    });
    console.log(error);
  }
};
</script>

<template>
  <div class="bg-green-200">
    <div class="container mx-auto py-8">
      <div class="bg-white p-5 rounded-lg">
        <form @submit.prevent="handleSubmit">
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
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
