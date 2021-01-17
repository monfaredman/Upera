<template>
  <div>
    <b-modal id="creditModal" ref="creditModal" centered hide-footer size="lg" modal-class="modal-download-link credit" title="افزایش موجودی">
      <div class="download-links">
        <div class="download-links-body  download-links-body-header">
          <div class="download-links-items download-links-items-credit">
            <div class="tenor tenor-m">
              <button class="btn btn-light text-secondary show-mobile text-center btn-block mb-3" @click="$router.push({ name: 'payments' })">
                پرداخت&zwnj;های قبلی
              </button>
              <div class="mt-sm-5 d-flex align-items-center justify-content-between border-bottom-md-gray pb-md-5">
                <div class="d-flex align-items-center justify-content-between w-sm-100">
                  <div class="subtitle">
                    موجودی فعلی:
                  </div>
                  <div v-if="!walletloading" class="font-weight-bold">
                    {{ wallet }}
                  </div>
                  <div v-else>
                    <svg id="L9" class="svg-loader" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve"><path data-v-28f0b4cb="" fill="#373737" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50" transform="rotate(109.69 50 50)"><animateTransform data-v-28f0b4cb="" attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" /></path></svg>
                  </div>
                </div>
                <button class="btn btn-light text-secondary hide-mobile">
                  پرداخت&zwnj;های قبلی
                </button>
              </div>
              <div class="mt-5 form-group d-md-flex align-items-center justify-content-between mb-md-5 form-inline">
                <label>مبلغ مورد نظر خود را وارد کنید</label>
                <input v-model="charge" type="text" class="form-control form-control-lg form-control-bk text-center mb-md-0" autofocus>
              </div>
              <div class="mb-3 mb-md-6 d-flex overflow-x-auto overflow-buttons">
                <button class="btn btn-light font-weight-bold text-nowrap" @click="charge=10000">
                  ۱۰.۰۰۰ تومان
                </button>
                <button class="btn btn-light font-weight-bold text-nowrap" @click="charge=20000">
                  ۲۰.۰۰۰ تومان
                </button>
                <button class="btn btn-light font-weight-bold text-nowrap" @click="charge=30000">
                  ۳۰.۰۰۰ تومان
                </button>
              </div>
            </div>
          </div>


          <div class="download-links-footer footer-1">
            <div class="download-links-item">
              <div class="row">
                <div class="col-12">
                  <a href="" class="btn btn-danger btn-block" @click.prevent="BUY()">
                    پرداخت
                    <i class="fa fa-money-bill pr-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
  
  export default {


  props: {
    show: Boolean,
    prewallet: {
        type: String,
        default: null
    },
  },

    data() {
      return {
        castShow: null,
        payment_method: "saman",
        walletloading: false,
        wallet: '0 تومان',
        message: false,
        charge: 0,
        buyloading: false
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

if (this.$auth.loggedIn && !this.prewallet){

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

}else if(this.prewallet){
  this.wallet=this.prewallet
}else{
  this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})
}


        this.$refs['creditModal'].$on('hide', () => {
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
                callback_url: window.location.href
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
        this.$refs['creditModal'].show()
        document.getElementsByClassName('default')[0].classList.add('blure')

this.$refs['creditModal'].$on('shown', () => {
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
        this.$refs['creditModal'].hide()
        this.$emit("hide-modal", null)
        document.getElementsByClassName('default')[0].classList.remove('blure')
      },
    },


}
</script>