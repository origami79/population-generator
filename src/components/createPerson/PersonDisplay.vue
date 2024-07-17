<template>
  <div>
    <table id="person-display">
      <tbody>
        <tr v-for="(info, infoType, index) in personData" :key="index">
          <td>{{ infoType }}</td>
          <td>{{ info }}</td>
        </tr>
        <tr>
          <td>lifespan</td>
          <td>{{ personData.deathYear - personData.birthYear }}</td>
        </tr>
        <tr>
          <td>age when infertile</td>
          <td>{{ personData.infertilityYear - personData.birthYear }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
  import type { PersonType } from '@/custom/types';
  
  defineProps<{
    personData: PersonType
  }>()

</script>

<style scoped>

</style>