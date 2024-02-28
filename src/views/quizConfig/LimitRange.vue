<script setup lang="ts">
import { storeToRefs } from 'pinia'
import parameterStore from '@/stores/parameterStore'

const { limit } = storeToRefs(parameterStore())
</script>

<template>
  <div class="text-center">
    <label for="category" class="label">
      <span class="label-text text-lg">Choose amount of questions:</span>
    </label>
    <div class="text-xl mt-5">{{ limit }}</div>
    <input type="range" min="1" max="20" v-model="limit" class="range range-secondary w-60 mt-3" data-testid="limitRange" />
  </div>
</template>
