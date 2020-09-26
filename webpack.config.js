const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    devServer: {
        // contentBase: './dist',
        hot: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 'file-loader',

            },
            {
                test: /\.(woff|woff2)$/,
                use: 'file-loader',

            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Vue-3-test',
            template: 'public/index.html',
        }),

    ],
};
