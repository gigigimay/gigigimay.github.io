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
  visitLink?: string
  repoLink?: string
  isPublic?: boolean
  techStacks: TechStack[]
}
