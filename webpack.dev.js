const path = require('path');
const webpack = require('webpack');
const publicPath = '/dist/build/';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.join(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.join(__dirname, publicPath),
        filename: '[name].bundle.js',
        publicPath: publicPath,
        sourceMapFilename: '[name].map',
    },
    devtool: 'eval',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html")
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin({
            filename: "style.css",
            disable: false
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css']
    },
    devServer: {
        port: 3000,
        host: 'localhost',
        proxy: {
            "/api": "http://localhost:3000"
        },
        historyApiFallback: true,
        noInfo: true,
        stats: 'errors-only',
        publicPath: publicPath,
        contentBase: path.join(__dirname, publicPath),
        overlay: {
            warnings: true,
            errors: true
        },
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.js|.jsx?$/,
                exclude: /(node_modules)/,
                use:  ['babel-loader']
            }]
    }
};
