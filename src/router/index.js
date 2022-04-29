import Vue from "vue";
import Router from "vue-router";
import brand from "../brand";
import home from "../pages/home";
import choose from "../pages/choose";
import login from "../pages/choose/login";
import register from "../pages/choose/register";
import posts from "../pages/posts";
import person from "../pages/person";
import search from "../pages/search"
import message from "../pages/message"

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: brand,
    children: [
      {
        path: "",
        component: home,
      },
      {
        path: "posts",
        component: posts,
      },
      {
        path: "person",
        component: person,
      },
      {
        path:"search",
        component:search
      },
      {
        path:"message",
        component:message
      }
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
