<script setup>
import { ref, reactive, onMounted } from "vue";
import { RouterLink } from "vue-router";
import JobListing from "./JobListing.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

import axios from "axios";

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

// ref vs reactive - https://vuejs.org/guide/essentials/reactivity-fundamentals.htmll#limitations-of-reactive
// 1. reactive() only works for object types (objects, arrays, and collection types such as Map and Set).
// It cannot hold primitive types such as string, number or boolean
// 2. ref() can take objects and primitives
// 3. ref() has .value property for reassigning, reactive() doesn't .value and can't be reassigned
// Due to these limitations, we recommend using ref() as the primary API for declaring reactive state.
const jobs = ref([]);
let state = reactive({
  jobs: [],
  isLoading: false,
});

onMounted(async () => {
  state.isLoading = true;
  try {
    const response = await axios.get("http://localhost:5000/jobs");
    if (response.status >= 300 || response <= 200) {
      console.log("Response Error");
    }
    const data = await response.data;
    jobs.value = data;
    state.jobs = data;
  } catch (error) {
    console.log(error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <div class="bg-green-100 py-10">
    <div class="container mx-auto mb-5">
      <p class="text-5xl font-extrabold mb-5">Job Listing</p>
      <!--Job listing-->
      <div v-if="state.isLoading" class="text-center py-6"><PulseLoader /></div>
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-3"
        v-if="!state.isLoading"
      >
        <JobListing
          v-for="(job, index) in state.jobs.slice(
            0,
            limit || state.jobs.length
          )"
          :key="job.id"
          :job="job"
        />
      </div>
      <!--Job listing-->
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
