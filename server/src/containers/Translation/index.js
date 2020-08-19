import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTranslationList } from './store/actions'
import { Redirect } from 'react-router-dom'
class Translation extends Component {

    getList() {
        const { list } = this.props
        return list.map((item) => {
            return <div key={item.id}> 翻译后:{item.login} </div>
        })
    }
    render() {
        return this.props.login ?
            (<div>
                {this.getList()}
            </div>) :
            <Redirect to='/' />
    }

    componentDidMount() {
        if (!this.props.list.length) {
            this.props.getTranslationList()
        }
    }
}

Translation.loadData = (store) => {
    //这个函数负责在服务器端渲染之前,把这个路由器需要的数据提前加载好
    return store.dispatch(getTranslationList())
}

const mapStateToProps = state => ({
    list: state.translation.translationList,
    login: state.header.login
})
const mapDispatchToProps = dispatch => ({
    getTranslationList() {
        dispatch(getTranslationList())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Translation)