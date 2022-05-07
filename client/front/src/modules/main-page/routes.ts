import { RouteRecordRaw } from 'vue-router'

import MainPage from './components/MainPage.vue'

export const mainPageRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainPage,
  },
]
