//webpack.config.js
module.exports = {
    entry: './containers/app.js',
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
    }

};