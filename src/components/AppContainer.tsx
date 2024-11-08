import { ParallaxProvider } from 'react-scroll-parallax'

export const AppContainer = ({ children }: { children?: React.ReactNode }) => {
  return <ParallaxProvider>{children}</ParallaxProvider>
}
