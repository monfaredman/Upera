<template>
  <div class="download-links-footer" :class="footerClass">
    <!-- Success State Footer -->
    <div v-if="success" class="download-links-item">
      <div class="row">
        <!-- Main Button -->
        <div v-if="mainButton" :class="buttonColClass">
          <button class="btn btn-main btn-block" @click="handleMainAction">
            <i class="fa pl-2" :class="mainButton.iconClass" />
            {{ mainButton.text }}
          </button>
        </div>

        <!-- Secondary Button -->
        <div v-if="secondaryButton" :class="buttonColClass">
          <button
            class="btn btn-light btn-block"
            @click="handleSecondaryAction"
          >
            <i class="fa pl-2" :class="secondaryButton.iconClass" />
            {{ secondaryButton.text }}
          </button>
        </div>

        <!-- React Native Back to App Button (Same Row for specific purchase types) -->
        <div
          v-if="isReactNative && shouldShowReactNativeInSameRow"
          class="col-6"
        >
          <a
            :href="`uperaapp://callback?${queryString}`"
            class="btn btn-light btn-block"
          >
            <i class="fa pl-2 fa-mobile-alt" />
            بازگشت به اپلیکیشن
          </a>
        </div>
      </div>

      <!-- React Native Back to App Button (Separate Row for other cases) -->
      <div
        v-if="isReactNative && !shouldShowReactNativeInSameRow"
        class="row mt-2"
      >
        <div class="col-12">
          <a
            :href="`uperaapp://callback?${queryString}`"
            class="btn btn-light btn-block"
          >
            <i class="fa pl-2 fa-mobile-alt" />
            بازگشت به اپلیکیشن
          </a>
        </div>
      </div>
    </div>

    <!-- Error State Footer -->
    <div v-else-if="!success" class="download-links-item">
      <!-- Check Again State -->
      <div v-if="checkagain" class="row">
        <div :class="'col-6'">
          <a
            href=""
            class="btn btn-main btn-block"
            @click.prevent="$emit('retry-payment')"
          >
            <i class="fa fa-money-bill pl-2" />
            پرداخت مجدد
          </a>
        </div>
        <div :class="'col-6'">
          <a
            href=""
            class="btn btn-light btn-block"
            @click.prevent="$emit('check-payment')"
          >
            <i class="fa fa-check-double pl-2" />
            بررسی پرداخت
          </a>
        </div>
        <!-- React Native Back to App Button for Check Again State -->
        <div v-if="isReactNative" class="col-12 mt-2">
          <a
            :href="`uperaapp://callback?${queryString}`"
            class="btn btn-light btn-block"
          >
            <i class="fa pl-2 fa-mobile-alt" />
            بازگشت به اپلیکیشن
          </a>
        </div>
      </div>

      <!-- Show Login State -->
      <div v-else-if="showLogin" class="row">
        <div :class="isReactNative ? 'col-6' : 'col-12'">
          <button class="btn btn-main btn-block" @click="$emit('login')">
            <i class="fa fa-sign-in-alt pl-2" />
            ورود به سایت
          </button>
        </div>

        <!-- React Native Back to App Button for Show Login State -->
        <div v-if="isReactNative" class="col-6">
          <a
            :href="`uperaapp://callback?${queryString}`"
            class="btn btn-light btn-block"
          >
            <i class="fa pl-2 fa-mobile-alt" />
            بازگشت به اپلیکیشن
          </a>
        </div>
      </div>

      <!-- Default Error State -->
      <div v-else class="row">
        <div class="col-6">
          <a
            href=""
            class="btn btn-main btn-block"
            @click.prevent="$emit('check-payment')"
          >
            <i class="fa fa-check-double pl-2" />
            بررسی پرداخت
          </a>
        </div>
        <div class="col-6">
          <a
            href=""
            class="btn btn-light btn-block"
            @click.prevent="$emit('retry-payment')"
          >
            <i class="fa fa-money-bill pl-2" />
            پرداخت مجدد
          </a>
        </div>
      </div>

      <!-- React Native Back to App Button for Default Error State (Separate Row) -->
      <div v-if="isReactNative && !checkagain && !showLogin" class="row mt-2">
        <div class="col-12">
          <button
            class="btn btn-light btn-block"
            @click="handleReactNativeAction"
          >
            <i class="fa pl-2 fa-mobile-alt" />
            بازگشت به اپلیکیشن
          </button>
        </div>
      </div>
    </div>

    <!-- Back to App Button -->
    <div v-if="backtoapp" class="download-links-item">
      <div class="row">
        <div class="col-12">
          <a
            href="uperaapp://upera?type=download&success=false"
            class="btn btn-main btn-block"
          >
            <i class="fa fa-back pl-2" />
            نمایش فیلم
          </a>
        </div>
      </div>
    </div>

    <!-- Return to Content Button -->
    <div v-if="title" class="download-links-item">
      <div class="row">
        <div class="col-12">
          <a
            v-if="title.type === 'movie'"
            href=""
            class="btn btn-second btn-block"
            @click.prevent="$emit('return-to-content', title)"
          >
            <i class="fa fa-arrow-alt-circle-left" />
            بازگشت به صفحه فیلم
          </a>
          <a
            v-else-if="title.type === 'series'"
            class="btn btn-second btn-block"
            href=""
            @click.prevent="$emit('return-to-content', title)"
          >
            <i class="fa fa-arrow-alt-circle-left" />
            بازگشت به صفحه سریال
          </a>
          <a
            v-else
            href=""
            class="btn btn-second btn-block"
            @click.prevent="$emit('return-to-content', title)"
          >
            <i class="fa fa-arrow-alt-circle-left" />
            بازگشت به صفحه این قسمت سریال
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CallbackFooter',
  props: {
    files: {
      type: Array,
      default: null,
    },
    success: {
      type: Boolean,
      default: false,
    },
    checkagain: {
      type: Boolean,
      default: false,
    },
    showLogin: {
      type: Boolean,
      default: false,
    },
    backtoapp: {
      type: Boolean,
      default: false,
    },
    title: {
      type: Object,
      default: null,
    },
    divcount: {
      type: Number,
      default: 0,
    },
    purchaseType: {
      type: String,
      default: 'download',
    },
    isLoggedIn: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    queryString() {
      const params = new URLSearchParams()
      Object.entries(this.$route.query).forEach(([key, value]) => {
        if (value) params.append(key, value)
      })
      return params.toString()
    },
    isReactNative() {
      return this.$route?.query?.reactnative === '1'
    },
    isSingleFile() {
      return this.files && this.files.length === 1
    },
    isMultipleFiles() {
      return this.files && this.files.length > 1
    },
    hasEkranScreening() {
      if (!this.files || this.files.length === 0) return false
      return this.files.some(
        (file) => file.screening?.ekran && file.screening.ekran_id
      )
    },
    hasPresale() {
      if (!this.files || this.files.length === 0) return false
      return this.files.some((file) => file.presale)
    },
    footerClass() {
      return {
        'footer-0': this.divcount === 0,
        'footer-1': this.divcount === 1,
      }
    },
    shouldShowReactNativeInSameRow() {
      // Show React Native button in the same row for subscription, wallet, and directdebit
      return (
        this.purchaseType === 'subscription' ||
        this.purchaseType === 'wallet' ||
        this.purchaseType === 'directdebit'
      )
    },
    mainButton() {
      if (!this.success) return null

      if (this.purchaseType === 'download') {
        if (this.isSingleFile) {
          if (this.hasPresale || this.hasEkranScreening) {
            return {
              text: 'مشاهده محتوا',
              iconClass: 'fa-play',
              action: 'watch',
            }
          }
          return { text: 'تماشا', iconClass: 'fa-play', action: 'showContent' }
        }
        if (this.isMultipleFiles) {
          return {
            text: 'مشاهده محتواها',
            iconClass: 'fa-play',
            action: 'goProfile',
          }
        }
      }

      if (this.purchaseType === 'subscription') {
        return { text: 'آپرا پلاس', iconClass: 'fa-star', action: 'operaPlus' }
      }

      if (this.purchaseType === 'wallet') {
        return {
          text: 'بازگشت به آپرا',
          iconClass: 'fa-home',
          action: 'backToOpera',
        }
      }

      if (this.purchaseType === 'directdebit') {
        return {
          text: 'تنظیمات پرداخت خودکار',
          iconClass: 'fa-cog',
          action: 'directDebitSettings',
        }
      }

      return null
    },
    secondaryButton() {
      if (!this.success) return null
      if (this.purchaseType === 'download') {
        return {
          text: 'بازگشت به صفحه اصلی',
          iconClass: 'fa-home',
          action: 'backToOpera',
        }
      }

      if (this.purchaseType === 'subscription') {
        // No secondary button for subscription (back to app handled separately)
        return null
      }

      if (this.purchaseType === 'wallet') {
        if (this.isReactNative) {
          return null // Back to app handled separately
        }
        return null
      }

      if (this.purchaseType === 'directdebit') {
        if (this.isReactNative) {
          return null // Back to app handled separately
        }
        return {
          text: 'بازگشت به آپرا',
          iconClass: 'fa-home',
          action: 'backToOpera',
        }
      }

      return null
    },
    buttonColClass() {
      // If React Native and should be in same row, main button gets col-6
      if (this.isReactNative && this.shouldShowReactNativeInSameRow) {
        return 'col-6'
      }
      // If there are two buttons (main and secondary), they share the row
      const hasTwoButtons = this.mainButton && this.secondaryButton
      return hasTwoButtons ? 'col-6' : 'col-12'
    },
  },
  methods: {
    handleMainAction() {
      const action = this.mainButton?.action
      switch (action) {
        case 'watch':
          if (this.files && this.files.length > 0) {
            this.$emit('watch', this.files[0].id)
          }
          break
        case 'goHome':
          this.$router.push('/')
          break
        case 'backToApp':
          window.location.href = 'upera://callback/success'
          break
        case 'operaPlus':
          this.$router.push('/plan')
          break
        case 'backToOpera':
          this.$router.push('/')
          break
        case 'directDebitSettings':
          this.$emit('show-direct-debit')
          break
        case 'showContent':
          console.log('showContent action triggered', this.files)

          this.$emit('return-to-content', {
            id: this.files[0]?.m_id,
            type: this.files[0]?.type,
          })
          break
        case 'goProfile':
          this.$router.push('/profile/list/downloads')
          break
      }
    },
    handleSecondaryAction() {
      const action = this.secondaryButton?.action
      switch (action) {
        case 'checkPayment':
          this.$emit('check-payment')
          break
        case 'operaPlus':
          this.$router.push('/plan')
          break
        case 'backToApp':
          window.location.href = 'upera://callback/success'
          break
        case 'backToOpera':
          this.$router.push('/')
          break
      }
    },
    handleReactNativeAction() {
      window.location.href = 'upera://callback/success'
    },
  },
}
</script>

<style scoped>
/* Primary Action Buttons - Orange Background */
.btn-main,
.btn-danger {
  width: 160px;
  height: 36px;
  border-radius: 8px;
  padding: 8px 20px;
  background: #ff6633 !important;
  border: none;
  color: white;
  font-weight: 500;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-main:hover,
.btn-danger:hover {
  background: #ff5522 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(255, 102, 51, 0.3);
}

/* Secondary Action Buttons - Light Orange Background */
.btn-light,
.btn-second {
  width: 160px;
  height: 36px;
  border-radius: 8px;
  padding: 8px 20px;
  background: #ffece5 !important;
  border: none;
  color: #ff6633;
  font-weight: 500;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-light:hover,
.btn-second:hover {
  background: #ffe0d5 !important;
  color: #ff5522;
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(255, 102, 51, 0.2);
}

/* Block buttons - full width on mobile */
.btn-block {
  width: 100%;
  margin: 0 auto;
}

/* Copy button specific style */
.btn-copy {
  background: #ffece5 !important;
  color: #ff6633;
}

.btn-copy:hover {
  background: #ffe0d5 !important;
}

.download-links-item {
  margin-bottom: 12px;
  padding: 12px 0 0 0 !important;
}

.download-links-item:last-child {
  margin-bottom: 0;
}

/* Icon spacing */
.btn i,
.btn .fa,
.btn .icon-download,
.btn .icon-play {
  margin-right: 0;
  margin-left: 4px;
}

/* Responsive adjustments */
@media (max-width: 576px) {
  .btn-block {
    max-width: 100%;
  }

  .download-links-item .col-6 .btn {
    font-size: 13px;
    padding: 8px 12px;
  }

  /* Hide icons in buttons on mobile */
  .btn i,
  .btn .fa,
  .btn .icon-download,
  .btn .icon-play {
    display: none !important;
  }

  /* Reduce padding and margin for download-links-item */
  .download-links-item {
    margin-bottom: 6px;
    padding: 6px 0 0 0 !important;
  }

  /* Reduce footer padding */
  .download-links-footer {
    padding: 0 8px 12px 8px !important;
  }

  /* Reduce top padding for footer state classes */
  .footer-0 {
    padding-top: 12px;
  }
  .footer-1 {
    padding-top: 8px;
  }
}

/* Footer wrapper */
.download-links-footer {
  display: flex;
  flex-direction: column;
  padding: 0 24px 24px 24px !important;
  background: #fff;
  flex-shrink: 0;
}

/* Footer state classes */
.footer-0 {
  padding-top: 24px;
}

.footer-1 {
  padding-top: 16px;
}
</style>
