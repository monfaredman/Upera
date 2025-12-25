/**
 * Ghost (not logged-in) phone persistence.
 *
 * - SSR-safe: no direct localStorage access unless process.client
 * - Keeps the value as digits-only string (e.g. 09xxxxxxxxx)
 */

const STORAGE_KEY = '_ghost_mobile'

function isClient() {
  // Nuxt 2
  return typeof process !== 'undefined' && process.client
}

export function normalizePhone(input) {
  if (!input) return ''
  return String(input)
    .replace(/\s+/g, '')
    .replace(/[^0-9]/g, '')
}

export function getGhostPhone() {
  if (!isClient()) return ''
  try {
    return normalizePhone(window.localStorage.getItem(STORAGE_KEY) || '')
  } catch (e) {
    return ''
  }
}

export function setGhostPhone(phone) {
  if (!isClient()) return
  try {
    const normalized = normalizePhone(phone)
    if (!normalized) {
      window.localStorage.removeItem(STORAGE_KEY)
      return
    }
    window.localStorage.setItem(STORAGE_KEY, normalized)
  } catch (e) {
    // ignore
  }
}

export function clearGhostPhone() {
  if (!isClient()) return
  try {
    window.localStorage.removeItem(STORAGE_KEY)
  } catch (e) {
    // ignore
  }
}
