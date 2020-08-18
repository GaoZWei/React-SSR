import { CHANGE_LOGIN } from './constants'

const changeLogin = (value) => ({
    type: CHANGE_LOGIN,
    value: value
})

//获取登录状态
export const getHeaderInfo = () => {
    return (dispatch, getState, axiosInstance) => {
        return axiosInstance.get('/users/matz/followers?page=2')
            .then((res) => {
                // console.log(res);
                //手动false
                dispatch(changeLogin(false))
            }) //必须的有catch
            .catch(err => {
                console.log(err);
            })
    }
}


//登录
export const login = () => {
    return (dispatch, getState, axiosInstance) => {
        return axiosInstance.get('/users/matz/followers?page=2')
            .then((res) => {
                //手动true
                dispatch(changeLogin(true))
            }) //必须的有catch
            .catch(err => {
                console.log(err);
            })
    }
}

//退出登录
export const logout = () => {
    return (dispatch, getState, axiosInstance) => {
        return axiosInstance.get('/users/matz/followers?page=2')
            .then((res) => {
                //手动false
                dispatch(changeLogin(false))
            }) //必须的有catch
            .catch(err => {
                console.log(err);
            })
    }
}