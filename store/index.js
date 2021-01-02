export const state = () => ({
  locales: ['en', 'fa'],
  locale: 'fa',
  checkuser: {
    subscription: 0
  },
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
  }
}

export const mutations = {
  SET_USER (state, data) {
      state.checkuser = data
  },
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      localStorage.setItem('lang', locale)
      state.locale = locale
    }

      $( "#srm" ).removeClass( "srmrtl" )
      if(state.locale=='fa')
        $( "#srm" ).addClass( "srmrtl" )
  },
	GET_LANG(state) {
		if (localStorage.getItem('lang') && state.locales.includes(localStorage.getItem('lang'))) {
      state.locale = localStorage.getItem('lang')
    }
      $( "#srm" ).removeClass( "srmrtl" )
      if(state.locale=='fa')
        $( "#srm" ).addClass( "srmrtl" )
  },
  EMPTY_LANG(state) {
    localStorage.removeItem('lang')
    state.locale='fa'
  }
}

export const actions = {

  async nuxtServerInit(store) {

    
  	if(!store.state.auth.loggedIn){
  		let res
    	res=await this.$axios.get('/ghost/get/check/user')
        store.commit('SET_USER',res.data)

    }else{

      store.commit('SET_USER',store.state.auth.user)
    }
  },
  SET_LANG({commit},lang) {
    commit('SET_LANG',lang)
  },
  GET_LANG({commit}) {
    commit('GET_LANG')
  },
  logout(store) {
        this.$axios.get('/ghost/get/check/user').then((response) => {
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
  }
}
