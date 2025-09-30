<template>
  <section id="movie" class="page">
    <div>
      <div class="article py-3">
        <!-- Teaser Section -->
        <TeaserPreview
          v-if="medias.teaser == 1"
          :data="data"
          :medias="medias"
          @play-teaser="GET_FILE(1)"
        />

        <!-- Additional Media Sections -->
        <MediaTabs
          v-if="hasMediaTabs"
          :data="data"
          :type="type"
          :medias="medias"
          :casts="casts"
          :directors="directors"
          :producers="producers"
          :writers="writers"
          :investors="investors"
          :comm-num="commNum"
          @get-file="GET_FILE"
          @load-images="loadImages"
        />
      </div>
    </div>
  </section>
</template>

<script>
import TeaserPreview from '@/components/item/content/TeaserPreview'
import MediaTabs from '@/components/item/content/MediaTabs'

export default {
  name: 'ContentDetails',
  components: {
    TeaserPreview,
    MediaTabs,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      required: true,
      validator: (value) => ['movie', 'series', 'episode'].includes(value),
    },
    medias: {
      type: Object,
      default: () => ({}),
    },
    totalClaps: { type: [Number, String], default: 0 },
    episodeNum: {
      type: Number,
      default: 0,
    },
    seasonNum: {
      type: Number,
      default: 0,
    },
    casts: {
      type: Array,
      default: () => [],
    },
    directors: {
      type: Array,
      default: () => [],
    },
    producers: {
      type: Array,
      default: () => [],
    },
    writers: {
      type: Array,
      default: () => [],
    },
    investors: {
      type: Array,
      default: () => [],
    },
    commNum: {
      type: Number,
      default: 0,
    },
  },
  emits: ['get-file', 'load-images'],
  computed: {
    hasMediaTabs() {
      return (
        this.casts?.length > 0 ||
        this.directors?.length > 0 ||
        this.producers?.length > 0 ||
        this.medias.backstage === 1 ||
        this.medias.image === 1 ||
        this.medias.musicvideo === 1 ||
        this.medias.next === 1
      )
    },
  },
  methods: {
    GET_FILE(content) {
      this.$emit('get-file', content)
    },
    loadImages() {
      this.$emit('load-images')
    },
  },
}
</script>
