<template>
  <div id="srm" class="srmrtl">
    <div class="default">
      <Nuxt />
      <Login v-if="!$auth.loggedIn" :show="showModal" :staticmodal="false" @hide-modal="HIDE_MODAL" />
      <Subscription :show="showSubscriptionModal" @hide-modal="HIDE_MODAL_SUBSCRIPTION" />
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Subscription from "../components/Subscription"
export default {

  components: {
    Subscription
  },
        computed: {
            ...mapGetters({locale: "locale"}),
            ...mapGetters({showModal: "login/showModal"}),
            ...mapGetters({showSubscriptionModal: "subscription/showModal"})
        },
created: function() {
  if (process.browser) {

    this.$store.dispatch('GET_LANG')
    
  }
},
    mounted() {
      

  this.$i18n.locale=this.locale

},

    methods: {
            HIDE_MODAL() {
              this.$store.dispatch('login/HIDE_MODAL')
            },
            HIDE_MODAL_SUBSCRIPTION() {
              this.$store.dispatch('subscription/HIDE_MODAL')
            }
        }
}
</script>
