import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import ConfigureQuiz from '@/views/quizConfig/ConfigureQuiz.vue'
import ScoresView from '@/views/scores/ScoresView.vue'
import QuizQuestions from '@/views/questionsDisplay/QuizQuestions.vue'
import QuizResult from '@/views/result/QuizResult.vue'
import ErrorDisplay from '@/views/questionsDisplay/error/ErrorDisplay.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/configure',
      name: 'configure',
      component: ConfigureQuiz
    },
    {
      path: '/scores',
      name: 'scores',
      component: ScoresView
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: QuizQuestions
    },
    {
      path: '/result',
      name: 'result',
      component: QuizResult
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorDisplay
    }
  ]
})

export default router
