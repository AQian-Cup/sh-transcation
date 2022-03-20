import Vue from "vue";
import Router from "vue-router";
import brand from "../brand";
import home from "../pages/home";
import choose from "../pages/choose";
import login from "../pages/choose/login";
import register from "../pages/choose/register";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: brand,
    children: [
      {
        path: "",
        component: home
      },
    ],
  },
  {
    path: "/choose",
    component: choose,
    children: [
      {
        path: "login",
        component: login,
      },
      {
        path: "register",
        component: register,
      },
    ],
  },
];

const router = new Router({
  routes,
});

export default router;
