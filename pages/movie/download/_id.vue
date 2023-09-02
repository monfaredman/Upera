<template>
  <div id="checkcontainer" class="container-fluid">
    <section id="banner" class="mt-5 pt-lg-5 pt-md-5">
      <div class="container">
        <div>
          <Download :id="data.movie.id" :show="true" :ftb="false" :staticmodal="true" :owned="data.movie.owned" :traffic="data.movie.traffic" :ir="data.movie.ir" :hour="data.movie.hour" :trafficoo="data.movie.traffic_oo" :vod="data.movie.vod" :free="data.movie.free" :name="data.movie.name" :namefa="data.movie.name_fa" :posterf="data.movie.poster" :backdrop="data.movie.backdrop" type="movie" @hide-modal="HIDE_MODAL" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import Download from "../../../components/Download"
  export default {
  components: {
    Download
  },
  // layout(context) {
  //   if(context.query.ref && context.$config.envname!='plus')
  //     return 'body'
  //   else
  //     return 'nofooter'
  // },
     layout: "nofooter",

  async asyncData (context) {
    let res
    if (context.app.$auth.loggedIn) {
        res = await context.app.$axios.get('/get/movie/'+context.params.id)
     }else{
      res = await context.app.$axios.get('/ghost/get/movie/'+context.params.id)
     }


    return {data:res.data.data}
  },
        data() {
            return {
              data:{},
            }
        },
  head() {

    return { 
    bodyAttrs: {
      class: 'download'
    },title: ((this.data.movie.ekran==1) ? 'اکران ' : 'دانلود ')+(this.ChooseLang(this.data.movie.name,this.data.movie.name_fa)) }
  },

    methods: {
            HIDE_MODAL() {
              
            },
            ChooseLang(en,fa){
                if(fa && this.$i18n.locale=="fa")
                    return fa
                else
                    return en
            },
    },
  }
</script>

<style>
.download .modal{z-index:0}
.download #tab-bar,.download header,.download footer{z-index:2000 !important}
.download .search{z-index:9999999 !important}
.download .with-header .modal{top:50px !important;}
.download .modal{height:100% !important;}
.download #downloadLinks___BV_modal_outer_{position:relative  !important;height:100% !important;}
/*.download .modal .modal-content{bottom:25px !important;}*/
</style>
