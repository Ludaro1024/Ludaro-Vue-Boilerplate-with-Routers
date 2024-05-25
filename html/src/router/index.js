import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'testsite1',
      component: () => import('../components/sites/testsite1.vue')
    },
    {
        path: "/testsite2",
        name: "testsite2",
        component: () => import("../components/sites/testsite2.vue")
    },
  ]
})

export default router