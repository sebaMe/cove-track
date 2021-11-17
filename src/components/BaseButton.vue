<template>
  <button
    class="
      flex
      items-center
      text-3xl
      p-2
      text-primary-dark
      border-primary-dark border-b-2 border-opacity-0
      hover:border-opacity-100
      transition-all
      duration-500
    "
  >
    <font-awesome-icon v-if="icon" :icon="icon" />
    <div v-if="text" class="text-base font-headline ml-2">{{ text }}</div>
  </button>
</template>

<script setup lang="ts">
  defineProps<{ icon?: string; text?: string }>()
</script>
