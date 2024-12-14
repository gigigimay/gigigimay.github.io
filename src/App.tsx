import { useState } from 'react'

import CoverScreen from 'components/CoverScreen'
import { TitleSection } from 'components/TitleSection'
import { AboutMeSection } from 'components/AboutMeSection'
import { ExperienceSection } from 'components/ExperienceSection'
import { Menu } from 'components/Menu'
import { ProjectsSection } from 'components/ProjectsSection'
import { ContactSection } from 'components/ContactSection'
// import { SkillsSection } from 'components/SkillsSection'

const App = () => {
  const [isIntroDone, setIsIntroDone] = useState(false)

  return (
    <>
      {!isIntroDone && <CoverScreen onDone={() => setIsIntroDone(true)} />}
      <Menu />
      <TitleSection isIntroDone={isIntroDone} />
      <AboutMeSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}

export default App
