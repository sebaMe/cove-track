<template>
  <div class="card inline-flex flex-col shadow-sm">
    <h1 class="header p-1 bg-primary-dark text-light text-center">
      {{ title }}
    </h1>
    <div class="body"><slot></slot></div>
    <div class="footer"><slot name="footer"></slot></div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{ title?: string }>()
</script>
