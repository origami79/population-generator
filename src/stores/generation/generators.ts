import { genders, lifespan, infertility, firstChildBirth } from '@/stores/generation/rngTables'
// import { roll6, roll10, roll20 } from '@/stores/generation/dice'

const generatePerson = function(data: { birthYear: number, motherId?: string }) {
  const birthYear = data.birthYear
  const sex = findSex();
  const lifespan = findLifespan();
  const deathYear =  birthYear + lifespan;
  const infertilityAge = findInfertilityAge(sex);
  let infertilityYear;
  if (lifespan >= 14 && infertilityAge <= lifespan) {
    infertilityYear = birthYear + infertilityAge;
  } else {
    infertilityYear = deathYear;
  }
  const ageAtFirstChildBirth = findAgeOfFirstBirth();
  let firstBirthYear;
  if (sex == "F" && ageAtFirstChildBirth <= infertilityAge) {
    firstBirthYear = birthYear + ageAtFirstChildBirth
  } else {
    firstBirthYear = null;
  }
  const person = {
    id: '',
    birthYear,
    deathYear,
    infertilityYear,
    sex,
    firstBirthYear
  }
  return person
};

const findSex = function() {
  const roll = Math.floor(Math.random() * (2))
  return genders[roll]
};

const findLifespan = function() {
  const roll = Math.floor(Math.random() * (1000))
  const age = lifespan.findIndex((range) => {
    const low = range[0]
    const high = range[1]
    return roll >= low && roll <= high
  })
  return age
}

const findInfertilityAge = function(sex: string) {
  const roll = Math.floor(Math.random() * (1000))
  let age = infertility.findIndex((range) => {
    const low = range[0]
    const high = range[1]
    return roll >= low && roll <= high
  }) + 15
  if (sex == "M") {
    const maleRoll = Math.floor(Math.random() * (25 - 10 + 1) + 10);
    age += maleRoll;
  }
  return age
};

const findAgeOfFirstBirth = function() {
  const roll = Math.floor(Math.random() * (1000))
  const age = firstChildBirth.findIndex((range) => {
    const low = range[0]
    const high = range[1]
    return roll >= low && roll <= high
  }) + 14
  return age
};

// const findNextBirth = function(currentAge: number) {
//   let years;
//   if (currentAge <= 34) {
//     const firstRoll = roll6();
//     const secondRoll = roll6();
//     years = firstRoll < secondRoll ? firstRoll : secondRoll;
//   } else if (currentAge <=40) {
//     const firstRoll = roll10();
//     const secondRoll = roll20();
//     years = firstRoll < secondRoll ? firstRoll : secondRoll;
//   } else {
//     const firstRoll = roll20();
//     const secondRoll = roll20();
//     years = firstRoll < secondRoll ? firstRoll : secondRoll;
//   }
//   if (years == 1) {
//     const multiplesRoll = roll20();
//     years = multiplesRoll == 1 ? years : 1;
//   }
//   return years
// }

export { generatePerson }