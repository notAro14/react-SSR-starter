const HtmlString = ({
  app = '',
  title = '',
  scriptTags = '',
  styleTags = '',
}) =>
  `<!DOCTYPE html><html lang="en"><head><meta charSet="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>${title}</title>${scriptTags}${styleTags}</head><body><div id="root">${app}</div></body></html>`;

export default HtmlString;
