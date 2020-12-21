const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')

const mode = process.env.NODE_ENV
const isModeDevelopment = mode === 'development'

const conf = {
  mode,
  entry: './src/index.js',
  devtool: isModeDevelopment ? 'inline-source-map' : 'source-map',
  watch: false,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build/client'),
    filename: isModeDevelopment
      ? '[name].bundle.js'
      : '[name].[contenthash].bundle.js',
    publicPath: '/assets/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build/client'),
    hot: true,
    port: 3000,
    publicPath: '/assets/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/template.html'),
      filename: 'index.html',
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackHarddiskPlugin(),
  ],
}

module.exports = conf
