<template>
  <div>
    <MobileHeader
      v-if="!itemmenu.includes($route.name)"
      :current-route="$route.name"
    />
    <header id="header" class="page-header">
      <div
        id="trigger-menu-wrapper"
        class="container-fluid trigger-menu-wrapper"
        :class="{ 'trigger-menu-wrapper2': bannerNav }"
      >
        <div
          class="d-flex justify-content-between align-items-center header trigger-menu w-full"
          :class="{ 'menu-open': MenuOpen }"
          @click="MenuOpen = !MenuOpen"
        >
          <div class="d-flex align-items-center h-full">
            <Logo
              :banner-nav="bannerNav"
              :logo-to="logoTo"
              :additional-classes="logoClasses"
              :is-another-page="isAnotherPage"
            />

            <div class="d-none d-md-flex align-items-center h-full">
              <NavigationMenu
                :is-open="categoriesNav"
                :main-link="categoriesMainLink"
                :menu-items="categoriesMenuItems"
                @menu-hover="categoriesHover"
                @menu-leave="categoriesleave"
              />

              <SearchInput :value="query" @input="query = $event" />

              <KidsSection v-if="$config.envname === 'upera'" />

              <!-- <NavigationMenu
                :is-open="profileNav"
                :main-link="profileMainLink"
                :menu-items="profileMenuItems"
                :hide-on-mobile="true"
                @menu-hover="categoriesHover"
                @menu-leave="categoriesleave"
              /> -->
            </div>
          </div>
          <HeaderActions
            :is-logged-in="$auth.loggedIn"
            :subscription-type="currentSubscriptionType"
            :content_subscription="!!content_subscription"
            :myCredit="my_credit"
            @show-modal="SHOW_MODAL"
            @show-credit-modal="SHOW_MODAL_CREDIT"
            @show-subscription-modal="SHOW_MODAL_SUBSCRIPTION"
            @show-directdebit-modal="SHOW_MODAL_DIRECTDEBIT"
            @show-modal-with-directdebit="SHOW_MODAL_WITH_DIRECTDEBIT"
            @show-modal-with-subscription="SHOW_MODAL_WITH_SUBSCRIPTION"
            @logout="logout"
          />
        </div>
      </div>

      <MobileNavigationMenus
        :current-route="$route.path"
        :categories="categories"
        :profile="profile"
      />
    </header>
    <ModalManager />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MobileHeader from '@/components/header/MobileHeader.vue'
import Logo from '@/components/header/Logo.vue'
import NavigationMenu from '@/components/header/NavigationMenu.vue'
import SearchInput from '@/components/header/SearchInput.vue'
import HeaderActions from '@/components/header/HeaderActions.vue'
import MobileNavigationMenus from '@/components/header/MobileNavigationMenus.vue'
import ModalManager from '@/components/header/ModalManager.vue'
import KidsSection from '@/components/header/KidsSection.vue'

export default {
  name: 'AppHeader',
  components: {
    MobileHeader,
    Logo,
    NavigationMenu,
    SearchInput,
    HeaderActions,
    MobileNavigationMenus,
    ModalManager,
    KidsSection,
  },

  data() {
    return {
      query: null,
      categoriesNav: false,
      profileNav: false,
      bannerNav: false,
      scrollCheckTimer: false,
      lastScrollTop: 0,
      lastScroll: 0,
      MenuOpen: false,
      showpayments: true,
      categories: [
        '/lives',
        '/casts/iranian-actors',
        '/casts/foreign-actors',
        '/casts/directors',
      ],
      profile: [
        '/profile',
        '/payments',
        '/profile/settings',
        '/profile/plans',
        '/profile/internet',
      ],
      banner: [
        'index',
        'cast-id',
        'movie-id',
        'episode-id',
        'series-id',
        'genres-genre',
        'lives-live',
        'lists-list',
        'app',
      ],
      itemmenu: [
        'callback',
        'movie-download-id',
        'episode-download-id',
        'ekran-id',
        'movie-id',
        'episode-id',
        'series-id',
      ],
    }
  },

  computed: {
    ...mapGetters({
      showModal: 'login/showModal',
      showCreditModal: 'credit/showModal',
      showDirectDebitModal: 'directdebit/showModal',
      showSubscriptionModal: 'subscription/showModal',
      content_subscription: 'content_subscription',
      my_credit: 'my_credit',
    }),

    logoTo() {
      return this.categories.includes(this.$route.path) ||
        this.profile.includes(this.$route.path)
        ? '/'
        : '/'
    },

    logoClasses() {
      return this.isAnotherPage ? 'logo_another_pages' : ''
    },

    isAnotherPage() {
      return (
        this.categories.includes(this.$route.path) ||
        this.profile.includes(this.$route.path)
      )
    },

    categoriesMainLink() {
      return {
        to: '/genres',
        text: this.$t('new.categories'),
        classes: 'd-flex align-items-center header-link',
      }
    },

    categoriesMenuItems() {
      return [
        { to: '/genres', text: this.$t('new.genres') },
        { to: '/casts/iranian-actors', text: this.$t('new.iranianactors') },
        { to: '/casts/foreign-actors', text: this.$t('new.foreignactors') },
        { to: '/casts/directors', text: this.$t('new.directors') },
      ]
    },

    profileMainLink() {
      return {
        to: '/profile',
        icon: 'icon-profile-setting ml-2',
        text: this.$t('new.profile'),
        classes: 'profile d-flex align-items-center header-link',
      }
    },

    profileMenuItems() {
      const items = [{ to: '/profile', text: 'لیست‌های من' }]

      if (this.showpayments) {
        items.push({ to: '/payments', text: 'پرداخت ها' })
      }

      return items
    },

    currentSubscriptionType() {
      if (!this.content_subscription && this.checkuser?.subscription != 1) {
        return 'directdebit'
      } else if (
        this.content_subscription ||
        this.checkuser?.subscription == 1
      ) {
        return this.checkuser?.access ? 'renewal' : 'subscription'
      }
      return ''
    },
  },

  watch: {
    '$route.path': function () {
      this.Nav()
      document.body.classList.remove('scroll-up')
      document.body.classList.remove('scroll-down')
    },
  },

  mounted() {
    this.Nav()

    window.addEventListener('scroll', this.handleScroll)

    if (this.$route.params.search) this.query = this.$route.params.search
    document.body.classList.add('hfixed')
  },

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    categoriesHover() {
      if (this.profileNav) {
        this.profileNav = false
      } else {
        this.categoriesNav = true
      }
    },

    categoriesleave() {
      this.categoriesNav = false
      this.profileNav = false
    },

    handleScroll(e) {
      var footer = document.getElementsByClassName('footer-sticky')

      if (footer.length) {
        if (
          document.documentElement.scrollTop + window.innerHeight >=
          document.documentElement.scrollHeight - 100
        ) {
          footer[0].classList.add('d-none')
        } else if (
          document.documentElement.scrollTop + window.innerHeight <
          document.documentElement.scrollHeight - 100
        ) {
          footer[0].classList.remove('d-none')
        }
      }
      var delta
      if (this.scrollCheckTimer) {
        clearTimeout(this.scrollCheckTimer)
      }

      var st = window.pageYOffset || document.documentElement.scrollTop
      if (st > this.lastScrollTop) {
        delta = 1
        // downscroll code
      } else {
        delta = -1
        // upscroll code
      }
      this.lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling

      this.scrollCheckTimer = setTimeout(() => {
        document.body.classList.remove('s-c')
        document.body.classList.remove('s-h')
        var goftino_w = document.getElementById('goftino_w')
        if (goftino_w) goftino_w.classList.remove('goftino_w_hide')

        // document.body.classList.add(delta > 0 ? 's-c' : 's-h')

        if (
          document.documentElement.scrollHeight -
            document.documentElement.clientHeight <=
          20
        ) {
          document.body.classList.add('s-h')
        } else if (
          window.innerHeight + window.pageYOffset >=
          document.body.offsetHeight
        ) {
          document.body.classList.add('s-c')
          if (goftino_w) {
            if (delta > 0) {
              goftino_w.classList.remove('goftino_w_hide')
            } else {
              goftino_w.classList.add('goftino_w_hide')
            }
          }
        } else {
          if (goftino_w) goftino_w.classList.add('goftino_w_hide')
          document.body.classList.add('s-h')
        }
      }, 200)

      let height = document.documentElement.scrollHeight
      if (
        height > 780 ||
        !document
          .getElementById('trigger-menu-wrapper')
          .classList.contains('trigger-menu-wrapper2')
      ) {
        var scroll = document.documentElement.scrollTop
        if (scroll >= 100) {
          document.body.classList.add('header-fixed-collapsed')
        }
        if (scroll >= 300) {
          document.body.classList.add('header-fixed')
        } else if (scroll == 0) {
          document.body.classList.remove('header-fixed')
          document.body.classList.remove('header-fixed-collapsed')
        }

        const currentScroll = window.pageYOffset

        if (currentScroll <= 10) {
          document.body.classList.remove('scroll-up')
          document.body.classList.remove('scroll-down')

          return
        }

        if (
          currentScroll > this.lastScroll &&
          !document.body.classList.contains('scroll-down')
        ) {
          // down
          document.body.classList.remove('scroll-up')
          document.body.classList.add('scroll-down')
        } else if (
          currentScroll < this.lastScroll &&
          document.body.classList.contains('scroll-down')
        ) {
          // up
          document.body.classList.remove('scroll-down')
          document.body.classList.add('scroll-up')
        }
        this.lastScroll = currentScroll
      } else {
        document.body.classList.remove('header-fixed')
        document.body.classList.add('header-fixed-collapsed')

        const currentScroll = window.pageYOffset

        if (currentScroll <= 10) {
          document.body.classList.remove('scroll-up')
          document.body.classList.remove('scroll-down')

          return
        } else {
          document.body.classList.add('scroll-down')

          return
        }
      }

      return e
    },
    Nav() {
      if (this.categories.includes(this.$route.path)) {
        this.categoriesNav = true
      } else {
        this.categoriesNav = false
      }

      if (this.profile.includes(this.$route.path)) {
        this.profileNav = true
      } else {
        this.profileNav = false
      }

      if (this.banner.includes(this.$route.name)) {
        this.bannerNav = true
      } else {
        this.bannerNav = false
      }
    },

    refresh() {
      this.$nuxt.refresh()
    },
    SHOW_MODAL() {
      this.$store.dispatch('login/SHOW_MODAL', {
        premessage: null,
        premobile: null,
        preredirect: null,
        prerefresh: false,
      })
    },
    SHOW_MODAL_WITH_DIRECTDEBIT() {
      this.$store.dispatch('login/SHOW_MODAL', {
        premessage: null,
        premobile: null,
        preredirect: null,
        prerefresh: 'directdebit',
      })
    },
    SHOW_MODAL_WITH_SUBSCRIPTION() {
      this.$store.dispatch('login/SHOW_MODAL', {
        premessage: null,
        premobile: null,
        preredirect: null,
        prerefresh: 'subscription',
      })
    },

    SHOW_MODAL_CREDIT() {
      this.$store.dispatch('credit/SHOW_MODAL', { prewallet: null })
    },

    HIDE_MODAL_CREDIT() {
      this.$store.dispatch('credit/HIDE_MODAL')
    },

    SHOW_MODAL_DIRECTDEBIT() {
      this.$store.dispatch('directdebit/SHOW_MODAL', {
        premobile: null,
        forsubscription: false,
        id: null,
        type: null,
        paymentid: 0,
      })
    },
    HIDE_MODAL_DIRECTDEBIT() {
      this.$store.dispatch('directdebit/HIDE_MODAL')
    },
    SHOW_MODAL_SUBSCRIPTION() {
      this.$store.dispatch('subscription/SHOW_MODAL', {
        content_type: '',
        content_id: '',
      })
    },
    HIDE_MODAL_SUBSCRIPTION() {
      this.$store.dispatch('subscription/HIDE_MODAL')
    },
    nightmode(e) {
      if (e == true) this.$colorMode.preference = 'dark'
      else this.$colorMode.preference = 'light'
    },
    async logout() {
      await this.$auth.logout()
      this.$router.go()
    },
    execute_content_filtering() {
      this.$router.go()
    },
    changelang() {
      if (this.$i18n.locale === 'en') {
        this.$i18n.setLocale('fa')
      } else {
        this.$i18n.setLocale('en')
      }
    },
  },
}
</script>
