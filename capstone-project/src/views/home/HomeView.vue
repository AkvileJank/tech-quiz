<script setup lang="ts">
import HomeImage from './homeImage/HomeImage.vue'
import HomeContent from './homeContent/HomeContent.vue'
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content pt-0 text-center flex-col md:flex-row">
      <HomeImage />
      <HomeContent />
    </div>
  </div>
</template>
