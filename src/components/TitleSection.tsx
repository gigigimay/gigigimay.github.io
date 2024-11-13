import classNames from 'classnames'
import { Stars } from 'components/Stars'
import { useState } from 'react'
import { Parallax } from 'react-scroll-parallax'
import StarIcon from 'assets/icons/icon-star.svg?react'

const TitleSection = ({ isIntroDone }: { isIntroDone: boolean }) => {
  const [starsRand, setStarsRand] = useState({})

  return (
    <div
      className={classNames(
        'screen-section relative text-gray-100 overflow-hidden',
        'bg-gradient-to-b from-gray-900 to-blue-950 to-90%'
      )}
    >
      <Stars rand={starsRand} />
      <div className="p-8 z-10 text-center flex items-center flex-col">
        <p className="text-xl sm:text-3xl font-light backdrop-blur-sm">
          Hello, I am
        </p>
        <h1
          className={classNames(
            'text-6xl sm:text-8xl transition-all font-extrabold tracking-wide',
            'drop-shadow-[0_0_8px_#71d9ce88] backdrop-blur-sm',
            'mb-4 sm:mb-8 mt-2 sm:mt-4'
          )}
        >
          Maytiya
        </h1>
        <p
          className={classNames(
            'text-lg sm:text-2xl font-light',
            'backdrop-blur-sm'
          )}
        >
          A full-stack software engineer
        </p>
        <div className="mt-6">
          <button
            onClick={() => setStarsRand({})}
            className={classNames(
              'text-white animate-pulse',
              'transition-all hover:scale-110 active:rotate-12 hover:animate-none'
            )}
          >
            <StarIcon className="w-8" />
          </button>
        </div>
      </div>
      <Parallax
        speed={-5}
        className={classNames(
          'absolute -bottom-8 transition-opacity opacity-0 font-extralight tracking-widest',
          isIntroDone && 'animate-pulse'
        )}
      >
        Please scroll down
      </Parallax>
    </div>
  )
}

export default TitleSection
