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
          </div>
        </div> 
        <div class="my-3 mx-auto">
          <div class="row">
            <div class="col-6">
              <a href="" class="btn btn-main btn-block" @click.prevent="get_payment_url()">
                پرداخت
                <i class="fa fa-check-double pr-2" />
              </a>
            </div>
            <div class="col-6">
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
            انتقال به درگاه پرداخت تا {{ second }} ثانیه دیگر...
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
        method: 'pec',
        methods: [{ text: 'درگاه بانکی', value: 'pec' },{ text: 'موجودی', value: 'credit' }],
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

            await this.$axios.post('/change_subscription', {
                                    method: this.method,
                                    plan_id: this.$route.params.id,
                                    host: window.location.hostname,
                                    content_id: this.$route.query.content_id,
                                    content_type: this.$route.query.content_type,
                                    ref: ref
                                }).then((res) => {
              
              if(res.status === 200){

                 this.data = res.data

                if(this.data && this.data.status=="success"){
                  if(this.method=="credit"){
                    this.update_date()
                    this.$swal("از خرید اشتراک شما ممنونیم. اشتراک شما فعال شد", {
                      icon: "success",
                    }).then(() => {
                        this.$router.push({
                            name:"index"
                        })
                        //this.$router.go()
                        this.$swal.close()
                    })
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
            async update_date() {
                await this.$auth.fetchUser()
                this.$store.dispatch("SPA_INIT")
            }
        }
}
</script>