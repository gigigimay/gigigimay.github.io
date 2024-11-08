import classNames from 'classnames'
import useScreenSize from 'hooks/useScreenSize'
import { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { randomInt } from 'utils/number'
import { delay } from 'utils/timeout'

const TILE_SIZE = 40

const TileContainer = styled.div`
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
    transition-delay: 4s;
  }

  .circle {
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
    transition-delay: 3.5s;

    animation-name: spin;
    animation-duration: 50000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @keyframes spin {
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
      transition-duration: 0.5s;
      transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
      transition-delay: 0.2s;
    }
    .circle {
      opacity: 0;
      width: 19rem;
      height: 19rem;
      transition-duration: 0.2s;
      transition-delay: 0.1s;
    }
  }
`

const Tile = styled.div`
  width: ${TILE_SIZE}px;
  min-width: ${TILE_SIZE}px;
  height: ${TILE_SIZE}px;
  background-color: black;
  cursor: pointer;

  transition-property: opacity;
  transition-delay: 1s;
  transition-duration: 3s;
  transition-timing-function: cubic-bezier(0.1, 0.2, 0.5, 1);

  &:hover,
  &.hide {
    opacity: 0;

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

const TilesScreen = ({ onDone }: { onDone?: () => unknown }) => {
  const [rows, setRows] = useState<number[]>()
  const [cols, setCols] = useState<number[]>()
  const [hiddenKeys, setHiddenKeys] = useState<Record<string, boolean>>({})
  const [isClicked, setIsClicked] = useState(false)
  const { width: w, height: h } = useScreenSize()

  useEffect(() => {
    const nnX = Math.ceil(w / TILE_SIZE)
    const nnY = Math.ceil(h / TILE_SIZE)
    setRows(createArray(nnY))
    setCols(createArray(nnX))
  }, [h, w])

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
              const dy = Math.abs(clickedY - row)
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
        <svg
          fill="#ffffff"
          height="64px"
          width="64px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 203.079 203.079"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M192.231,104.082V102c0-12.407-10.094-22.5-22.5-22.5c-2.802,0-5.484,0.519-7.961,1.459 C159.665,70.722,150.583,63,139.731,63c-2.947,0-5.76,0.575-8.341,1.61C128.667,55.162,119.624,48,109.231,48 c-2.798,0-5.496,0.541-8,1.516V22.5c0-12.407-10.094-22.5-22.5-22.5s-22.5,10.093-22.5,22.5v66.259 c-3.938-5.029-8.673-9.412-14.169-11.671c-6.133-2.52-12.587-2.219-18.667,0.872c-11.182,5.686-15.792,19.389-10.277,30.548 l27.95,56.563c0.79,1.552,19.731,38.008,54.023,38.008h40c31.54,0,57.199-25.794,57.199-57.506l-0.031-41.491H192.231z M135.092,188.079h-40c-24.702,0-40.091-28.738-40.646-29.796l-27.88-56.42c-1.924-3.893-0.33-8.519,3.629-10.532 c2.182-1.11,4.081-1.223,6.158-0.372c8.281,3.395,16.41,19.756,19.586,29.265l2.41,7.259l12.883-4.559V22.5 c0-4.136,3.364-7.5,7.5-7.5s7.5,3.364,7.5,7.5V109h0.136h14.864h0.136V71c0-4.187,3.748-8,7.864-8c4.262,0,8,3.505,8,7.5v15v26h15 v-26c0-4.136,3.364-7.5,7.5-7.5s7.5,3.364,7.5,7.5V102v16.5h15V102c0-4.136,3.364-7.5,7.5-7.5s7.5,3.364,7.5,7.5v10.727h0.035 l0.025,32.852C177.291,169.014,158.36,188.079,135.092,188.079z"></path>{' '}
          </g>
        </svg>
      </div>
      <div
        className={classNames(
          'circle',
          'w-80 h-80 rounded-full border-4 border-dotted border-white'
        )}
      >
        <div className="inner" />
      </div>
    </TileContainer>
  )
}

export default TilesScreen
