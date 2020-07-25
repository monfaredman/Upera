export const state = () => ({
        data: [],
        footer: [],
        plans: [],
        gateways: [],
        actor_details: {},
        home_loading: false,
})

export const actions = {
        // Get all movies form api /api/v1/movies
        GET_HOME_LIST({ commit }) {
            commit('HOME_SPINER_LOAD')
            this.$axios.get('/api/v1/get/discover').then((response) => {
                if (response.status === 200) {
                    const list = response.data.data
                    commit('SET_HOME_LIST', {list})
                    commit('HOME_SPINER_CLEAN')
                }
            })
        },

        // Get all movies form api /api/v1/movies
        GET_HOME_FOOTER_DETAILS({ commit }) {
            this.$axios.get('/api/v1/get/app/details').then((response) => {
                if (response.status === 200) {
                    const data = response.data.data
                    commit('SET_HOME_FOOTER_DETAILS', data)
                }
            })
        },

       // Get all plans form api /api/v1/plans
       GET_PLANS({ commit }) {
            this.$axios.get('/api/v1/get/app/plans').then((response) => {
                if (response.status === 200) {
                    const data = response.data.data
                    commit('SET_HOME_PLAN', data)
                }
            })
        },

        // Get all plans form api /api/v1/gateways
       GET_GATEWAYS({ commit }) {
            this.$axios.get('/api/v1/get/app/gateways').then((response) => {
                if (response.status === 200) {
                    const data = response.data.data
                    commit('SET_HOME_GATEWAY', data)
                }
            })
        },
}


export const mutations = {
        SET_HOME_LIST(state, list) {
            state.data = list.list
        },

        SET_HOME_FOOTER_DETAILS(state, data){
            state.footer = data
        },

        SET_HOME_PLAN(state, data){
            state.plans = data
        },

        SET_HOME_GATEWAY(state, data){
            state.gateways = data
        },

        // Spiner load
        HOME_SPINER_LOAD(state) {
            state.home_loading = true
        },

        HOME_SPINER_CLEAN(state) {
            state.home_loading = false
        }
}