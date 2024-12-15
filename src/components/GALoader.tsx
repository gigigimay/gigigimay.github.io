import { useEffect } from 'react'
import { initGA } from 'services/ga'

export const GALoader = () => {
  useEffect(() => {
    initGA()
  }, [])

  return null
}
