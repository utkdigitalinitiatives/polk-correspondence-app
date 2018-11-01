const path = require('path');
const webpack = require('webpack');
const DefinePlugin = webpack.DefinePlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, 'resources/ut-tei/src'),
    entry: [
        './index.js'
        // the entry point of our app
    ],
    output: {
        filename: 'ut-tei.js',
        path: path.resolve(__dirname, 'resources/ut-tei/dist'),
        publicPath: 'resources/ut-tei/dist/'
    },
    devtool: false,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader',],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: "css-loader", options: { minimize: true } // translates CSS into CommonJS
                            },
                            {
                                loader: "sass-loader" // compiles Sass to CSS
                            }
                        ],
                        // use style-loader in development
                        fallback: "style-loader"
                    }
                )
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                use: 'url-loader'
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(png|gif|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                include: path.resolve(__dirname, 'resources/ut-tei/src/media'),
                use: [
                    {
                        loader: 'file-loader?name=media/[name].[ext]'
                    }
                ]
            }
        ]
    },
    plugins: [
        new DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),

        new UglifyJsPlugin({
            sourceMap: false
        }),

        new ExtractTextPlugin({filename: 'ut-tei.css', allChunks: true}),

        new HtmlWebPackPlugin({
            template: path.join(__dirname, "./resources/ut-tei/src/index.html"),
            filename: "./index.html"
        })
    ],
};