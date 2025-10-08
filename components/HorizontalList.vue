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
        class="mb-1"
        :class="{
          'text-white': localizedTitle === 'پیشنهادی',
          '': localizedTitle !== 'پیشنهادی',
        }"
        style="z-index: 4"
      >
        {{ $t('new.show_all') }}
        <i v-if="localizedTitle === 'پیشنهادی'" class="fa fa-ellipsis-h mt-2" />
        <img
          v-else
          src="@/assets/img/more.svg"
          class="text-white"
          height="3"
          alt=""
        />
      </nuxt-link>
    </div>

    <div
      v-swiper:[instanceName]="options"
      class="swiper-container newset-slider2"
    >
      <div class="swiper-wrapper py-1">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="swiper-slide"
          :class="slideClass(item)"
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
    titleFa: { type: String, default: '' },

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
  },
}
</script>
