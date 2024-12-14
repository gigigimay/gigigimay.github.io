import jellyfish from 'assets/images/jellyfish.svg'
import { Parallax } from 'react-scroll-parallax'
import { Waves } from './Waves'
import { TooltipBox } from './TooltipBox'
import classNames from 'classnames'

const Highlightable = ({
  children,
  tooltip,
}: {
  children?: React.ReactNode
  tooltip?: string
}) => {
  return (
    <TooltipBox
      tooltipContent={tooltip}
      placement="bottom"
      className={classNames('inline', tooltip && 'cursor-help')}
      tooltipClassName="max-w-[400px] text-justify"
    >
      <span className="text-[var(--p)]">{children}</span>
    </TooltipBox>
  )
}

export const AboutMeSection = () => {
  return (
    <div className="screen-section relative bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <div id="about-me" className="absolute top-0" />
      <Waves
        fill="rgb(3,7,18)"
        className="bottom-full scale-y-[60%] translate-y-[40%]"
      />

      <div className="container flex flex-col-reverse md:flex-row gap-12">
        <div className="content-right">
          <Parallax
            speed={30}
            className="absolute left-[25%] top-[-4rem] md:top-[2rem] xl:top-[4rem] w-[20%]"
          >
            <img
              src={jellyfish}
              className="w-full animate-jellyfish"
              style={{ animationDelay: '-1.5s' }}
            />
          </Parallax>
          <Parallax
            speed={40}
            className="absolute left-[0%] top-[-4rem] md:top-[6rem] xl:top-[8rem] w-[30%]"
          >
            <img
              src={jellyfish}
              className="w-full animate-jellyfish"
              style={{ animationDelay: '-1s' }}
            />
          </Parallax>
          <Parallax
            speed={50}
            className="absolute left-[40%] top-[-4rem] md:top-[8rem] xl:top-[10rem] w-[45%]"
          >
            <img
              src={jellyfish}
              className="w-full animate-jellyfish"
              style={{ animationDelay: '-0.5s' }}
            />
          </Parallax>
        </div>

        <div className="content-left text-justify text-body text-sm md:text-lg">
          <h1 className="text-3xl text-white font-black text-right">
            <span className="text-[var(--p)]">A</span>bout me
          </h1>
          <p className="mt-6">
            Hi, I'm Maytiya Monburinon—or just May! As a software engineer with{' '}
            <Highlightable>over 4 years of experience</Highlightable>, I've
            worked on a variety of{' '}
            <Highlightable>multi-tenant SaaS products</Highlightable>, guided
            teams, and mentored junior developers. My expertise lies in{' '}
            <Highlightable>React and Node.js</Highlightable>, and I'm passionate
            about crafting aesthetically pleasing and impactful websites that
            truly make a difference for users. I value writing clean,
            high-quality code, and I'm currently into exploring new technologies
            to create unique, engaging visuals.
          </p>
        </div>
      </div>
    </div>
  )
}

/**
 * LONG VERSION:
Hello there, I'm Maytiya Monburinon—or just May! My fascination with programming started at an early age, back in 2010, I really liked building things with no/low-code tools. The satisfaction of making things work sparked an interest that eventually led me to software engineering.

Today, as a software engineer with over 4 years of experience, I've worked on a variety of SaaS products, guided teams, and mentoring junior developers. My expertise lies in React and Node.js, and I'm passionate about crafting aesthetically pleasing and impactful websites that truly make a difference for users. I value writing clean, high-quality code, and I'm currently into exploring new technologies to create unique, engaging visuals.

When I'm not coding, you can find me playing video games, binge-watching Netflix, reading books, or playing music. 😋

 */
