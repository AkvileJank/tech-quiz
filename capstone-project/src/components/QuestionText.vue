<script setup lang="ts">
import type { Question } from '../views/questionsDisplay/QuizQuestions.vue'

defineProps<{
  question: Question,
  objKey: number
}>()
</script>

<template>
    <h2 class="text-xl font-bold py-4">{{ `Question ${objKey + 1}` }}</h2>
    <p class="text-lg pb-3">{{ question.question }}</p>
</template>
