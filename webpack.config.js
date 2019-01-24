const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
	},
  module: {
    rules: [
			{
				test: /\.(sass|scss)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						// {
						// 	loader: 'css-loader',
						// 	options: {
						// 		url: true,
						// 	},
						// },
						// 'css-loader?url=true',

						'css-loader?url=true',
						'resolve-url-loader',
						'sass-loader'
					]
				})
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					'file-loader?name=[name].[ext]&outputPath=images/&publicPath=images/',
          // {
          //   loader: 'file-loader',
          //   options: {
					// 		name: '[name].[ext]',
					// 		outputPath: "images/",
					// 	},
          // },
					'image-webpack-loader'
				]
			}
		]
	},
  devServer: {
		contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
		stats: "errors-only",
		open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Konrad Kaminski | Creative Front-end Developer',
        template: 'src/index.html'
      }),
    new ExtractTextPlugin('css/styles.css'),
  ]
};