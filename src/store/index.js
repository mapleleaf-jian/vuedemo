// 创建vuex中的store
// 引入Vuex 和 Vue
import Vuex from 'vuex'
import Vue from "vue";

// 安装Vuex
Vue.use(Vuex)

// actions 用于相应组件中的动作，用于写具体的业务逻辑
const actions = {
    add(context, value) {
        console.log('actions中的add被调用了')
        context.commit('ADD', value)
    },
    sub(context, value) {
        console.log('actions中的sub被调用了')
        context.commit('SUB', value)
    },
    addOdd(context, value) {
        console.log('actions中的addOdd被调用了')
        if (context.state.sum % 2) {
            context.commit('ADD', value)
        }
    },
    addWait(context, value) {
        console.log('actions中的addWait被调用了')
        setTimeout(() => {
            context.commit('ADD', value)
        }, 500)
    }
}

// mutations 用于操作数据(state)，用于写操作
const mutations = {
    ADD(state, value) {
        console.log('mutations中的ADD被调用了')
        state.sum += value
    },
    SUB(state, value) {
        console.log('mutations中的SUB被调用了')
        state.sum -= value
    }
}

// state 用于存储数据
const state = {
    sum: 0 // 总和
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})