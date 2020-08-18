import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from './store/index'
class Header extends Component {
    render() {
        const { login, handleLogin, handleLogout } = this.props
        return (
            <div>
                <Link to='/'>首页</Link>
                <br />
                {
                    login ? <Fragment><div onClick={handleLogout}>退出</div><br /><Link to='/translation'>翻译列表</Link></Fragment> : <div onClick={handleLogin}>登录</div>
                }
                <br />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    login: state.header.login
})
const mapDispatchToProps = (dispatch) => ({
    //客户端渲染执行就可以
    handleLogin() {
        dispatch(actions.login())
    },
    handleLogout() {
        dispatch(actions.logout())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)