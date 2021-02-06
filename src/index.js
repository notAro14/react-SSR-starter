import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const isDevMode = process.env.NODE_ENV === 'development'
const render = isDevMode ? ReactDOM.render : ReactDOM.hydrate

render(<App />, document.getElementById('root'))
