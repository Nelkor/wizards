<script lang="ts" setup>
import {
  isDialogOpen,
  dialogComponent,
  componentProps,
  clickBackground,
} from '../hooks/dialog.hook'
</script>

<template>
  <dialog class="app-dialog" :open="isDialogOpen" @click.self="clickBackground">
    <component :is="dialogComponent" v-bind="componentProps" />
  </dialog>
</template>
