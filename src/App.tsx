import { useState } from 'react'

import TilesScreen from 'components/TilesScreen'
import TitleSection from 'components/TitleSection'

const App = () => {
  const [isIntroDone, setIsIntroDone] = useState(false)

  return (
    <>
      {!isIntroDone && <TilesScreen onDone={() => setIsIntroDone(true)} />}

      <TitleSection isIntroDone={isIntroDone} />

      <div className="screen-section bg-blue-200 text-orange-50">
        <div className="transition-colors duration-500">About me</div>
      </div>

      <div className="screen-section bg-blue-300 text-orange-50">
        <div className="transition-colors duration-500">Work Experience</div>
      </div>
      <div className="screen-section bg-blue-700 text-orange-50">
        <div className="transition-colors duration-500">Projects</div>
      </div>
      <div className="screen-section bg-blue-800 text-orange-50">
        <div className="transition-colors duration-500">Skills</div>
      </div>

      <div className="screen-section bg-blue-900 text-orange-50">
        <div className="transition-colors duration-500">
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
