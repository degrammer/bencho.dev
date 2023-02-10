export default function handler(req, res) {
    const { repository, open } = req.params
    res.end(`${repository} ${open}`)
    //res.redirect(308, 'vscode://stateful.runme?command=setup&repository=git@github.com:degrammer/runme-getting-started.git&fileToOpen=README.md')
  }