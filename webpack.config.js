const path = require('path');

const config = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node-modules/,
        query: {presets: ['env', 'react']}
      }
    ]
  }
}

module.exports = config;
