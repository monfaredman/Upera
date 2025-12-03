export const state = () => ({
  sliders: [],
  live: [],
  type1Sliders: [],
  type2Sliders: [],
  type3Sliders: [],
})

export const mutations = {
  setSliders(state, sliders) {
    state.sliders = sliders
  },
  setLive(state, live) {
    state.live = live
  },
  setType1Sliders(state, sliders) {
    state.type1Sliders = sliders
  },
  setType2Sliders(state, sliders) {
    state.type2Sliders = sliders
  },
  setType3Sliders(state, sliders) {
    state.type3Sliders = sliders
  },
}

export const actions = {
  async fetchSlider(
    { commit, state },
    { filtercontents = '', loadagain = 0, location = null } = {}
  ) {
    // اگر قبلاً بدون نیاز به reload لود شده بود، باز هم call نکن
    if (!loadagain && state.sliders.length) {
      return
    }

    try {
      let apiUrl = '/get/slider'

      // Build query parameters
      const params = new URLSearchParams()

      // Parse existing filtercontents if provided
      if (filtercontents) {
        const urlParams = new URLSearchParams(filtercontents.replace('?', ''))
        urlParams.forEach((value, key) => {
          params.append(key, value)
        })
      }

      // Add location if provided
      if (location !== null) {
        params.set('location', location.toString())
      }

      const queryString = params.toString()
      if (queryString) {
        apiUrl += '?' + queryString
      }

      const { status, data } = await this.$axios.get(apiUrl)
      if (status === 200 && data.data) {
        commit('setSliders', data.data.sliders)
        commit('setLive', data.data.live)
      } else {
        console.warn('پاسخ نامعتبر برای slider دریافت شد:', data)
      }
    } catch (err) {
      console.error('خطا در دریافت slider:', err)
    }
  },
  async fetchType1Slider(
    { commit, state },
    { filtercontents = '', loadagain = 0 } = {}
  ) {
    if (!loadagain && state.type1Sliders.length) {
      return
    }

    try {
      let apiUrl = '/get/slider'

      const params = new URLSearchParams()

      if (filtercontents) {
        const urlParams = new URLSearchParams(filtercontents.replace('?', ''))
        urlParams.forEach((value, key) => {
          params.append(key, value)
        })
      }

      params.set('location', '2')

      const queryString = params.toString()
      if (queryString) {
        apiUrl += '?' + queryString
      }

      const { status, data } = await this.$axios.get(apiUrl)
      if (status === 200 && data.data) {
        commit('setType1Sliders', data.data.sliders || [])
      } else {
        console.warn('پاسخ نامعتبر برای type1 slider دریافت شد:', data)
      }
    } catch (err) {
      console.error('خطا در دریافت type1 slider:', err)
    }
  },
  // async fetchType2Slider(
  //   { commit, state },
  //   { filtercontents = '', loadagain = 0 } = {}
  // ) {
  //   if (!loadagain && state.type2Sliders.length) {
  //     return
  //   }

  //   try {
  //     let apiUrl = '/get/slider'

  //     const params = new URLSearchParams()

  //     if (filtercontents) {
  //       const urlParams = new URLSearchParams(filtercontents.replace('?', ''))
  //       urlParams.forEach((value, key) => {
  //         params.append(key, value)
  //       })
  //     }

  //     params.set('location', '3')

  //     const queryString = params.toString()
  //     if (queryString) {
  //       apiUrl += '?' + queryString
  //     }

  //     const { status, data } = await this.$axios.get(apiUrl)
  //     if (status === 200 && data.data) {
  //       commit('setType2Sliders', data.data.sliders || [])
  //     } else {
  //       console.warn('پاسخ نامعتبر برای type2 slider دریافت شد:', data)
  //     }
  //   } catch (err) {
  //     console.error('خطا در دریافت type2 slider:', err)
  //   }
  // },
  // async fetchType3Slider(
  //   { commit, state },
  //   { filtercontents = '', loadagain = 0 } = {}
  // ) {
  //   if (!loadagain && state.type3Sliders.length) {
  //     return
  //   }

  //   try {
  //     let apiUrl = '/get/slider'

  //     const params = new URLSearchParams()

  //     if (filtercontents) {
  //       const urlParams = new URLSearchParams(filtercontents.replace('?', ''))
  //       urlParams.forEach((value, key) => {
  //         params.append(key, value)
  //       })
  //     }

  //     params.set('location', '4')

  //     const queryString = params.toString()
  //     if (queryString) {
  //       apiUrl += '?' + queryString
  //     }

  //     const { status, data } = await this.$axios.get(apiUrl)
  //     if (status === 200 && data.data) {
  //       commit('setType3Sliders', data.data.sliders || [])
  //     } else {
  //       console.warn('پاسخ نامعتبر برای type3 slider دریافت شد:', data)
  //     }
  //   } catch (err) {
  //     console.error('خطا در دریافت type3 slider:', err)
  //   }
  // },
}
