import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import SalesView from "../views/SalesView.vue";
import PurchasesView from "../views/PurchasesView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
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
      path: "/Main",
      redirect: "/",
    },
    {
      path: "/:catchAll(.*)",
      name: "404Name",
      component: NotFoundView,
    },
  ],
});

export default router;
