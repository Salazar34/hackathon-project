import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import CitySecurity from "../views/CitySecurity.vue";
import Contribute from "../views/Contribute.vue";
import Goals from "../views/Goals.vue";
import Municipality from "../views/Municipality.vue";
import Credits from "../views/Credits.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/city-security",
    name: "CitySecurity",
    component: CitySecurity,
  },
  {
    path: "/contribute",
    name: "Contribute",
    component: Contribute,
  },
  {
    path: "/municipality",
    name: "Municipality",
    component: Municipality,
  },
  {
    path: "/goals",
    name: "Goals",
    component: Goals,
  },
  {
    path: "/credits",
    name: "Credits",
    component: Credits,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
