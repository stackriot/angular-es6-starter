module.exports = {

  entry: './src/app/app.js',

  output: {
    path: __dirname + '/dist/',
    publicPath: '/dist/',
    filename: 'bundle.js'
  },

  debug: true,

  devServer: {
    historyApiFallback: true,
    compress: true
  },

  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }

}
