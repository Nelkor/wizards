import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { mainPageRoutes } from '@/main-page'

const routes: RouteRecordRaw[] = [
  ...mainPageRoutes,

  // unfamiliar path
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

export const router = createRouter({
  history: createWebHistory('/'),
  routes,
})
