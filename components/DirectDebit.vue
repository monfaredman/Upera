<template>
  <b-modal
    id="directdebitModal"
    ref="directdebitModal"
    centered
    hide-footer
    size="xl"
    modal-class="modal-download-link credit directdebit"
    title="فعال کردن پرداخت خودکار"
    @hide="onModalHide"
    @shown="onModalShown"
  >
    <div class="download-links modal-flex-container">
      <div class="download-links-body-header modal-content-area">
        <template v-if="isLoading">
          <div class="alert alert-warning mt-4">لطفا کمی منتظر بمانید...</div>
        </template>

        <template v-else>
          <!-- Edit Mode: Registered Card Display -->
          <div v-if="isEditMode && configs.id" class="registered-card-box mb-4">
            <p>شماره کارت ثبت شده</p>
            <div class="card-display">
              <div class="bank-info-row">
                <div class="bank-logo-container">
                  <img
                    :src="
                      require(`@/assets/images/banks/${
                        formData.bank || '012'
                      }.png`)
                    "
                    alt="Bank Logo"
                    class="bank-logo-img"
                  />
                </div>
                <div class="mobile-info">
                  <p class="mobile-number">{{ configs.mobile }}</p>
                </div>
              </div>
              <div class="card-actions">
                <b-button
                  variant="link"
                  class="action-btn edit-btn"
                  @click="changeCardNumber"
                >
                  <i class="fa fa-edit ml-1"></i>
                  تنظیم شماره کارت جدید
                </b-button>
              </div>
            </div>
          </div>

          <!-- Step Indicator -->
          <!-- <div v-if="!isEditMode" class="step-indicator mb-4">
            <div
              class="step"
              :class="{ active: currentStep === 1, completed: currentStep > 1 }"
            >
              <div class="step-number">1</div>
              <div class="step-label">انتخاب بانک</div>
            </div>
            <div class="step-line" :class="{ active: currentStep > 1 }"></div>
            <div class="step" :class="{ active: currentStep === 2 }">
              <div class="step-number">2</div>
              <div class="step-label">انتخاب سریال‌ها</div>
            </div>
          </div> -->

          <!-- Step 1: Bank Selection -->
          <div
            v-if="currentStep === 1 && !isEditMode"
            class="bank-selection-step"
          >
            <bank-management-section
              :subscriptions="subscriptions"
              :banks="banks"
              :form-data="formData"
              :is-edit-mode="isEditMode"
              :accept-terms="acceptTerms"
              :hide-button="true"
              @update:formData="formData = $event"
              @update:acceptTerms="acceptTerms = $event"
              @change-card="changeCardNumber"
              @next-step="goToStep2"
              @show-terms="showTerms"
            />
          </div>

          <!-- Step 2: Serial Selection -->
          <div
            v-if="currentStep === 2 || isEditMode"
            class="serial-selection-step"
          >
            <payment-options-section
              :form-data="formData"
              :subscription-description="subscriptionDescription"
              :env-name="$config?.envname"
              :auto-renewal="autoRenewal"
              @update:formData="formData = $event"
              @update:autoRenewal="autoRenewal = $event"
              @change="handleOptionsChange"
            />
          </div>
        </template>
      </div>

      <!-- Action Buttons - Fixed at bottom -->
      <div v-if="!isLoading" class="modal-footer-fixed">
        <div class="action-buttons">
          <!-- Step 1 Button -->
          <template v-if="currentStep === 1 && !isEditMode">
            <b-button
              variant="primary"
              block
              :disabled="!canProceedToStep2"
              @click="goToStep2"
            >
              تنظیمات پرداخت خودکار
            </b-button>
          </template>

          <!-- Step 2 Buttons -->
          <template v-else-if="currentStep === 2 || isEditMode">
            <b-button
              v-if="!isEditMode"
              variant="outline-secondary"
              @click="goToStep1"
            >
              <i class="fa fa-arrow-right pl-2"></i>
              مرحله قبل
            </b-button>

            <submit-button
              :is-loading="isSubmitting"
              :variant="'primary'"
              :text="isEditMode ? 'ذخیره تغییرات' : 'تنظیم پرداخت خودکار'"
              :icon="'fa fa-money-bill pr-2'"
              @click="handleSubmit(false)"
            />
            <b-button
              v-if="isEditMode"
              variant="link"
              class="action-btn remove-btn"
              @click="handleDeleteBank"
            >
              <i class="fa fa-trash ml-1"></i>
              حذف اشتراک
            </b-button>
          </template>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
import { mapGetters } from 'vuex'
import BankManagementSection from '@/components/directdebit/BankManagementSection.vue'
import PaymentOptionsSection from '@/components/directdebit/PaymentOptionsSection.vue'
import SubmitButton from '@/components/directdebit/SubmitButton.vue'

// Constants
const MODAL_ID = 'directdebitModal'
const API_ENDPOINTS = {
  BANKS: '/directdebit/banks',
  SUBSCRIPTIONS: '/directdebit/subscriptions',
  BUY: '/directdebit/buy_subscription',
  DELETE: '/directdebit/delete_subscription',
}
const CALLBACK_PATH = '/callback'

export default {
  name: 'DirectDebitModal',
  components: {
    BankManagementSection,
    PaymentOptionsSection,
    SubmitButton,
  },
  props: {
    show: Boolean,
  },
  data() {
    return {
      isLoading: true,
      isSubmitting: false,
      showAddBank: false,
      message: '',
      banks: [],
      subscriptions: [],
      configs: {},
      subscriptionDescription: '',
      currentStep: 1,
      isEditMode: false,
      acceptTerms: false,
      autoRenewal: false,
      selectedSubscriptions: [],
      formData: {
        subscription: false,
        subscribe_fee: 0,
        days_period_to_end: 0,
        pay_anything: true,
        bank: '012',
        mobile: '',
        series: [],
      },
    }
  },
  computed: {
    ...mapGetters({
      id: 'directdebit/id',
      type: 'directdebit/type',
      paymentid: 'directdebit/paymentid',
      forsubscription: 'directdebit/forsubscription',
      premobile: 'directdebit/premobile',
      checkuser: 'user/checkuser',
    }),
    canProceedToStep2() {
      return this.formData.bank && this.formData.mobile && this.acceptTerms
    },
  },
  watch: {
    show: {
      handler(val) {
        if (val) {
          this.showModal()
        } else {
          this.hideModal()
        }
      },
      immediate: true,
    },
  },
  mounted() {
    this.initializeComponent()
    document.body.classList.add('loaded')
  },
  beforeDestroy() {
    this.cleanup()
  },
  methods: {
    // Initialization
    initializeComponent() {
      this.setupSubscriptionDefaults()
      this.setSubscriptionDescription()
      this.setupMobileNumber()
      this.setupModalEvents()
    },

    setupSubscriptionDefaults() {
      if (this.forsubscription === 1) {
        this.formData.subscription = true
      }
    },

    setupMobileNumber() {
      const mobile =
        this.premobile ||
        (this.checkuser?.mobile && this.formatMobile(this.checkuser.mobile))
      if (mobile) {
        this.formData.mobile = mobile
      }
    },

    setupModalEvents() {
      const modal = this.$refs[MODAL_ID]
      if (!modal) return

      modal.$on('hide', this.onModalHide)
      modal.$on('shown', this.onModalShown)
    },

    // Modal Events
    onModalHide() {
      window.removeEventListener('resize', this.handleResize)
      this.removeBodyBlur()
      this.restoreBodyClasses()
      this.$emit('hide-modal')
    },

    onModalShown() {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    },

    // Data Management
    async showModal() {
      try {
        this.isLoading = true
        await Promise.all([this.fetchBanks(), this.fetchSubscriptions()])

        this.applyBodyBlur()
        this.adjustBodyClasses()
        this.$refs[MODAL_ID].show()
      } catch (error) {
        this.message = this.handleError(error)
      } finally {
        this.isLoading = false
      }
    },

    async fetchBanks() {
      const response = await this.$axios.get(API_ENDPOINTS.BANKS)
      if (response.status === 200) {
        this.banks = response.data.data?.banks || []
      }
    },

    async fetchSubscriptions() {
      const response = await this.$axios.get(API_ENDPOINTS.SUBSCRIPTIONS)
      if (response.status === 200) {
        this.processSubscriptionData(response.data.data)
      }
    },

    processSubscriptionData(data) {
      console.log(data)
      console.log(data.subscriptions.length)
      this.subscriptions = data.subscriptions || []
      this.showAddBank = this.subscriptions.length === 0
      this.configs = data.configs || {}

      // Get series data from API response
      const seriesData = data.series || []

      // Map series data with directdebit flag from API
      this.formData.series = seriesData.map((series) => ({
        ...series,
        directdebit: series.directdebit || false,
      }))

      this.formData.subscribe_fee = data.subscribe_fee || 0
      this.formData.days_period_to_end = data.days_period_to_end || 0
      this.formData.subscription = !!this.configs.subscription
      this.formData.pay_anything = !!this.configs.pay_anything

      if (!this.formData.mobile && data.mobile) {
        this.formData.mobile = this.formatMobile(data.mobile)
      }

      // Set edit mode if configs exist (user has registered card)
      this.isEditMode = !!this.configs.id

      // Initialize autoRenewal based on formData.subscription
      this.autoRenewal = this.formData.subscription
    },

    // Actions
    async handleSubmit(isQuickSubmit = true) {
      if (isQuickSubmit && this.showAddBank) return

      this.isSubmitting = true
      try {
        const response = await this.$axios.post(
          API_ENDPOINTS.BUY,
          this.buildSubmitData()
        )

        if (response.status === 200 && response.data.data?.pay_url) {
          window.location.href = response.data.data.pay_url
        } else {
          this.message = response.data?.message || 'عملیات با موفقیت انجام شد'
        }
      } catch (error) {
        this.message = this.handleError(error)
      } finally {
        this.isSubmitting = false
      }
    },

    buildSubmitData() {
      const selectedSeries = this.formData.series
        .filter((series) => series.directdebit)
        .map((series) => String(series.id))

      return {
        subscription: Boolean(this.formData.subscription),
        pay_anything: Boolean(this.formData.pay_anything),
        bank: String(this.formData.bank),
        series: selectedSeries,
        add_new_bank: Number(this.showAddBank),
        payment_id: Number(this.paymentid || 0),
        forsubscription: Boolean(this.forsubscription),
        mobile: String(this.formData.mobile),
        ref: Number(this.getReferrerCode()),
        callback_url: String(`${location.origin}${CALLBACK_PATH}`),
      }
    },

    async handleDeleteBank() {
      if (!this.configs.id) {
        this.message = 'اطلاعات پرداخت خودکار یافت نشد'
        return
      }

      const confirmed = await this.showConfirmationDialog(
        'حذف پرداخت خودکار',
        `آیا از حذف پرداخت خودکار برای شماره ${this.configs.mobile} اطمینان دارید؟`,
        'error'
      )

      if (!confirmed) return

      this.isSubmitting = true
      try {
        await this.$axios.post(API_ENDPOINTS.DELETE, {
          id: this.configs.id,
        })

        // Reset configs and form data after successful deletion
        this.configs = {}
        this.isEditMode = false
        this.currentStep = 1
        this.formData.subscription = false
        this.formData.pay_anything = true
        this.formData.series = this.formData.series.map((series) => ({
          ...series,
          directdebit: false,
        }))
        this.autoRenewal = false
        this.showAddBank = true

        this.message = 'پرداخت خودکار با موفقیت حذف شد'

        // Optionally show success message
        this.$swal({
          icon: 'success',
          title: 'موفق',
          text: 'پرداخت خودکار با موفقیت حذف شد',
          timer: 2000,
        })
      } catch (error) {
        this.message = this.handleError(error)
        this.$swal({
          icon: 'error',
          title: 'خطا',
          text: this.message,
        })
      } finally {
        this.isSubmitting = false
      }
    },

    // UI Helpers
    handleOptionsChange() {
      // Handle payment options changes (optional: add debounce if needed)
      // This can be used for auto-save or validation
    },

    selectBank(bankValue) {
      this.formData.bank = bankValue
    },

    getBankLogo(bankValue) {
      // Map bank codes to logo URLs
      const bankLogos = {
        '012': '/images/banks/mellat.png',
        '017': '/images/banks/melli.png',
        '062': '/images/banks/ayandeh.png',
        // Add more banks as needed
      }
      return bankLogos[bankValue] || '/images/banks/default.png'
    },

    getSeriesImage(poster) {
      if (!poster) return ''
      return `https://thumb.upera.shop/thumb?w=200&h=300&q=100&a=c&src=https://cdn.upera.shop/s3/posters/${poster}`
    },

    goToStep2() {
      if (this.canProceedToStep2) {
        this.currentStep = 2
      }
    },

    goToStep1() {
      this.currentStep = 1
    },

    changeCardNumber() {
      this.isEditMode = false
      this.currentStep = 1
      this.acceptTerms = false
    },

    showTerms() {
      // Show terms and conditions modal or navigate to terms page
      this.$swal({
        title: 'قوانین و مقررات',
        text: 'متن قوانین و مقررات در اینجا نمایش داده می‌شود...',
        icon: 'info',
      })
    },

    toggleAddBank() {
      this.showAddBank = !this.showAddBank
    },

    hideModal() {
      this.$refs[MODAL_ID]?.hide()
      this.$emit('hide-modal')
      this.restoreBodyClasses()
      this.removeBodyBlur()
    },

    handleResize() {
      const vh = window.innerHeight * 0.01
      const element = document.querySelector('.download-links')
      if (element) {
        element.style.setProperty('--vh', `${vh}px`)
      }
    },

    setSubscriptionDescription() {
      const isPlus = this.$config?.envname === 'plus'
      const hasSubscription = this.checkuser?.subscription === 1

      if (isPlus) {
        this.subscriptionDescription = hasSubscription
          ? 'با فعال بودن این گزینه، در زمان پایان اشتراک شما، مبلغ اشتراک ماهانه را از حساب شما کسر می کنیم'
          : 'با فعال بودن این گزینه، اشتراک ماهانه شما فعال خواهد شد و در زمان پایان اشتراک، مبلغ اشتراک ماهانه را از حساب شما کسر می کنیم'
      } else {
        const suffix =
          ' دقت کنید که تنها فیلم و سریال های موجود در آپرا پلاس را می توانید با خرید این اشتراک مشاهده نمایید'
        this.subscriptionDescription =
          (hasSubscription
            ? 'با فعال بودن این گزینه، در زمان پایان اشتراک شما، مبلغ اشتراک ماهانه را از حساب شما کسر می کنیم.'
            : 'با فعال بودن این گزینه، اشتراک ماهانه شما فعال خواهد شد و در زمان پایان اشتراک، مبلغ اشتراک ماهانه را از حساب شما کسر می کنیم.') +
          suffix
      }
    },

    // Utility Methods
    formatMobile(mobile) {
      if (!mobile) return ''
      const mobileStr = String(mobile)
      return mobileStr.startsWith('0') ? mobileStr : `0${mobileStr}`
    },

    getReferrerCode() {
      let ref = this.$cookiz?.get?.('ref') || 0
      return isNaN(ref) ? 0 : ref
    },

    applyBodyBlur() {
      document.querySelector('.default')?.classList.add('blure')
    },

    removeBodyBlur() {
      document.querySelector('.default')?.classList.remove('blure')
    },

    adjustBodyClasses() {
      const classesToHandle = ['download', 'callback']
      const appliedClass = classesToHandle.find(
        (cls) => document.getElementsByClassName(cls).length > 0
      )

      if (appliedClass) {
        document.body.classList.remove(appliedClass)
        document.body.classList.add(
          `cre_${appliedClass === 'download' ? 'dl' : 'call'}`
        )
      }
    },

    restoreBodyClasses() {
      const classesToRestore = ['cre_dl', 'cre_call']
      classesToRestore.forEach((cls) => {
        if (document.body.classList.contains(cls)) {
          document.body.classList.remove(cls)
          const originalClass = cls === 'cre_dl' ? 'download' : 'callback'
          document.body.classList.add(originalClass)
        }
      })
    },

    async showConfirmationDialog(title, text, icon = 'warning') {
      const result = await this.$swal({
        icon,
        title,
        text,
        dangerMode: true,
        confirmButtonColor: '#DD6B55',
        buttons: {
          cancel: {
            text: 'بازگشت',
            value: false,
            className: 'btn-info',
          },
          confirm: {
            text: 'حذف',
            value: true,
            className: 'btn-danger',
          },
        },
      })
      return result
    },

    handleError(error) {
      return error?.response?.data?.message || 'خطایی رخ داده است'
    },

    cleanup() {
      window.removeEventListener('resize', this.handleResize)
      this.removeBodyBlur()
    },
  },
}
</script>

<style scoped>
/* Modal Flex Container */
.modal-flex-container {
  display: flex;
  flex-direction: column;
  height: auto;
  max-height: 85vh;
}

.modal-content-area {
  flex: 1 1 auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem;
  padding-bottom: 0;
  max-height: calc(85vh - 100px);
}

.modal-footer-fixed {
  flex-shrink: 0;
  padding: 1rem;
  background: white;
  border-top: 1px solid #e9ecef;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  bottom: 0;
  z-index: 10;
}

/* Registered Card Box */
.registered-card-box {
  background: white;
  padding: 0;
  border-radius: 0.5rem;
  overflow: hidden;
}

.card-display {
  display: flex;
  flex-direction: column;
}

.bank-info-row {
  display: flex;
  align-items: center;
  justify-content: start;
  height: 60px;
  padding: 0 1rem;
  border: 1px solid #e5e5e5;
  border-radius: 0.5rem;
  gap: 1rem;
  background: #fafafa;
}

.bank-logo-container {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9fafb;
  border-radius: 0.375rem;
}

.bank-logo-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.mobile-info {
  flex: 1;
  display: flex;
  justify-content: start;
  gap: 0.25rem;
}

.mobile-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-weight: 500;
}

.mobile-number {
  font-size: 1rem;
  color: #64748b;
  font-weight: ۵00;
  direction: ltr;
  text-align: left;
  margin: 0 !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 0.5rem 0;
}

.card-actions {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  padding: 0.75rem 1rem;
}

.action-btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  text-decoration: none;
  transition: all 0.2s;
}

.action-btn:hover {
  text-decoration: none;
}

.edit-btn {
  color: #ff6633;
}

.edit-btn:hover {
  color: #1d4ed8;
}

.remove-btn {
  color: #dc2626;
}

.remove-btn:hover {
  color: #b91c1c;
}

.registered-card-box .d-flex.gap-2 {
  gap: 0.5rem;
}

.registered-card-box .btn {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

/* Step Indicator */
.step-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e9ecef;
  color: #6c757d;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transition: all 0.3s ease;
}

.step.active .step-number,
.step.completed .step-number {
  background: #007bff;
  color: white;
}

.step-label {
  font-size: 0.875rem;
  color: #6c757d;
  font-weight: 500;
}

.step.active .step-label {
  color: #007bff;
  font-weight: 600;
}

.step-line {
  width: 100px;
  height: 2px;
  background: #e9ecef;
  margin: 0 1rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.step-line.active {
  background: #007bff;
}

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
}

.action-buttons > * {
  flex: 0 0 auto;
}

/* Bank and Serial Selection Steps */
.bank-selection-step,
.serial-selection-step {
  padding-bottom: 1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .step-line {
    width: 60px;
    margin: 0 0.5rem;
  }

  .action-buttons {
    flex-direction: column-reverse;
  }

  .action-buttons > * {
    width: 100%;
  }

  .modal-content-area {
    padding: 0.5rem;
  }
}
</style>
