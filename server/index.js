import React from 'react'
import express from 'express'
import ReactDOMServer from 'react-dom/server'

import App from '../src/App'
import { HtmlJSX, HtmlString } from '../src/html'

const PORT = process.env.PORT || 4001
const app = express()

app.get('/', (req, res) => {
  const scripts = [
    { src: '/assets/vendors.bundle.js' },
    { src: '/assets/main.bundle.js' },
  ]
  const html = ReactDOMServer.renderToString(
    <HtmlJSX title='React SSR' scripts={scripts}>
      <App />
    </HtmlJSX>
  )
  res.send(HtmlString({ html }))
})

app.use('/assets', express.static('./dist/client'))

app.listen(PORT, () => {
  console.log(`✨ Project is running at http://localhost:${PORT}/`)
})
