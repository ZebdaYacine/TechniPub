import { createApp } from "vue";
import App from "./App.vue";
import "./style/main.css";
import "@fortawesome/fontawesome-free/css/all.css";
import router from "./router/route";
import store from "./store/index";

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

createApp(App).use(router).use(store).mount("#app");
