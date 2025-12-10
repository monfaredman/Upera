<template>
  <div>
    <!-- Cart Items Section -->
    <div v-if="showCartSection" class="download-links-body" :class="bodyClass">
      <!-- Season Selector - Direct HTML, no component -->
      <div v-if="hasSeasons" class="row py-4 download-options-wrapper">
        <div v-if="seasonCount > 1" class="col-sm-6">
          <b-dropdown block :text="seasonTitle" variant="dark">
            <b-dropdown-item
              v-for="(season, index) in seasons"
              :key="index"
              href="#"
              :active="selectedSeasonId == index"
              @click.prevent="
                $emit('season-selected', {
                  seasonId: index,
                  firstEpisodeId: season[0]?.id,
                })
              "
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
              @click.prevent="$emit('episode-selected', episode.id)"
            >
              قسمت {{ episode.episode_number }}
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </div>

      <!-- Mobile Input - Direct HTML, no component -->
      <div
        v-if="showMobileInput"
        class="row download-options-wrapper"
        :class="{ 'py-4': !hasSeasons }"
      >
        <div class="col-12">
          <div class="position-relative">
            <label for="premobile">{{ $t('new.enter_mobile') }}</label>
            <b-form-input
              id="premobile"
              ref="focusMe"
              v-model="mobile"
              style="text-align: left !important"
              name="mobile"
              dir="ltr"
              class="form-control large text-right mobile-input"
              :placeholder="$t('download.enter_mobile')"
              :title="$t('download.enter_mobile')"
              autofocus
              @keyup.enter="$emit('buy-keyup', { mobile })"
              @update="$emit('buy', { mobile })"
            />
            <div v-if="typeof errors === 'string'" class="text-danger">
              {{ errors }}
            </div>
            <div v-else-if="errors && errors.mobile" class="text-danger">
              {{ errors.mobile[0] }}
            </div>
            <div v-else class="invalid-feedback">
              {{ $t('new.enter_correctly') }}
            </div>
          </div>
        </div>
      </div>

      <div
        id="download-links-items"
        class="download-links-items"
        :class="itemsClass"
      >
        <!-- Loading Spinner - Direct HTML -->
        <div v-if="isLoading" class="col-12">
          <svg
            id="L9"
            class="svg-loader"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enable-background="new 0 0 0 0"
            xml:space="preserve"
          >
            <path
              fill="#373737"
              d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
              transform="rotate(109.69 50 50)"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>

        <!-- Message Display -->
        <div v-if="message" class="col-12">
          <p class="text-danger">{{ message }}</p>
        </div>

        <!-- Screening Notice -->
        <div v-if="screening.ekran" class="col-12 text-info text-justify pt-4">
          توجه: به دلیل حفظ رعایت حقوق صاحبان اثر، فیلم‌های در حال اکران در
          سینما آنلاین قابل دانلود نیست.<br /><br />
          مدت زمان سانس {{ screening.ekran_hour }} ساعت
          <span v-show="screening.ekran_owned" class="text-danger"
            ><br />زمان باقیمانده تا پایان سانس شما:
            {{ screening.owned_period_end }} ساعت</span
          >
          <span class="text-danger"
            ><br />آخرین روز اکران: {{ screening.ekran_period_end }}</span
          >
          <br /><br />
        </div>

        <!-- Tax Notice -->
        <div v-if="showTaxNotice" class="col-12">
          <p class="col-12 text-danger small">
            + {{ totalAmount * 0.1 }} {{ $t('download.toman') }} (10 درصد مالیات
            بر ارزش افزوده)
          </p>
        </div>

        <!-- Cart Items -->
        <div v-if="!isLoading">
          <div
            v-for="item in cart"
            :key="String(item.itemid)"
            class="download-links-item"
          >
            <div class="row">
              <div class="col-sm-6">
                <div class="row">
                  <div class="col-9">
                    <div class="download-quality font-weight-bold">
                      <a href="" @click.prevent="$emit('item-navigate', item)">
                        {{ item.name }}
                      </a>
                    </div>
                    <div class="download-suitable">
                      {{ item.quality }}
                    </div>
                  </div>
                  <div
                    class="col-3 d-flex justify-end align-items-end text-right"
                  >
                    <div v-if="item.size" class="download-size">
                      {{ item.size }}
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="d-flex h-100 align-items-end">
                  <div class="download-link">
                    <a
                      href=""
                      class="text-sm text-danger"
                      @click.prevent="$emit('remove-from-cart', item)"
                    >
                      حذف از سبد خرید
                    </a>
                  </div>

                  <div class="copy-link" :class="priceAlignment">
                    <span class="overlay_price font-weight-light"
                      ><span class="overlay_price_label position-relative"
                        ><i class="icon-toman" /></span
                      ><span>{{ formatPrice(item.amount) }}</span></span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Payment Methods - Direct HTML -->
        <PaymentMethodsSection
          v-if="showPaymentMethods"
          :selected-method="paymentMethod"
          :errors="errors"
          @update:selectedMethod="$emit('payment-method-change', $event)"
        />
      </div>
    </div>

    <!-- Download List Section -->
    <div v-else>
      <div class="download-links-body" :class="emptyBodyClass">
        <!-- Season Selector for empty state -->
        <div v-if="hasSeasons" class="row py-4 download-options-wrapper">
          <div v-if="seasonCount > 1" class="col-sm-6">
            <b-dropdown block :text="seasonTitle" variant="dark">
              <b-dropdown-item
                v-for="(season, index) in seasons"
                :key="index"
                href="#"
                :active="selectedSeasonId == index"
                @click.prevent="
                  $emit('season-selected', {
                    seasonId: index,
                    firstEpisodeId: season[0]?.id,
                  })
                "
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
                @click.prevent="$emit('episode-selected', episode.id)"
              >
                قسمت {{ episode.episode_number }}
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </div>

        <div
          id="download-links-items"
          class="download-links-items"
          :class="emptyItemsClass"
        >
          <!-- Loading -->
          <div v-if="isLoading" class="col-12">
            <svg
              id="L9"
              class="svg-loader"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              enable-background="new 0 0 0 0"
              xml:space="preserve"
            >
              <path
                fill="#373737"
                d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                transform="rotate(109.69 50 50)"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="1s"
                  from="0 50 50"
                  to="360 50 50"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>

          <!-- Download Info -->
          <DownloadInfoSection
            :content-info="contentInfo"
            :screening="screening"
            :presale="presale"
            :pass="pass"
            :fullrate-data="fullrateData"
            :traffic="traffic"
            :ftb2="ftb2"
            :downloads-list="downloadsList"
            :cart="cart"
            :cart-loading="cartLoading"
            :notes="notes"
          />

          <!-- Download List -->
          <DownloadListSection
            v-if="showDownloadList"
            :downloads-list="downloadsList"
            :cart="cart"
            :content-info="contentInfo"
            :screening="screening"
            :presale="presale"
            :price-alignment="priceAlignment"
            @add-to-cart="$emit('add-to-cart', $event)"
            @remove-from-cart="$emit('remove-from-cart', $event)"
            @download="$emit('download', $event)"
            @copy-download="$emit('copy-download', $event)"
            @play="$emit('play', $event)"
          />
        </div>
      </div>

      <!-- Action Buttons - Direct HTML -->
      <ActionButtonsSection
        v-if="!isLoading"
        :show-play="playButton"
        :show-sub="subButton"
        :show-free="showFree"
        :show-buy="showBuy"
        :ussd="ussd"
        :content-info="contentInfo"
        :fullrate-data="fullrateData"
        @play="$emit('play-content')"
        @subscribe="$emit('subscribe')"
        @free-download="$emit('free-download')"
        @buy-download="$emit('buy-download')"
        @ussd-call="$emit('ussd-call')"
      />
    </div>
  </div>
</template>

<script>
// These are at the same level, not children
import PaymentMethodsSection from '@/components/download/PaymentMethodsSection'
import DownloadInfoSection from '@/components/download/DownloadInfoSection'
import DownloadListSection from '@/components/download/DownloadListSection'
import ActionButtonsSection from '@/components/download/ActionButtonsSection'

export default {
  name: 'DownloadBody',
  components: {
    // These are sibling components, not children
    PaymentMethodsSection,
    DownloadInfoSection,
    DownloadListSection,
    ActionButtonsSection,
  },
  props: {
    // ... same props as before
    hasItemsInCart: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    downloadsList: {
      type: Array,
      default: () => [],
    },
    cart: {
      type: Array,
      default: () => [],
    },
    contentInfo: {
      type: Object,
      default: () => ({}),
    },
    user: {
      type: Object,
      default: () => ({}),
    },
    paymentMethod: {
      type: String,
      default: 'saman3',
    },
    errors: {
      type: [String, Object],
      default: null,
    },
    isStaticModal: {
      type: Boolean,
      default: false,
    },
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
    screening: {
      type: Object,
      default: () => ({}),
    },
    totalAmount: {
      type: Number,
      default: 0,
    },
    presale: {
      type: Boolean,
      default: false,
    },
    pass: {
      type: String,
      default: '',
    },
    fullrateData: {
      type: Object,
      default: () => ({}),
    },
    traffic: {
      type: Number,
      default: 0,
    },
    ftb2: {
      type: Number,
      default: 0,
    },
    cartLoading: {
      type: Boolean,
      default: false,
    },
    notes: {
      type: String,
      default: '',
    },
    playButton: {
      type: Boolean,
      default: false,
    },
    subButton: {
      type: Boolean,
      default: false,
    },
    showFree: {
      type: Boolean,
      default: false,
    },
    showBuy: {
      type: Boolean,
      default: false,
    },
    ussd: {
      type: String,
      default: '',
    },
    divCount: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      mobile: null,
      message: null,
    }
  },
  computed: {
    showCartSection() {
      return (
        !this.cartLoading &&
        this.downloadsList.length > 0 &&
        this.cart.length > 0 &&
        this.hasItemsInCart
      )
    },

    hasSeasons() {
      return Object.keys(this.seasons).length > 0
    },

    seasonCount() {
      return Object.keys(this.seasons).length
    },

    currentSeasonEpisodes() {
      return this.seasons[this.selectedSeasonId] || []
    },

    seasonTitle() {
      return `فصل ${this.selectedSeasonId}`
    },

    showMobileInput() {
      return !this.user.loggedIn && this.totalAmount > 0
    },

    priceAlignment() {
      return this.isStaticModal ? 'text-right' : 'text-left'
    },

    bodyClass() {
      return {
        'download-links-body2':
          (this.user.loggedIn || !this.totalAmount) && !this.hasSeasons,
      }
    },

    itemsClass() {
      return {
        'download-links-items2':
          !this.user.loggedIn && this.totalAmount && !this.hasSeasons,
        'download-links-season2':
          !this.user.loggedIn && this.totalAmount && this.hasSeasons,
        'download-links-season':
          (this.user.loggedIn || !this.totalAmount) && this.hasSeasons,
        'download-links-season-num2': this.seasonCount === 1,
      }
    },

    emptyBodyClass() {
      const count = this.divCount || 0
      return {
        'download-links-body2': !this.hasSeasons,
        'download-links-0': count === 0,
        'download-links-2': count === 2,
        'download-links-3': count === 3,
      }
    },

    emptyItemsClass() {
      return {
        'download-links-season-num1': this.seasonCount === 1,
      }
    },

    showPaymentMethods() {
      return this.cart.length > 0
    },

    showTaxNotice() {
      return this.totalAmount > 0 && this.user.tax
    },

    showDownloadList() {
      return (
        !this.cartLoading &&
        this.downloadsList.length > 0 &&
        (this.hasOwnedItems || !this.hasItemsInCart)
      )
    },

    hasOwnedItems() {
      return this.downloadsList.some((item) => item.owned === 1)
    },

    episodeDropdownClass() {
      return {
        'col-sm-6': this.seasonCount > 1,
        'col-sm-12': this.seasonCount <= 1,
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
  mounted() {
    this.computeMobile()
    window.addEventListener('resize', this.computeMobile)
  },

  beforeDestroy() {
    // if Vue 2
    window.removeEventListener('resize', this.computeMobile)
  },

  methods: {
    computeMobile() {
      const isMobile = window.innerWidth <= 768
      this.$emit('update:mobile', isMobile)
    },
    isEpisodeActive(episode) {
      return (
        this.contentInfo.type === 'episode' &&
        this.contentInfo.itemdata.episode_number === episode.episode_number
      )
    },

    formatPrice(amount) {
      if (!amount) return ''
      const amountStr = String(amount)
      const length = amountStr.length

      if (length === 4)
        return amountStr.substring(0, 1) + '.' + amountStr.substring(1)
      else if (length === 5)
        return amountStr.substring(0, 2) + '.' + amountStr.substring(2)
      else if (length === 3) return amountStr
      else return amountStr.substring(0, 3) + '.' + amountStr.substring(3)
    },
  },
}
</script>
