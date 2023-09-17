import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/HomeView.vue')
    },
    {
      path: '/configure',
      name: 'configure',
      component: () => import('@/views/quizConfig/ConfigureQuiz.vue')
    },
    {
      path: '/scores',
      name: 'scores',
      component: () => import('@/views/scores/ScoresView.vue')
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: () => import('@/views/questionsDisplay/QuizQuestions.vue')
    },
    {
      path: '/result',
      name: 'result',
      component: () => import('@/views/result/QuizResult.vue')
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('@/views/questionsDisplay/error/ErrorDisplay.vue')
    }
  ]
})

export default router
