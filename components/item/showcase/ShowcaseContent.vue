<template>
  <div
    id="showcase-thumbnail-wrapper-outter"
    class="showcase-thumbnail-wrapper-outter d-flex align-items-center justify-content-between"
  >
    <div class="showcase-thumbnail-wrapper w-full container-fluid">
      <div
        class="d-flex h-full align-items-end d-flex align-items-center justify-content-start"
      >
        <!-- Description and Actions -->
        <div class="showcase-desc-wrapper h-full">
          <!-- Optional Logo like homepage slider -->
          <div
            v-if="data && data.item && data.item.logo"
            class="showcase-logo mb-2 mb-md-4"
          >
            <b-img
              :src="logoSrc"
              :alt="data.item.name"
              v-bind="{
                fluidGrow: true,
                blank: true,
                blankColor: '#bbb',
                width: 207,
                height: 307,
                show: true,
              }"
            />
          </div>
          <!-- Title and Metadata -->
          <ShowcaseDescription :data="data" :type="type" :episode="episode" />

          <!-- Action Buttons -->
          <ShowcaseActions
            :id="data.item.id"
            :has-main-button="hasMainButton"
            :has-download-button="hasDownloadButton"
            :main-button-label="mainButtonLabel"
            :main-button-action="mainButtonAction"
            :download-button-label="downloadButtonLabel"
            :clapinterval="clapinterval"
            :user-claps="userClaps"
            :is-watchlist="isWatchlist"
            :episode="episode"
            :actions="actions"
            :type="type"
            @play="$emit('play')"
            @buy="$emit('buy')"
            @subscription="$emit('subscription')"
            @download="$emit('download')"
            @toggle-watchlist="$emit('toggle-watchlist', $event)"
            @clap-start="$emit('clap-start')"
            @clap-stop="$emit('clap-stop')"
            @share="$emit('share')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShowcaseDescription from '@/components/item/showcase/ShowcaseDescription'
import ShowcaseActions from '@/components/item/showcase/ShowcaseActions'

export default {
  name: 'ShowcaseContent',
  components: {
    ShowcaseDescription,
    ShowcaseActions,
  },
  props: {
    data: { type: Object, default: () => ({}) },
    type: { type: String, default: '' },
    episode: { type: Object, default: () => ({}) },
    hasDownloadButton: { type: Boolean, default: false },
    hasMainButton: { type: Boolean, default: false },
    mainButtonLabel: { type: String, default: '' },
    mainButtonAction: { type: String, default: '' },
    downloadButtonLabel: { type: String, default: '' },
    clapinterval: { type: [Boolean, Number], default: 0 },
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
    logoSrc() {
      const prefix =
        'https://thumb.upera.shop/thumb?w=400&q=90&fmt=webp&src=https://thumb.upera.shop/s3/files/'
      const logo =
        this.data && this.data.item && this.data.item.logo
          ? String(this.data.item.logo)
          : ''
      if (!logo) return logo
      return logo.startsWith(prefix) ? logo : prefix + logo
    },
  },
  methods: {
    itemsize(e) {
      // Implementation from original code
      const w = window.innerWidth
      let offset = 25
      if (w <= 357) offset = 10
      else if (w <= 375) offset = 12

      const outerWrapper = document.getElementById(
        'showcase-thumbnail-wrapper-outter'
      )
      const buttonWrapper = document.getElementById('showcase-button-wrapper')
      const bottomEl = document.querySelector('.showcase-bottom')

      if (!bottomEl || !outerWrapper || !buttonWrapper) {
        return e
      }

      bottomEl.style.removeProperty('height')
      bottomEl.style.removeProperty('padding-top')

      if (w <= 767.98) {
        const vh =
          outerWrapper.offsetHeight - buttonWrapper.offsetHeight - offset
        bottomEl.style.height = `${vh}px`

        if (!this.hasDownloadButton) {
          const factor = this.data.item.ir ? 0.5 : 1 / 3
          bottomEl.style.paddingTop = `${vh * factor}px`
        }
      }

      return e
    },
  },
}
</script>

<style scoped>
.showcase-logo {
  max-width: 220px;
  min-height: 60px;
  margin-bottom: 0.5rem;
}
.showcase-logo >>> img {
  width: 100%;
  height: 100px;
  object-fit: contain;
}
@media (max-width: 576px) {
  .showcase-logo {
    max-width: 150px !important;
    max-height: 90px !important;
    min-height: 60px !important;
    margin-bottom: 0.5rem;
  }
  .showcase-thumbnail-wrapper {
    padding: 0 1rem !important;
    margin-top: 4rem !important;
  }

  .showcase-logo >>> img {
    width: 100%;
    height: 90px;
    object-fit: contain;
  }
}

@media (max-width: 992px) {
  .showcase-thumbnail-wrapper {
    margin-top: 10rem !important;
  }
}

@media (max-width: 1300px) {
  .showcase-thumbnail-wrapper {
    margin-top: 10rem !important;
  }
}
@media (min-width: 1300px) {
  .showcase-thumbnail-wrapper {
    margin-top: 14rem;
  }
}
</style>
