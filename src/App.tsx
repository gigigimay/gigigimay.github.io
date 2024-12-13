import { useState } from 'react'

import CoverScreen from 'components/CoverScreen'
import { TitleSection } from 'components/TitleSection'
import { AboutMeSection } from 'components/AboutMeSection'
import { ExperienceSection } from 'components/ExperienceSection'
import { Menu } from 'components/Menu'
import { ProjectsSection } from 'components/ProjectsSection'
// import { SkillsSection } from 'components/SkillsSection'

const App = () => {
  const [isIntroDone, setIsIntroDone] = useState(false)

  return (
    <>
      {!isIntroDone && <CoverScreen onDone={() => setIsIntroDone(true)} />}
      <Menu />
      <TitleSection isIntroDone={isIntroDone} />
      <AboutMeSection />
      {/* <SkillsSection /> */}
      <ExperienceSection />
      <ProjectsSection />

      <div className="screen-section bg-white text-[var(--b4)]">
        <div className="">
          <div>Contact</div>
          <div>Bangkok, Thailand</div>
          <div>maytiya41@gmail.com</div>
          <div>https://github.com/gigigimay</div>
          <div>https://www.linkedin.com/in/maytiya-monburinon-275640172/</div>
        </div>
      </div>
    </>
  )
}

export default App
