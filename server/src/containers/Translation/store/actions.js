import { CHANGE_LIST } from "./constants";
const changeList = (list) => ({
    type: CHANGE_LIST,
    list
})
export const getTranslationList = () => {
    return (dispatch, getState, axiosInstance) => {
        // https://api.github.com/users/matz/followers?page=2 网站https://www.jianshu.com/p/4ffba1bc5b5d
        return axiosInstance.get('/users/matz/followers?page=1')
            .then((res) => {
                //判断是否是登录状态,手动设置为true
                if (true) {
                    const list = res.data
                    dispatch(changeList(list))
                } else {
                    const list = []
                    dispatch(changeList(list))
                }
            })//必须的有catch
            .catch(err => {
                console.log(err);
            })
    }
}