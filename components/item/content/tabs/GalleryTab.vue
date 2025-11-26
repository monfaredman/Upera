<template>
  <b-tab dir="ltr" @click="handleTabClick">
    <template #title>
      <b-spinner v-if="imagesLoading" type="border" class="mb-1 ml-1" small />
      گالری
    </template>

    <div v-if="lightImages.length >= 1">
      <LightGallery
        :index="galleryIndex"
        :images="lightImages"
        @close="galleryIndex = null"
      />

      <ImageGrid
        :images="lightImages"
        :item-name="data.item.name_fa"
        @image-click="galleryIndex = $event"
      />
    </div>

    <div v-else-if="!imagesLoading" class="no-content-message">
      <div class="text-center py-5">
        <i class="fas fa-images fa-3x mb-3 text-muted"></i>
        <p class="text-muted">محتوایی برای نمایش وجود ندارد</p>
      </div>
    </div>
  </b-tab>
</template>

<script>
import ImageGrid from '@/components/item/content/gallery/ImageGrid'
import LightGallery from '@/components/item/content/gallery/LightGallery'

export default {
  name: 'GalleryTab',
  components: {
    ImageGrid,
    LightGallery,
  },
  props: {
    data: { type: Object, default: () => ({ item: {} }) },
    lightImages: { type: Array, default: () => [] },
    imagesLoading: { type: Boolean, default: false },
  },
  data() {
    return {
      galleryIndex: null,
    }
  },
  methods: {
    handleTabClick() {
      if (this.lightImages.length === 0) {
        this.$emit('load-images')
      }
    },
  },
}
</script>

<style scoped>
.no-content-message {
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.no-content-message .text-muted {
  opacity: 0.6;
}
</style>
