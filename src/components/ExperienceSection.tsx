import { marked } from 'marked'
import classNames from 'classnames'
import { ExperienceInfo } from 'types'
import { educations, experiences } from 'config/experiences'
import { Waves } from './Waves'
import sharkImg from 'assets/images/shark.svg'
import fishesImg from 'assets/images/fishes.svg'
import { Parallax } from 'react-scroll-parallax'

const ExperienceItem = ({ data }: { data: ExperienceInfo }) => {
  const content = marked.parse(data.description)
  return (
    <div className="py-4 flex items-start gap-4 border-b border-white/10">
      <div
        className={classNames(
          'min-w-0 bg-white rounded-full overflow-hidden',
          'flex items-center justify-center',
          'w-12 h-12'
        )}
      >
        <img
          src={data.logo}
          className={classNames('w-13 h-13 object-cover', data.logoClass)}
        />
      </div>
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row gap-2 items-baseline justify-between">
          <div>
            <h3 className="text-xl font-bold">{data.title}</h3>
            <p className="text-lg text-[var(--p)]">{data.company}</p>
          </div>
          <p className="text-sm">{data.date}</p>
        </div>
        <div
          className="text-sm text-body markdown-box mt-1"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  )
}

export const ExperienceSection = () => {
  return (
    <div className="screen-section pb-32 relative bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <div id="experience" className="absolute top-0" />
      <Waves
        fill="rgb(3,7,18)"
        className="bottom-full scale-y-[60%] translate-y-[20%]"
      />
      <div className="container flex flex-col md:flex-row gap-12">
        <div className="content-left">
          <h1 className="text-3xl font-black">Experience & Education</h1>
          <h2 className="text-2xl font-bold mt-6 text-[var(--p)]">
            Experience
          </h2>
          {experiences.map((exp, idx) => (
            <ExperienceItem key={idx} data={exp} />
          ))}
          <h2 className="text-2xl font-bold mt-6 text-[var(--p)]">Education</h2>
          {educations.map((exp, idx) => (
            <ExperienceItem key={idx} data={exp} />
          ))}
        </div>
        <div className="content-right">
          <Parallax
            className="absolute top-[10%] left-0 w-max"
            speed={-5}
            translateX={['-20%', '50%']}
          >
            <img src={fishesImg} className="" />
          </Parallax>
        </div>
        <Parallax
          className="absolute top-[50%] left-0 w-max"
          speed={0}
          translateX={['80%', '-160%']}
          easing="easeInOutCubic"
        >
          <img src={sharkImg} className="h-[45vh] opacity-100 -scale-x-100" />
        </Parallax>
      </div>
    </div>
  )
}
