import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/2dTrans",
    name: "2dTrans",
    component: () =>
      import("../views/2dTransform.vue")
  },
  {
    path: "/cat",
    name: "cat",
    component: () =>
      import("../views/cat.vue")
  },
  {
    path: "/3dTrans",
    name: "3dTrans",
    component: () =>
      import("../views/3dTransform.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
