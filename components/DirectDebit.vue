<template>
  <b-modal id="directdebitModal" ref="directdebitModal" centered hide-footer size="lg" modal-class="modal-download-link credit directdebit" title="فعال کردن پرداخت خودکار">
    <div class="download-links">
      <div class="download-links-body  download-links-body-header">
        <div class="download-links-items download-links-items-credit">
          <div class="tenor tenor-m">
            <div class="mt-3">
              بانک های فعال شما جهت پرداخت خودکار: <b-button variant="dark">
                ملت
              </b-button>
              <b-button variant="success">
                افزودن بانک جدید
              </b-button>
              <b-card class="mt-2 mb-3 px-2">
                <b-form-group
                  id="input-group-1"
                  label="انتخاب بانک:"
                  label-for="input-1"
                >
                  <b-form-select v-model="selected" :options="options" />
                </b-form-group>
                <br>
                <b-form-group
                  id="input-group-1"
                  label="شماره موبایلی را که به بانک شما متصل است را وارد کنید:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    type="text"
                    placeholder="شماره موبایل"
                    required
                  />
                </b-form-group>
                <div class="row mt-2">
                  <div class="col-12">
                    <a href="" class="btn btn-danger btn-block" @click.prevent="BUY()">
                      افزودن کارت بانکی شما به سیستم پرداخت خودکار
                      <i class="fa fa-money-bill pr-2" />
                    </a>
                  </div>
                </div>
              </b-card>

              <b-card class="mt-2 mb-3 px-2">
                <b-form-group
                  label-for="check-pay_anything"
                  description="هر زمانی که شما، روش 'پرداخت خودکار' را جهت خرید انتخاب کنید، دیگر نیازی به رفتن به بانک ندارید"
                >
                  <b-form-checkbox id="check-pay_anything" v-model="directdebit_subscriptions.pay_anything" class="mx-3 text-light" name="check-pay_anything" switch>
                    پرداخت خودکار به انتخاب شما
                  </b-form-checkbox>
                </b-form-group>
              </b-card>

              <b-card class="mt-2 mb-3 px-2">
                <b-form-group
                  label-for="check-series"
                  description="با انتخاب این گزینه قسمت های بعدی این سریال به صورت خودکار برای شما خرید و لینک آنها به شماره موبایل شما پیامک می شود"
                >
                  <!-- v-model="directdebit_subscriptions.series" -->
                  <b-form-checkbox id="check-series" class="mx-3" name="check-series" switch>
                    پرداخت خودکار قسمت های بعدی سریال زخم کاری
                  </b-form-checkbox>
                </b-form-group>
              </b-card>

              <b-card class="px-2">
                <b-form-group
                  label-for="check-subscription"
                  :description="desc_subscription"
                >
                  <b-form-checkbox id="check-subscription" v-model="directdebit_subscriptions.subscription" class="mx-3" name="check-subscription" switch>
                    پرداخت خودکار اشتراک<span v-if="$config.envname!='upera'"> آپرا پلاس - <a target="_blank" href="https://plus.upera.tv">مشاهده فیلم و سریال های آپرا پلاس</a></span>
                  </b-form-checkbox>
                </b-form-group>
              </b-card>
              <br>
              توجه: <br>1-شما در هر زمانی می توانید گزینه های بالا را فعال یا غیرفعال کنید<br>2-در حالتی که موردی را با روش های پرداخت دیگری خرید کرده باشید، خرید مجددی با پرداخت خودکار توسط ما انجام نخواهد شد
            </div> 
          </div>
        </div>


        <div class="download-links-footer footer-1">
          <div class="download-links-item">
            <div class="row">
              <div class="col-12">
                <a href="" class="btn btn-danger btn-block" @click.prevent="BUY()">
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
  
  export default {


  props: {
    show: Boolean,
    premobile: {
        type: String,
        default: null
    },
    forsubscription: Boolean,
    id: {
        type: String,
        default: null
    },
    type: {
        type: String,
        default: null
    }
  },

    data() {
      return {
        castShow: null,
        payment_method: "saman",
        walletloading: false,
        wallet: '0 تومان',
        message: false,
        charge: 0,
        buyloading: false,
        desc_subscription: '',
        series: [],
        directdebit_subscriptions: {subscription:false,pay_anything:true,series:[]}
      }
    },

    watch: {
      show(val) {
        if (val !== null && this.show) {
          this.showModal()
        }else{
          this.hideModal()
        }
      },
    },

        mounted() {

if(this.checkuser.subscription==1){
this.desc_subscription="با فعال بودن این گزینه، در زمان پایان اشتراک شما، مبلغ اشتراک ماهانه را از حساب شما کسر می کنیم"
}else{
  this.desc_subscription="با فعال بودن این گزینه، اشتراک ماهانه شما فعال خواهد شد و در زمان پایان اشتراک، مبلغ اشتراک ماهانه را از حساب شما کسر می کنیم"
}
if (this.$auth.loggedIn && !this.premobile){

        this.walletloading=true

        this.$axios.post('/get/my_wallet', {}).then((res) => {
          this.walletloading=false
          if(res.status === 200){

             this.wallet = res.data.data.my_credit
          }else{
            this.message=res.data.message
          }
        }, (error) => {
          this.walletloading=false
          this.message=error.response.data.message
          return error
        })

}else if(this.premobile){
  this.wallet=this.premobile
}else{
  this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})
}


        this.$refs['directdebitModal'].$on('hide', () => {
          window.removeEventListener('resize', this.Resize)
          document.getElementsByClassName('default')[0].classList.remove('blure')


          this.$emit("hide-modal", null)
        })

          document.body.classList.add('loaded')



        },


        
    methods: {

          BUY() {
            this.buyloading=true
            this.$axios.post('/get/charge_wallet', {
                amount: this.charge,
                payment_method: this.payment_method,
                callback_url: location.origin+'/callback?mobile='+this.checkuser.mobile
            }).then((res) => {
                this.message=false
              this.buyloading=false
              if(res.status === 200){
                window.location.href = res.data.data.pay_url
              }else{
                this.message=res.data.message
              }
            }, (error) => {
                this.buyloading=false
                this.message=error.response.data.message
            })
          },
      showModal() {
        this.$refs['directdebitModal'].show()
        document.getElementsByClassName('default')[0].classList.add('blure')

        if(document.getElementsByClassName('download').length){
          document.body.classList.remove('download')
          document.body.classList.add('cre_dl')
        } else if(document.getElementsByClassName('callback').length){
          document.body.classList.remove('callback')
          document.body.classList.add('cre_call')
        }

this.$refs['directdebitModal'].$on('shown', () => {
    window.addEventListener("resize", this.Resize)
    this.Resize('e')

})

      },
  Resize(e) {
    let vh = window.innerHeight * 0.01
    let element=document.getElementsByClassName('download-links')

    if(element.length)
      element[0].style.setProperty('--vh', `${vh}px`)
    
    return e
  },
      hideModal() {
        this.$refs['directdebitModal'].hide()
        this.$emit("hide-modal", null)

        if(document.getElementsByClassName('cre_dl').length){
          document.body.classList.add('download')
          document.body.classList.remove('cre_dl')
        }else if(document.getElementsByClassName('cre_call').length){
          document.body.classList.add('callback')
          document.body.classList.remove('cre_call')
        }

        document.getElementsByClassName('default')[0].classList.remove('blure')
      },
    },


}
</script>