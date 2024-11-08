import { debounce } from 'lodash'
import { useState, useEffect } from 'react'

const useScreenSize = (debounceTime = 100) => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = debounce(() => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }, debounceTime)

    window.addEventListener('resize', handleResize)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return screenSize
}

export default useScreenSize
