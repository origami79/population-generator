<template>
  <div>
    <button id="save-edits" @click="updatePerson()">Keep Modifications</button>
    <div>Sex : {{ personData.sex }}</div>
    <form id="edit-person">
      <div>
        <label for="birthYear">Birth Year</label>
        <input id="birthYear" required="true" v-model="updatedPerson.birthYear">
      </div>
      <div>
        <label for="deathYear">Death Year</label>
        <input id="deathYear" required="true" v-model="updatedPerson.deathYear">
      </div>
      <div>Lifespan : {{ updatedPerson.deathYear - updatedPerson.birthYear }}</div>
      <div>
        <label for="infertilityYear">Infertility Year</label>
        <input id="infertilityYear" required="true" v-model="updatedPerson.infertilityYear">
      </div>
      <div>Age at Infertility : {{ updatedPerson.infertilityYear - updatedPerson.birthYear }}</div>
      <div>
        <label for="firstBirthYear">First Birth Year</label>
        <input id="firstBirthYear" v-model="updatedPerson.firstBirthYear">
      </div>
      <div>Age at First Birth : {{ updatedPerson.firstBirthYear ? updatedPerson.firstBirthYear - updatedPerson.birthYear : null }}</div>
      <div>
        <label for="family">Family</label>
        <input id="family" v-model="updatedPerson.family">
      </div>
      <div>
        <label for="motherId">Mother ID</label>
        <input id="motherId" v-model="updatedPerson.motherId">
      </div>
      <div>
        <label for="motherFamily">Mother Family</label>
        <input id="motherFamily" v-model="updatedPerson.motherFamily">
      </div>
      <div>
        <label for="fatherId">Father ID</label>
        <input id="fatherId" v-model="updatedPerson.fatherId">
      </div>
      <div>
        <label for="fatherFamily">Father Family</label>
        <input id="fatherFamily" v-model="updatedPerson.fatherFamily">
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
  import type { PersonType } from '@/custom/types';
  import { ref } from 'vue';
  
  const props = defineProps<{
    personData: PersonType
  }>()

  const emit = defineEmits({
    modifyPerson: (data) => {
      console.log("emit check", {data})
    if (data.deathYear > data.birthYear) {
      return true
    } else {
      console.warn('Invalid submit event payload!')
      return false
    }
  }
})

  const updatePerson = () => {
    emit('modifyPerson', updatedPerson)
  }

  const updatedPerson = ref(
    {
      id: props.personData.id,
      birthYear: props.personData.birthYear,
      deathYear: props.personData.deathYear,
      infertilityYear: props.personData.infertilityYear,
      sex: props.personData.sex,
      firstBirthYear: props.personData.firstBirthYear,
      family: props.personData.family ? props.personData.family : null,
      motherId: props.personData.motherId ? props.personData.motherId : null,
      motherFamily: props.personData.motherFamily ? props.personData.motherFamily : null,
      fatherId: props.personData.fatherId ? props.personData.fatherId : null,
      fatherFamily: props.personData.fatherFamily ? props.personData.fatherFamily : null
    }
  )
</script>

<style scoped>
  table {
    border: 1px solid black;
    width: 95%;
  }

  td, th {
    border: 1px solid black;
    width: 50%;
    text-align: center
  }

  input {
    max-width: 100px;
  }
</style>