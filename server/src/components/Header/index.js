import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from './store/index'
import styles from './style.css'
import withStyle from '../../withStyle' //高阶组件渲染!!!
class Header extends Component {
    // componentWillMount() {
    //     if (this.props.staticContext) {
    //         console.log(styles);
    //         // this.props.staticContext.css.push(styles._getCss()) 假装实现
    //         this.props.staticContext.css.push('.model{background: pink}')
    //     }
    // }
    render() {
        const { login, handleLogin, handleLogout } = this.props
        return (
            // <div className={styles.model}> //下面假装成功
            <div className="model"> 
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

// export default connect(mapStateToProps, mapDispatchToProps)(Header)
export default connect(mapStateToProps, mapDispatchToProps)(withStyle(Header,styles))  //这样渲染