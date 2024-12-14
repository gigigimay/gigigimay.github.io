import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileLines } from '@fortawesome/free-solid-svg-icons'
import { Contact } from 'types'

export const resumeContact: Contact = {
  name: 'Resume',
  url: 'https://drive.google.com/file/d/1zFZFhHophZIH-ron6-RD_eiD1cznt_A3/view?usp=sharing',
  faIcon: faFileLines,
}

export const contacts: Contact[] = [
  {
    name: 'Github',
    url: 'https://github.com/gigigimay',
    faIcon: faGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/maytiya-monburinon-275640172/',
    faIcon: faLinkedin,
  },
  {
    name: 'Email',
    url: 'mailto:maytiya41@gmail.com',
    faIcon: faEnvelope,
  },
  resumeContact,
]
