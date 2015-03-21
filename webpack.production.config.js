var webpack = require('webpack');

/**
 * This is the Webpack configuration file for production.
 */
module.exports = {
  entry: "./src/main",

  output: {
    path: __dirname + "/build/",
    filename: "app.js"
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.sass$/, exclude: /node_modules/, loader: "style!css!sass?indentedSyntax" }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
