import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import SalesView from "../views/SalesView.vue";
import PurchasesView from "../views/PurchasesView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: LoginView,
    },
    {
      path: "/Main",
      component: MainView,
    },
    {
      path: "/Sales",
      component: SalesView,
    },
    {
      path: "/Purchases",
      component: PurchasesView,
    },
    {
      path: "/login",
      redirect: "/",
    },
    {
      path: "/:catchAll(.*)",
      component: NotFoundView,
    },
  ],
});

export default router;
