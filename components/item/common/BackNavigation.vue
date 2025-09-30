<template>
  <a href="#" class="back" :class="backClass" @click.prevent="handleBackClick">
    <img
      :src="arrowIcon"
      width="30"
      height="30"
      :alt="variant === 'mobile' ? 'Back' : 'Back Desktop'"
    />
  </a>
</template>

<script>
export default {
  name: 'BackNavigation',
  props: {
    variant: {
      type: String,
      default: 'desktop',
      validator: (value) => ['desktop', 'mobile'].includes(value),
    },
  },
  computed: {
    backClass() {
      return {
        'd-md-none': this.variant === 'mobile',
        'd-none d-md-block': this.variant === 'desktop',
        back: this.variant === 'mobile',
        back2: this.variant === 'desktop',
      }
    },
    arrowIcon() {
      // Use require for webpack to handle the asset
      return this.variant === 'mobile'
        ? require('@/assets/img/icons/arrow-back.svg')
        : require('@/assets/img/icons/arrow-back2.svg')
    },
  },
  methods: {
    handleBackClick() {
      if (this.hasHistory()) {
        this.$router.go(-1)
      } else {
        this.$router.push('/')
      }
    },
    hasHistory() {
      return window.history.length > 2
    },
  },
}
</script>
