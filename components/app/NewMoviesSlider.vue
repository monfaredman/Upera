<template>
  <div class="new-movies-slider">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h5 class="mb-0">{{ header }}</h5>
    </div>
    <div class="slider-wrapper">
      <swiper
        ref="newMoviesSwiper"
        :options="swiperOptions"
        @slideChange="onSlideChange"
      >
        <swiper-slide
          v-for="(item, index) in newMovies"
          :key="item.id || index"
        >
          <MediaCard
            :item="item"
            :variant="cardVariant"
            :size="size"
            :linkBuilder="linkBuilder"
            :showBadges="showBadges"
            :showTitle="showTitle"
            :addSeriesClass="addSeriesClass"
          />
        </swiper-slide>
      </swiper>
      <div class="new-movies-nav">
        <!-- <b-icon
          v-show="activeIndex > 0"
          class="nav-btn prev rounded-lg"
          aria-label="Previous"
          @click="slidePrev"
          icon="chevron-right"
          style="
            background: white;
            color: black;
            border-radius: 1rem !important;
            font-size: 1rem !important;
          "
        ></b-icon> -->
        <!-- <b-icon
          v-show="activeIndex < newMovies.length - swiperOptions.slidesPerView"
          class="nav-btn next rounded-lg"
          aria-label="Next"
          @click="slideNext"
          icon="chevron-left"
          style="
            background: white;
            color: black;
            border-radius: 1rem !important;
            font-size: 1rem !important;
          "
        ></b-icon> -->
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import MediaCard from '@/components/MediaCard'

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
    size: { type: Object, default: () => ({ w: 142, h: 212 }) },
    linkBuilder: { type: Function, required: true },
    showBadges: { type: Boolean, default: true },
    showTitle: { type: Boolean, default: true },
    addSeriesClass: { type: Boolean, default: true },
  },
  data() {
    return {
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
          992: { slidesPerView: 3.5 },
          768: { slidesPerView: 3.5 },
          576: { slidesPerView: 1.5 },
          0: { slidesPerView: 1.5 },
        },
      },
      activeIndex: 0,
    }
  },
  computed: {
    newMovies() {
      console.log(1, this.ugcMovies)
      return this.ugcMovies[0]?.data || []
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
}

.new-movies-slider {
  position: relative;
  direction: rtl;
  background-color: black;
  width: 100%;
  max-width: 95%;
  margin: 0 auto;
}

.slider-wrapper {
  position: relative;
  background-color: black;
}

.new-movies-nav {
  position: absolute;
  inset: 0;
  direction: rtl;
  z-index: 20;
}

.new-movies-nav .nav-btn {
  pointer-events: auto;
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

@media (max-width: 575.98px) {
  .new-movies-nav {
    display: none;
  }

  .new-movies-slider h5 {
    font-size: 0.95rem;
  }
}
</style>
