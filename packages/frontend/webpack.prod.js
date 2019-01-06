const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const DotEnv = require("dotenv-webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin

module.exports = {
  mode: "production",
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
                "babel-plugin-syntax-jsx"
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
  output: {
    path: path.join(__dirname, ".build"),
    filename: "bundle-[hash].js"
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new DotEnv({
      path: path.join(__dirname, "../../.env")
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html")
    })
  ]
}
