<template>
  <b-modal
    id="directdebitModal"
    ref="directdebitModal"
    centered
    hide-footer
    size="lg"
    modal-class="modal-download-link credit directdebit"
    title="فعال کردن پرداخت خودکار"
  >
    <div class="download-links">
      <div class="download-links-body download-links-body-header">
        <div
          v-if="directdebit_subscriptions.subscribe_fee"
          class="download-links-items download-links-items-credit"
        >
          <div class="tenor tenor-m">
            <div class="mt-3">
              <div v-if="Object.keys(subscriptions).length > 0">
                بانک های فعال شما جهت پرداخت خودکار:
                <b-button
                  v-for="(item, index) in subscriptions"
                  :key="index"
                  variant="dark"
                  @click="deletebank(index, item.id, item.bank)"
                >
                  {{ item.bank }}
                </b-button>
                <b-button variant="success" @click="add_new_bank_filter">
                  افزودن بانک جدید
                </b-button>
              </div>
              <b-card v-show="add_new_bank" class="mt-2 mb-3 px-2">
                <b-form-group
                  id="input1-1"
                  label="انتخاب بانک:"
                  label-for="input-1"
                >
                  <b-form-select
                    id="input-1"
                    v-model="directdebit_subscriptions.bank"
                    :options="banks"
                  />
                </b-form-group>
                <br />
                <b-form-group
                  id="input1-2"
                  label="شماره موبایلی را که به بانک شما متصل است را وارد کنید:"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="directdebit_subscriptions.mobile"
                    type="text"
                    placeholder="شماره موبایل"
                    required
                  />
                </b-form-group>
                <div class="row mt-2">
                  <div class="col-12">
                    <a
                      v-if="buyloading"
                      class="btn btn-success btn-block"
                      disabled
                    >
                      <span
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      /><span class="sr-only">Loading...</span>
                    </a>

                    <a
                      v-else
                      href=""
                      class="btn btn-success btn-block"
                      @click.prevent="ADD_SUBSCRIPTION(0)"
                    >
                      افزودن کارت بانکی شما به سیستم پرداخت خودکار
                      <i class="fa fa-money-bill pr-2" />
                    </a>
                  </div>
                </div>
              </b-card>

              <header class="headline mt-3">
                <h5 class="title font-weight-bold pt-1">
                  انتخاب روش های استفاده از پرداخت خودکار
                </h5>
              </header>

              <b-card class="mt-2 mb-3 px-2">
                <b-form-group
                  label-for="check-pay_anything"
                  description="هر زمانی که شما، روش 'پرداخت خودکار' را جهت خرید انتخاب کنید، دیگر نیازی به وارد کردن اطلاعات کارت خود ندارید و پرداخت خودکار از طریق کارت شما انجام می شود"
                >
                  <b-form-checkbox
                    id="check-pay_anything"
                    v-model="directdebit_subscriptions.pay_anything"
                    class="mx-3"
                    name="check-pay_anything"
                    switch
                    @change="ADD_SUBSCRIPTION(1)"
                  >
                    پرداخت خودکار به انتخاب شما
                  </b-form-checkbox>
                </b-form-group>
              </b-card>

              <b-card class="px-2">
                <b-form-group
                  label-for="check-subscription"
                  :description="desc_subscription"
                >
                  <b-form-checkbox
                    id="check-subscription"
                    v-model="directdebit_subscriptions.subscription"
                    class="mx-3"
                    name="check-subscription"
                    switch
                    @change="ADD_SUBSCRIPTION(1)"
                  >
                    پرداخت خودکار اشتراک
                    <span v-if="$config.envname != 'plus'">
                      آپرا پلاس -
                      <a target="_blank" href="https://plus.upera.tv"
                        >مشاهده فیلم و سریال های آپرا پلاس</a
                      >
                    </span>
                  </b-form-checkbox>
                  <span
                    v-show="directdebit_subscriptions.days_period_to_end"
                    class="text-danger"
                    >مدت زمان باقیمانده تا پایان اشتراک:
                    {{ directdebit_subscriptions.days_period_to_end }} روز<br />
                  </span>
                  <b class="text-info"
                    >قیمت اشتراک ماهانه:
                    {{ directdebit_subscriptions.subscribe_fee }} تومان</b
                  >
                </b-form-group>
              </b-card>

              <b-card
                v-for="(item, index) in directdebit_subscriptions.series"
                :key="index"
                class="mt-2 mb-3 px-2"
                :img-src="
                  'https://thumb.upera.shop/thumb?w=70&h=105&q=100&a=c&src=https://cdn.upera.shop/s3/posters/' +
                  item.poster
                "
                img-right
              >
                <b-form-group
                  :label-for="'check-series-' + index"
                  description="قسمت های جدید سریال،در روز پخش، به صورت خودکار برای شما خرید و ارسال می شود"
                >
                  <!-- v-model="directdebit_subscriptions.series" -->
                  <b-form-checkbox
                    :id="'check-series-' + index"
                    v-model="
                      directdebit_subscriptions.series[index].directdebit
                    "
                    class="mx-3"
                    :name="'check-series-' + index"
                    switch
                    @change="ADD_SUBSCRIPTION(1)"
                  >
                    پرداخت خودکار قسمت های جدید
                    <b class="text-info">{{ item.name_fa }}</b>
                  </b-form-checkbox>
                  <b class="text-info"
                    >قیمت تمامی کیفیت ها: {{ item.subscribe_fee }} تومان</b
                  >
                </b-form-group>
              </b-card>
              <br />
              توجه: <br />1-شما در هر زمانی می توانید گزینه های بالا را فعال یا
              غیرفعال کنید<br />2-در حالتی که فیلم یا سریال انتخابی شما با روش
              های پرداخت دیگری خرید شده باشد، خرید مجددی با پرداخت خودکار توسط
              ما انجام نخواهد شد<br />3-بانک ملی به زودی اضافه می شود
            </div>
          </div>
        </div>
        <div v-else class="alert alert-warning mt-4">
          لطفا کمی منتظر بمانید...
        </div>

        <div
          v-if="directdebit_subscriptions.subscribe_fee"
          class="download-links-footer footer-1"
        >
          <div class="download-links-item">
            <div class="row">
              <div class="col-12">
                <a v-if="buyloading" class="btn btn-danger btn-block" disabled>
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  /><span class="sr-only">Loading...</span>
                </a>

                <a
                  v-else
                  href=""
                  class="btn btn-danger btn-block"
                  @click.prevent="ADD_SUBSCRIPTION(0)"
                >
                  تنظیم پرداخت خودکار
                  <i class="fa fa-money-bill pr-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
import { mapGetters } from 'vuex'

// Constants to avoid magic strings
const MODAL_ID = 'directdebitModal'
const API = {
  BANKS: '/directdebit/banks',
  SUBSCRIPTIONS: '/directdebit/subscriptions',
  BUY: '/directdebit/buy_subscription',
  DELETE: '/directdebit/delete_subscription',
}
const CALLBACK_PATH = '/callback'

export default {
  name: 'DirectDebit',
  props: {
    show: Boolean,
  },

  data() {
    return {
      message: false,
      buyloading: false,
      desc_subscription: '',
      banks: [],
      subscriptions: [],
      configs: {},
      add_new_bank: 0,
      directdebit_subscriptions: {
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
    }),
  },

  watch: {
    show(val) {
      if (val) {
        this.showModal()
      } else {
        this.hideModal()
      }
    },
  },

  mounted() {
    // Pre-set subscription if context is subscription flow
    if (this.forsubscription === 1) {
      this.directdebit_subscriptions.subscription = true
    }

    // Subscription description based on env + user subscription
    this.setSubscriptionDescription()

    // Pre-fill mobile number
    if (this.premobile) {
      this.directdebit_subscriptions.mobile = this.premobile
    } else if (this.checkuser && this.checkuser.mobile) {
      this.directdebit_subscriptions.mobile = this.formatMobileFromApi(
        this.checkuser.mobile
      )
    }

    // Modal events wiring (centralized)
    if (this.$refs[MODAL_ID]) {
      this.$refs[MODAL_ID].$on('hide', () => {
        window.removeEventListener('resize', this.Resize)
        this.removeBodyBlur()
        this.toggleBodyMode('download', true) // restore
        this.toggleBodyMode('callback', true) // restore
        this.$emit('hide-modal', null)
      })
      this.$refs[MODAL_ID].$on('shown', () => {
        window.addEventListener('resize', this.Resize)
        this.Resize('e')
      })
    }

    document.body.classList.add('loaded')
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.Resize)
    this.removeBodyBlur()
  },

  methods: {
    // Build and send subscription config (kept name for template compatibility)
    ADD_SUBSCRIPTION(check_add_new_bank) {
      if (check_add_new_bank && this.add_new_bank) return

      const series = this.collectSelectedSeriesIds()
      let ref = this.getRefCookizSafe()

      this.buyloading = true
      this.$axios
        .post(API.BUY, {
          subscription: this.directdebit_subscriptions.subscription,
          pay_anything: this.directdebit_subscriptions.pay_anything,
          bank: this.directdebit_subscriptions.bank,
          series,
          add_new_bank: Number(this.add_new_bank),
          payment_id: this.paymentid,
          forsubscription: this.forsubscription,
          mobile: this.directdebit_subscriptions.mobile,
          ref,
          callback_url: location.origin + CALLBACK_PATH,
        })
        .then((res) => {
          this.message = false
          this.buyloading = false
          if (res.status === 200 && res.data.data && res.data.data.pay_url) {
            window.location.href = res.data.data.pay_url
          } else if (res.data && res.data.message) {
            this.message = res.data.message
          }
        })
        .catch((error) => {
          this.buyloading = false
          this.message = this.handleAxiosError(error)
        })
    },

    showModal() {
      // Fetch initial data
      this.$axios.get(API.BANKS).then((response) => {
        if (response.status === 200) {
          this.banks = response.data.data.banks || []
        }
      })

      this.$axios.get(API.SUBSCRIPTIONS).then((response) => {
        if (response.status === 200) {
          this.subscriptions = response.data.data.subscriptions || []
          if (Object.keys(this.subscriptions).length === 0) {
            this.add_new_bank = 1
          }

          this.configs = response.data.data.configs || {}
          this.directdebit_subscriptions.series =
            response.data.data.series || []

          if (!this.directdebit_subscriptions.mobile) {
            this.directdebit_subscriptions.mobile = this.formatMobileFromApi(
              response.data.data.mobile
            )
          }

          this.directdebit_subscriptions.subscribe_fee =
            response.data.data.subscribe_fee || 0
          this.directdebit_subscriptions.days_period_to_end =
            response.data.data.days_period_to_end || 0
          this.directdebit_subscriptions.subscription =
            !!this.configs.subscription
          this.directdebit_subscriptions.pay_anything =
            !!this.configs.pay_anything
        }
      })

      // Open modal and adjust body classes
      this.$refs[MODAL_ID].show()
      this.applyBodyBlur()

      if (document.getElementsByClassName('download').length) {
        this.toggleBodyMode('download', false)
        document.body.classList.add('cre_dl')
      } else if (document.getElementsByClassName('callback').length) {
        this.toggleBodyMode('callback', false)
        document.body.classList.add('cre_call')
      }
    },

    Resize(e) {
      const vh = window.innerHeight * 0.01
      const element = document.getElementsByClassName('download-links')
      if (element.length) {
        element[0].style.setProperty('--vh', `${vh}px`)
      }
      return e
    },

    hideModal() {
      this.$refs[MODAL_ID].hide()
      this.$emit('hide-modal', null)

      if (document.getElementsByClassName('cre_dl').length) {
        this.toggleBodyMode('download', true)
        document.body.classList.remove('cre_dl')
      } else if (document.getElementsByClassName('cre_call').length) {
        this.toggleBodyMode('callback', true)
        document.body.classList.remove('cre_call')
      }

      this.removeBodyBlur()
    },

    add_new_bank_filter() {
      this.add_new_bank = !this.add_new_bank
    },

    deletebank(index, id, bank) {
      const dlsmbuttons = {
        back: {
          text: 'بازگشت',
          value: 'back',
          closeModal: true,
          className: 'btn-info',
        },
        addcredit: {
          text: 'حذف',
          value: 'deletebank',
          closeModal: true,
          className: 'btn-danger',
        },
      }

      this.$swal({
        icon: 'error',
        title: 'حذف پرداخت خودکار ' + bank,
        dangerMode: true,
        confirmButtonColor: '#DD6B55',
        buttons: dlsmbuttons,
      }).then((value) => {
        switch (value) {
          case 'back':
            this.$swal.close()
            break
          case 'deletebank':
            this.$swal.close()
            this.$axios
              .post(API.DELETE, { id })
              .then((res) => {
                this.message = false
                this.buyloading = false
                this.subscriptions.splice(index, 1)
                if (Object.keys(this.subscriptions).length === 0) {
                  this.add_new_bank = 1
                }
                return res
              })
              .catch((error) => {
                this.buyloading = false
                this.message = this.handleAxiosError(error)
              })
            break
          default:
            this.$swal.close()
            break
        }
      })
    },

    // Helpers

    setSubscriptionDescription() {
      const isPlus = this.$config && this.$config.envname === 'plus'
      const hasSub = this.checkuser && this.checkuser.subscription === 1
      if (isPlus) {
        this.desc_subscription = hasSub
          ? 'با فعال بودن این گزینه، در زمان پایان اشتراک شما، مبلغ اشتراک ماهانه را از حساب شما کسر می کنیم'
          : 'با فعال بودن این گزینه، اشتراک ماهانه شما فعال خواهد شد و در زمان پایان اشتراک، مبلغ اشتراک ماهانه را از حساب شما کسر می کنیم'
      } else {
        const suffix =
          ' دقت کنید که تنها فیلم و سریال های موجود در آپرا پلاس را می توانید با خرید این اشتراک مشاهده نمایید'
        this.desc_subscription = hasSub
          ? 'با فعال بودن این گزینه، در زمان پایان اشتراک شما، مبلغ اشتراک ماهانه را از حساب شما کسر می کنیم.' +
            suffix
          : 'با فعال بودن این گزینه، اشتراک ماهانه شما فعال خواهد شد و در زمان پایان اشتراک، مبلغ اشتراک ماهانه را از حساب شما کسر می کنیم.' +
            suffix
      }
    },

    collectSelectedSeriesIds() {
      const series = []
      for (const value of this.directdebit_subscriptions.series) {
        if (value.directdebit) {
          series.push(value.id)
        }
      }
      return series
    },

    formatMobileFromApi(mobileFromApi) {
      if (!mobileFromApi) return ''
      const m = String(mobileFromApi)
      return m.startsWith('0') ? m : '0' + m
    },

    getRefCookizSafe() {
      let ref = this.$cookiz && this.$cookiz.get ? this.$cookiz.get('ref') : 0
      if (!ref || isNaN(ref)) ref = 0
      return ref
    },

    applyBodyBlur() {
      const el = document.getElementsByClassName('default')[0]
      if (el) el.classList.add('blure')
    },

    removeBodyBlur() {
      const el = document.getElementsByClassName('default')[0]
      if (el) el.classList.remove('blure')
    },

    toggleBodyMode(cls, restore) {
      // restore=true -> add original class back; else remove it
      if (restore) {
        document.body.classList.add(cls)
      } else {
        document.body.classList.remove(cls)
      }
    },

    handleAxiosError(error) {
      return error &&
        error.response &&
        error.response.data &&
        error.response.data.message
        ? error.response.data.message
        : 'خطایی رخ داده است'
    },
  },
}
</script>
