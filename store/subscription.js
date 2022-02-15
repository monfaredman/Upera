export const state = () => ({
    showModal: false,
    content_type: '',
    content_id: '',
})

export const getters = {
    showModal(state) {
        return state.showModal
    },
    content_type(state) {
        return state.content_type
    },
    content_id(state) {
        return state.content_id
    }
}


export const actions = {
        SHOW_MODAL({commit}, {content_type,content_id}) {
            commit('SHOW_MODAL', {content_type: content_type,content_id: content_id})
            return commit
        },
        HIDE_MODAL({commit}) {
            commit('HIDE_MODAL')
            return commit
        }
}


export const mutations = {

        SHOW_MODAL(state, { content_type,content_id }) {
            state.showModal = true
            state.content_type = content_type
            state.content_id = content_id
        },

        HIDE_MODAL(state) {
            state.showModal = false
            state.content_type = ''
            state.content_id = ''
        }

}

