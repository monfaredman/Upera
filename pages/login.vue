<template>
  <div>
    <section class="login mt-5">
      <div style="height: 35vh;min-height:260px;max-height:400px">
        <Login :show="true" :staticmodal="true" @hide-modal="HIDE_MODAL" />
      </div>
    </section>
  </div>
</template>

<script>
import Login from "../components/Login"

  export default {
  components: {
    Login
  },
      head () {
    return {
      
    bodyAttrs: {
      class: 'login'
    }
    }
  },
    methods: {
            HIDE_MODAL() {
              
            },
    },
  }
</script>

<style>
.login .modal{z-index:0}
.login #tab-bar,.login header{z-index:2000 !important}
.login .search{z-index:9999999 !important}
.login .modal{top:50px !important;height:100% !important;}
.login #footer{position:fixed !important;bottom: 0;left: 0;right: 0;}
</style>
