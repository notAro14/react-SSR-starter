import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { StaticRouter } from 'react-router-dom';
// eslint-disable-next-line
import manifest from '../../dist/client/manifest.json';

import App from '../App';
import HtmlString from '../html';

const PORT = process.env.PORT || 4001;
const app = express();

const scriptsKey = ['vendors.js', 'main.js', 'runtime.js'];
const scriptTags = Object.keys(manifest)
  .filter((key) => scriptsKey.includes(key))
  .reduce(
    (acc, key) => `${acc}<script defer src="${manifest[key]}"></script>`,
    ''
  );

// this line must come before the 'get'
app.use('/assets', express.static('./dist/client'));
// it's important to capture all routes with '/*'
app.get('/*', (req, res) => {
  const context = {};
  const sheet = new ServerStyleSheet();
  let html = 'Oops';
  try {
    const reactApp = renderToString(
      sheet.collectStyles(
        // cf https://www.digitalocean.com/community/tutorials/react-react-router-ssr
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      )
    );
    const styleTags = sheet.getStyleTags();
    html = HtmlString({
      app: reactApp,
      scriptTags,
      styleTags,
      title: 'React SSR - Prod',
    });
  } catch (error) {
    // eslint-disable-next-line
    console.error(error);
  } finally {
    sheet.seal();
  }

  // for redirects
  if (context.url) {
    res.redirect(301, context.url);
  }
  // to send 'real' 404 status
  if (context.status === 404) {
    res.status(404);
  }
  res.send(html);
});

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`✨ Project is running at http://localhost:${PORT}/`);
});
