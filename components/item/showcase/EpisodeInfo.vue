<template>
  <div v-if="isValidEpisode" :class="episodeInfoClasses">
    {{ $t('show.season') }}{{ episode.season_number }} -
    {{ $t('show.episode') }} {{ episode.episode_number }}
  </div>
</template>

<script>
export default {
  name: 'EpisodeInfo',
  props: {
    episode: {
      type: Object,
      default: () => ({}),
    },
    variant: {
      type: String,
      default: 'desktop', // 'desktop' or 'mobile'
      validator: (value) => ['desktop', 'mobile'].includes(value),
    },
  },
  computed: {
    episodeInfoClasses() {
      const baseClasses =
        'text-invert mb-1 mb-md-3 font-weight-normal title-item-episode'

      return this.variant === 'mobile'
        ? `${baseClasses} p-fs-small title title2 d-lg-none`
        : `${baseClasses} p-fs-small d-none d-lg-block `
    },
    isValidEpisode() {
      return (
        this.episode &&
        this.episode.season_number !== undefined &&
        this.episode.episode_number !== undefined
      )
    },
  },
}
</script>

<style scoped>
.title-item-episode {
  font-size: 18px !important;
  font-weight: 600 !important;
  text-shadow: 2px 2px 1px rgb(0 0 0 / 69%);
}
</style>
