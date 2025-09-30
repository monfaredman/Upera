<template>
  <div
    id="showcase-thumbnail-wrapper-outter"
    class="showcase-thumbnail-wrapper-outter d-flex align-items-center justify-content-between pr-gutter p-lg-3 p-md-3"
  >
    <div class="showcase-thumbnail-wrapper w-full container-fluid">
      <div class="d-flex h-full align-items-end">
        <!-- Poster Thumbnail -->
        <div class="thumbnail">
          <nuxt-link :to="{ name: type + '-id', params: { id: data.item.id } }">
            <OptimizedImage
              v-if="data.item.poster"
              class="thumbnail"
              :image-src="data.item.poster"
              :alt="data.item.name"
              :width="207"
              :height="307"
              :thumb-options="{ w: 207, h: 307, q: 100, a: 'c' }"
              type="posters"
              fluid-grow
              @load="itemsize('e')"
              @error="itemsize('e')"
            />
          </nuxt-link>
        </div>
        <!-- Description and Actions -->
        <div class="pr-md-4 pr-2 pr-0 mr-0 showcase-desc-wrapper h-full">
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
import OptimizedImage from '@/components/item/common/OptimizedImage'
import ShowcaseDescription from '@/components/item/showcase/ShowcaseDescription'
import ShowcaseActions from '@/components/item/showcase/ShowcaseActions'

export default {
  name: 'ShowcaseContent',
  components: {
    OptimizedImage,
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
