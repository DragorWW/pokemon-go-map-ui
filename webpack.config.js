var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: path.join(__dirname, './app'),
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=build/image/[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  }
}