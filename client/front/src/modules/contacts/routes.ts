import { RouteRecordRaw } from 'vue-router'

import AppContacts from './components/AppContacts.vue'

export const contactsRoutes: RouteRecordRaw[] = [
  {
    name: 'contacts',
    path: '/contacts',
    component: AppContacts,
  },
]
