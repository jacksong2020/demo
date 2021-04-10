import {
    createApp
} from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import axios from 'axios'
// axios全局配置
axios.defaults.baseURL='http://123.207.32.32:8000'
axios.defaults.timeout=430
// axios处理并发网络请求
axios.all([axios({
            // baseURL: 'http://123.207.32.32:8000',
            // timeout: 5000,
            url: '/home/multidata'
        }),
        axios({
            // baseURL: 'http://123.207.32.32:8000',
            // timeout: 5000,
            url: '/home/data?type=sell&page=1',
            // get请求的参数是params，post对应（request body）data：{key:'aa'}
            params: {
                type: 'sell',
                page: 1
            }
        })
    ])
    // .then(results => console.log(results))
    .then(axios.spread((result1, result2) => console.log(result2)))