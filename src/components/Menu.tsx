import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { useEffect } from 'react'
import { TooltipBox } from './TooltipBox'
import { MenuItemProps } from 'types'
import { menuItems } from 'config/menu'
import { useLocation, useNavigate } from 'react-router'
import { sendEvent } from 'services/ga'

const MenuItem = ({ icon, label, link }: MenuItemProps) => {
  const navigate = useNavigate()

  return (
    <TooltipBox
      className="icon-btn text-center text-xl p-1"
      tooltipContent={label}
      placement="left"
    >
      <a
        href={link}
        aria-label={label}
        onClick={(e) => {
          e.preventDefault()
          sendEvent('menu_click', { label })
          navigate(link)
        }}
      >
        <FontAwesomeIcon icon={icon} className="block mx-auto" />
      </a>
    </TooltipBox>
  )
}

export const Menu = () => {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    document.querySelector(location.hash)?.scrollIntoView({
      behavior: 'smooth',
    })
  }, [location.hash])

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
