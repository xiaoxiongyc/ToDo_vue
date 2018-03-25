const path = require('path');
var debug = process.env.NODE_ENV !== "production";
const HTMLPlugin = require('html-webpack-plugin');
// 判断是否为开发环境
const isDEV = process.env.NODE_ENV === 'development';
const webpack = require('webpack');

const config = {
    // 前端项目  webpack 的编译目标是 web 平台
    target:'web',
    /* __dirname 代表本文件所在的路径 */
    entry:path.join(__dirname, 'src/index.js'),
    devtool: debug ? "inline-sourcemap" : null,
    output:{
        filename:'bundle.js',
        path:path.join(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.jsx$/,
                loader:'babel-loader'
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.styl$/,
                use:[
                    'style-loader',
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            sourceMap :true,
                        }
                    },
                    'stylus-loader'
                ]
            },
            {
                test:/\.(gif|jpg|jpeg|png|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:1024,
                            name:'[name].[ext]'
                        }
                    }
                ]
            },
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:isDEV ? '"development"' :'"production"'
            }
        }),
        // 生成 html 文件，并引入 bundle.js 文件
        new HTMLPlugin({
            template: 'index.html',
        }),
    ]
}

if(isDEV){
    // 编译之后的代码一团乱，配置之后，调试时我们看到的是我们自己书写的代码，不是编译之后的代码
    config.devtool = '#cheap-module-eval-source-map'
    config.devServer = {
        port:8000,
        host:'0.0.0.0',
        // 显示错误信息
        overlay:{
            errors:true,
        },
        // 启动服务器之后，自动打开浏览器
        // open:true,
        // 改动某一组件，只渲染当前组件  局部渲染
        hot:true
    }

    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports = config;
