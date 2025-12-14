<template>
  <div>
    <Login
      v-if="!$auth.loggedIn && $route.name !== 'login'"
      :show="showModal"
      :staticmodal="false"
      @hide-modal="HIDE_MODAL"
    />
    <Credit
      v-if="$auth.loggedIn"
      :show="showCreditModal"
      @hide-modal="HIDE_MODAL_CREDIT"
    />
    <Subscription
      :show="showSubscriptionModal"
      @hide-modal="HIDE_MODAL_SUBSCRIPTION"
    />
    <DirectDebit
      v-if="$auth.loggedIn"
      :show="showDirectDebitModal"
      @hide-modal="HIDE_MODAL_DIRECTDEBIT"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Login from '../../components/Login'
import Credit from '../../components/Credit'
import DirectDebit from '../../components/DirectDebit'
import Subscription from '../../components/Subscription'

export default {
  name: 'ModalManager',
  components: {
    Login,
    Credit,
    DirectDebit,
    Subscription,
  },
  computed: {
    ...mapGetters({
      showModal: 'login/showModal',
      showCreditModal: 'credit/showModal',
      showDirectDebitModal: 'directdebit/showModal',
      showSubscriptionModal: 'subscription/showModal',
    }),
  },
  methods: {
    HIDE_MODAL() {
      this.$store.dispatch('login/HIDE_MODAL')
    },
    HIDE_MODAL_CREDIT() {
      this.$store.dispatch('credit/HIDE_MODAL')
    },
    HIDE_MODAL_DIRECTDEBIT() {
      this.$store.dispatch('directdebit/HIDE_MODAL')
    },
    HIDE_MODAL_SUBSCRIPTION() {
      this.$store.dispatch('subscription/HIDE_MODAL')
    },
  },
}
</script>
<style coped>
.modal-body {
  direction: rtl !important;
}
</style>
