const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',

    module: {
        rules: [
            {
                test: /\.css$/, // Match CSS files
                use: ['style-loader', 'css-loader'], // Loaders to process CSS files
            }
        ]
    },
};
