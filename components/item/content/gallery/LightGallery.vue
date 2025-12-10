<template>
  <div v-if="index !== null" class="light-gallery-modal">
    <div class="gallery-overlay" @click="closeGallery"></div>
    <div class="gallery-container">
      <!-- Close button -->
      <button aria-label="Close" class="gallery-close" @click="closeGallery">
        <i class="fas fa-times"></i>
      </button>

      <!-- Previous button -->
      <button
        v-if="currentIndex > 0"
        aria-label="Previous"
        class="gallery-nav gallery-prev"
        @click="prevImage"
      >
        <i class="fas fa-chevron-left"></i>
      </button>

      <!-- Main image content -->
      <div class="gallery-content">
        <div class="main-image-wrapper">
          <transition name="fade" mode="out-in">
            <img
              :key="currentIndex"
              :src="currentImage"
              :alt="`Image ${currentIndex + 1}`"
              class="gallery-image"
            />
          </transition>
        </div>

        <!-- Counter -->
        <div class="gallery-counter">
          <span class="counter-text">
            {{ currentIndex + 1 }} / {{ images.length }}
          </span>
        </div>
      </div>

      <!-- Next button -->
      <button
        v-if="currentIndex < images.length - 1"
        aria-label="Next"
        class="gallery-nav gallery-next"
        @click="nextImage"
      >
        <i class="fas fa-chevron-right"></i>
      </button>

      <!-- Thumbnail swiper at bottom -->
      <div class="thumbnail-swiper-container">
        <div class="swiper-wrapper-custom" :style="swiperStyle">
          <div
            v-for="(image, idx) in images"
            :key="idx"
            class="thumbnail-item"
            :class="{ active: idx === currentIndex }"
            @click="goToImage(idx)"
          >
            <img
              :src="getThumbnailUrl(image)"
              :alt="`Thumbnail ${idx + 1}`"
              class="thumbnail-image"
            />
            <div v-if="idx === currentIndex" class="active-indicator"></div>
          </div>
        </div>

        <!-- Navigation arrows for thumbnails -->
        <button
          v-if="canScrollLeft"
          aria-label="Scroll left"
          class="thumb-nav thumb-nav-left"
          @click="scrollThumbnails('left')"
        >
          <i class="fas fa-chevron-left"></i>
        </button>
        <button
          v-if="canScrollRight"
          aria-label="Scroll right"
          class="thumb-nav thumb-nav-right"
          @click="scrollThumbnails('right')"
        >
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
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
      thumbnailScrollPosition: 0,
      thumbnailItemWidth: 120, // Width of each thumbnail + gap
      visibleThumbnails: 6, // Number of visible thumbnails
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex] || ''
    },
    swiperStyle() {
      return {
        transform: `translateX(${this.thumbnailScrollPosition}px)`,
      }
    },
    canScrollLeft() {
      return this.thumbnailScrollPosition < 0
    },
    canScrollRight() {
      const maxScroll = -(
        (this.images.length - this.visibleThumbnails) *
        this.thumbnailItemWidth
      )
      return (
        this.thumbnailScrollPosition > maxScroll &&
        this.images.length > this.visibleThumbnails
      )
    },
  },
  watch: {
    index(newVal) {
      this.currentIndex = newVal
      this.centerThumbnail(newVal)
      // Manage body scroll and hash based on modal state
      if (newVal !== null) {
        document.body.style.overflow = 'hidden'
        document.body.classList.add('gallery-preview-mode')
        // Add hash to URL
        if (!window.location.hash.includes('preview')) {
          window.history.pushState(
            null,
            '',
            window.location.pathname + window.location.search + '#preview'
          )
        }
      } else {
        document.body.style.overflow = ''
        document.body.classList.remove('gallery-preview-mode')
        // Remove hash from URL
        if (window.location.hash.includes('preview')) {
          window.history.pushState(
            null,
            '',
            window.location.pathname + window.location.search
          )
        }
      }
    },
    currentIndex(newVal) {
      this.centerThumbnail(newVal)
    },
  },
  mounted() {
    // Only hide scroll if modal is open on mount
    if (this.index !== null) {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('gallery-preview-mode')
      // Add hash to URL
      if (!window.location.hash.includes('preview')) {
        window.history.pushState(
          null,
          '',
          window.location.pathname + window.location.search + '#preview'
        )
      }
    }
    document.addEventListener('keydown', this.handleKeydown)
    this.centerThumbnail(this.currentIndex)
    this.updateVisibleThumbnails()
    window.addEventListener('resize', this.updateVisibleThumbnails)
    // Listen to hash changes (browser back button)
    window.addEventListener('hashchange', this.handleHashChange)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.handleKeydown)
    document.body.style.overflow = ''
    document.body.classList.remove('gallery-preview-mode')
    window.removeEventListener('resize', this.updateVisibleThumbnails)
    window.removeEventListener('hashchange', this.handleHashChange)
    // Remove hash when component is destroyed
    if (window.location.hash.includes('preview')) {
      window.history.pushState(
        null,
        '',
        window.location.pathname + window.location.search
      )
    }
  },
  methods: {
    handleHashChange() {
      // Close gallery if hash is removed (e.g., back button)
      if (!window.location.hash.includes('preview') && this.index !== null) {
        this.closeGallery()
      }
    },
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
    goToImage(index) {
      this.currentIndex = index
    },
    getThumbnailUrl(fullImageUrl) {
      return fullImageUrl.replace('w=1920&h=1200', 'w=200&h=150')
    },
    centerThumbnail(index) {
      // Calculate the position to center the active thumbnail
      const containerWidth = this.visibleThumbnails * this.thumbnailItemWidth
      const targetPosition = index * this.thumbnailItemWidth
      const centerOffset = containerWidth / 2 - this.thumbnailItemWidth / 2

      let newPosition = -targetPosition + centerOffset

      // Limit scrolling
      const maxScroll = -(
        (this.images.length - this.visibleThumbnails) *
        this.thumbnailItemWidth
      )
      newPosition = Math.min(0, Math.max(maxScroll, newPosition))

      this.thumbnailScrollPosition = newPosition
    },
    scrollThumbnails(direction) {
      const scrollAmount = this.thumbnailItemWidth * 3
      if (direction === 'left') {
        this.thumbnailScrollPosition = Math.min(
          0,
          this.thumbnailScrollPosition + scrollAmount
        )
      } else {
        const maxScroll = -(
          (this.images.length - this.visibleThumbnails) *
          this.thumbnailItemWidth
        )
        this.thumbnailScrollPosition = Math.max(
          maxScroll,
          this.thumbnailScrollPosition - scrollAmount
        )
      }
    },
    updateVisibleThumbnails() {
      const width = window.innerWidth
      if (width < 480) {
        this.visibleThumbnails = 3
        this.thumbnailItemWidth = 90
      } else if (width < 768) {
        this.visibleThumbnails = 4
        this.thumbnailItemWidth = 100
      } else if (width < 1024) {
        this.visibleThumbnails = 5
        this.thumbnailItemWidth = 110
      } else {
        this.visibleThumbnails = 6
        this.thumbnailItemWidth = 120
      }
      this.centerThumbnail(this.currentIndex)
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
  z-index: 999999;
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
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.97) 0%,
    rgba(20, 20, 30, 0.97) 100%
  );
  backdrop-filter: blur(10px);
}

.gallery-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  padding: 20px;
}

.gallery-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 90%;
  margin-bottom: 140px; /* Space for thumbnail swiper */
}

.main-image-wrapper {
  position: relative;
  max-width: 100%;
  max-height: calc(100vh - 260px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-image {
  max-width: 100%;
  max-height: calc(100vh - 260px);
  object-fit: contain;
  user-select: none;
  border-radius: 8px;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter {
  opacity: 0;
  transform: scale(0.95);
}

.fade-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

.gallery-close {
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 3;
  backdrop-filter: blur(10px);
}

.gallery-close:hover {
  background: rgba(255, 50, 50, 0.8);
  border-color: rgba(255, 50, 50, 1);
  transform: rotate(90deg);
}

.gallery-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 3;
  backdrop-filter: blur(10px);
}

.gallery-nav:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-50%) scale(1.1);
}

.gallery-prev {
  left: 20px;
}

.gallery-next {
  right: 20px;
}

.gallery-counter {
  margin-top: 20px;
  padding: 10px 24px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  backdrop-filter: blur(10px);
}

.counter-text {
  color: white;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
}

/* Thumbnail swiper styles */
.thumbnail-swiper-container {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 800px;
  height: 100px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  overflow: hidden;
  padding: 10px;
  backdrop-filter: blur(10px);
  z-index: 2;
}

.swiper-wrapper-custom {
  display: flex;
  gap: 10px;
  transition: transform 0.4s ease;
  height: 100%;
}

.thumbnail-item {
  position: relative;
  min-width: 110px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.thumbnail-item:hover {
  border-color: rgba(255, 255, 255, 0.5);
  transform: scale(1.05);
}

.thumbnail-item.active {
  border-color: #fff;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
}

.thumbnail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.active-indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(to right, #4facfe, #00f2fe);
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}

.thumb-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 3;
  backdrop-filter: blur(10px);
}

.thumb-nav:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-50%) scale(1.1);
}

.thumb-nav-left {
  left: 5px;
}

.thumb-nav-right {
  right: 5px;
}

/* Responsive styles */
@media (max-width: 1024px) {
  .gallery-content {
    margin-bottom: 120px;
  }

  .main-image-wrapper,
  .gallery-image {
    max-height: calc(100vh - 240px);
  }

  .thumbnail-swiper-container {
    max-width: 600px;
    height: 90px;
  }

  .thumbnail-item {
    min-width: 100px;
    height: 70px;
  }
}

@media (max-width: 768px) {
  .gallery-close,
  .gallery-nav {
    width: 45px;
    height: 45px;
    font-size: 18px;
  }

  .gallery-close {
    top: 15px;
    right: 15px;
  }

  .gallery-prev {
    left: 15px;
  }

  .gallery-next {
    right: 15px;
  }

  .gallery-content {
    max-width: 95%;
    margin-bottom: 110px;
  }

  .main-image-wrapper,
  .gallery-image {
    max-height: calc(100vh - 220px);
  }

  .counter-text {
    font-size: 14px;
  }

  .thumbnail-swiper-container {
    max-width: 450px;
    height: 80px;
    bottom: 15px;
  }

  .thumbnail-item {
    min-width: 90px;
    height: 60px;
  }

  .thumb-nav {
    width: 30px;
    height: 30px;
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .gallery-close,
  .gallery-nav {
    width: 40px;
    height: 40px;
    font-size: 16px;
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
    margin-bottom: 100px;
  }

  .main-image-wrapper,
  .gallery-image {
    max-height: calc(100vh - 200px);
  }

  .gallery-counter {
    margin-top: 15px;
    padding: 8px 16px;
  }

  .counter-text {
    font-size: 13px;
  }

  .thumbnail-swiper-container {
    width: 95%;
    max-width: 320px;
    height: 70px;
    bottom: 10px;
    padding: 8px;
  }

  .thumbnail-item {
    min-width: 80px;
    height: 54px;
  }

  .thumb-nav {
    width: 28px;
    height: 28px;
    font-size: 11px;
  }
}
</style>

<style>
/* Global style to hide content-nav-header when gallery preview mode is active */
body.gallery-preview-mode .content-nav-header {
  display: none !important;
}
</style>
