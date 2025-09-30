<template>
  <section id="watching" class="horizontal-list-container item mt-lg-2 pt-3">
    <div class="container-fluid mb-2">
      <div class="row">
        <b-dropdown
          class="col-lg-2 col-md-3 col-4"
          block
          :text="seasontitle"
          variant="dark"
        >
          <b-dropdown-item
            v-for="(item, index) in season"
            :key="index"
            href="#"
            :active="selectseriesid == index"
            @click.prevent="$emit('select-season', index)"
          >
            فصل {{ index }}
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div
          v-for="(episode, index) in currentSeasonEpisodes"
          :key="index"
          class="col-lg-3 col-md-4 col-6"
        >
          <nuxt-link :to="{ name: 'episode-id', params: { id: episode.id } }">
            <OptimizedImage
              :image-src="episode.backdrop"
              :alt="episode.name"
              class="rounded"
              :width="364"
              :height="190"
              :thumb-options="{ w: 364, h: 190, q: 100, a: 'c' }"
              type="backdrops"
              fluid-grow
            />
            <div v-if="$auth.loggedIn" class="progress">
              <div
                class="progress-bar"
                :style="
                  'width: ' +
                  (episode.current_time / episode.duration_time) * 100 +
                  '%'
                "
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </nuxt-link>
          <div class="mt-2">
            <h6 class="mt-2 small font-weight-normal">
              {{ ChooseLang(episode.name, episode.name_fa) }}
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import OptimizedImage from '@/components/item/common/OptimizedImage'

export default {
  name: 'SeasonEpisodes',
  components: {
    OptimizedImage,
  },
  props: {
    season: { type: Object, default: () => ({}) },
    selectseriesid: { type: [String, Number], default: null },
    seasontitle: { type: String, default: '' },
    type: { type: String, default: '' },
  },
  computed: {
    currentSeasonEpisodes() {
      if (!this.season || !this.selectseriesid) return []
      return this.season[this.selectseriesid] || []
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
