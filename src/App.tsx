import { useState } from 'react'

import CoverScreen from 'components/CoverScreen'
import TitleSection from 'components/TitleSection'

const App = () => {
  const [isIntroDone, setIsIntroDone] = useState(false)

  return (
    <>
      {!isIntroDone && <CoverScreen onDone={() => setIsIntroDone(true)} />}

      <TitleSection isIntroDone={isIntroDone} />

      <div className="screen-section bg-gray-950 text-orange-50">
        <div className="container space-y-8">
          <div className="flex space-x-4">
            <div className="bg-gray-800 rounded-2xl w-96 aspect-square"></div>
            <div>
              <h2 className="text-2xl font-bold">About me</h2>
              <p className="">
                I'm a full-stack software engineer from Thailand with a passion
                for crafting beautiful, user-centered websites. I'm dedicated to
                building impactful applications that make a difference. I
                specialize in React and Node.js, and I bring both technical
                expertise and creativity to every project.
              </p>
              <p>~5 Years experience</p>
            </div>
          </div>
          <div className="">
            <h2 className="text-2xl font-bold">My tech stacks</h2>
            <div>
              <span>React</span>
              <span>Node.js</span>
            </div>
          </div>
        </div>
      </div>

      <div className="screen-section bg-blue-300 text-orange-50">
        <div className="">Work Experience</div>
      </div>
      <div className="screen-section bg-blue-700 text-orange-50">
        <div className="">Projects</div>
      </div>
      <div className="screen-section bg-blue-800 text-orange-50">
        <div className="">Skills</div>
      </div>

      <div className="screen-section bg-blue-900 text-orange-50">
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
