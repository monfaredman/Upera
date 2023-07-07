export const state = () => ({
  locales: ['en', 'fa'],
  locale: 'fa',
  checkuser: {
    subscription: 0
  },
  filtercontents: '',
  nightmode: false
})

// getters
export const getters = {
  nightmode(state) {
    return state.nightmode
  },
  locale(state) {
    return state.locale
  },
  checkuser(state) {
    return state.checkuser
  },
  filtercontents(state) {
    return state.filtercontents
  }
}

export const mutations = {
  SET_USER (state, data) {
      state.checkuser = data
  },
  SET_FILTER_CONTENTS (state, data) {
      state.filtercontents = data
  }
}

export const actions = {

  async nuxtServerInit(store) {

    if(this.$device.isTV){
      this.app.context.redirect('https://tv.'+this.app.context.req.headers.host)
    }

    if (this.$cookiz.get('filtercontents')){
      store.commit('SET_FILTER_CONTENTS',this.$cookiz.get('filtercontents'))
    }
    
  	if(!store.state.auth.loggedIn){
  		let res
    	res=await this.$axios.get('/ghost/get'+this.$config.check_url)
        store.commit('SET_USER',res.data)

    }else{

      store.commit('SET_USER',store.state.auth.user)
    }
  },
  async SPA_INIT(store) {
    if(this.$config.envmode=='spa'){
      if(!store.state.auth.loggedIn){
        if(this.$config.envname!='igapp'){
          let res
          res=await this.$axios.get('/ghost/get'+this.$config.check_url)
            store.commit('SET_USER',res.data)
        }else if(window.location.host != 'igtv.igaptv.com' && window.location.host != 'igtv.igaptv.net'){
          store.commit('SET_USER',{subscription: 1})
        }
      }else{
        store.commit('SET_USER',store.state.auth.user)
      }
      if (this.$config.envname!='igapp' && store.state.checkuser.ref != 4 && store.state.checkuser.ref){
        if (this.$cookiz.get('ref')!=store.state.checkuser.ref) {
          this.$cookiz.set('ref', store.state.checkuser.ref)
        }
      }
      if (this.$cookiz.get('filtercontents')){
        store.commit('SET_FILTER_CONTENTS',this.$cookiz.get('filtercontents'))
      }
    }
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
  SET_FILTER_CONTENTS (store, data) {
      store.commit('SET_FILTER_CONTENTS',data)
  }
}
