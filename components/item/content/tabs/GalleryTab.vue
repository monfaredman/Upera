<template>
  <b-tab dir="ltr" @click="handleTabClick">
    <template #title>
      <b-spinner v-if="imagesLoading" type="border" class="mb-1 ml-1" small />
      گالری
    </template>

    <div v-if="lightImages.length >= 1">
      <client-only>
        <LightGallery
          :index="galleryIndex"
          :images="lightImages"
          @close="galleryIndex = null"
        />
      </client-only>

      <ImageGrid
        :images="lightImages"
        :item-name="data.item.name_fa"
        @image-click="galleryIndex = $event"
      />
    </div>
  </b-tab>
</template>

<script>
import ImageGrid from '@/components/item/content/gallery/ImageGrid'

export default {
  name: 'GalleryTab',
  components: {
    ImageGrid,
  },
  props: {
    data: { type: Object, default: () => ({ item: {} }) },
  },
  data() {
    return {
      galleryIndex: null,
      imagesLoading: false,
      lightImages: [],
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
