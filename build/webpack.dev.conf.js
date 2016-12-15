/**
 * Created by han on 2016/12/14.
 * 开发模式下要读取的配置文件
 */
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// 引入基本配置
var config = require('./webpack.config');

config.output.publicPath = '/';

config.plugins = [

    // 添加三个插件
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),

    new ExtractTextPlugin("[name].[contenthash].css"),
    new HtmlWebpackPlugin({
        filename: 'app/index/index.html',
        template: path.resolve(__dirname, '../app/index/index.html'),
        inject: true
    })
];

module.exports = config;