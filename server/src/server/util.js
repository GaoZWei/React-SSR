import React from 'react'
import {
    StaticRouter
} from 'react-router-dom'
import Routes from '../Routes'
import {
    renderToString
} from 'react-dom/server'
import { Provider } from 'react-redux'
import getStore from '../store';

export const render = (req) => {
    const content = renderToString((
        //Static不会自动识别 //context数据传递
        <Provider store={getStore()}>
            <StaticRouter location={req.path} context={{}}>{Routes}</StaticRouter>
        </Provider>
    ))
    return `<html>
    <head><title>React的SSR渲染</title></head>
    <body>
        <div id='root'>${content}</div>
        </body>
    <script src="/index.js"></script>
    </html>`
}
