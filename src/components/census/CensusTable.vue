<template>
  <div>
    <h3>Full Census</h3>
    <table>
      <tbody>
        <tr>
          <td v-for="(header, _key, i) in headerList" :key="i">
            {{ header }}
          </td>
        </tr>
        <tr
        v-for="(person, id) in population"
        :key="id"
        >
          <td v-for="(_header, attribute, i) in headerList" :key="i">
            {{ person[attribute] }}
          </td>
      </tr>
    </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
  defineProps(['population'])

  const headerList = {
    id: 'ID',
    sex: 'Sex',
    birthYear: 'Birth Year',
    deathYear: 'Death Year',
    lifespan: 'Lifespan',
    infertilityYear: 'Infertility Year',
    ageAtInfertility: 'Age at Infertility',
    firstBirthYear: 'First Birth Year',
    ageAtFirstBirth: 'Age at First Birth',
    family: 'Family',
    motherId: 'Mother ID',
    motherFamily:'Mother Family',
    fatherId: 'Father ID',
    fatherFamily: 'Father Family'
  }
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
</style>