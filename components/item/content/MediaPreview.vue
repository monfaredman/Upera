<template>
  <a
    href=""
    class="position-relative d-block"
    @click.prevent="$emit('play-media')"
  >
    <i class="far fa-2x fa-play-circle play-icon" />
    <OptimizedImage
      :image-src="data.item.back_teaser || data.item.backdrop"
      :alt="`${mediaTypeText} ${data.item.name_fa}`"
      class="img-fluid"
      fluid-grow
      :thumb-options="{ w: 1920, h: 1200, q: 100, a: 'c' }"
      :type="mediaType"
      :aspect-ratio="1920 / 1200"
    />
  </a>
</template>

<script>
import OptimizedImage from '@/components/item/common/OptimizedImage'

export default {
  name: 'MediaPreview',
  components: {
    OptimizedImage,
  },
  props: {
    data: { type: Object, default: () => ({ item: {} }) },
    mediaType: { type: String, default: '' },
  },
  emits: ['play-media'],
  computed: {
    mediaTypeText() {
      const types = {
        backstage: 'پشت صحنه',
        musicvideo: 'موزیک ویدئو',
        next: 'پیش نمایش قسمت بعد',
      }
      return types[this.mediaType] || 'مدیا'
    },
    previewImageSrc() {
      const imageUrl = this.data.item.back_teaser || this.data.item.backdrop
      if (!imageUrl) return ''

      return `https://thumb.upera.shop/thumb?w=1920&h=1200&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/${imageUrl}`
    },
  },
}
</script>

<style scoped>
.play-icon {
  color: white;
  position: absolute;
  top: 45%;
  left: 45%;
  z-index: 2;
}
</style>
