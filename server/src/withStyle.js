//这个函数返回一个组件,高阶组件
//这个函数是生成高阶组件的函数
import React, { Component } from 'react'
export default (DecoratedComponent, styles) => {
    return class NewComponent extends Component {
        componentWillMount() {
            if (this.props.staticContext) {
                // console.log(styles._getCss());
                this.props.staticContext.css.push('.model{background: pink}')
            }
        }
        render() {
            return <DecoratedComponent {...this.props} />
        }
    }
}