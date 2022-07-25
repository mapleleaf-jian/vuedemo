// 配置router
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'


Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'msgdetail',
                            // path: 'detail/:id/:name',
                            path: 'detail',
                            component: Detail,

                            // 第一种写法：值为对象，该对象中的所有key-value都会以props的方式接收
                            // props: {a: 1, b: 'hello'}

                            // props: true

                            // props($route) {
                            //     return {id: $route.query.id, name: $route.query.name}
                            // }
                            props({query}) {
                                return {id: query.id, name: query.name}
                            }
                        }
                    ]
                }
            ]
        }
    ]
})
