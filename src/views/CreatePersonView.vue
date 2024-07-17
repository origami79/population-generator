<template>
  <main>
    <h3>create people here</h3>
    <createExNihlo />
  </main>
</template>

<script setup lang="ts">
import createExNihlo from '@/components/createPerson/CreateExNihlo.vue';

import { usePopulationStore } from '@/stores/population';

const population = usePopulationStore();
const census = population.census
</script>