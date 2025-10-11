<template>
  <b-modal
    id="directdebitModal"
    ref="directdebitModal"
    centered
    hide-footer
    size="lg"
    modal-class="modal-download-link credit directdebit"
    title="فعال کردن پرداخت خودکار"
    @hide="onModalHide"
    @shown="onModalShown"
  >
    <div class="download-links">
      <div class="download-links-body download-links-body-header">
        <template v-if="isLoading">
          <div class="alert alert-warning mt-4">لطفا کمی منتظر بمانید...</div>
        </template>

        <template v-else>
          <!-- Bank Management Section -->
          <div class="download-links-items download-links-items-credit">
            <div class="tenor tenor-m">
              <div class="mt-3">
                <bank-management-section
                  :subscriptions="subscriptions"
                  :show-add-bank="showAddBank"
                  :banks="banks"
                  :form-data="formData"
                  :is-loading="isSubmitting"
                  @add-bank="toggleAddBank"
                  @delete-bank="handleDeleteBank"
                  @submit="handleSubmit"
                />

                <!-- Payment Options Section -->
                <payment-options-section
                  :form-data="formData"
                  :config="configs"
                  :subscription-description="subscriptionDescription"
                  @change="handleSubmit"
                />

                <!-- Information Notice -->
                <div class="information-notice mt-3">
                  <strong>توجه:</strong><br />
                  1- شما در هر زمانی می توانید گزینه های بالا را فعال یا غیرفعال
                  کنید<br />
                  2- در حالتی که فیلم یا سریال انتخابی شما با روش های پرداخت
                  دیگری خرید شده باشد، خرید مجددی با پرداخت خودکار توسط ما انجام
                  نخواهد شد<br />
                  3- بانک ملی به زودی اضافه می شود
                </div>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="download-links-footer footer-1 mt-3">
            <div class="download-links-item">
              <submit-button
                :is-loading="isSubmitting"
                :variant="'danger'"
                :text="'تنظیم پرداخت خودکار'"
                :icon="'fa fa-money-bill pr-2'"
                @click="handleSubmit(false)"
              />
            </div>
          </div>
        </template>
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
      this.subscriptions = data.subscriptions || []
      this.showAddBank = this.subscriptions.length === 0
      this.configs = data.configs || {}
      this.formData.series = data.series || []
      this.formData.subscribe_fee = data.subscribe_fee || 0
      this.formData.days_period_to_end = data.days_period_to_end || 0
      this.formData.subscription = !!this.configs.subscription
      this.formData.pay_anything = !!this.configs.pay_anything

      if (!this.formData.mobile && data.mobile) {
        this.formData.mobile = this.formatMobile(data.mobile)
      }
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
        .map((series) => series.id)

      return {
        subscription: this.formData.subscription,
        pay_anything: this.formData.pay_anything,
        bank: this.formData.bank,
        series: selectedSeries,
        add_new_bank: Number(this.showAddBank),
        payment_id: this.paymentid,
        forsubscription: this.forsubscription,
        mobile: this.formData.mobile,
        ref: this.getReferrerCode(),
        callback_url: `${location.origin}${CALLBACK_PATH}`,
      }
    },

    async handleDeleteBank(index, id, bankName) {
      const confirmed = await this.showConfirmationDialog(
        'حذف پرداخت خودکار',
        `آیا از حذف پرداخت خودکار ${bankName} اطمینان دارید؟`,
        'error'
      )

      if (!confirmed) return

      this.isSubmitting = true
      try {
        await this.$axios.post(API_ENDPOINTS.DELETE, { id })
        this.subscriptions.splice(index, 1)
        this.showAddBank = this.subscriptions.length === 0
        this.message = 'بانک با موفقیت حذف شد'
      } catch (error) {
        this.message = this.handleError(error)
      } finally {
        this.isSubmitting = false
      }
    },

    // UI Helpers
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
.information-notice {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #666;
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 0.375rem;
  border-right: 4px solid #007bff;
}
</style>
