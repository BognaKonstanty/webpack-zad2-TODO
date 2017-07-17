const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');
////console.log('NODE_ENV:', env);
//const path = require('path');
var env = process.env.NODE_ENV || 'development';
var plugins = [
new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html',
        inject: 'body',
    })
];

console.log('NODE_ENV:', env);

if (env === 'production') {
plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new OptimizeJsPlugin({
      sourceMap: false
    })
  );
}



module.exports = {
    entry: './src/index.js',
     output: {
        path: __dirname + '/build',
        filename: 'app.bundle.js'
     },
     module: {
        rules: [
    		{
        		test: /\.js$/,
        		loader: "babel-loader"
    		},
    		{
        		test: /\.css$/,
        		use: [
            		{ loader: 'style-loader'},
            		{
                		loader: 'css-loader',
                		options: {
                    		modules: true
               			 }
            		}
        		]
    		}
		]
    },
    plugins: [
                new HtmlWebpackPlugin({
                template: 'src/index.html',
                filename: 'index.html',
                inject: 'body'
   }),
        new webpack.optimize.UglifyJsPlugin(),
        new OptimizeJsPlugin({sourceMap: false})
        
    ]

   

};