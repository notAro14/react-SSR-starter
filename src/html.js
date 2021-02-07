import React from 'react';
import { renderToString } from 'react-dom/server';
import PropTypes from 'prop-types';

export const HtmlJSX = ({ children, title, scripts }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </head>
    <body>
      <div id="root">{children}</div>
      {scripts.map(({ src }) => (
        <script key={src} src={src} />
      ))}
    </body>
  </html>
);

HtmlJSX.defaultProps = {
  children: undefined,
  scripts: [],
  title: '',
};

HtmlJSX.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
  scripts: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
    })
  ),
};

export const HtmlString = ({ html = '' }) => `
<!DOCTYPE html>
${html.length ? html : renderToString(<HtmlJSX title="React SSR" />)}
`;
