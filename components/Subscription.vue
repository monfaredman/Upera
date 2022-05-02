<template>
  <b-modal id="subscriptionModal" ref="subscriptionModal" centered hide-footer size="lg" modal-class="credit subscription" title="خرید اشتراک">
    <div v-if="planloading" class="alert alert-warning mb-4">
      لطفا کمی منتظر بمانید...
    </div>


      
    <div v-if="!planloading">
      <div v-for="(plan,index) in plans" :key="index" @click="BUY(index)">
        <div class="d-flex align-items-center justify-content-between font-weight-bold mb-3">
          <span class="d-inline-block">اشتراک {{ plan.name_fa }}ه</span>
          <span class="d-inline-block position-relative">{{ plan.toman.toLocaleString() }} <i class="icon-toman" />
            <span class="text-underline text-underline-primary-dark" style="width: 100%;" />
          </span>
        </div>
        <div v-if="plan.discount" class="alert alert-success mb-3">
          اشتراک {{ plan.name_fa }}ه با {{ plan.discount.discount_percent }}% تخفیف<span v-if="plan.discount.discount_day"> و {{ plan.discount.discount_day }} روز اشتراک هدیه</span>
        </div>
        <div class="pb-3 border-bottom-gray mb-3">
          <button v-if="plan.discount" class="btn btn-secondary btn-block" @click="BUY(index)">
            {{ (plan.toman-plan.discount.discount_price).toLocaleString() }} <i class="icon-toman" />
          </button>
          <button v-else class="btn btn-secondary btn-block" @click="BUY(index)">
            {{ plan.toman.toLocaleString() }} <i class="icon-toman" />
          </button>
          <div class="pt-2 font-weight-lighter">
            {{ plan.description }}
          </div>
        </div>
      </div>
    </div>
    <!-- class="pb-3 border-bottom-gray mb-3" -->
    <div v-if="!planloading" class="pb-3 border-bottom-gray mb-3">
      به اعداد بالا ۹ درصد مالیات بر ارزش افزوده اضافه می&zwnj;شود
    </div>

    <div v-if="!planloading" class="alert alert-warning mb-4">
      <b>امکانات اشترک:</b><br>
      - بیش از ۳۰۰۰ اپیزود فیلم و سریال<br>
      - امکان دانلود فیلم بدون محدودیت<br>
      - حجم مصرفی نیم بها با خرید اشتراک<br><br>
      <span v-if="showfullrate"><b>امکان دسترسی به فیلم ها و سریال ها بدون خرید اشتراک:</b><br>
        با اینترنت {{ operator_fullrate }} وارد شوید ، حجم مصرفی به جای خرید اشتراک تمام بها محاسبه می شود.<br></span>
    </div>
    <!-- <div v-if="!planloading" v-lazy-load="description" /> -->


    <b-button v-if="!planloading && !$auth.loggedIn" variant="main" class="py-1 px-lg-4 btn-block" @click="SHOW_MODAL()">
      در صورتی که اشتراک دارید، از اینجا وارد شوید
    </b-button>

    <button v-if="!planloading" class="btn btn-light btn-block" @click="hideModal()">
      انصراف از خرید اشتراک و بازگشت
    </button>
  </b-modal>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {


  props: {
    show: Boolean
  },

    data() {
      return {
        castShow: null,
        payment_method: "saman",
        planloading: false,
        operator_fullrate: 'همراه اول یا ایرانسل',
        plans: [],
        wallet: '0 تومان',
        message: false,
        description: false,
        charge: 0,
        buyloading: false,
        showfullrate: true,
      }
    },


        computed: {
            ...mapGetters({content_type: "subscription/content_type"}),
            ...mapGetters({content_id: "subscription/content_id"})
        },
    watch: {
      show(val) {
        if (val !== null && this.show) {
            this.planloading=true
            this.$axios.get('/get/app/plans').then((res) => {
              this.planloading=false
              if(res.status === 200){

                 this.plans = res.data.data
                 this.description = res.data.description
              }else{
                this.message=res.data.message
              }
            }, (error) => {
              this.planloading=false
              this.message=error.response.data.message
              return error
            })
          
          this.showModal()
        }else{
          this.plans=[]
          this.description=false
          this.hideModal()
        }
      },
    },

        mounted() {

if(this.checkuser.operator_fullrate){
  this.operator_fullrate=this.checkuser.operator_fullrate
}


if(this.$config.envname=='igapp' && (window.location.host=='igaptv.com' || window.location.host=='igaptv.net')){
  this.showfullrate=false
}


// else{
//   this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})
// }


        this.$refs['subscriptionModal'].$on('hide', () => {
          window.removeEventListener('resize', this.Resize)
          if(document.getElementsByClassName('default').length)
            document.getElementsByClassName('default')[0].classList.remove('blure')
          else
            (window.history.length > 2) ? this.$router.go(-1) : this.$router.go()

          this.$emit("hide-modal", null)

          if(this.$route.name=="plan-id"){
            this.$router.push('/')
          }
        })

          document.body.classList.add('loaded')



        },


        
    methods: {

          BUY(plan) {
            if (!this.$auth.loggedIn) {
              this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: '/plan/'+plan+'?content_id='+this.content_id+'&content_type='+this.content_type,prerefresh: false})
            }else{
                this.$router.push({name: 'plan-id', params: {id: plan}, query: { content_id: this.content_id,content_type: this.content_type }})
                this.planloading=true
            }
          },
      showModal() {
        this.$refs['subscriptionModal'].show()
        if(document.getElementsByClassName('default').length)
        document.getElementsByClassName('default')[0].classList.add('blure')

        if(document.getElementsByClassName('download').length){
          document.body.classList.remove('download')
          document.body.classList.add('sub_dl')
        } else if(document.getElementsByClassName('callback').length){
          document.body.classList.remove('callback')
          document.body.classList.add('sub_call')
        }

this.$refs['subscriptionModal'].$on('shown', () => {
    window.addEventListener("resize", this.Resize)
    this.Resize('e')

})

      },

      SHOW_MODAL() {
        this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})
      },
  Resize(e) {
    let vh = window.innerHeight * 0.01
    let element=document.getElementsByClassName('download-links')

    if(element.length)
      element[0].style.setProperty('--vh', `${vh}px`)
    
    return e
  },
      hideModal() {
        this.$refs['subscriptionModal'].hide()
        this.$emit("hide-modal", null)

        if(document.getElementsByClassName('sub_dl').length){
          document.body.classList.add('download')
          document.body.classList.remove('sub_dl')
        }else if(document.getElementsByClassName('sub_call').length){
          document.body.classList.add('callback')
          document.body.classList.remove('sub_call')
        }


        if(document.getElementsByClassName('default').length)
        document.getElementsByClassName('default')[0].classList.remove('blure')
      },
    },


}
</script>