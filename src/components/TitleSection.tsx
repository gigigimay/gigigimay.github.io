import classNames from 'classnames'
import { Stars } from 'components/Stars'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Waves } from './Waves'
import { ContactButtons } from './ContactButtons'

export const TitleSection = ({ isIntroDone }: { isIntroDone: boolean }) => {
  const [starsRand, setStarsRand] = useState({})

  return (
    <div
      className={classNames(
        'screen-section min-h-[90dvh] relative text-gray-100 overflow-hidden',
        'bg-gradient-to-b from-gray-900 to-blue-950 to-90%'
      )}
    >
      <Stars rand={starsRand} />
      <div
        className={classNames(
          'absolute inset-0 bg-gradient-to-r from-black/50 to-transparent',
          'transition-all ease-in duration-[500ms] opacity-0',
          isIntroDone && 'opacity-100'
        )}
      />
      <div
        className={classNames(
          'container relative p-8 z-10 text-left flex items-start flex-col'
        )}
      >
        <p className="text-xl sm:text-3xl text-[var(--b1)]">Hi there! I'm-</p>
        <h1
          className={classNames(
            'text-6xl sm:text-7xl transition-all font-black tracking-normal',
            'mb-4 sm:mb-12'
          )}
        >
          Maytiya Monburinon.
        </h1>
        <p className={classNames('text-lg sm:text-3xl')}>
          Full-stack Software Engineer.
          <span className="text-body"> Specialized in React and Node.js.</span>
        </p>
        <ContactButtons />
        <button
          className={classNames(
            'group absolute left-2 top-2 -translate-x-1/2 -translate-y-1/2',
            'transition-all hover:scale-110 active:rotate-12'
          )}
          onClick={() => setStarsRand({})}
        >
          <FontAwesomeIcon
            icon={faStar}
            className={classNames(
              'w-8 h-8 animate-spin-slow'
              // 'drop-shadow-[0px_0px_4px_var(--b1)]'
            )}
          />
        </button>
      </div>
      <Waves fill="black" />
    </div>
  )
}
