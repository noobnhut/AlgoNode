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
        },
        {
          path: "on-tap",
          name: "on-tap",
          component: () => import("../page/learn.page.vue"),
        },
        {
          path: "cau-truc-du-lieu-mang",
          name: "cau-truc-du-lieu-mang",
          component: () => import("../page/algonode/array.page.vue"),
        },
        {
          path: '/ngan-xep-stack',
          name: 'ngan-xep-stack',
          component: () => import('../page/algonode/stack.page.vue'),
        },
        {
          path: '/hang-doi-queue',
          name: 'hang-doi-queue',
          component: () => import('../page/algonode/queue.page.vue'),
        },
        {
          path: '/tim-kiem-nhi-phan',
          name: 'tim-kiem-nhi-phan',
          component: () => import('../page/algonode/binary-search.page.vue'),
        },
        {
          path: '/sap-xep-noi-bot',
          name: 'sap-xep-noi-bot',
          component: () => import('../page/algonode/bubble-sort.page.vue'),
        },
        {
          path: '/cay-tim-kiem-nhi-phan',
          name: 'cay-tim-kiem-nhi-phan',
          component: () => import('../page/algonode/binary-search-tree.page.vue'),
        },
        {
          path: '/de-quy-recursion',
          name: 'de-quy-recursion',
          component: () => import('../page/algonode/recursion.page.vue'),
        },
        {
          path: '/thap-ha-noi',
          name: 'thap-ha-noi',
          component: () => import('../page/algonode/tower-of-hanoi.page.vue'),
        },
        {
          path: '/danh-sach-lien-ket-vong',
          name: 'danh-sach-lien-ket-vong',
          component: () => import('../page/algonode/circular-linked-list.page.vue'),
        },
        {
          path: '/danh-sach-lien-ket-doi',
          name: 'danh-sach-lien-ket-doi',
          component: () => import('../page/algonode/doubly-linked-list.page.vue'),
        },
        {
          path: '/tim-kiem-tuyen-tinh',
          name: 'tim-kiem-tuyen-tinh',
          component: () => import('../page/algonode/linear-search.page.vue'),
        },
        {
          path: '/danh-sach-lien-ket-don',
          name: 'danh-sach-lien-ket-don',
          component: () => import('../page/algonode/linked-list.page.vue'),
        },
      ]
    },
  ],
});
export default router;