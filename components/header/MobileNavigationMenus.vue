<template>
  <div>
    <ul v-if="showCategoriesMenu" class="d-md-none category-menu-mobile mt-5">
      <li>
        <nuxt-link to="/genres">
          {{ $t('new.genres') }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/casts/iranian-actors">
          {{ $t('new.iranianactors') }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/casts/foreign-actors">
          {{ $t('new.foreignactors_mobile') }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/casts/directors">
          {{ $t('new.directors') }}
        </nuxt-link>
      </li>
    </ul>
    <ul
      v-if="showProfileMenu"
      class="container d-md-none category-menu-mobile category-menu-mobile-setting mt-5 pt-md-3 pt-lg-5 p- app_container_pricing_res"
    >
      <li class="mr-3">
        <nuxt-link to="/profile"> لیست‌های من </nuxt-link>
      </li>
      <li v-show="showpayments" class="mr-3">
        <nuxt-link to="/payments"> پرداخت ها </nuxt-link>
      </li>
      <li class="mr-3">
        <nuxt-link to="/profile/settings">
          {{ $t('setting.app_setting') }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MobileNavigationMenus',
  props: {
    currentRoute: {
      type: String,
      default: '',
    },
    categories: {
      type: Array,
      default: () => [],
    },
    profile: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showpayments: true,
    }
  },
  computed: {
    showCategoriesMenu() {
      return this.categories.includes(this.currentRoute)
    },
    showProfileMenu() {
      return this.profile.includes(this.currentRoute)
    },
  },
}
</script>
