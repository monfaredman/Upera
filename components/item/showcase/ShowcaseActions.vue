<template>
  <div id="showcase-button-wrapper" class="showcase-button-wrapper">
    <!-- Main Action Button -->
    <button
      v-if="actions && actions.mainButton.exist"
      class="btn btn-main mr-1 ml-0"
      @click="handleMainAction"
    >
      <span class="smallsrm">
        <i class="fa fa-play pr-2" />
        <span>
          {{ mainButtonDisplayLabel }}
          <span v-if="showEpisodeNumber">
            {{ $t('show.episode') }} {{ episode.episode_number }}
          </span>
        </span>
      </span>
    </button>

    <!-- Download Button -->
    <button
      v-if="actions && actions.downloadButton.exist"
      class="btn btn-dark btn-download mr-1 ml-0"
      @click="handleDownload"
    >
      <span class="smallsrm">
        <i class="fa fa-download pr-2" />
        <span>{{ downloadButtonLabel }}</span>
      </span>
    </button>

    <!-- Loading State -->
    <button
      v-if="!actions || (!hasMainButton && !hasDownloadButton)"
      class="btn btn-main mr-1 ml-0"
    >
      <span class="smallsrm">
        <b-spinner small />
      </span>
    </button>

    <!-- Icon Actions -->
    <IconActions
      variant="desktop"
      :clap-active="Boolean(clapinterval)"
      :user-claps="userClaps"
      :is-watchlist="isWatchlist"
      class="ml-1"
      @clap-start="$emit('clap-start')"
      @clap-stop="$emit('clap-stop')"
      @share="$emit('share')"
      @toggle-watchlist="onToggleWatchlist"
    />
  </div>
</template>

<script>
import IconActions from '@/components/item/showcase/IconActions'

export default {
  name: 'ShowcaseActions',
  components: {
    IconActions,
  },
  props: {
    hasMainButton: { type: Boolean, default: false },
    hasDownloadButton: { type: Boolean, default: false },
    mainButtonLabel: { type: String, default: '' },
    mainButtonAction: { type: String, default: '' },
    downloadButtonLabel: { type: String, default: '' },
    clapinterval: { type: [Boolean, Number], default: 0 },
    userClaps: { type: [Number, String], default: 0 },
    isWatchlist: {
      type: [Number, Boolean],
      default: 0,
    },
    episode: { type: Object, default: () => ({}) },
    actions: {
      type: Object,
      default: () => ({}),
    },
    id: { type: [Number, String], default: null },
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
  computed: {
    mainButtonDisplayLabel() {
      if (!this.actions?.mainButton?.label) return this.mainButtonLabel
      const lbl = this.actions.mainButton.label
      return this.ChooseLang(lbl.en, lbl.fa)
    },
    showEpisodeNumber() {
      return this.mainButtonAction === 'play' && this.episode?.id
    },
  },

  methods: {
    handleMainAction() {
      const action = this.mainButtonAction
      if (action === 'play') this.$emit('play')
      else if (action === 'buy') this.$emit('buy')
      else if (action === 'subscription') this.$emit('subscription')
    },
    handleDownload() {
      this.$emit('download')
    },
    ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa
      return en
    },
    onToggleWatchlist() {
      this.$emit('toggle-watchlist', { id: this.id, type: this.type })
    },
  },
}
</script>
