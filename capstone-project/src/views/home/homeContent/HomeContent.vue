<script setup lang="ts">
import HomeButtons from './HomeButtons.vue'
</script>

<template>
  <div class="max-w-md" data-testid="greeting">
    <h1 class="text-4xl font-bold">Welcome to tech quizzes!</h1>
    <p class="py-4">
      Test your technical knowledge by solving a quiz based on a chosen tech category.
    </p>
    <HomeButtons />
  </div>
</template>
