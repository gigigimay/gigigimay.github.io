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

  &.clicked {
    pointer-events: none;
  }
`

const TileRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`

const TILE_SIZE = 60

const Tile = styled.div`
  width: ${TILE_SIZE}px;
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

const wait = async (duration) => new Promise((resolve) => {
  setTimeout(resolve, duration)
})

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
    const keys = []
    createArray(nY).forEach((row) => {
      createArray(nX).forEach((col) => {
        keys.push(`${row}.${col}`)
      })
    })
    const randomKeys = [key, ..._.shuffle(keys)]

    // eslint-disable-next-line no-restricted-syntax
    for (const k of randomKeys) {
      hideTile(k)
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
    </TileContainer>
  )
}

export default TilesScreen
