import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { mainPageRoutes } from '@/main-page'
import { accountRoutes } from '@/account'
import { contactsRoutes } from '@/contacts'

const routes: RouteRecordRaw[] = [
  ...mainPageRoutes,
  ...accountRoutes,
  ...contactsRoutes,

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
