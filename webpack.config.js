const path = require('path');

module.exports = {
    mode: 'development',
    devtool: false,
    entry: {main: './src/main.js'},
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js'
    }
};
