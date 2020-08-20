module.exports = {
  mount: {
    src: '/_dist_'
  },
  plugins: [
    [
      '@snowpack/plugin-run-script',
      { 'cmd': 'tsc --noEmit', 'watch': '$1 --watch' }
    ]
  ],
  installOptions: {
    installTypes: true,
    rollup: {
      plugins: [
        require('rollup-plugin-node-externals')({ packagePath: './package.json' })
      ]
    },
    sourceMap: true
  },
  buildOptions: {
    minify: false,
    sourceMaps: true
  }
}
