// 配置router
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
import store from '../store'

Vue.use(VueRouter)

const route =  new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'msgdetail',
                            // path: 'detail/:id/:name',
                            path: 'detail',
                            component: Detail,
                            props($route) {
                                return {id: $route.query.id, name: $route.query.name}
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

// 全局前置路由守卫--初始化的时候被调用、每次路由切换之前被调用
route.beforeEach((to, from, next) => {
    console.log(store)
    if (to.name === 'xinwen' || to.name === 'xiaoxi') {
        if (store.state.address !== 'bei-jing') {
            alert('地址不对应')
            return
        }
    }
    next()
})

export default route