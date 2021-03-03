const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
    entry: path.join(__dirname, './src/index.js'),
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                  ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                  {
                    loader: 'url-loader'
                  },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new MiniCssExtractPlugin({filename:"styles.css"}),
        new HtmlWebpackPlugin({
            template: path.resolve('./src/index.html'),
          })
    ],
};
