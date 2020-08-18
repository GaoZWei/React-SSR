import axios from "axios";

const createInstance = (req) => axios.create({
    //api接口地址:https://api.apiopen.top/getJoke?page=1&count=2&type=video
    baseURL: 'https://api.github.com', //正常http://api/ssr/abc.json可以,这个请求不可以
    headers: {
        // 跨域请求 这个配置不能少  
        // "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        // 'Accept': 'application/json',
        cookie: req.get('cookie') || '' //获取客户端cookie
    }
})


export default createInstance