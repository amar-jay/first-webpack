const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
  entry: {
      bundle: "./src/main.ts"
  },
    devtool: "inline-source-map",
    output: {
    filename: "[bundle][contenthash].js",
    path: path.resolve(__dirname, "dist"),
//    publicPath: "/assets/"
  },
  devServer: {
      static: {
          directory: path.resolve(__dirname, "dist"),          
      },
      port: 3000,
      hot: true,
      compress: true,
      historyApiFallback: true,
      open: true

  },
    resolve: {
    extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Demo app",
            filename: "index.html",
            template: "./src/demo.html"
        })
    ]
}
