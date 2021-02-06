import React from 'react'
import express from 'express'
import ReactDOMServer from 'react-dom/server'
import fs from 'fs'
import path from 'path'

import App from '../src/App'
import { HtmlJSX, HtmlString } from '../src/html'

const PORT = process.env.PORT || 4001
const app = express()

const scriptsKey = ['vendors.js', 'main.js', 'runtime.js']
const scripts = []

fs.readFile(
  path.resolve(__dirname, '..', 'client', 'manifest.json'),
  'utf8',
  (err, data) => {
    if (err) console.error(err)
    const manifestFile = JSON.parse(data)
    const scriptsMapped = Object.keys(manifestFile)
      .filter((key) => {
        return scriptsKey.includes(key)
      })
      .map((key) => {
        return { src: manifestFile[key] }
      })
    scripts.push(...scriptsMapped)
  }
)

app.get('/', (req, res) => {
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
