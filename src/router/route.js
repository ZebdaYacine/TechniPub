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
      name: "404",
      component: NotFoundView,
    },
  ],
});

router.beforeEach((to) => {
  const user = store.state.user;
  console.log(user);
  if (!user.isLogged) {
    if (to.path !== "/" && to.path !== "/login" && to.path !== "/Register") {
      return false;
    }
    if ((to.path = "to.path !== " / "")) {
      return "404";
    }
  } else {
    if (to.path === "/" || to.path === "/Register") {
      return false;
    }
  }
});

export default router;
