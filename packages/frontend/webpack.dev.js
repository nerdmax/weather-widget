const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const DotEnv = require("dotenv-webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const webpack = require("webpack")

const wdsConfig = { host: "localhost", port: 8080 }

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src/index.ts"),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [
                "babel-plugin-syntax-typescript",
                "babel-plugin-syntax-jsx",
                "react-hot-loader/babel"
              ]
            }
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              namedExport: true,
              camelCase: true,
              localIdentName: "[name]__[local]"
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    plugins: [new TsConfigPathsPlugin()]
  },
  devtool: "cheap-module-eval-source-map",
  output: {
    devtoolModuleFilenameTemplate: "[absolute-resource-path]",
    path: path.join(__dirname, ".build"),
    filename: "bundle.js"
  },
  devServer: {
    host: wdsConfig.host,
    port: wdsConfig.port,
    hot: true,
    historyApiFallback: true
  },
  optimization: {
    namedModules: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DotEnv({
      path: path.join(__dirname, "../../.env")
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html")
    })
  ]
}
