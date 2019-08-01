import axios from 'axios';
// 接口文档
// http://apidoc.siku.cn/org/group.do?plid=39
// 原型交互
// https://www.xiaopiu.com/h5/byId?type=project&id=5cade3b622aea17cebf1844c
export const callApi = (apiRoot = '/') => {

    let obj = {};
    // let token = cookie('abc-token') || decodeURIComponent(getQueryString('authToken'))
    obj = axios.create({
        baseURL: apiRoot,
        timeout: 20000,
        // headers: { 'Authorization': token }
        headers: {
            'content-type': 'application/json'
        }
    });
    // 请求拦截器
    obj.interceptors.request.use(config => {
        // 请求处理
        return config
    }, err => {
        // 处理请求错误
        return Promise.reject(err);
    });
    // 响应拦截器
    obj.interceptors.response.use(res => {
        // 响应处理
        return res.data;
    }, err => {
        // 处理响应错误
        return Promise.reject(err);
    })
    return obj;
}