// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

// module.exports = {
//   entry: {
//     app: './src/index.js',
//   },
//   devtool: 'inline-source-map',
//   devServer: {
//     contentBase: './dist',
//     hot: true
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: 'Output Management'
//     }),
//     new CleanWebpackPlugin(['dist']),
//     new webpack.HotModuleReplacementPlugin()
//   ],
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   }
// };

const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    another: './src/another-module.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Caching'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common' // Specify the common bundle's name.
    })
  ],
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  }
};