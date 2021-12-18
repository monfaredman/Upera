<template>
  <div id="srm" class="srmrtl">
    <div class="default">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {

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

}
}
</script>
