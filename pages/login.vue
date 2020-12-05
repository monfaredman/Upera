<template>
  <div>
    <section class="login mt-5">
      <div style="min-height:500px;height:100%;">
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
.login #tab-bar,.login header,.login footer{z-index:2000 !important}
.login .search{z-index:9999999 !important}
</style>
