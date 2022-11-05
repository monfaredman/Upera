
export const state = () => ({
        loading: true,
        showModal: false,
        premessage: null,
        premobile: null,
        preredirect: null,
        prerefresh: false,
        button_loading: false,
        messageSent: false
})

export const getters = {
    messageSent(state) {
        return state.messageSent
    },
    button_loading(state) {
        return state.button_loading
    },
    showModal(state) {
        return state.showModal
    },
    premessage(state) {
        return state.premessage
    },
    premobile(state) {
        return state.premobile
    },
    preredirect(state) {
        return state.preredirect
    },
    prerefresh(state) {
        return state.prerefresh
    }
}


export const actions = {
        
        SEND_LOGIN_CODE({commit}, data) {
            commit('BUTTON_LOAD')

            var ref=this.$cookiz.get('ref')
            if(!ref || isNaN(ref))
              ref=0

            data.ref=ref
            this.$axios.post('/login/send-code', data)
                .then(response => {
                    
                    this.dispatch("validation/clearErrors")
                    commit('SET_MESSAGE_SENT')
                    commit('BUTTON_CLEAR')
                    return response
                }, (error) => {

                    commit('BUTTON_CLEAR')
                    this.dispatch("validation/setErrors",{'errors': error.response.data.errors})

                    
                })
        },

        SET_MESSAGE_SENT_FALSE({commit}) {
            commit('SET_MESSAGE_SENT_FALSE')
        },


        SHOW_MODAL({commit}, {premessage,premobile,preredirect,prerefresh}) {
            this.dispatch("validation/clearErrors")
            commit('SHOW_MODAL', {premessage: premessage,premobile: premobile,preredirect: preredirect,prerefresh: prerefresh})
            return commit
        },
        HIDE_MODAL({commit}) {
            commit('HIDE_MODAL')
            return commit
        },
        REMOVE_PREMOBILE({commit}) {
            commit('REMOVE_PREMOBILE')
            return commit
        },
}


export const mutations = {
       SET_MESSAGE_SENT(state) {
            state.messageSent = true
        },
       SET_MESSAGE_SENT_FALSE(state) {
            state.messageSent = false
        },


        // BUTTON load
        BUTTON_LOAD(state) {
            state.button_loading = true
            if(document.getElementById('submit-mobile'))
            document.getElementById('submit-mobile').setAttribute('disabled', true)
        },

        BUTTON_CLEAR(state) {
            state.button_loading = false
            if(document.getElementById('submit-mobile'))
             document.getElementById('submit-mobile').setAttribute('disabled', false)
        },
        SHOW_MODAL(state, { premessage,premobile,preredirect,prerefresh }) {
            state.showModal = true
            state.premessage = premessage
            state.premobile = premobile
            state.preredirect = preredirect
            state.prerefresh = prerefresh
        },

        HIDE_MODAL(state) {
            state.showModal = false
            state.premessage = null
            state.premobile = null
            state.preredirect = null
            state.prerefresh = false
        },
        REMOVE_PREMOBILE(state) {
            state.premobile = null
        },

}

