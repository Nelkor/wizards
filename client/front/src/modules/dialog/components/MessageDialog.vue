<script lang="ts" setup>
import { PropType } from 'vue'

import { $T } from '@/i18n'
import { closeDialog } from '@/dialog'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  paragraphs: {
    type: Array as PropType<string[]>,
    required: true,
  },
})
</script>

<template>
  <div class="message-dialog">
    <h2>{{ $T(props.title) }}</h2>

    <p v-for="(paragraph, index) in props.paragraphs" :key="index">
      {{ $T(paragraph) }}
    </p>

    <button @click="closeDialog">{{ $T('dialog-okay') }}</button>
  </div>
</template>
