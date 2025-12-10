<template>
  <div class="gallery-grid">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="gallery-grid-item"
      @click="$emit('image-click', index)"
    >
      <div class="image-wrapper">
        <img
          :src="getThumbnailUrl(image)"
          :alt="`تصویر ${index + 1} ${itemName}`"
          class="gallery-thumbnail"
          loading="lazy"
        />
        <div class="image-overlay">
          <div class="overlay-content">
            <i class="fas fa-search-plus"></i>
            <span class="image-number">{{ index + 1 }}</span>
          </div>
        </div>
      </div>
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
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px 0;
}

.gallery-grid-item {
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: #f8f9fa;
}

.gallery-grid-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.image-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 75%; /* 4:3 aspect ratio */
  overflow: hidden;
}

.gallery-thumbnail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.gallery-grid-item:hover .gallery-thumbnail {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-grid-item:hover .image-overlay {
  opacity: 1;
}

.overlay-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  transform: translateY(10px);
  transition: transform 0.3s ease;
}

.gallery-grid-item:hover .overlay-content {
  transform: translateY(0);
}

.overlay-content i {
  font-size: 32px;
  margin-bottom: 8px;
}

.image-number {
  font-size: 14px;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 12px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 12px;
    padding: 12px 0;
  }

  .gallery-grid-item {
    border-radius: 8px;
  }

  .overlay-content i {
    font-size: 24px;
  }

  .image-number {
    font-size: 12px;
    padding: 3px 10px;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
}
</style>
