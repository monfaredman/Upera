<template>
  <div id="checkcontainer" class="container-fluid">
    <div class="container mt-5 pt-lg-5 pt-md-5 mb-5 pt-1 faq-page">
      <div class="app_container_pricing mt-4 p-2 mt-md-4 mb-5">
        <header class="headline py-md-5">
          <h5 class="title font-weight-bold">
            {{ $t('new.quickSetting') }}
          </h5>
        </header>
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="setting_lable">
            {{ $t('new.nightMode') }}
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
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="setting_lable">
            {{ $t('new.persianLang') }}
          </div>
          <div class="custom-control custom-switch">
            <input
              id="language"
              disabled
              type="checkbox"
              class="custom-control-input"
              :checked="$i18n.locale === 'fa'"
              @change="changelang()"
            />
            <label class="custom-control-label" for="language" />
          </div>
        </div>
        <div
          v-if="$config.envname == 'upera'"
          class="d-flex justify-content-between align-items-center mb-3"
        >
          <div class="setting_lable">
            {{ $t('new.socialMedia') }}
          </div>
          <div class="d-flex socials setting_lable_socials">
            <a href="https://t.me/shop_upera" class="">
              <i
                class="fab fa-2x fa-telegram-plane"
                :class="{ 'mr-2 mr-md-4': $i18n.locale != 'fa' }"
              />
            </a>
            <a href="https://instagram.com/uperatv" class="mr-2 mr-md-4">
              <i class="fab fa-2x fa-instagram" />
            </a>
            <a href="#">
              <i class="fab fa-2x fa-twitter" />
            </a>
          </div>
        </div>
        <div class="setting_lable">فیلترگذاری ثابت بر روی کل محتوا</div>
        <FilterContents
          :show="true"
          :savedata="true"
          :setting="true"
          :no-top="false"
          @execute_content_filtering="execute_content_filtering"
        />

        <header class="headline py-4">
          <h5 class="title font-weight-bold">
            {{ $t('new.more') }}
          </h5>
        </header>
        <!--         <div v-if="$i18n.locale=='fa'" class="d-flex justify-content-between align-items-center mb-3 setting_lable">
          <nuxt-link to="/profile/internet">
            {{ $t('new.halfPrice') }}
          </nuxt-link>
        </div> -->

        <div
          class="d-flex justify-content-between align-items-center mb-3 setting_lable"
        >
          <nuxt-link to="/profile/faq">
            {{ $t('new.FAQ') }}
          </nuxt-link>
        </div>
        <div
          class="d-flex justify-content-between align-items-center mb-3 setting_lable"
        >
          <nuxt-link to="/profile/about-contact">
            {{ $t('footer.aboutus') }}
          </nuxt-link>
        </div>
        <div
          class="d-flex justify-content-between align-items-center mb-3 setting_lable"
        >
          <nuxt-link to="/profile/terms">
            {{ $t('new.term') }}
          </nuxt-link>
        </div>
        <div
          v-if="$auth.loggedIn"
          class="d-flex justify-content-between align-items-center mb-3 setting_lable"
        >
          <b-link class="text-danger" @click="showLogoutConfirmation">
            خروج از حساب کاربری
          </b-link>
        </div>
      </div>
    </div>
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
export default {
  async asyncData(context) {
    let res
    res = await context.app.$axios.get('get/app/socials')

    return { data: res.data.data }
  },
  data() {
    return {
      data: {},
    }
  },
  head() {
    return { title: this.$t('new.quickSetting') }
  },
  methods: {
    nightmode(e) {
      if (e == true) this.$colorMode.preference = 'dark'
      else this.$colorMode.preference = 'light'
    },
    async logout() {
      await this.$auth.logout()
      this.$router.go()
    },
    execute_content_filtering() {
      return this.data
    },
    changelang() {
      if (this.$i18n.locale === 'en') {
        this.$i18n.setLocale('fa')
      } else {
        this.$i18n.setLocale('en')
      }
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
      this.logout()
    },
  },
}
</script>
<style scoped>
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
