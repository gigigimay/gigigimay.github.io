import classNames from 'classnames'
import { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { randomInt } from 'utils/number'
import { delay } from 'utils/timeout'
import MouseIcon from 'assets/icons/icon-pointer.svg?react'
import { useScreenTiles } from 'hooks/useScreenTiles'
import { sendEvent } from 'services/ga'

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
    transition-timing-function: ease-out;
    transition-delay: 1s;
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
      transform: translate(-50%, -50%) scale(0.9);
      transition-duration: 1s;
      transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
      transition-delay: 0.2s;
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
  background-color: #222222fe;
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

interface CoverScreenProps {
  onDone?: () => unknown
  initialClicked?: boolean
}

const CoverScreen = ({ onDone, initialClicked }: CoverScreenProps) => {
  const { nX, nY } = useScreenTiles(TILE_SIZE)
  const [rows, setRows] = useState<number[]>()
  const [cols, setCols] = useState<number[]>()
  const [hiddenKeys, setHiddenKeys] = useState<Record<string, boolean>>({})
  const [isClicked, setIsClicked] = useState(false)
  const [step, setStep] = useState(0)

  useEffect(() => {
    const rows = createArray(nY)
    const cols = createArray(nX)
    setRows(rows)
    setCols(cols)

    window.document.documentElement.style.setProperty('overflow-y', 'hidden')

    if (initialClicked) {
      rows.forEach((row) => {
        cols.forEach((col) => {
          const key = `${row}.${col}`
          setHiddenKeys((v) => ({ ...v, [key]: true }))
          const dx = Math.abs(4 - col)
          const dy = Math.abs(4 - row)
          const distance = Math.round(Math.sqrt(dx ** 2 + dy ** 2))
          const rand = randomInt(5) * 20
          delay(distance * 50 + rand).then(() => {
            setHiddenKeys((v) => ({ ...v, [key]: false }))
          })
        })
      })
    }
  }, [initialClicked, nX, nY])

  useEffect(() => {
    const initialize = async () => {
      if (initialClicked) await delay(2000)
      await delay(100)
      setStep(1) // text 1
      await delay(100)
      setStep(2) // mouse icon
      await delay(200)
      setStep(3) // text 2
      await delay(100)
      setStep(4) // text 3
      await delay(1000)
      setStep(5) // clickable
    }
    initialize()
  }, [initialClicked])

  const hideTile = useCallback(
    (key: string) => setHiddenKeys((v) => ({ ...v, [key]: true })),
    []
  )

  const onClick = useCallback(
    async (key: string) => {
      if (isClicked || !rows || !cols) return
      sendEvent('cover_screen_click', { key })
      setIsClicked(true)
      window.document.documentElement.style.setProperty('overflow-y', 'auto')

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
              className={classNames(
                { hide: hiddenKeys[key] },
                step < 5 && initialClicked && '!delay-0 !duration-1000'
              )}
              onClick={() => onClick(key)}
            />
          )
        })}
      </div>
    ))
  }, [cols, hiddenKeys, initialClicked, onClick, rows, step])

  return (
    <TileContainer
      className={classNames(
        'fixed inset-0 overflow-hidden z-50',
        step < 5 && 'pointer-events-none',
        isClicked && 'clicked'
      )}
    >
      {tiles}
      <div className="mouse-icon text-white text-center">
        <div
          className={classNames(
            'text-3xl font-black tracking-widest uppercase',
            'transition-all',
            step < 1 && '!opacity-0 !-translate-y-2'
          )}
        >
          Welcome!
        </div>
        <MouseIcon
          className={classNames(
            'w-10 mx-auto animate-explore my-8',
            'transition-all',
            step < 2 && '!opacity-0 !-translate-y-2'
          )}
        />
        <div
          className={classNames(
            'text-sm sm:text-lg',
            'transition-all',
            step < 3 && '!opacity-0 !-translate-y-2'
          )}
        >
          feel free to explore.
        </div>
        <div
          className={classNames(
            'text-body text-sm sm:text-lg',
            'transition-all',
            step < 4 && '!opacity-0 !-translate-y-2'
          )}
        >
          - click anywhere to enter -
        </div>
      </div>
    </TileContainer>
  )
}

export default CoverScreen
