<template>
  <section id="watching" class="horizontal-list-container item mt-lg-2 pt-3">
    <!-- Season Dropdown and Sort Button -->
    <div class="container-fluid mb-3">
      <div class="row align-items-center container-fluid-header">
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
              <i :class="sortButtonIcon"></i>
              {{ sortButtonLabel }}
            </template>
            <b-dropdown-item
              v-for="option in sortOptions"
              :key="option.value"
              :active="sortOrder === option.value"
              @click="setSortOrder(option.value)"
            >
              <i :class="option.icon"></i>
              {{ option.label }}
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
                <div
                  v-if="$auth.loggedIn && episode.current_time > 0"
                  class="progress"
                >
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
                v-if="
                  getMainButton(episode).exist &&
                  getMainButtonAction(episode) === 'buy' &&
                  isEpisodeInCart(episode.id)
                "
                class="episode-remove-btn"
                @click="removeEpisodeFromCart(episode)"
              >
                حذف از سبد
                <i class="fa fa-trash mr-2"></i>
              </button>
              <button
                v-else-if="getMainButton(episode).exist"
                class="episode-play-btn"
                @click="handleAction(episode, getMainButtonAction(episode))"
              >
                {{ getMainButtonLabel(episode) }}
                <i :class="getMainButtonIcon(episode)"></i>
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
      <div v-if="hasMoreEpisodes" class="row mt-3 mb-5 mb-sm-4">
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

const SORT_OPTIONS = [
  {
    value: 'desc',
    label: 'جدیدترین',
    icon: 'fa fa-sort-numeric-desc ml-2',
  },
  {
    value: 'asc',
    label: 'قدیمی‌ترین',
    icon: 'fa fa-sort-numeric-asc ml-2',
  },
]

const SORT_PREFERENCE_KEY = 'seasonEpisodesSortOrder'

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
      sortOrder: SORT_OPTIONS[0].value,
      cartItemIds: [],
    }
  },
  computed: {
    sortOptions() {
      return SORT_OPTIONS
    },
    currentSortOption() {
      return (
        this.sortOptions.find((option) => option.value === this.sortOrder) ||
        this.sortOptions[0]
      )
    },
    sortButtonIcon() {
      return this.currentSortOption?.icon || 'fa fa-sort-alpha-down ml-2'
    },
    sortButtonLabel() {
      const label = this.currentSortOption?.label
      return label ? `مرتب سازی · ${label}` : 'مرتب سازی'
    },
    isBasketActive() {
      if (!this.$store) return true
      const state = this.$store.state?.basketActive
      return state === undefined ? true : Boolean(state)
    },
    currentSeasonEpisodes() {
      if (!this.season || !this.selectseriesid) return []
      const episodes = this.season[this.selectseriesid] || []

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
  watch: {
    isBasketActive: {
      immediate: true,
      handler(val) {
        if (!process.client) return
        if (val) {
          this.syncCartItems()
          this.attachCartListener()
        } else {
          this.cartItemIds = []
          this.detachCartListener()
        }
      },
    },
  },
  mounted() {
    if (!process.client) return
    this.loadSortPreference()
    if (this.isBasketActive) {
      this.syncCartItems()
      this.attachCartListener()
    } else {
      this.cartItemIds = []
      this.detachCartListener()
    }
  },
  beforeDestroy() {
    if (!process.client) return
    this.detachCartListener()
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
      if (!this.isValidSortOrder(order) || this.sortOrder === order) {
        return
      }
      this.sortOrder = order
      this.persistSortPreference(order)
    },
    loadSortPreference() {
      if (!process.client) return
      try {
        const stored = localStorage.getItem(SORT_PREFERENCE_KEY)
        if (this.isValidSortOrder(stored)) {
          this.sortOrder = stored
        }
      } catch (error) {
        console.warn('Failed to load episode sort preference:', error)
      }
    },
    persistSortPreference(order) {
      if (!process.client) return
      try {
        localStorage.setItem(SORT_PREFERENCE_KEY, order)
      } catch (error) {
        console.warn('Failed to save episode sort preference:', error)
      }
    },
    isValidSortOrder(order) {
      return this.sortOptions.some((option) => option.value === order)
    },
    getEpisodeSortTitle(episode) {
      if (!episode) return ''
      const locale = this.$i18n?.locale
      if (locale === 'fa') {
        return episode.name_fa || episode.name || ''
      }
      return episode.name || episode.name_fa || ''
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
    getMainButtonIcon(episode) {
      const action = this.getMainButtonAction(episode)
      if (action === 'buy') return 'fa fa-shopping-cart mr-2'
      if (action === 'subscription') return 'fa fa-id-card mr-2'
      return 'fa fa-play mr-2'
    },
    isEpisodeInCart(episodeId) {
      if (!this.isBasketActive || !episodeId) return false
      const targetId = String(episodeId)
      return this.cartItemIds.includes(targetId)
    },
    updateCartState(cart) {
      if (!cart || !Array.isArray(cart.content)) {
        this.cartItemIds = []
        return
      }
      this.cartItemIds = cart.content
        .map((item) => (item && item.id != null ? String(item.id) : null))
        .filter((id) => id !== null)
    },
    syncCartItems() {
      if (!process.client) return
      if (!this.isBasketActive) {
        this.cartItemIds = []
        return
      }
      try {
        const raw = localStorage.getItem('_cart')
        if (!raw) {
          this.cartItemIds = []
          return
        }
        const cart = JSON.parse(raw)
        this.updateCartState(cart)
      } catch (error) {
        console.error('Failed to sync cart items:', error)
      }
    },
    emitCartChange() {
      if (!process.client) return
      try {
        const event = new StorageEvent('storage', { key: '_cart' })
        window.dispatchEvent(event)
      } catch (error) {
        window.dispatchEvent(new Event('storage'))
      }
      // Emit Vue event for same-window updates
      this.$root.$emit('cart-updated')
    },
    attachCartListener() {
      if (!process.client || !this.isBasketActive) return
      if (this._cartStorageListener) return
      this._cartStorageListener = () => this.syncCartItems()
      window.addEventListener('storage', this._cartStorageListener)
    },
    detachCartListener() {
      if (!process.client) return
      if (!this._cartStorageListener) return
      window.removeEventListener('storage', this._cartStorageListener)
      this._cartStorageListener = null
    },
    persistCartItem(item) {
      if (!process.client) return

      try {
        const raw = localStorage.getItem('_cart')
        const cart = raw
          ? JSON.parse(raw)
          : {
              content: [],
              amount: 0,
            }

        if (!Array.isArray(cart.content)) {
          cart.content = []
        }

        const targetId = String(item.id)
        const index = cart.content.findIndex(
          (existing) => String(existing.id) === targetId
        )
        const normalizedItem = { ...item, id: targetId }
        if (index === -1) cart.content.push(normalizedItem)
        else cart.content.splice(index, 1, normalizedItem)

        cart.amount = cart.content.reduce(
          (sum, current) => sum + (current.tvod_price || 0),
          0
        )

        localStorage.setItem('_cart', JSON.stringify(cart))
        this.updateCartState(cart)
        this.emitCartChange()
      } catch (error) {
        console.error('Failed to persist cart item:', error)
      }
    },
    removeEpisodeFromCart(episode) {
      if (!episode?.id || !process.client) return

      try {
        const raw = localStorage.getItem('_cart')
        const cart = raw
          ? JSON.parse(raw)
          : {
              content: [],
              amount: 0,
            }

        if (!Array.isArray(cart.content)) {
          cart.content = []
        }

        const targetId = String(episode.id)
        cart.content = cart.content.filter(
          (item) => String(item?.id) !== targetId
        )
        cart.amount = cart.content.reduce(
          (sum, current) => sum + (current.tvod_price || 0),
          0
        )

        localStorage.setItem('_cart', JSON.stringify(cart))
        this.updateCartState(cart)
        this.emitCartChange()
      } catch (error) {
        console.error('Failed to remove episode from cart:', error)
      }
    },
    async addEpisodeToCart(episode) {
      if (!episode?.id || !process.client) return

      try {
        const endpoint = `/getV2/episode/${episode.id}`
        const response = await this.$axios.get(endpoint)
        const api = response?.data

        let normalized = null
        if (api?.data?.episode) {
          normalized = { ...api.data.episode, cdn: api.data.cdn }
        } else if (api?.data?.movie) {
          normalized = { ...api.data.movie, cdn: api.data.cdn }
        } else if (api?.data) {
          normalized = api.data
        } else {
          normalized = api
        }

        if (!normalized || !normalized.id) return

        const prepared = {
          ...normalized,
          id: String(normalized.id),
          type: normalized.type || 'episode',
        }

        this.persistCartItem(prepared)
      } catch (error) {
        console.error('Failed to add episode to cart:', error)
      }
    },
    async handleAction(episode, action) {
      if (action === 'play') {
        this.$router.push({
          name: 'episode-show-id',
          params: { id: episode.id },
        })
      } else if (action === 'buy') {
        if (this.$store?.state?.basketActive === false) {
          this.$store.dispatch('SET_BASKET_ACTIVE', true)
        }

        if (process.client) {
          try {
            localStorage.setItem('_download_skip_main_item', '1')
          } catch (error) {
            console.error('Failed to set skip flag:', error)
          }
        }

        await this.addEpisodeToCart(episode)
        this.$store.dispatch('DOWNLOAD_MODAL_LOAD')
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
  margin: -1rem 50px 0 50px !important;
}
@media (max-width: 575.98px) {
  .episode-remove-btn {
    font-size: 12px !important;
  }

  .col-lg-3.col-md-6.col-6.mb-3 {
    padding: 0 !important;
    max-width: 46% !important;
  }
  .row {
    flex-direction: row !important;
    gap: 0 26px !important;
  }
  .row.align-items-center.container-fluid-header {
    flex-direction: row !important;
    gap: 0 0px !important;
  }

  .row.align-items-center.container-fluid-header .col-6.col-md-auto {
    max-width: 43% !important;
  }

  section#watching {
    margin-top: -1rem !important;
    margin-bottom: 1rem !important;
    width: 84%;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-left: auto !important;
    margin-right: auto !important;
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
    line-clamp: 2;
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

  .sort-dropdown {
    min-width: 100px;
    width: 100px;
    padding: 0;
  }

  .container-fluid-header .col-6 {
    padding: 0 !important;
  }
}
.container-fluid {
  padding: 0 !important;
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
  background-color: black;
}
.theme-dark .show-more-divider {
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
  background-color: #303030;
  transform: translateY(-2px);
  color: white !important;
}

.theme-dark .show-more-btn:hover {
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
  line-clamp: 2;
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

.episode-remove-btn {
  width: 100%;
  height: 36px;
  border-radius: 8px;
  padding: 8px 20px;
  gap: 4px;
  background: #ff4d4f;
  color: #ffffff;
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

.episode-remove-btn:hover {
  background: #ff3335;
  color: #ffffff;
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
</style>
