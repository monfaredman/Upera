<template>
  <div>
    <client-only>
      <div v-if="isVisible" class="mobile-drawer-overlay" @click="close">
        <div class="mobile-drawer" @click.stop>
          <div class="mobile-drawer-header">
            <button class="close-button" @click="close">
              <i class="fa fa-times" />
            </button>
          </div>
          <div class="mobile-drawer-content">
            <ul class="nav flex-column mobile-nav-column">
              <!-- User Info Section -->
              <li class="nav-item">
                <span
                  class="nav-link nav-link-divider d-flex align-items-center flex-wrap"
                  @click="!hasUserName ? showProfileEditModal() : null"
                >
                  <div
                    v-if="userAvatar"
                    class="user-avatar-wrapper"
                    :style="{ backgroundImage: `url(${userAvatar})` }"
                  />
                  <svg
                    v-else
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" rx="16" fill="#525252" />
                    <path
                      d="M14.6453 26C14.38 25.9657 14.1128 25.948 13.8453 25.947C13.0575 25.9067 12.2737 25.8084 11.5003 25.653C9.83131 25.333 8.74131 24.763 8.27331 23.874C8.09271 23.5266 7.99767 23.1411 7.99611 22.7496C7.99454 22.3581 8.08649 21.9718 8.26431 21.623C8.72331 20.733 9.81331 20.155 11.5003 19.844C12.2743 19.6922 13.0578 19.594 13.8453 19.55C15.2849 19.4339 16.7316 19.4339 18.1713 19.55C18.9553 19.5957 19.7354 19.694 20.5063 19.844C22.1763 20.181 23.2653 20.733 23.7333 21.623C23.9064 21.9665 23.9965 22.3458 23.9965 22.7305C23.9965 23.1152 23.9064 23.4945 23.7333 23.838C23.2663 24.728 22.2193 25.315 20.4893 25.617C19.7186 25.7717 18.938 25.872 18.1533 25.917C17.427 25.9847 16.6976 26.0124 15.9683 26H14.6453ZM10.7513 11.4C10.7318 9.98801 11.2738 8.62605 12.258 7.61346C13.2423 6.60088 14.5883 6.02054 16.0003 6C17.4128 6.01975 18.7596 6.59975 19.7445 7.61242C20.7294 8.62508 21.2718 9.98749 21.2523 11.4C21.2715 12.8124 20.7291 14.1747 19.7442 15.1873C18.7593 16.1999 17.4127 16.78 16.0003 16.8C14.5884 16.7792 13.2425 16.1988 12.2583 15.1862C11.2741 14.1737 10.7321 12.8119 10.7513 11.4Z"
                      fill="white"
                    />
                  </svg>
                  <div class="pr-2 flex-grow-1">
                    <div class="font-weight-bold">
                      {{ userName || checkuser.mobile }}
                    </div>
                    <div
                      v-if="checkuser.days_period_to_end"
                      class="p-fs-small mt-2"
                    >
                      {{ checkuser.days_period_to_end }} روز تا پایان اشتراک
                    </div>
                    <div v-else class="p-fs-small mt-2">بدون اشتراک</div>
                  </div>
                  <b-button
                    v-if="!hasUserName"
                    variant="link"
                    size="sm"
                    class="p-0 text-primary"
                    @click.stop="showProfileEditModal"
                  >
                    <i class="fa fa-user-edit" />
                  </b-button>
                </span>
              </li>

              <!-- Subscription/Payment Button -->
              <li class="nav-item nav-item-padding">
                <b-button
                  variant="second"
                  class="d-flex align-items-center justify-content-center w-full"
                  @click="handleSubscriptionAction"
                >
                  <i class="fa fa-credit-card ml-2" />
                  {{ subscriptionButtonText }}
                </b-button>
              </li>

              <!-- Wallet Section -->
              <li class="nav-item nav-item-padding">
                <div
                  class="d-flex align-items-center justify-content-between flex-wrap"
                >
                  <div class="d-flex align-items-center">
                    <i class="icon-wallet" />
                    <div class="pr-2 disabled">
                      <div class="font-weight-bold">کیف پول</div>
                      <div class="p-fs-small mt-1">
                        <a @click="handleCreditAction"> افزایش موجودی </a>
                      </div>
                    </div>
                  </div>
                  <button
                    class="btn btn-secondary btn-sm"
                    @click="handleCreditAction"
                  >
                    {{ myCredit }}
                  </button>
                </div>
              </li>

              <!-- My Lists Expandable -->
              <li class="nav-item">
                <div
                  class="nav-link d-flex align-items-center justify-content-between flex-wrap"
                  @click="toggleMobileLists"
                >
                  <div class="d-flex align-items-center">
                    <i class="fa fa-play-circle" />
                    <span class="pr-2">لیست‌های من</span>
                  </div>
                  <i
                    class="fa"
                    :class="
                      mobileListsExpanded ? 'fa-angle-up' : 'fa-angle-down'
                    "
                  />
                </div>
                <ul v-show="mobileListsExpanded" class="nested-mobile-list">
                  <li>
                    <nuxt-link
                      to="/lists/downloads"
                      class="nested-mobile-item"
                      @click.native="close"
                    >
                      <i class="fa fa-download ml-2" />
                      خریداری شده‌ها
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      to="/lists/watchlist"
                      class="nested-mobile-item"
                      @click.native="close"
                    >
                      <i class="fa fa-clock ml-2" />
                      لیست تماشا
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      to="/lists/likes"
                      class="nested-mobile-item"
                      @click.native="close"
                    >
                      <i class="fa fa-heart ml-2" />
                      مورد علاقه‌ها
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      to="/lists/offer"
                      class="nested-mobile-item"
                      @click.native="close"
                    >
                      <i class="fa fa-star ml-2" />
                      عناوین پیشنهادی
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      to="/lists/watched"
                      class="nested-mobile-item"
                      @click.native="close"
                    >
                      <i class="fa fa-eye ml-2" />
                      دیده شده‌ها
                    </nuxt-link>
                  </li>
                </ul>
              </li>

              <!-- Payments Link -->
              <li v-show="showPayments" class="nav-item">
                <nuxt-link
                  class="nav-link d-flex align-items-center flex-wrap"
                  to="/payments"
                  style="color: inherit"
                  @click.native="close"
                >
                  <i class="fa fa-money-bill-wave" />
                  <span class="pr-2">پرداخت‌های من</span>
                </nuxt-link>
              </li>

              <!-- Dark Mode Toggle -->
              <li class="nav-item">
                <div
                  class="nav-link d-flex align-items-center justify-content-between"
                >
                  <div class="d-flex align-items-center">
                    <i class="fa fa-moon" />
                    <span class="pr-2">حالت شب</span>
                  </div>
                  <div class="custom-control custom-switch">
                    <input
                      id="nightModeMobile"
                      type="checkbox"
                      class="custom-control-input"
                      :checked="$colorMode.value === 'dark'"
                      @change="toggleNightMode($event.target.checked)"
                    />
                    <label class="custom-control-label" for="nightModeMobile" />
                  </div>
                </div>
              </li>

              <!-- Shopping Basket Toggle -->
              <li class="nav-item">
                <div
                  class="nav-link d-flex align-items-center justify-content-between"
                >
                  <div class="basket-title d-flex flex-column flex-grow-1">
                    <div class="d-flex align-items-center">
                      <i class="fa fa-shopping-basket" />
                      <span class="pr-2">سبد خرید</span>
                    </div>
                    <div class="p-fs-small mt-1 pr-4" style="line-height: 1.4">
                      با سبدخرید می‌توانید چند فیلم یا قسمت را با هم خریداری
                      کنید.
                    </div>
                  </div>
                  <div class="custom-control custom-switch">
                    <input
                      id="basketActiveMobile"
                      type="checkbox"
                      class="custom-control-input"
                      :checked="$store.state.basketActive"
                      @change="toggleBasket($event.target.checked)"
                    />
                    <label
                      class="custom-control-label"
                      for="basketActiveMobile"
                    />
                  </div>
                </div>
              </li>

              <li class="nav-item">
                <nuxt-link
                  class="nav-link d-flex align-items-center flex-wrap"
                  to="/app"
                  style="color: inherit"
                  @click.native="close"
                >
                  <i class="icon-download" />
                  <span class="pr-2">دانلود اپلیکیشن</span>
                </nuxt-link>
              </li>

              <!-- Logout -->
              <li class="nav-item">
                <b-link
                  class="nav-link d-flex align-items-center flex-wrap"
                  style="color: inherit"
                  @click="handleLogout"
                >
                  <i class="fa fa-sign-out-alt" />
                  <span class="pr-2">خروج از حساب کاربری</span>
                </b-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'MobileProfileDrawer',
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
    contentSubscription: {
      type: Boolean,
      default: false,
    },
    myCredit: {
      type: [String, Number],
      default: '',
    },
    showPayments: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      mobileListsExpanded: false,
      selectedAvatar: null,
      userAvatar: null,
      profileForm: {
        firstName: '',
        lastName: '',
        email: '',
      },
    }
  },
  computed: {
    subscriptionButtonText() {
      const { contentSubscription, checkuser } = this

      if (!contentSubscription && checkuser?.subscription != 1) {
        return 'پرداخت خودکار'
      } else if (contentSubscription || checkuser?.subscription == 1) {
        return checkuser?.access ? 'تمدید اشتراک' : 'خرید اشتراک'
      }
      return 'پرداخت خودکار'
    },
    availableAvatars() {
      return this.$store.getters.avatars.availableAvatars
    },
    cdnUser() {
      return this.$store.getters.avatars.cdnUser || ''
    },
    userName() {
      const { firstName, lastName } = this.profileForm
      if (firstName || lastName) {
        return `${firstName || ''} ${lastName || ''}`.trim()
      }
      return ''
    },
    hasUserName() {
      return !!(this.profileForm.firstName || this.profileForm.lastName)
    },
  },
  watch: {
    isVisible(val) {
      if (process.client) {
        document.body.style.overflow = val ? 'hidden' : ''
      }
    },
  },
  mounted() {
    if (this.checkuser) {
      this.fetchAvatars()
    }
    if (process.client) {
      const stored = localStorage.getItem('selected_avatar')
      if (stored) {
        this.userAvatar = stored
        this.selectedAvatar = stored
      }
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    toggleMobileLists() {
      this.mobileListsExpanded = !this.mobileListsExpanded
    },
    handleSubscriptionAction() {
      const { contentSubscription, checkuser } = this
      this.close()

      if (!contentSubscription && checkuser?.subscription != 1) {
        this.$emit('show-directdebit-modal')
      } else if (contentSubscription || checkuser?.subscription == 1) {
        this.$emit('show-subscription-modal')
      }
    },
    handleCreditAction() {
      this.close()
      this.$emit('show-credit-modal')
    },
    handleLogout() {
      this.close()
      this.$emit('logout')
    },
    toggleBasket(value) {
      if (process.client) {
        localStorage.removeItem('_cart')
      }
      this.$store.dispatch('SET_BASKET_ACTIVE', value)
    },
    toggleNightMode(value) {
      this.$colorMode.preference = value ? 'dark' : 'light'
    },
    async fetchAvatars() {
      try {
        // Use Vuex store action to fetch avatars (only fetches once)
        await this.$store.dispatch('FETCH_AVATARS')

        const { userAvatar: user_avatar, cdnUser: cdn_user } =
          this.$store.getters.avatars

        if (user_avatar && !localStorage.getItem('selected_avatar')) {
          this.userAvatar = cdn_user
            ? `${cdn_user}/${user_avatar}`
            : user_avatar
          this.selectedAvatar = this.userAvatar
        }
      } catch (error) {
        console.error('Error fetching avatars:', error)
      }
    },
    showProfileEditModal() {
      this.close()
      this.$emit('show-profile-edit')
    },
  },
}
</script>

<style scoped>
.mobile-drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: flex-end;
}

.mobile-drawer {
  width: 100%;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.mobile-drawer-header {
  display: flex;
  justify-content: flex-end;
  padding: 16px 20px 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.close-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-drawer-content {
  padding: 20px;
}

.mobile-nav-column {
  gap: 12px;
}

.mobile-nav-column .nav-item {
  margin-top: 0 !important;
}

.mobile-nav-column .nav-item + .nav-item {
  margin-top: 12px !important;
}

.user-avatar-wrapper {
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
}

.nested-mobile-list {
  list-style: none;
  padding: 0;
  margin: 8px 0 0 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 8px;
  overflow: hidden;
}

.nested-mobile-list li {
  margin: 0;
}

.nested-mobile-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.nested-mobile-item:last-child {
  border-bottom: none;
}

.nested-mobile-item:hover {
  background-color: rgba(0, 0, 0, 0.05);
  text-decoration: none;
}

.nested-mobile-item i {
  font-size: 14px;
}

.basket-title {
  margin-left: 2rem;
}

.nav-item {
  color: black !important;
}

/* Dark Mode Support */
.theme-dark .mobile-drawer {
  background-color: black;
}

.theme-dark .mobile-drawer-header {
  border-bottom-color: rgba(255, 255, 255, 0.1);
}
#header i {
  color: black;
}
.theme-dark #header i {
  color: white;
}

.theme-dark .close-button {
  color: #fff;
}

.theme-dark .nested-mobile-list {
  background-color: rgba(255, 255, 255, 0.05);
}

.theme-dark .nested-mobile-item {
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

.theme-dark .nested-mobile-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.theme-dark .nav-item {
  color: white !important;
}
</style>
