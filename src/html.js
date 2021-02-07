import React from 'react';
import { renderToString } from 'react-dom/server';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

export const HtmlJSX = ({ app, title, scripts, styles }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      {parse(styles)}
    </head>
    <body>
      {/* eslint-disable-next-line */}
      <div id="root" dangerouslySetInnerHTML={{ __html: app }} />
      {scripts.map(({ src }) => (
        <script key={src} src={src} />
      ))}
    </body>
  </html>
);

HtmlJSX.defaultProps = {
  app: '',
  scripts: [],
  title: '',
  styles: '',
};

HtmlJSX.propTypes = {
  app: PropTypes.string,
  title: PropTypes.string,
  scripts: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
    })
  ),
  styles: PropTypes.string,
};

export const HtmlString = ({ html = '' }) => `
<!DOCTYPE html>
${html.length ? html : renderToString(<HtmlJSX title="React SSR" />)}
`;
