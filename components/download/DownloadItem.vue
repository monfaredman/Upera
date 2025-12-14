<template>
  <div class="download-links-item">
    <div class="row">
      <div class="col-sm-6">
        <div class="row">
          <div class="col-9">
            <div class="download-quality font-weight-bold">
              <a v-if="itemLink" href="" @click.prevent="onItemClick">
                {{ itemName }}
              </a>
              <span v-else>{{ itemName }}</span>
            </div>
            <div v-if="showInfo" class="download-suitable">
              {{ itemInfo }}
            </div>
          </div>
          <div class="col-3 d-flex justify-end align-items-end text-right">
            <div v-if="itemSize" class="download-size">
              {{ itemSize }}
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="d-flex h-100 align-items-end">
          <slot name="actions">
            <div class="download-link">
              <button class="btn btn-danger btn-block" @click="onAction">
                <slot name="action-text">خرید و دانلود</slot>
                <i :class="actionIcon" />
              </button>
            </div>
          </slot>

          <div class="copy-link" :class="priceAlignment">
            <span v-if="showPrice" class="overlay_price font-weight-light">
              <span class="overlay_price_label position-relative">
                <i class="icon-toman" />
              </span>
              <span>{{ formattedPrice }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DownloadItem',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    itemLink: {
      type: Boolean,
      default: false,
    },
    itemName: {
      type: String,
      default: '',
    },
    itemInfo: {
      type: String,
      default: '',
    },
    itemSize: {
      type: String,
      default: '',
    },
    showInfo: {
      type: Boolean,
      default: true,
    },
    showPrice: {
      type: Boolean,
      default: true,
    },
    priceAlignment: {
      type: String,
      default: 'text-left',
      validator: (value) => ['text-left', 'text-right'].includes(value),
    },
    actionIcon: {
      type: String,
      default: 'icon-download',
    },
  },
  computed: {
    formattedPrice() {
      if (!this.item.amount) return ''
      const amount = String(this.item.amount)
      const length = amount.length

      if (length === 4)
        return amount.substring(0, 1) + '.' + amount.substring(1)
      else if (length === 5)
        return amount.substring(0, 2) + '.' + amount.substring(2)
      else return amount.substring(0, 3) + '.' + amount.substring(3)
    },
  },
  methods: {
    onItemClick() {
      this.$emit('item-click', this.item)
    },
    onAction() {
      this.$emit('action', this.item)
    },
  },
}
</script>
