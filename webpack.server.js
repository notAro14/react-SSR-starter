const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './server/index.js',
  devtool: 'source-map',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve('dist/server'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
}
