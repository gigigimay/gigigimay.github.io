import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { AppContainer } from 'components/AppContainer'
import App from './App'

import './index.css'
import './tailwind.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContainer>
      <App />
    </AppContainer>
  </StrictMode>
)
