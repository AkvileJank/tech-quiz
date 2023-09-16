import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Session } from '@/views/questionsDisplay/QuizQuestions.vue'

const useAllSessionsStore = defineStore(
  'allSessions',
  () => {
    const allSessions = ref<Session[]>([])
    function addLastSession(session: Session) {
      allSessions.value.push(session)
    }
    return { allSessions, addLastSession }
  },
  { persist: true }
)

export default useAllSessionsStore
