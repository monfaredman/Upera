<template>
  <div id="srm" class="srmrtl">
    <div class="default">
      <Header />
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Header from "../components/Header"
import Footer from "../components/Footer"
export default {
  components: {
    Header,
    Footer,
  },
  head: {
    title: 'آپرا, سینمای آنلاین شما',
    meta: [
      {description: 'تماشای آنلاین فیلم ها و سریال ها در تلویزیون هوشمند , کنسول بازی , کامپیوتر , لپتاپ , تبلت و ... همین امروز شروع کنید'}
    ]
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
  }
},
    mounted() {
      

  this.$i18n.locale=this.locale

      !function(){var a=window,d=document
      function g(){var g=d.createElement("script"),s="https://www.goftino.com/widget/gLKqpv",l=localStorage.getItem("goftino")
      g.type="text/javascript",g.async=!0,g.referrerPolicy="no-referrer-when-downgrade",g.src=l?s+"?o="+l:s
      d.getElementsByTagName("head")[0].appendChild(g)
    }"complete"===d.readyState?g():a.attachEvent?a.attachEvent("onload",g):a.addEventListener("load",g,!1)}()





}
}
</script>
