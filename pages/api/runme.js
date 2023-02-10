export default function handler(req, res) {
    const { repository, file } = req.query
    res.redirect(308, `vscode://stateful.runme?command=setup&repository=${repository}&fileToOpen=${file || 'README.md'}`)
  }