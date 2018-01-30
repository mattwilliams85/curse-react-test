'use strict';

const webpack = require('webpack');
const path = require('path');
const packageJson = require('./package.json');

module.exports = {
    entry: {
        app: './source/main.tsx',
        vendor: Object.keys(packageJson['dependencies']),
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.webpack.js', '.web.js'],
    },
    module: {
        rules: [
            { use: 'ts-loader', test: /\.tsx?$/, exclude: /node_modules/ },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js'}),
    ],
};
