const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'source-map',
	resolve: {
		modules: [
			path.resolve(__dirname, ''),
			path.resolve(__dirname, 'node_modules')
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
		})
	]
}