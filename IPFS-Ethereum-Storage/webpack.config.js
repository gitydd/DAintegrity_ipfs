var path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
    cloud: './cloud/cloud.js', 
    },
    output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
   plugins: [
    // Copy our app's index.html to the build folder.
    new CopyWebpackPlugin([
      { from: './cloud/cloud.html', to: "cloud.html" },
        { from: './lib/jquery-3.1.1.slim.min.js', to: "jquery-3.1.1.min.js" },
      { from: './lib/jquery.cookie.js', to: "jquery.cookie.js" },
      { from: './lib/bootstrap.min.js', to: "bootstrap.min.js" },
      { from: './lib/popper.min.js', to: "popper.min.js" },
    ])
  ],
    module: {
    rules: [
      {
       test: /\.css$/,
       use: [ 'style-loader', 'css-loader' ]
      }
    ],
    loaders: [
      { test: /\.json$/, use: 'json-loader' },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
      }
    ]
  },

  devServer: {
    compress: true,
    disableHostCheck: true
  }
};

