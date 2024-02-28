<script setup lang="ts">
import router from '@/router'
import parameterStore from '@/stores/parameterStore'
import CategorySelection from './CategorySelection.vue'
import LimitRange from './LimitRange.vue'

function isButtonDisabled() {
  return (!parameterStore() || parameterStore().category === '' || parameterStore().limit === 0)
}

function goToQuiz() {
  router.push({ name: 'quiz' })
}
</script>

<template>
  <div
    class="mb-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"
  ></div>
  <div class="flex flex-col w-full">
    <div class="mb-5 grid gap-y-10 card place-items-center">
      <CategorySelection />
      <LimitRange />
      <button :disabled="isButtonDisabled()" type="button" class="btn btn-outline btn-secondary" @click="goToQuiz">
        Start quiz
      </button>
    </div>
  </div>
</template>
