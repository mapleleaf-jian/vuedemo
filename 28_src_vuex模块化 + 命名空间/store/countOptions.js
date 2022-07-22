export default {
    namespaced: true,
    actions: {
        // 奇数时才能加
        addOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('ADD', value)
            }
        },
        // 等一等再加
        addWait(context, value) {
            setTimeout(() => {
                context.commit('ADD', value)
            }, 500)
        }
    },
    mutations: {
        // 加1
        ADD(state, value) {
            state.sum += value
        },
        // 减1
        SUB(state, value) {
            state.sum -= value
        }
    },
    state: {
        sum: 0,
        address: 'beijing',
    },
    getters: {
        // 扩大10倍
        bigSum(state) {
            return state.sum * 10
        }
    }
}