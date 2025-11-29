<template>
  <transition name="fade">
    <button
      v-if="isVisible && shouldShow"
      class="subscription-floating-button"
      @click="handleSubscriptionClick"
    >
      <i class="fa fa-money-bill" />
      <span class="button-text">
        {{ buttonText }}
        <span v-if="showHalfPriceLabel" class="half-price-label">
          ({{ usageVolumeText }})
        </span>
      </span>
    </button>
  </transition>
</template>

<script>
export default {
  name: 'SubscriptionButton',
  props: {
    fullrateData: {
      type: Object,
      default: () => ({
        rate: 0.5,
        show_subscription: 0,
        fa: {
          title: 'نیم بها',
          alternative: 'نیم بها',
        },
        en: {
          title: 'Half-priced',
          alternative: 'Half-priced',
        },
      }),
    },
    contentId: {
      type: [String, Number],
      required: true,
    },
    contentType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isVisible: true,
      hideTimer: null,
    }
  },
  computed: {
    shouldShow() {
      return this.fullrateData && this.fullrateData.show_subscription === 1
    },
    showHalfPriceLabel() {
      return this.fullrateData.rate === 1
    },
    buttonText() {
      return this.$i18n.locale === 'fa' ? 'خرید اشتراک' : 'Buy Subscription'
    },
    usageVolumeText() {
      if (this.$i18n.locale === 'fa') {
        return `حجم مصرفی: ${this.fullrateData.fa?.title || 'نیم بها'}`
      }
      return `Usage Volume: ${this.fullrateData.en?.title || 'Half-priced'}`
    },
  },
  mounted() {
    // Hide button after 10 seconds
    this.hideTimer = setTimeout(() => {
      this.isVisible = false
    }, 10000)
  },
  beforeDestroy() {
    // Clear timer when component is destroyed
    if (this.hideTimer) {
      clearTimeout(this.hideTimer)
    }
  },
  methods: {
    handleSubscriptionClick() {
      this.$emit('subscription-click', {
        id: this.contentId,
        type: this.contentType,
      })
    },
  },
}
</script>

<style scoped>
.subscription-floating-button {
  position: absolute;
  bottom: 113px;
  right: 20px;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: linear-gradient(135deg, #1b6be5 0%, #0d4fa3 100%);
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(27, 107, 229, 0.4);
  white-space: nowrap;
}

.subscription-floating-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(27, 107, 229, 0.6);
  background: linear-gradient(135deg, #2575ed 0%, #1558b8 100%);
}

.subscription-floating-button:active {
  transform: translateY(0);
}

.subscription-floating-button i {
  font-size: 16px;
}

.button-text {
  display: flex;
  flex-direction: column;
  align-items: end;
  line-height: 1.3;
}

.half-price-label {
  font-size: 11px;
  font-weight: 500;
  opacity: 0.9;
  margin-top: 2px;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Responsive adjustments */
@media (max-width: 767.98px) {
  .subscription-floating-button {
    bottom: 70px;
    right: 12px;
    padding: 10px 16px;
    font-size: 13px;
  }

  .subscription-floating-button i {
    font-size: 14px;
  }

  .half-price-label {
    font-size: 10px;
  }
}

@media (max-width: 575.98px) {
  .subscription-floating-button {
    bottom: 60px;
    right: 10px;
    padding: 8px 14px;
    font-size: 12px;
    gap: 6px;
  }

  .subscription-floating-button i {
    font-size: 13px;
  }

  .button-text {
    font-size: 12px;
  }

  .half-price-label {
    font-size: 9px;
  }
}

/* When video player is fullscreen */
:fullscreen .subscription-floating-button,
::backdrop .subscription-floating-button {
  bottom: 100px;
  right: 30px;
}
</style>
