<template>
  <section id="watching" class="horizontal-list-container item mt-lg-2 pt-3">
    <!-- Season Dropdown and Sort Button -->
    <div class="container-fluid mb-3">
      <div class="row align-items-center">
        <div class="col-6 col-md-auto">
          <b-dropdown
            class="season-dropdown"
            :text="seasontitle"
            variant="main"
            size="md"
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
        <div class="col-6 col-md-auto">
          <b-dropdown class="sort-dropdown" variant="text" size="md" right>
            <template #button-content>
              <i class="fa fa-sort-alpha-down ml-2"></i>
              مرتب سازی
            </template>
            <b-dropdown-item
              :active="sortOrder === 'asc'"
              @click="setSortOrder('asc')"
            >
              <i class="fa fa-sort-numeric-asc ml-2"></i>
              قدیمی‌ترین
            </b-dropdown-item>
            <b-dropdown-item
              :active="sortOrder === 'desc'"
              @click="setSortOrder('desc')"
            >
              <i class="fa fa-sort-numeric-desc ml-2"></i>
              جدیدترین
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </div>

    <!-- Series Description -->
    <div v-if="description" class="container-fluid mb-4">
      <div class="row">
        <div class="col-12">
          <p class="series-description text-light">
            {{ description }}
          </p>
        </div>
      </div>
    </div>

    <!-- Episodes Grid -->
    <div class="container-fluid">
      <div class="row">
        <div
          v-for="(episode, index) in displayedEpisodes"
          :key="index"
          class="col-lg-3 col-md-6 col-6 mb-3"
        >
          <div class="episode-card">
            <nuxt-link
              :to="{ name: 'episode-id', params: { id: episode.id } }"
              class="episode-image-link"
            >
              <div class="episode-image-wrapper">
                <OptimizedImage
                  :image-src="episode.backdrop"
                  :alt="episode.name"
                  class="episode-image"
                  :width="364"
                  :height="170"
                  :thumb-options="{ w: 364, h: 170, q: 100, a: 't' }"
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
              </div>
            </nuxt-link>
            <div class="episode-content">
              <h6 class="episode-title">
                {{ ChooseLang(episode.name, episode.name_fa) }}
              </h6>
              <button
                v-if="getMainButton(episode).exist"
                class="episode-play-btn"
                @click="handleAction(episode, getMainButtonAction(episode))"
              >
                {{ getMainButtonLabel(episode) }}
                <i class="fa fa-play mr-2"></i>
              </button>
              <nuxt-link
                v-else
                :to="{ name: 'episode-id', params: { id: episode.id } }"
                class="episode-play-btn"
              >
                تماشا
                <i class="fa fa-play mr-2"></i>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Show More Button -->
      <div v-if="hasMoreEpisodes" class="row mt-3">
        <div class="col-12">
          <div class="show-more-container">
            <div class="show-more-divider"></div>
            <b-button
              variant="outline-light"
              class="show-more-btn"
              @click="toggleShowMore"
            >
              {{ showAll ? 'مشاهده کمتر' : 'مشاهده بیشتر' }}
              <i
                :class="showAll ? 'fa fa-chevron-up' : 'fa fa-chevron-down'"
              ></i>
            </b-button>
            <div class="show-more-divider"></div>
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
    description: { type: String, default: '' },
  },
  data() {
    return {
      showAll: false,
      itemsPerRow: 4,
      sortOrder: 'asc', // 'asc' for oldest first, 'desc' for newest first
    }
  },
  computed: {
    currentSeasonEpisodes() {
      if (!this.season || !this.selectseriesid) return []
      const episodes = this.season[this.selectseriesid] || []

      // Apply sorting
      const sortedEpisodes = [...episodes]
      if (this.sortOrder === 'desc') {
        sortedEpisodes.reverse()
      }

      return sortedEpisodes
    },
    displayedEpisodes() {
      if (this.showAll) {
        return this.currentSeasonEpisodes
      }
      return this.currentSeasonEpisodes.slice(0, this.itemsPerRow)
    },
    hasMoreEpisodes() {
      return this.currentSeasonEpisodes.length > this.itemsPerRow
    },
  },
  methods: {
    ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa
      return en
    },
    toggleShowMore() {
      this.showAll = !this.showAll
    },
    setSortOrder(order) {
      this.sortOrder = order
    },
    getMainButton(episode) {
      return episode?.actions?.mainButton || { exist: false }
    },
    getMainButtonLabel(episode) {
      const mainButton = this.getMainButton(episode)
      if (!mainButton.exist) return ''
      const lbl = mainButton.label || {}
      return this.ChooseLang(lbl.en, lbl.fa)
    },
    getMainButtonAction(episode) {
      const mainButton = this.getMainButton(episode)
      return mainButton.exist ? mainButton.action : ''
    },
    handleAction(episode, action) {
      if (action === 'play') {
        this.$router.push({ name: 'episode-id', params: { id: episode.id } })
      } else if (action === 'buy') {
        this.$emit('buy', episode)
      } else if (action === 'subscription') {
        this.$emit('subscription', episode)
      }
    },
  },
}
</script>
<style scoped>
section#watching {
  margin-top: -1rem !important;
}

.container-fluid {
  padding-right: 1.5rem !important;
}
.col-lg-3.col-md-6.col-6.mb-3 {
  padding-right: 0 !important;
}

.season-dropdown {
  width: 326px;
  height: 44px;
  opacity: 1;
  border-radius: 8px;
  background: #ffece5 !important;
  color: #ff6633;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
}

.season-dropdown ::v-deep .btn {
  width: 100%;
  height: 100%;
  padding: 10px 24px;
  gap: 8px;
  background: #ffece5 !important;
  border: none;
  border-radius: 8px;
  color: #ff6633;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.season-dropdown ::v-deep .btn .caret,
.season-dropdown ::v-deep .btn .dropdown-toggle::after {
  margin-right: 0;
  margin-left: 8px;
}

.sort-dropdown {
  min-width: 150px;
  color: #ff6633 !important;
}

.sort-dropdown ::v-deep .dropdown-item {
  display: flex;
  align-items: center;
}

.sort-dropdown ::v-deep .dropdown-item i {
  font-size: 0.9rem;
}

.sort-dropdown ::v-deep .btn {
  display: flex;
  align-items: center;
  color: #ff6633 !important;
}

.series-description {
  line-height: 1.6;
  font-size: 0.95rem;
  opacity: 0.9;
}

.show-more-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.show-more-divider {
  flex: 1;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
}

.show-more-btn {
  color: #525252 !important;
  font-size: 0.8rem;
  font-weight: 600;
  background: #ffffff;
  border: 1px solid #f5f5f5;
  width: 153px !important;
  height: 44px !important;
  padding: 10px 24px !important;
  border-radius: 16px !important;
  gap: 8px !important;
  border-width: 1px !important;
  border-style: solid !important;
  font-weight: 500 !important;
  transition: all 0.3s ease !important;
  flex-shrink: 0 !important;
  opacity: 1 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.show-more-btn i {
  margin-right: 4px;
  font-size: 0.8rem;
}

.show-more-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
  color: white !important;
}

.episode-card {
  border-radius: 8px;
  padding: 12px;
  gap: 12px;
  background: #373737;
  display: flex;
  flex-direction: column;
  opacity: 1;
  transition: all 0.3s ease;
}

.episode-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.episode-image-link {
  display: block;
  text-decoration: none;
}

.episode-image-wrapper {
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 64.38%, #000000 108.55%);
}

.episode-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.episode-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

.episode-title {
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  line-height: 32px;
  text-align: right;
  color: #ffffff;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.episode-play-btn {
  width: 100%;
  height: 36px;
  border-radius: 8px;
  padding: 8px 20px;
  gap: 4px;
  background: #ffece5;
  color: #ff6633;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.episode-play-btn:hover {
  background: #ffd9cc;
  color: #ff6633;
  text-decoration: none;
}

.episode-play-btn i {
  font-size: 12px;
  margin-left: 4px;
}

.progress {
  position: absolute;
  bottom: 8px !important;
  left: 8px !important;
  right: 8px !important;
  height: 4px !important;
  background-color: rgba(255, 255, 255, 0.2) !important;
  border-radius: 2px !important;
  overflow: hidden !important;
}

.progress-bar {
  background-color: #ff6633 !important;
  transition: width 0.3s ease !important;
  height: 100% !important;
}

.btn {
  display: block !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 0.45rem;
}
.col-auto {
  padding: 0 !important;
  margin: 0 0 0 0.5rem;
}

/* Center title and icon inside dropdown buttons */
.season-dropdown ::v-deep(.btn),
.sort-dropdown ::v-deep(.btn) {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center !important;
  gap: 0.5rem;
}

/* Ensure caret (dropdown arrow) stays aligned properly */
.season-dropdown ::v-deep(.dropdown-toggle::after),
.sort-dropdown ::v-deep(.dropdown-toggle::after) {
  margin-left: 6px;
  vertical-align: middle;
  position: relative;
  top: 1px;
}

@media (max-width: 767.98px) {
  .season-dropdown {
    width: fit-content;
  }
}

@media (max-width: 575.98px) {
  section#watching {
    margin-top: -3rem !important;
  }

  .episode-title {
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    line-height: 32px;
    text-align: right;
    color: #ffffff;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .episode-card {
    border-radius: 8px;
    padding: 0;
    gap: 8px;
    background: #373737;
    display: flex;
    flex-direction: column;
    opacity: 1;
    transition: all 0.3s ease;
  }

  .episode-content {
    gap: 2px;
  }
}
</style>
