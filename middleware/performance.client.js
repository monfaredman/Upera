/**
 * Performance Middleware
 * Adds performance optimizations and monitoring
 */
export default function ({ app, route }) {
  // Only run on client side
  if (process.server) return

  // Prefetch critical routes on hover
  if (process.client) {
    // Prefetch next likely routes
    const prefetchRoutes = ['/', '/genres', '/lists']
    prefetchRoutes.forEach((path) => {
      app.router.onReady(() => {
        app.router.prefetch(path)
      })
    })
  }

  // Add performance marks for route changes
  if (process.client && window.performance) {
    window.performance.mark(`route-${route.name}-start`)
  }
}

