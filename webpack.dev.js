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
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json'
    },
    devtool: 'eval',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html")
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: "style.css"
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css']
    },
    devServer: {
        port: 3000,
        host: 'localhost',
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
