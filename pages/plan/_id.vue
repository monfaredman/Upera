<template>
  <div id="checkcontainer">
    <section id="slideshow" class="slideshow d-none d-md-block mt-5">
      <div>
        <div v-swiper:topSwiper="swiperOption" class="swiper-container app-slider" dir="rtl">
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">
              <a href="#">
                <img src="@/assets/img/app/2@3x.png" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="@/assets/img/app/3@3x.png" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="@/assets/img/app/2@3x.png" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="@/assets/img/app/3@3x.png" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="@/assets/img/app/2@3x.png" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="@/assets/img/app/3@3x.png" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="@/assets/img/app/2@3x.png" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="@/assets/img/app/2@3x.png" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="@/assets/img/app/3@3x.png" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="@/assets/img/app/2@3x.png" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="@/assets/img/app/3@3x.png" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container  faq-page">
      <div class="app_container_pricing mt-4 p-2 mt-md-4 mb-5">
        <header class="headline py-md-5">
          <h5 class="title font-weight-bold">
            انتخاب شیوه پرداخت
          </h5>
        </header>
        <div v-show="$auth.loggedIn">
          <div class="position-relative">
            <div class="col-12">
              <div class="row position-relative payment_methods">
                <div class="container">
                  <!-- <div class="text-muted mb-2">انتخاب روش پرداخت:</div> -->
                  <div id="payment-1" class="option">
                    <input id="payment1" v-model="method" type="radio" name="card" value="pec" @change="transfer=false">
                    <label for="payment1" aria-label="درگاه بانکی">
                      <span />
      
                      درگاه بانکی
      
                      <div class="card card--white card--sm">
                        <div class="card__chip" />
                        <div class="card__content">
                          <div class="card__text">
                            <div class="text__row">
                              <div class="text__loader" />
                              <div class="text__loader" />
                            </div>
                            <div class="text__row">
                              <div class="text__loader" />
                              <div class="text__loader" />
                            </div>
                          </div>
                          <div class="card__symbol">
                            <span />
                            <span />
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>

                     
                  <div id="payment-2" class="option">
                    <input id="payment2" v-model="method" type="radio" name="card" value="directdebit" @change="transfer=false">
                    <label for="payment2" aria-label="پرداخت خودکار">
                      <span />
      
                      پرداخت خودکار
      
                      <div class="card card--blue card--sm">
                        <div class="card__chip" />
                        <div class="card__content">
                          <div class="card__text">
                            <div class="text__row">
                              <div class="text__loader" />
                              <div class="text__loader" />
                            </div>
                            <div class="text__row">
                              <div class="text__loader" />
                              <div class="text__loader" />
                            </div>
                          </div>
                          <div class="card__symbol">
                            <span />
                            <span />
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>

  

  
                  <div id="payment-5" class="option">
                    <input id="payment5" v-model="method" type="radio" name="card" value="credit" @change="transfer=false">
                    <label for="payment5" aria-label="اعتبار آپرا">
                      <span />
      
                      موجودی آپرا
      
                      <div class="card card--white card--sm">
                        <div class="card__chip" />
                        <img src="@/assets/img/logo.svg">
                      </div>
                    </label>
                  </div>

                  <div id="payment-4" class="option">
                    <input id="payment4" v-model="method" type="radio" name="card" value="tally" @change="transfer=false">
                    <label for="payment4" aria-label="اعتبار تالی">
                      <span />
      
                      اعتبار تالی
      
                      <div class="card card--white card--sm">
                        <img src="@/assets/img/tally.png">
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div> 
            <div v-if="errors && errors.method" class="text-danger">
              {{ errors.method[0] }}
            </div>
          </div>
          <!--           <div class="position-relative">
            <b-form-select v-model="method" :options="methods" @change="transfer=false" />
            <div v-if="typeof errors === 'string'" class="text-danger">
              {{ errors }}
            </div>
            <div v-else-if="errors && errors.method" class="text-danger">
              {{ errors.method[0] }}
            </div>
            <div v-else class="invalid-feedback">
              خطا در روش خرید
            </div>
          </div> -->
        </div> 
        <div class="my-3 mx-auto">
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <a v-if="loading" class="btn btn-main btn-block" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" /><span class="sr-only">Loading...</span>
              </a>

              <a v-else href="" class="btn btn-main btn-block" @click.prevent="get_payment_url()">
                پرداخت
                <i class="fa fa-check-double pr-2" />
              </a>
            </div>
            <div class="col-md-6 col-sm-12">
              <a href="" class="btn btn-light btn-block" @click.prevent="SHOW_MODAL_CREDIT()">
                افزایش موجودی
                <i class="fa fa-money-bill pr-2" />
              </a>
            </div>
          </div>
        </div>
        <div class="text-center">
          <h3 v-if="loading">
            لطفا منتظر بمانید...
          </h3>
          <h3 v-else-if="transfer">
            انتقال به درگاه بانکی تا {{ second }} ثانیه دیگر...
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {

        data() {
            return {
              data:{},
              loading:false,
              message:'',
              wallet: 0,
              showbuyfromwallet: false,
              showbuyfromvisa: false,
              second:15,
              transfer: true,
          directdebit_payment_id:0,
        method: 'pec',
        // methods: [{ text: 'درگاه بانکی', value: 'pec' },{ text: 'موجودی', value: 'credit' }],
        swiperOption: {
                autoplay: {
                    delay: 5800,
                },
                spaceBetween: 10,
                slidesPerView: 3.3,
                grabCursor: true,
                setWrapperSize: true,
                threshold: 2,
                breakpoints: {
                    768: {
                        slidesPerView: 3.5,
                    },
                    992: {
                        slidesPerView: 3.5,
                    },
                    1024: {
                        slidesPerView: 4.5,
                    },
                    1420: {
                        slidesPerView: 7.5,
                    },
                    1670: {
                        slidesPerView: 8.5,
                    },

                }
            }
            }
        },

        watch: {

            second: {
                handler(value) {
if(this.transfer){
                    if (value > 0) {
                        setTimeout(() => {
                            this.second--
                        }, 1000)
                    }else if(value == 0){
                        this.get_payment_url()
                    }
}
                },
                immediate: true // This ensures the watcher is triggered upon creation
            }

        },
    mounted() {
      this.transfer=true
      // if(this.$auth.loggedIn){

        // this.get_wallet()

        // if(this.wallet>10000){
        //   this.showbuyfromwallet=true
        // }

        // if(this.checkuser.country!='IR'){
        //   this.showbuyfromvisa=true
        // }

        // if(this.showbuyfromwallet || this.showbuyfromvisa){

        // }else{
        //   this.get_payment_url(1)
        // }

        // this.get_payment_url()

      // }else{
      if(!this.$auth.loggedIn){
        this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})
      }
    },
        methods: {

          async get_wallet() {
            this.loading=true
            await this.$axios.post('/get/my_wallet', {}).then((res) => {
              this.loading=false
              if(res.status === 200){

                 this.wallet = this.replace(res.data.data.my_credit)
              }else{
                this.message=res.data.message
              }
            }, (error) => {
              this.loading=false
              this.message=error.response.data.message
              return error
            })

          },
          async get_payment_url() {
            this.transfer=false
            // var host2
            // host2=this.checkuser.domain
            // if(!host2 || host2=="igapi.upera.tv"){
            //   host2=window.location.hostname
            // }
            this.loading=true
            var ref=this.$cookiz.get('ref')
            if(!ref || isNaN(ref))
              ref=0

if (this.method=="directdebit" && !this.$auth.loggedIn) {
this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: 'directdebit'})
}

            await this.$axios.post('/change_subscription', {
                                    method: this.method,
                                    plan_id: this.$route.params.id,
                                    host: window.location.hostname,
                                    content_id: this.$route.query.content_id,
                                    content_type: this.$route.query.content_type,
                                    ref: ref
                                }).then((res) => {

            this.loading=false
              
              if(res.status === 200){

                 this.data = res.data

                if(this.data && this.data.status=="success"){
                  if(this.method=="credit"){
                    this.update_date()
      setTimeout(() => {
            this.$swal("از خرید اشتراک شما ممنونیم. اشتراک شما فعال شد. "+this.checkuser.days_period_to_end+" روز از اشتراک شما باقیمانده است", {
                      icon: "success",
                    }).then(() => {
                        this.$router.push({
                            name:"index"
                        })
                        //this.$router.go()
                        this.$swal.close()
                    })
      }, 2000)

        
                  }else if(this.method=="directdebit"){
                    if(res.data.data.payment_id){
                      this.directdebit_payment_id=res.data.data.payment_id
                    }
                    console.log(this.directdebit_payment_id)
                    if(res.data.data.showdirectdebitbox==1)
                      this.SHOW_MODAL_DIRECTDEBIT()
                    else{
                      this.update_date()

                            setTimeout(() => {
                     this.$swal("از خرید اشتراک شما ممنونیم. اشتراک شما فعال شد. "+this.checkuser.days_period_to_end+" روز از اشتراک شما باقیمانده است", {
                        icon: "success",
                      }).then(() => {
                          this.$router.push({
                              name:"index"
                          })
                          //this.$router.go()
                          this.$swal.close()
                      })
      }, 2000)
 
                    }
                  }else{
                    window.location.href = this.data.link
                  }
                }
              }else{
                this.loading=false
                this.$swal({
                    icon: 'error',
                    title: res.data.message,
                    dangerMode: true,
                    button: 'بازگشت',
                })
                // .then(() => {
                //     this.$router.go(-1)
                //     this.$swal.close()
                // })
                this.message=res.data.message
              }
            }, (error) => {
              this.loading=false


              this.$swal({
                  icon: 'error',
                  title: error.response.data.message,
                  dangerMode: true,
                  button: 'بازگشت',
              })

// .then(() => {
//                   this.$router.go(-1)
//                   this.$swal.close()
//               })
              this.message=error.response.data.message
              return error
            })
          },

            replace(string) {
                 return parseInt(string.replace(" تومان",''))
            },
            SHOW_MODAL_CREDIT() {
              this.transfer=false
              this.$store.dispatch('credit/SHOW_MODAL',{prewallet: this.wallet})
            },
      SHOW_MODAL_DIRECTDEBIT() {
        this.$store.dispatch('directdebit/SHOW_MODAL',{premobile: null,forsubscription:true,id: null,type: null,paymentid:this.directdebit_payment_id})
      },
      HIDE_MODAL_DIRECTDEBIT() {
        this.$store.dispatch('directdebit/HIDE_MODAL')
      },
            async update_date() {
                await this.$auth.fetchUser()
                this.$store.dispatch("SPA_INIT")
            }
        }
}
</script>