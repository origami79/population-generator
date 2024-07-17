import { Person } from "./classes"

type PersonType = {
  id: string
  birthYear: number
  deathYear: number
  infertilityYear: number
  sex: string
  firstBirthYear: number | null
  family?: string
  motherId?: string
  motherFamily?: string
  fatherId?: string
  fatherFamily?: string
}

interface Census {
  [key:string]: PersonType | Person
}

export type { PersonType, Census }