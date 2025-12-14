<template>
  <div id="checkcontainer" class="container-fluid">
    <section class="login mt-5 pt-lg-5 pt-md-5">
      <div>
        <Login :show="true" :staticmodal="true" @hide-modal="HIDE_MODAL" />
      </div>
    </section>
  </div>
</template>

<script>
import Login from '../components/Login'

export default {
  components: {
    Login,
  },
  head() {
    return {
      bodyAttrs: {
        class: 'login',
      },
      title: 'ورود',
    }
  },

  mounted() {
    if (this.$auth.loggedIn && this.$route.query.redirect) {
      this.$router.push({ path: this.$route.query.redirect })
    } else if (this.$auth.loggedIn) {
      this.$router.push('/')
    }
  },
  methods: {
    HIDE_MODAL() {},
  },
}
</script>

<style>
.login .modal {
  z-index: 0;
}
.login #tab-bar,
.login header {
  z-index: 2000 !important;
}
.login .search {
  z-index: 999999 !important;
}
.login .modal {
  top: 50px !important;
  height: 100% !important;
}
.login #footer {
  position: fixed !important;
  bottom: 0;
  left: 0;
  right: 0;
}
#footer {
  z-index: 9999999 !important;
}
</style>
