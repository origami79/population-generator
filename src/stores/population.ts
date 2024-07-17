import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { Census } from '@/types/types';

import { generatePerson } from '@/stores/generation/generators'




export const usePopulationStore = defineStore('population', () => {
  const count = ref(0);
  const census: Census = {};
  
  function increment() {
    count.value++
  }

  function addPerson(birthYear:number) {
    count.value++;
    const id = `${count.value}`;
    const person = generatePerson({birthYear})
    person.id = id
    census[id] = person;
 }


  return { count, census, increment, addPerson }
})
