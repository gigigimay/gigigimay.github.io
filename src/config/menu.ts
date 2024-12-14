import {
  faHashtag,
  faUser,
  faSuitcase,
  faCode,
  faMailBulk,
} from '@fortawesome/free-solid-svg-icons'
import { MenuItemProps } from 'types'

export const menuItems: MenuItemProps[] = [
  { icon: faHashtag, label: 'Home', link: '#top' },
  { icon: faUser, label: 'About Me', link: '#about-me' },
  { icon: faSuitcase, label: 'Experience & Education', link: '#experience' },
  { icon: faCode, label: 'Projects', link: '#projects' },
  { icon: faMailBulk, label: 'Get In Touch', link: '#contact' },
]
