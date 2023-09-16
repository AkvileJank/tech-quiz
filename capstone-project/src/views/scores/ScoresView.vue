<script setup lang="ts">
import allSessionsStore from '@/stores/allSessionsStore'
import router from '@/router'
import ReturnHomeButton from '@/components/ReturnHomeButton.vue'
import forScores from './for-scores.svg'
import ScoreCard from './ScoreCard.vue'

const { allSessions } = allSessionsStore()
</script>
<template>
  <div
    class="mb-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25"
  ></div>
  <div v-if="allSessions.length === 0" class="flex-col text-center">
    <p class="text-xl font-bold pt-4">No scores yet, try to solve a quiz and come back then!</p>
    <img
      class="max-w-xs mx-auto my-10"
      :src="forScores"
      alt="Rocket landed at a station and moon"
    />
    <ReturnHomeButton :router="router" />
  </div>
  <div v-else>
    <h1 class="text-3xl font-bold text-center pb-4">Your scores:</h1>
    <div class="md:grid grid-cols-2">
      <ScoreCard :all-sessions="allSessions" />
    </div>
  </div>
</template>
