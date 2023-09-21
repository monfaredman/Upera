
export const state = () => ({
    showModal: false,
    premobile: null,
    forsubscription: false,
    paymentid: 0,
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
    paymentid(state) {
        return state.paymentid
    },
    id(state) {
        return state.id
    },
    type(state) {
        return state.type
    }
}


export const actions = {
        SHOW_MODAL({commit}, {premobile,forsubscription,id,type,paymentid}) {
            commit('SHOW_MODAL', {premobile: premobile,forsubscription: forsubscription,id: id,type: type,paymentid: paymentid})
            return commit
        },
        HIDE_MODAL({commit}) {
            commit('HIDE_MODAL')
            return commit
        }
}


export const mutations = {

        SHOW_MODAL(state, { premobile,forsubscription,id,type,paymentid }) {
            state.showModal = true
            state.premobile = premobile
            state.forsubscription = forsubscription
            state.paymentid = paymentid
            state.id = id
            state.type = type
        },

        HIDE_MODAL(state) {
            state.showModal = false
            state.premobile = null
            state.forsubscription = false
            state.paymentid = 0
            state.id = null
            state.type = null
        }

}

