import { RouteRecordRaw } from 'vue-router'

import AccEnter from './components/AccEnter.vue'
import AccReg from './components/AccReg.vue'

export const accountRoutes: RouteRecordRaw[] = [
  {
    name: 'enter',
    path: '/enter',
    component: AccEnter,
  },
  {
    name: 'registration',
    path: '/registration',
    component: AccReg,
  },
]
