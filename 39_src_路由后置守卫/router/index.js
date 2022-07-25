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
            component: About,
            meta: {title: '关于'}
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: {title: '主页'},
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: {isAuth: true, title: '新闻'} // 配置鉴权属性，放在meta配置项中
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: {isAuth: true, title: '消息'},
                    children: [
                        {
                            name: 'msgdetail',
                            // path: 'detail/:id/:name',
                            path: 'detail',
                            component: Detail,
                            meta: {isAuth: true, title: '详情'},
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
route.beforeEach((to, from, next) => { // to是要跳转的组件，from是当前组件，next是一个函数
    if (to.meta.isAuth) { // 使用路由组件的isAuth进行校验，也可以使用name、path
        if (store.state.address !== 'bei-jing') { // store存储的是beijing
            alert('地址不对应')
            return
        }
    }
    next() // next表示放行
})

// 全局后置路由守卫--初始化的时候被调用、每次路由切换之后被调用
route.afterEach((to, from) => {
    document.title = to.meta.title || '系统' // 改变当前页的title
})

export default route