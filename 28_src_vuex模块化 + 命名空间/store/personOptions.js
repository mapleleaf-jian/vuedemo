import axios from 'axios'
import {nanoid} from 'nanoid'

export default {
    namespaced: true,
    actions: {
        // 姓是王才添加
        addWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('请输入姓王的成员！')
            }
        },
        addPersonServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                res => {
                    const person = {id: nanoid(), name: res.data}
                    context.commit('ADD_PERSON', person)
                },
                error => {
                    console.log(error.msg)
                }
            )
        }
    },
    mutations: {
        // 添加一个成员
        ADD_PERSON(state, value) {
            state.persons.unshift(value)
        }
    },
    state: {
        persons: [{id: '001', name: '张三'}]
    },
    getters: {
        // 返回第一个对象
        firstPerson(state) {
            return state.persons[0]
        }
    }
}