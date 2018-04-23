const publicPath = '/dist/build/';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    context: path.join(__dirname, 'src'),
    mode: 'production',
    entry: './index.js',
    output: {
        path: path.join(__dirname, '/dist/assets'),
        filename: '[name].bundle.js',
        publicPath: publicPath,
        sourceMapFilename: '[name].map'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css']
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    cache: true,
                    parallel: true,
                    uglifyOptions: {
                        compress: false,
                        ecma: 6,
                        mangle: true
                    },
                    sourceMap: true
                }
            })
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html")
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new ExtractTextPlugin({
            filename: "style.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
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
