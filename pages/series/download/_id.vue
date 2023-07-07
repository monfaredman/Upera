<template>
  <div id="checkcontainer" class="container-fluid">
    <section id="banner" class="mt-5 pt-lg-5 pt-md-5">
      <div class="container">
        <div>
          <Download :id="data.series.id" :show="true" :ftb="false" :staticmodal="true" :owned="data.series.owned" :traffic="data.series.traffic" :ir="data.series.ir" :hour="data.series.hour" :trafficoo="data.series.traffic_oo" :vod="data.series.vod" :free="data.series.free" :name="data.series.name" :namefa="data.series.name_fa" :posterf="data.series.poster" :backdrop="data.series.backdrop" :season="data.season" type="series" @hide-modal="HIDE_MODAL" />
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
    layout: "nofooter",

  async asyncData (context) {
    let res
    if (context.app.$auth.loggedIn) {
        await context.app.$axios.get('/get/series/'+context.params.id)
        .then((result) => {
          res = result
        })
        .catch((e) => {
          context.redirect('/')
          return e
        })
     }else{
        await context.app.$axios.get('/ghost/get/series/'+context.params.id)
        .then((result) => {
          res = result
        })
        .catch((e) => {
          context.redirect('/')
          return e
        })
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
    },title: 'دانلود '+(this.ChooseLang(this.data.series.name,this.data.series.name_fa)) }
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
.download .modal{top:50px !important;height:100% !important;}
.download #downloadLinks___BV_modal_outer_{position:relative  !important;height:100% !important;}
/*.download .modal .modal-content{bottom:25px !important;}*/
</style>