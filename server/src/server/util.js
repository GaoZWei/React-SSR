import React from 'react'
import {
    StaticRouter, Route
} from 'react-router-dom'
import {
    renderToString
} from 'react-dom/server'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
//作为模板渲染
export const render = (store, routes, req, context) => {
    const content = renderToString((
        //Static不会自动识别   //context数据传递
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <div>
                    {/* {routes.map(route => (<Route {...route} /> //{}后面的是property属性,解构!!
                    ))} */}
                    {renderRoutes(routes)}
                </div>
            </StaticRouter>
        </Provider>
    ))
    const cssStr = context.css.length ? context.css.join('\n'):''
    //window.context 数据注水 // 
    return `<html>
    <head><title>React的SSR渲染</title>
    <style> ${cssStr}</style>
    </head>
    <body>
        <div id='root'>${content}</div>
        <script>
        window.context={
            state:${JSON.stringify(store.getState())}
        }
        </script>
        <script src="/index.js"></script>
        </body>
    </html>`
}
