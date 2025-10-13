<template>
  <nuxt-link :to="logoTo" class="logo" :class="additionalClasses">
    <template v-if="isUpera">
      <!-- Desktop Logo for Upera -->
      <template v-if="isAnotherPage">
        <i class="icon-upera-fa-logotype" />
        <i class="icon-upera-logo" />
      </template>
      <template v-else>
        <img
          src="@/assets/img/logo.svg"
          :class="{ 'd-none d-md-block': bannerNav }"
          :alt="$config.name_fa"
        />
      </template>

      <!-- Mobile Logo for Upera -->
      <img
        v-if="bannerNav"
        src="/images/logo-mobile.svg"
        class="d-md-none"
        :alt="$config.name_fa"
      />
    </template>

    <template v-else-if="isPlus">
      <!-- Desktop Logo for Plus -->
      <img
        :src="logoUrl"
        :class="{ 'd-none d-md-block': bannerNav }"
        :alt="$config.name_fa"
        width="42"
        height="42"
      />

      <!-- Mobile Logo for Plus -->
      <img
        v-if="bannerNav && showMobileLogo"
        :src="mobileLogo"
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
    isAnotherPage: {
      type: Boolean,
      default: false,
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
    isUpera() {
      return this.$config.envname === 'upera'
    },
    isPlus() {
      return this.$config.envname === 'plus'
    },
    logoUrl() {
      if (!this.isPlus) return ''

      const baseUrl = 'https://cdn.upera.shop/s3/vods/'
      const logoFile =
        this.$colorMode.value === 'light'
          ? this.checkuser.logo
          : this.checkuser.logo_dark

      return baseUrl + (logoFile || '')
    },
    showMobileLogo() {
      return this.checkuser.ref > 2
    },
    mobileLogo() {
      if (this.showMobileLogo) {
        return 'https://cdn.upera.shop/s3/vods/' + this.checkuser.logo_dark
      }
      return '@/assets/images/mobile.png'
    },
  },
}
</script>
