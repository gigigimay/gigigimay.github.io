import type { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface ExperienceInfo {
  title: string
  company: string
  logo: string
  logoClass?: string
  date: string
  description: string
}

export interface TechStack {
  name: string
  img: string
  url: string
}

export interface ProjectInfo {
  title: string
  description: string
  year: number
  visitLink?: string
  repoLink?: string
  isPublic?: boolean
  techStacks: TechStack[]
}

export interface Contact {
  name: string
  url: string
  faIcon: IconProp
}
