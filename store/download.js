export const state = () => ({
        data: [],
        downloadslist: [],
        cart: [],
        presale: false,
        presale_date: '',
        pass: null,
        title_poster: null,
        show_buy: 0,
        show_free: 0,
        fullrate_data: {
            message: 0.5,
            show_download: 0,
            show_subscription: 0,
            fa: {
                title: 'free'
            },
            en: {
                title: 'free'
            }
        },
        notes: '',
        screening: {
            ekran: 0,
            ekran_period_end: null,
            ekran_hour: 0,
            ekran_owned: null,
            owned_period_end: null,
            ekran_id: null
        },
        ussd: null,
        total_amount: 0,
        loading: false,
        divcount: 0,
        play_button: 0,
        sub_button: 0,
        cartloading: false
})

// getters
export const getters = {
  downloadslist(state) {
    return state.downloadslist
  },
  cartloading(state) {
    return state.cartloading
  },
  cart(state) {
    return state.cart
  },
  presale(state) {
    return state.presale
  },
  presale_date(state) {
    return state.presale_date
  },
  title_poster(state) {
    return state.title_poster
  },
  screening(state) {
    return state.screening
  },
  ussd(state) {
    return state.ussd
  },
  fullrate_data(state) {
    return state.fullrate_data
  },
  show_free(state) {
    return state.show_free
  },
  show_buy(state) {
    return state.show_buy
  },
  notes(state) {
    return state.notes
  },
  total_amount(state) {
    return state.total_amount
  },
  divcount(state) {
    return state.divcount
  },
  pass(state) {
    return state.pass
  },
  play_button(state) {
    return state.play_button
  },
  sub_button(state) {
    return state.sub_button
  }
}


export const actions = {


        /**
         * GET All download name and id of the user
         * 
         * @param {any} {commit} 
         */
        
        GET_DOWNLOAD({ commit }, {id,type,quality,force_to_buy}) {
            commit('DOWNLOAD_SPINER_LOAD')

            var ref=this.$cookiz.get('ref')
            if(!ref || isNaN(ref))
              ref=0

            this.$axios.post('/get/cart', {
                id: id,
                type: type,
                quality: quality,
                force_to_buy: force_to_buy,
                ref: ref
            }).then((response) => {
                if (response.status === 200) {
                    commit('SET_DOWNLOAD', response.data.data)
                    commit('DOWNLOAD_SPINER_CLEAN')
                }

            }, (error) => {
                if(error.response.status === 400){
                    this.$router.push({name: '404'})
                }else{
                    this.$router.push('/')
                }
            })
        },
        GET_GHOST_DOWNLOAD({ commit }, {id,type,quality,force_to_buy}) {
            commit('DOWNLOAD_SPINER_LOAD')

            var ref=this.$cookiz.get('ref')
            if(!ref || isNaN(ref))
              ref=0
            this.$axios.post('/ghost/get/cart', {
                id: id,
                type: type,
                quality: quality,
                force_to_buy: force_to_buy,
                ref: ref
            }).then((response) => {
                if (response.status === 200) {
                    commit('SET_DOWNLOAD', response.data.data)
                    commit('DOWNLOAD_SPINER_CLEAN')
                }
            }, (error) => {
                if(error.response.status === 400){
                    this.$router.push({name: '404'})
                }else{
                    this.$router.push('/')
                }
            })
        },
        ADD_NEW_TO_DOWNLOAD({ commit }, { itemid,amount,size,name,id,type,poster,quality}) {
            commit('ADD_NEW_DOWNLOAD', { itemid:itemid,amount:amount,size:size,name:name,id:id,type:type,poster:poster,quality:quality})
        },


        DELETE_FROM_DOWNLOAD({ commit }, { itemid,amount}) {
            commit('DELETE_DOWNLOAD_FROM_OBJECT', { itemid:itemid,amount:amount})
        },

        GET_CART({ commit }) {
            commit('GET_CART')
        },


        ADD_DIVCOUNT({ commit }) {
            commit('ADD_DIVCOUNT')
        },
        ADD_DIVCOUNT2({ commit }) {
            commit('ADD_DIVCOUNT2')
        },
        MIN_DIVCOUNT({ commit }) {
            commit('MIN_DIVCOUNT')
        },
        MIN_DIVCOUNT2({ commit }) {
            commit('MIN_DIVCOUNT2')
        },
        RESET_DOWNLOAD({ commit }) {
            commit('RESET_DOWNLOAD')
        },

        DOWNLOAD_SPINER_LOAD({ commit }) {
            commit('DOWNLOAD_SPINER_LOAD')
        },

        DOWNLOAD_SPINER_CLEAN({ commit }) {
            commit('DOWNLOAD_SPINER_CLEAN')
        }
}

export const mutations = {

        GET_CART(state){

            let copy_cart = JSON.parse(localStorage.getItem('_cart'))
            if(!copy_cart){
                copy_cart={}
                copy_cart.content=[]
                copy_cart.amount=0
            }
            state.cart = copy_cart.content
            state.total_amount = copy_cart.amount
        },
        ADD_DIVCOUNT(state){
            if(state.play_button==0){
                state.divcount = state.divcount+1
                state.play_button=1
            }
        },
        ADD_DIVCOUNT2(state){
            if(state.sub_button==0){
                state.divcount = state.divcount+1
                state.sub_button=1
            }
        },
        MIN_DIVCOUNT(state){
            if(state.play_button==1){
                state.divcount = state.divcount-1
                state.play_button=0
            }
        },
        MIN_DIVCOUNT2(state){
            if(state.sub_button==1){
                state.divcount = state.divcount-1
                state.sub_button=0
            }
        },
        RESET_DOWNLOAD(state){

            state.divcount = 0
            state.play_button = 0
            state.sub_button = 0
            state.show_buy=0
            state.show_free=0
            state.ussd=null
        },
        SET_DOWNLOAD(state, data){
            state.downloadslist = data.downloads
            state.presale = data.presale
            state.presale_date = data.presale_date
            state.pass = data.pass
            state.title_poster = data.title_poster
            state.screening = data.screening
            state.ussd = data.ussd
            state.fullrate_data = data.fullrate_data
            state.show_free = data.show_free
            state.show_buy = data.show_buy
            state.notes = data.notes


            if(state.show_buy || state.show_free){
                if(state.ussd)
                    state.divcount=state.play_button+state.sub_button+2
                else
                    state.divcount=state.play_button+state.sub_button+1
            }else{
                if(state.ussd)
                    state.divcount=state.play_button+state.sub_button+1
                else
                    state.divcount=state.play_button+state.sub_button
            }


            let copy_cart = JSON.parse(localStorage.getItem('_cart'))
            if(!copy_cart){
                copy_cart={}
                copy_cart.content=[]
                copy_cart.amount=0
            }
            state.cart = copy_cart.content
            state.total_amount = copy_cart.amount
        },
        DELETE_DOWNLOAD_FROM_OBJECT(state, data) {
            let copy_cart = JSON.parse(localStorage.getItem('_cart'))

            if(!copy_cart){
                copy_cart={}
                copy_cart.content=[]
                copy_cart.amount=0
            }else{
                for (var i=0; i < copy_cart.content.length; i++) {
                    if (copy_cart.content[i].itemid === data.itemid) {
                        copy_cart.content.splice(i, 1)
                        copy_cart.amount=copy_cart.amount-data.amount
                    }
                }
            }

            localStorage.setItem("_cart", JSON.stringify(copy_cart))
            state.cart = copy_cart.content
            state.total_amount = copy_cart.amount

        },
        
        ADD_NEW_DOWNLOAD(state, data) {
            let copy_cart = JSON.parse(localStorage.getItem('_cart'))

            if(!copy_cart){
                copy_cart={}
                copy_cart.content=[]
                copy_cart.content.push({itemid:data.itemid,amount:data.amount,size:data.size,name:data.name,quality:data.quality,id:data.id,type:data.type,poster:data.poster})
                copy_cart.amount=data.amount
            }else{
                for (var i=0; i < copy_cart.content.length; i++) {
                    if (copy_cart.content[i].itemid === data.itemid) {
                        copy_cart.content.splice(i, 1)
                        copy_cart.amount=copy_cart.amount-data.amount
                    }
                }
                copy_cart.content.push({itemid:data.itemid,amount:data.amount,size:data.size,name:data.name,quality:data.quality,id:data.id,type:data.type,poster:data.poster})
                copy_cart.amount=copy_cart.amount+data.amount
            }

            localStorage.setItem("_cart", JSON.stringify(copy_cart))
            state.cart = copy_cart.content
            state.total_amount = copy_cart.amount

        }, 

        DOWNLOAD_SPINER_LOAD(state) {
            state.cartloading = true
        },

        DOWNLOAD_SPINER_CLEAN(state) {
            state.cartloading = false
        }

}


