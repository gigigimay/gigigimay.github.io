import classNames from 'classnames'
import { Stars } from 'components/Stars'

import { Parallax } from 'react-scroll-parallax'

const TitleSection = ({ isIntroDone }: { isIntroDone: boolean }) => {
  return (
    <div className="screen-section relative bg-gray-900 text-gray-100 overflow-hidden">
      <Stars />
      <div className="transition-colors duration-500 p-8 z-10">
        <span className="text-3xl sm:text-5xl">Hello, I am</span>
        <h1 className="text-5xl sm:text-8xl text-[#71d9ce] transition-colors font-bold">
          Maytiya
          <br />
          Monburinon.
        </h1>
        <p
          className={classNames(
            'uppercase font-light text-xl sm:text-3xl tracking-widest',
            'mt-2 opacity-60'
          )}
        >
          A full-stack software engineer
        </p>
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
