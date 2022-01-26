const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: { main: './src/js/main.js' },
    devtool: false,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/main.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // new CleanWebpackPlugin(),
    ]
};
