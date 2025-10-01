<template>
  <section id="slideshow">
    <div class="swiper-container showcase showcase-theme-m-tn">
      <div class="swiper-slide">
        <div class="row no-gutters">
          <div class="col-md-6 col-lg-5" />
          <div class="col-md-6 col-lg-7 showcase-pic">
            <!-- Desktop Backdrop -->
            <OptimizedImage
              v-if="backdropSrc"
              :image-src="backdropSrc"
              :alt="data.item.name"
              :width="1120"
              :height="'full'"
              :thumb-options="{ w: 1120, h: 576, q: 95, a: 't', zc: 1 }"
              type="backdrops"
              class="showcase-img d-none d-lg-block"
            />

            <!-- Mobile Backdrop -->
            <OptimizedImage
              v-if="backdropSrc"
              :image-src="backdropSrc"
              :alt="data.item.name"
              :width="375"
              :height="300"
              :thumb-options="{ w: 375, h: 300, q: 100, a: 'c', zc: 1 }"
              type="backdrops"
              fluid-grow
              class="showcase-img d-lg-none"
            />
          </div>
        </div>

        <!-- Showcase Content -->
        <ShowcaseContent
          :data="data"
          :type="type"
          :episode="episode"
          :has-download-button="hasDownloadButton"
          :has-main-button="hasMainButton"
          :main-button-label="mainButtonLabel"
          :main-button-action="mainButtonAction"
          :download-button-label="downloadButtonLabel"
          :clapinterval="clapinterval"
          :user-claps="userClaps"
          :is-watchlist="isWatchlist"
          :total-claps="totalClaps"
          :actions="actions"
          @play="$emit('play')"
          @buy="$emit('buy')"
          @subscription="$emit('subscription')"
          @download="$emit('download')"
          @toggle-watchlist="$emit('toggle-watchlist', $event)"
          @clap-start="$emit('clap-start')"
          @clap-stop="$emit('clap-stop')"
          @share="$emit('share')"
        />
        <!-- Countdown Timer -->
        <PresaleCountdown
          v-if="data.item.presale && data.item.presale <= 6288798"
          :presale-timestamp="data.item.presale"
        />

        <!-- Back Navigation -->
        <BackNavigation variant="mobile" />
        <BackNavigation variant="desktop" />
      </div>
    </div>
  </section>
</template>

<script>
import OptimizedImage from '@/components/item/common/OptimizedImage'
import ShowcaseContent from '@/components/item/showcase/ShowcaseContent'
import PresaleCountdown from '@/components/item/showcase/PresaleCountdown'
import BackNavigation from '@/components/item/common/BackNavigation'

export default {
  name: 'MediaShowcase',
  components: {
    OptimizedImage,
    ShowcaseContent,
    PresaleCountdown,
    BackNavigation,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    episode: {
      type: Object,
      default: () => ({}),
    },
    hasDownloadButton: Boolean,
    hasMainButton: Boolean,
    mainButtonLabel: { type: String, default: '' },
    mainButtonAction: { type: String, default: '' },
    downloadButtonLabel: { type: String, default: '' },
    clapinterval: { type: [Boolean, Number], default: null },
    userClaps: { type: [Number, String], default: 0 },
    isWatchlist: {
      type: [Number, Boolean],
      default: 0,
    },
    totalClaps: { type: [Number, String], default: 0 },
    actions: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: [
    'play',
    'buy',
    'subscription',
    'download',
    'toggle-watchlist',
    'clap-start',
    'clap-stop',
    'share',
  ],
  computed: {
    backdropSrc() {
      const en = this.data && this.data.item ? this.data.item.backdrop : null
      const fa = this.data && this.data.item ? this.data.item.backdrop_fa : null
      const src = this.ChooseLang(en, fa)
      return src || ''
    },
  },
  methods: {
    ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa
      return en
    },
  },
}
</script>
