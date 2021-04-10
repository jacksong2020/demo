import {
    createApp
} from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import axios from 'axios'
axios.all([axios({
            url: 'http://123.207.32.32:8000/home/multidata'
        }),
        axios({
            url: 'http://123.207.32.32:8000/home/data?type=sell&page=1',
            param: {
                type: 'sell',
                page: 1
            }
        })
    ])
    // .then(results => console.log(results))
    .then(axios.spread((result1, result2) => console.log(result2)))