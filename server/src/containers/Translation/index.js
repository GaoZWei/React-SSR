import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Helmet } from "react-helmet";
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
        return (this.props.login ? <Fragment>
            <Helmet>
                <title>这是gao的翻译页面--丰富多彩的翻译资讯</title>
                <meta name="description" content="这是gao的翻译页面--丰富多彩的翻译资讯" />
            </Helmet>
            <div>
                {this.getList()}
            </div>
        </Fragment> : <Redirect to='/' />)
    }

    componentDidMount() {
        if (!this.props.list.length) {
            this.props.getTranslationList()
        }
    }
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
const ExportTranslation = connect(mapStateToProps, mapDispatchToProps)(Translation)

ExportTranslation.loadData = (store) => {
    //这个函数负责在服务器端渲染之前,把这个路由器需要的数据提前加载好
    return store.dispatch(getTranslationList())
}
export default ExportTranslation
