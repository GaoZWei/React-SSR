const path = require('path')
const {merge} = require('webpack-merge')
const config = require('./webpack.base.js')
const clientConfig = {
    mode:'development',
    entry: './src/client/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [{
            test: /\.css?$/,
            use: ['style-loader', {//客户端渲染,除了解析名字,还在header中加css
                loader: 'css-loader',
                options: {
                    // importLoaders: 1,
                    // modules: true,
                    esModule: true,
                    modules:{
                        namedExport: true,
                        exportGlobals: true,
                        localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    }
                }
            }]
        }]
    }
}
module.exports=merge(config,clientConfig)