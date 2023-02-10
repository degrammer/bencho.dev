export default function handler(req, res) {
    res.end(JSON.stringify(req.query))
    //res.redirect(308, 'vscode://stateful.runme?command=setup&repository=git@github.com:degrammer/runme-getting-started.git&fileToOpen=README.md')
  }