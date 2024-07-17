import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { Census, PersonType } from '@/custom/types';
import { Person } from '@/custom/classes'

import { generatePerson } from '@/stores/generation/generators'




export const usePopulationStore = defineStore('population', () => {
  const count = ref(0);
  const census: Census = {};
  
  function increment() {
    count.value++
  };

  function addPerson(personData: PersonType) {
    count.value++;
    const id = `${count.value}`;
    personData.id = id
    const person = new Person(personData)
    census[id] = person;
 };

 function generateNewPerson(birthYear:number) {
  const personData: PersonType = generatePerson({birthYear})
  return personData
 }


  return { count, census, increment, addPerson, generateNewPerson }
})
