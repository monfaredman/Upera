export const state = () => ({
  top: []
})

export const mutations = {
  setTop(state, top) {
    state.top = top
  }
}

export const actions = {
  async fetchTop({ commit, state }, {filtercontents = '',loadagain=0}) {
    // اگر داده‌ها قبلاً لود شده‌اند (اختیاری)
    if (!loadagain && state.top && state.top.length) {
      return
    }
    try {
      const apiUrl = '/getV2/get_top'
      const response = await this.$axios.get(apiUrl + filtercontents)
      if (response.status === 200 && response.data.data.top) {
        commit('setTop', response.data.data.top)
      } else {
        console.warn('پاسخ نامعتبر برای top دریافت شد:', response)
      }
    } catch (error) {
      console.error('خطا در دریافت top:', error)
    }
  }
}
