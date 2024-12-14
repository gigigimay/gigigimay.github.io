import { ParallaxProvider } from 'react-scroll-parallax'
import { BrowserRouter } from 'react-router'

export const AppContainer = ({ children }: { children?: React.ReactNode }) => {
  return (
    <ParallaxProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </ParallaxProvider>
  )
}
