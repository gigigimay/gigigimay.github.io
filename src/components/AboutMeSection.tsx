import jellyfish from 'assets/images/jellyfish.svg'
import { Parallax } from 'react-scroll-parallax'

export const AboutMeSection = () => {
  return (
    <div className="screen-section bg-gray-950 text-white">
      <div className="container flex space-x-12">
        <div className="flex-[2]">
          <h1 className="text-3xl font-black" id="about-me">
            About me
          </h1>
          <p className="text-lg mt-6 text-body">
            Hello there, I'm Maytiya Monburinon—or just May! My fascination with
            computers started at an early age, and it's been a part of my life
            ever since.
          </p>
          <p className="text-lg mt-6 text-body">
            Back in 2010, I discovered the joy of building things with no-code
            tools. The satisfaction of making something work sparked a lifelong
            interest that eventually led me to software engineering.
          </p>
          <p className="text-lg mt-6 text-body">
            Today, as a software engineer with over 4 years of experience, I've
            worked on a variety of SaaS products, guided teams, and mentoring
            junior developers. My expertise lies in React and Node.js, and I'm
            passionate about crafting aesthetically pleasing and impactful
            websites that truly make a difference for users. I value writing
            clean, high-quality code, and I'm currently into exploring new
            technologies to create unique, engaging visuals.
          </p>
          <p className="text-lg mt-6 text-body">
            When I'm not coding, you can find me playing video games,
            binge-watching Netflix, reading books, or playing music.
          </p>
        </div>

        <div className="flex-1 max-w-[600px] min-w-[200px] h-full relative">
          <Parallax
            speed={30}
            className="absolute right-[25%] top-[10rem] w-[20%]"
          >
            <img
              src={jellyfish}
              className="w-full animate-jellyfish"
              style={{ animationDelay: '-1.5s' }}
            />
          </Parallax>
          <Parallax
            speed={40}
            className="absolute right-[0%] top-[12rem] w-[25%]"
          >
            <img
              src={jellyfish}
              className="w-full animate-jellyfish"
              style={{ animationDelay: '-1s' }}
            />
          </Parallax>
          <Parallax
            speed={50}
            className="absolute right-[40%] top-[14rem] w-[35%]"
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
