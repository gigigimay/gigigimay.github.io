import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export const StarButton = ({ onClick }: { onClick: () => unknown }) => {
  return (
    <button
      className={classNames(
        'group icon-btn',
        // 'absolute -left-4 -top-3 -translate-x-1/2 -translate-y-1/2',
        'mb-4 sm:mb-8'
      )}
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faStar}
        className={classNames(
          'w-8 h-8 animate-spin-slow'
          // 'drop-shadow-[0px_0px_4px_var(--b1)]'
        )}
      />
    </button>
  )
}
