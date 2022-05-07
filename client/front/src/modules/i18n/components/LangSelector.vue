<script lang="ts" setup>
import { currentShortName, isSelectorDisabled } from '../hooks/selector.hook'
import { languages } from '../helpers'
</script>

<template>
  <label class="lang-selector-label">
    <span class="lang-selector-icon" />
    <select v-model="currentShortName" :disabled="isSelectorDisabled">
      <option
        v-for="lang in languages"
        :key="lang.shortName"
        :value="lang.shortName"
      >
        {{ lang.longName }}
      </option>
    </select>
  </label>
</template>
