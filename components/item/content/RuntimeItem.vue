<template>
  <div class="statistics-item statistics-item-row text-muted">
    <i class="icon-episodes" />
    <span class="statistics-item-caption">
      <template v-if="type === 'series'">
        <span class="font-weight-bold">{{ episodeNum }}</span>
        <span class="hide-mobile"> قسمت در </span>
        <span class="show-mobile"> - </span>
        <span class="font-weight-bold">{{ seasonNum }}</span>
        <span class="hide-mobile"> فصل</span>
      </template>
      <template v-else>
        <span class="font-weight-bold">{{ runtime }} </span>
        <span class="hide-mobile">{{ $t('new.minutes') }}</span>
      </template>
    </span>
  </div>
</template>

<script>
export default {
  name: 'RuntimeItem',
  props: {
    type: {
      type: String,
      required: true,
      validator: (value) => ['movie', 'series', 'episode'].includes(value),
    },
    runtime: {
      type: [String, Number],
      default: null,
    },
    episodeNum: {
      type: [String, Number],
      default: 0,
    },
    seasonNum: {
      type: [String, Number],
      default: 0,
    },
  },
  computed: {
    displayRuntime() {
      if (!this.runtime) return '0'
      return typeof this.runtime === 'number'
        ? this.runtime.toString()
        : this.runtime
    },
    displayEpisodeNum() {
      return this.episodeNum?.toString() || '0'
    },
    displaySeasonNum() {
      return this.seasonNum?.toString() || '0'
    },
  },
}
</script>
