<!-- <script>
// Options API
// export default {
//   data() {
//     return {
//       count: 0,
//       name: "John Doe",
//       status: "active",
//       tasks: [
//         { id: 1, title: "Task one" },
//         { id: 2, title: "Task two" },
//         { id: 3, title: "Task three" },
//       ],
//       link: "https://www.google.com",
//     };
//   },
//   methods: {
//     increment(num) {
//       this.count += num;
//       this.count += num;
//       console.log(this.count);
//     },
//     toggleStatus() {
//       if (this.status === "active") {
//         this.status = "pending";
//         return;
//       }
//       if (this.status === "pending") {
//         this.status = "inactive";
//         return;
//       }
//       if (this.status === "inactive") {
//         this.status = "active";
//         return;
//       }
//     },
//   },
//   // mounted() {
//   //   console.log(this.count);
//   // },
//   // updated() {
//   //   console.log(this.count);
//   // },
// };
</script> -->
<!-- <script>
// Composition api longer version
import { ref } from "vue";
export default {
  setup() {
    const name = ref("John");
    const status = ref("active");
    const tasks = ref([
      { id: 1, title: "Task one" },
      { id: 2, title: "Task two" },
      { id: 3, title: "Task three" },
    ]);

    const toggleStatus = () => {
      console.log(status);
      if (status.value === "active") {
        status.value = "pending";
        return;
      }
      if (status.value === "pending") {
        status.value = "inactive";
        return;
      }
      if (status.value === "inactive") {
        status.value = "active";
        return;
      }
    };

    return { name, status, tasks, toggleStatus };
  },
};
</script> -->
<script setup>
// Composition api shortor version
import { ref } from "vue";

const name = ref("John");
const status = ref("active");
const tasks = ref([
  { id: 1, title: "Task one" },
  { id: 2, title: "Task two" },
  { id: 3, title: "Task three" },
]);
const newTask = ref("");

const toggleStatus = () => {
  console.log(tasks);
  if (status.value === "active") {
    status.value = "pending";
    return;
  }
  if (status.value === "pending") {
    status.value = "inactive";
    return;
  }
  if (status.value === "inactive") {
    status.value = "active";
    return;
  }
};

const addTask = () => {
  if (newTask.value.trim()) {
    tasks.value.push({ id: Math.random(), title: newTask.value });
    newTask.value = "";
  }
};

const deleteTask = (id) => {
  tasks.value = tasks.value.filter((task) => task.id !== id);
};
</script>

<template>
  <h1>{{ name }}</h1>
  <!-- <h1>{{ count }}</h1> -->
  <!-- 
  <p v-if="status === 'active'">User is active</p> -->

  <!--Conditional rendering-->
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" name="newTask" v-model="newTask" />
    <button type="submit">Submit</button>
  </form>

  <h3>Tasks</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task.id">
      <span>Index: {{ index }}</span>
      <span>{{ task.title }}</span>
      <button @click="deleteTask(task.id)">Delete</button>
    </li>
  </ul>

  <!-- <a v-bind:href="link">Google</a> -->
  <!-- <a :href="link">Google</a> -->
  <br />
  <!-- <button v-on:click="increment(3)">increment</button> -->
  <!-- <button v-on:click="toggleStatus">Toggle</button> -->
  <button @click="toggleStatus">Toggle</button>
</template>
