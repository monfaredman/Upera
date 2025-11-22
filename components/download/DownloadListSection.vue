<template>
  <div>
    <div
      v-for="item in downloadsList"
      :key="item.id"
      class="download-links-item"
    >
      <div class="row">
        <div class="col-sm-6">
          <div class="row">
            <!-- Item Info -->
            <div v-if="screening.ekran" class="col-9">
              <div class="download-quality font-weight-bold">بلیط اکران</div>
              <div class="download-suitable">تماشای آنلاین</div>
            </div>
            <div
              v-else-if="item.isfolder && contentInfo.type != 'series'"
              class="col-9"
            >
              <div class="download-quality font-weight-bold">
                {{ $t('download.all_qualities') }}
              </div>
              <div class="download-suitable">
                {{ item.info }}
              </div>
            </div>
            <div v-else class="col-9">
              <div class="download-quality font-weight-bold">
                {{ item.quality }}
              </div>
              <div v-show="showInfo" class="download-suitable">
                {{ item.info }}
              </div>
            </div>

            <!-- Item Size -->
            <div class="col-3 d-flex justify-end align-items-end text-right">
              <div v-if="item.isfolder == 0" class="download-size">
                {{ item.size }}
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="d-flex h-100 align-items-end">
            <!-- Owned Folder Items -->
            <div
              v-if="item.owned == 1 && item.isfolder == 1 && !screening.ekran"
              class="download-full-link"
            >
              <button class="btn btn-info btn-block">
                خریداری شده
                <i class="icon-download" />
              </button>
            </div>

            <!-- Screening Play Button -->
            <div
              v-else-if="item.owned == 1 && item.isfolder == 1"
              class="download-full-link"
            >
              <button
                class="btn btn-secondary btn-block"
                @click="$emit('play', item)"
              >
                تماشا
                <i class="icon-play" />
              </button>
            </div>

            <!-- Owned Single Items -->
            <div
              v-else-if="item.owned == 1"
              class="d-flex h-100 align-items-end"
            >
              <div class="download-link">
                <button
                  class="btn btn-secondary btn-block"
                  @click="$emit('download', item)"
                >
                  {{ $t('show.download') }}
                  <i class="icon-download" />
                </button>
              </div>
              <div class="copy-link">
                <button
                  class="btn btn-copy btn-block"
                  @click="$emit('copy-download', item)"
                >
                  کپی لینک
                </button>
              </div>
            </div>

            <!-- In Cart Items -->
            <div v-else-if="isInCart(item)" class="download-full-link">
              <button
                class="btn btn-secondary btn-block"
                @click="$emit('remove-from-cart', item)"
              >
                {{ $t('download.cancel') }}
                <i class="icon-download" />
              </button>
            </div>

            <!-- Available for Purchase -->
            <div v-else class="d-flex h-100 align-items-end">
              <div class="download-link">
                <button
                  class="btn btn-danger btn-block"
                  @click="$emit('add-to-cart', item)"
                >
                  <span v-if="presale">{{ $t('download.presale') }}</span>
                  <span v-else>{{ $t('download.buy') }}</span>
                  <span v-if="screening.ekran"> بلیط</span>
                  <span v-else> و دانلود</span>
                  <i v-if="screening.ekran" class="fa fa-ticket-alt pr-2" />
                  <i v-else class="icon-download" />
                </button>
              </div>

              <div class="copy-link" :class="priceAlignment">
                <span class="overlay_price font-weight-light">
                  <span class="overlay_price_label position-relative">
                    <i class="icon-toman" />
                  </span>
                  <span>{{ formatPrice(item.amount) }}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DownloadListSection',
  props: {
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
    screening: {
      type: Object,
      default: () => ({}),
    },
    presale: {
      type: Boolean,
      default: false,
    },
    priceAlignment: {
      type: String,
      default: 'text-left',
    },
    showInfo: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    isInCart(item) {
      return this.cart.some((cartItem) => cartItem.itemid === item.id)
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
  emits: [
    'add-to-cart',
    'remove-from-cart',
    'download',
    'copy-download',
    'play',
  ],
}
</script>
