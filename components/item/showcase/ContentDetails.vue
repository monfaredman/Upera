<template>
  <section id="movie" class="page">
    <div>
      <div class="article py-3">
        <!-- Additional Media Sections -->
        <MediaTabs
          v-if="hasMediaTabs"
          :data="data"
          :type="type"
          :medias="medias"
          :writers="writers"
          :investors="investors"
          :comm-num="commNum"
          :light-images="lightImages"
          :images-loading="imagesLoading"
          @get-file="GET_FILE"
          @load-images="loadImages"
        />
        <!-- No Content Message -->
        <div v-if="!hasMediaTabs" class="no-content-message">
          <div class="text-center py-5">
            <i class="fas fa-folder-open fa-3x mb-3 text-muted"></i>
            <p class="text-muted">محتوایی برای نمایش وجود ندارد</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MediaTabs from '@/components/item/content/MediaTabs'

export default {
  name: 'ContentDetails',
  components: {
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

    directors: {
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
    lightImages: {
      type: Array,
      default: () => [],
    },
    imagesLoading: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['get-file', 'load-images'],
  computed: {
    hasMediaTabs() {
      return (
        this.medias.teaser === 1 ||
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

<style scoped>
::v-deep .item-tabs-nav .nav-link.active,
::v-deep .item-tabs-nav .nav-link:active {
  color: #1b6be5 !important;
  box-shadow: 0 8px 22px rgba(175, 0, 45, 0.22) !important;
  border-radius: 10px !important;
  transform: none !important;
}

.no-content-message {
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
}

.no-content-message .text-muted {
  opacity: 0.6;
  font-size: 1.1rem;
}

section#movie {
  margin-top: -2rem !important;
}

@media (max-width: 768px) {
  section#movie {
    margin-top: 1rem !important;
  }

  .no-content-message {
    margin-top: -1rem;
  }
}
</style>
