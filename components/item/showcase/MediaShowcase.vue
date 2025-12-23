<template>
  <section id="slideshow">
    <div class="swiper-container showcase showcase-theme-m-tn">
      <div class="swiper-slide">
        <div class="row no-gutters">
          <div />
          <!-- Add showcase-pic-main to align gradient/overlay with homepage slider -->
          <div class="col-12 showcase-pic showcase-pic-main">
            <!-- Desktop Backdrop -->
            <OptimizedImage
              v-if="backdropSrcDesktop"
              :image-src="backdropSrcDesktop"
              :alt="data.item.name"
              :width="1120"
              :height="
                data.item.backdrop ? 'full' : renderHeightForSVGBackdrop()
              "
              :thumb-options="{ w: 1920, h: 960, q: 95, a: 't', zc: 1 }"
              type="backdrops"
              class="showcase-img d-none d-lg-block"
              :aspect-ratio="1120 / 960"
            />
            <!-- Mobile Backdrop -->
            <OptimizedImage
              v-if="backdropSrcMobile"
              :image-src="backdropSrcMobile"
              :alt="data.item.name"
              :width="375"
              :height="data.item.backdrop ? 300 : renderHeightForSVGBackdrop()"
              :thumb-options="{ w: 375, h: 300, q: 100, a: 'c', zc: 1 }"
              type="backdrops"
              fluid-grow
              class="showcase-img d-lg-none"
              :aspect-ratio="375 / 300"
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
          :is-loading-stats="isLoadingStats"
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
        <!-- <BackNavigation variant="mobile" />
        <BackNavigation variant="desktop" /> -->
      </div>
    </div>
  </section>
</template>

<script>
import OptimizedImage from '@/components/item/common/OptimizedImage'
import ShowcaseContent from '@/components/item/showcase/ShowcaseContent'
import PresaleCountdown from '@/components/item/showcase/PresaleCountdown'
// import BackNavigation from '@/components/item/common/BackNavigation'

export default {
  name: 'MediaShowcase',
  components: {
    OptimizedImage,
    ShowcaseContent,
    PresaleCountdown,
    // BackNavigation,
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
    isLoadingStats: {
      type: Boolean,
      default: false,
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
    rawBackdropSrc() {
      const en = this.data && this.data.item ? this.data.item.backdrop : null
      const fa = this.data && this.data.item ? this.data.item.backdrop_fa : null
      const src = this.ChooseLang(en, fa)
      const normalized = typeof src === 'string' ? src.trim() : src
      return normalized || ''
    },
    backdropSrcDesktop() {
      return this.rawBackdropSrc || this.blackSvgDataUrl(1920, 960)
    },
    backdropSrcMobile() {
      return this.rawBackdropSrc || this.blackSvgDataUrl(375, 300)
    },
  },
  methods: {
    ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa
      return en
    },
    blackSvgDataUrl(w, h) {
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none"><rect width="100%" height="100%" fill="black"/></svg>`
      return `data:image/svg+xml;charset=utf-8,` + encodeURIComponent(svg)
    },
    renderHeightForSVGBackdrop() {
      if (window.innerWidth >= 1500) {
        return 960
      } else if (window.innerWidth >= 1300) {
        return 714
      } else if (window.innerWidth >= 1150) {
        return 645
      } else if (window.innerWidth >= 992) {
        return 574
      } else if (window.innerWidth >= 850) {
        return 250
      }
    },
  },
}
</script>
