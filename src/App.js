import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: tomato;
`

export default function App() {
  const [count, setCount] = React.useState(0)
  return (
    <Container>
      <h1>Counter JS</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
    </Container>
  )
}
