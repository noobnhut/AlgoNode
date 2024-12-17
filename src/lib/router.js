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
          path: "/tin-tuc",
          name: "tin-tuc",
          component: () => import("../page/new.page.vue"),
        },
        {
          path: "/tim-kiem",
          name: "search",
          component: () => import("../page/pagemenu/search.page.vue"),
        },
        {
          path: "/on-tap",
          name: "on-tap",
          component: () => import("../page/learn.page.vue"),
          children: [
            {
              path: "",
              name: "all",
              component: () => import("../page/pagemenu/all.page.vue"),
            },
            {
              path: "/on-tap/:algoPath",
              name: "ontap-path",
              component: () => import("../page/pagemenu/menu.page.vue"),
            },
          ],
        },
        {
          path: "/:algoPath",
          name: "algo",
          component: () => import("../page/algonode/algo.page.vue"),
        },
      ]
    },
  ],
});
export default router;