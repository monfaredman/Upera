<template>
  <div class="header-buttons d-flex align-items-center h-full">
    <!-- Settings Popover -->
    <div
      class="header-links header-links-profile-setting d-md-flex align-items-center h-full ml-lg-1 mr-lg-1 dropdown float-left hide-mobile"
    >
      <b-link
        id="popover-settings"
        class="d-flex align-items-center header-link"
      >
        <i class="icon-setting ml-2" />
      </b-link>
      <b-popover
        id="popover-d-settings"
        target="popover-settings"
        triggers="hover"
        placement="bottom"
        fallback-placement="flip"
        boundary-padding="1"
      >
        <ul class="dropdown-menu show">
          <li class="px-3 py-2">
            <div class="tab-content active">
              <div id="tabsetting" class="tab-pane active">
                <div
                  class="d-flex align-items-center justify-content-between pt-3 py-4 border-bottom-gray"
                >
                  <div class="text-black">
                    <i class="fa fa-moon ml-2" />
                    حالت شب
                  </div>
                  <div class="custom-control custom-switch">
                    <input
                      id="nightMode"
                      type="checkbox"
                      class="custom-control-input"
                      :checked="$colorMode.value === 'dark'"
                      @change="nightmode($event.target.checked)"
                    />
                    <label class="custom-control-label" for="nightMode" />
                  </div>
                </div>
                <div
                  class="d-flex align-items-center justify-content-between py-4 pt-3 border-bottom-gray"
                >
                  <div class="text-black">
                    <i class="fa fa-globe ml-2" />
                    زبان فارسی
                  </div>
                  <div class="custom-control custom-switch">
                    <input
                      id="language"
                      type="checkbox"
                      class="custom-control-input"
                      :checked="$i18n.locale === 'fa'"
                      @change="changelang()"
                    />
                    <label class="custom-control-label" for="language" />
                  </div>
                </div>
                <div class="py-4 pt-3">
                  <div class="text-black pb-1">فیلترگذاری ثابت محتوا</div>
                  <FilterContents
                    :show="true"
                    :setting="true"
                    :savedata="true"
                    :no-top="false"
                    @execute_content_filtering="execute_content_filtering"
                  />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </b-popover>
    </div>
    <!-- Basket Icon -->
    <div
      v-if="$store?.state?.basketActive !== false || !$auth.loggedIn"
      class="header-links header-links-basket d-md-flex align-items-center h-full ml-lg-1 mr-lg-1 float-left hide-mobile"
    >
      <b-link id="popover-basket" class="d-flex align-items-center header-link">
        <i class="fa fa-shopping-basket ml-2" />
      </b-link>
      <b-popover
        id="popover-d-basket"
        target="popover-basket"
        triggers="hover"
        placement="bottom"
        fallback-placement="flip"
        boundary-padding="1"
        custom-class="basket-popover"
      >
        <BasketPopoverContent @close-popover="closeBasketPopover" />
      </b-popover>
    </div>

    <!-- Subscription Buttons -->
    <div class="btn-app">
      <b-button
        v-if="
          !content_subscription &&
          checkuser.subscription != 1 &&
          !isLoggedIn &&
          $route.name !== 'login'
        "
        variant="second"
        class="d-flex align-items-center ml-2"
        @click="$emit('show-modal-with-directdebit')"
      >
        <i class="fa fa-credit-card ml-2 hide-mobile" />
        پرداخت خودکار
      </b-button>
      <b-button
        v-else-if="
          !content_subscription && checkuser.subscription != 1 && isLoggedIn
        "
        variant="second"
        class="d-flex align-items-center ml-2"
        @click="$emit('show-directdebit-modal')"
      >
        <i class="fa fa-credit-card ml-2 hide-mobile" />
        پرداخت خودکار
      </b-button>
      <b-button
        v-if="
          (content_subscription || checkuser.subscription == 1) && !isLoggedIn
        "
        variant="second"
        class="d-flex align-items-center ml-2"
        @click="$emit('show-modal-with-subscription')"
      >
        <i class="fa fa-credit-card ml-2 hide-mobile" />
        خرید اشتراک
      </b-button>
      <b-button
        v-else-if="
          (content_subscription || checkuser.subscription == 1) &&
          !checkuser.access
        "
        variant="second"
        class="d-flex align-items-center ml-2"
        @click="$emit('show-subscription-modal')"
      >
        <i class="fa fa-credit-card ml-2 hide-mobile" />
        خرید اشتراک
      </b-button>
      <b-button
        v-else-if="
          (content_subscription || checkuser.subscription == 1) &&
          checkuser.access
        "
        variant="second"
        class="d-flex align-items-center ml-2"
        @click="$emit('show-subscription-modal')"
      >
        <i class="fa fa-credit-card ml-2 hide-mobile" />
        تمدید اشتراک
      </b-button>
    </div>

    <!-- App/Login Buttons -->
    <nuxt-link
      v-if="checkuser.show_app && isLoggedIn"
      to="/app"
      class="show-mobile btn-apps btn-main"
    >
      {{ $t('new.app') }}
    </nuxt-link>
    <b-button
      v-else
      variant="main"
      class="show-mobile login-btn"
      @click="$emit('show-modal')"
    >
      {{ $t('nav.login') }}
    </b-button>
    <!-- User Profile Dropdown -->
    <UserProfileDropdown
      v-if="isLoggedIn"
      :my-credit="myCredit"
      :show-payments="true"
      :content_subscription="!!contentSubscription"
      @show-credit-modal="$emit('show-credit-modal')"
      @show-subscription-modal="$emit('show-subscription-modal')"
      @show-directdebit-modal="$emit('show-directdebit-modal')"
      @logout="showLogoutConfirmation"
    />

    <b-button
      v-else
      variant="main"
      class="hide-mobile"
      @click="$emit('show-modal')"
    >
      {{ $t('nav.login') }}
    </b-button>

    <!-- Logout Confirmation Modal -->
    <b-modal
      id="logoutConfirmationModal"
      ref="logoutConfirmationModal"
      centered
      hide-footer
      hide-header
      modal-class="logout-confirmation-modal"
      no-enforce-focus
    >
      <div class="logout-modal-container">
        <!-- Content -->
        <div class="logout-modal-content">
          <div class="logout-message">
            <p class="logout-text">
              آیا از خروج از حساب کاربری خود اطمینان دارید؟
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div class="logout-modal-footer">
          <b-button
            variant="danger"
            class="logout-btn-confirm"
            @click="confirmLogout"
          >
            بله
          </b-button>
          <b-button
            variant="secondary"
            class="logout-btn-cancel"
            @click="hideLogoutModal"
          >
            خیر
          </b-button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import UserProfileDropdown from './UserProfileDropdown.vue'
import BasketPopoverContent from './BasketPopoverContent.vue'

export default {
  name: 'HeaderActions',
  components: {
    UserProfileDropdown,
    BasketPopoverContent,
  },
  props: {
    isLoggedIn: {
      type: Boolean,
      default: false,
    },

    subscriptionType: {
      type: String,
      default: '',
    },
    contentSubscription: {
      type: Boolean,
      default: false,
    },
    myCredit: {
      type: [String, Number],
      default: '',
    },
  },
  computed: {
    content_subscription() {
      return this.contentSubscription
    },
  },
  methods: {
    nightmode(e) {
      if (e == true) this.$colorMode.preference = 'dark'
      else this.$colorMode.preference = 'light'
    },
    changelang() {
      if (this.$i18n.locale === 'en') {
        this.$i18n.setLocale('fa')
      } else {
        this.$i18n.setLocale('en')
      }
    },
    execute_content_filtering() {
      this.$router.go()
    },
    closeBasketPopover() {
      this.$root.$emit('bv::hide::popover', 'popover-basket')
    },
    // Logout modal methods
    showLogoutConfirmation() {
      this.$root.$emit('bv::hide::popover') // Close the profile dropdown
      this.$refs.logoutConfirmationModal.show()
    },

    hideLogoutModal() {
      this.$refs.logoutConfirmationModal.hide()
    },

    confirmLogout() {
      this.hideLogoutModal()
      this.$emit('logout') // Emit the original logout event
    },
  },
}
</script>

<style scoped>
.basket-popover {
  min-width: fit-content !important;
  max-width: 400px !important;
  width: auto;
  padding: 0;
  border-radius: 12px !important;
}

.basket-popover-content {
  border-radius: 10px;
}

.btn-apps {
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
  border-radius: 4px;
  padding: 0.3rem 0.5rem;
}

@media (min-width: 768px) {
  .login-btn {
    display: none !important;
  }
}

/* Logout Modal Styles */
.logout-modal-container {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
}

.logout-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e9ecef;
  flex-shrink: 0;
}

.logout-modal-title {
  margin: 0;
  font-weight: 600;
  color: #333;
}

.logout-modal-header .btn-close {
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #6c757d;
  cursor: pointer;
  padding: 0.5rem;
}

.logout-modal-header .btn-close:hover {
  color: #495057;
}

.logout-modal-content {
  padding: 1rem 1.5rem 1rem 1.5rem;
  text-align: center;
}

.logout-message {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logout-text {
  margin: 0;
  font-size: 20px;
  line-height: 1.6;
}

.logout-modal-footer {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem 0.5rem;
  flex: 1 1;
}

.logout-btn-cancel {
  width: 50%;
  height: 52;
  border-radius: 8px;
  border-width: 1px;
  padding-top: 12px;
  padding-right: 28px;
  padding-bottom: 12px;
  padding-left: 28px;
  gap: 8px;
  opacity: 1;
  border: 1px solid #ff6633;
  background: transparent !important;
  color: #ff6633;
}

.logout-btn-confirm {
  width: 50%;
  height: 52;
  border-radius: 8px;
  padding-top: 12px;
  padding-right: 28px;
  padding-bottom: 12px;
  padding-left: 28px;
  gap: 8px;
  opacity: 1;
  background: #ff6633;
}

/* Dark mode support */
:deep(.theme-dark) .logout-modal-header {
  border-bottom-color: #444;
}

:deep(.theme-dark) .logout-modal-title {
  color: #fff;
}

:deep(.theme-dark) .logout-text {
  color: #ccc;
}

:deep(.theme-dark) .logout-modal-footer {
  border-top-color: #444;
}

/* Responsive adjustments */
@media (max-width: 576px) {
  .logout-modal-footer {
    flex-direction: column-reverse;
  }

  .logout-btn-cancel,
  .logout-btn-confirm {
    width: 100%;
  }
}
</style>
