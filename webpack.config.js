const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// 入口文件配置
const entry = {
    index: './src/index.ts'
};

module.exports = {
    // mode: 'production',
    mode: 'development',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    entry: {
        //需要打包文件
        ...entry
    },
    resolve: {
        //导入别名
        alias: {},
        //这些扩展名设置模块如何被解析
        extensions: ['.js', '.ts', '.tsx']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'inject-ts',
            inject: true,
            // chunks: chunks,//页面要引入的包
            filename: 'index.html', // 文件名
            template: './src/template.html' // 模板地址
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        {
                            plugins: ['@babel/plugin-proposal-class-properties']
                        }
                    ]
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            }
        ]
    },
    output: {
        filename: '[name].min.js',
        chunkFilename: '[name].min.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './'
    }
};
