import express from 'express'
import {
    render
} from './util'
//客户端渲染 =>React在浏览器上执行,消耗的是用户浏览器的性能
//服务器端渲染 =>React代码在服务器上执行,消耗的是服务器端的性能

const app = express()
app.use(express.static('public')) //发现你请求静态文件(下面的index.js),从根目录public中找
// 虚拟dom原理=>虚拟dom是真实dom的一个js对象映射


app.get('*', function (req, res) {
    res.send(render(req))
})

app.listen(3000)