const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      // Tilføj eventuelle regler for CSS, JS, og billeder
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Stien til din index.html
    }),
  ],
};
