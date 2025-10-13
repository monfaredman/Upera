<template>
  <nuxt-link :to="logoTo" class="logo" :class="additionalClasses">
    <template v-if="$config.envname === 'upera'">
      <i v-if="showLogotype" class="icon-upera-fa-logotype" />
      <i v-if="showLogo" class="icon-upera-logo" />
      <img
        v-else-if="bannerNav"
        src="/images/logo-mobile.svg"
        class="d-md-none"
        :alt="$config.name_fa"
      />
    </template>
    <template v-else-if="$config.envname === 'plus'">
      <img
        :src="logoUrl"
        :class="{ 'd-none d-md-block': bannerNav }"
        :alt="$config.name_fa"
        width="42"
        height="42"
      />
      <img
        v-if="bannerNav && checkuser.ref > 2"
        :src="'https://cdn.upera.shop/s3/vods/' + checkuser.logo_dark"
        class="d-md-none"
        :alt="$config.name_fa"
      />
    </template>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    logoTo: {
      type: String,
      default: '/',
    },
    bannerNav: {
      type: Boolean,
      default: false,
    },
    additionalClasses: {
      type: String,
      default: '',
    },
    showLogotype: {
      type: Boolean,
      default: true,
    },
    showLogo: {
      type: Boolean,
      default: true,
    },
    checkuser: {
      type: Object,
      default: () => ({
        ref: 0,
        logo: '',
        logo_dark: '',
      }),
    },
  },
  computed: {
    logoUrl() {
      if (this.$config.envname === 'plus') {
        const baseUrl = 'https://cdn.upera.shop/s3/vods/'
        return this.$colorMode.value === 'light'
          ? baseUrl + (this.checkuser.logo || '')
          : baseUrl + (this.checkuser.logo_dark || '')
      }
      return ''
    },
  },
}
</script>
