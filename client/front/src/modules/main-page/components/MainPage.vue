<script lang="ts" setup>
import { isUserAuthorized } from '@/account'

import PageForUnauthorized from './PageForUnauthorized.vue'
import PageForAuthorized from './PageForAuthorized.vue'
</script>

<template>
  <PageForAuthorized v-if="isUserAuthorized" />
  <PageForUnauthorized v-else />
</template>
