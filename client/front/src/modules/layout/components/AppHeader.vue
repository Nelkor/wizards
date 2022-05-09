<script lang="ts" setup>
import { LangSelector, $T } from '@/i18n'
</script>

<template>
  <header class="app-header">
    <router-link to="/">{{ $T('header-to-main-page') }}</router-link>
    <LangSelector />
  </header>
</template>
