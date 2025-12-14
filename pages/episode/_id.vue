<template>
  <div>
    <Item :data="data" type="episode" />
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
      .get('/getV2/episode/' + context.params.id)
      .then((result) => {
        res = result
      })
      .catch((e) => {
        context.redirect('/')
        return e
      })

    res.data.data.item = res.data.data.episode
    res.data.data.episode = null

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
    const episodeTitle =
      this.$i18n?.locale === 'fa' && item.name_fa
        ? item.name_fa
        : item.name || item.name_fa

    // Build title with series name if available
    const seriesName = item.series_name_fa || item.series_name || ''
    const seasonEpisode =
      item.season_number && item.episode_number
        ? `فصل ${item.season_number} قسمت ${item.episode_number}`
        : ''

    const title = seriesName
      ? `${seriesName} ${seasonEpisode} - ${episodeTitle}`
      : episodeTitle

    const description =
      this.$i18n?.locale === 'fa' && item.overview_fa
        ? item.overview_fa
        : item.overview || item.overview_fa || ''
    const image = item.still
      ? `${process.env.API_URL_CDN || ''}stills/${item.still}`
      : item.poster
      ? `${process.env.API_URL_CDN || ''}posters/${item.poster}`
      : item.backdrop
      ? `${process.env.API_URL_CDN || ''}backdrops/${item.backdrop}`
      : ''
    const url = `${process.env.APP_URL || ''}${this.$route.path}`

    // Generate genres string
    const genres = item.new_genres
      ? Object.keys(item.new_genres).join(', ')
      : ''

    return {
      title: `${title} | ${process.env.APP_NAME_FA || 'آپرا'}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description.substring(0, 160) || `تماشای آنلاین ${title}`,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: `${seriesName}, ${episodeTitle}, ${seasonEpisode}, تماشای آنلاین, ${genres}`,
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
          content: description.substring(0, 200) || `تماشای آنلاین ${title}`,
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
          content: 'video.episode',
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
          content: description.substring(0, 200) || `تماشای آنلاین ${title}`,
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
            '@type': 'TVEpisode',
            name: episodeTitle,
            description: description,
            image: image,
            url: url,
            ...(item.episode_number && { episodeNumber: item.episode_number }),
            ...(seriesName && {
              partOfSeries: {
                '@type': 'TVSeries',
                name: seriesName,
              },
            }),
            ...(item.season_number && {
              partOfSeason: {
                '@type': 'TVSeason',
                seasonNumber: item.season_number,
              },
            }),
          },
        },
      ],
    }
  },
}
</script>
