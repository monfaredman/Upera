<template>
  <div>
    <b-modal
      id="downloadLinks"
      ref="downloadLinks"
      :centered="!staticmodal"
      hide-footer
      hide-header
      size="lg"
      :no-close-on-backdrop="staticmodal"
      :hide-backdrop="staticmodal"
      :no-close-on-esc="staticmodal"
      modal-class="modal-download-link"
      :static="staticmodal"
      no-enforce-focus
    >
      <div class="download-links">
        <!-- Simple Header -->
        <div class="top-section">
          <div class="download-links-header-simple">
            <div class="download-links-title-simple">
              {{ getContentTitleHeader() }}
            </div>
            <button
              v-show="!staticmodal"
              type="button"
              class="close"
              @click="hideModal"
            >
              <i
                class="fas fa-times"
                :style="{
                  color: $colorMode.value === 'dark' ? 'white' : 'black',
                }"
              />
            </button>
          </div>

          <!-- Modal Content -->
          <div class="download-links-body-simple">
            <!-- Loading State -->
            <div v-if="loading" class="loading-state">
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <p>در حال بارگذاری...</p>
            </div>

            <!-- Error State -->
            <div v-else-if="error" class="error-state">
              <p class="text-danger">{{ error }}</p>
              <button
                class="btn btn-primary"
                @click="loadContentData(type, id)"
              >
                تلاش مجدد
              </button>
            </div>

            <!-- Content Loaded -->
            <div v-else class="tvod-content">
              <!-- Main Content Card -->
              <div class="content-card">
                <!-- List of added cards -->
                <div v-if="addedItems.length > 0" class="added-items-list">
                  <div
                    v-for="item in addedItems"
                    :key="item.id"
                    class="added-item-card"
                  >
                    <div class="card-content">
                      <div class="card-image">
                        <img :src="posterSrc(item.poster)" alt="Poster" />
                      </div>
                      <div class="card-details">
                        <div class="content-name">
                          {{ getContentTitle(item) }}
                        </div>
                        <div class="content-info">
                          <span
                            v-if="item.season_number && item.episode_number"
                          >
                            فصل {{ item.season_number }} - قسمت
                            {{ item.episode_number }}
                          </span>
                        </div>
                        <div class="content-price">
                          {{ formatPrice(item.tvod_price) }}
                          <span class="toman-title">تومان</span>
                        </div>
                      </div>
                      <div class="card-actions">
                        <button
                          class="btn-delete"
                          @click="removeAddedItem(item.id)"
                        >
                          <i
                            class="fas fa-trash-alt"
                            style="color: #ff6633; font-size: 1.5rem"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Add More Items Button (for cases 1 and 3) -->
              </div>
              <div v-if="showAddMoreButton" class="add-more-section">
                <button class="btn-add-more" @click="redirectToItem()">
                  <i class="fas fa-plus" />اضافه کردن قسمت های دیگر
                </button>
              </div>

              <!-- Payment Method Selection (for cases 1 and 2) -->
              <div v-if="showPaymentMethods" class="payment-section">
                <div class="section-title">انتخاب روش پرداخت</div>
                <div class="payment-options">
                  <div
                    v-for="method in paymentMethods"
                    :key="method.value"
                    class="payment-option"
                    :class="{ disabled: useWalletCredit }"
                  >
                    <div class="payment-option-content">
                      <div class="payment-image">
                        <img :src="require(`@/assets/images/${method.src}`)" />
                      </div>
                      <div class="payment-info">
                        <div class="payment-name">{{ method.name }}</div>
                      </div>
                      <div class="payment-radio">
                        <input
                          :id="`payment-${method.value}`"
                          v-model="paymentMethod"
                          type="radio"
                          name="payment"
                          :value="method.value"
                          :disabled="useWalletCredit"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Wallet Section (for cases 1 and 2) -->
              <div v-if="showWalletSection" class="wallet-section">
                <div class="d-flex justify-content-start align-content-center">
                  <i
                    class="fas fa-wallet fa-2x"
                    style="color: #525252; padding: 1rem"
                  />
                  <div class="wallet-option">
                    <label
                      for="use-wallet"
                      class="text-sm mb-0"
                      style="font-weight: 600"
                      >کیف پول</label
                    >
                    <div class="wallet-balance">
                      <span>موجودی :</span>
                      <span class="balance-amount">
                        {{ my_credit }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="custom-control custom-switch ml-2 mb-2" dir="rtl">
                  <input
                    id="use-wallet"
                    v-model="useWalletCredit"
                    class="custom-control-input"
                    type="checkbox"
                    :disabled="!hasEnoughWalletBalance"
                  />
                  <label class="custom-control-label" for="use-wallet"> </label>
                </div>
              </div>

              <!-- Mobile Input (for case 3 - no login) -->
              <div v-if="showMobileInput" class="mobile-section">
                <div class="mobile-input-container">
                  <label for="mobile-input">شماره موبایل</label>
                  <input
                    id="mobile-input"
                    v-model="mobile"
                    type="tel"
                    placeholder="شماره موبایل خود را وارد کنید"
                    class="form-control"
                    dir="rtl"
                    @input="validateMobile"
                  />
                  <div class="input-note">
                    برای خرید شماره تلفن خودرا وارد کنید
                  </div>
                  <div v-if="mobileError" class="error-message">
                    {{ mobileError }}
                  </div>
                </div>
              </div>

              <!-- Price Summary -->
              <div class="price-summary">
                <div class="price-row">
                  <span>جمع</span>
                  <span class="amount-value"
                    >{{ formatPrice(subtotalAmount) }}
                    <span class="toman-title">تومان</span>
                  </span>
                </div>
                <div v-if="taxAmount > 0" class="price-row">
                  <span>ارزش افزوده (۱۰٪)</span>
                  <span class="amount-value"
                    >{{ formatPrice(taxAmount) }}
                    <span class="toman-title">تومان</span>
                  </span>
                </div>
                <!-- <div class="price-row total">
                <span>مبلغ قابل پرداخت:</span>
                <span class="total-amount"
                  >{{ formatPrice(totalAmount) }} تومان</span
                >
              </div> -->
              </div>
            </div>
          </div>
        </div>
        <!-- Footer -->
        <div v-if="!loading && !error" class="download-links-footer-simple">
          <div class="footer-content">
            <div class="payable-amount">
              <span class="amount-label">مبلغ قابل پرداخت:</span>
              <span class="amount-value">
                {{ formatPrice(totalAmount) }}
                <span class="toman-title">تومان</span>
              </span>
            </div>
            <button
              class="btn btn-primary btn-payment"
              :disabled="!canPurchase || processing"
              @click="handlePurchase"
            >
              <span
                v-if="processing"
                class="spinner-border spinner-border-sm"
              />
              <span v-else>پرداخت</span>
            </button>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const THUMB_BASE = 'https://thumb.upera.shop/thumb'
const CDN_POSTERS = 'https://cdn.upera.shop/s3/posters'

export default {
  name: 'Download',
  props: {
    show: Boolean,
    staticmodal: Boolean,
    viewOnly: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: null,
    },
    posterf: {
      type: String,
      default: null,
    },
    backdrop: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    namefa: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
    itemdata: {
      type: Object,
      default: null,
    },
    season: {
      type: [Array, Object],
      default: null,
    },
  },
  data() {
    return {
      loading: false,
      error: null,
      processing: false,
      paymentMethod: 'sep',
      mobile: null,
      mobileError: '',
      useWallet: false,
      useWalletCredit: false,
      showAddMoreDropdown: false,
      addedItems: [],
      availableItems: [],
      paymentMethods: [
        {
          value: 'sep',
          name: 'درگاه بانکی',
          description: 'پرداخت با کلیه کارت‌های بانکی',
          icon: 'BankIcon',
          src: 'Shaparak.png',
        },
        // {
        //   value: 'directdebit',
        //   name: 'پرداخت خودکار',
        //   description: 'خرید خودکار بدون وارد کردن اطلاعات بانکی',
        //   icon: 'AutoPaymentIcon',
        //   src: 'kart.png',
        // },
        {
          value: 'directdebit',
          name: 'پرداخت خودکار',
          description: 'پرداخت با اعتبار حساب آپرا',
          icon: 'OperaCreditIcon',
          src: 'directdebit.png',
        },
        // {
        //   value: 'tally',
        //   name: 'اعتبار تالی',
        //   description: 'پرداخت با اعتبار تالی',
        //   icon: 'TallyIcon',
        //   src: 'tally.png',
        // },
      ],
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
    }),
    ...mapGetters({ my_credit: 'my_credit' }),

    // Determine user state
    userState() {
      if (!this.$auth.loggedIn) return 3 // No login
      return this.$store?.state?.basketActive ? 1 : 2 // 1: activated cart, 2: not activated
    },
    userLogin() {
      return this.$auth.loggedIn
    },

    // Show conditions based on user state
    showAddMoreButton() {
      return this.$store?.state?.basketActive
    },

    showPaymentMethods() {
      return this.userState === 1 || this.userState === 2
    },

    showWalletSection() {
      return this.userState === 1 || this.userState === 2
    },

    showMobileInput() {
      return this.userState === 3
    },

    subtotalAmount() {
      return this.addedItems.reduce((sum, item) => sum + item.tvod_price, 0)
    },

    taxAmount() {
      return Math.floor(this.subtotalAmount * 0.1) // 10% VAT
    },

    totalAmount() {
      return this.subtotalAmount + this.taxAmount
    },

    canPurchase() {
      // For logged-in users (states 1 and 2)
      if (this.userState === 1 || this.userState === 2) {
        return this.subtotalAmount > 0
      }
      // For guest users (state 3)
      if (this.userState === 3) {
        return this.subtotalAmount > 0 && this.mobile && !this.mobileError
      }
      return false
    },

    // Check if wallet has sufficient balance
    hasEnoughWalletBalance() {
      return this.myCreditValue >= this.totalAmount
    },

    myCreditValue() {
      if (!this.my_credit) return 0
      // Remove non-digit characters
      const num = this.my_credit.replace(/[^\d.]/g, '')
      return Number(num) || 0
    },
  },
  watch: {
    show(val) {
      if (val) {
        this.showModal()
        this.syncWithCart()
        let skipMainItem = false
        if (process.client) {
          try {
            skipMainItem =
              localStorage.getItem('_download_skip_main_item') === '1'
            if (skipMainItem) {
              localStorage.removeItem('_download_skip_main_item')
            }
          } catch (error) {
            console.error('Failed to read skip flag:', error)
          }
        }

        if (!this.viewOnly && !skipMainItem) {
          this.loadContentData(this.type, this.id)
        }
        this.loadAvailableItems()
      } else {
        this.hideModal()
      }
    },
    useWalletCredit(val) {
      if (val) {
        // When wallet is enabled, set payment method to credit
        this.paymentMethod = 'credit'
      } else {
        // When wallet is disabled, reset to default payment method
        this.paymentMethod = 'sep'
      }
    },
    addedItems: {
      deep: true,
      handler() {
        this.syncToCart()
      },
    },
  },
  mounted() {
    this.setupModalEvents()
    this.syncWithCart()

    // Show modal if show prop is initially true
    if (this.show) {
      this.showModal()
      if (!this.viewOnly) {
        this.loadContentData(this.type, this.id)
      }
      this.loadAvailableItems()
    }
  },
  methods: {
    setupModalEvents() {
      this.$refs.downloadLinks?.$on('hide', () => {
        this.cleanup()
        this.$emit('hide-modal')
      })
    },

    syncWithCart() {
      try {
        // If basketActive is not active, clear cart storage
        if (!this.$store?.state?.basketActive) {
          localStorage.removeItem('_cart')
          this.addedItems = []
          this.emitCartChange()
          return
        }

        const cart = localStorage.getItem('_cart')
        if (cart) {
          const parsedCart = JSON.parse(cart)
          if (parsedCart.content && Array.isArray(parsedCart.content)) {
            this.addedItems = parsedCart.content
          }
        }
      } catch (error) {
        console.error('Error syncing with cart:', error)
      }
    },

    syncToCart() {
      try {
        // Only sync to cart if basketActive is active
        if (!this.$store?.state?.basketActive) {
          localStorage.removeItem('_cart')
          this.emitCartChange()
          return
        }

        const normalizedContent = Array.isArray(this.addedItems)
          ? this.addedItems.map((item) =>
              item && typeof item === 'object'
                ? {
                    ...item,
                    id:
                      item.id !== undefined && item.id !== null
                        ? String(item.id)
                        : item.id,
                  }
                : item
            )
          : []

        const cart = {
          content: normalizedContent,
          amount: this.totalAmount,
        }
        localStorage.setItem('_cart', JSON.stringify(cart))
        this.emitCartChange()
      } catch (error) {
        console.error('Error syncing to cart:', error)
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

    addToCart(item) {
      try {
        // If basketActive is not active, only keep the last item
        if (!this.$store?.state?.basketActive) {
          this.addedItems = [item]
          localStorage.removeItem('_cart')
          this.emitCartChange()
          return
        }

        const cart = localStorage.getItem('_cart')
        const parsedCart = cart ? JSON.parse(cart) : { content: [] }
        const content = Array.isArray(parsedCart.content)
          ? [...parsedCart.content]
          : []

        // Check if item already exists
        const existingIndex = content.findIndex(
          (cartItem) => cartItem?.id === item.id
        )

        if (existingIndex === -1) {
          content.push(item)
        } else {
          content.splice(existingIndex, 1, item)
        }

        this.addedItems = content
      } catch (error) {
        console.error('Error adding to cart:', error)
      }
    },

    removeFromCart(itemId) {
      try {
        // If basketActive is not active, don't use cart storage
        if (!this.$store?.state?.basketActive) {
          this.addedItems = this.addedItems.filter((item) => item.id !== itemId)
          localStorage.removeItem('_cart')
          this.emitCartChange()
          return
        }

        const cart = localStorage.getItem('_cart')
        const parsedCart = cart ? JSON.parse(cart) : { content: [] }
        const content = Array.isArray(parsedCart.content)
          ? parsedCart.content.filter((item) => item?.id !== itemId)
          : []

        this.addedItems = content
      } catch (error) {
        console.error('Error removing from cart:', error)
      }
    },

    async loadContentData(type, id) {
      this.loading = true
      this.error = null

      try {
        let endpoint
        if (type === 'movie') {
          endpoint = `/getV2/movie/${id}`
        } else if (type === 'episode' || type === 'series') {
          endpoint = `/getV2/episode/${id}`
        }

        const resp = await this.$axios.get(endpoint)
        const api = resp.data

        // Normalize getV2 response to a flat object with cdn + entity fields
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

        // Add to cart instead of directly pushing
        this.addToCart(normalized)
        // this.showAddMoreDropdown = false
      } catch (error) {
        this.error = 'خطا در بارگذاری اطلاعات محتوا'
        console.error('Error loading content data:', error)
      } finally {
        this.showAddMoreDropdown = false
        this.loading = false
      }
    },

    loadAvailableItems() {
      if (this.season && typeof this.season === 'object') {
        this.availableItems = Object.values(this.season).flat()
      } else {
        this.availableItems = []
      }
    },

    // getPosterUrl() {
    //   // Prefer API response (cdn + poster), fallback to prop-based poster
    //   if (this.contentData?.poster && this.contentData?.cdn?.sm_poster) {
    //     return `${this.contentData.cdn.sm_poster}${this.contentData.poster}`
    //   }
    //   if (this.posterf) {
    //     return `https://thumb.upera.shop/thumb?w=70&h=103&q=100&a=c&src=https://cdn.upera.shop/s3/posters/${this.posterf}`
    //   }
    //   return ''
    // },

    getContentTitle(item) {
      if (item) {
        const en = item.name || item.title
        const fa = item.name_fa || item.title_fa
        const title = this.chooseLang(en, fa)
        if (title) return title
      }
      return this.chooseLang(this.name, this.namefa)
    },
    getContentTitleHeader() {
      if (this.addedItems[0]?.type === 'series') {
        return 'خرید سریال '
      } else if (this.addedItems[0]?.type === 'episode') {
        return 'خرید قسمت '
      } else if (this.addedItems[0]?.type === 'movie') {
        return 'خرید فیلم '
      }
    },

    formatPrice(cents) {
      if (!cents) return '0'
      const tomansStr = String(cents)
      const length = tomansStr.length
      if (length === 4)
        return tomansStr.substring(0, 1) + '.' + tomansStr.substring(1)
      else if (length === 5)
        return tomansStr.substring(0, 2) + '.' + tomansStr.substring(2)
      else if (length === 3) return tomansStr
      else return tomansStr.substring(0, 3) + '.' + tomansStr.substring(3)
    },

    removeItem() {
      // Logic to remove the main item
      // This would need to be handled based on your business logic
      this.hideModal()
    },

    addItem(item) {
      this.loadContentData(item.type, item.id)
      this.showAddMoreDropdown = true
    },

    removeAddedItem(itemId) {
      if (this.addedItems.length <= 1) {
        this.hideModal()
        return
      }
      this.removeFromCart(itemId)
    },

    validateMobile() {
      const mobileRegex = /^09[0-9]{9}$/
      if (!this.mobile) {
        this.mobileError = 'شماره موبایل الزامی است'
      } else if (!mobileRegex.test(this.mobile)) {
        this.mobileError = 'شماره موبایل معتبر نیست'
      } else {
        this.mobileError = ''
      }
    },

    async handlePurchase() {
      if (!this.canPurchase) return

      // Check if payment method is 'directdebit' (پرداخت خودکار)
      if (this.paymentMethod === 'directdebit') {
        this.hideModal()
        this.$store.dispatch('directdebit/SHOW_MODAL', {
          premobile: null,
          forsubscription: false,
          id: null,
          type: null,
          paymentid: 0,
        })
        return
      }

      this.processing = true

      try {
        let payload = {}
        if (this.userLogin) {
          payload = {
            method: this.paymentMethod,
            cart: [],
            ekran: 0,
            callback_url: 'https://upera.tv/callback',
            ref: 0,
            sms: false,
            mobile: this.mobile,
          }
        } else {
          payload = {
            method: this.paymentMethod,
            cart: [],
            ekran: 0,
            callback_url: 'https://upera.tv/callback',
            ref: 0,
            sms: false,
          }
        }

        // Add main item
        // if (this.type === 'movie') {
        //   payload.movie_id = this.id
        // }

        // else if (this.type === 'episode' || this.type === 'series') {
        //   payload.episode_id = this.id
        // }

        // Add additional items
        if (this.addedItems.length > 0) {
          payload.cart = this.addedItems.map((item) => {
            return item.type === 'movie'
              ? { movie_id: item.id }
              : { episode_id: item.id }
          })
        }

        // Add mobile for guest users
        if (this.userState === 3) {
          payload.mobile = this.mobile
        }

        const endpoint = this.userLogin ? '/get/buy' : '/ghost/get/buy'

        const response = await this.$axios.post(endpoint, payload)
        if (response.data.data.pay_url) {
          // Redirect to payment gateway
          window.location.href = response.data.data.pay_url
        } else {
          this.error = 'خطا در ایجاد لینک پرداخت'
        }
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          this.error = error.response.data.message
          return
        }
        this.error = 'خطا در انجام عملیات پرداخت'
      } finally {
        this.processing = false
      }
    },

    cleanup() {
      this.error = null
      this.mobile = null
      this.mobileError = ''
      this.useWallet = false
      this.showAddMoreDropdown = false
      this.availableItems = []
      // Clear cart from localStorage
      // localStorage.removeItem('_cart')
      // this.addedItems = []
    },

    chooseLang(en, fa) {
      if (fa && this.$i18n.locale == 'fa') return fa
      else return en
    },

    showModal() {
      this.$refs.downloadLinks?.show()
    },

    hideModal() {
      this.$refs.downloadLinks?.hide()
      this.$emit('hide-modal', null)
      this.cleanup()
    },
    posterSrc(filename) {
      if (!filename) return ''
      const { w, h } = { w: 142, h: 212 }
      return `${THUMB_BASE}?w=${w}&h=${h}&q=100&a=c&src=${CDN_POSTERS}/${filename}`
    },

    redirectToItem() {
      this.hideModal()
      this.$router.push(
        this.type === 'episode'
          ? {
              name: 'episode-id',
              params: { id: this.$route.params.id },
            }
          : this.type === 'movie'
          ? {
              name: 'movie-id',
              params: { id: this.$route.params.id },
            }
          : {
              name: 'series-id',
              params: { id: this.$route.params.id },
            }
      )
    },
  },
}
</script>

<style scoped>
.download-links {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  max-height: 90vh;
}

.download-links-header-simple {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  margin: 0 1rem;
  border-bottom: 1px solid #e9ecef;
  flex-shrink: 0;
}

.download-links-title-simple {
  font-weight: 700;
  font-size: 1rem;
  color: #121212;
}

.download-links-body-simple {
  padding: 1rem 1rem 0 1rem;
  min-height: 200px;
  flex: 1;
  overflow-y: auto;
  max-height: calc(90vh - 180px);
  direction: rtl;
}

/* Custom Scrollbar Styles */
.download-links-body-simple::-webkit-scrollbar {
  width: 8px;
}

.download-links-body-simple::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.download-links-body-simple::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.download-links-body-simple::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Firefox Scrollbar */
.download-links-body-simple {
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
}

.download-links-footer-simple {
  padding: 1rem 0;
  border-top: 1px solid #e9ecef;
  border-radius: 0 0 32px 32px;
  color: black;
  margin: 0 1rem;
  flex-shrink: 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.payable-amount {
  display: flex;
  justify-content: start;
  gap: 0.5rem;
}

.amount-label {
  font-weight: 600;
  font-size: 0.9rem;
  color: #525252;
}

.amount-value {
  font-weight: 600;
  font-size: 1.2rem;
}

.loading-state,
.error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  color: black;
}

.tvod-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.content-card {
  border-radius: 12px;
  overflow: hidden;
  background: white;
  border-radius: 0 0 8px 8px;
  overflow: auto;
  max-height: 240px !important;
  direction: rtl;
}

/* Custom Scrollbar for Content Card */
.content-card::-webkit-scrollbar {
  width: 6px;
}

.content-card::-webkit-scrollbar-track {
  background: #f8f9fa;
  border-radius: 10px;
}

.content-card::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px !important;
}

.content-card::-webkit-scrollbar-thumb:hover {
  background: #888;
  border-radius: 10px !important;
}

.content-card {
  scrollbar-width: thin;
  scrollbar-color: #888 #f8f9fa;
}

.card-content {
  display: flex;
  align-items: end;
  padding-bottom: 1rem;
}

.card-image {
  width: 120px;
  height: 180px;
  margin-left: 1rem;
  flex-shrink: 0;
  border-radius: 11.15px !important;
}

.card-image img {
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.card-details {
  flex: 1;
}

.content-name {
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.content-info {
  color: #6c757d;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.content-price {
  font-weight: bold;
  font-size: 16pxrem;
  color: #ff6633;
  background: #ffece5;
  padding: 10px;
  width: 100%;
  text-align: center;
  border-radius: 8px;
  padding-top: 14px !important;
}

.card-actions {
  margin-right: 1rem;
}

.btn-delete {
  background: none;
  border: none;
  color: #dc3545;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.btn-delete:hover {
  background-color: #f8f9fa;
}

.add-more-section {
  position: relative;
}

.btn-add-more {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: #ffffff;
  border: 1px solid #ff6633;
  border-radius: 8px;
  color: #ff6633;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  justify-content: center;
}

.btn-add-more:hover {
  border-color: #007bff;
  color: #007bff;
}

.add-more-dropdown {
  position: absolute;
  width: 100%;
  top: 100%;
  background: rgb(158, 158, 158);
  border: 1px solid #e9ecefe7;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10000 !important;
  border: 1px solid gray;
  margin-top: 0.5rem;
}

.dropdown-content {
  max-height: 200px;
  overflow-y: auto;
  direction: rtl;
}

/* Custom Scrollbar for Dropdown */
.dropdown-content::-webkit-scrollbar {
  width: 6px;
}

.dropdown-content::-webkit-scrollbar-track {
  background: #e9ecef;
  border-radius: 10px;
}

.dropdown-content::-webkit-scrollbar-thumb {
  background: #6c757d;
  border-radius: 10px;
}

.dropdown-content::-webkit-scrollbar-thumb:hover {
  background: #495057;
}

.dropdown-content {
  scrollbar-width: thin;
  scrollbar-color: #6c757d #e9ecef;
}

.dropdown-item {
  padding: 1rem;
  border-bottom: 1px solid #f8f9fa;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dropdown-item:hover {
  background-color: #f8f9fa;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.item-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-name {
  font-weight: 500;
}

.item-price {
  color: #007bff;
  font-weight: bold;
}

.added-items-list {
  display: flex;
  flex-direction: column;
}

.added-item-card {
  background: white;
}

.mobile-section,
.payment-section,
.wallet-section {
  color: #404040;
}

.wallet-section {
  display: flex;
  justify-content: space-between;
  align-content: center;
  gap: 1rem;
  align-items: center;
}

.section-title {
  font-weight: 400;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #333;
}

.mobile-input-container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.mobile-input-container label {
  font-weight: 600;
  color: #333;
}

.mobile-input-container input {
  padding: 0.75rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.mobile-input-container input:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.input-note {
  font-size: 0.85rem;
  color: #6c757d;
  line-height: 1.4;
}

.error-message {
  color: #dc3545;
  font-size: 0.85rem;
  margin-top: 0.25rem;
}

/* Payment Methods Styles */
.payment-options {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.payment-option {
  border: 1px solid #e9ecef;
  border-radius: 12px;
  background: white;
  transition: all 0.3s ease;
  cursor: pointer;
}

.payment-option:hover {
  border-color: #007bff;
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.1);
}

.payment-option.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.payment-option.disabled:hover {
  border-color: #e9ecef;
  box-shadow: none;
}

.payment-option-content {
  display: flex;
  align-items: center;
  padding: 0.6rem;
  gap: 1rem;
}

.payment-image {
  flex-shrink: 0;
  width: 50px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.payment-icon {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-shape {
  width: 40px;
  height: 25px;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 4px;
  position: relative;
  border: 1px solid #dee2e6;
}

.card-shape.blue {
  background: linear-gradient(135deg, #007bff, #0056b3);
}

.card-chip {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 12px;
  height: 8px;
  background: #ffd700;
  border-radius: 2px;
}

.card-lines {
  position: absolute;
  top: 15px;
  left: 5px;
  right: 5px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.line {
  height: 2px;
  background: #6c757d;
  border-radius: 1px;
}

.line:first-child {
  width: 80%;
}

.line:last-child {
  width: 60%;
}

.logo-circle,
.logo-square {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: #007bff;
  color: white;
  font-weight: bold;
  font-size: 14px;
}

.logo-circle {
  border-radius: 50%;
}

.logo-square {
  border-radius: 6px;
  background: #28a745;
}

.payment-info {
  flex: 1;
}

.payment-name {
  font-weight: 500;
  font-size: 14px;
  color: #333;
  margin-bottom: 0.25rem;
}

.payment-description {
  font-size: 0.85rem;
  color: #6c757d;
}

.payment-radio {
  flex-shrink: 0;
}

.payment-radio input[type='radio'] {
  width: 17px;
  height: 17px;
  accent-color: #007bff;
  cursor: pointer;
}

.wallet-option {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 0.2rem;
}

.wallet-balance {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  font-weight: 500;
}

.balance-amount {
  font-weight: 400;
  color: #000000;
  font-size: 1rem;
  margin-right: 0.5rem;
}

.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
}

.price-row.total {
  border-top: 1px solid #e9ecef;
  margin-top: 0.5rem;
  padding-top: 1rem;
  font-weight: bold;
  color: #333;
}

.total-amount {
  color: #007bff;
  font-size: 1.2rem;
}

.btn-payment {
  min-width: 280px !important;
  border-radius: 7px !important;
}

.wallet-balance {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  font-weight: 500;
}

.price-summary {
  color: black;
  margin-top: -1rem;
}

.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
}

.price-row.total {
  border-top: 1px solid #e9ecef;
  margin-top: 0.5rem;
  padding-top: 1rem;
  font-weight: bold;
  color: #333;
}

.total-amount {
  color: #007bff;
  font-size: 1.2rem;
}

.btn-payment {
  min-width: 120px;
}

.payment-image img {
  max-width: 100%;
  max-height: 40px !important;
  object-fit: contain;
}

.top-section {
  display: flex;
  flex-direction: column;
  justify-content: start;
}

.toman-title {
  font-size: 14px !important;
}

.amount-value {
  font-size: 18px !important;
  font-weight: 400 !important;
}

.payment-radio {
  display: flex;
  justify-content: center;
}

@media (max-width: 576px) {
  .btn-payment {
    min-width: 150px !important;
  }
}
@media (max-width: 768px) {
  .btn-payment {
    min-width: 190px;
  }
}
@media (max-width: 992px) {
  .btn-payment {
    min-width: 200px;
  }
}
</style>
