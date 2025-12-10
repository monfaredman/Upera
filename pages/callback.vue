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
<<<<<<< HEAD
                      <svg v-if="loading || buyloading" id="L9" class="svg-loader" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve"><path data-v-28f0b4cb="" fill="#373737" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50" transform="rotate(109.69 50 50)"><animateTransform data-v-28f0b4cb="" attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" /></path></svg>

                      <span v-if="false && message && !loading && !buyloading" class="text-danger h6 text-justify">{{ message }}<br><br></span>


                      <span v-if="!loading && !buyloading && files!=null && files.length == 1">
                        <span v-for="(item,index) in files" :key="index">
                          <span v-show="item.presale && !item.screening.ekran" class="text-danger h6">اکنون می توانید فایل را دانلود نمایید و در صبح {{ item.presale_date }} کلمه عبور از طریق شماره همراه به شما اطلاع رسانی خواهد شد و می توانید همزمان با پخش خانگی فیلم را مشاهده نمایید.<br><br></span>

                          <span v-show="item.presale && item.screening.ekran" class="text-danger h6">شما در صبح {{ item.presale_date }} می توانید از طریق لینک زیر که برای شما پیامک نیز شده است، همزمان با اکران سراسری فیلم را مشاهده نمایید.<br><br>
                            برای تماشا از خانه، سانس سینمای آنلاین {{ item.screening.ekran_hour }} ساعته است، طوری تنظیم کنید که تماشای کامل فیلم را در سانس خود از دست ندهید.<br><br></span>

                          <span v-show="!item.presale && item.screening.ekran" class="text-danger h6 text-justify">برای تماشا از خانه، سانس سینمای آنلاین {{ item.screening.ekran_hour }} ساعته است، دقیقا از از زمانی که فیلم را شروع به تماشا کنید، سانس شما آغاز و تا {{ item.screening.ekran_hour }} ساعت بعد به پایان می‌رسد، طوری تنظیم کنید که تماشای کامل فیلم را در سانس خود از دست ندهید.<br><br></span>
                        </span>
                      </span>
                    </div>
                    <div v-if="!loading && !buyloading && files!=null && files.length > 1">
                      <div v-for="(item,index) in files" :key="index" class="download-links-item">
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="row">
                              <div class="col-9">
                                <div class="font-weight-bold">
                                  {{ item.name }}
                                </div>
                                <div v-show="item.presale" class="download-suitable">
                                  تاریخ پخش: {{ item.presale_date }}
                                </div>
                              </div>
                              <div class="col-3 d-flex justify-end align-items-end text-right">
                                <div v-if="!item.screening.ekran && item.link2" class="download-size">
                                  <a :href="item.link2">
                                    لینک کمکی
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>



                          <div v-if="item.screening.ekran" class="col-sm-6">
                            <div class="d-flex h-100 align-items-end">
                              <div class="download-full-link">
                                <button class="btn btn-secondary btn-block" @click="EKRAN(item.screening.ekran_id)">
                                  تماشا
                                  <i class="icon-play" />
                                </button>
                              </div>
                            </div>
                          </div>

                          <div v-else class="col-sm-6">
                            <div class="d-flex h-100 align-items-end">
                              <div class="download-link">
                                <a :href="item.link1" class="btn btn-secondary btn-block">
                                  {{ $t('show.download') }}
                                  <i class="icon-download" />
                                </a>
                              </div>
                              <div class="copy-link">
                                <button class="btn btn-copy btn-block" @click="COPY(item.link1)">
                                  کپی لینک
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-else-if="!loading && !buyloading && files!=null && files.length == 1" class="text-center">
                      از خرید قانونی شما<br><span style="color:#4b4bf9">ممنونیم</span>
                      <div class="offset-2 col-8">
                        <img class="img-fluid" src="@/assets/img/success.png">
                      </div>
                      پرداخت شما موفقیت آمیز بود




                      <span v-for="(item,index) in files" :key="index">
                        <span v-if="!item.screening.ekran">
                          <br><br>

                          در گوشی های اندروید از برنامه adm جهت دانلود فیلم استفاده کنید ( <a href="https://play.google.com/store/apps/details?id=com.dv.adm&amp;hl=fa" target="_blank">نصب</a>)<br>
                          در گوشی ios از برنامه Documents جهت دانلود فیلم استفاده کنید (<a href="https://itunes.apple.com/us/app/documents-by-readdle/id364901807?mt=8" target="_blank">آیتیونز</a>)<br>
                          در کامپیوتر از برنامه Flash Get یا idm جهت دانلود فیلم استفاده نمایید
                          <br><br>
                          توجه داشته باشید که برای جلوگیری از دانلود ناقص یا آسیب دیدن به فایل های خریداری شده، حتما باید از نرم افزارهای دانلود منیجر استفاده شود. بدین صورت حتی اگر دانلود شما در هر زمانی و به هر دلیلی نیمه کاره متوقف شد، میتوانید در زمان دلخواه خود به راحتی به ادامه دانلود بپردازید.
                        </span>
                      </span>
                    </div>
                    <div v-else-if="!loading && !buyloading && success && $auth.loggedIn && $route.query.purchase=='subscription'" class="text-center">
                      از خرید اشتراک شما<br><span style="color:#4b4bf9">ممنونیم</span>
                      <div class="offset-2 col-8">
                        <img class="img-fluid" src="@/assets/img/success.png">
                      </div>
                      پرداخت شما موفقیت آمیز بود

                      <br><br>

                      {{ checkuser.days_period_to_end }} روز از اشتراک شما باقیمانده است
                    </div>
                    <div v-else-if="!loading && !buyloading && success && $route.query.purchase=='subscription'" class="text-center">
                      از خرید اشتراک شما<br><span style="color:#4b4bf9">ممنونیم</span>
                      <div class="offset-2 col-8">
                        <img class="img-fluid" src="@/assets/img/success.png">
                      </div>
                      پرداخت شما موفقیت آمیز بود

                      <br><br>
                    </div>
                    <div v-else-if="!loading && !buyloading && success && $route.query.purchase=='wallet'" class="text-center">
                      از افزایش موجودیتان<br><span style="color:#4b4bf9">ممنونیم</span>
                      <div class="offset-2 col-8">
                        <img class="img-fluid" src="@/assets/img/success.png">
                      </div>
                      پرداخت شما موفقیت آمیز بود

                      <br><br>
                    </div>
                    <div v-else-if="!loading && !buyloading && success && $route.query.purchase=='directdebit'" class="text-center">
                      از شما جهت فعال کردن پرداخت خودکار<br><span style="color:#4b4bf9">ممنونیم</span>
                      <div class="offset-2 col-8">
                        <img class="img-fluid" src="@/assets/img/success.png">
                      </div>

                      <button class="btn btn-copy btn-light btn-block" @click="SHOW_MODAL_DIRECTDEBIT()">
                        تنظیمات پرداخت خودکار
                      </button>
                      <br><br>
                    </div>
                    <div v-else-if="!loading && !buyloading && checkagain" class="text-center">
                      <div class="offset-2 col-8">
                        <img class="img-fluid" src="@/assets/img/failed.png">
                      </div>
                      <b>متاسفانه خرید شما موفقیت آمیز نبود</b>

                      <br><br>

                      اگر مبلغی از حساب شما کسر شده است، نهایتا ظرف ۷۲ ساعت آینده به حساب شما برگشت داده خواهد شد
                    </div>
                    <div v-else-if="!loading && !buyloading && show_login==0" class="text-center">
                      <div class="offset-2 col-8">
                        <img class="img-fluid" src="@/assets/img/check.png">
                      </div>
                      <b>متاسفانه خرید شما موفقیت آمیز نبود</b><br>
                      و یا در حین انجام تراکنش مشکلی رخ داده است

                      <br><br> <br><br>

                      می توانید پرداخت خود را بررسی کنید و یا نسبت به پرداخت مجدد اقدام کنید
                    </div>


                    <div v-else-if="!loading && !buyloading && show_login==1" class="text-center">
                      <div class="offset-2 col-8">
                        <img class="img-fluid" src="@/assets/img/check.png">
                      </div>
                      <b>پرداخت شما موفقیت آمیز بوده است</b><br>
                      اما برای استفاده از آن باید وارد سایت شوید

                      <br><br> <br><br>
                    </div>


                    <div v-if="!loading && !buyloading" class="col-12 p-4 text-right">
                      <br><a href="tel:02191690309">تلفن پشتیبانی در ساعات اداری:‌ <br>02191690309</a><br><br>
                      <a href="tel:09022018555">تلفن پشتیبانی در ساعات غیر اداری:‌ <br>09022018555</a><br><br>
                      <a href="https://telegram.me/srmweb" target="_blank">تلگرام پشتیبانی</a>
=======
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
>>>>>>> task/refactor-currect-version
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
                      <PaymentSuccessContent
                        :files="files"
                        :purchase-type="$route.query.purchase || 'download'"
                        :is-logged-in="$auth.loggedIn"
                        :checkuser="checkuser"
                        :ref-num="ref_num"
                        :wallet-amount="
                          walletDetail && walletDetail.added_amount
                            ? walletDetail.added_amount
                            : null
                        "
                        :wallet-balance="
                          walletDetail && walletDetail.current_balance
                            ? walletDetail.current_balance
                            : my_credit
                        "
                        :subscription-days="subscription_days"
                        @watch="EKRAN($event)"
                        @copy="COPY($event)"
                        @show-direct-debit="SHOW_MODAL_DIRECTDEBIT()"
                        @check-payment="CHECK(1)"
                      />
                    </div>
<<<<<<< HEAD
                  </div>
                  <div v-if="title!=null" class="download-links-item">
                    <div v-if="$route.query.reactnative&&$route.query.reactnative=='1'" class="row">
                      <div class="col-12">
                        <a :href="`uperaapp://callback?${queryString}`" class="btn btn-second btn-block">
                          بازگشت به اپلیکیشن
                          <i class="fa fa-arrow-alt-circle-left" />
                        </a>
                      </div>
                    </div>
                    <div v-else class="row">
                      <div class="col-12">
                        <a v-if="title.type=='movie'" href="" class="btn btn-second btn-block" @click.prevent="Push2(title.id,title.type)">
                          بازگشت به صفحه فیلم
                          <i class="fa fa-arrow-alt-circle-left" />
                        </a>
                        <a v-else-if="title.type=='series'" class="btn btn-second btn-block" href="" @click.prevent="Push2(title.id,title.type)">
                          بازگشت به صفحه سریال
                          <i class="fa fa-arrow-alt-circle-left" />
                        </a>
                        <a v-else href="" class="btn btn-second btn-block" @click.prevent="Push2(title.id,title.type)">
                          بازگشت به صفحه این قسمت سریال
                          <i class="fa fa-arrow-alt-circle-left" />
                        </a>
                      </div>
=======

                    <!-- Error States -->
                    <div v-else>
                      <PaymentErrorContent
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
>>>>>>> task/refactor-currect-version
                    </div>
                  </div>
                </div>

                <CallbackFooter
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
<<<<<<< HEAD
import {mapGetters} from 'vuex'

  export default {
    layout: "nofooter",
    data() {
      return {
        castShow: null,
        method: "saman",
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
        title: null
      }
    },
  head() {

    return {
    bodyAttrs: {
      class: 'callback'
    },title:  'پرداخت' }
  },
    computed: {
        ...mapGetters({cart: "download/cart"}),

        queryString() {
         const params = new URLSearchParams()
        // Add all query parameters dynamically
         Object.entries(this.$route.query).forEach(([key, value]) => {
         if (value) params.append(key, value)
         })

         return params.toString()
        },

=======
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
      walletDetail: null,
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
        // Scenario 1: Single file download (matching real API structure)
        singleFileDownload: {
          success: true,
          purchaseType: 'download',
          files: [
            {
              id: 3024942,
              m_id: '828193b0-f4f2-11ef-b260-6b4574883f9f',
              title: 'قیف',
              poster:
                'https://thumb.upera.shop/s3/posters/eMUobcb7reFy8BBgveWt.jpg',
              type: 'movie',
              presale: false,
              presale_date: '11 دی',
              screening: {
                ekran: 0,
                ekran_period_end: null,
                ekran_hour: 0,
                ekran_owned: 0,
                owned_period_end: null,
                ekran_id: 0,
              },
              stream_link:
                'https://s800.upera.tv/hls.m3u8?id=828193b0-f4f2-11ef-b260-6b4574883f9f&resolution[360]=RCSiKxdLkMEr1f4yuarZ&resolution[480]=evSn3829HnBPWqlXm6oO&resolution[720]=0NQ3tUuVakEiev9VTOOm&resolution[1080]=K8EF1gurSoygIkpCRnv6&md5=K9BGq3YQejRC_6e1tfLIAw&expires=1762799529',
              qualities: [
                {
                  quality: '480p',
                  size: '',
                  download_url:
                    'https://dl.upera.shop/3024942/wqjz6911e9597c3b5/Ghif-480.mp4',
                },
              ],
            },
          ],
        },
        // Scenario 2: Multiple files download (matching real API structure)
        multipleFilesDownload: {
          success: true,
          purchaseType: 'download',
          files: [
            {
              id: 3059192,
              m_id: '6dbe3540-b8d0-11f0-b284-8d7812ae3350',
              title: 'قسمت هفدهم از یاد رفته',
              poster:
                'https://thumb.upera.shop/s3/posters/tVUt1SwMGEth138YeqbM.jpg',
              type: 'episode',
              presale: false,
              presale_date: '11 دی',
              screening: {
                ekran: 0,
                ekran_period_end: null,
                ekran_hour: 0,
                ekran_owned: 0,
                owned_period_end: null,
                ekran_id: 0,
              },
              stream_link: null,
              qualities: [
                {
                  quality: '480p',
                  size: '',
                  download_url:
                    'https://dl.upera.shop/3059192/426g6911ec287f891/TheForgotten_S1E17-480.mp4',
                },
              ],
            },
            {
              id: 3047391,
              m_id: '87de2750-72a8-11f0-9bba-91b158394961',
              title: 'هفت بهار نارنج',
              poster:
                'https://thumb.upera.shop/s3/posters/4CbsTo4aNewrwYTARn6Q.jpg',
              type: 'movie',
              presale: false,
              presale_date: '11 دی',
              screening: {
                ekran: 0,
                ekran_period_end: null,
                ekran_hour: 0,
                ekran_owned: 0,
                owned_period_end: null,
                ekran_id: 0,
              },
              stream_link:
                'https://s13000.upera.tv/hls.m3u8?id=87de2750-72a8-11f0-9bba-91b158394961&resolution[360]=DNFGKp4mf40z20ndUC9B&resolution[480]=wRkLeYbIZvayZ7AvHTCP&resolution[720]=jjI7dEQT4vYIPmIBgPsX&resolution[1080]=7EKVVAMdg484Ukq3Hwdn&md5=DDGugp_1-Uaz36XT6cO22w&expires=1762800249',
              qualities: [
                {
                  quality: '480p',
                  size: '',
                  download_url:
                    'https://dl.upera.shop/3047391/zenj6911ec28d0503/SevenCitrusAurantium-480.mp4',
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
              id: 9999991,
              m_id: 'presale-ekran-movie-id',
              title: 'فیلم پیش فروش - اکران آنلاین',
              poster: 'https://thumb.upera.shop/s3/posters/example.jpg',
              type: 'movie',
              presale: true,
              presale_date: '1404/08/15',
              screening: {
                ekran: 1,
                ekran_period_end: null,
                ekran_hour: 48,
                ekran_owned: 0,
                owned_period_end: null,
                ekran_id: 123,
              },
              stream_link: 'https://example.com/stream.m3u8',
              qualities: [
                {
                  quality: '1080p',
                  size: '3 GB',
                  download_url: 'https://example.com/presale-movie.mp4',
                },
              ],
            },
          ],
        },
        // Scenario 4: Ekran only (no presale)
        ekranOnly: {
          success: true,
          purchaseType: 'download',
          files: [
            {
              id: 9999992,
              m_id: 'ekran-only-movie-id',
              title: 'فیلم اکران آنلاین',
              poster: 'https://thumb.upera.shop/s3/posters/example2.jpg',
              type: 'movie',
              presale: false,
              presale_date: null,
              screening: {
                ekran: 1,
                ekran_period_end: null,
                ekran_hour: 72,
                ekran_owned: 0,
                owned_period_end: null,
                ekran_id: 456,
              },
              stream_link: 'https://example.com/stream2.m3u8',
              qualities: [
                {
                  quality: '1080p',
                  size: '2.8 GB',
                  download_url: 'https://example.com/ekran-movie.mp4',
                },
              ],
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
    ...mapGetters({ cart: 'download/cart', my_credit: 'my_credit' }),
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
      if (
        val &&
        this.purchaseType !== 'wallet' &&
        this.$route.query.purchase == 'download'
      ) {
        this.toggleBasket()
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
    toggleBasket() {
      if (process.client) {
        localStorage.removeItem('_cart')
      }
>>>>>>> task/refactor-currect-version
    },

    hideModal() {
      this.$refs['callbackModal']?.hide()
      this.$emit('hide-modal', null)
      document.getElementsByClassName('default')[0].classList.remove('blure')
    },

<<<<<<< HEAD


        this.divcount=0

        if(window.location.host=='app.upera.tv' || window.location.host=='app.pofefilm.tv'){
          this.backtoapp=true
          this.divcount=1
        }


                this.showModal()
                document.getElementsByClassName('modal-content')[0].removeAttribute('tabindex')



        this.$refs['callbackModal'].$on('hide', () => {
          window.removeEventListener('resize', this.Resize)
          document.getElementsByClassName('default')[0].classList.remove('blure')
          this.$emit("hide-modal", null)
        })


          document.body.classList.add('loaded')




    },
    methods: {

        Push2(id,type){
            this.hideModal()

            this.$router.push({
                name: type+"-id",
                params: {
                    id: id
                }
            })
=======
    Push2(id, type) {
      this.hideModal()
      console.log(type + '-id', id)
      this.$router.push({
        name: type + '-id',
        params: {
          id: id,
>>>>>>> task/refactor-currect-version
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

<<<<<<< HEAD

=======
      var check_it_again = 0
>>>>>>> task/refactor-currect-version

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

              this.walletDetail = res?.data?.wallet || null
              // Transform the API response to match component expectations
              if (res.data.data.files && Array.isArray(res.data.data.files)) {
                this.files = res.data.data.files.map((file) => {
                  // Extract quality from name (e.g., "قسمت هفدهم از یاد رفته - 480p")
                  const qualityMatch = file.name.match(/(\d+p)/)
                  const quality = qualityMatch ? qualityMatch[1] : '1080p'

                  // Remove quality from title
                  const title = file.name.replace(/\s*-\s*\d+p\s*$/, '')

                  return {
                    id: file.id,
                    m_id: file.m_id,
                    title: title,
                    poster: file.poster,
                    type: file.type,
                    presale: file.presale === 1 || file.presale === true,
                    presale_date: file.presale_date,
                    screening: file.screening || {
                      ekran: 0,
                      ekran_period_end: null,
                      ekran_hour: 0,
                      ekran_owned: 0,
                      owned_period_end: null,
                      ekran_id: 0,
                    },
                    stream_link: file.stream_link,
                    qualities: [
                      {
                        quality: quality,
                        download_url: file.link1 || file.link2,
                        size: '', // Size not provided in API
                      },
                    ],
                  }
                })
              } else {
                this.files = res.data.data.files
              }

              if (this.files != null) this.divcount = this.divcount + 1

              if (this.$route.query.purchase == 'download') {
                localStorage.removeItem('_cart')
              }
            } else {
              this.divcount = this.divcount + 1

<<<<<<< HEAD
//this.checkuser.domain
    this.$axios.post('/change_subscription', {
                                method: this.$route.query.method,
                                plan_id: this.$route.query.plan,
                                host: window.location.hostname,
                                content_id: content_id,
                                content_type: content_type,
                                ref: ref
                            }).then((res) => {

          if(res.status === 200){
=======
              this.message = res.data.message
>>>>>>> task/refactor-currect-version

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

<<<<<<< HEAD



        this.$axios.post(api_url, {
=======
        this.$axios
          .post(api_url, {
>>>>>>> task/refactor-currect-version
            cart: this.cart,
            mobile: this.$route.query.mobile,
            callback_url:
              location.origin + '/callback?mobile=' + this.$route.query.mobile,
            method: this.method,
<<<<<<< HEAD
            ref: ref
        }).then((res) => {
          if(res.status === 200){
            window.location.href = res.data.data.pay_url
          }else{
            this.buyloading=false
            this.message=res.data.message
          }
        }, (error) => {
          this.buyloading=false
           this.premessage=error.response.data.message
            if(error.response.data.login)
              this.$store.dispatch('login/SHOW_MODAL',{premessage: this.premessage,premobile: this.$route.query.mobile,preredirect: null,prerefresh: false})
        })

      }
      },


      EKRAN(ekranid) {
        this.hideModal()
        this.$router.push({
            name: "ekran-id",
            params: {
                id: ekranid
            }
        })
      },
      showModal() {
        this.$refs['callbackModal'].show()

this.CHECK(0)

this.$refs['callbackModal'].$on('shown', () => {
    window.addEventListener("resize", this.Resize)
    this.Resize('e')

})

        this.$store.dispatch("download/GET_CART")
      },
      hideModal() {
        this.$refs['callbackModal'].hide()
        this.$emit("hide-modal", null)
        document.getElementsByClassName('default')[0].classList.remove('blure')
      },
  Resize(e) {
    let vh = window.innerHeight * 0.01
    let element=document.getElementsByClassName('download-links')

    if(element.length)
      element[0].style.setProperty('--vh', `${vh}px`)

    return e
  },
  Login() {
  this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})
},
            SHOW_MODAL_CREDIT() {
              this.$store.dispatch('credit/SHOW_MODAL',{prewallet: this.wallet})
=======
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
>>>>>>> task/refactor-currect-version
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
<<<<<<< HEAD
.callback .modal{z-index:0}
.callback #tab-bar,.callback header,.callback footer{z-index:2000 !important}
.callback .search{z-index:9999999 !important}
.callback .modal{top:50px !important;height:100% !important;}
.callback #callbackModal___BV_modal_outer_{position:relative  !important;height:100% !important;}
/*.callback .modal .modal-content{bottom:25px !important;}*/
=======
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
>>>>>>> task/refactor-currect-version
</style>
