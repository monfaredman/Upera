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
      class="btn btn-main show-mobile"
    >
      {{ $t('new.app') }}
    </nuxt-link>
    <b-button
      v-else
      variant="main"
      class="show-mobile"
      @click="$emit('show-modal')"
    >
      {{ $t('nav.login') }}
    </b-button>

    <!-- User Profile Dropdown -->
    <UserProfileDropdown
      v-if="isLoggedIn"
      :user-data="checkuser"
      :subscription-type="subscriptionType"
      @show-credit-modal="$emit('show-credit-modal')"
      @show-subscription-modal="$emit('show-subscription-modal')"
      @show-directdebit-modal="$emit('show-directdebit-modal')"
      @logout="$emit('logout')"
    />

    <b-button
      v-else
      variant="main"
      class="hide-mobile"
      @click="$emit('show-modal')"
    >
      {{ $t('nav.login') }}
    </b-button>
  </div>
</template>

<script>
import UserProfileDropdown from './UserProfileDropdown.vue'

export default {
  name: 'HeaderActions',
  components: {
    UserProfileDropdown,
  },
  props: {
    isLoggedIn: {
      type: Boolean,
      default: false,
    },
    checkuser: {
      type: Object,
      default: () => ({
        subscription: 0,
        access: false,
        show_app: false,
      }),
    },
    subscriptionType: {
      type: String,
      default: '',
    },
    contentSubscription: {
      type: Boolean,
      default: false,
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
  },
}
</script>
