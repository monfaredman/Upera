<template>
  <div class="showcase-desc">
    <div class="showcase-top">
      <!-- Main Title -->
      <template v-if="data && data.item && !data.item.logo">
        <div
          v-if="type !== 'episode'"
          class="title text-invert mb-5 mb-md-3 title-item"
        >
          <nuxt-link :to="{ name: type + '-id', params: { id: data.item.id } }">
            {{ ChooseLang(data.item.name, data.item.name_fa) }}
          </nuxt-link>
        </div>
        <div
          v-else
          class="title text-invert mb-5 mb-md-3 title-item"
          style="max-height: 3rem"
        >
          <nuxt-link :to="{ name: type + '-id', params: { id: data.item.id } }">
            {{ ChooseLang(data.item.series_name, data.item.series_name_fa) }}
          </nuxt-link>
        </div>
      </template>
      <!-- Episode Info for Mobile -->
      <EpisodeInfo
        v-if="type === 'episode'"
        :episode="episode"
        variant="mobile"
      />
    </div>

    <div class="showcase-bottom">
      <!-- Episode Info for Desktop -->
      <EpisodeInfo
        v-if="type === 'episode'"
        :episode="episode"
        variant="desktop"
      />

      <!-- Genres -->
      <div class="text-invert mb-1 mb-md-3">
        <GenreTags :genres="data.item.new_genres" />
      </div>

      <!-- Language Info -->
      <!-- <ContentLanguageInfo
        :is-iranian="data.item.ir"
        :has-persian-dub="data.item.persian"
      /> -->
    </div>
  </div>
</template>

<script>
import EpisodeInfo from '@/components/item/showcase/EpisodeInfo'
import GenreTags from '@/components/item/showcase/GenreTags'
// import ContentLanguageInfo from '@/components/item/showcase/ContentLanguageInfo'

export default {
  name: 'ShowcaseDescription',
  components: {
    EpisodeInfo,
    GenreTags,
    // ContentLanguageInfo,
  },
  props: {
    data: { type: Object, default: () => ({}) },
    type: { type: String, default: '' },
    episode: { type: Object, default: () => ({}) },
  },
  methods: {
    ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa
      return en
    },
  },
}
</script>
<style scoped>
.title-item {
  font-size: 44px !important;
  font-weight: 700 !important;
  white-space: nowrap;
  line-height: 3rem;
}

/* Keep same size on mobile as per requirements */
@media (max-width: 767.98px) {
  .title-item {
    font-size: 44px !important;
    font-weight: 700 !important;
    line-height: 3rem;
    white-space: normal;
  }

  .showcase-theme-m-tn .showcase-bottom {
    margin-top: 0 !important;
  }
}
</style>
