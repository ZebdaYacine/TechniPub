import { createApp } from "vue";
import App from "./App.vue";
import "./style/main.css";
import "@fortawesome/fontawesome-free/css/all.css";
import router from "./router/route";
import store from "./store/store";

createApp(App).use(router).use(store).mount("#app");
