<script setup lang="ts">
import { ref, onMounted } from 'vue'
import singleSessionStore from '@/stores/singleSessionStore'
import router from '@/router'
import ScorePercentage from '@/components/ScorePercentage.vue'
import type { Session } from '../questionsDisplay/QuizQuestions.vue'

const props = defineProps<{
  allSessions: Session[]
}>()

const categorizedSessions = ref<Record<string, Session[]>>({})

function categorizeSessions() {
  props.allSessions.forEach(session => {
    if (!categorizedSessions.value[session.sessionCategory]) {
      categorizedSessions.value[session.sessionCategory] = []
    }
    categorizedSessions.value[session.sessionCategory].push(session)
  })
}
function showAttempt(session: Session) {
  singleSessionStore().selectNewSession(session)
  router.push({ name: 'result' })
}
onMounted(() => {
  categorizeSessions()
})
</script>
<template>
  <div
    class="m-3 md: grid-rows"
    v-for="(sessions, category) in categorizedSessions"
    :key="category"
  >
    <h2 class="text-2xl pb-4">{{ category }}</h2>
    <div v-for="session in sessions" :key="session.date">
      <div
        class="grid grid-cols-1 bg-base-200 rounded-box mb-1 p-3 text-lg md:grid-cols-2 md:justify-between"
      >
        <div class="flex justify-evenly p-3 md:justify-between">
          <div>
            <label for="score-bar">Score:</label>
          </div>
          <ScorePercentage :sessionScore="session.sessionScore" />
          <div class="flex items-center">Date: {{ session.date }}</div>
        </div>
        <div class="flex md:justify-end items-center">
          <button
            type="button"
            class="btn btn-accent btn-md w-full md:w-fit"
            @click="showAttempt(session)"
          >
            Questions
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
