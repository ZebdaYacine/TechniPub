import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import SalesView from "../views/SalesView.vue";
import PurchasesView from "../views/PurchasesView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import store from "../store/store";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Login",
      component: LoginView,
    },
    {
      path: "/Register",
      name: "Register",
      component: RegisterView,
    },
    {
      path: "/Main/:id",
      name: "Main",
      component: MainView,
    },
    {
      path: "/Sales",
      name: "Sales",
      component: SalesView,
    },
    {
      path: "/Purchases",
      name: "Purchases",
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

router.beforeEach((to) => {
  const isLogged = store.state.user.isLogged;
  if (!isLogged) {
    if (to.name !== "Login" && to.name !== "Register") {
      return "/";
    }
  } else {
    if (to.name === "Login" || to.name === "Register") {
      return "/Main/1?name=zed";
    }
  }
});

export default router;
