import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const isModeDevelopment = process.env.NODE_ENV === 'development'
const render = isModeDevelopment ? ReactDOM.render : ReactDOM.hydrate

render(<App />, document.getElementById('root'))
