<template>
  <main>
    <h4>create person ex nihlo here</h4>
    <div class="column">
      <h2>Create Person</h2>
      <p>Enter a birth year for this person, or leave it blank.</p>
      <div class="input-group">
        <input type="number" v-model="birthYear" >
        <span class="input-group-btn">
         <button @click="createExNihlo(birthYear)" id="generate-person" class="btn btn-default">Generate</button>
         <button @click="savePerson()" id="save-person">Save</button>
       </span>
       <PersonDisplay v-if="personData" :personData="personData"/>
      </div>
      <table id="person-display">
      </table>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { usePopulationStore } from '@/stores/population';

import PersonDisplay from './PersonDisplay.vue';

const birthYear = ref<number>(0)
const personData = ref()

const populationStore = usePopulationStore();
const { addPerson, generateNewPerson } = populationStore

const createExNihlo = (year:number) => {
  const newPerson = generateNewPerson(year)
  personData.value = newPerson
};

const savePerson = () => {
  addPerson(personData.value)
}
</script>

<style scoped>
body{
  font-family: 'Montserrat', sans-serif;
  margin: 20px 20px auto;
}
a{
  color: #248F8F;
}
a:hover{
  text-decoration: none;
  color: #33CCCC;
}

.button{
  display: inline-block;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
}
.button:hover{
  background-color:#248F8F;
  color:#fff;
}

code{
  color:#248F8F;
}

.options {
  display: flex;
  flex-direction: row;
}

.column {
  width: 50%;
  padding: 20px;
}

table {
  border: 1px solid black;
  width: 95%;
}

td, th {
  border: 1px solid black;
  width: 50%;
  text-align: center
}
</style>