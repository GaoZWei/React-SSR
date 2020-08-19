import axios from "axios";
import config from "../config"//配置secret
const instance = axios.create({
    baseURL: '/',
    // params:{
    //     secret:config.secret
    // }  密钥
})

export default instance