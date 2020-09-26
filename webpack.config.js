const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'bundle-[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
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
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
                options: { appendTsSuffixTo: [/\.vue$/] },
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
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Vue-3-test',
            template: 'public/index.html',
        }),
        new VueLoaderPlugin(),

    ],
};
