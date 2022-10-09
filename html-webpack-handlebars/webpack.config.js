const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const HandlebarsPlugin = require("handlebars-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  // stats: "verbose",
  mode: "production",
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    compress: true,
    port: 9000,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new HtmlMinimizerPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        type: "asset/resource",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].css",
            },
          },
          "sass-loader",
        ],
      },
    ],
  },

  plugins: [
    
    new HandlebarsPlugin({
      // path to hbs entry file(s). Also supports nested directories if write path.join(process.cwd(), "app", "src", "**", "*.hbs"),
      entry: path.join(process.cwd(), "src", "*.hbs"),
      // output path and filename(s). This should lie within the webpacks output-folder
      // if ommited, the input filepath stripped of its extension will be used
      output: path.join(process.cwd(), "build", "[name].html"),
      // you can also add a [path] variable, which will emit the files with their relative path, like
      // output: path.join(process.cwd(), "build", [path], "[name].html"),

      // data passed to main hbs template: `main-template(data)`
      data: require("./src/data.json"),

      // globbed path to partials, where folder/filename is unique
      partials: [path.join(process.cwd(), "src", "components", "**", "*.hbs")],
    }),
    new CopyPlugin({
      patterns: [
        {
          context: path.resolve(__dirname, "dist"),
          from: "*.html",
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};
