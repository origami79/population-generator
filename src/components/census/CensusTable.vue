<template>
  <div>
    <h3>Full Census</h3>
    <ul>
      <li
      v-for="(person, id) in population"
      v-bind:key="id"
      >
        {{ id }} - {{ person }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  defineProps(['population'])
</script>

<style scoped>
</style>