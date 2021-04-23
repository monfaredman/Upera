export const state = () => ({
        title: '',
        files: [],
        error: null,
        show_login: 0,
        msg: null,
        title_msg: {
            type: null,
            poster: null,
            id: null
        },
        check: null,
        loading: false
})

// getters
export const getters = {
  loading(state) {
    return state.loading
  },
  title(state) {
    return state.title
  },
  error(state) {
    return state.error
  },
  show_login(state) {
    return state.show_login
  },
  files(state) {
    return state.files
  },
  msg(state) {
    return state.msg
  },
  title_msg(state) {
    return state.title_msg
  },
}


export const actions = {


        HANDLE_DOWNLOAD({
            commit
        }, data) {
            commit('SPINER_LOAD')

            let copy_cart = JSON.parse(localStorage.getItem('_cart'))
            if(!copy_cart){
                copy_cart={}
                copy_cart.content=[]
                copy_cart.amount=0
            }
            data.cart=copy_cart.content
            data.amount=copy_cart.amount

            this.$axios.get('/payments/download/callback', {params: data}).then(response => {
                if (response.status === 200) {
                   localStorage.removeItem('_cart')
                    commit('SUCCESS_CALLBACK', response.data.data)
                } else {
                    response.data.data.msg=this.app.i18n.t('payment.error')
                    commit('FAILTURE_CALLBACK', response.data.data) 
                }
                
                commit('SPINER_CLEAN')
            }).catch(error => {

                commit('FAILTURE_CALLBACK2', error.response.data)
                commit('SPINER_CLEAN')
            })
        },

        HANDLE_GHOST_DOWNLOAD({
            commit
        }, data) {
            commit('SPINER_LOAD')

            let copy_cart = JSON.parse(localStorage.getItem('_cart'))
            if(!copy_cart){
                copy_cart={}
                copy_cart.content=[]
                copy_cart.amount=0
            }
            data.cart=copy_cart.content
            data.amount=copy_cart.amount

            this.$axios.get('/ghost/payments/download/callback', {params: data}).then(response => {
                if (response.status === 200) {
                    localStorage.removeItem('_cart')
                    commit('SUCCESS_CALLBACK', response.data.data)
                } else {
                    response.data.data.msg=this.app.i18n.t('payment.error')
                    commit('FAILTURE_CALLBACK', response.data.data) 
                }
                
                commit('SPINER_CLEAN')
            }).catch(error => {
                commit('FAILTURE_CALLBACK2', error.response.data)
                commit('SPINER_CLEAN')
            })
        },

}

export const mutations = {

        SUCCESS_CALLBACK(state, data) {
            state.check = null
            state.error = null
            state.show_login = 0
            if (data.ref) {
                state.msg = this.app.i18n.t('payment.code') + data.ref
            } else {
                state.msg = this.app.i18n.t('payment.end')
            }
            state.files = data.files
            state.title = this.app.i18n.t('payment.success')
        },
        FAILTURE_CALLBACK(state, data) {            
            state.title = this.app.i18n.t('payment.error')
            state.error = data.msg
            if(data.show_login)
                state.show_login = data.show_login
            else
                state.show_login = 0
            if(data.title)
            state.title_msg = data.title
        },

        FAILTURE_CALLBACK2(state, data) {            
            state.title = this.app.i18n.t('payment.error')
            state.error = data.message
            if(data.show_login)
                state.show_login = data.show_login
            else
                state.show_login = 0
            if(data.title)
            state.title_msg = data.title
        },
        SPINER_LOAD(state) {
            state.loading = true
        },

        SPINER_CLEAN(state) {
            state.loading = false
        }
       

}


