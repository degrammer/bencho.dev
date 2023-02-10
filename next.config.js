module.exports = {
  async redirects() {
    return [
      {
        source: '/runme-getting-started',
        destination: 'vscode://stateful.runme?command=setup&repository=git@github.com:degrammer/runme-getting-started.git&fileToOpen=README.md',
        permanent: true,
        basePath: false,
      },
      {
        source: '/open-project/:repository/:file',
        destination: 'vscode://stateful.runme?command=setup&repository=:repository&fileToOpen=:file',
        permanent: true,
      },
    ]
  },
}