<script setup lang="ts">
import welcome from './welcome.svg'
</script>

<template>
  <div class="md:flex justify-center">
    <img
      class="object-scale-down max-w-xs md:max-w-lg"
      :src="welcome"
      alt="Image with astronaut and moon"
    />
  </div>
</template>
