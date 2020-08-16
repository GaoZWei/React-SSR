import axios from 'axios';
import { CHANGE_LIST } from "./constants";
import clientAxios from '../../../client/request'
import serverAxios from '../../../server/request'
const changeList = (list) => ({
    type: CHANGE_LIST,
    list
})
export const getHomeList = (server) => {
    //https://api.apiopen.top/getJoke?page=1&count=2&type=video
    // 浏览器运行
    // /api/getJoke?page=1&count=2&type=video = http://localhost:3000/api/getJoke?page=1&count=2&type=video
    //服务器运行
    // /api/getJoke?page=1&count=2&type=video=服务器根目录下/api/getJoke?page=1&count=2&type=video

    // let url = '' method1
    // if (server) {
    //     // request = serverAxios
    //     url='https://api.apiopen.top/getJoke?page=1&count=2&type=video'
    // } else {
    //     // request = clientAxios
    //     url='/api.apiopen.top/getJoke?page=1&count=2&type=video'
    // }

    const request = server ? serverAxios : clientAxios
    return (dispatch) => {
        //服务器渲染使用的promise异步加载
            // https://api.github.com/users/matz/followers?page=2 网站https://www.jianshu.com/p/4ffba1bc5b5d
            return request.get('/users/matz/followers?page=2')
            .then((res) => {
                const list = res.data
                dispatch(changeList(list))
            })//必须的有catch
            .catch(err => {
                console.log(err);
            })
    }
}