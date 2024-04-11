import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "./components/Home.vue";
import Electronics from "./components/Electronics.vue";
import Clothing from "./components/Clothing.vue";
import Groceries from "./components/Groceries.vue";
import BestSeller from "./components/BestSeller.vue";
const routes = [
  {
    path: "/",
    name: "home",
    props: true,
    component: HomeView,
  },
  {
    path: "/electronics",
    name: "electronincs",
    props: true,
    component: Electronics,
  },
  {
    path: "/clothing",
    name: "clothing",
    props: true,
    component: Clothing,
  },
  {
    path: "/groceries",
    name: "groceries",
    props: true,
    component: Groceries,
  },
  {
    path: "/bestseller",
    name: "best sellers",
    props: true,
    component: BestSeller,
  },
  // you need to add more routes here
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
