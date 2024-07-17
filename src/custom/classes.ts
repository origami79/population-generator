import type { PersonType }  from '@/custom/types'

class Person {
  id: string;
  birthYear: number;
  deathYear: number;
  infertilityYear: number;
  sex: string;
  firstBirthYear: number | null;
  family?: string;
  motherId?: string;
  motherFamily?: string;
  fatherId?: string;
  fatherFamily?: string;

  constructor(data: PersonType) {
    this.id = data.id;
    this.birthYear = data.birthYear;
    this.deathYear = data.deathYear;
    this.infertilityYear = data.infertilityYear;
    this.sex = data.sex;
    this.firstBirthYear = data.firstBirthYear
  }

  lifespan() {
    return this.deathYear - this.birthYear
  }
  ageAtInfertility() {
    return this.infertilityYear - this.birthYear
  }
  ageAtFirstBirth() {
    if (this.firstBirthYear) {
      return this.firstBirthYear - this.birthYear
    } else {
      return null
    }
  }
}

export { Person }