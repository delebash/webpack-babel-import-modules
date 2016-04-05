var path = require('path');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const webpack = require("webpack");
module.exports = {
  entry: './src/mybootstrap.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
    resolve: {
        extensions: ['', '.js']
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'src'),
        loader: 'babel-loader',
          query: {
              presets: ['es2015']
          }
      },
        { test: /\.css?$/, loader: 'style!css'},
        { test: /\.html$/, loader: 'html' },
        { test: /\.(png|gif|jpg)$/, loader: 'url', query: { limit: 8192 } },
        { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url', query: { limit: 10000, mimetype: 'application/font-woff2' } },
        { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url', query: { limit: 10000, mimetype: 'application/font-woff' } },
        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file' },
        { test: /\.scss$/, loader: 'style!css?sourceMap!postcss!sass?sourceMap'}

    ]
  }
};