import jellyfish from 'assets/images/jellyfish.svg'
import { Parallax } from 'react-scroll-parallax'
import { Waves } from './Waves'

export const AboutMeSection = () => {
  return (
    <div className="screen-section relative bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <div id="about-me" className="absolute top-0" />
      <Waves
        fill="rgb(3,7,18)"
        className="bottom-full scale-y-[60%] translate-y-[40%]"
      />
      <div className="container flex flex-col md:flex-row space-x-12">
        <div className="content-left">
          <h1 className="text-3xl font-black">
            <span className="text-[var(--p)]">A</span>bout me
          </h1>
          <p className="text-lg mt-6 text-body">
            Hello there, I'm Maytiya Monburinon—or just May! My fascination with
            programming started at an early age, back in 2010, I really liked
            building things with{' '}
            <span className="text-[var(--p)]">no/low-code tools</span>. The
            satisfaction of making things that work sparked an interest that
            eventually led me to software engineering.
          </p>
          <p className="text-lg mt-6 text-body">
            Today, as a software engineer with{' '}
            <span className="text-[var(--p)]">over 4 years of experience</span>,
            I've worked on a variety of{' '}
            <span className="text-[var(--p)]">SaaS products</span>, guided
            teams, and mentoring junior developers. My expertise lies in{' '}
            <span className="text-[var(--p)]">React and Node.js</span>, and I'm
            passionate about crafting aesthetically pleasing and impactful
            websites that truly make a difference for users. I value writing
            clean, high-quality code, and I'm currently into exploring new
            technologies to create unique, engaging visuals.
          </p>
          <p className="text-lg mt-6 text-body">
            When I'm not coding, you can find me playing video games,
            binge-watching Netflix, reading books, or playing music.{' '}
            <span className="text-white/100">😋</span>
          </p>
        </div>

        <div className="content-right">
          <Parallax
            speed={30}
            className="absolute right-[25%] md:top-[10rem] w-[20%]"
          >
            <img
              src={jellyfish}
              className="w-full animate-jellyfish"
              style={{ animationDelay: '-1.5s' }}
            />
          </Parallax>
          <Parallax
            speed={40}
            className="absolute right-[0%] md:top-[12rem] w-[25%]"
          >
            <img
              src={jellyfish}
              className="w-full animate-jellyfish"
              style={{ animationDelay: '-1s' }}
            />
          </Parallax>
          <Parallax
            speed={50}
            className="absolute right-[40%] md:top-[14rem] w-[35%]"
          >
            <img
              src={jellyfish}
              className="w-full animate-jellyfish"
              style={{ animationDelay: '-0.5s' }}
            />
          </Parallax>
        </div>
      </div>
    </div>
  )
}
