import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../containers/Home/store'
// const reducer = (state = { name: 'gao' }, action) => {
//     return state
// }
const reducer = combineReducers({
    home: homeReducer
})
export const getStore = () => {
    return createStore(reducer, applyMiddleware(thunk))
}
export const getClientStore = () => {
    //数据脱水,让客户端快速渲染服务器生成的window.context.state
    const defaultState=window.context.state
    return createStore(reducer, defaultState,applyMiddleware(thunk))
}