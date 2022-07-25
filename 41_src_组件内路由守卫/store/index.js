import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {}
const mutations = {}
const state = {
    address: 'beijing'
}

export default new Vuex.Store({
    actions, mutations, state
})