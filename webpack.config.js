// // Generated using webpack-cli https://github.com/webpack/webpack-cli

// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

// const isProduction = process.env.NODE_ENV == "production";

// const config = {
//   entry: "./src/index.js",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//   },
//   devServer: {
//     open: true,
//     host: "localhost",
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "index.html",
//     }),

//     // Add your plugins here
//     // Learn more about plugins from https://webpack.js.org/configuration/plugins/
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|sa|sc|c)ss$/i,
//         use: [
//             'style-loader',
//             'css-loader',
//             'sass-loader'
//           ],
//         type: "asset",
//       },

//       // Add your rules for custom modules here
//       // Learn more about loaders from https://webpack.js.org/loaders/
//     ],
//   },
// };

// module.exports = () => {
//   if (isProduction) {
//     config.mode = "production";

//     config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
//   } else {
//     config.mode = "development";
//   }
//   return config;
// };
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      { exclude: /node_modules/ },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  output: {
    clean: true,
  },

  devServer: {
    open: true,
    host: 'localhost',
  },
};