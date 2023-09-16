<script setup lang="ts">
import router from '@/router'

function goToQuizConfig() {
  router.push({ name: 'configure' })
}

function goToScores() {
  router.push({ name: 'scores' })
}
</script>

<template>
  <div class="space-x-4">
    <button type="button" class="btn btn-outline btn-accent" @click="goToScores" data-testid="toScoresButton">Scores</button>
    <button type="button" class="btn btn-outline btn-secondary" @click="goToQuizConfig" data-testid="toQuizButton">
      Take quiz
    </button>
  </div>
</template>
