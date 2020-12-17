const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  watch: true,
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
    path: path.resolve(__dirname, 'dist/client'),
    filename: '[name].bundle.js',
    publicPath: '/assets/',
  },
  // devServer: {
  //   contentBase: path.resolve(__dirname, 'dist'),
  //   watchContentBase: true,
  //   hot: true,
  //   port: 3000,
  //   writeToDisk: true,
  //   publicPath: '/assets/',
  // },
}
