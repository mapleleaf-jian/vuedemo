// 配置router
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        }
    ]
})
