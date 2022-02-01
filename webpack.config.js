const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loader = require('sass-loader');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/js/main.js',
    devtool: false,
    output: {
        path: path.resolve(__dirname, 'dist'),
        // assetModuleFilename: 'images/[hash][ext][query]',
        filename: 'js/main.js',
        clean: true,
    },
    devServer: {
        open: true
    },
    stats: {
        children: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        // options: {
                        //     presets: ['@babel/preset-env'],
                        // },
                    },
                ],
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                        },
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'image-webpack-loader' // 追加
                    }
                ],
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]',
                },
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/main.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            filename: 'index.html',
        }),
        // new CleanWebpackPlugin(),
    ]
};
