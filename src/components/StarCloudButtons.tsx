import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faStar } from '@fortawesome/free-solid-svg-icons'
import { TooltipBox } from './TooltipBox'

export const StarButton = ({ onClick }: { onClick: () => unknown }) => {
  return (
    <TooltipBox
      tooltipContent="What if we rewrite the stars?"
      placement="top"
      className="mb-4 sm:mb-8"
    >
      <button className="icon-btn block" onClick={onClick}>
        <FontAwesomeIcon
          icon={faStar}
          className="w-8 h-8 animate-spin-slow block"
        />
      </button>
    </TooltipBox>
  )
}

export const CloudButton = ({ onClick }: { onClick: () => unknown }) => {
  return (
    <TooltipBox
      tooltipContent="Tonight's forecast: cloudy!"
      placement="top"
      className="mb-4 sm:mb-8"
    >
      <button className="icon-btn block" onClick={onClick}>
        <FontAwesomeIcon icon={faCloud} className="w-8 h-8 block" />
      </button>
    </TooltipBox>
  )
}
