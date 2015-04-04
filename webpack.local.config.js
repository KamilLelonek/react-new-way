var webpack = require("webpack");

module.exports = {
  devtool: "eval",

  entry: [
    "webpack/hot/only-dev-server",
    "./src/main"
  ],

  output: {
    path:       __dirname + "/build/",
    filename:   "app.js"
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["react-hot", "babel-loader"]},
      { test: /\.sass$/, exclude: /node_modules/, loader: "style!css!sass?indentedSyntax" }
    ]
  },

  resolve: {
    extensions: ["", ".js", ".jsx"]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      "environment": {
        "HOST": JSON.stringify("http://localhost:3000")
        // "HOST": JSON.stringify("http://localhost:5000")
      }
    })
  ]
}
