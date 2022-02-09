const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge').merge;
const commonConf = require('./webpack.common');
const outputFile = '[name].[chunkhash]';
const outputImg = '[contenthash]';
const outputCss = '[name].[chunkhash]';


module.exports = () => webpackMerge(commonConf({ outputFile, outputImg, outputCss }), {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',
        })
    ]
});
