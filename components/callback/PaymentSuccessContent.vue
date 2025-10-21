<template>
  <div class="payment-success-container">
    <!-- Success Icon -->
    <div class="success-icon-wrapper">
      <div class="success-icon">
        <i
          class="fa fa-check"
          aria-hidden="true"
          style="font-size: 50px; color: green"
        ></i>
        <span class="sr-only">پرداخت موفق</span>
      </div>
    </div>

    <!-- Success Alert -->
    <div class="success-alert">
      <i class="fa fa-check-circle" style="color: green" />
      <span class="success-alert-text">پرداخت شما با موفقیت انجام شد.</span>
    </div>

    <!-- Tracking Number -->
    <div v-if="refNum" class="tracking-number">
      <span>شماره پیگیری</span> : {{ refNum }}
    </div>

    <div class="divider"></div>

    <!-- Special State Text -->
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="special-state-text" v-html="stateSpecialText"></div>

    <div v-if="stateSpecialText" class="divider"></div>

    <!-- Accordion Section (for download files) -->
    <div v-if="showAccordion" class="accordion-wrapper">
      <div id="downloadAccordion" class="accordion">
        <div
          v-for="(item, index) in files"
          :key="'accordion-' + index"
          class="accordion-item"
        >
          <h2 :id="'heading' + index" class="accordion-header">
            <button
              :class="[
                'accordion-button',
                { collapsed: activeAccordion !== index },
              ]"
              type="button"
              :aria-expanded="activeAccordion === index"
              :aria-controls="'collapse' + index"
              @click="toggleAccordion(index)"
            >
              {{ item.title || 'فایل دانلود ' + (index + 1) }}
              <i
                :class="[
                  'fa',
                  'accordion-icon',
                  activeAccordion === index
                    ? 'fa-chevron-up'
                    : 'fa-chevron-down',
                ]"
              ></i>
            </button>
          </h2>
          <div
            :id="'collapse' + index"
            :class="[
              'accordion-collapse',
              'collapse',
              { show: activeAccordion === index },
            ]"
            :aria-labelledby="'heading' + index"
          >
            <div class="accordion-body">
              <!-- Quality Links -->
              <div
                v-for="(quality, qIndex) in item.qualities || [item]"
                :key="'quality-' + qIndex"
                class="quality-item"
              >
                <div class="quality-info">
                  <a :href="quality.download_url" title="دانلود">
                    <i class="icon-download" />

                    <span class="quality-label">
                      نسخه {{ quality.quality || '1080p' }}</span
                    >
                  </a>
                  <span class="quality-size">حجم {{ quality.size || '' }}</span>
                </div>
                <div class="quality-actions">
                  <button
                    title="کپی لینک"
                    class="btn copy-btn icon-btn"
                    @click="$emit('copy', quality.download_url)"
                  >
                    <i class="fa fa-copy" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showAccordion" class="divider"></div>
  </div>
</template>

<script>
export default {
  name: 'PaymentSuccessContent',
  props: {
    files: {
      type: Array,
      default: null,
    },
    purchaseType: {
      type: String,
      default: 'download',
      validator: (value) => {
        return ['download', 'subscription', 'wallet', 'directdebit'].includes(
          value
        )
      },
    },
    isLoggedIn: {
      type: Boolean,
      default: false,
    },
    checkuser: {
      type: Object,
      default: null,
    },
    refNum: {
      type: [String, Number],
      default: null,
    },
    walletAmount: {
      type: [String, Number],
      default: null,
    },
    walletBalance: {
      type: [String, Number],
      default: null,
    },
    subscriptionDays: {
      type: [String, Number],
      default: null,
    },
  },
  data() {
    return {
      activeAccordion: null,
    }
  },
  computed: {
    isSingleFile() {
      return this.files && this.files.length === 1
    },
    isMultipleFiles() {
      return this.files && this.files.length > 1
    },
    hasEkranScreening() {
      if (!this.files || this.files.length === 0) return false
      return this.files.some((file) => file.screening?.ekran)
    },
    hasPresale() {
      if (!this.files || this.files.length === 0) return false
      return this.files.some((file) => file.presale)
    },
    showAccordion() {
      return (
        this.purchaseType === 'download' && this.files && this.files.length > 0
      )
    },
    stateSpecialText() {
      if (this.purchaseType === 'download') {
        if (this.isSingleFile) {
          const text = 'قسمت انتخابی شما به لیست تماشای شما اضافه شد.'
          const file = this.files[0]

          if (file.presale && file.screening?.ekran) {
            return `${text}<br><br>اکران سراسری فیلم از روز ${file.presale_date} آغاز خواهد شد، لطفا قبل از این تاریخ به هیچ عنوان برای جلوگیری از اشکال فنی احتمالی نسبت به تست اتصال و کیفیت پخش اقدام ننمایید و فقط با اکران سراسری فیلم را مشاهده نمایید.<br><br>برای تماشا از خانه، سانس سینمای آنلاین ${file.screening.ekran_hour} ساعته است، طوری تنظیم کنید که تماشای کامل فیلم را در سانس خود از دست ندهید.`
          }

          if (file.screening?.ekran) {
            return `${text}<br><br>برای تماشا از خانه، سانس سینمای آنلاین ${file.screening.ekran_hour} ساعته است، دقیقا از زمانی که فیلم را شروع به تماشا کنید، سانس شما آغاز و تا ${file.screening.ekran_hour} ساعت بعد به پایان می‌رسد، طوری تنظیم کنید که تماشای کامل فیلم را در سانس خود از دست ندهید.`
          }

          return `${text}<br><br>توجه داشته باشید که برای جلوگیری از دانلود ناقص یا آسیب دیدن به فایل های خریداری شده، حتما باید از نرم افزارهای دانلود منیجر استفاده شود. بدین صورت حتی اگر دانلود شما در هر زمانی و به هر دلیلی نیمه کاره متوقف شد، میتوانید در زمان دلخواه خود به راحتی به ادامه دانلود بپردازید.`
        }

        if (this.isMultipleFiles) {
          return 'قسمت های انتخابی شما به لیست تماشای شما اضافه شد.'
        }
      }

      if (this.purchaseType === 'subscription') {
        const days =
          this.subscriptionDays || this.checkuser?.days_period_to_end || 30
        return `اشتراک شما به مدت ${days} روز فعال شد.${
          this.isLoggedIn && this.checkuser
            ? '<br>' + days + ' روز از اشتراک شما باقیمانده است.'
            : ''
        }`
      }

      if (this.purchaseType === 'wallet') {
        const amount = this.walletAmount || '0'
        const balance = this.walletBalance || '0'
        return `مبلغ ${amount} تومان به کیف پول شما اضافه شد.<br>موجودی فعلی: ${balance} تومان`
      }

      if (this.purchaseType === 'directdebit') {
        return 'از شما جهت فعال کردن پرداخت خودکار متشکریم.'
      }

      return ''
    },
  },
  methods: {
    toggleAccordion(index) {
      // Toggle accordion: if clicking the active one, close it; otherwise, open the clicked one
      this.activeAccordion = this.activeAccordion === index ? null : index
    },
  },
}
</script>

<style scoped>
.payment-success-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

/* Success Icon */
.success-icon-wrapper {
  text-align: center;
  margin-bottom: 20px;
}

.success-icon {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

/* Success Alert */
.success-alert {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  background: #f0fdf4;
  border: 1px solid #86efac;
  border-radius: 8px;
  margin-bottom: 24px;
  width: fit-content;
  justify-self: center;
}

.success-check-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: #22c55e;
  color: white;
  border-radius: 50%;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
}

.success-alert-text {
  color: #166534;
  font-weight: 600;
  font-size: 14px;
}

/* Tracking Number */
.tracking-number {
  text-align: center;
  color: #525252;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;
  direction: rtl;
}
.tracking-number span {
  color: var(--Gray-N500, #737373);
  font-weight: 400;
  font-size: 13px;
  text-align: right;
}

/* Divider */
.divider {
  height: 1px;
  background: #e5e5e5;
  margin: 0;
  width: 100%;
}

/* Special State Text */
.special-state-text {
  color: #525252 !important;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  line-height: 1.8;
  direction: rtl;
  margin: 8px 0;
}

/* Accordion Wrapper */
.accordion-wrapper {
  margin: 20px 0 0 0;
  overflow: auto;
  max-height: 25vh;
  overflow-y: auto;
}

.accordion-item {
  border: none;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  margin-bottom: 12px;
  overflow: hidden;
  margin-right: 6px;
  margin-left: 6px;
}

.accordion-header {
  margin: 0;
}

.accordion-button {
  background: #f9f9f9;
  color: #333;
  font-weight: 600;
  font-size: 14px;
  padding: 14px 20px;
  border: none;
  direction: rtl;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 16px;
}

.accordion-button:hover {
  background: #f0f0f0;
  border-radius: 16px;
}

.accordion-button:not(.collapsed) {
  background: #fff;
  color: #ff6633;
  box-shadow: none;
  border-radius: 16px;
}

.accordion-button:focus {
  box-shadow: none;
  border: none;
  outline: none;
  border-radius: 16px;
}

.accordion-icon {
  font-size: 14px;
  margin-left: 8px;
  transition: transform 0.3s ease, color 0.3s ease;
  color: #666;
}

.accordion-button:not(.collapsed) .accordion-icon {
  color: #ff6633;
  transform: rotate(180deg);
  border-radius: 16px;
}

.accordion-collapse {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-in-out, opacity 0.3s ease;
  opacity: 0;
}

.accordion-collapse.show {
  max-height: 2000px;
  opacity: 1;
  overflow: visible;
}

.accordion-body {
  padding: 16px 20px;
  background: white;
  max-height: 300px;
  overflow: auto;
}

/* Quality Items */
.quality-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: #f9f9f9;
  border-radius: 8px;
  margin-bottom: 8px;
}

.quality-item:last-child {
  margin-bottom: 0;
}

.quality-info {
  display: flex;
  gap: 12px;
  align-items: center;
}

.quality-label {
  font-weight: 600;
  font-size: 13px;
  text-align: right;
  color: #0047f1;
}

.quality-size {
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-align: right;
  color: #737373;
}

.quality-actions {
  display: flex;
  gap: 8px;
}

.icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 6px;
  background: #ff6633;
  color: white;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
}

.icon-btn:hover {
  background: #e55a2b;
  transform: translateY(-2px);
}

.copy-btn {
  background: #ffece5;
  color: #ff6633;
}

.copy-btn:hover {
  background: #ffd7c7;
}

.icon-download,
.icon-copy {
  font-size: 18px;
  font-style: normal;
}

/* Responsive */
@media (max-width: 576px) {
  .payment-success-container {
    padding: 16px;
  }

  .success-icon {
    width: 60px;
    height: 60px;
  }

  .success-alert {
    padding: 10px 12px;
  }

  .success-alert-text {
    font-size: 13px;
  }

  .special-state-text {
    font-size: 13px;
  }

  .accordion-button {
    font-size: 13px;
    padding: 12px 16px;
    border-radius: 16px;
  }

  .quality-item {
    padding: 10px;
  }

  .quality-label {
    font-size: 13px;
  }

  .quality-size {
    font-size: 12px;
  }

  .icon-btn {
    width: 32px;
    height: 32px;
  }
}

.success-icon {
  width: 112px;
  height: 112px;
  color: #34c759;
  border-radius: 50%;
  border: 0.8rem solid green;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 12px rgba(52, 199, 89, 0.3);
}

.success-icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -2rem;
}

.accordion-wrapper::-webkit-scrollbar,
.accordion-body::-webkit-scrollbar {
  width: 8px;
  background: #f9f9f9;
}

.accordion-wrapper::-webkit-scrollbar-thumb,
.accordion-body::-webkit-scrollbar-thumb {
  background: #ff6633;
  border-radius: 8px;
}

.accordion-wrapper::-webkit-scrollbar-track,
.accordion-body::-webkit-scrollbar-track {
  background: #f0f0f0;
  border-radius: 8px;
}
</style>
