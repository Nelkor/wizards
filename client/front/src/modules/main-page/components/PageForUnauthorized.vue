<script lang="ts" setup>
import { $T } from '@/i18n'
</script>

<template>
  <div class="main-page-unauthorized">
    <h1>{{ $T('main-page') }}</h1>

    <p>
      {{ $T('user-is-not-authorized-text-1') }}
      <router-link :to="{ name: 'enter' }">
        {{ $T('user-is-not-authorized-enter') }}
      </router-link>
    </p>

    <p>
      {{ $T('user-is-not-authorized-text-2') }}
      <router-link :to="{ name: 'registration' }">
        {{ $T('user-is-not-authorized-reg') }}
      </router-link>
    </p>
  </div>
</template>
