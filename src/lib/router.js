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
          name: "home-page",
          component: () => import("../page/home.page.vue"),
        }
      ]
    },
  ],
});
export default router;