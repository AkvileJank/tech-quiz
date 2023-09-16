<script setup lang="ts">
import { useRoute } from 'vue-router'

defineProps<{
  sessionScore: number
}>()

const route = useRoute()
function getSize() {
  if (route.name === 'scores') return '2.8rem'
  return '4rem'
}

</script>

<template>
  <div class="flex justify-center" data-testid="score">
    <div
      class="radial-progress text-accent"
      :style="{ '--value': sessionScore, '--size': getSize() }"
      :class="[route.name === 'result' ? 'text-lg' : 'text-xs']"
    >
      {{ `${sessionScore}%` }}
    </div>
  </div>
</template>
