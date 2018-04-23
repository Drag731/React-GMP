const publicPath = '/dist/build/';
const path = require('path');
const webpack = require('webpack');

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
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html")
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
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
