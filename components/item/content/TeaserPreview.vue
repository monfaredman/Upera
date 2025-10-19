<template>
  <div v-if="mediaItems.length > 0" class="teaser-preview-wrapper">
    <HorizontalList
      title-en="Teasers & Trailers"
      title-fa="تیزر و تریلر"
      :items="mediaItems"
      :instance-name="`teaser-preview-${data.item.id}`"
      :options="swiperOptions"
      card-variant="backdrop"
      :size="{ w: 382, h: 220 }"
      :link-builder="buildTeaserLink"
      :show-badges="false"
      :show-title="true"
      :add-series-class="false"
      :hoverable="true"
    />
  </div>
</template>

<script>
import HorizontalList from '@/components/HorizontalList'

export default {
  name: 'TeaserPreview',
  components: {
    HorizontalList,
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
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 20,
        loop: false,
        watchOverflow: true,
        observer: true,
        observeParents: true,
        breakpoints: {
          1200: { slidesPerView: 3.5 },
          992: { slidesPerView: 2.5 },
          768: { slidesPerView: 1.5 },
          576: { slidesPerView: 1.5 },
          0: { slidesPerView: 1.5 },
        },
      },
    }
  },
  computed: {
    mediaItems() {
      const items = []

      // Check if medias has teaser/trailer data
      if (this.medias && typeof this.medias === 'object') {
        // Add main teaser if exists
        if (
          this.medias.teaser ||
          this.data.item.back_teaser ||
          this.data.item.backdrop
        ) {
          const thumbnail =
            this.data.item.back_teaser || this.data.item.backdrop
          items.push({
            id: 1,
            type: 'teaser',
            name: 'تیزر اصلی',
            name_fa: 'تیزر اصلی',
            backdrop: thumbnail,
            poster: thumbnail,
            cdnType: thumbnail?.startsWith('http') ? 2 : 1,
            mediaId: 1,
          })
        }

        // Add other media items from medias object
        Object.entries(this.medias).forEach(([key, value]) => {
          if (value && typeof value === 'object' && value.thumbnail) {
            const thumbnail = value.thumbnail
            items.push({
              id: value.id || key,
              type: 'teaser',
              name: value.name || key,
              name_fa: value.name || key,
              backdrop: thumbnail,
              poster: thumbnail,
              cdnType: thumbnail?.startsWith('http') ? 2 : 1,
              mediaId: value.id || key,
            })
          }
        })
      }

      // Fallback: if no items, add at least the main backdrop
      if (
        items.length === 0 &&
        (this.data.item.backdrop || this.data.item.back_teaser)
      ) {
        const thumbnail = this.data.item.back_teaser || this.data.item.backdrop
        items.push({
          id: 1,
          type: 'teaser',
          name: 'تیزر',
          name_fa: 'تیزر',
          backdrop: thumbnail,
          poster: thumbnail,
          cdnType: thumbnail?.startsWith('http') ? 2 : 1,
          mediaId: 1,
        })
      }

      return items
    },
  },
  methods: {
    buildTeaserLink(item) {
      // Return a function that triggers the play event
      return {
        click: () => {
          this.$emit('play-teaser', item.mediaId || item.id || 1)
        },
      }
    },
  },
}
</script>

<style scoped>
.teaser-preview-slider {
  position: relative;
  direction: rtl;
  width: 100%;
  padding: 1rem 0;
}

h5 {
  font-family: 'dana-700';
  color: #fff;
  font-size: 1.25rem;
}

.slider-wrapper {
  position: relative;
}

.swiper-slide {
  flex-shrink: 0;
}

.teaser-card {
  cursor: pointer;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.teaser-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.teaser-image-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
  border-radius: 12px;
  background: #1a1a1a;
}

.teaser-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  transition: background 0.3s ease;
  border-radius: 12px;
}

.teaser-card:hover .play-overlay {
  background: rgba(0, 0, 0, 0.5);
}

.play-icon-circle {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.teaser-card:hover .play-icon-circle {
  transform: scale(1.1);
  background: rgba(255, 255, 255, 1);
}

.play-icon-circle i {
  font-size: 24px;
  color: #000;
  margin-left: 4px; /* Adjust for visual centering */
}

.teaser-title {
  position: absolute;
  bottom: -14px;
  right: -10px;
  padding: 12px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  color: #fff;
  font-size: 0.8rem;
  font-weight: 500;
  text-align: center;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.loading-state {
  color: #fff;
  font-size: 0.95rem;
}

/* Mobile adjustments */
@media (max-width: 767.98px) {
  .play-icon-circle {
    width: 48px;
    height: 48px;
  }

  .play-icon-circle i {
    font-size: 18px;
  }

  .teaser-title {
    font-size: 0.8rem;
    padding: 8px;
  }

  h5 {
    font-size: 1.1rem;
  }
}
</style>
