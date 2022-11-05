<template>
  <div>
    <section class=" mt-5 pt-lg-5 pt-md-5">
      <div class="text-center">
        <span v-if="loading">لطفا منتظر بمانید</span>
      </div>
    </section>
  </div>
</template>
<script>
    export default {

        data() {
            return {
              data:{},
              loading:true,
              message:'',
              wallet: 0,
              showbuyfromwallet: false,
              showbuyfromvisa: false
            }
        },
    mounted() {
      if(this.$auth.loggedIn){

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

        this.get_payment_url('pec')

      }else{
        this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})
      }
    },
        methods: {

          async get_wallet() {
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
          async get_payment_url(method) {
            // var host2
            // host2=this.checkuser.domain
            // if(!host2 || host2=="igapi.upera.tv"){
            //   host2=window.location.hostname
            // }
            var ref=this.$cookiz.get('ref')
            if(!ref || isNaN(ref))
              ref=0

            await this.$axios.post('/change_subscription', {
                                    method: method,
                                    plan_id: this.$route.params.id,
                                    host: window.location.hostname,
                                    content_id: this.$route.query.content_id,
                                    content_type: this.$route.query.content_type,
                                    ref: ref
                                }).then((res) => {
              
              if(res.status === 200){

                 this.data = res.data

                if(this.data && this.data.status=="success"){
                  window.location.href = this.data.link
                }
              }else{
                this.loading=false
                this.$swal({
                    icon: 'error',
                    title: res.data.message,
                    dangerMode: true,
                    button: 'بازگشت',
                }).then(() => {
                    this.$router.go(-1)
                    this.$swal.close()
                })
                this.message=res.data.message
              }
            }, (error) => {
              this.loading=false


              this.$swal({
                  icon: 'error',
                  title: error.response.data.message,
                  dangerMode: true,
                  button: 'بازگشت',
              }).then(() => {
                  this.$router.go(-1)
                  this.$swal.close()
              })


              this.message=error.response.data.message
              return error
            })
          },

            replace(string) {
                 return parseInt(string.replace(" تومان",''))
            },
        }
}
</script>