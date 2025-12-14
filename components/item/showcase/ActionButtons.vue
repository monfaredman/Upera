<template>
  <div>
    <DownloadButton
      v-if="!hasMainButton && hasDownloadButton"
      :exist="hasDownloadButton"
      :label="downloadButtonLabel"
      :block="true"
      @download="$emit('download')"
    />
    <PrimaryActionButton
      v-else-if="hasMainButton"
      :exist="hasMainButton"
      :label="mainButtonLabel"
      :action="mainButtonAction"
      :episode-id="episode.id"
      :episode-number="episode.episode_number"
      :block="true"
      @play="$emit('play')"
      @buy="$emit('buy')"
      @subscription="$emit('subscription')"
    />
    <button v-else class="btn btn-main">
      <b-spinner small />
    </button>
  </div>
</template>

<script>
import PrimaryActionButton from '@/components/buttons/PrimaryActionButton'
import DownloadButton from '@/components/buttons/DownloadButton'

export default {
  name: 'ActionButtons',
  components: {
    PrimaryActionButton,
    DownloadButton,
  },
  props: {
    hasMainButton: Boolean,
    hasDownloadButton: Boolean,
    mainButtonLabel: { type: String, default: '' },
    mainButtonAction: { type: String, default: '' },
    episode: { type: Object, default: () => ({}) },
    downloadButtonLabel: { type: String, default: '' },
  },
  emits: ['play', 'buy', 'subscription', 'download'],
}
</script>
