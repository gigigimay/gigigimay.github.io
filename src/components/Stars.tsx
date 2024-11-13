import classNames from 'classnames'
import { useScreenTiles } from 'hooks/useScreenTiles'
import { Dictionary, groupBy } from 'lodash'
import { useEffect, useState } from 'react'
import { Parallax } from 'react-scroll-parallax'
import { randomInt } from 'utils/number'

const TILE_SIZE = 100

const colors = ['#abcdef', '#ff6677', '#ffff77', '#ffffff']

type Star = {
  x: number
  y: number
  opacity: number
  width: number
  color: number
}

const randomStar = (row: number, col: number): Star => {
  const x = col * TILE_SIZE + randomInt(TILE_SIZE)
  const y = (row - 2) * TILE_SIZE + randomInt(TILE_SIZE)
  return {
    x,
    y,
    opacity: randomInt(10) / 10,
    width: Math.max(1, randomInt(2, 1) * randomInt(2, 1) - randomInt(4)),
    color: randomInt(colors.length - 1),
  }
}

export const Stars = ({ rand }: { rand?: unknown }) => {
  const { nY, nX } = useScreenTiles(TILE_SIZE, 4)
  const [starGroups, setStarGroups] = useState<Dictionary<Star[]>>()

  useEffect(() => {
    // random star positions and size
    const stars: Star[] = []
    for (let row = 0; row < nY; row++) {
      for (let col = 0; col < nX; col++) {
        if (!randomInt(4)) stars.push(randomStar(row, col))
        if (!randomInt(4)) stars.push(randomStar(row, col))
        if (!randomInt(3)) stars.push(randomStar(row, col))
        if (!randomInt(2)) stars.push(randomStar(row, col))
        if (!randomInt(1)) stars.push(randomStar(row, col))
        if (!randomInt(1)) stars.push(randomStar(row, col))
      }
    }
    const starGroups = groupBy(stars, (v) => v.width)
    setStarGroups(starGroups)
  }, [nX, nY, rand])

  if (!starGroups) return null

  return (
    <>
      {Object.keys(starGroups).map((widthKey, index, arr) => {
        const items = starGroups[widthKey]
        const width = Number(widthKey)
        return (
          <Parallax
            className={classNames(
              'absolute inset-0 pointer-events-none',
              index === 0 &&
                'bg-gradient-to-b from-transparent from-90% to-pink-400 to-[130%]'
            )}
            key={widthKey}
            speed={-80 + width * 4}
            translateX={[(-10 * width) / 2, (10 * width) / 2]}
          >
            {items?.map(({ x, y, opacity, width, color }, index) => (
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
                  boxShadow: `0 0 ${width * 3}px ${colors[color]}`,
                }}
              />
            ))}
          </Parallax>
        )
      })}
    </>
  )
}
