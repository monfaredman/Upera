export const state = () => ({
  data: {
    age: 0,
    lang: 0,
    country: 0,
    f_type: 0
  },
  filter_loading: false
})

// getters
export const getters = {
  data(state) {
    return state.data
  },
  filter_loading(state) {
    return state.filter_loading
  },
}


export const actions = {


        /**
         * GET All download name and id of the user
         * 
         * @param {any} {commit} 
         */

        SET_FILTER({ commit }, val) {
        	commit('SET_FILTER', val)
        },

        FILTER_LOADING({ commit }) {
            commit('FILTER_LOADING')
        },

        CLEAN_FILTER_LOADING({ commit }) {
            commit('CLEAN_FILTER_LOADING')
        }
}

export const mutations = {

        SET_FILTER(state, val) {
            state.data = val
        },

        FILTER_LOADING(state) {
            state.filter_loading = true
        },

        CLEAN_FILTER_LOADING(state) {
            state.filter_loading = false
        }

}


