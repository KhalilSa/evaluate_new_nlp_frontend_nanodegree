const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
    entry: path.join(__dirname, 'src/client/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js',
        libraryTarget: 'var',
        library: 'Client'
    },
    mode: 'production',
    optimization: {
        minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})]
    },
    module: {
        rules: [{
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }, {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
            options: {
                name: 'images/[name].[ext]',
            }
        }]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
        // new WorkboxPlugin.GenerateSW(),
        new Dotenv()
    ]
}