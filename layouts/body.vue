<template>
  <div id="srm" class="srmrtl">
    <div class="default">
      <Nuxt />
      <Login
        v-if="!$auth.loggedIn"
        :show="showModal"
        :staticmodal="false"
        @hide-modal="HIDE_MODAL"
      />
      <Subscription
        :show="showSubscriptionModal"
        @hide-modal="HIDE_MODAL_SUBSCRIPTION"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Subscription from '../components/Subscription'
export default {
  components: {
    Subscription,
  },
  computed: {
    ...mapGetters({ locale: 'locale' }),
    ...mapGetters({ showModal: 'login/showModal' }),
    ...mapGetters({ showSubscriptionModal: 'subscription/showModal' }),
  },
  watch: {
    locale(newLocale) {
      if (process.browser && this.$i18n && newLocale) {
        this.$i18n.setLocale(newLocale)
        // Update HTML attributes
        const html = document.querySelector('html')
        if (html) {
          html.setAttribute('lang', newLocale)
          html.setAttribute('dir', newLocale === 'fa' ? 'rtl' : 'ltr')
        }
      }
    },
  },
  created: function () {
    if (process.browser) {
      this.$store.dispatch('GET_LANG').then(() => {
        // Sync i18n locale after detection
        if (this.$i18n && this.locale) {
          this.$i18n.setLocale(this.locale)
        }
      })
    }
  },
  mounted() {
    // Ensure locale is synced on mount
    if (process.browser && this.$i18n && this.locale) {
      this.$i18n.setLocale(this.locale)
      // Update HTML attributes
      const html = document.querySelector('html')
      if (html) {
        html.setAttribute('lang', this.locale)
        html.setAttribute('dir', this.locale === 'fa' ? 'rtl' : 'ltr')
      }
    }
  },

  methods: {
    HIDE_MODAL() {
      this.$store.dispatch('login/HIDE_MODAL')
    },
    HIDE_MODAL_SUBSCRIPTION() {
      this.$store.dispatch('subscription/HIDE_MODAL')
    },
  },
}
</script>
