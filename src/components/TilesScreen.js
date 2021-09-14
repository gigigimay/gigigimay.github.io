/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const TileContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`
const TileRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`

const TILE_SIZE = 60

const Tile = styled.div`
  width: ${TILE_SIZE}px;
  height: ${TILE_SIZE}px;
  background-color: teal;
  transition-property: opacity;

  transition-delay: 1s;
  transition-duration: 3s;
  transition-timing-function: cubic-bezier(0.1, 0.2, 0.5, 1);
  :hover {
    opacity: 0;

    transition-delay: 0s;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.1, 1, 1, 1);
  }
`

const TilesScreen = () => {
  const [nX, setNX] = useState()
  const [nY, setNY] = useState()

  useEffect(() => {
    // TODO: handle when screen size changes
    const w = window.innerWidth
    const h = window.innerHeight
    const nnX = Math.ceil(w / TILE_SIZE)
    const nnY = Math.ceil(h / TILE_SIZE)
    setNX(nnX)
    setNY(nnY)
  }, [])

  return (
    <TileContainer>
      {Array(nY).fill().map((vx, row) => (
        <TileRow key={row}>
          {Array(nX).fill().map((vy, col) => (
            <Tile key={`${row}.${col}`} />
          ))}
        </TileRow>
      ))}
    </TileContainer>
  )
}

export default TilesScreen
