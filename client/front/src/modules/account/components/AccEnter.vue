<script lang="ts" setup>
import { $T } from '@/i18n'
</script>

<template>
  <div class="account-form">
    <h1>{{ $T('acc-enter-header') }}</h1>

    <label class="text">
      <span>{{ $T('acc-enter-name') }}</span>
      <input class="text" type="text" />
    </label>

    <p class="notification account-name hidden" />

    <label class="text">
      <span>{{ $T('acc-enter-password') }}</span>
      <input class="text" type="password" />
    </label>

    <p class="notification hidden" />

    <button>{{ $T('acc-enter-button') }}</button>

    <p class="alternative">
      {{ $T('acc-enter-alternative-text') }}
      <router-link :to="{ name: 'registration' }">
        {{ $T('acc-enter-alternative-link') }}
      </router-link>
    </p>
  </div>
</template>
