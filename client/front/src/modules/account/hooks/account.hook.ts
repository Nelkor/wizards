import { ref, computed } from 'vue'

import { Account } from '../types'

const account = ref<Account>({
  id: 0,
  name: '',
})

export const isUserAuthorized = computed(() => Boolean(account.value.id))
