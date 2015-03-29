var webpack = require('webpack');

module.exports = {
  entry: "./src/main",

  output: {
    path:     __dirname + "/build/",
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
  },

  plugins: [
    new webpack.DefinePlugin({
      "environment": {
        "HOST": JSON.stringify("https://rails-new-way.herokuapp.com")
      }
    })
  ]
}
