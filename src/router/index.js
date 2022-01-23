import { createRouter, createWebHistory } from "vue-router";

//Default components
import Home from "../views/Home.vue";
import CitySecurity from "../views/CitySecurity.vue";
import Contribute from "../views/Contribute.vue";
import Goals from "../views/Goals.vue";
import Municipality from "../views/Municipality.vue";
import Credits from "../views/Credits.vue";

//Italian components
import HomeIt from "../views/It/Home-it.vue";
import CitySecurityIt from "../views/It/CitySecurity-it.vue";
import ContributeIt from "../views/It/Contribute-it.vue";
import GoalsIt from "../views/It/Goals-it.vue";
import MunicipalityIt from "../views/It/Municipality-it.vue";
import CreditsIt from "../views/It/Credits-it.vue";

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
  {
    path: "/it",
    name: "HomeIt",
    component: HomeIt,
  },
  {
    path: "/it/city-security",
    name: "CitySecurityIt",
    component: CitySecurityIt,
  },
  {
    path: "/it/contribute",
    name: "ContributeIt",
    component: ContributeIt,
  },
  {
    path: "/it/municipality",
    name: "MunicipalityIt",
    component: MunicipalityIt,
  },
  {
    path: "/it/goals",
    name: "GoalsIt",
    component: GoalsIt,
  },
  {
    path: "/it/credits",
    name: "CreditsIt",
    component: CreditsIt,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
