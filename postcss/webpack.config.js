const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	entry:"./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
		rules: [
					{
						test: /\.css$/,
						exclude: /node_modules/,
						use: [
							{
								loader: 'style-loader',
							},
							{
								loader: 'css-loader',
								options: {
									importLoaders: 1,
								}
							},
							{
								loader: 'postcss-loader'
							}
						]
					}
				]
  },  plugins: [
    new ExtractTextPlugin('dist/css/[name].css'),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html'
    }),
  ],
};

module.exports = config;