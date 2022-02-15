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
                    </div>
                    <div v-if="!loading && !buyloading && success" class="text-center">
                      از خرید اشتراک شما<br><span style="color:#4b4bf9">ممنونیم</span>
                      <div class="offset-2 col-8">
                        <img class="img-fluid" src="@/assets/img/success.png">
                      </div>
                      پرداخت شما موفقیت آمیز بود

                      <br><br>

                      {{ checkuser.days_period_to_end }} روز از اشتراک شما باقیمانده است
                    </div>
                    <div v-else-if="!loading && !buyloading && checkagain" class="text-center">
                      <div class="offset-2 col-8">
                        <img class="img-fluid" src="@/assets/img/failed.png">
                      </div>
                      <b>متاسفانه خرید شما موفقیت آمیز نبود</b>

                      <br><br>
                    
                      اگر مبلغی از حساب شما کسر شده است، نهایتا ظرف ۷۲ ساعت آینده به حساب شما برگشت داده خواهد شد
                    </div>
                    <div v-else-if="!loading && !buyloading" class="text-center">
                      <div class="offset-2 col-8">
                        <img class="img-fluid" src="@/assets/img/check.png">
                      </div>
                      <b>متاسفانه خرید شما موفقیت آمیز نبود</b><br>
                      و یا در حین انجام تراکنش مشکلی رخ داده است

                      <br><br> <br><br>
                    
                      می توانید پرداخت خود را بررسی کنید و یا نسبت به پرداخت مجدد اقدام کنید
                    </div>


                    <div v-if="!loading && !buyloading && $config.envname!='igapp'" class="col-12 p-4 text-right">
                      <br><a href="tel:02191079979">تلفن پشتیبانی در ساعات اداری:‌ <br>02191079979</a><br><br>
                      <a href="tel:09022018555">تلفن پشتیبانی در ساعات غیر اداری:‌ <br>09022018555</a><br><br>
                      <a href="https://telegram.me/srmweb" target="_blank">تلگرام پشتیبانی</a>
                    </div>
                  </div>
                </div>
                <div v-if="!loading && !buyloading" class="download-links-footer" :class="{ 'footer-0': divcount==0,'footer-1': divcount==1 }">
                  <div v-if="!success" class="download-links-item">
                    <div v-if="checkagain" class="row">
                      <div class="col-12">
                        <a href="" class="btn btn-main btn-block" @click.prevent="BUY()">
                          پرداخت مجدد
                          <i class="fa fa-money-bill pr-2" />
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
                        <a :href="'uperaapp://upera?type=download&success='+success" class="btn btn-main btn-block">
                          بازگشت به اپلیکیشن
                          <i class="fa fa-back pr-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div v-if="$route.query.content_type=='movie' || $route.query.content_type=='episode' || $route.query.content_type=='series'" class="download-links-item">
                    <div class="row">
                      <div class="col-12">
                        <a v-if="$route.query.content_type=='movie'" href="" class="btn btn-second btn-block" @click.prevent="Push2()">
                          بازگشت به فیلم
                          <i class="fa fa-arrow-alt-circle-left" />
                        </a>
                        <a v-else-if="$route.query.content_type=='series'" class="btn btn-second btn-block" href="" @click.prevent="Push2()">
                          بازگشت به سریال
                          <i class="fa fa-arrow-alt-circle-left" />
                        </a>
                        <a v-else href="" class="btn btn-second btn-block" @click.prevent="Push2()">
                          بازگشت به سریال
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
  export default {
    layout: "nofooter",
    data() {
      return {
        message: null,
        buyloading: false,
        loading: false,
        backtoapp: false,
        checkagain: false,
        divcount: 0,
        success: false
      }
    },
  head() {

    return { 
    bodyAttrs: {
      class: 'callback'
    },title:  'پرداخت' }
  },
    watch: {
      async success(val) {
        if (val === true && this.success) {
            await this.$auth.fetchUser()
            this.$store.dispatch("SPA_INIT")
        }
      },
    },
    mounted() {


      if(!this.$auth.loggedIn){
        this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})
      }else{
      	this.divcount=0

        if(this.$route.query.mobile==1){
          this.backtoapp=true
          this.divcount=this.divcount+1
        }

        if(this.$route.query.content_type=='movie' || this.$route.query.content_type=='episode' || this.$route.query.content_type=='series'){
          this.divcount=this.divcount+1
        }
                this.showModal()
                document.getElementsByClassName('modal-content')[0].removeAttribute('tabindex')
        


        this.$refs['callbackModal'].$on('hide', () => {
          window.removeEventListener('resize', this.Resize)
          document.getElementsByClassName('default')[0].classList.remove('blure')
          this.$emit("hide-modal", null)
        })


          document.body.classList.add('loaded')
}

    },
    methods: {

        Push2(){
            this.hideModal()

            this.$router.push({
                name: this.$route.query.content_type+"-id",
                params: {
                    id: this.$route.query.content_id
                }
            })
        },
        CHECK(check) {
      	this.loading=true

        var ref=this.$cookiz.get('ref')
        if(!ref || isNaN(ref))
          ref=0

       this.$axios.post('/payments/'+this.$route.query.method+'/callback', {
            payment_id: this.$route.query.payment_id,
            ref_num: this.$route.query.ref_num,
            ref: ref
        }).then((res) => {
        	this.loading=false
          if(res.status === 200){
            this.success=true
          }else{
          	if(!check)
            	this.divcount=this.divcount+1

            this.message=res.data
          }
        }, (err) => {
          this.loading=false
          if(!check)
          	this.divcount=this.divcount+1
           this.message=err.response.data
        })
        if(check)
        	this.checkagain=true

      },
      BUY() {
        this.buyloading=true

        if(!this.$route.query.content_id)
          this.$route.query.content_id=0
        if(!this.$route.query.content_type)
          this.$route.query.content_type=0

		this.$axios.post('/update/profile/payment/change_plan', {
                                gateway_id: this.$route.query.method_id,
                                plan_id: this.$route.query.plan,
                                host: this.checkuser.domain,
                                content_id: this.$route.query.content_id,
                                content_type: this.$route.query.content_type
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



      },


      showModal() {
        this.$refs['callbackModal'].show()

        this.CHECK()

this.$refs['callbackModal'].$on('shown', () => {
    window.addEventListener("resize", this.Resize)
    this.Resize('e')

})


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
}
    }
  }
</script>
<style>
//.callback .modal{z-index:0}
//.callback #tab-bar,.callback header,.callback footer{z-index:2000 !important}
//.callback .search{z-index:9999999 !important}
.callback .modal{top:50px !important;height:100% !important;}
.callback #callbackModal___BV_modal_outer_{position:relative  !important;height:100% !important;}
// .callback .modal .modal-content{bottom:25px !important;}
</style>