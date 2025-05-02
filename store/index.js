export const state = () => ({
  locales: ['en', 'fa'],
  locale: 'fa',
  checkuser: {
    subscription: 0
  },
  my_credit: 0,
  content_subscription: 0,
  filtercontents: '',
  nightmode: false,
        showplyrmodal: false,
        showDownloadModal: false,
  autoplay: true
})

// getters
export const getters = {
  nightmode(state) {
    return state.nightmode
  },
  autoplay(state) {
    return state.autoplay
  },
  locale(state) {
    return state.locale
  },
  checkuser(state) {
    return state.checkuser
  },
  my_credit(state) {
    return state.my_credit
  },
  content_subscription(state) {
    return state.content_subscription
  },

  showplyrmodal(state) {
    return state.showplyrmodal
  },
  showDownloadModal(state) {
    return state.showDownloadModal
  },
  filtercontents(state) {
    return state.filtercontents
  }
}

export const mutations = {
  SET_USER (state, data) {
      state.checkuser = data
  },
  SET_CONTENT_SUBSCRIPTION (state, data) {
      state.content_subscription = data
  },
  SET_FILTER_CONTENTS (state, data) {
      state.filtercontents = data
  },
  SET_MY_CREDIT (state, data) {
      state.my_credit = data
  },
  SET_showplyrmodal (state, data) {
      state.showplyrmodal = data
  },
  SET_showDownloadModal (state, data) {
      state.showDownloadModal = data
  },
  SET_AUTOPLAY_MUTATION(state, autoplay) {
    state.autoplay = autoplay
  }
}

export const actions = {

  // async nuxtServerInit(store) {

  //   // if(this.$device.isTV){
  //   //   this.app.context.redirect('https://tv.'+this.app.context.req.headers.host)
  //   // }

  //   if (this.$cookiz.get('filtercontents')){
  //     store.commit('SET_FILTER_CONTENTS',this.$cookiz.get('filtercontents'))
  //   }
    
  // 	if(!store.state.auth.loggedIn){
  // 		let res
  //   	res=await this.$axios.get('/ghost/get'+this.$config.check_url)
  //       store.commit('SET_USER',res.data)

  //   }else{

  //     store.commit('SET_USER',store.state.auth.user)
  //   }
  // },
  async SPA_INIT(store) {
    // if(this.$config.envmode=='spa'){
      if (localStorage.getItem('isKids') == 1){
        this.app.context.redirect('https://'+window.location.host+'/kids')
      }
      if(!store.state.auth.loggedIn){
          let res
          res=await this.$axios.get('/ghost/get'+this.$config.check_url)
            store.commit('SET_USER',res.data)
      }else{
        store.commit('SET_USER',store.state.auth.user)
      }
      if (store.state.checkuser.ref != 4 && store.state.checkuser.ref){
        if (this.$cookiz.get('ref')!=store.state.checkuser.ref) {
          this.$cookiz.set('ref', store.state.checkuser.ref)
        }
      }
      if (this.$cookiz.get('filtercontents')){
        store.commit('SET_FILTER_CONTENTS',this.$cookiz.get('filtercontents'))
      }
    // }
  },
  logout(store) {
        this.$axios.get('/ghost/get'+this.$config.check_url).then((response) => {
            if (response.status === 200) {
                store.commit('SET_USER',response.data)
            }
        })
  },
  login(store) {
  	if(store.state.auth.loggedIn){
        store.commit('SET_USER',store.state.auth.user)
        window.location.href =location.href
    }
  },
  SET_NIGHTMODE(store,nightmode) {
    if (nightmode) {
      this.$colorMode.preference='dark'
    }else{
      this.$colorMode.preference='system'
    }
  },
  SET_AUTOPLAY(store, autoplay) {
    store.commit('SET_AUTOPLAY_MUTATION', autoplay)
  },
  SET_CONTENT_SUBSCRIPTION_ACTION(store,data) {
    store.commit('SET_CONTENT_SUBSCRIPTION',data)
  },
  SET_FILTER_CONTENTS (store, data) {
      store.commit('SET_FILTER_CONTENTS',data)
  },
        DOWNLOAD_MODAL_LOAD(store) {

          store.commit('SET_showDownloadModal',true)
        },

        DOWNLOAD_MODAL_CLEAN(store) {

          store.commit('SET_showDownloadModal',false)

        },

        PLAYER_MODAL_LOAD(store) {
          store.commit('SET_showplyrmodal',true)
        },



        PLAYER_MODAL_CLEAN(store) {

          store.commit('SET_showplyrmodal',false)
           // var playersm=jwplayer('my-files-player') // eslint-disable-line
           //  if(document.getElementById('my-files-player') && playersm){
           //      playersm.remove()
           //  }
        },

  SET_MY_CREDIT (store, data) {
      store.commit('SET_MY_CREDIT',data)
  }
}
