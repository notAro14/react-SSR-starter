import React from 'react'
import express from 'express'
import ReactDOMServer from 'react-dom/server'

import App from '../src/App'
import Html from '../src/html'

const PORT = process.env.PORT || 4001
const app = express()

app.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(<App />)
  const scripts = `
    <script defer="defer" src="/assets/vendors.bundle.js"></script>
    <script defer="defer" src="/assets/main.bundle.js"></script>
  `
  const html = Html({ app, title: 'React SSR Counter', scripts })

  res.send(html)
})

app.use('/assets', express.static('./dist/client'))

app.listen(PORT, () => {
  console.log(`✨ Project is running at http://localhost:${PORT}/`)
})
