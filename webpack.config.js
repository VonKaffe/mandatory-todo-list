const path = require('path');
const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "./dist"),        
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "./dist"), // the root for the server
        watchContentBase: true, // so we reload if other stuff like CSS changes
        port: 9090, // it'll now be at http://localhost:9000
        watchOptions: {
            ignored: /node_modules/
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new WebpackNotifierPlugin({alwaysNotify: true}),
    ]
};
