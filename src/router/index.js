import Vue from "vue";
import Router from "vue-router";
import home from "../home";
import login from "../pages/choose/login";
import register from "../pages/choose/register";
import choose from "../pages/choose";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: home,
  },
  {
    path: "/login",
    component: choose,
    children: [
      {
        path: "/login",
        component: login,
      },
      {
        path: "/register",
        component: register,
      },
    ],
  },
];

const router = new Router({
  routes,
});

export default router;
