import React from 'react'
import Header from '../../components/Header'
//同构:一套react代码,在服务器端执行一次,在客户端执行一次
const Home = () => {
    return (
        <div>
            <Header/>
            <div>hello Gaozw</div>
            <button onClick={() => {
                alert('click')
            }}>click</button> </div>
    )
}

export default Home