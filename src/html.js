const Html = ({ app = '', title = 'Default Title', scripts = '' }) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    ${scripts}
  </head>
  <body>
    <div id="root">${app}</div>
  </body>
</html>
`

module.exports = Html
