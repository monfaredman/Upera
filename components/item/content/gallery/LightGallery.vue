<template>
  <div v-if="index !== null" class="light-gallery-modal">
    <div class="gallery-overlay" @click="closeGallery"></div>
    <div class="gallery-container">
      <button class="gallery-close" @click="closeGallery">
        <i class="fas fa-times"></i>
      </button>

      <button
        v-if="currentIndex > 0"
        class="gallery-nav gallery-prev"
        @click="prevImage"
      >
        <i class="fas fa-chevron-left"></i>
      </button>
      <div class="gallery-content">
        <img
          :src="currentImage"
          :alt="`Image ${currentIndex + 1}`"
          class="gallery-image"
        />
        <div class="gallery-counter">
          {{ currentIndex + 1 }} / {{ images.length }}
        </div>
      </div>

      <button
        v-if="currentIndex < images.length - 1"
        class="gallery-nav gallery-next"
        @click="nextImage"
      >
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LightGallery',
  props: {
    index: {
      type: Number,
      default: null,
    },
    images: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  emits: ['close'],
  data() {
    return {
      currentIndex: this.index,
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex] || ''
    },
  },
  watch: {
    index(newVal) {
      this.currentIndex = newVal
    },
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeydown)
    document.body.style.overflow = 'hidden'
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.handleKeydown)
    document.body.style.overflow = ''
  },
  methods: {
    closeGallery() {
      this.$emit('close')
    },
    nextImage() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++
      }
    },
    prevImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--
      }
    },
    handleKeydown(event) {
      switch (event.key) {
        case 'Escape':
          this.closeGallery()
          break
        case 'ArrowRight':
          this.nextImage()
          break
        case 'ArrowLeft':
          this.prevImage()
          break
      }
    },
  },
}
</script>

<style scoped>
.light-gallery-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.95);
}

.gallery-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.gallery-content {
  max-width: 90%;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gallery-image {
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  user-select: none;
}

.gallery-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
  z-index: 2;
}

.gallery-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.gallery-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
  z-index: 2;
}

.gallery-nav:hover {
  background: rgba(255, 255, 255, 0.2);
}

.gallery-prev {
  left: 20px;
}

.gallery-next {
  right: 20px;
}

.gallery-counter {
  color: white;
  font-size: 16px;
  margin-top: 20px;
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
}

@media (max-width: 768px) {
  .gallery-close,
  .gallery-nav {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }

  .gallery-close {
    top: 10px;
    right: 10px;
  }

  .gallery-prev {
    left: 10px;
  }

  .gallery-next {
    right: 10px;
  }

  .gallery-content {
    max-width: 95%;
  }

  .gallery-counter {
    font-size: 14px;
    margin-top: 10px;
    padding: 8px 16px;
  }
}
</style>
