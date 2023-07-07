<template>
  <div id="srm" class="srmrtl">
    <div class="default with-header">
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
