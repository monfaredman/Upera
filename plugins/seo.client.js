/**
 * SEO Plugin for Nuxt 2
 * Provides utilities for setting page-level SEO metadata
 */

export default ({ app }, inject) => {
  /**
   * Set SEO metadata for a page
   * @param {Object} options - SEO options
   * @param {String} options.title - Page title
   * @param {String} options.description - Page description
   * @param {String} options.image - Open Graph image URL
   * @param {String} options.url - Canonical URL
   * @param {String} options.type - Open Graph type (default: 'website')
   * @param {String} options.siteName - Site name
   * @param {Object} options.structuredData - JSON-LD structured data
   */
  const setSEO = (options = {}) => {
    const {
      title,
      description,
      image,
      url,
      type = 'website',
      siteName,
      structuredData,
    } = options

    const routerBase = app.router.options.base || '/'
    const baseUrl = process.env.BURL || process.env.URL || ''
    const fullUrl = url ? `${baseUrl}${url}` : `${baseUrl}${app.router.currentRoute.fullPath}`
    const defaultImage = image || `${baseUrl}${routerBase}images/og-default.jpg`
    const defaultTitle = siteName || process.env.APP_NAME_FA || 'Upera'
    const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle
    const defaultDescription =
      description ||
      'تماشای آنلاین فیلم ها و سریال ها در تلویزیون هوشمند , کنسول بازی , کامپیوتر , لپتاپ , تبلت و ...'

    // Update head
    app.head.title = pageTitle
    app.head.meta = app.head.meta || []

    // Update or add meta tags
    const updateMeta = (hid, name, property, content) => {
      const index = app.head.meta.findIndex(
        (m) => m.hid === hid || m.name === name || m.property === property
      )
      const meta = {
        hid,
        ...(name ? { name } : {}),
        ...(property ? { property } : {}),
        content,
      }

      if (index >= 0) {
        app.head.meta[index] = meta
      } else {
        app.head.meta.push(meta)
      }
    }

    // Title
    updateMeta('title', null, 'og:title', pageTitle)
    updateMeta('twitter:title', 'twitter:title', null, pageTitle)

    // Description
    updateMeta('description', 'description', null, defaultDescription)
    updateMeta('og:description', null, 'og:description', defaultDescription)
    updateMeta(
      'twitter:description',
      'twitter:description',
      null,
      defaultDescription
    )

    // Image
    updateMeta('og:image', null, 'og:image', defaultImage)
    updateMeta('twitter:image', 'twitter:image', null, defaultImage)
    updateMeta('og:image:width', null, 'og:image:width', '1200')
    updateMeta('og:image:height', null, 'og:image:height', '630')

    // URL
    updateMeta('og:url', null, 'og:url', fullUrl)

    // Type
    updateMeta('og:type', null, 'og:type', type)

    // Site name
    if (siteName) {
      updateMeta('og:site_name', null, 'og:site_name', siteName)
    }

    // Canonical URL
    const linkIndex = app.head.link.findIndex((l) => l.rel === 'canonical')
    const canonicalLink = {
      rel: 'canonical',
      href: fullUrl,
    }

    if (linkIndex >= 0) {
      app.head.link[linkIndex] = canonicalLink
    } else {
      app.head.link = app.head.link || []
      app.head.link.push(canonicalLink)
    }

    // Structured Data (JSON-LD)
    if (structuredData) {
      const scriptIndex = app.head.script.findIndex(
        (s) => s.type === 'application/ld+json'
      )
      const script = {
        type: 'application/ld+json',
        json: structuredData,
      }

      if (scriptIndex >= 0) {
        app.head.script[scriptIndex] = script
      } else {
        app.head.script = app.head.script || []
        app.head.script.push(script)
      }
    }
  }

  /**
   * Generate structured data for video content
   */
  const generateVideoStructuredData = (video) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: video.name || video.name_fa,
      description: video.overview || video.overview_fa,
      thumbnailUrl: video.poster
        ? `https://thumb.upera.shop/thumb?w=1200&h=630&q=85&a=c&src=https://cdn.upera.shop/s3/posters/${video.poster}`
        : '',
      uploadDate: video.created_at || new Date().toISOString(),
      duration: video.runtime ? `PT${video.runtime}M` : undefined,
      contentUrl: video.stream || '',
    }
  }

  /**
   * Generate structured data for movie/TV content
   */
  const generateContentStructuredData = (content) => {
    const isMovie = content.type === 'movie'
    const schemaType = isMovie ? 'Movie' : 'TVSeries'

    return {
      '@context': 'https://schema.org',
      '@type': schemaType,
      name: content.name || content.name_fa,
      alternateName: content.name_fa || content.name,
      description: content.overview || content.overview_fa,
      image: content.poster
        ? `https://thumb.upera.shop/thumb?w=1200&h=630&q=85&a=c&src=https://cdn.upera.shop/s3/posters/${content.poster}`
        : '',
      datePublished: content.year ? `${content.year}-01-01` : undefined,
      aggregateRating: content.rate
        ? {
            '@type': 'AggregateRating',
            ratingValue: content.rate,
            bestRating: '10',
            worstRating: '1',
          }
        : undefined,
      ...(isMovie
        ? {
            duration: content.runtime ? `PT${content.runtime}M` : undefined,
          }
        : {}),
    }
  }

  /**
   * Generate breadcrumb structured data
   */
  const generateBreadcrumbStructuredData = (items) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    }
  }

  // Inject methods
  inject('seo', {
    set: setSEO,
    video: generateVideoStructuredData,
    content: generateContentStructuredData,
    breadcrumb: generateBreadcrumbStructuredData,
  })
}

