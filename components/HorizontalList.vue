<template>
  <section class="horizontal-list-container reach-begin">
    <div
      class="d-flex justify-content-between align-items-center mb-2 container-fluid"
    >
      <h4 class="font-weight-bold" style="z-index: 4">
        {{ localizedTitle }}
      </h4>
      <nuxt-link
        v-if="showAllRoute"
        :to="showAllRoute"
        class="mb-1 d-flex justify-content-center align-items-center"
        :class="{
          'text-white': localizedTitle === 'پیشنهادی',
          '': localizedTitle !== 'پیشنهادی',
        }"
        style="z-index: 4"
      >
        <span class="watch-more-text ml-1">
          {{ $t('new.show_all') }}
        </span>
        <i v-if="localizedTitle === 'پیشنهادی'" class="fa fa-ellipsis-h" />
        <img v-else src="@/assets/img/more.svg" class="text-white" height="3" />
      </nuxt-link>
    </div>

    <div
      v-swiper:[instanceName]="options"
      class="swiper-container newset-slider2"
      :class="{ 'offer-slider': isOffer }"
    >
      <div class="swiper-wrapper py-1">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="swiper-slide"
          :class="isOffer ? offerSlideClass(index) : ''"
        >
          <MediaCard
            :item="item"
            :variant="cardVariant"
            :size="size"
            :linkBuilder="linkBuilder"
            :showBadges="showBadges"
            :showTitle="showTitle"
            :addSeriesClass="addSeriesClass"
            :hoverable="hoverable"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MediaCard from '@/components/MediaCard'

export default {
  name: 'HorizontalList',
  components: { MediaCard },
  props: {
    // Titles
    titleEn: { type: String, default: '' },
    hoverable: { type: Boolean, default: false },
    titleFa: { type: String, default: '' },
    isOffer: { type: Boolean, default: false },

    // "Show all" link object or null
    showAllRoute: { type: Object, default: null },

    // Items to render
    items: { type: Array, default: () => [] },

    // v-swiper instance name (must be unique per list)
    instanceName: { type: [String, Number], default: 'listSwip' },

    // Swiper options
    options: { type: Object, required: true },

    // Card configuration
    cardVariant: { type: String, default: 'poster' }, // 'poster' | 'backdrop'
    size: { type: Object, default: () => ({ w: 142, h: 212 }) },

    // Route builder: (item) => { name, params }
    linkBuilder: { type: [Function, String, Object], required: true },

    // UI toggles
    showBadges: { type: Boolean, default: true },
    showTitle: { type: Boolean, default: true },
    addSeriesClass: { type: Boolean, default: true },
  },
  computed: {
    localizedTitle() {
      const isFa = this.$i18n && this.$i18n.locale === 'fa'
      const en = this.titleEn || ''
      const fa = this.titleFa || ''
      return isFa ? fa || en : this.capitalize(en || fa)
    },
  },
  methods: {
    capitalize(text) {
      if (!text) return ''
      return text.charAt(0).toUpperCase() + text.slice(1)
    },
    slideClass(item) {
      // preserve previous class behavior for movie cards
      return {
        movielabel: this.cardVariant === 'poster' && item.type === 'movie',
      }
    },
    offerSlideClass(index) {
      return index === 0 ? 'offer-slide-large' : 'offer-slide-small'
    },
  },
}
</script>
<style>
.watch-more-text {
  font-size: 12px !important;
  font-weight: 600 !important;
  color: #d4d4d4;
}

/* Base (xs <640): single row, no spanning */
.offer-slider .swiper-wrapper {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 1fr;
  grid-auto-columns: max-content;
  align-items: stretch;
  gap: 6px;
}

.offer-slider .offer-slide-large {
  grid-row: auto;
  width: 260px !important;
  height: 150px !important;
  margin-left: 0 !important;
}

.offer-slider .offer-slide-small {
  width: 260px !important;
  height: 150px !important;
}

.offer-slider .offer-slide-large img,
.offer-slider .offer-slide-small img {
  width: 100%;
  height: 100% !important;
  object-fit: cover;
  display: block;
}

@media (max-width: 640px) {
  h4 {
    font-size: 14px !important;
  }
}

/* sm ≥640 */
@media (min-width: 640px) {
  .offer-slider .swiper-wrapper {
    gap: 8px;
  }
  .offer-slider .offer-slide-large {
    width: 320px !important;
    height: 200px !important;
  }
  .offer-slider .offer-slide-small {
    width: 260px !important;
    height: 200px !important;
  }

  .offer-slider .offer-slide-large img,
  .offer-slider .offer-slide-small img {
    width: 100%;
    height: 100% !important;
    object-fit: cover;
    display: block;
    border-radius: 8px !important;
  }
}

/* md ≥768: switch to 2 rows */
@media (min-width: 768px) {
  .offer-slider .swiper-wrapper {
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
  }
  .offer-slider .offer-slide-large {
    grid-row: span 2;
    width: 420px !important;
    height: 220px !important;
    margin-left: 0 !important;
  }
  .offer-slider .offer-slide-large img {
    height: 220px !important;
    object-fit: cover;
    border-radius: 8px !important;
  }
  .offer-slider .offer-slide-small {
    height: 110px !important;
    object-fit: cover;
    margin-left: 0 !important;
  }
  .offer-slider .offer-slide-small img {
    height: 110px !important;
    object-fit: cover;
    border-radius: 8px !important;
  }
}

/* lg ≥1024 */
@media (min-width: 1024px) {
  .offer-slider .offer-slide-large {
    grid-row: span 2;
    width: 420px !important;
    height: 220px !important;
    margin-left: 0 !important;
  }
  .offer-slider .offer-slide-large img {
    height: 220px !important;
    object-fit: cover;
    border-radius: 8px !important;
  }
  .offer-slider .offer-slide-small {
    height: 110px !important;
    object-fit: cover;
    margin-left: 0 !important;
  }
  .offer-slider .offer-slide-small img {
    height: 110px !important;
    object-fit: cover;
    border-radius: 8px !important;
  }
}

/* xl ≥1280: keep your current sizes */
@media (min-width: 1280px) {
  .offer-slider .swiper-wrapper {
    grid-template-rows: repeat(2, 1fr);
    grid-auto-columns: min-content;
    align-items: stretch;
    gap: 10px;
  }
  .offer-slider .offer-slide-large {
    grid-row: span 2;
    width: 620px !important;
    height: 350px !important;
    margin-left: 0 !important;
  }
  .offer-slider .offer-slide-large img {
    height: 350px !important;
    object-fit: cover;
    border-radius: 8px !important;
  }
  .offer-slider .offer-slide-small {
    height: 170px !important;
    object-fit: cover;
    margin-left: 0 !important;
  }
  .offer-slider .offer-slide-small img {
    height: 170px !important;
    object-fit: cover;
    border-radius: 8px !important;
  }
}
</style>
