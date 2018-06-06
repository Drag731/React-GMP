const express = require('express');
const clientConfig = require('../webpack/webpack.config.client');

const app = express();

if (process.env.NODE_ENV === 'development') {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
    const webpackConfig = require('../webpack');
    const publicPath = clientConfig.output.publicPath;
    const options = { publicPath, stats: {colors: true}};

    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, options));
    app.use(webpackHotMiddleware(compiler.compilers.find(c => c.name === 'client')));
    app.use(webpackHotServerMiddleware(compiler));
} else {
    const serverRenderer = require('../public/js/serverRenderer').default;

    app.use(express.static('public'));
    app.use(serverRenderer());
}

module.exports = app;