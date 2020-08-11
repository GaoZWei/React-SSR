import React from 'react'
import ReactDom from 'react-dom'
import Home from '../containers/Home'
// 客户端同构渲染
ReactDom.hydrate(< Home />, document.getElementById('root'))