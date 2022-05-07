import { createApp } from 'vue'

import { loadCurrentLang } from '@/i18n'

import App from './App.vue'
import { router } from './router'

loadCurrentLang().then(() => {
  createApp(App).use(router).mount('#app')
})
