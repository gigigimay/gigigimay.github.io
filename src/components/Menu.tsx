import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faCode,
  faHashtag,
  faMailBulk,
  faSuitcase,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { useEffect, useState } from 'react'

interface MenuItemProps {
  icon: IconProp
  label: string
  link: string
}

const MenuItem = ({ icon, label, link }: MenuItemProps) => {
  return (
    <a
      className="group transition-all hover:scale-110 active:rotate-12 text-center text-xl p-1"
      href={link}
      onClick={(e) => {
        e.preventDefault()
        document.querySelector(link)?.scrollIntoView({
          behavior: 'smooth',
        })
      }}
    >
      <FontAwesomeIcon icon={icon} className="block mx-auto" />
    </a>
  )
}

const menuItems: MenuItemProps[] = [
  { icon: faHashtag, label: 'Home', link: '#top' },
  { icon: faUser, label: 'About Me', link: '#about-me' },
  { icon: faSuitcase, label: 'Experience & Education', link: '#experience' },
  { icon: faCode, label: 'Side Projects', link: '#projects' },
  { icon: faMailBulk, label: 'Contact', link: '#contact' },
]

export const Menu = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollPercent = window.scrollY / window.innerHeight
      setScrolled((prev) => {
        if (!prev && scrollPercent > 0.7) return true
        if (prev && scrollPercent < 0.6) return false
        return prev
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={classNames(
        'fixed z-20',
        'top-2 left-1/2 -translate-x-1/2',
        'md:right-2 md:left-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-0',
        'transition-colors',
        'mix-blend-difference text-white bg-transparent'
      )}
    >
      <div
        className={classNames(
          'flex flex-row md:flex-col',
          'px-4 py-2 gap-4',
          'md:px-2 md:py-4 md:gap-4'
        )}
      >
        {menuItems.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </div>
    </div>
  )
}
