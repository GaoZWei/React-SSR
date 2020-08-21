import React, { Component } from 'react'
//同构:一套react代码,在服务器端执行一次,在客户端执行一次
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'
import styles from './style.css'
class Home extends Component {
    componentWillMount() {
        if (this.props.staticContext) {
            // console.log(styles._getContent());
            this.props.staticContext.css.push('body{background: green}.test {margin-top: 50px;background: red}')
        }
    }
    getList() {
        const { list } = this.props
        return list.map((item) => {
            return <div key={item.id}> 登录名:{item.login} </div>
        })
    }
    render() {
        return (
            // <div className={styles.model}>
            <div className="test">
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
            this.props.getHomeList()
        }
    }
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

const ExportHome = connect(mapStateToProps, mapDispatchToProps)(Home)
ExportHome.loadData = (store) => {
    //这个函数负责在服务器端渲染之前,把这个路由器需要的数据提前加载好
    return store.dispatch(getHomeList())
}
export default ExportHome