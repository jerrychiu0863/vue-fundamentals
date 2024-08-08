<script setup>
import { RouterLink } from "vue-router";
import jobsData from "../jobs.json";
import JobListing from "./JobListing.vue";

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="bg-green-100 py-10">
    <div class="container mx-auto mb-5">
      <p class="text-5xl font-extrabold mb-5">Job Listing</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <JobListing
          v-for="(job, index) in jobsData.slice(0, limit || jobsData.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
    <div v-if="showButton" class="text-center">
      <RouterLink
        class="bg-green-500 text-white px-8 py-4 rounded-lg inline-block"
        to="/jobs"
      >
        View all jobs
      </RouterLink>
    </div>
  </div>
</template>
