<script setup>
defineProps({
  title: {
    type: String,
    default: "Become a dev",
  },
  subtitle: {
    type: String,
    default: "Find a job that fits your skills!",
  },
});
</script>

<template>
  <div class="py-20 bg-blue-600 text-center">
    <h1 class="text-blue-100 text-5xl font-extrabold mb-4">
      {{ title }}
    </h1>
    <p class="text-blue-100 text-2xl">{{ subtitle }}</p>
  </div>
</template>
