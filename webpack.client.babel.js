import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin'
import { WebpackManifestPlugin } from 'webpack-manifest-plugin'

import Html from './src/html'

const mode = process.env.NODE_ENV
const isDevmode = mode === 'development'

const conf = {
  mode,
  entry: './src/index.js',
  devtool: isDevmode ? 'inline-source-map' : 'source-map',
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
    path: path.resolve(__dirname, 'dist', 'client'),
    // filename: isDevmode ? '[name].bundle.js' : '[name].[contenthash].bundle.js',
    filename: '[name].bundle.js',
    publicPath: '/assets/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist', 'client'),
    historyApiFallback: true,
    hot: true,
    port: 4000,
    publicPath: '/assets/',
  },
  plugins: isDevmode
    ? [
        new HtmlWebpackPlugin({
          templateContent: Html({ title: 'React SSR' }),
          filename: 'index.html',
          alwaysWriteToDisk: true,
        }),
        new HtmlWebpackHarddiskPlugin(),
      ]
    : [new WebpackManifestPlugin()],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
}

export default conf
