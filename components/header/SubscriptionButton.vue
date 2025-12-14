<template>
  <b-button
    variant="second"
    class="d-flex align-items-center ml-2"
    @click="handleClick"
  >
    <i class="fa fa-credit-card ml-2 hide-mobile" />
    {{ buttonText }}
  </b-button>
</template>

<script>
export default {
  name: 'SubscriptionButton',
  props: {
    type: {
      type: String,
      required: true,
      validator: (value) =>
        ['directdebit', 'subscription', 'renewal'].includes(value),
    },
    isLoggedIn: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonText() {
      const texts = {
        directdebit: 'پرداخت خودکار',
        subscription: this.isLoggedIn ? 'خرید اشتراک' : 'خرید اشتراک',
        renewal: 'تمدید اشتراک',
      }
      return texts[this.type]
    },
  },
  methods: {
    handleClick() {
      this.$emit('button-click', this.type)
    },
  },
}
</script>
