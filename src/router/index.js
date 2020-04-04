import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination/:slug",
    name: "DestinationDetails",
    component: () =>
      import(
        /* webpackChunkName: "DestinationDetails"*/ "@/views/DestinationDetails"
      ),
    props: true,
    children: [
      {
        path: ":experienceSlug",
        name: "experienceDetails",
        props: true,
        component: () =>
          import(
            /*webpackChunkName: "ExperienceDetails"*/ "@/views/ExperienceDetails"
          ),
      },
    ],
    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(
        (destination) => destination.slug === to.params.slug
      );
      if (exists) {
        next();
      } else {
        next({ name: "404" });
      }
    },
  },
  {
    path: "/404",
    alias: "*",
    name: "404",
    component: () =>
      import(/*webpackChunkName: "ExperienceDetails"*/ "@/views/404"),
  },
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "rename-active-class",
  routes,
});

export default router;
