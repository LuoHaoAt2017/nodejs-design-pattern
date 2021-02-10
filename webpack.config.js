const path = require("path");

module.exports = {
  mode: 'development',
  target: "node",
  entry: './src/main.ts',
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.ts$/,
        use: ['ts-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  }
}