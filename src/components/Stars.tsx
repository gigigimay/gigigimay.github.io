import classNames from 'classnames'
import useScreenSize from 'hooks/useScreenSize'
import { Dictionary, groupBy } from 'lodash'
import { useEffect, useState } from 'react'
import { Parallax } from 'react-scroll-parallax'
import { randomInt } from 'utils/number'

const TILE_SIZE = 60

type Star = { x: number; y: number; opacity: number; width: number }

const randomStar = (row: number, col: number): Star => {
  const x = col * TILE_SIZE + randomInt(TILE_SIZE)
  const y = row * TILE_SIZE + randomInt(TILE_SIZE)
  return {
    x,
    y,
    opacity: randomInt(10) / 10,
    width: randomInt(4, 1),
  }
}

export const Stars = () => {
  const { width: w, height: h } = useScreenSize()

  const [starGroups, setStarGroups] = useState<Dictionary<Star[]>>()

  useEffect(() => {
    const nnX = Math.ceil(w / TILE_SIZE)
    const nnY = Math.ceil(h / TILE_SIZE)

    // random star positions and size
    const stars: Star[] = []
    for (let row = 0; row < nnY; row++) {
      for (let col = 0; col < nnX; col++) {
        if (!randomInt(6)) stars.push(randomStar(row, col))
        if (!randomInt(7)) stars.push(randomStar(row, col))
      }
    }
    const starGroups = groupBy(stars, (v) => v.width)
    setStarGroups(starGroups)
  }, [h, w])

  if (!starGroups) return null

  return (
    <>
      {Object.keys(starGroups).map((widthKey) => {
        const items = starGroups[widthKey]
        return (
          <Parallax
            className="absolute inset-0"
            key={widthKey}
            speed={-80 + Number(widthKey) * 5}
          >
            {items?.map(({ x, y, opacity, width }, index) => (
              <div
                key={index}
                className={classNames(
                  'absolute',
                  'transition-all duration-1000',
                  'bg-white aspect-square rounded-full',
                  'animate-pulse'
                )}
                style={{
                  top: y,
                  left: x,
                  width: width,
                  animationDelay: `${1 + opacity}s`,
                  boxShadow: `0 0 ${width * 3}px #FFFFFF`,
                }}
              />
            ))}
          </Parallax>
        )
      })}
    </>
  )
}
