<script setup lang="ts">
import { storeToRefs } from 'pinia'
import parameterStore from '@/stores/parameterStore'

const { category } = storeToRefs(parameterStore())
</script>

<template>
  <div class="form-control w-full max-w-xs flex flex-col">
    <label for="category" class="label" data-testid="categorySelector">
      <span class="label-text text-lg">Category:</span>
    </label>
    <select
      id="category"
      class="select select-secondary w-full max-w-xs text-base"
      v-model="category"
    >
      <option disabled selected>Select category for quiz</option>
      <option>Randomize</option>
      <option>Linux</option>
      <option>Docker</option>
      <option>DevOps</option>
    </select>
  </div>
</template>
