<template>
  <main>
    <TheWelcome />
    <CensusTable :population="census" />
  </main>
</template>

<script setup lang="ts">

import TheWelcome from '../components/TheWelcome.vue'
import CensusTable from '../components/census/CensusTable.vue'

import { usePopulationStore } from '@/stores/population';

const population = usePopulationStore();
const census = population.census
</script>