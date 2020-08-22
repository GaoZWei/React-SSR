//这个函数返回一个组件,高阶组件
//这个函数是生成高阶组件的函数
import React, { Component } from 'react'
export default (DecoratedComponent, styles) => {
    return class NewComponent extends Component {
        componentWillMount() {
            if (this.props.staticContext) {
                // console.log(styles._getCss());
                this.props.staticContext.css.push('.container{box-sizing:border-box;height:40px;padding-top:9px;border:1px solid #ccc}.item1{display:inline-block;line-height:22px;color:#333;text-decoration:none;margin-left:20px;font-size:16px;cursor:pointer}.item1:hover{color:#999}')
            }
        }
        render() {
            return <DecoratedComponent {...this.props} />
        }
    }
}