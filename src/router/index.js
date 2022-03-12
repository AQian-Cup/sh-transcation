import Vue from "vue";
import Router from "vue-router";
import login from "../pages/login";
import register from "../pages/register"

Vue.use(Router);

const routes = [
  {
    path: "/login",
    component: login
  },

  {
    path: "/register",
    component: register
  },
];

const router = new Router({
  routes
})

export default router;
