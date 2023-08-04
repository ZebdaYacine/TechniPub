import { createApp } from "vue";
import App from "./App.vue";
import "./style/main.css";
import "@fortawesome/fontawesome-free/css/all.css";
import router from "./router/index";

createApp(App).use(router).mount("#app");
