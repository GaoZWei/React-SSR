import React from 'react'
import {
    StaticRouter
} from 'react-router-dom'
import Routes from '../Routes'
import {
    renderToString
} from 'react-dom/server'

export const render=(req)=>{
    const content = renderToString((
        //Static不会自动识别
        <StaticRouter location={req.path} context={{}}>{Routes}</StaticRouter> //context数据传递
    ))
    return `<html>
    <head><title>React的SSR渲染</title></head>
    <body>
        <div id='root'>${content}</div>
        </body>
    <script src="/index.js"></script>
    </html>`
}
