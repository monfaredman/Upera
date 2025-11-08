<template>
  <section class="horizontal-list-container mt-4">
    <div class="swiper-container horizontal-list">
      <div id="movie-tabs">
        <div class="nav mt-3" role="tablist">
          <b-tabs
            v-model="activeTab"
            content-class="mt-4"
            nav-class="item-tabs-nav"
            class="w-full"
          >
            <!-- Teaser Tab (First Tab) -->
            <b-tab v-if="medias.teaser === 1" title="تیزر و تریلر">
              <div class="row">
                <div class="col-12">
                  <TeaserPreview
                    :data="data"
                    :medias="medias"
                    @play-teaser="GET_FILE(1)"
                  />
                </div>
              </div>
            </b-tab>

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
              :light-images="lightImages"
              :images-loading="imagesLoading"
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
import GalleryTab from '@/components/item/content/tabs/GalleryTab'
import MediaTab from '@/components/item/content/tabs/MediaTab'
import TeaserPreview from '@/components/item/content/TeaserPreview'

export default {
  name: 'MediaTabs',
  components: {
    GalleryTab,
    MediaTab,
    TeaserPreview,
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
      activeTab: 0,
    }
  },
  computed: {
    hasAnyMedia() {
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
</style>
