const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { merge } = require('webpack-merge')
const config = require('./webpack.base.js')
const serverConfig = {
    target: 'node',
    mode: 'development',
    entry: './src/server/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            test: /\.css?$/,
            use: ['isomorphic-style-loader', { //服务器端用isomorphic-style-loader
                loader: 'css-loader',
                options: {
                    // importLoaders: 1,
                    // modules: true,
                    esModule: true,
                    modules: {
                        namedExport: true,
                        exportGlobals: true,
                        localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    }
                }
            }]
        }]
    },
    externals: [nodeExternals()]
}
module.exports = merge(config, serverConfig)