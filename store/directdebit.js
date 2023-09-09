
export const state = () => ({
    showModal: false,
    premobile: null,
    forsubscription: false,
    id: null,
    type: null
})

export const getters = {
    showModal(state) {
        return state.showModal
    },
    premobile(state) {
        return state.premobile
    },
    forsubscription(state) {
        return state.forsubscription
    },
    id(state) {
        return state.id
    },
    type(state) {
        return state.type
    }
}


export const actions = {
        SHOW_MODAL({commit}, {premobile,forsubscription,id,type}) {
            commit('SHOW_MODAL', {premobile: premobile,forsubscription: forsubscription,id: id,type: type})
            return commit
        },
        HIDE_MODAL({commit}) {
            commit('HIDE_MODAL')
            return commit
        }
}


export const mutations = {

        SHOW_MODAL(state, { premobile,forsubscription,id,type }) {
            state.showModal = true
            state.premobile = premobile
            state.forsubscription = forsubscription
            state.id = id
            state.type = type
        },

        HIDE_MODAL(state) {
            state.showModal = false
            state.premobile = null
            state.forsubscription = false
            state.id = null
            state.type = null
        }

}

