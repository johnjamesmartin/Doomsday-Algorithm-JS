module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: './dist/js/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};
