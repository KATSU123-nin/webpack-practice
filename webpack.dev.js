const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge').merge;
const commonConf = require('./webpack.common');
const outputFile = '[name]';
const outputImg = '[name]';
const outputCss = '[name]';


module.exports = () => webpackMerge(commonConf({ outputFile, outputImg, outputCss }), {
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',
        })
    ]
});
