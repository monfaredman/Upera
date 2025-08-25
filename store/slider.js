export const state = () => ({
  sliders: [],
  live: []
})

export const mutations = {
  setSliders(state, sliders) {
    state.sliders = sliders
  },
  setLive(state, live) {
    state.live = live
  }
}

export const actions = {
  async fetchSlider({ commit, state }, { filtercontents = '', loadagain = 0 } = {}) {
    // اگر قبلاً بدون نیاز به reload لود شده بود، باز هم call نکن
    if (!loadagain && state.sliders.length) {
      return
    }

    try {
      const apiUrl = '/get/slider' + filtercontents
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
  }
}
