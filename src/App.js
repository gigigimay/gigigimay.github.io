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
`

const Title = styled.div`
  font-size: 80px;
  color: #eee;
  font-weight: bold;
  line-height: 1;

  transition: .5s ease-in-out color;
  :hover {
    color: #71d9ce;
  }
`

const App = () => (
  <Container>
    <Title>gigigimay</Title>
  </Container>
)

export default App
