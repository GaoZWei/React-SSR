import React from 'react'
import Header from '../../components/Header'
//同构:一套react代码,在服务器端执行一次,在客户端执行一次
const Login = () => {
    return (
        <div>
            <Header/>
            <div>Login</div>
         </div>
    )
}

export default Login