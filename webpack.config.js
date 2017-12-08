const webpack = require('webpack')

module.exports = {
  entry: "./index.js",
  devtool: "source-map",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  }
}
