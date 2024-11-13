import { useEffect, useState } from 'react'
import useScreenSize from './useScreenSize'

export const useScreenTiles = (tileSize: number, extraY = 0) => {
  const { width: w, height: h } = useScreenSize()

  const [nX, setNX] = useState<number>(Math.ceil(w / tileSize))
  const [nY, setNY] = useState<number>(Math.ceil(h / tileSize) + extraY)

  useEffect(() => {
    const nnX = Math.ceil(w / tileSize)
    const nnY = Math.ceil(h / tileSize) + extraY
    setNX(nnX)
    setNY(nnY)
  }, [extraY, h, tileSize, w])

  return { nX, nY }
}
