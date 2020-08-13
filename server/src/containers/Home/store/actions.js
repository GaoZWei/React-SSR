import axios from 'axios';
import { CHANGE_LIST } from "./constants";
const changeList = (list) => ({
    type: CHANGE_LIST,
    list
})
export const getHomeList = () => {
    return (dispatch) => {
        axios.get('https://api.apiopen.top/getJoke?page=1&count=2&type=video')
            .then((res) => {
                const list = res.data.result
                dispatch(changeList(list))
            })
    }
}