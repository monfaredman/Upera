<template>
  <div id="srm" class="srmrtl">
    <div class="default">
      <Header />
      <Nuxt />
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Header from "../components/Header"
export default {
  components: {
    Header,
  },
        computed: {
            ...mapGetters({locale: "locale"})
        },
created: function() {
  if (process.browser) {
    if(!this.$auth.loggedIn && localStorage.getItem('auth.strategy')=='local' && (localStorage.getItem('auth._token.local') === null || localStorage.getItem('auth._token.local') != 'false')){
      this.$auth.logout()
    }
    this.$store.dispatch('GET_LANG')
    this.$store.dispatch('GET_NIGHTMODE')
  }
},
    mounted() {
      

  this.$i18n.locale=this.locale

      !function () { function t() { var t = document.createElement("script"); t.type = "text/javascript", t.async = !0, localStorage.getItem("rayToken") ? t.src = "https://app.raychat.io/scripts/js/" + o + "?rid=" + localStorage.getItem("rayToken") + "&href=" + window.location.href : t.src = "https://app.raychat.io/scripts/js/" + o; var e = document.getElementsByTagName("script")[0]; e.parentNode.insertBefore(t, e) } var e = document, a = window, o = "0631e113-eac6-4d10-8085-0a7e4fd1517a"; "complete" == e.readyState ? t() : a.attachEvent ? a.attachEvent("onload", t) : a.addEventListener("load", t, !1) }()
}
}
</script>
