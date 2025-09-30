<template>
  <div class="row text-center text-lg-left">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="col-lg-3 col-md-4 col-6"
    >
      <a
        href=""
        class="d-block mb-4 h-100"
        @click.prevent="$emit('image-click', index)"
      >
        <OptimizedImage
          :image-src="image"
          :alt="`تصویر ${index + 1} ${itemName}`"
          class="img-fluid img-thumbnail"
          fluid-grow
          :thumb-options="{ w: 1920, h: 1200, q: 100, a: 'c' }"
          type="files"
        />
      </a>
    </div>
  </div>
</template>

<script>
import OptimizedImage from '@/components/item/common/OptimizedImage'

export default {
  name: 'ImageGrid',
  components: {
    OptimizedImage,
  },
  props: {
    images: {
      type: Array,
      default: () => [],
    },
    itemName: {
      type: String,
      default: '',
    },
  },
  emits: ['image-click'],
}
</script>

<style scoped>
.img-thumbnail {
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
}

.img-thumbnail:hover {
  transform: scale(1.05);
}
</style>
