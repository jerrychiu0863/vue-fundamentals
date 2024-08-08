<script setup>
defineProps({
  bg: {
    type: String,
    default: "bg-gray-100",
  },
});
</script>

<template>
  <div :class="`${bg} py-10 px-5 rounded-lg`">
    <slot></slot>
  </div>
</template>
