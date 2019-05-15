const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: `${__dirname}/src/index.js`,
	output: {
		path: `${__dirname}/dist`,
		filename: 'bundle.[hash].js',
	},
	devtool: "source-map",
	mode: "development",

	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" }
				]
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				use: [
					{ loader: 'file-loader' },
				],
			},
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: "Hello webpack"
		}),
		new CleanWebpackPlugin(),
	],

	devServer: {
		port: 9090
	}
};