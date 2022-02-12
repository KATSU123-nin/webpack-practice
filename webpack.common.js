const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = ({ outputFile, outputImg, outputCss }) => ({
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `${outputFile}.js`,
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
                        loader: "postcss-loader",
                        options: {
                          // PostCSS側でもソースマップを有効にする
                          sourceMap: true,
                          postcssOptions: {
                            // ベンダープレフィックスを自動付与する
                              plugins: [
                                  require("autoprefixer")({ grid: true })
                              ],
                          },
                        },
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
                    filename: `images/${outputImg}[ext]`,
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
            filename: `styles/${outputCss}.css`
        }),
        new ESLintPlugin({
            extensions: ['.js'],
            exclude: 'node_modules'
        })

    ]
});
