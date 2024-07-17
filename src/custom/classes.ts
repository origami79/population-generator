import type { PersonType }  from '@/custom/types'

class Person {
  id: string;
  sex: string;
  birthYear: number;
  deathYear: number;
  lifespan: number;
  infertilityYear: number;
  ageAtInfertility: number;
  firstBirthYear: number | null;
  ageAtFirstBirth: number | null;
  family?: string;
  motherId?: string;
  motherFamily?: string;
  fatherId?: string;
  fatherFamily?: string;

  constructor(data: PersonType) {
    this.id = data.id;
    this.sex = data.sex;
    this.birthYear = data.birthYear;
    this.deathYear = data.deathYear;
    this.lifespan =  data.deathYear - data.birthYear
    this.infertilityYear = data.infertilityYear;
    this.ageAtInfertility = data.infertilityYear - data.birthYear
    this.firstBirthYear = data.firstBirthYear
    this.ageAtFirstBirth = data.firstBirthYear ? data.firstBirthYear - data.birthYear : null
  }
}

export { Person }