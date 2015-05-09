var path = require('path')

module.exports = {
  context: path.resolve(__dirname, './app'),
  entry: {
    app: './index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: '[name]-bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exlude: './node_modules' },
      { test: /\.css$/, loader: 'style!css', exclude: '/node_modules' },
      { test: /\.woff$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'file' },
      { test: /\.eot$/, loader: 'file' },
      { test: /\.svg$/, loader: 'file' }
    ]
  }
}
