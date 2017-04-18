const path = require('path');
const webpack = require('webpack');

const DIST_DIR = path.resolve(__dirname, 'www')
const SRC_DIR = path.resolve(__dirname, 'src')

module.exports = {
    entry: SRC_DIR + '/app.js',
    output: {
        path: DIST_DIR + '/js',
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['react', 'es2015', 'stage-2']
            }
        }],
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        ignored: /node_modules/,
        poll: 1000
    },
};

