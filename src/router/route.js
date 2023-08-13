import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import SalesView from "../views/SalesView.vue";
import PurchasesView from "../views/PurchasesView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import store from "../store";

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

router.beforeEach((from, next) => {
  const user = store.state.user;
  console.log(from.path);
  if (!user.isLogged) {
    console.log(0);
    if (
      from.path !== "/" &&
      from.path !== "/login" &&
      from.path !== "/Register"
    ) {
      console.log(1);
      return "/";
    }
  } else {
    console.log(2);
    if (
      from.path === "/" ||
      from.path === "/login" ||
      from.path === "/Register"
    ) {
      console.log(3);
      return "/Main/" + user.id + "?name=" + user.name;
    }
  }
});

export default router;
