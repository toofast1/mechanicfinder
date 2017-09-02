const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const indexConfig = {
    favicon: path.join(__dirname, 'src', 'assets', 'img', 'logo.png'),
    template: path.join(__dirname, 'src', 'index.html')
};

const conf = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        hot: true,
        port: 3000,
        overlay: true,
        watchContentBase: true
    },
    resolve: {
        extensions: 
        [".js", ".json", ".jsx", ".png", ".jpeg", ".svg", 
         ".jpg", ".scss", ".css", ".gif", ".ttf"],
        alias: {
            assets: path.resolve(__dirname, 'src/assets')
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader'          
            },
            {
                test: /\.css$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                importLoaders: 1,
                                modules: true,
                                localIdentName: '[path]__[name]__[local]__[hash:base64:5]'
                            }
                        },
                        { loader: 'postcss-loader', options: { plugins: [require('autoprefixer')()] } }
                    ],
                    fallback: 'style-loader?sourceMap'
                }))
            },
            {
                test: /\.(jpe?g|png|gif|svg|ttf)$/i,
                loaders: ['url-loader']
            },
            {
                test: /\.json/,
                use: 'json-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(indexConfig),
        new ExtractTextPlugin('style.css'),
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = conf;