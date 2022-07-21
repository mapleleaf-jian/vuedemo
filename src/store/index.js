// 创建vuex中的store
// 引入Vuex 和 Vue
import Vuex from 'vuex'
import Vue from "vue";

// 安装Vuex
Vue.use(Vuex)

// actions 用于相应组件中的动作
const actions = {}

// mutations 用于操作数据(state)
const mutations = {}

// state 用于存储数据
const state = {}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})