<template>
  <div class="new-movies-slider">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h5 class="mb-0">{{ header }}</h5>
      <nuxt-link
        :to="{ name: 'lists-list', params: { list: 'new_titles' } }"
        class="mb-1 d-inline-flex align-items-center show-all-link"
      >
        <span class="show-all-text ml-1">{{ $t('new.show_all') }}</span>
        <i class="fa fa-ellipsis-h show-all-icon" aria-hidden="true"></i>
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

      <swiper
        v-else
        ref="newMoviesSwiper"
        :options="swiperOptions"
        @slideChange="onSlideChange"
      >
        <swiper-slide
          v-for="(item, index) in displayedItems"
          :key="item.id || index"
        >
          <MediaCard
            :item="item"
            :variant="'backdrop'"
            :size="size"
            :link-builder="buildMediaLink(item)"
            :showBadges="showBadges"
            :showTitle="showTitle"
            :addSeriesClass="addSeriesClass"
            :hoverable="true"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import MediaCard from '@/components/MediaCard'
import 'swiper/css/swiper.css' // keep consistent with TopRatedSlider

export default {
  components: {
    Swiper,
    SwiperSlide,
    MediaCard,
  },
  props: {
    ugcMovies: {
      type: Array,
      default: () => [],
    },
    // HorizontalList-like config
    cardVariant: { type: String, default: 'poster' },
    size: { type: Object, default: () => ({ w: 382, h: 220 }) },
    // linkBuilder: { type: Function, required: true },
    showBadges: { type: Boolean, default: true },
    showTitle: { type: Boolean, default: true },
    addSeriesClass: { type: Boolean, default: true },
  },
  data() {
    return {
      itemsToShow: 20,
      header: 'تازه های آپرا',
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
      activeIndex: 0,
      isLoading: true,
    }
  },
  computed: {
    newMovies() {
      const list = this.ugcMovies
      if (Array.isArray(list) && list.length && Array.isArray(list[0]?.data)) {
        return list[0]?.data
      }
      return Array.isArray(list) ? list : []
    },
    displayedItems() {
      const arr = this.newMovies
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
              this.$refs.newMoviesSwiper && this.$refs.newMoviesSwiper.$swiper
            if (inst) inst.update()
          })
        }
      },
    },
  },
  mounted() {
    this.$nextTick(() => {
      const inst =
        this.$refs.newMoviesSwiper && this.$refs.newMoviesSwiper.$swiper
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
    onSlideChange() {
      const inst =
        this.$refs.newMoviesSwiper && this.$refs.newMoviesSwiper.$swiper
      if (inst) {
        this.activeIndex = inst.activeIndex || 0
      }
    },
    slideNext() {
      const inst =
        this.$refs.newMoviesSwiper && this.$refs.newMoviesSwiper.$swiper
      if (inst) {
        inst.slideNext()
      }
    },
    slidePrev() {
      const inst =
        this.$refs.newMoviesSwiper && this.$refs.newMoviesSwiper.$swiper
      if (inst) {
        inst.slidePrev()
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
  color: var(--text-color);
}

a {
  color: var(--text-color);
}

.new-movies-slider {
  position: relative;
  direction: rtl;
  background-color: var(--background-color);
  width: 100%;
  max-width: 95%;
  margin: 0 auto;
}

.slider-wrapper {
  position: relative;
  background-color: var(--background-color);
}

.new-movies-nav {
  position: absolute;
  inset: 0;
  direction: rtl;
  z-index: 20;
  pointer-events: none; /* allow dragging/interaction with swiper underneath */
}

.new-movies-nav .nav-btn {
  pointer-events: auto; /* keep buttons clickable when enabled */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  border: none;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  font-size: 1.35rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.25s;
}

.new-movies-nav .prev {
  right: 10px;
}

.new-movies-nav .next {
  left: 10px;
}

.new-movies-nav .nav-btn:hover {
  background: rgba(0, 0, 0, 0.75);
}

.new-movies-nav .nav-btn:active {
  transform: translateY(-50%) scale(0.92);
}

.loading-state {
  background: var(--background-color);
  border-radius: 8px;
}

@media (max-width: 575.98px) {
  .new-movies-nav {
    display: none;
  }

  .new-movies-slider h5 {
    font-size: 0.95rem;
  }
}
</style>
