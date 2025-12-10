<template>
  <div id="showcase-button-wrapper" class="showcase-button-wrapper">
    <!-- Main Action Button -->
    <button
      v-if="shouldShowRemoveButton"
      class="btn btn-danger mr-1 ml-0 btn-main-section btn-remove"
      @click="removeFromCart"
    >
      <span class="smallsrm">
        <i class="fa fa-trash pr-2" />
        <span>{{ removeButtonLabel }}</span>
      </span>
    </button>
    <button
      v-else-if="actions && actions.mainButton.exist"
      class="btn btn-main mr-1 ml-0 btn-main-section"
      @click="handleMainAction"
    >
      <span class="smallsrm">
        <i :class="mainButtonIcon" />
        <span>
          {{ mainButtonDisplayLabel }}
          <span v-if="showEpisodeNumber">
            <span class="ml-1">{{ $t('show.episode') }}</span>
            {{ episode.episode_number }}
          </span>
        </span>
      </span>
    </button>

    <!-- Download Button -->
    <button
      v-if="!shouldShowRemoveButton && actions && actions.downloadButton.exist"
      class="btn btn-dark btn-download mr-1 ml-0 btn-main-section"
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
  data() {
    return {
      cartItemIds: [],
      cartStorageListener: null,
    }
  },
  computed: {
    isBasketActive() {
      if (!this.$store) return true
      const state = this.$store.state?.basketActive
      return state === undefined ? true : Boolean(state)
    },
    mainButtonDisplayLabel() {
      if (!this.actions?.mainButton?.label) return this.mainButtonLabel
      const lbl = this.actions.mainButton.label
      return this.ChooseLang(lbl.en, lbl.fa)
    },
    showEpisodeNumber() {
      return this.mainButtonAction === 'play' && this.episode?.id
    },
    cartTargetId() {
      if (!this.isBasketActive) return null
      if (this.mainButtonAction !== 'buy') return null
      const target =
        (this.episode && this.episode.id != null ? this.episode.id : null) ??
        this.id
      return target != null ? String(target) : null
    },
    shouldShowRemoveButton() {
      if (!this.cartTargetId) return false
      return this.cartItemIds.includes(this.cartTargetId)
    },
    mainButtonIcon() {
      if (this.mainButtonAction === 'play') return 'fa fa-play pr-2'
      if (this.mainButtonAction === 'subscription') return 'fa fa-id-card pr-2'
      if (this.mainButtonAction === 'buy') return 'fa fa-shopping-cart pr-2'
      return 'fa fa-play pr-2'
    },
    removeButtonLabel() {
      if (typeof this.$te === 'function' && this.$te('cart.remove')) {
        return this.$t('cart.remove')
      }
      return 'حذف از سبد'
    },
  },
  watch: {
    isBasketActive: {
      immediate: true,
      handler(active) {
        if (!process.client) return
        if (active) {
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
    if (this.isBasketActive) {
      this.syncCartItems()
      this.attachCartListener()
    }
  },
  beforeDestroy() {
    if (!process.client) return
    this.detachCartListener()
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
    updateCartState(cart) {
      if (!cart || !Array.isArray(cart.content)) {
        this.cartItemIds = []
        return
      }
      this.cartItemIds = cart.content
        .map((item) => (item && item.id != null ? String(item.id) : null))
        .filter((id) => id !== null)
    },
    removeFromCart() {
      if (!process.client || !this.cartTargetId) return
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

        cart.content = cart.content.filter(
          (item) => String(item?.id) !== this.cartTargetId
        )
        cart.amount = cart.content.reduce(
          (sum, current) => sum + (current.tvod_price || 0),
          0
        )

        localStorage.setItem('_cart', JSON.stringify(cart))
        this.updateCartState(cart)
        this.emitCartChange()
      } catch (error) {
        console.error('Failed to remove item from cart:', error)
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
      if (!process.client) return
      if (this.cartStorageListener) return
      this.cartStorageListener = () => this.syncCartItems()
      window.addEventListener('storage', this.cartStorageListener)
    },
    detachCartListener() {
      if (!process.client) return
      if (!this.cartStorageListener) return
      window.removeEventListener('storage', this.cartStorageListener)
      this.cartStorageListener = null
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

<style scoped>
.showcase-button-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-main-section {
  min-width: 180px;
  height: 44px;
  opacity: 1;
  border-radius: 8px;
  padding-top: 10px;
  padding-right: 24px;
  padding-bottom: 10px;
  padding-left: 24px;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-main-section .smallsrm {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn-main-section span {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Mobile responsive - full width buttons */
@media (max-width: 767.98px) {
  .showcase-button-wrapper {
    gap: 12px;
  }

  .btn-main-section {
    max-width: 220px !important;
    width: unset !important;
  }

  .showcase-theme-m-tn
    .showcase-thumbnail-wrapper-outter
    .showcase-button-wrapper {
    display: flex !important;
    justify-content: space-around !important;
    align-content: center !important;
    flex-wrap: wrap;
    justify-content: center;
  }

  .showcase-theme-m-tn
    .showcase-thumbnail-wrapper-outter
    .showcase-button-wrapper
    .btn:last-of-type {
    margin-top: 0 !important;
  }
}

@media (max-width: 576px) {
  .showcase-button-wrapper {
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 12px !important;
    width: 100% !important;
    max-width: 100% !important;
    padding: 0 1rem !important;
    margin: 0 auto !important;
    border-radius: 8px !important;
  }

  .btn-main-section {
    max-width: 100% !important;
    width: 100% !important;
  }
}
</style>
