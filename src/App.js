import React from 'react'

export default function App() {
  const [count, setCount] = React.useState(0)
  return (
    <Container>
      <h1>Universal react app</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
    </Container>
  )
}
