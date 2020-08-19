import express from 'express'
import proxy from 'express-http-proxy'
import { render } from './util'
//客户端渲染 =>React在浏览器上执行,消耗的是用户浏览器的性能
//服务器端渲染 =>React代码在服务器上执行,消耗的是服务器端的性能
import { getStore } from '../store';
import routes from '../Routes'
import { matchRoutes } from 'react-router-config'//匹配多层次路由
const app = express()
app.use(express.static('public')) //发现你请求静态文件(下面的index.js),从根目录public中找
app.use('/users', proxy('https://api.github.com', {//把node server 当做中间层
    proxyReqPathResolver: function (req) {
        // 课程中 return 'ssr/api'+req.url
        return '/users' + req.url
    }
}
))
// 虚拟dom原理=>虚拟dom是真实dom的一个js对象映射

app.get('*', function (req, res) {
    const store = getStore(req);
    //根据路由的路径,来往store里面加数据
    const matchedRoutes = matchRoutes(routes, req.path)
    //让matchRoutes中所有的组件,对应的loadData方法执行一次
    const promises = []
    matchedRoutes.forEach(item => {
        // promise函数是异步的
        if (item.route.loadData) {
            //页面要加载A,B,C,D四个组件,这四个组件都需要服务器端加载数据 promises=[A,B,C,D]
            //A数据有误,会调用catch,外部promise成功的
            const promise = new Promise((resolve, reject) => {
                item.route.loadData(store).then(resolve).catch(resolve)//操作store函数!!!(本身就是异步的)
            })//让外层Promise成功!!!
            promises.push(promise)
        }
    })
    //页面要加载A,B,C,D四个组件,这四个组件都需要服务器端加载数据 promises=[A,B,C,D]
    //假设A错误,BCD几种情况
    //1.BCD已经加载完成了
    //2.BCD接口慢,BCD没有加载完成,pending,store中就没有数据了

    //等待所有的promise执行成功,再执行下面的
    Promise.all(promises).then(() => {
        const context = {};
        const html = render(store, routes, req, context)
        // 重定向时会自动帮你发现redirect (StaticRouter结合renderRoutes)
        if (context.action == 'REPLACE') {//服务器端重定向301
            res.redirect(301, context.url)
        }
        else if (context.NOT_FOUND) {
            res.status(404)
            res.send(html)
        } else {
            //渲染模板
            res.send(html)
        }
    })
    // .catch(() => {
    //     res.end('sorry,request error')
    // })
})

app.listen(3000)