<script setup>
import { onUpdated, watchEffect } from "vue";
import { RouterLink, useRoute } from "vue-router";
import logo from "/vite.svg";

const isActiveLink = (routePath) => {
  const route = useRoute();
  console.log(route.path);
  return route.path === routePath;
};

// onUpdated(() => {
//   console.log("updated");
// });
// watchEffect(() => {
//   console.log("updated");
// })
</script>

<template>
  <header class="bg-green-600 py-3">
    <nav class="container mx-auto">
      <div class="flex items-center">
        <RouterLink to="/">
          <img :src="logo" alt="" />
        </RouterLink>
        <ul class="flex ml-auto">
          <li
            :class="`text-white mr-3  px-2 py-1 rounded ${
              isActiveLink('/') ? 'bg-green-700' : ''
            }`"
          >
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li
            :class="`text-white mr-3 px-2 py-1 rounded ${
              isActiveLink('/jobs') ? 'bg-green-700' : ''
            }`"
          >
            <RouterLink to="/jobs">Jobs</RouterLink>
          </li>
          <li
            :class="`text-white mr-3 px-2 py-1 rounded ${
              isActiveLink('/add-job') ? 'bg-green-700' : ''
            }`"
          >
            <RouterLink to="/add-job">Add Job</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
