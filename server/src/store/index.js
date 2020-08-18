import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../containers/Home/store'
import { reducer as headerReducer } from '../components/Header/store'
import { reducer as translationReducer } from '../containers/Translation/store'
import clientAxios from '../client/request'
import serverAxios from '../server/request'
const reducer = combineReducers({
    home: homeReducer,
    header:headerReducer,
    translation:translationReducer
})
export const getStore = (req) => {//req用来实现传递cookie
    //改变服务器端store内容,使用serverAxios
    return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios(req))))//把serverAxios改成函数
}
export const getClientStore = () => {
    //数据脱水,让客户端快速渲染服务器生成的window.context.state
    //改变客户端端store内容,使用clientAxios
    const defaultState=window.context.state
    return createStore(reducer, defaultState,applyMiddleware(thunk.withExtraArgument(clientAxios)))
}