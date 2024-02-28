import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Question, Session } from '@/views/questionsDisplay/QuizQuestions.vue'

const useSingleSessionStore = defineStore(
  'currentSession',
  () => {
    const date = ref<string>(new Date().toLocaleDateString('en-CA'))
    const sessionScore = ref(0)
    const sessionCategory = ref('')
    const sessionQuestions = ref<Question[]>([])

    function selectNewSession(session: Session) {
      date.value = session.date
      sessionScore.value = session.sessionScore
      sessionCategory.value = session.sessionCategory
      sessionQuestions.value = session.sessionQuestions
    }
    function createSessionObject(): Session {
      return {
        date: date.value,
        sessionScore: sessionScore.value,
        sessionCategory: sessionCategory.value,
        sessionQuestions: sessionQuestions.value
      }
    }
    return {
      date,
      sessionScore,
      sessionCategory,
      sessionQuestions,
      selectNewSession,
      createSessionObject
    }
  },
  { persist: true }
)

export default useSingleSessionStore
