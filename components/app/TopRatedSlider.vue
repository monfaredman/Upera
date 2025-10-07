<template>
  <div class="top-rated-slider">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h5 class="mb-0">پیشنهادی</h5>
      <nuxt-link
        :to="{ name: 'lists-list', params: { list: 'offer' } }"
        class="mb-1"
      >
        {{ $t('new.show_all') }}
        <img src="@/assets/img/more.svg" height="3" alt="" />
      </nuxt-link>
    </div>
    <div class="slider-wrapper">
      <!-- loading placeholder -->
      <div
        v-if="isLoading"
        class="loading-state d-flex align-items-center justify-content-center"
        :style="{ minHeight: (size && size.h ? size.h : 200) + 'px' }"
      >
        <b-spinner small type="grow" class="ml-2" />
        <span class="ml-2 text-white">در حال بارگذاری…</span>
      </div>

      <!-- <swiper
        v-else
        ref="topRatedSwiper"
        :options="swiperOptions"
        @slideChange="onSlideChange"
      >
        <swiper-slide
          v-for="(item, index) in displayedItems"
          :key="item.id || index"
        > -->
      <div v-swiper:[1]="swiperOptions" class="swiper-container newset-slider2">
        <div class="swiper-wrapper py-1">
          <div
            v-for="(item, index) in displayedItems"
            :key="item.id || index"
            class="swiper-slide"
          >
            <MediaCard
              :item="item"
              :variant="cardVariant"
              :size="size"
              :link-builder="buildMediaLink(item)"
              :showBadges="showBadges"
              :showTitle="showTitle"
              :addSeriesClass="addSeriesClass"
            />
            <!-- </swiper-slide>
      </swiper> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/css/swiper.css'
import MediaCard from '@/components/MediaCard'

// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    // Swiper,
    // SwiperSlide,
    MediaCard,
  },
  props: {
    ugcMovies: {
      type: Array,
      default: () => [],
    },
    // HorizontalList-like config
    cardVariant: { type: String, default: 'poster' },
    size: {
      type: Object,
      default: () => {
        return { w: 142, h: 212 }
      },
    },
    showBadges: { type: Boolean, default: true },
    showTitle: { type: Boolean, default: true },
    addSeriesClass: { type: Boolean, default: true },
  },
  data() {
    return {
      itemsToShow: 20,
      activeIndex: 0,
      isLoading: true,
      swiperOptions: {
        spaceBetween: 10,
        slidesPerView: 3.3,
        grabCursor: true,
        setWrapperSize: true,
        threshold: 2,
        countdown: {},
        breakpoints: {
          200: { slidesPerView: 2.5 },
          420: { slidesPerView: 3.5 },
          768: { slidesPerView: 4.5 },
          992: { slidesPerView: 5.5 },
          1024: { slidesPerView: 6.5 },
          1200: { slidesPerView: 7 },
          1420: { slidesPerView: 8 },
          1670: { slidesPerView: 9 },
        },
      },
    }
  },
  computed: {
    items() {
      return this.ugcMovies || []
    },
    displayedItems() {
      const arr = this.items
      const n = Math.min(this.itemsToShow, arr.length || this.itemsToShow)
      return arr.slice(0, n)
    },
  },
  watch: {
    displayedItems: {
      immediate: true,
      handler(newVal) {
        const ready = Array.isArray(newVal) && newVal.length > 0
        this.isLoading = !ready
        if (ready) {
          this.$nextTick(() => {
            const inst =
              this.$refs.topRatedSwiper && this.$refs.topRatedSwiper.$swiper
            if (inst) inst.update()
          })
        }
      },
    },
  },
  mounted() {
    this.$nextTick(() => {
      const inst =
        this.$refs.topRatedSwiper && this.$refs.topRatedSwiper.$swiper
      if (inst) {
        inst.update()
        this.activeIndex = inst.activeIndex || 0
      }
    })
  },
  methods: {
    buildMediaLink(item) {
      if (item && item.type && item.id) {
        return { name: item.type + '-id', params: { id: item.id } }
      }
      // Tries common fields first, then falls back safely
      if (item && item.route) return item.route
      if (item && item.url) return item.url
      if (item && item.slug) return `/content/${item.slug}`
      if (item && item.id) return `/content/${item.id}`
      return '#'
    },
    setItemsToShow(count) {
      this.itemsToShow = count
      this.$nextTick(() => {
        const inst =
          this.$refs.topRatedSwiper && this.$refs.topRatedSwiper.$swiper
        if (inst) {
          inst.update()
        }
      })
    },
    onSlideChange() {
      const inst =
        this.$refs.topRatedSwiper && this.$refs.topRatedSwiper.$swiper
      if (inst) {
        this.activeIndex = inst.activeIndex || 0
      }
    },
  },
}
</script>

<style scoped>
.swiper-slide {
  flex-shrink: 0;
}

h5 {
  font-family: 'dana-700';
}

.top-rated-slider {
  position: relative;
  direction: rtl;
  background-color: black;
  width: 100%;
  max-width: 97%;
  margin: 0 auto;
  padding: 20px;
  margin-top: 4rem;
}

.slider-wrapper {
  position: relative;
  background-color: black;
}

.swiper-slide img {
  border-radius: 8px;
}

.swiper-slide h6 {
  color: white;
  font-size: 1.2rem;
  text-align: center;
}

.loading-state {
  background: black;
  border-radius: 8px;
}

@media (max-width: 576px) {
  .top-rated-slider h5 {
    font-size: 14px;
  }

  .top-rated-slider {
    margin-top: 1rem;
  }

  .swiper-slide h6 {
    font-size: 0.8rem;
  }
}
</style>
