<script setup>
import { useRoute, RouterLink } from "vue-router";
import { reactive, onMounted } from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import axios from "axios";
import router from "../router";
import { useToast } from "vue-toastification";

const route = useRoute();
const jobId = route.params.id;
const state = reactive({
  job: {},
  isLoading: true,
});
const toast = useToast();

const handleDelete = async () => {
  const confirm = window.confirm("Are you sure to delete this job?");
  if (confirm) {
    try {
      const response = await axios.delete(
        `http://localhost:5000/jobs/${jobId}`
      );
      console.log(response);
      toast.success("Delete job successfully!");
      router.push("/jobs");
    } catch (error) {
      console.log(error);
    }
  }
};

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:5000/jobs/${jobId}`);
    const data = await response.data;
    state.job = data;
  } catch (error) {
    console.log("Error fetching job" + error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <div class="text-center py-6" v-if="state.isLoading">
    <PulseLoader />
  </div>
  <div v-if="!state.isLoading" class="bg-green-200 py-6">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="md:col-span-2 bg-white p-4 rounded-lg shadow">
          <p class="text-gray-500">{{ state.job.type }}</p>
          <p class="font-bold text-2xl mb-5">{{ state.job.title }}</p>
          <p>{{ state.job.description }}</p>
          <p class="text-green-500 mb-5">{{ state.job.salary }}</p>

          <div
            class="flex flex-col md:flex-row items-start md:items-center justify-between"
          >
            <p class="text-red-500 mb-3 md:mb-0">
              {{ state.job.location }}
            </p>
            <!-- <RouterLink
            class="bg-green-500 text-white px-4 py-2 rounded-lg w-full md:w-auto text-center h-[40px]"
            :to="`/job/${job.id}`"
          >
            View More
          </RouterLink> -->
          </div>
        </div>
        <div>
          <div class="bg-white p-4 rounded-lg mb-4 shadow">
            <p>{{ state.job.company.name || "" }}</p>
            <p>{{ state.job.company.description || "" }}</p>
            <p>{{ state.job.company.contactEmail || "" }}</p>
            <p>{{ state.job.company.contactPhone || "" }}</p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow">
            <button
              class="bg-green-400 w-full text-white rounded-full py-2 mb-4"
            >
              Edit Job
            </button>
            <button
              @click="handleDelete"
              class="bg-red-400 w-full text-white rounded-full py-2"
            >
              Delete Job
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
