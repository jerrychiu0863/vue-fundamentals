<script>
export default {
  data() {
    return {
      count: 0,
      name: "John Doe",
      status: "active",
      tasks: [
        { id: 1, title: "Task one" },
        { id: 2, title: "Task two" },
        { id: 3, title: "Task three" },
      ],
    };
  },
  methods: {
    increment(num) {
      this.count += num;
      this.count += num;
    },
  },
  mounted() {
    console.log(this.count);
  },
  updated() {
    console.log(this.count);
  },
};
</script>

<template>
  <h1>{{ name }}</h1>
  <h1>{{ count }}</h1>
  <!-- 
  <p v-if="status === 'active'">User is active</p> -->

  <!--Conditional rendering-->
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <h3>Tasks</h3>
  <ul>
    <li v-for="task in tasks" :key="task.id">{{ task.title }}</li>
  </ul>

  <button v-on:click="increment(3)">increment</button>
</template>
