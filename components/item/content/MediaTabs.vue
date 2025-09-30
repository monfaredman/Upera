<template>
  <section class="horizontal-list-container mt-4">
    <div class="swiper-container horizontal-list">
      <div id="movie-tabs" class="border-top border-dark">
        <div class="nav mt-3" role="tablist">
          <b-tabs v-model="activeTab" content-class="mt-4" class="w-full">
            <!-- Casts Tab -->
            <CastsTab
              v-if="hasCasts"
              :casts="casts"
              :directors="directors"
              :producers="producers"
              :writers="writers"
              :investors="investors"
            />

            <!-- Comments Tab -->
            <CommentsTab
              :id="data.item.id"
              :type="type"
              :name="data.item.name"
              :namefa="data.item.name_fa"
              :comm-num="commNum"
            />

            <!-- Backstage Tab -->
            <MediaTab
              v-if="medias.backstage === 1"
              title="پشت صحنه"
              :data="data"
              media-type="backstage"
              @play-media="GET_FILE(2)"
            />

            <!-- Gallery Tab -->
            <GalleryTab
              v-if="medias.image === 1"
              :data="data"
              @load-images="$emit('load-images')"
            />

            <!-- Music Video Tab -->
            <MediaTab
              v-if="medias.musicvideo === 1"
              title="موزیک ویدئو"
              :data="data"
              media-type="musicvideo"
              @play-media="GET_FILE(4)"
            />

            <!-- Next Episode Preview Tab -->
            <MediaTab
              v-if="medias.next === 1"
              title="آنچه در قسمت بعد خواهید دید"
              :data="data"
              media-type="next"
              @play-media="GET_FILE(3)"
            />
          </b-tabs>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import CastsTab from '@/components/item/content/tabs/CastsTab'
import CommentsTab from '@/components/item/content/tabs/CommentsTab'
import GalleryTab from '@/components/item/content/tabs/GalleryTab'
import MediaTab from '@/components/item/content/tabs/MediaTab'

export default {
  name: 'MediaTabs',
  components: {
    CastsTab,
    CommentsTab,
    GalleryTab,
    MediaTab,
  },
  props: {
    data: { type: Object, default: () => ({ item: {} }) },
    type: { type: String, default: '' },
    medias: { type: Object, default: () => ({}) },
    casts: { type: Array, default: () => [] },
    directors: { type: Array, default: () => [] },
    producers: { type: Array, default: () => [] },
    writers: { type: Array, default: () => [] },
    investors: { type: Array, default: () => [] },
    commNum: { type: Number, default: 0 },
  },
  emits: ['get-file', 'load-images'],
  data() {
    return {
      activeTab: 0,
    }
  },
  computed: {
    hasCasts() {
      return (
        this.casts?.length > 0 ||
        this.directors?.length > 0 ||
        this.producers?.length > 0
      )
    },
  },
  methods: {
    GET_FILE(content) {
      this.$emit('get-file', content)
    },
  },
}
</script>
