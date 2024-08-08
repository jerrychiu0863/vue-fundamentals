<script setup>
import { RouterLink } from "vue-router";
import Card from "./Card.vue";
</script>

<template>
  <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
    <Card>
      <p class="text-2xl font-extrabold">For Developers</p>
      <p class="mt-2 mb-4">Browse vue jobs</p>
      <RouterLink
        to="/jobs"
        class="inline-block bg-black text-gray-200 rounded-lg px-4 py-2"
      >
        Browse jobs
      </RouterLink>
    </Card>
    <Card bg="bg-green-100">
      <p class="text-2xl font-extrabold">For Employers</p>
      <p class="mt-2 mb-4">List jobs</p>
      <RouterLink
        to="/add-job"
        class="inline-block bg-green-600 text-gray-200 rounded-lg px-4 py-2 hover:bg-green-700"
      >
        Add jobs
      </RouterLink>
    </Card>
  </div>
</template>
