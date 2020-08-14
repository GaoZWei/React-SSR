import React from 'react'
// import { Route } from 'react-router-dom';
import Home from './containers/Home'
import Login from './containers/Login'
export default [
    {
        path: "/",
        component: Home,
        exact: true,
        loadData: Home.loadData,
        key: 'home',
        // routes: [{     多级路由,先不用
        //     path: "/test",//=>react-router-config
        //     component: Login,
        //     exact: true,
        //     key: 'test'
        // }]
    },
    {
        path: "/login",
        component: Login,
        exact: true,
        key: 'login'
    }

]
// export default (
//     <div>
//         <Route path="/login" exact component={Login} ></Route>
//     </div>
// )