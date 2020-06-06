import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #eee;
  font-size: 40px;
`

const Title = styled.div`
  transition: .5s ease-in-out color;
  :hover {
    color: #71d9ce;
  }
`

const App = () => (
  <Container>
    <Title>
      <span>Hello, I am</span>
      <h1>gigigimay.</h1>
    </Title>

  </Container>
)

export default App
