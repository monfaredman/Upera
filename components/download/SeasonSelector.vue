<template>
  <div class="row py-4 download-options-wrapper">
    <div v-if="showSeasonDropdown" class="col-sm-6">
      <b-dropdown block :text="seasonTitle" variant="dark">
        <b-dropdown-item
          v-for="(season, index) in seasons"
          :key="index"
          href="#"
          :active="selectedSeasonId == index"
          @click.prevent="onSeasonSelect(index, season[0]?.id)"
        >
          فصل {{ index }}
        </b-dropdown-item>
      </b-dropdown>
    </div>

    <div :class="episodeDropdownClass">
      <b-dropdown
        block
        :text="episodeTitle"
        variant="outline-dark"
        class="srmb"
        :class="dropdownScrollClass"
      >
        <b-dropdown-item
          v-for="(episode, index) in currentSeasonEpisodes"
          :key="index"
          href="#"
          :active="isEpisodeActive(episode)"
          @click.prevent="onEpisodeSelect(episode.id)"
        >
          قسمت {{ episode.episode_number }}
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SeasonSelector',
  props: {
    seasons: {
      type: Object,
      default: () => ({}),
    },
    selectedSeasonId: {
      type: [String, Number],
      default: 1,
    },
    episodeTitle: {
      type: String,
      default: 'قسمت ها',
    },
    currentItem: {
      type: Object,
      default: () => ({}),
    },
    itemType: {
      type: String,
      default: '',
    },
    isStaticModal: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    showSeasonDropdown() {
      return Object.keys(this.seasons).length > 1
    },
    seasonTitle() {
      return `فصل ${this.selectedSeasonId}`
    },
    currentSeasonEpisodes() {
      return this.seasons[this.selectedSeasonId] || []
    },
    episodeDropdownClass() {
      return {
        'col-sm-6': this.showSeasonDropdown,
        'col-sm-12': !this.showSeasonDropdown,
      }
    },
    dropdownScrollClass() {
      const episodeCount = this.currentSeasonEpisodes.length
      return {
        scrollable: episodeCount > 20,
        scrollable2: episodeCount > 20 && this.isStaticModal,
      }
    },
  },
  methods: {
    onSeasonSelect(seasonId, firstEpisodeId) {
      this.$emit('season-selected', { seasonId, firstEpisodeId })
    },

    onEpisodeSelect(episodeId) {
      this.$emit('episode-selected', episodeId)
    },

    isEpisodeActive(episode) {
      return (
        this.itemType === 'episode' &&
        this.currentItem.episode_number === episode.episode_number
      )
    },
  },
}
</script>
