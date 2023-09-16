<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const hideButtonPaths = ['/configure', '/quiz']

const showButton = computed(() => {
  return !hideButtonPaths.includes(route.path)
})
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <button type="button" tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/scores">Scores</RouterLink></li>
          <li><RouterLink to="/configure">New quiz</RouterLink></li>
        </ul>
      </div>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 text-lg">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/scores">Scores</RouterLink></li>
      </ul>
    </div>
    <div class="navbar-end">
      <RouterLink v-if="showButton" to="/configure" class="btn">New quiz</RouterLink>
    </div>
  </div>
</template>
