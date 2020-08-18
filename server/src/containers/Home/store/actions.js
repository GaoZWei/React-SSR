import { CHANGE_LIST } from "./constants";
const changeList = (list) => ({
    type: CHANGE_LIST,
    list
})
export const getHomeList = () => {
    // const request = server ? serverAxios : clientAxios
    return (dispatch,getState,axiosInstance) => {
        //服务器渲染使用的promise异步加载
            // https://api.github.com/users/matz/followers?page=2 网站https://www.jianshu.com/p/4ffba1bc5b5d
            return axiosInstance.get('/users/matz/followers?page=2')
            .then((res) => {
                const list = res.data
                dispatch(changeList(list))
            })//必须的有catch
            .catch(err => {
                console.log(err);
            })
    }
}