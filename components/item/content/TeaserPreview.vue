<template>
  <div
    class="article-img-wrapper mr-lg-3"
    @click.prevent="$emit('play-teaser')"
  >
    <div class="font-weight-bold mb-2 d-none d-lg-block">نمایش تیزر</div>
    <div class="article-img-holder d-none d-lg-block">
      <OptimizedImage
        class="article-img"
        :image-src="teaserImageSrc"
        :alt="`تیزر ${data.item.name_fa}`"
        :width="413"
        :height="258"
        :thumb-options="{ w: 413, h: 258, q: 100, a: 'c' }"
        type="files"
        fluid-grow
      />
      <a href="#" class="play-movie text-invert">
        <i class="icon-play" />
      </a>
    </div>
    <button
      class="btn btn-block btn-dark btn-second d-lg-none"
      @click.prevent="$emit('play-teaser')"
    >
      نمایش تیزر
    </button>
  </div>
</template>

<script>
import OptimizedImage from '@/components/item/common/OptimizedImage'

export default {
  name: 'TeaserPreview',
  components: {
    OptimizedImage,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    medias: {
      type: Object,
      required: true,
    },
  },
  emits: ['play-teaser'],
  computed: {
    teaserImageSrc() {
      // Logic to choose between back_teaser and backdrop
      if (this.data.item.back_teaser) {
        return this.data.item.back_teaser
      }
      return this.data.item.backdrop
    },
  },
}
</script>
