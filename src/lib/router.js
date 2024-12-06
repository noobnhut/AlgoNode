import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/home.view.vue"),
      children: [
        {
          path: "",
          name: "trang-chu",
          component: () => import("../page/home.page.vue"),
        },
        {
          path: "tin-tuc",
          name: "tin-tuc",
          component: () => import("../page/new.page.vue"),
        }
      ]
    },
  ],
});
export default router;