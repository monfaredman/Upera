// Global promise to track ongoing avatar fetch
let avatarFetchPromise = null
// Global promise to track ongoing user image fetch
let userImageFetchPromise = null

export const state = () => ({
  locales: ['en', 'fa'],
  locale: 'fa',
  checkuser: {
    subscription: 0,
  },
  my_credit: 0,
  content_subscription: 0,
  filtercontents: '',
  nightmode: false,
  showplyrmodal: false,
  showDownloadModal: false,
  autoplay: true,
  basketActive: false,
  avatars: {
    availableAvatars: [],
    userAvatar: null,
    cdnUser: null,
    loaded: false,
  },
  userImage: null, // User avatar image from /api/v1/get/user
  userImageLoaded: false, // Track if user image has been loaded
  topsearch: null, // Top search results
  topsearchLoaded: false, // Track if topsearch has been loaded
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
  },
  basketActive(state) {
    return state.basketActive
  },
  avatars(state) {
    return state.avatars
  },
  userImage(state) {
    return state.userImage
  },
  userImageLoaded(state) {
    return state.userImageLoaded
  },
  topsearch(state) {
    return state.topsearch
  },
  topsearchLoaded(state) {
    return state.topsearchLoaded
  },
}

export const mutations = {
  SET_USER(state, data) {
    state.checkuser = data
  },
  SET_CONTENT_SUBSCRIPTION(state, data) {
    state.content_subscription = data
  },
  SET_FILTER_CONTENTS(state, data) {
    state.filtercontents = data
  },
  SET_MY_CREDIT(state, data) {
    state.my_credit = data
  },
  SET_showplyrmodal(state, data) {
    state.showplyrmodal = data
  },
  SET_showDownloadModal(state, data) {
    state.showDownloadModal = data
  },
  SET_AUTOPLAY_MUTATION(state, autoplay) {
    state.autoplay = autoplay
  },
  SET_BASKET_ACTIVE_MUTATION(state, basketActive) {
    state.basketActive = basketActive
  },
  SET_AVATARS(state, data) {
    state.avatars = {
      availableAvatars: data.availableAvatars,
      userAvatar: data.userAvatar,
      cdnUser: data.cdnUser,
      loaded: true,
    }
  },
  SET_LOCALE(state, locale) {
    state.locale = locale
  },
  SET_USER_IMAGE(state, image) {
    state.userImage = image
    state.userImageLoaded = true
  },
  SET_USER_IMAGE_LOADED(state, loaded) {
    state.userImageLoaded = loaded
  },
  CLEAR_USER_IMAGE_MUTATION(state) {
    state.userImage = null
    state.userImageLoaded = false
  },
  SET_TOPSEARCH(state, data) {
    state.topsearch = data
    state.topsearchLoaded = true
  },
  CLEAR_TOPSEARCH(state) {
    state.topsearch = null
    state.topsearchLoaded = false
  },
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
    if (localStorage.getItem('isKids') == 1) {
      this.app.context.redirect('https://' + window.location.host + '/kids')
    }
    if (!store.state.auth.loggedIn) {
      let res
      res = await this.$axios.get('/ghost/get' + this.$config.check_url)
      store.commit('SET_USER', res.data)
    } else {
      store.commit('SET_USER', store.state.auth.user)
    }
    if (store.state.checkuser.ref != 4 && store.state.checkuser.ref) {
      if (this.$cookiz.get('ref') != store.state.checkuser.ref) {
        this.$cookiz.set('ref', store.state.checkuser.ref)
      }
    }
    if (this.$cookiz.get('filtercontents')) {
      store.commit('SET_FILTER_CONTENTS', this.$cookiz.get('filtercontents'))
    }
    if (localStorage.getItem('basketActive')) {
      store.commit(
        'SET_BASKET_ACTIVE_MUTATION',
        localStorage.getItem('basketActive') === 'true'
      )
    }
    // Restore user image from cache on page refresh
    if (process.client && store.state.auth.loggedIn) {
      const cachedImage = localStorage.getItem('user_image_cache')
      if (cachedImage) {
        store.commit('SET_USER_IMAGE', cachedImage)
      }
    }
    // Note: avatars are now only fetched when user opens profile edit modal
    // Note: topsearch is now only fetched when search modal opens or on search page
    // }
  },
  logout(store) {
    this.$axios.get('/ghost/get' + this.$config.check_url).then((response) => {
      if (response.status === 200) {
        store.commit('SET_USER', response.data)
      }
    })
    // Clear user image on logout
    store.dispatch('CLEAR_USER_IMAGE')
    // Clear topsearch and avatars on logout
    store.dispatch('CLEAR_TOPSEARCH')
    store.dispatch('CLEAR_AVATARS')
  },
  async login(store) {
    if (store.state.auth.loggedIn) {
      store.commit('SET_USER', store.state.auth.user)
      // Note: FETCH_USER_IMAGE will be called by Header.vue on mount after redirect
      // No need to call it here to avoid duplicate calls
      // Fetch topsearch after login
      // Note: avatars are now only fetched when user opens profile edit modal
      await store.dispatch('FETCH_TOPSEARCH')
      window.location.href = location.href
    }
  },
  SET_NIGHTMODE(store, nightmode) {
    if (nightmode) {
      this.$colorMode.preference = 'dark'
    } else {
      this.$colorMode.preference = 'system'
    }
  },
  SET_AUTOPLAY(store, autoplay) {
    store.commit('SET_AUTOPLAY_MUTATION', autoplay)
  },
  SET_BASKET_ACTIVE(store, basketActive) {
    store.commit('SET_BASKET_ACTIVE_MUTATION', basketActive)
    if (process.client) {
      localStorage.setItem('basketActive', basketActive)
    }
  },
  SET_CONTENT_SUBSCRIPTION_ACTION(store, data) {
    store.commit('SET_CONTENT_SUBSCRIPTION', data)
  },
  SET_FILTER_CONTENTS(store, data) {
    store.commit('SET_FILTER_CONTENTS', data)
  },
  DOWNLOAD_MODAL_LOAD(store) {
    store.commit('SET_showDownloadModal', true)
  },

  DOWNLOAD_MODAL_CLEAN(store) {
    store.commit('SET_showDownloadModal', false)
  },

  PLAYER_MODAL_LOAD(store) {
    store.commit('SET_showplyrmodal', true)
  },

  PLAYER_MODAL_CLEAN(store) {
    store.commit('SET_showplyrmodal', false)
    // var playersm=jwplayer('my-files-player') // eslint-disable-line
    //  if(document.getElementById('my-files-player') && playersm){
    //      playersm.remove()
    //  }
  },

  SET_MY_CREDIT(store, data) {
    store.commit('SET_MY_CREDIT', data)
  },

  async FETCH_AVATARS(store) {
    // If already loaded, return immediately
    if (store.state.avatars.loaded) {
      return
    }

    // If a fetch is already in progress, wait for it
    if (avatarFetchPromise) {
      return avatarFetchPromise
    }

    // Start the fetch and store the promise
    avatarFetchPromise = (async () => {
      try {
        const response = await this.$axios.get('/get/avatars')
        if (response?.data?.data) {
          const { avatars, user_avatar, cdn_user } = response.data.data
          // Normalize avatars to full URLs when cdn_user is available
          const availableAvatars = (avatars || []).map((a) =>
            cdn_user && !a.startsWith('http') ? cdn_user + a : a
          )
          store.commit('SET_AVATARS', {
            availableAvatars,
            userAvatar: user_avatar,
            cdnUser: cdn_user,
          })
        }
      } catch (error) {
        console.error('[FETCH_AVATARS] Error fetching avatars:', error)
      } finally {
        // Clear the promise after completion
        avatarFetchPromise = null
      }
    })()

    return avatarFetchPromise
  },

  CLEAR_AVATARS(store) {
    // Reset the promise as well
    avatarFetchPromise = null
    store.commit('SET_AVATARS', {
      availableAvatars: [],
      userAvatar: null,
      cdnUser: null,
      loaded: false,
    })
  },

  CLEAR_USER_IMAGE(store) {
    // Reset the promise as well
    userImageFetchPromise = null
    store.commit('CLEAR_USER_IMAGE_MUTATION')
  },

  async FETCH_TOPSEARCH(store) {
    // If already loaded, return immediately
    if (store.state.topsearchLoaded && store.state.topsearch) {
      return store.state.topsearch
    }

    try {
      const response = await this.$axios.get('/ghost/topsearch')
      if (response?.data?.data) {
        let topsearch = response.data.data.topsearch
        // Handle locale
        if (this.app && this.app.i18n && this.app.i18n.locale !== 'fa') {
          topsearch = response.data.data.topsearch_en || topsearch
        }
        store.commit('SET_TOPSEARCH', topsearch)
        return topsearch
      }
    } catch (error) {
      console.error('[FETCH_TOPSEARCH] Error fetching topsearch:', error)
      return null
    }
  },

  CLEAR_TOPSEARCH(store) {
    store.commit('CLEAR_TOPSEARCH')
  },

  async FETCH_USER_IMAGE(store) {
    // Only fetch on client side
    if (!process.client) {
      return Promise.resolve()
    }

    // Only fetch if user is logged in
    if (!store.state.auth || !store.state.auth.loggedIn) {
      return Promise.resolve()
    }

    // CRITICAL: Check if a fetch is already in progress FIRST (before any other checks)
    // This must be the first check to prevent race conditions
    if (userImageFetchPromise) {
      return userImageFetchPromise
    }

    // If we already have the user image, no need to fetch again
    if (store.state.userImage) {
      store.commit('SET_USER_IMAGE_LOADED', true)
      return Promise.resolve()
    }

    // If user image fetch has already completed (loaded flag is set), return immediately
    if (store.state.userImageLoaded) {
      return Promise.resolve()
    }

    // Check localStorage for cached fetch timestamp to prevent duplicate calls on refresh
    const lastFetchTime = localStorage.getItem('user_image_fetch_time')
    const now = Date.now()
    // If we fetched within the last 10 seconds, skip (prevents duplicate calls on rapid refreshes)
    if (lastFetchTime && now - parseInt(lastFetchTime) < 10000) {
      return Promise.resolve()
    }

    // CRITICAL: Create a pending promise IMMEDIATELY and assign it synchronously
    // This must happen BEFORE any async operations to prevent race conditions
    // If another call happens at the exact same time, it will see this promise
    let resolvePromise, rejectPromise
    const pendingPromise = new Promise((resolve, reject) => {
      resolvePromise = resolve
      rejectPromise = reject
    })

    // Assign the promise to the global variable IMMEDIATELY (synchronously)
    userImageFetchPromise = pendingPromise

    // Now start the async operation
    ;(async () => {
      // Store fetch timestamp
      localStorage.setItem('user_image_fetch_time', now.toString())
      try {
        const response = await this.$axios.get(
          'https://web.upera.tv/api/v1/get/user'
        )
        // Handle different response structures - get avatar from avatar field
        const avatar = response?.data?.user?.avatar
        if (avatar) {
          store.commit('SET_USER_IMAGE', avatar)
          // Cache the avatar URL in localStorage for faster access on refresh
          localStorage.setItem('user_image_cache', avatar)
          resolvePromise(avatar)
        } else {
          // Mark as loaded even if no image, to prevent repeated calls
          store.commit('SET_USER_IMAGE_LOADED', true)
          resolvePromise(null)
        }
      } catch (error) {
        console.error('[FETCH_USER_IMAGE] Error fetching user image:', error)
        // Mark as loaded on error to prevent infinite retry loops
        store.commit('SET_USER_IMAGE_LOADED', true)
        // Remove fetch timestamp on error so it can retry later
        localStorage.removeItem('user_image_fetch_time')
        rejectPromise(error)
      } finally {
        // Clear the promise after completion
        userImageFetchPromise = null
      }
    })()

    return userImageFetchPromise
  },

  /**
   * Gets and sets the user's preferred language
   * Defaults to 'fa' (Persian) if no preference exists
   */
  GET_LANG(store) {
    if (!process.client) {
      return Promise.resolve('fa')
    }

    return new Promise((resolve) => {
      const locale = 'fa'

      // Persist cookie and localStorage to the only supported locale
      this.$cookiz.set('i18n_redirected', ':fa', {
        maxAge: 60 * 60 * 24 * 365,
        sameSite: 'lax',
        path: '/',
      })
      localStorage.setItem('lang', locale)

      // Update store
      store.commit('SET_LOCALE', locale)

      // Update i18n if available
      if (this.app && this.app.i18n) {
        this.app.i18n.setLocale(locale)
      }

      // Update HTML attributes
      const html = document.querySelector('html')
      if (html) {
        html.setAttribute('lang', locale)
        html.setAttribute('dir', 'rtl')
      }

      resolve(locale)
    })
  },
}
