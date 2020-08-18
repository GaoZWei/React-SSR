import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import routes from '../Routes'
import { Provider } from 'react-redux'
import {getClientStore} from '../store';
//客户端二次渲染
const store=getClientStore()
const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    {/* {routes.map(route => (<Route {...route} />
                    ))} */}
                    {renderRoutes(routes)}
                </div>
            </BrowserRouter>
        </Provider>
    )
}
// 客户端同构渲染
ReactDom.hydrate(< App />, document.getElementById('root'))