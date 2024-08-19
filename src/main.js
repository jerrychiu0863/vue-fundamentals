import { createApp } from "vue";
import App from "./App.vue";

import "./style.css";
import "primeicons/primeicons.css";
import router from "./router";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const app = createApp(App);
const options = {};
app.use(router);
app.use(Toast, options);
app.mount("#app");
