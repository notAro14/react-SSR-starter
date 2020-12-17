const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './server/index.js',
  devtool: 'source-map',
  watch: true,
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve('dist/server'),
    filename: 'server.js',
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
