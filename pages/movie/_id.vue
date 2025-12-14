<template>
  <div>
    <Item :data="data" type="movie" />
  </div>
</template>
<script>
import Item from '@/components/Item'
export default {
  components: {
    Item,
  },

  async asyncData(context) {
    let res

    await context.app.$axios
      .get('/getV2/movie/' + context.params.id)
      .then((result) => {
        res = result
      })
      .catch((e) => {
        context.redirect('/')
        return e
      })

    res.data.data.item = res.data.data.movie
    res.data.data.movie = null

    return { data: res.data.data }
  },

  data() {
    return {
      data: {},
    }
  },

  head() {
    if (!this.data || !this.data.item) {
      return {
        title: process.env.APP_NAME_FA || 'آپرا',
      }
    }

    const item = this.data.item
    const title =
      this.$i18n?.locale === 'fa' && item.name_fa
        ? item.name_fa
        : item.name || item.name_fa
    const description =
      this.$i18n?.locale === 'fa' && item.overview_fa
        ? item.overview_fa
        : item.overview || item.overview_fa || ''
    const image = item.poster
      ? `${process.env.API_URL_CDN || ''}posters/${item.poster}`
      : item.backdrop
      ? `${process.env.API_URL_CDN || ''}backdrops/${item.backdrop}`
      : ''
    const url = `${process.env.APP_URL || ''}${this.$route.path}`

    // Generate genres string
    const genres = item.new_genres
      ? Object.keys(item.new_genres).join(', ')
      : ''

    // Generate cast string (first 5 actors)
    const castList =
      item.casts && Array.isArray(item.casts)
        ? item.casts
            .slice(0, 5)
            .map((c) => c.name_fa || c.name)
            .join(', ')
        : ''

    return {
      title: `${title} | ${process.env.APP_NAME_FA || 'آپرا'}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            description.substring(0, 160) || `تماشای آنلاین فیلم ${title}`,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: `${title}, فیلم ${title}, تماشای آنلاین, ${genres}, ${castList}`,
        },
        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            description.substring(0, 200) || `تماشای آنلاین فیلم ${title}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: image,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: url,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'video.movie',
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            description.substring(0, 200) || `تماشای آنلاین فیلم ${title}`,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: image,
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: url,
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'Movie',
            name: title,
            description: description,
            image: image,
            url: url,
            genre: genres.split(', ').filter(Boolean),
            ...(item.imdb_rate && {
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: item.imdb_rate,
                bestRating: '10',
              },
            }),
          },
        },
      ],
    }
  },
}
</script>
