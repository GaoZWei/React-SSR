import express from 'express'
import React from 'react'
import Home from './containers/Home'
import {
    renderToString
} from 'react-dom/server'
//客户端渲染 =>React在浏览器上执行,消耗的是用户浏览器的性能
//服务器端渲染 =>React代码在服务器上执行,消耗的是服务器端的性能

const app = express()
app.use(express.static('public')) //发现你请求静态文件(下面的index.js),从根目录public中找
// 虚拟dom原理=>虚拟dom是真实dom的一个js对象映射
const content = renderToString( < Home / > )

app.get('/', (req, res) => res.send(
    `<html>
        <head><title>React的SSR渲染</title></head>
        <body>
            <div id='root'>${content}</div>
            </body>
        <script src="/index.js"></script>
        </html>`
))

app.listen(3000)