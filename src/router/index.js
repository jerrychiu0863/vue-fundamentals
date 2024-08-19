import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import JobsView from "../views/JobsView.vue";
import AddJobView from "../views/AddJobView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import JobDetailView from "../views/JobDetailView.vue";
import EditJobView from "../views/EditJobView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/add-job",
      name: "add-Job",
      component: AddJobView,
    },
    {
      path: "/job/:id",
      name: "job-detail",
      component: JobDetailView,
    },
    {
      path: "/edit-job/:id",
      name: "edit-job",
      component: EditJobView,
    },
    /*https://router.vuejs.org/guide/essentials/dynamic-matching#Catch-all-404-Not-found-Route*/
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: NotFoundView,
    },
  ],
});

export default router;
