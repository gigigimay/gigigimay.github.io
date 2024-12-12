import { Waves } from './Waves'

export const SkillsSection = () => {
  return (
    <div className="screen-section relative bg-[var(--b1)] text-white">
      <Waves fill="var(--b1)" className="bottom-full" />
      <div className="container flex space-x-12">
        <div className="flex-1">
          <h1 className="text-3xl font-black" id="about-me">
            Skills
          </h1>
          <p className="text-lg mt-6 text-body">Hello</p>
        </div>
      </div>
    </div>
  )
}
