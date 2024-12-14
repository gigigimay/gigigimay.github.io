import { useRef, useState } from 'react'

import CoverScreen from 'components/CoverScreen'
import { TitleSection } from 'components/TitleSection'
import { AboutMeSection } from 'components/AboutMeSection'
import { ExperienceSection } from 'components/ExperienceSection'
import { Menu } from 'components/Menu'
import { ProjectsSection } from 'components/ProjectsSection'
import { ContactSection } from 'components/ContactSection'
// import { SkillsSection } from 'components/SkillsSection'

const App = () => {
  const clickedRef = useRef<boolean>(false)
  const [isIntroDone, setIsIntroDone] = useState(false)

  return (
    <>
      {!isIntroDone && (
        <CoverScreen
          onDone={() => {
            setIsIntroDone(true)
            clickedRef.current = true
          }}
          initialClicked={clickedRef.current}
        />
      )}
      <Menu />
      <TitleSection isIntroDone={isIntroDone} setIsIntroDone={setIsIntroDone} />
      <AboutMeSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}

export default App
