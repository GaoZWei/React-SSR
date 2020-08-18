import React from 'react'
import Header from './components/Header/index'
import { renderRoutes } from 'react-router-config'
import {actions} from './components/Header/store/index'
//同构:一套react代码,在服务器端执行一次,在客户端执行一次
const App = (props) => {
    return (
        <div>
            <Header />
            {/* 显示页面的内容 */}
            {renderRoutes(props.route.routes)}
        </div>
    )
}
App.loadData=(store)=>{
    //服务器端渲染就行
    return store.dispatch(actions.getHeaderInfo());
}
export default App