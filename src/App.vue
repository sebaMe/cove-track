<template>
  <header class="flex items-center justify-between shadow">
    <h1 class="text-primary-dark">Cove/Tracker</h1>
    <div class="nav-icons flex">
      <BaseButton icon="globe"></BaseButton>
      <BaseButton icon="search"></BaseButton>
    </div>
  </header>
  <aside>
    <nav></nav>
  </aside>
  <main class="p-2">
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts">
  import BaseButton from '@/components/BaseButton.vue'
</script>
