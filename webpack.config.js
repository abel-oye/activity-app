'use strict';

var path = require('path')
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin  = require('html-webpack-plugin')

module.exports = {
	entry: {
		list:[
			'./app/scripts/1212/webpack.js'
		]
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: [
				//'babel?presets[]=react,presets[]=es2015',
			],
			exclude: /node_modules/
		}, {
			test: /\.scss$/,
			//loader: 'style!css!sass'
			exclude: /node_modules/,
			loader:ExtractTextPlugin.extract('css!sass!autoprefixer')//不支持多参数
		}]
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		//publicPath:__dirname,
		filename: '[name].js'
	},
	resolve:{
		alias:{
			'fastclick':path.resolve(__dirname,'app/commons/fastclick.js'),
			'zepto':path.resolve(__dirname,'app/commons/zepto.1.1.6.js'),
			'ejs':path.resolve(__dirname,'app/commons/ejs.js'),
			'YmtApi':path.resolve(__dirname,'node_modules/YmtApi/YmtApi.js')
		}
	},
	plugins: [
		// new webpack.HotModuleReplacementPlugin(),
		// new webpack.NoErrorsPlugin(),
		// new webpack.optimize.OccurenceOrderPlugin(),
		// new webpack.optimize.CommonsChunkPlugin('vendors','vendors.js'),
		// new ExtractTextPlugin('[name].css',{
		// 	allChunks:true
		// }),
		// new webpack.DefinePlugin({
		// 	'process.env.NODE_ENV': JSON.stringify('development')
		// })
	]
}