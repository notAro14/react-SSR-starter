import React from 'react'
import { renderToString } from 'react-dom/server'
import PropTypes, { string } from 'prop-types'

export const HtmlJSX = ({ children, title = '', scripts = [] }) => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{title}</title>
      </head>
      <body>
        <div id='root'>{children}</div>
        {scripts.map(({ src }) => (
          <script key={src} src={src}></script>
        ))}
      </body>
    </html>
  )
}

HtmlJSX.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string.isRequired,
  scripts: PropTypes.arrayOf(string),
}

export const HtmlString = ({ html = '' }) => `
<!DOCTYPE html>
${html.length ? html : renderToString(<HtmlJSX title='React SSR' />)}
`
