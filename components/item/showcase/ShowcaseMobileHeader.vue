<template>
  <div class="d-flex header-mobile d-md-none">
    <div class="show-mobile header-home w-full">
      <div class="px-3 h-full">
        <div class="row h-full align-items-center">
          <div class="col-6">
            <ActionButtons
              :has-main-button="hasMainButton"
              :has-download-button="hasDownloadButton"
              :main-button-label="mainButtonLabel"
              :main-button-action="mainButtonAction"
              :episode="episode"
              :download-button-label="downloadButtonLabel"
              @play="handlePlay"
              @buy="handleBuy"
              @subscription="handleSubscription"
              @download="handleDownloadClick"
            />
          </div>
          <div class="col-6 h-full">
            <div class="row h-full">
              <IconActions
                variant="mobile"
                :clap-active="Boolean(clapinterval)"
                :user-claps="userClaps"
                :is-watchlist="isWatchlist"
                @clap-start="$emit('clap-start')"
                @clap-stop="$emit('clap-stop')"
                @share="$emit('share')"
                @toggle-watchlist="
                  $emit('toggle-watchlist', data.item.id, type)
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActionButtons from '@/components/item/showcase/ActionButtons.vue'
import IconActions from '@/components/item/showcase/IconActions.vue'

export default {
  name: 'ShowcaseMobileHeader',

  components: {
    ActionButtons,
    IconActions,
  },
  props: {
    hasMainButton: { type: Boolean, default: false },
    hasDownloadButton: { type: Boolean, default: false },
    mainButtonLabel: { type: String, default: '' },
    mainButtonAction: { type: String, default: '' },
    episode: { type: Object, default: () => ({}) },
    downloadButtonLabel: { type: String, default: '' },
    clapinterval: { type: [Boolean, Number], default: 0 },
    userClaps: { type: [Number, String], default: 0 },
    isWatchlist: { type: [Number, Boolean], default: 0 },
    data: { type: Object, default: () => ({}) },
    type: { type: String, default: '' },
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
    handlePlay() {
      this.$emit('play')
    },
    handleBuy() {
      this.$emit('buy')
    },
    handleSubscription() {
      this.$emit('subscription')
    },
    handleDownloadClick() {
      this.$emit('download')
    },
  },
}
</script>
