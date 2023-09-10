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
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i, // Match image file extensions
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192, // Convert images <= 8kb to base64 strings (adjust the limit as needed)
                            name: 'images/[name].[ext]', // Output file path and name
                        },
                    },
                ],
            },
        ],
    },
};
