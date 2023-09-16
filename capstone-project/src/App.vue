<script setup lang="ts">
import HeaderComp from './components/HeaderComponent.vue'
</script>

<template>
  <header>
    <HeaderComp></HeaderComp>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>
