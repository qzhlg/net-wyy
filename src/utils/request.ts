import axios from 'axios'

let instance = axios.create({
    baseURL: 'http://169.254.19.71:8888',
    timeout: 1000,
  })
// http请求拦截
instance.interceptors.request.use((config: any) =>{
    return config
},(error: any) =>{
    return Promise.reject(error)
})
// http响应拦截器
instance.interceptors.response.use((data: any) =>{
    return data
}, (error: any) =>{
    

    return Promise.reject(error)
})
export default instance