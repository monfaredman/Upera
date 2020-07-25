
export const state = () => ({
        items: {},
        payment_update: {},
        support_request: {},
        plan: {},
        loading: true,
        button_loading: false,
        messageSent: false
})

export const getters = {
    messageSent(state) {
        return state.messageSent
    }
}


export const actions = {
        
        SEND_LOGIN_CODE({commit}, data) {
            commit('BUTTON_LOAD')
            
            this.$axios.post('/login/send-code', data)
                .then(response => {
                    
                    this.dispatch("validation/clearErrors")
                    commit('SET_MESSAGE_SENT')
                    commit('BUTTON_CLEAR')
                    return response
                }, (error) => {

                    
                    this.dispatch("validation/setErrors",{'errors': error.response.data.errors})

                    commit('BUTTON_CLEAR')
                })
        },

        SET_MESSAGE_SENT_FALSE({commit}) {
            commit('SET_MESSAGE_SENT_FALSE')
        },

        /**
         *  Send request to oauth to check if the number and password is correct or return 401 error 
         * 
         * @param {*} commit 
         * @param {*} array Number And Password
         */
        LOGIN({commit}, {mobile,password}) {
            this.dispatch("validation/clearErrors")
            commit('BUTTON_LOAD')

            var data = {
                grant_type: 'password',
                client_id: 2,
                client_secret: this.$Vue.helper.client_secret(),
                username: mobile,
                password: password,
                scope: '',
            }

            this.$axios.post('/oauth/token', data)
                .then(response => {
                    this.$axios.get('/api/user', {
                            headers: {
                                Authorization: 'Bearer ' + response.data.access_token
                            }
                    }).then(info => {

                        this.$axios
                            .get('/api/v1/get/check/user', {
                                headers: {
                                    Authorization: 'Bearer ' + response.data.access_token
                                }
                            })
                            .then(check => {
                                /* Payment Reactive
                                   *********************/
                                if (check.data.status === 'payment_reactive') {


                                    this.$Vue.auth.setToken(response.data.access_token, response.data.expires_in, info.data.name, info.data.image, info.data.language, 'payment_reactive')
                                    this.$router.go('/')


                                } else if (check.data.status === 'confirm_step') {

                                    this.$Vue.auth.setToken(response.data.access_token, response.data.expires_in, info.data.name, info.data.image, info.data.language, 'confirm_step')
                                    this.$router.go('/')
                                    
                                } else if (check.data.status === 'cancel') {

                                    this.$Vue.auth.setToken(response.data.access_token, response.data.expires_in, info.data.name, info.data.image, info.data.language, 'cancel')
                                    this.$router.go('/')
                            
                                } else if (check.data.status === 'payment_step') {


                                    this.$Vue.auth.setToken(response.data.access_token, response.data.expires_in, info.data.name, info.data.image, info.data.language, 'payment_step')
                                    this.$router.go('/')

                                } else if (check.data.status === 'active') {
                                    /* Active */
                                    this.$Vue.auth.setToken(response.data.access_token, response.data.expires_in, info.data.name, info.data.image, info.data.language, 'active')
                                    this.$router.go('/')

                                } else {
                                    this.$Vue.auth.destroyToken()
                                }
                            })
                        
                    })
                }, (error) => {
                    if (error.response.status === 401) {
                        this.dispatch("validation/setErrors",{'errors': error.response.data.message})
             
                        commit('BUTTON_CLEAR')
                    }
                })
        },



        /**
         *  Send message to email to reset password
         * 
         *  @param {email} email 
         */

        CHECK_EMAIL({commit}, email){
            commit('BUTTON_LOAD')
            this.$axios.post('/api/v1/check/register/email', { email: email })
                .then(response => {
                    if (response.status === 200) {
                        this.$router.push({ name: 'login' })
                        this.$alertify.logPosition('top right')
                        this.$alertify.success(response.data.message)
                        commit('BUTTON_CLEAR')
                    }
                }, error => {
                    this.$alertify.logPosition('top right')
                    this.$alertify.error(error.response.data.message)
                    commit('BUTTON_CLEAR')
                })
        },

        
        
        /**
         * Get payment details
         * 
         * @param {*}  
         */
        GET_PAYMENT({commit}) {
            commit('SPINER_LOAD')
            this.$axios.get('/api/v1/get/profile/payment')
                .then(response => {
                    commit('SET_GET_PAYMENT', {
                        data: response.data
                    })
                    commit('SPINER_CLEAN')
                })
        },

        /**
         * Get billing details for one year
         * 
         * @param {*}  
         */
        GET_BILLING_DETAILS({
            commit
        }) {
            commit('SPINER_LOAD')
            this.$axios.get('/api/v1/get/profile/payment/billing')
                .then(response => {
                    commit('SET_BILLING_DETAILS', {
                        data: response.data
                    })
                    commit('SPINER_CLEAN')
                })
        },

        GET_DOWNLOAD_BILLING_DETAILS({
            commit
        }) {
            commit('SPINER_LOAD')
            this.$axios.get('/api/v1/get/profile/payment/download-billing')
                .then(response => {
                    commit('SET_DOWNLOAD_BILLING_DETAILS', {
                        data: response.data
                    })
                    commit('SPINER_CLEAN')
                })
        },
        GET_DOWNLOADS_DETAILS({
            commit
        }) {
            commit('SPINER_LOAD')
            this.$axios.get('/api/v1/get/profile/downloads')
                .then(response => {
                    commit('SET_DOWNLOADS_DETAILS', {
                        data: response.data
                    })
                    commit('SPINER_CLEAN')
                })
        },

     


       /**
         * Change plan 
         * 
         * @param {any} {commit } 
         */
        CHANGE_PLAN({
            commit
        }, data) {
            this.$swal({
                title: this.$i18l.t('auth.change_plan_q'),
                icon: 'warning',
                buttons: true,
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    commit('BUTTON_LOAD')
                    this.$axios.post('/api/v1/update/profile/payment/change_plan', data).then(response => {
                        if (response.data.status === 'success') {
                            window.location.href = response.data.link
                            // commit('SET_PLAN', {
                            //     plan_id: plan_id
                            // });
                            // this.$alertify.logPosition('top right');
                            // this.$alertify.success('Successful change plan');
                            // commit('BUTTON_CLEAR');
                        }
                    }).catch(error => {
                        if (error && error.response.data.status === 'error') {
                            this.$alertify.logPosition('top right')
                            this.$alertify.error(error.response.data.message)
                            commit('BUTTON_CLEAR')
                        }
                    })
                }
            })
        },

        /**
         * Pay for plan after register
         * 
         * @param {any} {commit } 
         */
        REGISTER_PLAN({
            commit
        }, data) {
            this.$axios.post('/api/v1/update/profile/payment/change_plan', data).then(response => {
                if (response.data.status === 'success') {
                    window.location.href = response.data.link
                }
            }).catch(error => {
                if (error && error.response.data.status === 'error') {
                    this.$alertify.logPosition('top right')
                    this.$alertify.error(error.response.data.message)
                }
            })
            return commit
        },

        /**
         * Change default language 
         * 
         * @param {*} commit 
         * @param {*} lang 
         */
        SET_LANGUAGE({
            commit
        }, lang) {
            this.$axios.post('/api/v1/update/profile/language', {
                language: lang
            }).then(response => {
                return response
                // Message
                // Not necessarily

            })
            return commit
        },


       /**
        * Adujst caption 
        *
        * @param {*} commit
        * @param {*} caption 
        */
        SET_CAPTION({ commit }, caption) {
            this.$axios.post('/api/v1/update/profile/caption', {caption: caption}).then(res => {
                this.$alertify.logPosition('top right')
                this.$alertify.success(this.$i18l.t('auth.successful_update'))
                return res
            }, error => {
                this.$alertify.logPosition('top right')
                this.$alertify.error('Error')
                return error
            })
            return commit
        },



        /**
         * Submit Supoort Request
         *
         * @param {any} {commit }
         */

        SUBMIT_SUPPORT_REQUEST({
                                   commit
                               }, {
                                   subject,
                                   details
                               }) {
            commit('BUTTON_LOAD')
            this.$axios.post('/api/v1/create/support/request', {
                subject: subject,
                details: details
            }).then(response => {
                if (response.data.status === 'success') {
                    this.$alertify.logPosition('top right')
                    this.$alertify.success('Successful Send The Request, We Will Response Soon.')
                    commit('SET_SUBMIT_SUPPORT_REQUEST', {
                        data: response.data.data
                    })
                    commit('BUTTON_CLEAR')
                }
            })
        },

        /**
         * Get Supoort Request
         *
         * @param {any} {commit }
         */

        GET_ALL_SUPPORT_REQUEST({
                                    commit
                                }) {
            commit('SPINER_LOAD')
            this.$axios.get('/api/v1/get/support/request').then(response => {
                if (response.status === 200) {
                    commit('SET_ALL_SUPPORT_REQUEST', {
                        data: response.data.data,
                    })
                    commit('SPINER_CLEAN')
                } else if (response.status === 204) {
                    commit('SET_ALL_SUPPORT_REQUEST', {
                        data: null
                    })
                    commit('SPINER_CLEAN')
                }
            })
        },


        /**
         * Get Supoort Request
         *
         * @param {any} {commit }
         */

        GET_SUPPORT_REQUEST({
                                commit
                            }, {
                                id
                            }) {
            commit('SPINER_LOAD')
            this.$axios.get('/api/v1/get/support/request/' + id).then(response => {
                if (response.status === 200) {
                    commit('SET_SUPPORT_REQUEST', {
                        data: response.data.data,
                    })
                    commit('SPINER_CLEAN')
                } else if (response.status === 204) {
                    commit('SET_SUPPORT_REQUEST', {
                        data: null
                    })
                    commit('SPINER_CLEAN')
                }
            })
        },

        /**
         * Submit Supoort Reply
         *
         * @param {any} {commit }
         */

        SUPPORT_REPLY({
                          commit
                      }, {
                          id,
                          reply
                      }) {
            commit('BUTTON_LOAD')
            this.$axios.post('/api/v1/create/support/request/reply', {
                id: id,
                reply: reply
            }).then(response => {
                if (response.status === 200) {
                    commit('SET_SUPPORT_REPLY', {
                        data: response.data.data,
                    })
                    commit('BUTTON_CLEAR')
                } else if (response.status === 204) {
                    commit('SET_SUPPORT_REQUEST', {
                        data: null
                    })
                    commit('BUTTON_CLEAR')
                }
            })
        },
            /**
             * Get viewing history 
             * 
             * @param {any} {commit } 
             */
            
            GET_VIEWING_HISTORY({commit }) {
                commit('SPINER_LOAD')
                this.$axios.get('/api/v1/get/profile/viewing_history').then(response => {
                if (response.data.status === 'success') {
                    commit('SET_VIEWING_HISTORY', {
                        data: response.data.data,
                    })
                    commit('SPINER_CLEAN')
                }
            })
        },

        HIDE_ERROR({commit}) {
            this.dispatch("validation/clearErrors")
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
        SET_GET_PAYMENT(state, data) {
            state.loading = false
            state.items = data.data
            state.payment_update = data.data
            state.plan = data.data
        },

        SET_BILLING_DETAILS(state, data) {
            state.loading = false
            state.items = data.data
        },
        SET_DOWNLOAD_BILLING_DETAILS(state, data) {
            state.loading = false
            state.items = data.data
        },
        SET_DOWNLOADS_DETAILS(state, data) {
            state.loading = false
            state.items = data.data
        },
        SET_CANCEL_MEMBERSHIP(state, data) {
            state.payment_update = data.data
        },

        SET_RESUME_MEMBERSHIP(state, data) {
            state.payment_update = data.data
        },

        SET_PLAN(state, data) {
            state.plan.subscription_plan = data.plan_id
        },

        SET_VIEWING_HISTORY(state, data) {
            state.items = data
        },
        SET_SUBMIT_SUPPORT_REQUEST(state, data) {
            if (state.items.data === null) {
                state.items.data = []
            }
            state.items.data.push(data.data)
        },

        SET_SUPPORT_REQUEST(state, data) {
            state.support_request = data
        },

        SET_ALL_SUPPORT_REQUEST(state, data) {
            state.items = data
        },

        SET_SUPPORT_REPLY(state, data) {
            if (state.support_request.data.reply === null) {
                state.support_request.data.reply = []
            }
            state.support_request.data.reply.push(data.data)
        },
        // Spiner load
        SPINER_LOAD(state) {
            state.loading = true
        },

        SPINER_CLEAN(state) {
            state.loading = false
        },

        // BUTTON load
        BUTTON_LOAD(state) {
            state.button_loading = true
        },

        BUTTON_CLEAR(state) {
            state.button_loading = false
        },
}

