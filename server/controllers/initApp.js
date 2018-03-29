module.exports = data =>
  `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet">
      <title>datiwi</title>
    </head>
    <body>
      <div id="root"></div>
      <script src='bundle.js'></script>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(data).replace(/</g, '\\u003c')}
      </script>
    </body>
  </html>`;
