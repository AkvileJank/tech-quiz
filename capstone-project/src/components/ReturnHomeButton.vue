<script setup lang="ts">
import type { Router } from 'vue-router'

const props = defineProps<{
  router: Router
}>()

function returnHome(router: Router) {
  router.push({ name: 'home' })
}
</script>
<template>
  <div class="flex justify-center mb-5">
    <button type="button" class="btn btn-outline btn-accent" @click="returnHome(props.router)">
      Return Home
    </button>
  </div>
</template>
