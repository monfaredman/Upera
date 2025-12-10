<template>
  <div class="header-buttons d-flex align-items-center h-full">
    <!-- Basket Icon -->
    <div
      v-if="$store?.state?.basketActive !== false || !$auth.loggedIn"
      class="header-links header-links-basket d-md-flex align-items-center ml-lg-1 mr-lg-1 float-left"
    >
      <b-link
        :id="!isMobile ? 'popover-basket' : 'mobile-basket'"
        class="d-flex align-items-center header-link basket-icon-wrapper"
        @click="handleBasketClick"
      >
        <!-- <i class="fa fa-shopping-basket ml-2" /> -->
        <img
          :src="require('/assets/images/header/basket-icon.png')"
          alt="Basket"
          class="basket-icon"
        />
        <span v-if="basketLength > 0" class="basket-badge">{{
          basketLength
        }}</span>
      </b-link>
      <b-popover
        v-if="!isMobile"
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

    <!-- Mobile Basket Drawer -->
    <BasketDrawer :visible="basketDrawerVisible" @close="closeBasketDrawer" />

    <SearchInput :value="query || ''" @input="query = $event" />

    <!-- User Profile Dropdown -->
    <UserProfileDropdown
      v-if="isLoggedIn"
      ref="userProfileDropdown"
      :my-credit="myCredit"
      :show-payments="true"
      :content_subscription="!!contentSubscription"
      @show-credit-modal="$emit('show-credit-modal')"
      @show-subscription-modal="$emit('show-subscription-modal')"
      @show-directdebit-modal="$emit('show-directdebit-modal')"
      @logout="showLogoutConfirmation"
      @show-profile-edit="showProfileEditModal"
    />

    <b-button v-else variant="main" @click="$emit('show-modal')">
      {{ $t('nav.login') }}
    </b-button>

    <!-- Mobile Profile Drawer -->
    <MobileProfileDrawer
      v-if="isLoggedIn"
      :is-visible="mobileDrawerVisible"
      :my-credit="myCredit"
      :show-payments="true"
      :content-subscription="!!contentSubscription"
      @close="closeMobileDrawer"
      @show-credit-modal="$emit('show-credit-modal')"
      @show-subscription-modal="$emit('show-subscription-modal')"
      @show-directdebit-modal="$emit('show-directdebit-modal')"
      @logout="showLogoutConfirmation"
      @show-profile-edit="showProfileEditModal"
    />

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
        <b-form-group label="تصویر پروفایل" label-for="avatar-selection">
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
              <div class="avatar-preview-label">پیش‌نمایش تصویر آپلود شده:</div>
              <img :src="customPreview" alt="Preview" class="current-avatar" />
              <b-button
                size="sm"
                variant="outline-danger"
                class="ml-2"
                @click="
                  customPreview && URL.revokeObjectURL(customPreview),
                    (customPreview = null),
                    (customFile = null),
                    (selectedAvatar = cdnUser
                      ? `${cdnUser}/${profileForm.user_avatar || ''}`
                      : selectedAvatar)
                "
              >
                لغو بارگذاری
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
import MobileProfileDrawer from './MobileProfileDrawer.vue'
import BasketDrawer from './BasketDrawer.vue'
import SearchInput from '@/components/header/SearchInput.vue'

export default {
  name: 'HeaderActions',
  components: {
    UserProfileDropdown,
    BasketPopoverContent,
    MobileProfileDrawer,
    BasketDrawer,
    SearchInput,
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
  data() {
    return {
      mobileDrawerVisible: false,
      profileEditModalVisible: false,
      selectedAvatar: null,
      customFile: null,
      basketLength: 0,
      query: null,
      customPreview: null,
      basketDrawerVisible: false,
      isMobile: false,
      profileForm: {
        firstName: '',
        lastName: '',
        email: '',
      },
      isSavingProfile: false,
    }
  },
  computed: {
    content_subscription() {
      return this.contentSubscription
    },
    availableAvatars() {
      return this.$store.getters.avatars.availableAvatars
    },
    cdnUser() {
      return this.$store.getters.avatars.cdnUser || ''
    },
  },
  mounted() {
    if (this.isLoggedIn) {
      this.fetchAvatars()
    }
    // Listen for event to open mobile drawer

    if (process.client) {
      this.checkIfMobile()
      this.$root.$on('open-mobile-profile-drawer', this.openMobileDrawer)
      // Listen for cart updates
      this.$root.$on('cart-updated', this.updateBasketLength)
      window.addEventListener('storage', this.handleStorageChange)
      window.addEventListener('resize', this.checkIfMobile)
    }
    this.updateBasketLength()
  },
  beforeDestroy() {
    if (process.client) {
      this.$root.$off('open-mobile-profile-drawer', this.openMobileDrawer)
      this.$root.$off('cart-updated', this.updateBasketLength)
      window.removeEventListener('storage', this.handleStorageChange)
      window.removeEventListener('resize', this.checkIfMobile)
    }
  },
  methods: {
    updateBasketLength() {
      let addedItems = []
      const cartData = localStorage.getItem('_cart')
      if (cartData) {
        try {
          const parsedCart = JSON.parse(cartData)
          if (parsedCart.content && Array.isArray(parsedCart.content)) {
            addedItems = parsedCart.content
          }
        } catch (e) {
          console.error('Error parsing cart:', e)
        }
      }
      this.basketLength = addedItems.length
    },
    handleStorageChange(event) {
      // Handle storage events from other tabs/windows
      if (event.key === '_cart') {
        this.updateBasketLength()
      }
    },
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
    closeBasketDrawer() {
      this.basketDrawerVisible = false
    },
    openBasketDrawer() {
      this.basketDrawerVisible = true
    },
    handleBasketClick(event) {
      if (this.isMobile) {
        event.preventDefault()
        this.openBasketDrawer()
      }
      // On desktop, let the hover trigger work naturally
    },
    checkIfMobile() {
      if (!process.client) return
      this.isMobile = window.innerWidth < 768
      // Close drawer if resizing to desktop
      if (!this.isMobile && this.basketDrawerVisible) {
        this.closeBasketDrawer()
      }
    },
    // Logout modal methods
    showLogoutConfirmation() {
      this.$root.$emit('bv::hide::popover') // Close the profile dropdown
      this.closeMobileDrawer()
      this.$refs.logoutConfirmationModal.show()
    },

    hideLogoutModal() {
      this.$refs.logoutConfirmationModal.hide()
    },

    confirmLogout() {
      this.hideLogoutModal()
      this.$emit('logout') // Emit the original logout event
    },

    // Mobile Drawer methods
    openMobileDrawer() {
      this.mobileDrawerVisible = true
    },

    closeMobileDrawer() {
      this.mobileDrawerVisible = false
    },

    // Profile Edit Modal methods
    showProfileEditModal() {
      this.profileEditModalVisible = true
    },

    async fetchAvatars() {
      try {
        // Use Vuex store action to fetch avatars (only fetches once)
        await this.$store.dispatch('FETCH_AVATARS')

        const { userAvatar, cdnUser } = this.$store.getters.avatars

        if (userAvatar && !localStorage.getItem('selected_avatar')) {
          this.selectedAvatar = cdnUser
            ? `${cdnUser}/${userAvatar}`
            : userAvatar
        }
        // if user has stored a selected avatar, prefer it
        if (process.client) {
          const stored = localStorage.getItem('selected_avatar')
          if (stored) this.selectedAvatar = stored
        }
      } catch (error) {
        console.error('Error fetching avatars:', error)
      }
    },

    selectAvatar(avatar) {
      this.selectedAvatar = avatar
      // clear any custom selection
      if (this.customPreview) URL.revokeObjectURL(this.customPreview)
      this.customFile = null
      this.customPreview = null

      if (process.client) localStorage.setItem('selected_avatar', avatar)
      this.$root.$emit('user:avatar-changed', avatar)
    },

    onFileChange(e) {
      const file = e.target.files && e.target.files[0]
      if (!file) return
      if (!file.type.startsWith('image/')) {
        this.$swal({
          icon: 'error',
          title: 'فایل نامعتبر',
          text: 'لطفا یک تصویر انتخاب کنید',
        })
        return
      }
      if (this.customPreview) URL.revokeObjectURL(this.customPreview)
      this.customFile = file
      this.customPreview = URL.createObjectURL(file)
      this.selectedAvatar = this.customPreview
    },

    async saveProfile() {
      this.isSavingProfile = true

      try {
        const userName =
          `${this.profileForm.firstName || ''} ${
            this.profileForm.lastName || ''
          }`.trim() || null
        let response = null
        if (this.customFile) {
          const form = new FormData()
          form.append('name', userName || '')
          form.append('email', this.profileForm.email || '')
          form.append('image', this.customFile)

          response = await this.$axios.post(
            '/v1/update/profile/details',
            form,
            {
              headers: { 'Content-Type': 'multipart/form-data' },
            }
          )

          if (response.data && response.data.data) {
            const data = response.data.data
            const newAvatar = data.user_avatar
              ? data.cdn_user
                ? `${data.cdn_user}/${data.user_avatar}`
                : data.user_avatar
              : null
            if (newAvatar && process.client)
              localStorage.setItem('selected_avatar', newAvatar)
            if (newAvatar) this.selectedAvatar = newAvatar
          }
        } else {
          // Only update name/email on server when user selects existing avatar.
          const payload = {
            name: userName,
            email: this.profileForm.email || null,
          }
          response = await this.$axios.post(
            '/v1/update/profile/details',
            payload
          )

          if (this.selectedAvatar && process.client) {
            localStorage.setItem('selected_avatar', this.selectedAvatar)
            this.$root.$emit('user:avatar-changed', this.selectedAvatar)
          }
        }

        if (response && response.data) {
          this.$swal({
            icon: 'success',
            title: 'موفق',
            text: 'پروفایل با موفقیت به‌روزرسانی شد',
            confirmButtonText: 'باشه',
          })

          this.profileEditModalVisible = false

          // Refresh user data
          try {
            await this.$auth.fetchUser()
          } catch (e) {
            // non-fatal
          }

          // Clear and refetch avatars from store
          await this.$store.dispatch('CLEAR_AVATARS')
          await this.$store.dispatch('FETCH_AVATARS')

          // Update the UserProfileDropdown component
          if (this.$refs.userProfileDropdown) {
            this.$refs.userProfileDropdown.fetchAvatars()
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
  },
}
</script>

<style scoped>
.basket-icon-wrapper {
  position: relative;
}

.basket-icon {
  width: 22px;
  height: 22px;
  object-fit: contain;
}

.basket-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ff6633;
  color: white;
  border-radius: 50%;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;
  padding: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

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

/* Profile Edit Modal Styles */
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

.avatar-preview-label {
  font-weight: 500;
  margin-bottom: 10px;
  color: #666;
}

.current-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #007bff;
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
  background: white !important;
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

.header-links.header-links-basket.d-md-flex.align-items-center.ml-lg-1.mr-lg-1.float-left {
  width: 100% !important;
}
</style>
