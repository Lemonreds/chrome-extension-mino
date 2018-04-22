const webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'


const config = {
    entry: path.join(__dirname, 'app/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './build')
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.(scss|sass)$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                publicPath: '../../',
                use: [{
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            minimize: true
                        }
                    },
                    'sass-loader'
                ]
            })
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    name: 'img/[name].[hash:4].[ext]',
                    limit: 1024
                }
            }]
        }, {
            test: /\.(woff|svg|eot|ttf)\??.*$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'New Tab'
        }),
        new ExtractTextPlugin('style.css'),
    ]
}

if (isDev) {
    config.devtool = '#cheap-module-eval-source-map'
}


module.exports = config