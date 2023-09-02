<template>
  <div id="checkcontainer" class="container-fluid">
    <section id="banner" class="mt-5 pt-lg-5 pt-md-5">
      <div class="container">
        <div>
          <Download :id="data.episode.id" :show="true" :ftb="false" :staticmodal="true" :owned="data.episode.owned" :traffic="data.episode.traffic" :ir="data.episode.ir" :hour="data.episode.hour" :trafficoo="data.episode.traffic_oo" :vod="data.episode.vod" :free="data.episode.free" :name="data.episode.name" :namefa="data.episode.name_fa" :posterf="data.episode.poster" :backdrop="data.episode.backdrop" :season="data.season" :itemdata="data.episode" type="episode" @hide-modal="HIDE_MODAL" />
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
        await context.app.$axios.get('/get/episode/'+context.params.id)
        .then((result) => {
          res = result
        })
        .catch((e) => {
          context.redirect('/')
          return e
        })
     }else{
        await context.app.$axios.get('/ghost/get/episode/'+context.params.id)
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
    },title: 'دانلود '+((this.data.episode.season_number==1) ? (this.ChooseLang(this.data.episode.series_name,this.data.episode.series_name_fa)+',قسمت '+this.data.episode.episode_number) : (this.ChooseLang(this.data.episode.series_name,this.data.episode.series_name_fa)+',قسمت '+this.data.episode.episode_number+' فصل '+this.data.episode.season_number)) }
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