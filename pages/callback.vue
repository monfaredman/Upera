<template>
  <div id="checkcontainer" class="container-fluid">
    <section id="banner" class="mt-5 pt-lg-5 pt-md-5">
      <div class="container">
        <div>
          <b-modal id="callbackModal" ref="callbackModal" :centered="false" hide-footer hide-header size="lg" no-close-on-backdrop hide-backdrop no-close-on-esc modal-class="modal-download-link" static no-enforce-focus>
            <div class="download-links">
              <header v-if="!loading && !buyloading && success" class="modal-header">
                <h5 class="modal-title">
                  پرداخت شما موفقیت آمیز بود
                </h5>
              </header>

              <div>
                <div class="download-links-body download-links-body-header" :class="{ 'download-links-0': divcount==0,'download-links-2': divcount==2,'download-links-3': divcount==3 }">
                  <div class="download-links-items">
                    <div class="col-12">
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
                    </div>
                  </div>
                </div>
                <div v-if="!loading && !buyloading" class="download-links-footer" :class="{ 'footer-0': divcount==0,'footer-1': divcount==1 }">
                  <div v-if="files!=null && files.length > 1" class="download-links-item">
                    <div class="row">
                      <div class="col-12">
                        <nuxt-link to="/" class="btn btn-danger btn-block">
                          بازگشت به صفحه اصلی
                          <i class="fa fa-back pr-2" />
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div v-else-if="files!=null && files.length == 1" class="download-links-item">
                    <div v-for="(item,index) in files" :key="index" class="row">
                      <div class="col-6">
                        <a v-if="!item.screening.ekran" :href="item.link1" class="btn btn-main btn-block">
                          {{ $t('show.download') }}
                          <i class="icon-download" />
                        </a>
                        <a v-else :href="item.link1" class="btn btn-main btn-block">
                          مشاهده
                          <i class="icon-play" />
                        </a>
                      </div>
                      <div class="col-6">
                        <button class="btn btn-copy btn-light btn-block" @click="COPY(item.link1)">
                          کپی لینک
                        </button>
                      </div>
                    </div>
                  </div>
                  <div v-else-if="!success" class="download-links-item">
                    <div v-if="checkagain" class="row">
                      <div class="col-12">
                        <a href="" class="btn btn-main btn-block" @click.prevent="BUY()">
                          پرداخت مجدد
                          <i class="fa fa-money-bill pr-2" />
                        </a>
                      </div>
                    </div>
                    <div v-else-if="show_login" class="row">
                      <div class="col-12">
                        <a href="" class="btn btn-main btn-block" @click.prevent="Login()">
                          ورود به سایت
                          <i class="fa fa-sign-in-alt pr-2" />
                        </a>
                      </div>
                    </div>
                    <div v-else class="row">
                      <div class="col-6">
                        <a href="" class="btn btn-main btn-block" @click.prevent="CHECK(1)">
                          بررسی پرداخت
                          <i class="fa fa-check-double pr-2" />
                        </a>
                      </div>
                      <div class="col-6">
                        <a href="" class="btn btn-light btn-block" @click.prevent="BUY()">
                          پرداخت مجدد
                          <i class="fa fa-money-bill pr-2" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div v-if="backtoapp" class="download-links-item">
                    <div class="row">
                      <div class="col-12">
                        <a href="uperaapp://upera?type=download&success=false" class="btn btn-main btn-block">
                          نمایش فیلم
                          <i class="fa fa-back pr-2" />
                        </a>
                      </div>
                    </div>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-modal>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
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

    },
    watch: {
      async success(val) {
        if (this.$route.query.purchase=='subscription' && this.$auth.loggedIn && val === true) {
            await this.$auth.fetchUser()
            this.$store.dispatch("SPA_INIT")
        }
      },
    },
    mounted() {



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
        },
      CHECK(check) {
        this.loading=true

        var ref=this.$cookiz.get('ref')
        if(!ref || isNaN(ref))
          ref=0

        var api_url

        var purchase=this.$route.query.purchase


        if(purchase!='download' && purchase!='wallet' && purchase!='subscription' && purchase!='directdebit'){
          purchase='download'
        }



        if (this.$auth.loggedIn) {
            api_url='/payments/'+purchase+'/callback'
        } else {
            api_url='/ghost/payments/'+purchase+'/callback'
        }

        var check_it_again= 0

        if(check){
          check_it_again = 1
        }
       this.$axios.get(api_url,{params: {
            payment_id: this.$route.query.payment_id,
            ref_num: this.$route.query.ref_num,
            method: this.$route.query.method,
            check_it_again: check_it_again,
            ref: ref
        }}).then((res) => {
          this.loading=false
          if(window.location.host=='app.upera.tv' || window.location.host=='app.pofefilm.tv'){
            this.divcount=1
          }else{
            this.divcount=0
          }
          if(res.status === 200){
            this.success=true
            this.ref_num=res.data.data.ref
            this.files=res.data.data.files
            if(this.files!=null)
              this.divcount=this.divcount+1

            if(this.$route.query.purchase=="download"){
              localStorage.removeItem('_cart')
            }
          }else{
              this.divcount=this.divcount+1

            this.message=res.data.message

            if('show_login' in res.data){
              this.show_login=res.data.show_login
            }
          }
          if('title' in res.data && res.data.title!=null){
            this.title=res.data.title
            this.divcount=this.divcount+1
          }

        }, (err) => {
          this.loading=false
            if(window.location.host=='app.upera.tv' || window.location.host=='app.pofefilm.tv'){
              this.divcount=1
            }else{
              this.divcount=0
            }
            this.divcount=this.divcount+1


            this.message=err.response.data.message

            if('show_login' in err.response.data){
              this.show_login=err.response.data.show_login
            }
            if('title' in err.response.data && err.response.data.title!=null){
              this.title=err.response.data.title
              this.divcount=this.divcount+1
            }
        })
        if(check)
          this.checkagain=true

      },
      BUY() {
        var ref=this.$cookiz.get('ref')
        if(!ref || isNaN(ref))
          ref=0
              if(this.$route.query.method=='vandar_subscriptions'){
                if (this.$auth.loggedIn) {

            this.buyloading=true
            this.$axios.post('/directdebit/buy_subscription_bypaymentid', {
                payment_id: this.$route.query.payment_id,
                callback_url: location.origin+'/callback'
            }).then((res) => {
              if(res.status === 200 && res.data.data.pay_url){
                window.location.href = res.data.data.pay_url
              }else if(res.data.message){
                this.message=res.data.message
              }
                this.message=false
              this.buyloading=false
            }, (error) => {
                this.buyloading=false
                this.message=error.response.data.message
            })
}else {
            this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})
        }
       } else if(this.$route.query.purchase=='subscription'){
if (this.$auth.loggedIn) {
        this.buyloading=true

        var content_id = 0
        var content_type = 0

        if(this.title!=null){
          content_id=this.title.id
          content_type=this.title.type
        }

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

             this.data = res.data

            if(this.data && this.data.status=="success"){
              window.location.href = this.data.link
            }
          }else{
            this.buyloading=false
            this.message=res.data.message
          }
        }, (error) => {
          this.buyloading=false
          this.message=error.response.data.message
          return error
        })
}else {
            this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})
        }
}else if(this.$route.query.purchase=='wallet'){
        if (this.$auth.loggedIn) {
            this.SHOW_MODAL_CREDIT()
        } else {
            this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})
        }
}else if(this.$route.query.purchase=='directdebit'){
        if (this.$auth.loggedIn) {
            this.SHOW_MODAL_DIRECTDEBIT()
        } else {
            this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})
        }
}else{

        var api_url
        if (this.$auth.loggedIn) {
            api_url='/get/buy'
        } else {
            api_url='/ghost/get/buy'
        }
        this.buyloading=true




        this.$axios.post(api_url, {
            cart: this.cart,
            mobile: this.$route.query.mobile,
            callback_url: location.origin+'/callback?mobile='+this.$route.query.mobile,
            method: this.method,
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
            },

      SHOW_MODAL_DIRECTDEBIT() {
        this.$store.dispatch('directdebit/SHOW_MODAL',{premobile: this.mobile,forsubscription:false,id: this.id,type: this.type,paymentid:0})
      },
      HIDE_MODAL_DIRECTDEBIT() {
        this.$store.dispatch('directdebit/HIDE_MODAL')
      },
    async COPY(text) {
      try {
        await this.$copyText(text)
        this.$swal("لینک کپی شد", {
          icon: "success",
        })
      } catch (e) {
          this.$swal("لینک در دیوایس شما قابل کپی نیست.")
          return e
      }
    }
    }
  }
</script>
<style>
.callback .modal{z-index:0}
.callback #tab-bar,.callback header,.callback footer{z-index:2000 !important}
.callback .search{z-index:9999999 !important}
.callback .modal{top:50px !important;height:100% !important;}
.callback #callbackModal___BV_modal_outer_{position:relative  !important;height:100% !important;}
/*.callback .modal .modal-content{bottom:25px !important;}*/
</style>
