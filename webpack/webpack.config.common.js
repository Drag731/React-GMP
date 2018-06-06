const path = require('path');
const webpack = require('webpack');
const { ReactLoadablePlugin  } = require('react-loadable/webpack');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = {
    mode: process.env.NODE_ENV,

    output: {
        filename: 'js/[name].js',
        path: path.resolve('./public'),
        chunkFilename: 'js/[name].js',
        publicPath: 'public/'
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    optimization: {
        splitChunks: {
            minChunks: Infinity,
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        isDevMod ? new webpack.NamedModulesPlugin() : new webpack.HashedModuleIdsPlugin(),
        new ReactLoadablePlugin({
            filename: './public/react-loadable.json',
        }),
    ],
};