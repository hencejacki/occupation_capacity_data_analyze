import axios from "axios";

// 创建axios实例
const request = axios.create({
    baseURL: process.env.API,
    timeout: 38000,
    headers: {}
});

// 拦截器添加
request.interceptors.request.use((config)=>{
    return config;
}, (error)=>{
    return Promise.reject(error);
});

request.interceptors.response.use((response)=>{
    // if (response.data.code != 200) {
    //     return Promise.reject("error response");
    // }
    return Promise.resolve(response.data);
}, (error)=>{
    return Promise.reject(error);
});

export default request;