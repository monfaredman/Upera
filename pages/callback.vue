<!--
  =====================================================================
  PAYMENT CALLBACK PAGE - TEST MODE DOCUMENTATION
  =====================================================================

  This page now includes comprehensive mock data for testing and redesigning
  the PaymentSuccessContent component without making actual API calls.

  HOW TO USE TEST MODE:
  ---------------------

  Method 1: URL Parameter (Auto-enable)
    Add ?test=true to URL: http://localhost:3000/callback?test=true
    Or with specific scenario: ?test=true&scenario=multipleFilesDownload

  Method 2: Console Commands
    window.toggleTestMode()           - Enable/disable test mode
    window.listMockScenarios()        - List all available scenarios
    window.loadMockScenario('name')   - Load a specific scenario

  AVAILABLE MOCK SCENARIOS:
  -------------------------

  1. singleFileDownload
     - Single file, no ekran screening
     - Shows download instructions for Android/iOS/PC

  2. multipleFilesDownload
     - Multiple files (3 qualities: 1080p, 720p, 480p)
     - Tests file list rendering

  3. presaleEkran
     - Presale movie with ekran screening
     - Shows presale date warning + ekran hour limit

  4. ekranOnly
     - Movies with ekran screening (no presale)
     - Shows ekran hour limit warning

  5. subscriptionLoggedIn
     - Subscription purchase (logged in user)
     - Shows remaining days

  6. subscriptionGuest
     - Subscription purchase (guest user)
     - No user data shown

  7. walletCharge
     - Wallet/credit charge success

  8. directDebit
     - Direct debit activation success
     - Shows settings button

  CONSOLE EXAMPLES:
  -----------------
  // Enable test mode
  window.toggleTestMode()

  // List all scenarios
  window.listMockScenarios()

  // Test multiple files
  window.loadMockScenario('multipleFilesDownload')

  // Test subscription
  window.loadMockScenario('subscriptionLoggedIn')

  // Test ekran movies
  window.loadMockScenario('ekranOnly')

  =====================================================================
-->
<template>
  <div>
    <!-- Test Mode Indicator & Control Panel -->
    <div v-if="testMode" class="test-mode-banner">
      <div class="test-mode-header">
        🧪 TEST MODE ACTIVE
        <button class="test-mode-toggle-btn" @click="toggleTestMode">
          Exit Test Mode
        </button>
      </div>
      <div class="test-mode-controls">
        <label>Load Scenario:</label>
        <select
          class="scenario-select"
          @change="loadMockScenario($event.target.value)"
        >
          <option
            v-for="(scenario, key) in mockScenarios"
            :key="key"
            :value="key"
          >
            {{ key }} - {{ scenario.purchaseType }} ({{
              scenario.files ? scenario.files.length + ' files' : 'no files'
            }}{{ !scenario.success ? ' - ERROR' : '' }})
          </option>
        </select>
        <button class="test-mode-btn" @click="listMockScenarios">
          List All Scenarios
        </button>
        <label style="margin-left: 12px">
          <input
            v-model="testModeReactNative"
            type="checkbox"
            style="margin-right: 6px"
            @change="toggleReactNative"
          />
          React Native (reactnative=1)
        </label>
      </div>
    </div>

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
                        :ref-num="ref_num"
                        :wallet-amount="wallet_amount"
                        :wallet-balance="wallet_balance"
                        :subscription-days="subscription_days"
                        @watch="EKRAN($event)"
                        @copy="COPY($event)"
                        @show-direct-debit="SHOW_MODAL_DIRECTDEBIT()"
                        @check-payment="CHECK(1)"
                      />
                    </div>

                    <!-- Error States -->
                    <div v-else>
                      <payment-error-content
                        v-if="checkagain"
                        error-type="checkagain"
                        :ref-num="ref_num"
                        :message="message"
                        :show-refund-messages="showRefundMessage"
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
                  :purchase-type="$route.query.purchase || 'download'"
                  :is-logged-in="$auth.loggedIn"
                  @check-payment="CHECK(1)"
                  @retry-payment="BUY()"
                  @login="Login()"
                  @copy="COPY($event)"
                  @return-to-content="Push2($event.id, $event.type)"
                  @watch="EKRAN($event)"
                  @show-direct-debit="SHOW_MODAL_DIRECTDEBIT()"
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
      showRefundMessage: false,
      show_login: 0,
      title: null,
      wallet_amount: null,
      wallet_balance: null,
      subscription_days: null,
      // TEST MODE: Set to true to use mock data for testing/redesign
      testMode: false,
      testModeReactNative: false,
      // Mock data for different scenarios
      mockScenarios: {
        // Scenario 1: Single file download (no ekran)
        singleFileDownload: {
          success: true,
          purchaseType: 'download',
          files: [
            {
              id: 1,
              title: 'فیلم تست - نسخه کامل',
              presale: false,
              presale_date: null,
              screening: {
                ekran: false,
                ekran_hour: null,
              },
              qualities: [
                {
                  quality: '1080p',
                  size: '2.5 GB',
                  download_url: 'https://example.com/movie-1080p.mp4',
                },
                {
                  quality: '720p',
                  size: '1.2 GB',
                  download_url: 'https://example.com/movie-720p.mp4',
                },
                {
                  quality: '480p',
                  size: '600 MB',
                  download_url: 'https://example.com/movie-480p.mp4',
                },
              ],
            },
          ],
        },
        // Scenario 2: Multiple files download
        multipleFilesDownload: {
          success: true,
          purchaseType: 'download',
          files: [
            {
              id: 1,
              title: 'قسمت اول - فصل یک',
              presale: false,
              screening: {
                ekran: false,
              },
              qualities: [
                {
                  quality: '1080p',
                  size: '1.8 GB',
                  download_url: 'https://example.com/ep1-1080p.mp4',
                },
                {
                  quality: '720p',
                  size: '900 MB',
                  download_url: 'https://example.com/ep1-720p.mp4',
                },
                {
                  quality: '480p',
                  size: '450 MB',
                  download_url: 'https://example.com/ep1-480p.mp4',
                },
              ],
            },
            {
              id: 2,
              title: 'قسمت دوم - فصل یک',
              presale: false,
              screening: {
                ekran: false,
              },
              qualities: [
                {
                  quality: '1080p',
                  size: '1.7 GB',
                  download_url: 'https://example.com/ep2-1080p.mp4',
                },
                {
                  quality: '720p',
                  size: '850 MB',
                  download_url: 'https://example.com/ep2-720p.mp4',
                },
                {
                  quality: '480p',
                  size: '420 MB',
                  download_url: 'https://example.com/ep2-480p.mp4',
                },
              ],
            },
            {
              id: 3,
              title: 'قسمت سوم - فصل یک',
              presale: false,
              screening: {
                ekran: false,
              },
              qualities: [
                {
                  quality: '1080p',
                  size: '1.9 GB',
                  download_url: 'https://example.com/ep3-1080p.mp4',
                },
                {
                  quality: '720p',
                  size: '950 MB',
                  download_url: 'https://example.com/ep3-720p.mp4',
                },
                {
                  quality: '480p',
                  size: '470 MB',
                  download_url: 'https://example.com/ep3-480p.mp4',
                },
              ],
            },
          ],
        },
        // Scenario 3: Presale with ekran screening
        presaleEkran: {
          success: true,
          purchaseType: 'download',
          files: [
            {
              id: 1,
              title: 'فیلم پیش فروش - اکران آنلاین',
              download_url: 'https://example.com/presale-movie.mp4',
              quality: '1080p',
              size: '3 GB',
              presale: true,
              presale_date: '1404/08/15',
              screening: {
                ekran: true,
                ekran_hour: 48,
              },
            },
          ],
        },
        // Scenario 4: Ekran only (no presale)
        ekranOnly: {
          success: true,
          purchaseType: 'download',
          files: [
            {
              id: 1,
              title: 'فیلم اکران آنلاین',
              download_url: 'https://example.com/ekran-movie.mp4',
              quality: '1080p',
              size: '2.8 GB',
              presale: false,
              screening: {
                ekran: true,
                ekran_hour: 72,
              },
            },
          ],
        },
        // Scenario 5: Subscription success (logged in)
        subscriptionLoggedIn: {
          success: true,
          purchaseType: 'subscription',
          files: null,
        },
        // Scenario 6: Subscription success (not logged in)
        subscriptionGuest: {
          success: true,
          purchaseType: 'subscription',
          files: null,
        },
        // Scenario 7: Wallet charge success
        walletCharge: {
          success: true,
          purchaseType: 'wallet',
          files: null,
        },
        // Scenario 8: Direct debit activation
        directDebit: {
          success: true,
          purchaseType: 'directdebit',
          files: null,
        },
        // ========== ERROR SCENARIOS ==========
        // Scenario 9: Payment error - check again
        errorCheckAgain: {
          success: false,
          purchaseType: 'download',
          files: null,
          errorType: 'checkagain',
          message: 'پرداخت ناموفق بود',
          refNum: '987654321',
        },
        // Scenario 10: Payment error - show login
        errorShowLogin: {
          success: false,
          purchaseType: 'subscription',
          files: null,
          errorType: 'show_login',
          message: 'برای استفاده باید وارد شوید',
          refNum: '123789456',
        },
        // Scenario 11: Payment error - default
        errorDefault: {
          success: false,
          purchaseType: 'wallet',
          files: null,
          errorType: 'default',
          message: 'خطا در انجام تراکنش',
          refNum: '456123789',
        },
      },
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

    // ==================== TEST MODE SETUP ====================
    // Expose test functions to window for easy console access
    window.toggleTestMode = this.toggleTestMode.bind(this)
    window.loadMockScenario = this.loadMockScenario.bind(this)
    window.listMockScenarios = this.listMockScenarios.bind(this)

    // Auto-enable test mode if ?test=true or ?testMode=true in URL
    if (
      this.$route.query.test === 'true' ||
      this.$route.query.testMode === 'true'
    ) {
      this.testMode = true
      this.testModeReactNative = this.$route.query.reactnative === '1'
      const scenario = this.$route.query.scenario || 'singleFileDownload'
      this.loadMockScenario(scenario)
      console.log('🧪 Auto-enabled test mode from URL parameter')
      console.log('💡 Type window.listMockScenarios() to see all scenarios')
      console.log('💡 Type window.loadMockScenario("scenarioName") to switch')
      console.log('💡 Type window.toggleTestMode() to disable test mode')
    } else {
      // Normal production flow
      this.CHECK(0)
    }
    // ==================== END TEST MODE SETUP ====================

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
      this.showRefundMessage = true
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
    // ==================== TEST/MOCK DATA METHODS ====================
    // Toggle test mode on/off
    toggleTestMode() {
      this.testMode = !this.testMode
      if (this.testMode) {
        this.loadMockScenario('singleFileDownload')
        console.log('🧪 Test Mode ENABLED - Using mock data')
        console.log('Available scenarios:', Object.keys(this.mockScenarios))
        console.log('Use: window.loadMockScenario("scenarioName") to switch')
      } else {
        this.success = false
        this.files = null
        this.loading = false
        console.log('✅ Test Mode DISABLED - Back to production')
      }
    },
    // Load a specific mock scenario
    loadMockScenario(scenarioName) {
      if (!this.mockScenarios[scenarioName]) {
        console.error('❌ Unknown scenario:', scenarioName)
        console.log('Available scenarios:', Object.keys(this.mockScenarios))
        return
      }

      const scenario = this.mockScenarios[scenarioName]
      this.success = scenario.success
      this.files = scenario.files
      this.loading = false
      this.buyloading = false
      this.checkagain = false
      this.show_login = 0
      this.ref_num = scenario.refNum || '123456789'
      this.message = scenario.message || null

      // Handle error scenarios
      if (!scenario.success) {
        if (scenario.errorType === 'checkagain') {
          this.checkagain = true
          this.show_login = 0
        } else if (scenario.errorType === 'show_login') {
          this.checkagain = false
          this.show_login = 1
        } else if (scenario.errorType === 'default') {
          this.checkagain = false
          this.show_login = 0
        }
      } else {
        // Reset error states for success scenarios
        this.checkagain = false
        this.show_login = 0
        this.message = null
      }

      // Set scenario-specific data
      if (scenarioName === 'walletCharge') {
        this.wallet_amount = '50000'
        this.wallet_balance = '125000'
      } else if (
        scenarioName === 'subscriptionLoggedIn' ||
        scenarioName === 'subscriptionGuest'
      ) {
        this.subscription_days = 30
      }

      // Update query param for purchase type testing
      const newQuery = {
        ...this.$route.query,
        purchase: scenario.purchaseType,
      }

      // Add or remove reactnative param based on checkbox
      if (this.testModeReactNative) {
        newQuery.reactnative = '1'
      } else {
        delete newQuery.reactnative
      }

      this.$router.replace({ query: newQuery })

      console.log('📦 Loaded mock scenario:', scenarioName)
      console.log('Purchase Type:', scenario.purchaseType)
      console.log('Success:', scenario.success)
      console.log('Files:', scenario.files)
      console.log('React Native:', this.testModeReactNative)
    },
    // Toggle React Native mode
    toggleReactNative() {
      const newQuery = { ...this.$route.query }
      if (this.testModeReactNative) {
        newQuery.reactnative = '1'
      } else {
        delete newQuery.reactnative
      }
      this.$router.replace({ query: newQuery })
      console.log(
        '📱 React Native mode:',
        this.testModeReactNative ? 'ENABLED' : 'DISABLED'
      )
    },
    // List all available test scenarios
    listMockScenarios() {
      console.log('📋 Available Mock Scenarios:')
      console.log('\n✅ SUCCESS SCENARIOS:')
      Object.keys(this.mockScenarios).forEach((key) => {
        const scenario = this.mockScenarios[key]
        if (scenario.success) {
          console.log(
            `  - ${key}: ${scenario.purchaseType} (${
              scenario.files ? scenario.files.length + ' files' : 'no files'
            })`
          )
        }
      })
      console.log('\n❌ ERROR SCENARIOS:')
      Object.keys(this.mockScenarios).forEach((key) => {
        const scenario = this.mockScenarios[key]
        if (!scenario.success) {
          console.log(
            `  - ${key}: ${scenario.purchaseType} - ${scenario.errorType}`
          )
        }
      })
      console.log('\n📱 React Native Testing:')
      console.log('  Check the "React Native (reactnative=1)" checkbox')
      console.log('\nUsage: window.loadMockScenario("scenarioName")')
    },
  },
}
</script>

<style scoped>
/* Test Mode Styling */
.test-mode-banner {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 10000;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  margin-top: 20px;
}

.test-mode-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 16px;
}

.test-mode-toggle-btn {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: white;
  padding: 6px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.2s;
}

.test-mode-toggle-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

.test-mode-controls {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}

.test-mode-controls label {
  font-weight: 600;
  font-size: 14px;
}

.scenario-select {
  flex: 1;
  min-width: 250px;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.95);
  color: #333;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
}

.scenario-select:hover {
  background: white;
  border-color: rgba(255, 255, 255, 0.6);
}

.test-mode-btn {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.2s;
}

.test-mode-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

.callback-page-content {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.download-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  position: relative;
  padding: 40px 20px;
  top: auto;
  bottom: auto;
  left: auto;
  right: auto;
}

.download-page .container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.download-page .row {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.download-links {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
}

.download-links-body {
  display: flex;
  flex-direction: column;
  padding: 24px 24px 0 24px;
}

.download-links-body-header {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.download-links-inner {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.download-links-items {
  display: flex;
  flex-direction: column;
  width: 100%;
}

/* Override positioning from global styles - use flexbox instead */
.download-links-body .download-links-items,
.download-links-0 .download-links-items,
.download-links-2 .download-links-items,
.download-links-3 .download-links-items {
  position: static !important;
  top: auto !important;
  bottom: auto !important;
  left: auto !important;
  right: auto !important;
}

.download-links-footer {
  position: static !important;
  left: auto !important;
  right: auto !important;
  bottom: auto !important;
}

.download {
  display: flex;
  flex-direction: column;
  width: 100%;
}

/* Remove any absolute positioning from download-links-body */
.download-links-body {
  position: static !important;
}

.download-links-body-header {
  position: static !important;
}

@media (max-width: 767px) {
  .test-mode-header {
    font-size: 14px;
  }

  .test-mode-controls {
    flex-direction: column;
    align-items: stretch;
  }

  .scenario-select {
    width: 100%;
    min-width: auto;
  }

  .download-page {
    padding: 20px 15px;
  }

  .callback-page-content {
    max-width: 100%;
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
