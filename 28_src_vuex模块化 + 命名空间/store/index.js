import Vuex from 'vuex'
import Vue from "vue";
import countOptions from "@/store/countOptions";
import personOptions from "@/store/personOptions";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        countOptions,
        personOptions
    }
})