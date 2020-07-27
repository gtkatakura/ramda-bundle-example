module.exports = {
  mode: 'production',
  entry: {
    'print-all-ramda-methods': './src/print-all-ramda-methods.js',
    'named-export': './src/using-named-export.js',
    'using-ramda-src': './src/using-ramda-src.js',
    'using-wildcard': './src/using-wildcard.js',
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js'
  },
  optimization: {
    minimize: false
  },
}