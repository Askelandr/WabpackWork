const path = require(`path`);
const HTMLWebpackPlugin = require(`html-webpack-plugin`);
const { CleanWebpackPlugin } = require(`clean-webpack-plugin`);
module.exports = {
  entry: {
    main: `./index.js`,
  },
  output: {
    filename: `[name].[contenthash].js`,
    path: path.resolve(__dirname, `dist`),
  },
  context: path.resolve(__dirname, `src`),
  plugins: [
    new HTMLWebpackPlugin({
      template: `./index.html`,
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [`style-loader`, `css-loader`],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [`file-loader`],
      },
    ],
  },
};
