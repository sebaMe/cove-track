<template>
  <BaseCard v-if="data" :title="statistic?.country">
    <ul class="px-1">
      <li
        class="flex items-center justify-between border-b-2 border-primary-dark"
      >
        <font-awesome-icon class="text-primary-dark" icon="sync" />
        <div>{{ lastUpdate }}</div>
      </li>
      <li class="flex items-center justify-between">
        <font-awesome-icon class="text-primary-dark" icon="virus" />
        <div>{{ statistic?.cases.total }}</div>
      </li>
      <li
        class="flex items-center justify-between border-b-2 border-primary-dark"
      >
        <font-awesome-icon class="text-primary-dark" icon="chart-line" />
        <div>{{ statistic?.cases.new }}</div>
      </li>
      <li class="flex items-center justify-between">
        <font-awesome-icon class="text-primary-dark" icon="skull-crossbones" />
        <div>{{ statistic?.deaths.total }}</div>
      </li>
      <li class="flex items-center justify-between">
        <font-awesome-icon class="text-primary-dark" icon="chart-line" />
        <div>{{ statistic?.deaths.new }}</div>
      </li>
    </ul>
  </BaseCard>
  <div v-if="error" class="text-danger">{{ error }}</div>
</template>

<script setup lang="ts">
  import { useFetch, UseFetchReturn, useTimeAgo } from '@vueuse/core'
  import { onMounted, computed } from '@vue/runtime-core'
  import BaseCard from '@/components/BaseCard.vue'
  import { COVID_19_API_HOST, COVID_19_API_KEY } from '../../config'
  import { StatisticsResponse } from '@/interfaces/external'

  const {
    isFetching,
    error,
    data,
    execute,
  }: UseFetchReturn<StatisticsResponse> = useFetch(
    'https://covid-193.p.rapidapi.com/statistics?country=Spain',
    {
      headers: {
        'x-rapidapi-host': COVID_19_API_HOST,
        'x-rapidapi-key': COVID_19_API_KEY,
      },
    },
    { immediate: false }
  )
    .get()
    .json()

  const statistic = computed(() => data.value?.response[0])
  const lastUpdate = computed(() => {
    return statistic.value?.time
      ? useTimeAgo(statistic.value?.time)?.value?.replace('"', '')
      : null
  })

  onMounted(() => {
    execute()
  })
</script>
