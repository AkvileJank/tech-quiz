<script setup lang="ts">
import errorImg from './error.svg'
</script>
<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content pt-0 text-center flex-col">
      <h1 class="text-center pb-10 text-3xl font-bold">Sorry, the quiz could not be loaded.</h1>
      <img :src="errorImg" alt="Error occurred" class="object-scale-down max-w-xs md:max-w-lg" />
    </div>
  </div>
</template>
