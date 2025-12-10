<template>
  <div class="download-links-footer" :class="footerClass">
    <div class="download-links-item">
      <div class="row">
        <div class="col-sm-6">
          <!-- Total Amount Display - Direct HTML -->
          <div class="font-weight-bold d-none d-sm-block">
            {{ $t('download.amount_payable') }}:
            <span v-if="user.tax">
              <span class="overlay_price font-weight-light">
                <span class="overlay_price_label position-relative">
                  <i class="icon-toman" />
                </span>
                <span>{{ formatPrice(totalAmount + totalAmount * 0.1) }}</span>
              </span>
            </span>
            <span v-else>
              <span class="overlay_price font-weight-light">
                <span class="overlay_price_label position-relative">
                  <i class="icon-toman" />
                </span>
                <span>{{ formatPrice(totalAmount) }}</span>
              </span>
            </span>

            <!-- Loading Spinner - Direct HTML -->
            <svg
              v-if="isLoading"
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
        </div>
        <div class="col-sm-6">
          <!-- Payment Button - Direct HTML -->
          <button
            v-if="isLoading"
            class="btn btn-secondary btn-block"
            type="button"
            disabled
          >
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            />
            <span class="sr-only">Loading...</span>
          </button>
          <button
            v-else-if="isDisabled || !totalAmount"
            disabled
            class="btn btn-secondary btn-block"
          >
            <span v-if="!hasScreening">{{ $t('download.pay_download') }}</span>
            <span v-else>پرداخت و تماشا</span>
            <i class="fa fa-money-bill pr-2" />
          </button>
          <button
            v-else
            class="btn btn-secondary btn-block"
            @click="$emit('payment')"
          >
            <span v-if="!hasScreening">{{ $t('download.pay_download') }}</span>
            <span v-else>پرداخت و تماشا</span>
            <i class="fa fa-money-bill pr-2" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DownloadFooter',
  props: {
    totalAmount: {
      type: Number,
      default: 0,
    },
    user: {
      type: Object,
      default: () => ({}),
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    hasScreening: {
      type: [Boolean, Number],
      default: false,
    },
    divCount: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    footerClass() {
      const count = this.divCount || 1
      return {
        'footer-0': count === 0,
        'footer-1': count === 1,
      }
    },
  },
  methods: {
    formatPrice(amount) {
      if (!amount) return ''
      const amountStr = String(amount)
      const length = amountStr.length

      if (length === 4) {
        return amountStr.substring(0, 1) + '.' + amountStr.substring(1)
      } else if (length === 5) {
        return amountStr.substring(0, 2) + '.' + amountStr.substring(2)
      } else if (length === 3) {
        return amountStr
      } else {
        return amountStr.substring(0, 3) + '.' + amountStr.substring(3)
      }
    },
  },
}
</script>
