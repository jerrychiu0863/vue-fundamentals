<script setup>
import { RouterLink } from "vue-router";
import { computed, onMounted, ref } from "vue";

const props = defineProps({
  job: Object,
});

const showFullDescription = ref(false);

const toggleDescription = () => {
  showFullDescription.value = !showFullDescription.value;
};

const trunctedDescription = computed(() => {
  let description = props.job.description;
  if (!showFullDescription.value && description.length > 90) {
    description = description.substring(0, 90) + "...";
  }
  return description;
});

// console.log(props);
</script>
<template>
  <div class="bg-white p-5 rounded-lg h-full">
    <p class="text-gray-500">{{ job.type }}</p>
    <p class="font-bold text-2xl mb-5">{{ job.title }}</p>
    <p>
      {{ trunctedDescription }}
      <button
        v-if="job.description.length > 90"
        class="text-green-500"
        @click="toggleDescription"
      >
        <!-- <span v-if="showFullDescription"> Veiw less</span>
        <span v-else> Veiw all</span> -->
        {{ showFullDescription ? "Less" : "More" }}
      </button>
    </p>
    <p class="text-green-500 mb-5">{{ job.salary }}</p>

    <div
      class="flex flex-col md:flex-row items-start md:items-center justify-between"
    >
      <p class="text-red-500 mb-3 md:mb-0">{{ job.location }}</p>
      <RouterLink
        class="bg-green-500 text-white px-4 py-2 rounded-lg w-full md:w-auto text-center h-[40px]"
        :to="`/job/${job.id}`"
      >
        View More
      </RouterLink>
    </div>
  </div>
</template>
