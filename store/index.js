export const state = () => ({
  locales: ['en', 'fa'],
  locale: 'fa'
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
