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
        <img
          :src="getThumbnailUrl(image)"
          :alt="`تصویر ${index + 1} ${itemName}`"
          class="img-fluid img-thumbnail"
          loading="lazy"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageGrid',
  components: {},
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
  methods: {
    getThumbnailUrl(fullImageUrl) {
      // Convert the full-size URL to a smaller thumbnail for the grid
      // Replace the large dimensions with smaller ones for grid display
      return fullImageUrl.replace('w=1920&h=1200', 'w=400&h=300')
    },
  },
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
