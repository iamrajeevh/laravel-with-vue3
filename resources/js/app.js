// require('./bootstrap');

import {createApp} from 'vue'

import App from './App.vue'
import router from './routes/index'

router.beforeEach((to, from, next) => {
    next();
})
createApp(App).use(router).mount("#app")