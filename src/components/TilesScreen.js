/* eslint-disable react/no-array-index-key */
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

const TileContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  .text,
  .circle,
  .circle .inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    pointer-events: none;
    transition-property: all;
  }

  .text{
    color: #eeeeeeee;
    font-size: 2rem;

    transition-duration: 1s;
    transition-timing-function: ease-in;
    transition-delay: 4s;
  }

  .circle {
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    border: 2px dashed #eeeeee22;

    transition-duration: 1s;
    transition-timing-function: ease-in-out;
    transition-delay: 3.5s;

    animation-name: spin;
    animation-duration: 50000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear; 
    @keyframes spin {
      from {
        transform: translate(-50%,-50%) rotate(0deg);
      }
      to {
        transform: translate(-50%,-50%) rotate(360deg);
      }
    }
  }

  &.clicked {
    pointer-events: none;
  }

  &:hover, &.clicked {
    .text {
      opacity: 0;
      transform: translate(-50%,-50%)  scale(2);
      transition-duration: 0.5s;
      transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
      transition-delay: 0.1s;
    }
    .circle {
      opacity: 0;
      width: 19rem;
      height: 19rem;
      transition-duration: 0.2s;
      transition-delay: 0s;
    }
  }
`

const TileRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`

const TILE_SIZE = 80

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

  &:hover, &.hidden {
    opacity: 0;

    transition-delay: 0s;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.1, 1, 1, 1);
  }

  &.hidden {
    cursor: initial;
    pointer-events: none;
  }
`

const wait = (duration) => new Promise((resolve) => setTimeout(resolve, duration))

const createArray = (length) => Array.from(Array(length).keys())

const TilesScreen = () => {
  const [nX, setNX] = useState()
  const [nY, setNY] = useState()
  const [hiddenKeys, setHiddenList] = useState({})
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    // TODO: handle when screen size changes
    const w = window.innerWidth
    const h = window.innerHeight
    const nnX = Math.ceil(w / TILE_SIZE)
    const nnY = Math.ceil(h / TILE_SIZE)
    setNX(nnX)
    setNY(nnY)
  }, [])

  const hideTile = (key) => setHiddenList((v) => ({ ...v, [key]: true }))

  const onClick = async (key) => {
    if (isClicked) { return }
    setIsClicked(true)

    // create array of all keys
    const keys = []
    createArray(nY).forEach((row) => {
      createArray(nX).forEach((col) => {
        keys.push(`${row}.${col}`)
      })
    })

    // prepare to do hiding animation
    const framesLength = 10
    const chunkSize = Math.max(Math.round(keys.length / framesLength), 1)
    const frames = _.chunk(_.shuffle(keys), chunkSize)

    // eslint-disable-next-line no-restricted-syntax
    for (const ks of frames) {
      ks.forEach(hideTile)
      // eslint-disable-next-line no-await-in-loop
      await wait(1)
    }
  }

  return (
    <TileContainer className={classNames({ clicked: isClicked })}>
      {createArray(nY).map((row) => (
        <TileRow key={row}>
          {createArray(nX).map((col) => {
            const key = `${row}.${col}`
            return (
              <Tile
                key={key}
                className={classNames({ hidden: hiddenKeys[key] })}
                onClick={() => onClick(key)}
              />
            )
          })}
        </TileRow>
      ))}
      <div className="text">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="none" d="M0 0h24v24H0z" /><path d="M15.388 13.498l2.552 7.014-4.698 1.71-2.553-7.014-3.899 2.445L8.41 1.633l11.537 11.232-4.558.633zm-.011 5.818l-2.715-7.46 2.96-.41-5.64-5.49-.79 7.83 2.53-1.587 2.715 7.46.94-.343z" fill="rgba(255,255,255,1)" /></svg>
      </div>
      <div className="circle"><div className="inner" /></div>
    </TileContainer>
  )
}

export default TilesScreen
