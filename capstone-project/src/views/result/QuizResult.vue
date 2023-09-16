<script setup lang="ts">
import router from '@/router'
import ReturnHomeButton from '@/components/ReturnHomeButton.vue'
import ScorePercentage from '@/components/ScorePercentage.vue'
import singleSessionStore from '@/stores/singleSessionStore'
import QADisplay from './QADisplay.vue'

const currentSession = singleSessionStore()
</script>

<template>
  <div
    class="mb-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"
  ></div>
  <h1 class="text-3xl pb-5 font-bold text-center">Your score:</h1>
  <ScorePercentage :session-score="currentSession.sessionScore" />
  <div class="m-5">
    <QADisplay />
    <ReturnHomeButton :router="router" />
  </div>
</template>
