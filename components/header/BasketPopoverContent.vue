<template>
  <div class="basket-popover-content">
    <div v-if="cartItems.length === 0" class="empty-basket">
      <i class="fa fa-shopping-basket empty-icon" />
      <p>سبد خرید شما خالی است</p>
    </div>
    <div v-else class="basket-with-items">
      <!-- Items List -->
      <div class="items-list-compact">
        <div
          v-for="item in cartItems"
          :key="item.id"
          class="basket-item-compact"
        >
          <div class="item-image-compact">
            <img :src="posterSrc(item.poster)" alt="Poster" />
          </div>
          <div class="item-details-compact">
            <div class="item-title-compact">{{ getContentTitle(item) }}</div>
            <div class="item-info-compact">
              <span v-if="item.season_number && item.episode_number">
                فصل {{ item.season_number }} - قسمت {{ item.episode_number }}
              </span>
            </div>
            <div class="item-price-compact">
              {{ formatPrice(item.tvod_price) }} تومان
            </div>
          </div>
          <button class="btn-remove-compact" @click="removeItem(item.id)">
            <i class="fa fa-times" />
          </button>
        </div>
      </div>

      <!-- Add More Items Button -->
      <div class="add-more-section-compact">
        <button class="btn-add-more-compact" @click="handleAddMore">
          <i class="fas fa-plus" />
          اضافه کردن قسمت های دیگر
        </button>
      </div>

      <!-- Payment Methods -->
      <div v-if="userLogin" class="payment-section-compact">
        <div class="payment-options-compact">
          <div
            v-for="method in paymentMethods"
            :key="method.value"
            class="payment-option-compact"
            :class="{
              active: paymentMethod === method.value,
              disabled: useWalletCredit,
            }"
            @click="!useWalletCredit && (paymentMethod = method.value)"
          >
            <div class="payment-content-compact">
              <img
                :src="require(`@/assets/images/${method.src}`)"
                class="payment-img-compact"
              />
              <span class="payment-name-compact">{{ method.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Wallet Section -->
      <div v-if="userLogin" class="wallet-section-compact">
        <div class="wallet-info-compact">
          <i class="fas fa-wallet" />
          <span>کیف پول: {{ my_credit }}</span>
          <p v-if="!hasEnoughWalletBalance" class="wallet-balance-error">
            موجودی کافی نیست
          </p>
        </div>
        <div class="custom-control custom-switch">
          <input
            id="use-wallet-compact"
            v-model="useWalletCredit"
            class="custom-control-input"
            type="checkbox"
            :disabled="!hasEnoughWalletBalance"
          />
          <label class="custom-control-label" for="use-wallet-compact" />
        </div>
      </div>

      <!-- Mobile Input for Guests -->
      <div v-if="!userLogin" class="mobile-section-compact">
        <input
          ref="mobileInput"
          v-model="mobileDisplay"
          type="tel"
          placeholder="شماره موبایل"
          class="form-control form-control-sm"
          dir="rtl"
          @input="validateMobile"
        />
        <div v-if="mobileError" class="error-message-compact">
          {{ mobileError }}
        </div>
      </div>

      <!-- Price Summary -->
      <div class="price-summary-compact">
        <div class="price-row-compact">
          <span>جمع:</span>
          <span>{{ formatPrice(subtotalAmount) }} تومان</span>
        </div>
        <div v-if="taxAmount > 0" class="price-row-compact">
          <span>مالیات:</span>
          <span>{{ formatPrice(taxAmount) }} تومان</span>
        </div>
        <div class="price-row-compact total-compact">
          <span>مبلغ قابل پرداخت:</span>
          <span class="total-amount-compact"
            >{{ formatPrice(totalAmount) }} تومان</span
          >
        </div>
      </div>

      <!-- Action Button -->
      <button
        class="btn btn-primary btn-checkout-compact"
        :disabled="!canPurchase || processing"
        @click="handlePurchase"
      >
        <span v-if="processing" class="spinner-border spinner-border-sm" />
        <span v-else>پرداخت</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const THUMB_BASE = 'https://thumb.upera.shop/thumb'
const CDN_POSTERS = 'https://cdn.upera.shop/s3/posters'

export default {
  name: 'BasketPopoverContent',
  data() {
    return {
      cartItems: [],
      processing: false,
      paymentMethod: 'sep',
      mobile: null,
      mobileError: '',
      useWalletCredit: false,
      paymentMethods: [
        {
          value: 'sep',
          name: 'درگاه بانکی',
          src: 'Shaparak.png',
        },
        {
          value: 'directdebit',
          name: 'پرداخت خودکار',
          src: 'directdebit.png',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      my_credit: 'my_credit',
    }),
    userLogin() {
      return this.$auth.loggedIn
    },
    subtotalAmount() {
      return this.cartItems.reduce(
        (sum, item) => sum + (item.tvod_price || 0),
        0
      )
    },
    taxAmount() {
      return Math.floor(this.subtotalAmount * 0.1) // 10% VAT
    },
    totalAmount() {
      return this.subtotalAmount + this.taxAmount
    },
    canPurchase() {
      if (this.userLogin) {
        return this.subtotalAmount > 0
      }
      return this.subtotalAmount > 0
    },
    hasEnoughWalletBalance() {
      return this.myCreditValue >= this.totalAmount
    },
    myCreditValue() {
      if (!this.my_credit) return 0
      const num = this.my_credit.replace(/[^\d.]/g, '')
      return Number(num) || 0
    },

    mobileDisplay: {
      get() {
        return this.convertDigitsToPersian(this.mobile || '')
      },
      set(value) {
        const englishDigits = this.convertDigitsToEnglish(value || '')
        this.mobile = englishDigits.replace(/\s+/g, '')
      },
    },
  },
  watch: {
    useWalletCredit(val) {
      if (val) {
        this.paymentMethod = 'credit'
      } else {
        this.paymentMethod = 'sep'
      }
    },
  },
  mounted() {
    this.loadCart()
    window.addEventListener('storage', this.loadCart)
  },
  beforeDestroy() {
    window.removeEventListener('storage', this.loadCart)
  },
  methods: {
    handleAddMore() {
      this.$emit('close-popover')
    },
    loadCart() {
      try {
        const cart = localStorage.getItem('_cart')
        if (cart) {
          const parsedCart = JSON.parse(cart)
          this.cartItems = parsedCart.content || []
        } else {
          this.cartItems = []
        }
      } catch (error) {
        console.error('Error loading cart:', error)
        this.cartItems = []
      }
    },
    removeItem(itemId) {
      try {
        const cart = localStorage.getItem('_cart')
        let parsedCart = cart ? JSON.parse(cart) : { content: [], amount: 0 }

        parsedCart.content = parsedCart.content.filter(
          (item) => item.id !== itemId
        )
        parsedCart.amount = parsedCart.content.reduce(
          (sum, i) => sum + (i.tvod_price || 0),
          0
        )

        localStorage.setItem('_cart', JSON.stringify(parsedCart))
        this.emitCartChange()
        this.loadCart()
      } catch (error) {
        console.error('Error removing item:', error)
      }
    },
    async handlePurchase() {
      if (!this.ensureGuestMobile()) {
        return
      }

      if (!this.canPurchase) return

      if (this.paymentMethod === 'directdebit') {
        this.$emit('close-popover')
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
        let payload = {
          method: this.paymentMethod,
          cart: [],
          ekran: 0,
          callback_url: 'https://upera.tv/callback',
          ref: 0,
          sms: false,
        }

        if (this.cartItems.length > 0) {
          payload.cart = this.cartItems.map((item) => {
            return item.type === 'movie'
              ? { movie_id: item.id }
              : { episode_id: item.id }
          })
        }

        if (!this.userLogin) {
          payload.mobile = this.mobile
        }

        const endpoint = this.userLogin ? '/get/buy' : '/ghost/get/buy'
        const response = await this.$axios.post(endpoint, payload)

        if (response.data.data.pay_url) {
          window.location.href = response.data.data.pay_url
        }
      } catch (error) {
        console.error('Payment error:', error)
      } finally {
        this.processing = false
      }
    },
    convertDigitsToPersian(value) {
      if (!value) return ''
      const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
      return value.replace(/\d/g, (digit) => persianDigits[Number(digit)])
    },

    convertDigitsToEnglish(value) {
      if (!value) return ''
      const persianDigitMap = {
        '۰': '0',
        '۱': '1',
        '۲': '2',
        '۳': '3',
        '۴': '4',
        '۵': '5',
        '۶': '6',
        '۷': '7',
        '۸': '8',
        '۹': '9',
      }
      return value.replace(/[۰-۹]/g, (char) => persianDigitMap[char] || char)
    },

    validateMobile() {
      const mobileRegex = /^09[0-9]{9}$/
      const normalizedMobile = (this.mobile || '').replace(/\s+/g, '')
      this.mobile = normalizedMobile

      if (!normalizedMobile) {
        this.mobileError = 'شماره موبایل الزامی است'
      } else if (!mobileRegex.test(normalizedMobile)) {
        this.mobileError = 'شماره موبایل معتبر نیست'
      } else {
        this.mobileError = ''
      }
    },

    ensureGuestMobile() {
      if (this.userLogin) {
        return true
      }

      this.validateMobile()

      if (this.mobileError) {
        this.$nextTick(() => {
          this.$refs.mobileInput?.focus()
        })
        return false
      }

      return true
    },
    getContentTitle(item) {
      const en = item.name || item.title
      const fa = item.name_fa || item.title_fa
      return this.chooseLang(en, fa)
    },
    chooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa
      return en
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
    posterSrc(filename) {
      if (!filename) return ''
      const { w, h } = { w: 80, h: 120 }
      return `${THUMB_BASE}?w=${w}&h=${h}&q=100&a=c&src=${CDN_POSTERS}/${filename}`
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
  },
}
</script>

<style scoped>
.basket-popover-content {
  min-width: 500px;
  max-width: 500px;
  direction: rtl;
  max-height: 81vh;
  overflow-y: auto;
  padding: 1.25rem;
}

.empty-basket {
  text-align: center;
  padding: 2rem 1rem;
  color: #6c757d;
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #4a4a4a !important;
}

.basket-with-items {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.items-list-compact {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 212px;
  overflow-y: auto;
  padding-right: 4px;
  padding-left: 0.5rem !important;
}

.items-list-compact::-webkit-scrollbar {
  width: 4px;
}

.items-list-compact::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px !important;
}

.basket-item-compact {
  display: flex;
  gap: 0.75rem;
  padding: 0.75rem;
  background: #f8f9fa;
  border-radius: 10px;
  align-items: center;
}

.item-image-compact {
  width: 60px;
  height: 90px;
  flex-shrink: 0;
  border-radius: 6px;
  overflow: hidden;
}

.item-image-compact img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-details-compact {
  flex: 1;
  min-width: 0;
}

.item-title-compact {
  font-weight: 600;
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-info-compact {
  font-size: 0.85rem;
  color: #6c757d;
  margin-bottom: 0.25rem;
}

.item-price-compact {
  font-weight: 600;
  font-size: 0.95rem;
  color: #ff6633;
}

.btn-remove-compact {
  background: none;
  border: none;
  color: #dc3545;
  cursor: pointer;
  padding: 0.375rem;
  border-radius: 6px;
  flex-shrink: 0;
  font-size: 1.1rem;
}

.btn-remove-compact:hover {
  background-color: #f8d7da;
}

.add-more-section-compact {
  margin-top: 0.5rem;
}

.btn-add-more-compact {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: #ffffff;
  border: 2px solid #ff6633;
  border-radius: 10px;
  color: #ff6633;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  font-size: 0.95rem;
  font-weight: 600;
}

.btn-add-more-compact:hover {
  background: #fff5f2;
  border-color: #ff4400;
  color: #ff4400;
}

.payment-section-compact {
  padding: 0.5rem 0;
  border-top: 1px solid #e9ecef;
}

.payment-options-compact {
  display: flex;
  gap: 0.5rem;
}

.payment-option-compact {
  flex: 1;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  padding: 0.65rem;
  cursor: pointer;
  transition: all 0.2s;
  background: white;
}

.payment-option-compact:hover {
  border-color: #ff6633;
}

.payment-option-compact.active {
  border-color: #ff6633;
  background: #fff5f2;
}

.payment-option-compact.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.payment-content-compact {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.payment-img-compact {
  height: 32px;
  object-fit: contain;
}

.payment-name-compact {
  font-size: 0.8rem;
  font-weight: 600;
  color: #333;
}

.wallet-section-compact {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: #f8f9fa;
  border-radius: 10px;
}

.wallet-info-compact {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: #333;
}

.wallet-info-compact i {
  color: #ff6633;
}

.mobile-section-compact {
  padding: 0.5rem 0;
}

.mobile-section-compact .form-control {
  font-size: 0.85rem;
  padding: 0.5rem;
}

.error-message-compact {
  color: #dc3545;
  font-size: 0.7rem;
  margin-top: 0.25rem;
}

.price-summary-compact {
  padding: 0.5rem 0;
  border-top: 1px solid #e9ecef;
}

.price-row-compact {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.35rem 0;
  font-size: 0.95rem;
  color: #333;
}

.price-row-compact.total-compact {
  padding-top: 0.65rem;
  border-top: 1px solid #e9ecef;
  margin-top: 0.35rem;
  font-weight: 600;
}

.total-amount-compact {
  color: #ff6633;
  font-size: 1.15rem;
}

.btn-checkout-compact {
  width: 100%;
  border-radius: 10px;
  font-weight: 600;
  padding: 0.75rem;
  font-size: 1rem;
}

/* Dark mode support */
.theme-dark .basket-popover-content {
  background: #1e1e1e;
}

.theme-dark .empty-basket {
  color: #979797;
}

.theme-dark .basket-item-compact {
  background: #2d2d2d;
  border: 1px solid #3a3a3a;
}

.theme-dark .item-title-compact {
  color: #f2f2f2;
}

.theme-dark .item-info-compact {
  color: #979797;
}

.theme-dark .item-price-compact {
  color: #ff6633;
}

.theme-dark .btn-remove-compact {
  color: #ff6666;
}

.theme-dark .btn-remove-compact:hover {
  background-color: #3a2419;
}

.btn-remove-compact i {
  color: #ff6633 !important;
}

.theme-dark .btn-add-more-compact {
  background: white;
  border-color: #ff6633;
  color: #ff6633;
}

.theme-dark .btn-add-more-compact:hover {
  background: white;
  border-color: #ff8866;
  color: #ff8866;
}

.theme-dark .payment-section-compact {
  border-top-color: #3a3a3a;
}

.theme-dark .payment-option-compact {
  background: #2d2d2d;
  border-color: #3a3a3a;
}

.theme-dark .payment-option-compact:hover {
  border-color: #ff6633;
  box-shadow: 0 2px 8px rgba(255, 102, 51, 0.15);
}

.theme-dark .payment-option-compact.active {
  background: #3a2419;
  border-color: #ff6633;
}

.theme-dark .payment-name-compact {
  color: #f2f2f2;
}

.theme-dark .wallet-section-compact {
  background: #2d2d2d;
}

.theme-dark .wallet-info-compact {
  color: #f2f2f2;
}

.theme-dark .wallet-info-compact i {
  color: #ff6633;
}

.theme-dark .mobile-section-compact .form-control {
  background-color: #2d2d2d;
  border-color: #3a3a3a;
  color: #f2f2f2;
}

.theme-dark .mobile-section-compact .form-control:focus {
  background-color: #2d2d2d;
  border-color: #ff6633;
  box-shadow: 0 0 0 0.2rem rgba(255, 102, 51, 0.25);
}

.theme-dark .mobile-section-compact .form-control::placeholder {
  color: #888;
}

.theme-dark .error-message-compact {
  color: #ff6666;
}

.theme-dark .price-summary-compact {
  border-top-color: #3a3a3a;
}

.theme-dark .price-row-compact {
  color: #f2f2f2;
}

.theme-dark .price-row-compact.total-compact {
  border-top-color: #3a3a3a;
  color: #f6f6f6;
}

.theme-dark .total-amount-compact {
  color: #ff6633;
}

.theme-dark .btn-checkout-compact {
  background-color: #ff6633;
  border-color: #ff6633;
}

.theme-dark .btn-checkout-compact:hover:not(:disabled) {
  background-color: #ff8866;
  border-color: #ff8866;
}

.theme-dark .btn-checkout-compact:disabled {
  background-color: #4a4a4a;
  border-color: #4a4a4a;
  color: #888;
}

.theme-dark .items-list-compact::-webkit-scrollbar-track {
  background: #2d2d2d;
}

.theme-dark .items-list-compact::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px !important;
}

.theme-dark .items-list-compact::-webkit-scrollbar-thumb:hover {
  background: #888;
  border-radius: 10px !important;
}

@media (max-width: 768px) {
  .basket-popover-content {
    padding: 0 !important;
    max-width: 100%;
    min-width: 100%;
    width: 100%;
    margin: auto;
  }
  .empty-basket {
    text-align: center;
    padding: 1rem 0;
    color: #6c757d;
    margin: auto;
  }
}

@media (max-width: 576px) {
  .basket-popover-content {
    padding: 0 !important;
    max-width: 100%;
    min-width: 100%;
    width: 100%;
    margin: auto;
  }
  .empty-basket {
    text-align: center;
    padding: 1rem 0;
    color: #6c757d;
    margin: auto;
  }
}

.wallet-balance-error {
  color: #dc3545;
  font-size: 0.8rem;
  text-align: right;
  margin-right: 1rem;
  margin-left: auto;
  margin-top: 1rem;
  padding-left: 0;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-left: 1px solid #dc3545;
  border-radius: 0.25rem;
  background-color: #f8d7da;
  padding: 0.25rem 0.5rem;
}
</style>
