<template>
  <div>
    <section class="download-page">
      <div class="container">
        <div class="row justify-content-center">
          <div class="callback-page-content">
            <div class="download">
              <div class="download-links">
                <div
                  class="download-links-body download-links-body-header"
                  :class="{
                    'download-links-0': divcount == 0,
                    'download-links-2': divcount == 2,
                    'download-links-3': divcount == 3,
                  }"
                >
                  <div class="download-links-items">
                    <div class="col-12">
                      <svg
                        v-if="loading || buyloading"
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
                          data-v-28f0b4cb=""
                          fill="#373737"
                          d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                          transform="rotate(109.69 50 50)"
                        >
                          <animateTransform
                            data-v-28f0b4cb=""
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
                </div>

                <div class="download-links-body">
                  <div class="download-links-inner">
                    <!-- Loading State -->
                    <loading-spinner
                      v-if="loading || buyloading"
                      message="در حال بررسی"
                    />

                    <!-- Success State -->
                    <div v-else-if="success">
                      <payment-success-content
                        :files="files"
                        :purchase-type="$route.query.purchase || 'download'"
                        :is-logged-in="$auth.loggedIn"
                        :checkuser="checkuser"
                        @watch="EKRAN($event)"
                        @copy="COPY($event)"
                        @show-direct-debit="SHOW_MODAL_DIRECTDEBIT()"
                      />
                      <support-contact-section />
                    </div>

                    <!-- Error States -->
                    <div v-else>
                      <payment-error-content
                        v-if="checkagain"
                        error-type="checkagain"
                        :ref-num="ref_num"
                        :message="message"
                      />
                      <payment-error-content
                        v-else-if="show_login == 1"
                        error-type="show_login"
                        :ref-num="ref_num"
                        :message="message"
                      />
                      <payment-error-content
                        v-else-if="show_login == 0"
                        error-type="default"
                        :ref-num="ref_num"
                        :message="message"
                      />

                      <support-contact-section />
                    </div>
                  </div>
                </div>

                <callback-footer
                  v-if="!loading && !buyloading"
                  :files="files"
                  :success="success"
                  :checkagain="checkagain"
                  :show-login="show_login == 1"
                  :backtoapp="backtoapp"
                  :title="title"
                  :divcount="divcount"
                  @check-payment="CHECK(1)"
                  @retry-payment="BUY()"
                  @login="Login()"
                  @copy="COPY($event)"
                  @return-to-content="Push2($event.id, $event.type)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LoadingSpinner from '@/components/callback/LoadingSpinner.vue'
import PaymentSuccessContent from '@/components/callback/PaymentSuccessContent.vue'
import PaymentErrorContent from '@/components/callback/PaymentErrorContent.vue'
import SupportContactSection from '@/components/callback/SupportContactSection.vue'
import CallbackFooter from '@/components/callback/CallbackFooter.vue'

export default {
  components: {
    LoadingSpinner,
    PaymentSuccessContent,
    PaymentErrorContent,
    SupportContactSection,
    CallbackFooter,
  },
  layout: 'nofooter',
  data() {
    return {
      castShow: null,
      method: 'saman',
      login: 0,
      message: null,
      buyloading: false,
      loading: false,
      disable_button: false,
      backtoapp: false,
      checkagain: false,
      divcount: 0,
      success: false,
      files: null,
      ref_num: 0,
      show_login: 0,
      title: null,
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: 'callback',
      },
      title: 'پرداخت',
    }
  },
  computed: {
    ...mapGetters({ cart: 'download/cart' }),
    checkuser() {
      return this.$auth.loggedIn ? this.$auth.user : null
    },
  },
  watch: {
    async success(val) {
      if (
        this.$route.query.purchase == 'subscription' &&
        this.$auth.loggedIn &&
        val === true
      ) {
        await this.$auth.fetchUser()
        this.$store.dispatch('SPA_INIT')
      }
    },
  },
  mounted() {
    this.divcount = 0

    if (
      window.location.host == 'app.upera.tv' ||
      window.location.host == 'app.pofefilm.tv'
    ) {
      this.backtoapp = true
      this.divcount = 1
    }

    this.CHECK(0)
    this.$store.dispatch('download/GET_CART')

    window.addEventListener('resize', this.Resize)
    this.Resize('e')

    document.body.classList.add('loaded')
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.Resize)
  },
  methods: {
    Push2(id, type) {
      this.hideModal()

      this.$router.push({
        name: type + '-id',
        params: {
          id: id,
        },
      })
    },
    CHECK(check) {
      this.loading = true

      var ref = this.$cookiz.get('ref')
      if (!ref || isNaN(ref)) ref = 0

      var api_url

      var purchase = this.$route.query.purchase

      if (
        purchase != 'download' &&
        purchase != 'wallet' &&
        purchase != 'subscription' &&
        purchase != 'directdebit'
      ) {
        purchase = 'download'
      }

      if (this.$auth.loggedIn) {
        api_url = '/payments/' + purchase + '/callback'
      } else {
        api_url = '/ghost/payments/' + purchase + '/callback'
      }

      var check_it_again = 0

      if (check) {
        check_it_again = 1
      }
      this.$axios
        .get(api_url, {
          params: {
            payment_id: this.$route.query.payment_id,
            ref_num: this.$route.query.ref_num,
            method: this.$route.query.method,
            check_it_again: check_it_again,
            ref: ref,
          },
        })
        .then(
          (res) => {
            this.loading = false
            if (
              window.location.host == 'app.upera.tv' ||
              window.location.host == 'app.pofefilm.tv'
            ) {
              this.divcount = 1
            } else {
              this.divcount = 0
            }
            if (res.status === 200) {
              this.success = true
              this.ref_num = res.data.data.ref
              this.files = res.data.data.files
              if (this.files != null) this.divcount = this.divcount + 1

              if (this.$route.query.purchase == 'download') {
                localStorage.removeItem('_cart')
              }
            } else {
              this.divcount = this.divcount + 1

              this.message = res.data.message

              if ('show_login' in res.data) {
                this.show_login = res.data.show_login
              }
            }
            if ('title' in res.data && res.data.title != null) {
              this.title = res.data.title
              this.divcount = this.divcount + 1
            }
          },
          (err) => {
            this.loading = false
            if (
              window.location.host == 'app.upera.tv' ||
              window.location.host == 'app.pofefilm.tv'
            ) {
              this.divcount = 1
            } else {
              this.divcount = 0
            }
            this.divcount = this.divcount + 1

            this.message = err.response.data.message

            if ('show_login' in err.response.data) {
              this.show_login = err.response.data.show_login
            }
            if (
              'title' in err.response.data &&
              err.response.data.title != null
            ) {
              this.title = err.response.data.title
              this.divcount = this.divcount + 1
            }
          }
        )
      if (check) this.checkagain = true
    },
    BUY() {
      var ref = this.$cookiz.get('ref')
      if (!ref || isNaN(ref)) ref = 0
      if (this.$route.query.method == 'vandar_subscriptions') {
        if (this.$auth.loggedIn) {
          this.buyloading = true
          this.$axios
            .post('/directdebit/buy_subscription_bypaymentid', {
              payment_id: this.$route.query.payment_id,
              callback_url: location.origin + '/callback',
            })
            .then(
              (res) => {
                if (res.status === 200 && res.data.data.pay_url) {
                  window.location.href = res.data.data.pay_url
                } else if (res.data.message) {
                  this.message = res.data.message
                }
                this.message = false
                this.buyloading = false
              },
              (error) => {
                this.buyloading = false
                this.message = error.response.data.message
              }
            )
        } else {
          this.$store.dispatch('login/SHOW_MODAL', {
            premessage: null,
            premobile: null,
            preredirect: null,
            prerefresh: false,
          })
        }
      } else if (this.$route.query.purchase == 'subscription') {
        if (this.$auth.loggedIn) {
          this.buyloading = true

          var content_id = 0
          var content_type = 0

          if (this.title != null) {
            content_id = this.title.id
            content_type = this.title.type
          }

          //this.checkuser.domain
          this.$axios
            .post('/change_subscription', {
              method: this.$route.query.method,
              plan_id: this.$route.query.plan,
              host: window.location.hostname,
              content_id: content_id,
              content_type: content_type,
              ref: ref,
            })
            .then(
              (res) => {
                if (res.status === 200) {
                  this.data = res.data

                  if (this.data && this.data.status == 'success') {
                    window.location.href = this.data.link
                  }
                } else {
                  this.buyloading = false
                  this.message = res.data.message
                }
              },
              (error) => {
                this.buyloading = false
                this.message = error.response.data.message
                return error
              }
            )
        } else {
          this.$store.dispatch('login/SHOW_MODAL', {
            premessage: null,
            premobile: null,
            preredirect: null,
            prerefresh: false,
          })
        }
      } else if (this.$route.query.purchase == 'wallet') {
        if (this.$auth.loggedIn) {
          this.SHOW_MODAL_CREDIT()
        } else {
          this.$store.dispatch('login/SHOW_MODAL', {
            premessage: null,
            premobile: null,
            preredirect: null,
            prerefresh: false,
          })
        }
      } else if (this.$route.query.purchase == 'directdebit') {
        if (this.$auth.loggedIn) {
          this.SHOW_MODAL_DIRECTDEBIT()
        } else {
          this.$store.dispatch('login/SHOW_MODAL', {
            premessage: null,
            premobile: null,
            preredirect: null,
            prerefresh: false,
          })
        }
      } else {
        var api_url
        if (this.$auth.loggedIn) {
          api_url = '/get/buy'
        } else {
          api_url = '/ghost/get/buy'
        }
        this.buyloading = true

        this.$axios
          .post(api_url, {
            cart: this.cart,
            mobile: this.$route.query.mobile,
            callback_url:
              location.origin + '/callback?mobile=' + this.$route.query.mobile,
            method: this.method,
            ref: ref,
          })
          .then(
            (res) => {
              if (res.status === 200) {
                window.location.href = res.data.data.pay_url
              } else {
                this.buyloading = false
                this.message = res.data.message
              }
            },
            (error) => {
              this.buyloading = false
              this.premessage = error.response.data.message
              if (error.response.data.login)
                this.$store.dispatch('login/SHOW_MODAL', {
                  premessage: this.premessage,
                  premobile: this.$route.query.mobile,
                  preredirect: null,
                  prerefresh: false,
                })
            }
          )
      }
    },

    EKRAN(ekranid) {
      this.$router.push({
        name: 'ekran-id',
        params: {
          id: ekranid,
        },
      })
    },
    Resize(e) {
      let vh = window.innerHeight * 0.01
      let element = document.getElementsByClassName('download-links')

      if (element.length) element[0].style.setProperty('--vh', `${vh}px`)

      return e
    },
    Login() {
      this.$store.dispatch('login/SHOW_MODAL', {
        premessage: null,
        premobile: null,
        preredirect: null,
        prerefresh: false,
      })
    },
    SHOW_MODAL_CREDIT() {
      this.$store.dispatch('credit/SHOW_MODAL', { prewallet: this.wallet })
    },

    SHOW_MODAL_DIRECTDEBIT() {
      this.$store.dispatch('directdebit/SHOW_MODAL', {
        premobile: this.mobile,
        forsubscription: false,
        id: this.id,
        type: this.type,
        paymentid: 0,
      })
    },
    HIDE_MODAL_DIRECTDEBIT() {
      this.$store.dispatch('directdebit/HIDE_MODAL')
    },
    async COPY(text) {
      try {
        await this.$copyText(text)
        this.$swal('لینک کپی شد', {
          icon: 'success',
        })
      } catch (e) {
        this.$swal('لینک در دیوایس شما قابل کپی نیست.')
        return e
      }
    },
  },
}
</script>

<style scoped>
.callback-page-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.download-page {
  min-height: 100vh;
  padding: 60px 0;
}

.download-links {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* Center all sections and make them 50% width on desktop */
@media (min-width: 768px) {
  .download-links >>> .download-links-body,
  .download-links >>> .download-links-footer {
    width: 50%;
    margin: 0 auto;
  }
}
</style>

<style>
.callback #tab-bar,
.callback header,
.callback footer {
  z-index: 2000 !important;
}
.callback .search {
  z-index: 9999999 !important;
}

.divider {
  border: 1px solid var(--Gray-N100, #f5f5f5) !important;
  margin: 1rem;
}
</style>
