import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomePage/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/credits",
    name: "Credits",
    // route level code-splitting
    // this generates a separate chunk (credits.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "credits" */ "../views/Credits.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
