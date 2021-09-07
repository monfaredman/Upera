
export const state = () => ({
    showModal: false,
    prewallet: null
})

export const getters = {
    showModal(state) {
        return state.showModal
    },
    prewallet(state) {
        return state.prewallet
    }
}


export const actions = {
        SHOW_MODAL({commit}, {prewallet}) {
            commit('SHOW_MODAL', {prewallet: prewallet})
            return commit
        },
        HIDE_MODAL({commit}) {
            commit('HIDE_MODAL')
            return commit
        }
}


export const mutations = {

        SHOW_MODAL(state, { prewallet }) {
            state.showModal = true
            state.prewallet = prewallet
        },

        HIDE_MODAL(state) {
            state.showModal = false
            state.prewallet = null
        }

}

