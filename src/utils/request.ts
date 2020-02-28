import axios from "axios";

let instance = axios.create({
  baseURL: "http://localhost:8888",
  // baseURL: /cyz.jasonandjay.com/.test(window.location.host)?'https://easymarket.jasonandjay.com':'//169.254.19.71:8888',
  timeout: 1000,
  headers:{'x-nideshop-token':window.localStorage.getItem('token')}
});
// http请求拦截
instance.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
// http响应拦截器
instance.interceptors.response.use(
  (data: any) => {
    return data;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
export default instance;
