const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
