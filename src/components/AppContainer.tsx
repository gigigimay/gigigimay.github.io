import { ParallaxProvider } from 'react-scroll-parallax'
import { BrowserRouter } from 'react-router'
import { GALoader } from './GALoader'

export const AppContainer = ({ children }: { children?: React.ReactNode }) => {
  return (
    <ParallaxProvider>
      <GALoader />
      <BrowserRouter>{children}</BrowserRouter>
    </ParallaxProvider>
  )
}
