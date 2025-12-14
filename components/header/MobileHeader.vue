<template>
  <div class="d-flex header-mobile d-md-none">
    <div class="show-mobile header-home">
      <nuxt-link
        to="/"
        class="header-link d-flex flex-column align-items-center justify-content-center text-nowrap active"
      >
        <i v-if="$config.envname == 'upera'" class="icon-upera-logo" />
        <i v-else class="icon-home" />
        <span>
          <i v-if="$config.envname == 'upera'" class="icon-upera-fa-logotype" />
          <span v-else>خانه </span>
        </span>
      </nuxt-link>
    </div>
    <div class="d-flex align-items-center h-full header-search">
      <nuxt-link
        to="/search"
        class="show-mobile header-link d-flex flex-column align-items-center justify-content-center text-nowrap"
      >
        <i class="icon-search-stroke" />
        <span>جستجو </span>
      </nuxt-link>
    </div>
    <div
      class="header-search header-links header-links-category d-md-flex align-items-center mr-md-2 mr-lg-3 h-full"
    >
      <nuxt-link to="/genres" class="d-flex align-items-center header-link">
        <i class="icon-categories" />
        <span class="ml-md-2">دسته&zwnj;بندی</span>
        <i class="icon-expand-arrow hide-mobile" />
      </nuxt-link>
    </div>

    <div v-if="$config.envname == 'upera'" class="header-search">
      <a
        href="/kids"
        class="show-mobile header-link d-flex flex-column align-items-center justify-content-center text-nowrap"
      >
        <i class="icon-kids-version" />
        <span>کودک </span>
      </a>
    </div>
    <div
      class="header-search header-links header-links-profile d-md-flex align-items-center mr-md-2 mr-lg-3 h-full"
    >
      <nuxt-link to="/profile" class="d-flex align-items-center header-link">
        <i class="icon-profile-setting" />
        <span class="ml-md-2">پروفایل</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileHeader',
  props: {
    currentRoute: {
      type: String,
      default: '',
    },
  },
}
</script>
