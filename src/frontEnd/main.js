import { createApp } from "vue";
import App from "./App.vue";
import "./style/main.css";
import "@fortawesome/fontawesome-free/css/all.css";
import router from "./router/route";
import store from "./store/index";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

store.watch(
  (state) => state, // Watch the entire state
  (newState) => {
    localStorage.setItem("vuexState", JSON.stringify(newState));
  },
  {
    deep: true, // Enable deep watching to detect nested changes
  }
);
const savedState = localStorage.getItem("vuexState");
if (savedState) {
  store.replaceState(JSON.parse(savedState));
}

createApp(App).use(VueSweetalert2).use(router).use(store).mount("#app");
