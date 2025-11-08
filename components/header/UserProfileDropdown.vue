<template>
  <div class="header-links d-md-flex align-items-center dropdown">
    <nuxt-link
      id="popover-profile"
      class="d-flex align-items-center profile-avatar-trigger hide-mobile"
      to="/profile"
    >
      <div
        v-if="userAvatar"
        class="header-avatar-wrapper"
        :style="{ backgroundImage: `url(${userAvatar})` }"
      />
      <i v-else class="fa fa-user header-avatar-icon" />
    </nuxt-link>
    <a class="d-inline d-md-none" @click.prevent="openProfileDrawer">
      <div
        v-if="userAvatar"
        class="header-avatar-wrapper"
        :style="{ backgroundImage: `url(${userAvatar})` }"
      />
      <i v-else class="fa fa-user header-avatar-icon" />
    </a>
    <b-popover
      id="popover-d-profile"
      target="popover-profile"
      triggers="hover"
      placement="bottomleft"
      fallback-placement="flip"
      boundary-padding="1"
      custom-class="profile-dropdown-popover"
    >
      <ul class="dropdown-menu show profile-dropdown-menu">
        <li>
          <ul class="nav flex-column profile-nav-column">
            <!-- User Info Section -->
            <li class="nav-item">
              <div
                class="nav-link nav-link-divider d-flex align-items-center flex-wrap w-100"
                :style="!hasUserName ? 'cursor: pointer;' : ''"
                @click="!hasUserName ? showProfileEditModal() : null"
              >
                <div
                  v-if="userAvatar"
                  class="user-avatar-wrapper"
                  :style="{ backgroundImage: `url(${userAvatar})` }"
                />
                <b-button
                  v-else
                  variant="link"
                  class="p-0 text-primary edit-user-avatar-icon"
                  @click.stop="showProfileEditModal"
                >
                  <i class="fa fa-user-edit" style="font-size: 42px" />
                </b-button>
                <div class="pr-2 flex-grow-1">
                  <div v-if="userName" class="font-weight-bold">
                    {{ userName }}
                  </div>

                  <b-button
                    v-else
                    variant="link"
                    class="p-0 text-primary"
                    @click.stop="showProfileEditModal"
                  >
                    تکمیل پروفایل
                  </b-button>

                  <div
                    v-if="checkuser.days_period_to_end"
                    class="p-fs-small mt-2"
                  >
                    {{ checkuser.days_period_to_end }} روز تا پایان اشتراک
                  </div>
                  <div v-else class="p-fs-small mt-2">بدون اشتراک</div>
                </div>
              </div>
            </li>

            <!-- Subscription/Payment Button -->
            <li class="nav-item nav-item-padding">
              <b-button
                variant="second"
                class="d-flex align-items-center justify-content-center w-full create-subscription-button"
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
                      <a class="text-black" @click="handleCreditAction">
                        {{ myCredit }}
                      </a>
                    </div>
                  </div>
                </div>
                <button
                  class="btn btn-secondary-outline btn-sm"
                  @click="handleCreditAction"
                >
                  <i class="fa fa-plus" style="color: #003dcf !important" />
                  افزایش موجودی
                </button>
              </div>
            </li>

            <li class="nav-item">
              <div
                class="nav-link d-flex align-items-center justify-content-between flex-wrap w-100"
                style="justify-content: space-between !important"
                @click="toggleMobileLists"
              >
                <div class="d-flex align-items-center">
                  <i class="fa fa-play-circle" />
                  <span class="pr-2">لیست‌های من</span>
                </div>
                <i
                  class="fa transition-icon"
                  :class="mobileListsExpanded ? 'fa-angle-up' : 'fa-angle-down'"
                />
              </div>

              <transition
                name="lists-collapse"
                @enter="onListsEnter"
                @after-enter="onListsAfterEnter"
                @leave="onListsLeave"
              >
                <ul v-show="mobileListsExpanded" class="nested-mobile-list">
                  <transition-group name="list-item">
                    <li key="downloads">
                      <nuxt-link
                        to="/lists/downloads"
                        class="nested-mobile-item"
                      >
                        <i class="fa fa-download ml-2" />
                        خریداری شده‌ها
                      </nuxt-link>
                    </li>
                    <li key="watchlist">
                      <nuxt-link
                        to="/lists/watchlist"
                        class="nested-mobile-item"
                      >
                        <i class="fa fa-clock ml-2" />
                        لیست تماشا
                      </nuxt-link>
                    </li>
                    <li key="likes">
                      <nuxt-link to="/lists/likes" class="nested-mobile-item">
                        <i class="fa fa-heart ml-2" />
                        مورد علاقه‌ها
                      </nuxt-link>
                    </li>
                    <li key="offer">
                      <nuxt-link to="/lists/offer" class="nested-mobile-item">
                        <i class="fa fa-star ml-2" />
                        عناوین پیشنهادی
                      </nuxt-link>
                    </li>
                    <li key="watched">
                      <nuxt-link to="/lists/watched" class="nested-mobile-item">
                        <i class="fa fa-eye ml-2" />
                        دیده شده‌ها
                      </nuxt-link>
                    </li>
                  </transition-group>
                </ul>
              </transition>
            </li>

            <!-- Payments Link -->
            <li v-show="showPayments" class="nav-item">
              <nuxt-link
                class="nav-link d-flex align-items-center flex-wrap"
                to="/payments"
              >
                <i class="fa fa-money-bill-wave" />
                <span class="pr-2">پرداخت‌های من</span>
              </nuxt-link>
            </li>

            <!-- Dark Mode Toggle -->
            <li class="nav-item">
              <div
                class="nav-link d-flex align-items-center justify-content-between w-100"
                style="justify-content: space-between !important"
              >
                <div class="d-flex align-items-center">
                  <i class="fa fa-moon" />
                  <span class="pr-2">حالت شب</span>
                </div>
                <div class="custom-control custom-switch">
                  <input
                    id="nightModeProfile"
                    type="checkbox"
                    class="custom-control-input"
                    :checked="$colorMode.value === 'dark'"
                    @change="toggleNightMode($event.target.checked)"
                  />
                  <label class="custom-control-label" for="nightModeProfile" />
                </div>
              </div>
            </li>

            <!-- Language Toggle -->
            <li class="nav-item">
              <div
                class="nav-link d-flex align-items-center justify-content-between w-100"
                style="justify-content: space-between !important"
              >
                <div class="d-flex align-items-center">
                  <i class="fa fa-globe" />
                  <span class="pr-2">زبان فارسی</span>
                </div>
                <div class="custom-control custom-switch">
                  <input
                    id="languageProfile"
                    type="checkbox"
                    class="custom-control-input"
                    :checked="$i18n.locale === 'fa'"
                    @change="toggleLanguage()"
                  />
                  <label class="custom-control-label" for="languageProfile" />
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
                    با سبدخرید می‌توانید چند فیلم یا قسمت را با هم خریداری کنید.
                  </div>
                </div>
                <div class="custom-control custom-switch mr-2">
                  <input
                    id="basketActive"
                    type="checkbox"
                    class="custom-control-input"
                    :checked="$store.state.basketActive"
                    @change="toggleBasket($event.target.checked)"
                  />
                  <label class="custom-control-label" for="basketActive" />
                </div>
              </div>
            </li>

            <li class="nav-item">
              <nuxt-link
                class="nav-link d-flex align-items-center flex-wrap"
                to="/app"
              >
                <i class="icon-download" />
                <span class="pr-2">دانلود اپلیکیشن</span>
              </nuxt-link>
            </li>

            <!-- Logout -->
            <li class="nav-item">
              <b-link
                class="nav-link d-flex align-items-center flex-wrap"
                @click="$emit('logout')"
              >
                <i class="fa fa-sign-out-alt" />
                <span class="pr-2">خروج از حساب کاربری</span>
              </b-link>
            </li>
          </ul>
        </li>
      </ul>
    </b-popover>

    <!-- Profile Edit Modal -->
    <b-modal
      v-model="profileEditModalVisible"
      title="ویرایش پروفایل"
      centered
      hide-footer
      size="md"
      modal-class="profile-edit-modal"
    >
      <b-form @submit.prevent="saveProfile">
        <!-- Avatar Selection -->
        <b-form-group label-for="avatar-selection">
          <!-- Show current avatar if exists -->
          <div v-if="userAvatar" class="current-avatar-section mb-3">
            <!-- <div class="current-avatar-label">تصویر فعلی:</div> -->
            <div class="current-avatar-display">
              <img
                :src="userAvatar"
                alt="Current Avatar"
                class="current-avatar"
              />
              <b-button
                variant="outline-primary"
                size="sm"
                class="change-avatar-btn"
                @click="showAvatarPicker = true"
              >
                تغییر تصویر
              </b-button>
            </div>
          </div>

          <!-- Avatar Picker -->
          <div v-if="!userAvatar || showAvatarPicker">
            <div class="avatar-picker-label mb-2">
              {{ userAvatar ? 'انتخاب تصویر جدید:' : 'یک تصویر انتخاب کنید:' }}
            </div>
            <div class="avatar-grid">
              <div
                v-for="avatar in availableAvatars"
                :key="avatar"
                class="avatar-option"
                :class="{ selected: selectedAvatar === avatar }"
                @click="selectAvatar(avatar)"
              >
                <img :src="avatar" alt="Avatar" />
              </div>
            </div>

            <!-- File upload for custom avatar -->
            <div class="mt-3">
              <label class="btn btn-outline-secondary btn-sm">
                آپلود تصویر جدید
                <input
                  type="file"
                  accept="image/*"
                  style="display: none"
                  @change="onFileChange"
                />
              </label>
              <div v-if="customPreview" class="mt-2">
                <div class="avatar-preview-label">
                  پیش‌نمایش تصویر آپلود شده:
                </div>
                <img
                  :src="customPreview"
                  alt="Preview"
                  class="current-avatar"
                />
                <b-button
                  size="sm"
                  variant="outline-danger"
                  class="ml-2"
                  @click="
                    customPreview && URL.revokeObjectURL(customPreview),
                      (customPreview = null),
                      (customFile = null),
                      (selectedAvatar = userAvatar)
                  "
                >
                  لغو بارگذاری
                </b-button>
              </div>
            </div>

            <!-- Cancel button when changing avatar -->
            <div v-if="userAvatar && showAvatarPicker" class="text-center mt-3">
              <b-button
                variant="outline-secondary"
                size="sm"
                @click="
                  showAvatarPicker = false
                  selectedAvatar = userAvatar
                "
              >
                انصراف
              </b-button>
            </div>
          </div>
        </b-form-group>

        <!-- Name -->
        <b-form-group label="نام" label-for="first-name">
          <b-form-input
            id="first-name"
            v-model="profileForm.firstName"
            placeholder="نام خود را وارد کنید"
          />
        </b-form-group>

        <!-- Last Name -->
        <b-form-group label="نام خانوادگی" label-for="last-name">
          <b-form-input
            id="last-name"
            v-model="profileForm.lastName"
            placeholder="نام خانوادگی خود را وارد کنید"
          />
        </b-form-group>

        <!-- Email -->
        <b-form-group label="ایمیل" label-for="email">
          <b-form-input
            id="email"
            v-model="profileForm.email"
            type="email"
            placeholder="example@email.com"
          />
        </b-form-group>

        <!-- Submit Button -->
        <b-button
          type="submit"
          variant="primary"
          block
          :disabled="isSavingProfile"
        >
          <b-spinner v-if="isSavingProfile" small class="ml-2" />
          ذخیره تغییرات
        </b-button>
      </b-form>
    </b-modal>

    <!-- Mobile Drawer -->
    <client-only>
      <div
        v-if="isMobile && mobileDrawerVisible"
        class="mobile-drawer-overlay"
        @click="closeMobileDrawer"
      >
        <div class="mobile-drawer" @click.stop>
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
                  class="d-flex align-items-center justify-content-center w-full create-subscription-button"
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
                        <a class="text-black" @click="handleCreditAction">
                          افزایش موجودی
                        </a>
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
                    <nuxt-link to="/lists/downloads" class="nested-mobile-item">
                      <i class="fa fa-download ml-2" />
                      خریداری شده‌ها
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/lists/watchlist" class="nested-mobile-item">
                      <i class="fa fa-clock ml-2" />
                      لیست تماشا
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/lists/likes" class="nested-mobile-item">
                      <i class="fa fa-heart ml-2" />
                      مورد علاقه‌ها
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/lists/offer" class="nested-mobile-item">
                      <i class="fa fa-star ml-2" />
                      عناوین پیشنهادی
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/lists/watched" class="nested-mobile-item">
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

              <!-- Language Toggle -->
              <li class="nav-item">
                <div
                  class="nav-link d-flex align-items-center justify-content-between"
                >
                  <div class="d-flex align-items-center">
                    <i class="fa fa-globe" />
                    <span class="pr-2">زبان فارسی</span>
                  </div>
                  <div class="custom-control custom-switch">
                    <input
                      id="languageMobile"
                      type="checkbox"
                      class="custom-control-input"
                      :checked="$i18n.locale === 'fa'"
                      @change="toggleLanguage()"
                    />
                    <label class="custom-control-label" for="languageMobile" />
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
                  <div class="custom-control custom-switch mr-2">
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
                >
                  <i class="icon-download" />
                  <span class="pr-2">دانلود اپلیکیشن</span>
                </nuxt-link>
              </li>

              <!-- Logout -->
              <li class="nav-item">
                <b-link
                  class="nav-link d-flex align-items-center flex-wrap"
                  @click="
                    $emit('logout')
                    closeMobileDrawer()
                  "
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
  name: 'UserProfileDropdown',
  props: {
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
    profileText: {
      type: String,
      default: 'پروفایل',
    },
  },
  data() {
    return {
      profileEditModalVisible: false,
      availableAvatars: [],
      selectedAvatar: null,
      userAvatar: null,
      // custom upload file (when user picks a new image file)
      customFile: null,
      customPreview: null,
      profileForm: {
        firstName: '',
        lastName: '',
        email: '',
      },
      isSavingProfile: false,
      mobileDrawerVisible: false,
      mobileListsExpanded: false,
      listsExpanded: false,
      showAvatarPicker: false,
      isMobile: false,
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
    userAvatar(newVal) {
      if (newVal) {
        this.selectedAvatar = newVal
        this.showAvatarPicker = false
      }
    },
  },
  mounted() {
    if (this.checkuser) {
      this.fetchAvatars()
    }
    this.checkIfMobile()
    if (process.client) {
      window.addEventListener('resize', this.checkIfMobile)
    }
    this.fetchAvatars()
    if (this.userAvatar) {
      this.selectedAvatar = this.userAvatar
    }
    // load selected avatar from storage if exists
    if (process.client) {
      const stored = localStorage.getItem('selected_avatar')
      if (stored) {
        this.userAvatar = stored
        this.selectedAvatar = stored
      }
    }
  },
  beforeDestroy() {
    if (process.client) {
      window.removeEventListener('resize', this.checkIfMobile)
    }
  },

  methods: {
    handleSubscriptionAction() {
      const { contentSubscription, checkuser } = this

      this.$root.$emit('bv::hide::popover')
      this.closeMobileDrawer()

      if (!contentSubscription && checkuser?.subscription != 1) {
        this.$emit('show-directdebit-modal')
      } else if (contentSubscription || checkuser?.subscription == 1) {
        this.$emit('show-subscription-modal')
      }
    },
    handleCreditAction() {
      this.$root.$emit('bv::hide::popover')
      this.closeMobileDrawer()
      this.$emit('show-credit-modal')
    },
    toggleBasket(value) {
      // Reset cart when toggling basket
      if (process.client) {
        localStorage.removeItem('_cart')
      }
      this.$store.dispatch('SET_BASKET_ACTIVE', value)
    },
    toggleNightMode(value) {
      this.$colorMode.preference = value ? 'dark' : 'light'
    },
    toggleLanguage() {
      const newLocale = this.$i18n.locale === 'fa' ? 'en' : 'fa'
      this.$i18n.setLocale(newLocale)

      if (process.client) {
        localStorage.setItem('lang', newLocale)
        const html = document.querySelector('html')
        html.setAttribute('lang', newLocale)
        html.setAttribute('dir', newLocale === 'fa' ? 'rtl' : 'ltr')

        // Reload the page to apply language changes
        setTimeout(() => {
          window.location.reload()
        }, 100)
      }
    },
    async fetchAvatars() {
      try {
        const response = await this.$axios.get('/get/avatars')
        if (response.data && response.data.data) {
          const { avatars, user_avatar, cdn_user } = response.data.data
          const avatarUrl = (avatars || []).map((avatar) => {
            // if avatar strings already look like URLs, keep them
            if (/^https?:\/\//.test(avatar)) return avatar
            return cdn_user ? `${cdn_user}/${avatar}` : avatar
          })
          this.availableAvatars = avatarUrl || []

          if (user_avatar) {
            const ua = cdn_user ? `${cdn_user}/${user_avatar}` : user_avatar
            // only set userAvatar if not overridden by stored selection
            if (!localStorage.getItem('selected_avatar')) {
              this.userAvatar = ua
              this.selectedAvatar = this.userAvatar
            }
          }
        }
      } catch (error) {
        console.error('Error fetching avatars:', error)
      }
    },
    selectAvatar(avatar) {
      // selecting an existing avatar: set locally and persist to storage
      this.selectedAvatar = avatar
      this.userAvatar = avatar
      // clear any custom file selection
      if (this.customPreview) {
        URL.revokeObjectURL(this.customPreview)
      }
      this.customFile = null
      this.customPreview = null

      if (process.client) {
        localStorage.setItem('selected_avatar', avatar)
      }
      this.$root.$emit('user:avatar-changed', avatar)
    },

    onFileChange(e) {
      const file = e.target.files && e.target.files[0]
      if (!file) return

      // accept only image types
      if (!file.type.startsWith('image/')) {
        this.$swal({
          icon: 'error',
          title: 'فایل نامعتبر',
          text: 'لطفا یک تصویر انتخاب کنید',
        })
        return
      }

      // revoke previous preview
      if (this.customPreview) URL.revokeObjectURL(this.customPreview)

      this.customFile = file
      this.customPreview = URL.createObjectURL(file)
      // show preview as selected
      this.selectedAvatar = this.customPreview
      this.userAvatar = this.customPreview
      // do not persist custom preview to localStorage until server confirms upload
    },
    showProfileEditModal() {
      this.profileEditModalVisible = true
      this.$root.$emit('bv::hide::popover')
      this.closeMobileDrawer()
    },
    async saveProfile() {
      this.isSavingProfile = true

      try {
        // If user picked a custom file, upload it as multipart/form-data
        let response = null
        if (this.customFile) {
          const form = new FormData()
          form.append('name', this.userName || '')
          form.append('email', this.profileForm.email || '')
          form.append('image', this.customFile)

          response = await this.$axios.post('/update/profile/details', form, {
            headers: { 'Content-Type': 'multipart/form-data' },
          })

          // on success, if server returns avatar path, persist it
          if (response.data && response.data.data) {
            const data = response.data.data
            let newAvatar = null
            if (data.user_avatar) {
              // try to build full URL with cdn_user
              newAvatar = data.cdn_user
                ? `${data.cdn_user}/${data.user_avatar}`
                : data.user_avatar
            }

            // use server avatar if available, otherwise keep preview
            this.userAvatar = newAvatar || this.customPreview || this.userAvatar

            if (process.client && this.userAvatar) {
              localStorage.setItem('selected_avatar', this.userAvatar)
            }
          }
        } else {
          // No custom file: do not post existing avatars to service.
          // Only update name/email on server. Avatar selection will be stored locally.
          const payload = {
            name: this.userName || null,
            email: this.profileForm.email || null,
          }

          response = await this.$axios.post('/update/profile/details', payload)

          // Persist selected existing avatar locally
          if (this.selectedAvatar && process.client) {
            localStorage.setItem('selected_avatar', this.selectedAvatar)
          }
          // emit avatar change so other components update
          if (this.selectedAvatar)
            this.$root.$emit('user:avatar-changed', this.selectedAvatar)
        }

        if (response && response.data) {
          this.$swal({
            icon: 'success',
            title: 'موفق',
            text: 'پروفایل با موفقیت به‌روزرسانی شد',
            confirmButtonText: 'باشه',
          })

          this.profileEditModalVisible = false

          // Refresh user data (optional, server-side values may differ)
          try {
            await this.$auth.fetchUser()
          } catch (e) {
            // non-fatal
          }
        }
      } catch (error) {
        console.error('Error saving profile:', error)
        this.$swal({
          icon: 'error',
          title: 'خطا',
          text: 'خطا در به‌روزرسانی پروفایل',
          confirmButtonText: 'باشه',
        })
      } finally {
        this.isSavingProfile = false
      }
    },
    checkIfMobile() {
      if (process.client) {
        this.isMobile = window.innerWidth < 768
      }
    },
    openMobileDrawer() {
      this.mobileDrawerVisible = true
      if (process.client) {
        document.body.style.overflow = 'hidden'
      }
    },
    closeMobileDrawer() {
      this.mobileDrawerVisible = false
      if (process.client) {
        document.body.style.overflow = ''
      }
    },

    handleProfileClick() {
      // Open mobile drawer on mobile, navigate on desktop
      if (this.isMobile) {
        this.openMobileDrawer()
      }
    },
    openProfileDrawer() {
      this.$root.$emit('open-mobile-profile-drawer')
    },
    toggleLists() {
      this.listsExpanded = !this.listsExpanded
    },

    toggleMobileLists() {
      this.mobileListsExpanded = !this.mobileListsExpanded
    },

    // Transition methods
    onListsEnter(el) {
      el.style.height = '0'
      el.style.overflow = 'hidden'
      requestAnimationFrame(() => {
        el.style.height = el.scrollHeight + 'px'
      })
    },

    onListsAfterEnter(el) {
      el.style.height = 'auto'
    },

    onListsLeave(el) {
      el.style.height = el.scrollHeight + 'px'
      requestAnimationFrame(() => {
        el.style.height = '0'
      })
    },
  },
}
</script>
<style scoped>
.basket-title {
  margin-left: 2rem;
}

/* Updated Popover Styles */
::v-deep .profile-dropdown-popover .popover-body {
  border-radius: 16px !important;
  opacity: 1;
  padding: 0 !important;
}

.profile-dropdown-menu {
  border-radius: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  gap: 12px;
  overflow: hidden;
}

.profile-nav-column {
  gap: 12px;
}

.profile-nav-column .nav-item {
  margin-top: 0 !important;
}

.profile-nav-column .nav-item + .nav-item {
  margin-top: 12px !important;
}

/* User Avatar */
.user-avatar-wrapper {
  width: 55px;
  height: 55px;
  border-radius: 5rem;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
}

/* Nested Menu Styles */
::v-deep .nested-menu-popover .popover-body {
  border-radius: 12px !important;
  padding: 8px !important;
}

.nested-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 180px;
}

.nested-menu li {
  margin: 0;
}

.nested-menu-item {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  color: inherit;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.2s;
}

.nested-menu-item:hover {
  background-color: rgba(0, 0, 0, 0.05);
  text-decoration: none;
}

.nested-menu-item i {
  font-size: 14px;
}

/* Profile Edit Modal */
::v-deep .profile-edit-modal .modal-content {
  border-radius: 16px;
}

.avatar-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  gap: 12px;
  margin-top: 12px;
}

.avatar-option {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid transparent;
  transition: all 0.2s;
}

.avatar-option:hover {
  border-color: #ccc;
  transform: scale(1.05);
}

.avatar-option.selected {
  border-color: #007bff;
}

.avatar-option img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Mobile Drawer Styles */
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

.nested-mobile-list {
  list-style: none;
  padding: 0;
  margin: 8px 0 0 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 0;
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

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
  .mobile-drawer {
    background-color: #1a1a1a;
  }

  .nested-mobile-list {
    background-color: rgba(255, 255, 255, 0.05);
  }

  .nested-mobile-item {
    border-bottom-color: rgba(255, 255, 255, 0.1);
  }

  .nested-menu-item:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .nested-mobile-item:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
}

ul.dropdown-menu.show.profile-dropdown-menu {
  margin-top: 0 !important;
}
ul.dropdown-menu {
  left: 32px !important;
}

.edit-user-avatar-icon {
  width: 42px !important;
  height: 42px !important;
}

/* Collapse transition */
.lists-collapse-enter-active,
.lists-collapse-leave-active {
  transition: height 0.3s ease-in-out;
  overflow: hidden;
}

.lists-collapse-enter,
.lists-collapse-leave-to {
  height: 0 !important;
}

/* List items transition */
.list-item-enter-active,
.list-item-leave-active {
  transition: all 0.3s ease;
}

.list-item-enter {
  opacity: 0;
  transform: translateX(-10px);
}

.list-item-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

.list-item-leave-active {
  position: absolute;
}

/* Icon transition */
.transition-icon {
  transition: transform 0.3s ease;
}

.nested-menu,
.nested-mobile-list {
  transition: all 0.3s ease;
}

.current-avatar-section {
  text-align: center;
}

.current-avatar-label {
  font-weight: 500;
  margin-bottom: 10px;
  color: #666;
}

.current-avatar-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.current-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #007bff;
}

.change-avatar-btn {
  font-size: 12px;
}

.avatar-picker-label {
  font-weight: 500;
  color: #666;
}

.avatar-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  gap: 12px;
  margin-top: 8px;
}

.avatar-option {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid transparent;
  transition: all 0.2s;
}

.avatar-option:hover {
  border-color: #ccc;
  transform: scale(1.05);
}

.avatar-option.selected {
  border-color: #007bff;
  transform: scale(1.05);
}

.avatar-option img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Header Avatar Icon Styles */
.profile-avatar-trigger {
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  transition: all 0.2s;
}

.profile-avatar-trigger:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.header-avatar-wrapper {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px solid #007bff;
}

.header-avatar-icon {
  font-size: 28px;
  color: #007bff;
}

@media (prefers-color-scheme: dark) {
  .profile-avatar-trigger:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .header-avatar-wrapper {
    border-color: #0d6efd;
  }

  .header-avatar-icon {
    color: #0d6efd;
  }
}

::v-deep .modal-header {
  direction: rtl !important;
}

.create-subscription-button {
  line-height: 2rem !important;
  border-radius: 8px !important;
}
</style>
