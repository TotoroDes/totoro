const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const DIST_PATH = path.resolve(__dirname, './dist');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: DIST_PATH,
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules|dist/,
            use: 'babel-loader',
        },
         {
             test: /\.css$/,
             exclude: /node_modules|dist/,
             use: [
                    'style-loader',
                    'css-loader'
              ]
          }
        ],
    },
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: DIST_PATH,
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './templates/index.ejs',
        }),
    ],
};