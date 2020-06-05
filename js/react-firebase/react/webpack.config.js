const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: ['node_modules']
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        loader: require.resolve('babel-loader'),
        options: {
          babelrc: false,
          presets: ['@babel/preset-react', '@babel/preset-env'],
          plugins: ["babel-plugin-styled-components"],
        }
      }
    ]
  }
}