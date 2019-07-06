import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router';

import Show from './components/Show.vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

const router = new VueRouter({
    routes: [
        // 动态路径参数 以冒号开头
        { path: '/', component: Show }
    ]
})

new Vue({
    el: '#app',
    render: h => h(App),
    router
}).$mount('#app')
