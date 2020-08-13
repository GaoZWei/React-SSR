import React, { Component } from 'react'
import Header from '../../components/Header'
//同构:一套react代码,在服务器端执行一次,在客户端执行一次
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'
class Home extends Component {
    getList() {
        const { list } = this.props
        return list.map((item) => {
            return <div key={item.sid}>{item.name} </div>
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
        this.props.getHomeList()
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
export default connect(mapStateToProps, mapDispatchToProps)(Home)