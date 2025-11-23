<template>
  <div
    class="category header-buttons d-flex align-items-center h-full header-category-profile"
  >
    <div
      class="header-links header-links-profile d-md-flex align-items-center mr-md-2 mr-lg-3 h-full"
    >
      <a
        href="/kids"
        class="profile d-flex align-items-center header-link"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <img
          :src="
            hover
              ? require('@/assets/images/kid-logo-orange.png')
              : require('@/assets/images/kid-logo.png')
          "
          alt="کودک"
          style="width: 54px"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KidsSection',
  data() {
    return {
      hover: false,
    }
  },
}
</script>
