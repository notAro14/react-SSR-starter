import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import { ServerStyleSheet } from 'styled-components';

import App from '../App';
import { HtmlJSX, HtmlString } from '../html';

const PORT = process.env.PORT || 4001;
const app = express();

const scriptsKey = ['vendors.js', 'main.js', 'runtime.js'];
const scripts = [];

fs.readFile(
  path.resolve(__dirname, '..', 'client', 'manifest.json'),
  'utf8',
  (err, data) => {
    // eslint-disable-next-line
    if (err) console.error(err);
    const manifestFile = JSON.parse(data);
    const scriptsMapped = Object.keys(manifestFile)
      .filter((key) => scriptsKey.includes(key))
      .map((key) => ({ src: manifestFile[key] }));
    scripts.push(...scriptsMapped);
  }
);

app.get('/', (req, res) => {
  const sheet = new ServerStyleSheet();
  let html = 'Oops';
  const reactApp = renderToString(sheet.collectStyles(<App />));
  const styleTags = sheet.getStyleTags();
  try {
    html = renderToString(
      <HtmlJSX
        app={reactApp}
        scripts={scripts}
        styles={styleTags}
        title="React SSR"
      />
    );
  } catch (error) {
    // eslint-disable-next-line
    console.error(error);
  } finally {
    sheet.seal();
  }
  res.send(HtmlString({ html }));
});

app.use('/assets', express.static('./dist/client'));

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`✨ Project is running at http://localhost:${PORT}/`);
});
