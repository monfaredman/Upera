<template>
  <div class="top-rated-slider">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h5 class="mb-0">فیلم های برگذیده</h5>
      <b-dropdown
        :text="`نمایش ${itemsToShow}`"
        size="sm"
        variant="text"
        style="color: white; font-size: 14px"
        dir="rtl"
      >
        <b-dropdown-item
          class="text-white text-right"
          @click="setItemsToShow(10)"
        >
          نمایش 10
        </b-dropdown-item>
        <b-dropdown-item
          class="text-white text-right"
          @click="setItemsToShow(20)"
        >
          نمایش 20
        </b-dropdown-item>
        <b-dropdown-item
          class="text-white text-right"
          @click="setItemsToShow(50)"
        >
          نمایش 50
        </b-dropdown-item>
        <b-dropdown-item
          class="text-white text-right"
          @click="setItemsToShow(items.length)"
        >
          نمایش همه
        </b-dropdown-item>
      </b-dropdown>
    </div>
    <div class="slider-wrapper">
      <swiper
        ref="topRatedSwiper"
        :options="swiperOptions"
        @slideChange="onSlideChange"
      >
        <swiper-slide
          v-for="(item, index) in displayedItems"
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
    </div>
  </div>
</template>

<script>
import 'swiper/css/swiper.css'
import MediaCard from '@/components/MediaCard'

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

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
      itemsToShow: 20,
      activeIndex: 0,
      swiperOptions: {
        slidesPerView: 6.5,
        slidesPerGroup: 1,
        spaceBetween: 15,
        loop: false,
        watchOverflow: true,
        observer: true,
        observeParents: true,
        breakpoints: {
          1400: { slidesPerView: 6.5 },
          1200: { slidesPerView: 5.5 },
          992: { slidesPerView: 4.5 },
          768: { slidesPerView: 3.5 },
          576: { slidesPerView: 2.5 },
          0: { slidesPerView: 2.5 },
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
