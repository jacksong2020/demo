import axios from 'axios'

// export function request(config, success, failure) {
// 可以把两个回调函数也放入到config里面
/*     export function request(config) {
    // 实例1
    const instance1 = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    // 实例2
   /*  const instance2 = axios.create({
        baseURL: 'http://333.207.32.32:8000',
        timeout: 5000
    }) */

//instance1返回了一个对象： AxiosPromise 所以可以用then catch方法
/* instance1(config).then(result => {
        // console.log(result);
        success(result)
    }).catch(error => {
        // console.log(error);
        failure(error)
    })

} 
*/
// 使用promise简化（这种instance实例不是promise对象的情况下，得用promise包装来处理异步操作）
/* export function request(config) {
    return new Promise((resolve, reject) => {
        // 创建axios实例
        const instance1 = axios.create({
            baseURL: 'http://123.207.32.32:8000',
            timeout: 5000
        })
        // 异步操作 网络请求
        instance1(config).then(res =>
            resolve(res)).catch(err => reject(err))
    })
} */

// 理解config=axios.create()和 instance1(config) ==>instance就是一个promise对象，所以不用promise包装
export function request(config) {
    //1 创建axios实例
    const instance1 = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    //2 axios拦截器 请求拦截
    instance1.interceptors.request.use(config => {
        // 请求拦截使用的场景：1 config里的参数不符合服务器要求  2 加载数据的过程中的  加载中的动画， CSDN可以搜到
        // 3 用户查询数据：检查请求是否携带token
        console.log(config);
        return config
    }, error => console.log(error))
    instance1.interceptors.response.use(response => {
        // 响应拦截使用的场景：
        console.log(response);
        return response.data
    }, error => console.log(error))
    //3 异步操作 网络请求
    return instance1(config)

}