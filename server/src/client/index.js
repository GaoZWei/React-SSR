import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../Routes'
// import Home from '../containers/Home'

const App = () => {
    return (
        <BrowserRouter>
            {Routes}
        </BrowserRouter>
    )
}
// 客户端同构渲染
ReactDom.hydrate(< App />, document.getElementById('root'))