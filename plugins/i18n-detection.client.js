/**
 * Language initialization plugin
 * Ensures default language is 'fa' (Persian) on first visit
 * Respects user's language preference if already set
 */
export default function (context) {
  if (!process.client) return
  if (!context.app.$cookiz) return

  const locale = 'fa'

  // Always persist the single supported locale
  context.app.$cookiz.set('i18n_redirected', ':fa', {
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
    path: '/',
  })
  localStorage.setItem('lang', locale)

  if (context.app.i18n) {
    context.app.i18n.setLocale(locale)
  }
}
