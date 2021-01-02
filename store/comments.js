export const state = () => ({
    commentsloading: false
})

// getters
export const getters = {
  commentsloading(state) {
    return state.commentsloading
  }
}


export const actions = {

        COMMENTS_SPINER_LOAD({commit}) {
            commit('COMMENTS_SPINER_LOAD')
            return commit
        },
        COMMENTS_SPINER_CLEAN({commit}) {
            commit('COMMENTS_SPINER_CLEAN')
            return commit
        },
}

export const mutations = {

        COMMENTS_SPINER_LOAD(state) {
            state.commentsloading = true
        },

        COMMENTS_SPINER_CLEAN(state) {
            state.commentsloading = false
        }

}


