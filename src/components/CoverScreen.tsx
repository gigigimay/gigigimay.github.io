import classNames from 'classnames'
import { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { randomInt } from 'utils/number'
import { delay } from 'utils/timeout'
import MouseIcon from 'assets/icons/icon-pointer.svg?react'
import { useScreenTiles } from 'hooks/useScreenTiles'

const TILE_SIZE = 60

const TileContainer = styled.div`
  cursor: pointer;

  .mouse-icon,
  .circle,
  .circle .inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition-property: all;
  }

  .mouse-icon {
    transition-duration: 1s;
    transition-timing-function: ease-in;
    transition-delay: 3.5s;
  }

  .circle {
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
    transition-delay: 3s;

    animation-name: circle-spin;
    animation-duration: 50000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @keyframes circle-spin {
      from {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  }

  &:hover,
  &.clicked {
    .mouse-icon {
      opacity: 0;
      transform: translate(-50%, -50%) scale(2);
      transition-duration: 1s;
      transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
      transition-delay: 0.4s;
    }
    .circle {
      opacity: 0;
      width: 19rem;
      height: 19rem;
      transition-duration: 0.5s;
      transition-delay: 0s;
    }
  }

  &.clicked {
    cursor: initial;
  }
`

const Tile = styled.div`
  width: ${TILE_SIZE}px;
  min-width: ${TILE_SIZE}px;
  height: ${TILE_SIZE}px;
  background-color: #222222fa;
  cursor: pointer;

  transition-property: opacity, background-color;
  transition-delay: 1s;
  transition-duration: 3s;
  transition-timing-function: cubic-bezier(0.1, 0.2, 0.5, 1);

  &:hover,
  &.hide {
    opacity: 0;
    background-color: #cccccc99;

    transition-delay: 0s;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.1, 1, 1, 1);
  }

  &.hide {
    opacity: 0;
    cursor: initial;
    pointer-events: none;

    transition-delay: 0s;
    transition-duration: 1s;
    transition-timing-function: ease-out;
  }
`

const createArray = (length: number) => Array.from({ length }, (_, k) => k)

const CoverScreen = ({ onDone }: { onDone?: () => unknown }) => {
  const { nX, nY } = useScreenTiles(TILE_SIZE)
  const [rows, setRows] = useState<number[]>()
  const [cols, setCols] = useState<number[]>()
  const [hiddenKeys, setHiddenKeys] = useState<Record<string, boolean>>({})
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    setRows(createArray(nY))
    setCols(createArray(nX))
  }, [nX, nY])

  const hideTile = useCallback(
    (key: string) => setHiddenKeys((v) => ({ ...v, [key]: true })),
    []
  )

  const onClick = useCallback(
    async (key: string) => {
      if (isClicked || !rows || !cols) return
      setIsClicked(true)

      const clickedX = Number(key.split('.')[1])
      const clickedY = Number(key.split('.')[0])

      await Promise.all(
        rows.map((row) => {
          Promise.all(
            cols.map(async (col) => {
              const key = `${row}.${col}`
              const dx = Math.abs(clickedX - col)
              const dy = Math.abs(clickedY - row) / 2
              const distance = Math.round(Math.sqrt(dx ** 2 + dy ** 2))
              const rand = randomInt(5) * 20
              await delay(distance * 50 + rand)
              return hideTile(key)
            })
          )
        })
      )

      await delay(2000) // wait for all fading animations to be done
      onDone?.()
    },
    [cols, hideTile, isClicked, onDone, rows]
  )

  const tiles = useMemo(() => {
    if (!rows || !cols) return null
    return rows.map((row) => (
      <div key={row} className="flex flex-nowrap">
        {cols.map((col) => {
          const key = `${row}.${col}`
          return (
            <Tile
              key={key}
              className={classNames({ hide: hiddenKeys[key] })}
              onClick={() => onClick(key)}
            />
          )
        })}
      </div>
    ))
  }, [cols, hiddenKeys, onClick, rows])

  return (
    <TileContainer
      className={classNames(
        'fixed inset-0 overflow-hidden z-50',
        isClicked && 'clicked'
      )}
    >
      {tiles}
      <div className="mouse-icon">
        <MouseIcon className="text-white w-10" />
      </div>
      <div
        className={classNames(
          'circle',
          'w-60 h-60 sm:w-80 sm:h-80 rounded-full border-4 border-dotted border-white border-opacity-20'
        )}
      >
        <div className="inner" />
      </div>
    </TileContainer>
  )
}

export default CoverScreen
