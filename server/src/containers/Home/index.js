import React, { Component } from 'react'
import Header from '../../components/Header'
//同构:一套react代码,在服务器端执行一次,在客户端执行一次
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'
class Home extends Component {
    getList() {
        const { list } = this.props
        return list.map((item) => {
            return <div key={item.id}> 登录名:{item.login} </div>
        })
    }
    render() {
        return (
            <div>
                <Header />
                {/* <div>hello Gaozw {this.props.name}</div> */}
                {this.getList()}
                <button onClick={() => {
                    alert('click')
                }}>click</button> </div>
        )
    }
    //只会客户端渲染会执行
    componentDidMount() {
        //必须有,服务器渲染只是第一次!!!解决加载其他页,跳转的问题
        if (!this.props.list.length) {
            this.props.getHomeList(false)
        }
    }
}

Home.loadData = (store) => {
    //这个函数负责在服务器端渲染之前,把这个路由器需要的数据提前加载好
    return store.dispatch(getHomeList(true))
}

const mapStateToProps = state => ({
    list: state.home.newsList,
    // name: state.home.name
})
const mapDispatchToProps = dispatch => ({
    getHomeList() {
        dispatch(getHomeList())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)