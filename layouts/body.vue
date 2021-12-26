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

    this.$store.dispatch('GET_LANG')
    this.$store.dispatch('SPA_INIT')
    
  }
},
    mounted() {
      

  this.$i18n.locale=this.locale

}
}
</script>
