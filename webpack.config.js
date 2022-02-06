const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = {
    mode: 'development', // 分割
    entry: './src/js/main.js',
    devtool: false, // 分割
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.js', // 分割
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
                loader: 'babel-loader'
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                          options: {
                            importLoaders: 2,
                           },
                      },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader',
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff2?|tff|eot)$/,
                use: [
                    {
                        loader: 'image-webpack-loader'
                    }
                ],
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]',  // 分割
                },
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/main.css' // 分割
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',
        }),
        new ESLintPlugin({
            extensions: ['.js'],
            exclude: 'node_modules'
        })

    ]
};
