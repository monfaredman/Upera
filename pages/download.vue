<template>
  <div id="checkcontainer" class="container-fluid">
    <section id="banner" class="mt-5 pt-lg-5 pt-md-5">
      <div class="container">
        <div>
          <Download :show="true" @hide-modal="HIDE_MODAL" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import Download from "../components/SiteDL"
  export default {
colorMode: 'dark',
  	
  components: {
    Download
  },

  layout: "body",


        data() {
            return {
              data:{},
            }
        },
  head() {

    return { 
    bodyAttrs: {
      class: 'download sitedl'
    },title: 'دانلود' }
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