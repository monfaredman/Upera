<template>
  <div
    class="header-links header-links-profile d-md-flex align-items-center h-full ml-lg-1 mr-lg-1 dropdown float-left hide-mobile"
  >
    <b-link class="d-flex align-items-center header-link">
      <i class="icon-profile ml-2" />
      {{ userData.name || 'پروفایل' }}
    </b-link>
    <div class="dropdown-menu">
      <nuxt-link to="/profile" class="dropdown-item"> پروفایل من </nuxt-link>
      <a class="dropdown-item" @click="$emit('show-credit-modal')"> کیف پول </a>
      <a
        v-if="subscriptionType === 'renewal'"
        class="dropdown-item"
        @click="$emit('show-subscription-modal')"
      >
        تمدید اشتراک
      </a>
      <a
        v-else-if="subscriptionType === 'subscription'"
        class="dropdown-item"
        @click="$emit('show-subscription-modal')"
      >
        خرید اشتراک
      </a>
      <a v-else class="dropdown-item" @click="$emit('show-directdebit-modal')">
        پرداخت خودکار
      </a>
      <a class="dropdown-item" @click="$emit('logout')"> خروج </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfileDropdown',
  props: {
    userData: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    subscriptionType: {
      type: String,
      default: '',
    },
  },
}
</script>
