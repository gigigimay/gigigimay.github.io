import classNames from 'classnames'
import { Stars } from 'components/Stars'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
// import { ContactButtons } from './ContactButtons'

const StarsButton = ({ onClick }: { onClick: () => unknown }) => {
  return (
    <button
      className={classNames(
        'group',
        // 'absolute -left-4 -top-3 -translate-x-1/2 -translate-y-1/2',
        'mb-4 sm:mb-8',
        'transition-all hover:scale-110 active:rotate-12'
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

export const TitleSection = ({ isIntroDone }: { isIntroDone: boolean }) => {
  const [starsRand, setStarsRand] = useState({})

  return (
    <div
      className={classNames(
        'screen-section h-[calc(100dvh-3rem)] relative text-gray-100 overflow-hidden',
        'bg-gradient-to-b from-gray-900 to-blue-950 to-90%'
      )}
    >
      <div id="top" className="absolute top-0" />
      <Stars rand={starsRand} />

      <div
        // black shade overlay
        className={classNames(
          'absolute inset-0 bg-gradient-to-r from-black/50 to-transparent',
          'transition-all ease-in duration-[500ms] opacity-0',
          isIntroDone && 'opacity-100'
        )}
      />

      <div
        className={classNames(
          'container relative z-10 text-left flex items-start flex-col'
        )}
      >
        <StarsButton onClick={() => setStarsRand({})} />
        <p className="text-xl sm:text-3xl text-[var(--p)]">Hi there! I'm-</p>
        <h1
          className={classNames(
            'text-5xl sm:text-7xl transition-all font-black tracking-normal',
            'mb-4 sm:mb-12'
          )}
        >
          Maytiya Monburinon.
        </h1>
        <p className={classNames('text-lg sm:text-3xl')}>
          Software Engineer,
          <span className="text-body"> specialized in React and Node.js.</span>
        </p>
        {/* <ContactButtons /> */}
      </div>
    </div>
  )
}
