/**
 * Language initialization plugin
 * Ensures default language is 'fa' (Persian) on first visit
 * Respects user's language preference if already set
 */
export default function (context) {
  if (!process.client) return
  if (!context.app.$cookiz) return

  // Check for existing preferences
  const i18nCookie =
    context.app.$cookiz.get('i18n_redirected') ||
    context.app.$cookiz.get('vi18n_redirected')
  const storedLang = localStorage.getItem('lang')

  let locale = 'fa' // Always default to Persian

  // If user has a preference, use it
  if (i18nCookie) {
    const cookieLocale = i18nCookie.replace(':', '').toLowerCase()
    if (cookieLocale === 'fa' || cookieLocale === 'en') {
      locale = cookieLocale
    }
  } else if (storedLang && (storedLang === 'fa' || storedLang === 'en')) {
    locale = storedLang
    // Sync cookie with localStorage
    context.app.$cookiz.set('i18n_redirected', `:${locale}`, {
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
      path: '/',
    })
  } else {
    // First visit - set default to 'fa' and create cookie
    context.app.$cookiz.set('i18n_redirected', ':fa', {
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
      path: '/',
    })
    localStorage.setItem('lang', 'fa')
  }

  // Set locale in i18n if available
  if (context.app.i18n) {
    context.app.i18n.setLocale(locale)
  }
}
