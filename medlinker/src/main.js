import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router';

import Show from './components/Show.vue';
import Upload from './components/Upload.vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        // 动态路径参数 以冒号开头
        { path: '/', component: Show },
        { path: '/upload', component: Upload },
    ]
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
