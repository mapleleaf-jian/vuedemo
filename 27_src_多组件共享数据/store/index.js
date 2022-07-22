// 创建vuex中的store
// 引入Vuex 和 Vue
import Vuex from 'vuex'
import Vue from "vue";

// 安装Vuex
Vue.use(Vuex)

// actions 用于响应组件中的动作，用于写具体的业务逻辑
const actions = {
    addOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('ADD', value)
        }
    },
    addWait(context, value) {
        setTimeout(() => {
            context.commit('ADD', value)
        }, 500)
    }
}

// mutations 用于操作数据(state)，用于写操作
const mutations = {
    ADD(state, value) {
        state.sum += value
    },
    SUB(state, value) {
        state.sum -= value
    },
    ADD_PERSON(state, value) {
        state.persons.unshift(value)
    }
}

// state 用于存储数据
const state = {
    sum: 0,
    persons: [{id: '001', name: '张三'}]
}

// getters，用于加工数据
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})