<template>
  <section class="media-swiper-section">
    <div v-if="mediaItems.length > 0" class="media-swiper-wrapper">
      <div
        v-swiper:mediaSwiper="swiperOptions"
        class="swiper-container media-swiper"
      >
        <p class="content-header">محتوا</p>
        <div class="swiper-wrapper">
          <div
            v-for="(item, index) in mediaItems"
            :key="`media-${item.type}-${index}`"
            class="swiper-slide"
          >
            <div class="media-card" @click="handleMediaClick(item)">
              <div class="media-card-image">
                <img
                  :src="getImageUrl(item)"
                  :alt="item.title"
                  class="media-thumbnail"
                />
                <div class="media-type-chip">
                  {{ item.typeLabel }}
                </div>
                <div v-if="item.playable" class="play-overlay">
                  <i class="far fa-play-circle"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MediaSwiper',
  props: {
    data: { type: Object, default: () => ({ item: {} }) },
    medias: { type: Object, default: () => ({}) },
    lightImages: { type: Array, default: () => [] },
    imagesLoading: { type: Boolean, default: false },
  },
  emits: [
    'play-teaser',
    'play-backstage',
    'play-musicvideo',
    'play-next',
    'open-gallery',
  ],
  data() {
    return {
      swiperOptions: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 16,
        loop: false,
        watchOverflow: true,
        observer: true,
        observeParents: true,
        breakpoints: {
          1400: { slidesPerView: 7, spaceBetween: 20 },
          1200: { slidesPerView: 6, spaceBetween: 20 },
          992: { slidesPerView: 5, spaceBetween: 16 },
          768: { slidesPerView: 4, spaceBetween: 16 },
          576: { slidesPerView: 3, spaceBetween: 12 },
          0: { slidesPerView: 2, spaceBetween: 12 },
        },
      },
    }
  },
  computed: {
    mediaItems() {
      const items = []

      // Add backstage items
      if (this.medias.backstage === 1) {
        const thumbnail = this.data.item.back_teaser || this.data.item.backdrop
        if (thumbnail) {
          items.push({
            type: 'backstage',
            typeLabel: 'پشت صحنه',
            title: 'پشت صحنه',
            thumbnail,
            playable: true,
            action: 'play-backstage',
          })
        }
      }

      // Add gallery items (show first 5 images)
      if (this.medias.image === 1 && this.lightImages.length > 0) {
        this.lightImages.slice(0, 5).forEach((image, idx) => {
          items.push({
            type: 'gallery',
            typeLabel: 'گالری',
            title: `تصویر ${idx + 1}`,
            thumbnail: image,
            playable: false,
            action: 'open-gallery',
            index: idx,
          })
        })
      } else if (this.medias.image === 1) {
        // Show placeholder for gallery
        const thumbnail = this.data.item.backdrop || this.data.item.poster
        if (thumbnail) {
          items.push({
            type: 'gallery',
            typeLabel: 'گالری',
            title: 'گالری تصاویر',
            thumbnail,
            playable: false,
            action: 'open-gallery',
            index: 0,
          })
        }
      }

      // Add music video
      if (this.medias.musicvideo === 1) {
        const thumbnail = this.data.item.back_teaser || this.data.item.backdrop
        if (thumbnail) {
          items.push({
            type: 'musicvideo',
            typeLabel: 'موزیک ویدئو',
            title: 'موزیک ویدئو',
            thumbnail,
            playable: true,
            action: 'play-musicvideo',
          })
        }
      }

      // Add next episode preview
      if (this.medias.next === 1) {
        const thumbnail = this.data.item.back_teaser || this.data.item.backdrop
        if (thumbnail) {
          items.push({
            type: 'next',
            typeLabel: 'قسمت بعد',
            title: 'آنچه در قسمت بعد خواهید دید',
            thumbnail,
            playable: true,
            action: 'play-next',
          })
        }
      }

      return items
    },
  },
  methods: {
    getImageUrl(item) {
      let imageUrl = item.thumbnail

      // For gallery items that already have full URLs
      if (item.type === 'gallery' && imageUrl.includes('thumb.upera.shop')) {
        return imageUrl.replace('w=1920&h=1200', 'w=273&h=273&zc=1')
      }

      if (
        item.type === 'backstage' ||
        item.type === 'musicvideo' ||
        item.type === 'next'
      ) {
        return `   https://thumb.upera.shop/thumb?w=1920&h=1200&q=100&a=c&src=https://cdn.upera.shop/s3/${imageUrl}`
      }

      // For other items, construct the CDN URL
      if (!imageUrl) return ''

      const cdnBase = imageUrl.startsWith('http')
        ? imageUrl
        : `https://cdn.upera.shop/s3/backdrops/${imageUrl}`
      return `https://thumb.upera.shop/thumb?w=273&h=273&q=90&a=c&zc=1&src=${cdnBase}`
    },
    handleMediaClick(item) {
      if (item.action === 'play-teaser') {
        this.$emit('play-teaser', 1)
      } else if (item.action === 'play-backstage') {
        this.$emit('play-backstage', 2)
      } else if (item.action === 'play-musicvideo') {
        this.$emit('play-musicvideo', 4)
      } else if (item.action === 'play-next') {
        this.$emit('play-next', 3)
      } else if (item.action === 'open-gallery') {
        this.$emit('open-gallery', item.index || 0)
      }
    },
  },
}
</script>

<style scoped>
.media-swiper-section {
  width: 100%;
  padding: 0;
  margin: 0 41px;
}

.media-swiper-wrapper {
  position: relative;
}

.media-swiper {
  width: 100%;
  overflow: hidden;
}

.swiper-slide {
  height: auto;
}

.media-card {
  background: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.theme-dark .media-card {
  background: #2a2a2a;
}

.media-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.theme-dark .media-card:hover {
  box-shadow: 0 8px 20px rgba(27, 107, 229, 0.3);
}

.media-card-image {
  position: relative;
  width: 100%;
  padding-bottom: 100%; /* 1:1 aspect ratio for square cards */
  overflow: hidden;
  background: #e0e0e0;
}

.theme-dark .media-card-image {
  background: #1a1a1a;
}

.media-thumbnail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.media-card:hover .media-thumbnail {
  transform: scale(1.05);
}

.media-type-chip {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: rgba(27, 108, 229, 0.5);
  border: 1px solid rgba(27, 108, 229);
  color: white;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  z-index: 2;
  backdrop-filter: blur(4px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.play-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 32px;
  opacity: 0.8;
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 1;
}

.media-card:hover .play-overlay {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1.1);
}

/* Responsive adjustments */
@media (max-width: 991.98px) {
  .media-swiper-section {
    margin: 0 20px;
  }
}

@media (max-width: 767.98px) {
  .media-swiper-section {
    margin: 0 10px;
  }

  .media-type-chip {
    font-size: 9px;
    padding: 3px 8px;
    bottom: 6px;
    left: 6px;
  }

  .play-overlay {
    font-size: 24px;
  }

  .media-type-chip {
    text-align: center;
    width: fit-content;
  }
}

.content-header {
  font-size: 20px;
  font-weight: 600;
  opacity: 1;
  padding-bottom: 0.5rem;
}
</style>
