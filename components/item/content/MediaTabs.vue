<template>
  <section class="media-tabs-section">
    <MediaSwiper
      :data="data"
      :medias="medias"
      :light-images="lightImages"
      :images-loading="imagesLoading"
      @play-backstage="GET_FILE(2)"
      @play-musicvideo="GET_FILE(4)"
      @play-next="GET_FILE(3)"
      @open-gallery="openGallery"
    />

    <!-- Light Gallery Modal -->
    <LightGallery
      v-if="medias.image === 1"
      :index="galleryIndex"
      :images="lightImages"
      @close="galleryIndex = null"
    />
  </section>
</template>
<script>
import MediaSwiper from '@/components/item/content/MediaSwiper'
import LightGallery from '@/components/item/content/gallery/LightGallery'

export default {
  name: 'MediaTabs',
  components: {
    MediaSwiper,
    LightGallery,
  },
  props: {
    data: { type: Object, default: () => ({ item: {} }) },
    type: { type: String, default: '' },
    medias: { type: Object, default: () => ({}) },
    writers: { type: Array, default: () => [] },
    investors: { type: Array, default: () => [] },
    commNum: { type: Number, default: 0 },
    lightImages: { type: Array, default: () => [] },
    imagesLoading: { type: Boolean, default: false },
  },
  emits: ['get-file', 'load-images'],
  data() {
    return {
      galleryIndex: null,
    }
  },
  computed: {
    hasAnyMedia() {
      return (
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
    openGallery(index) {
      // Load images if not already loaded
      if (this.lightImages.length === 0) {
        this.$emit('load-images')
      }
      this.galleryIndex = index
    },
  },
}
</script>
<style scoped>
.media-tabs-section {
  width: 100%;
  padding: 20px 0;
}
</style>
