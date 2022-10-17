<template>
  <div>
    <div v-if="!itemmenu.includes($route.name)" class="d-flex header-mobile d-md-none">
      <div class="show-mobile header-home">
        <nuxt-link to="/" class="header-link d-flex flex-column align-items-center justify-content-center text-nowrap active">
          <i v-if="$config.envname=='upera'" class="icon-upera-logo" />
          <i v-else class="icon-home" />
          <span>
            <i v-if="$config.envname=='upera'" class="icon-upera-fa-logotype" />
            <span v-else>خانه </span>

          </span>
        </nuxt-link>
      </div>
      <div class="header-search">
        <nuxt-link to="/search"
                   class="show-mobile header-link d-flex flex-column align-items-center justify-content-center text-nowrap "
        >
          <i class="icon-search-stroke" />
          <span>جستجو </span>
        </nuxt-link>
      </div>
      <div class="d-flex align-items-center h-full header-category-profile">
        <div
          class="header-links header-links-category d-md-flex align-items-center mr-md-2 mr-lg-3 h-full"
        >
          <nuxt-link to="/genres" class="d-flex align-items-center header-link">
            <i class="icon-categories" />
            <span class="ml-md-2">دسته&zwnj;بندی&zwnj;ها</span>
            <i class="icon-expand-arrow hide-mobile" />
          </nuxt-link>
        </div>
        <div
          class="header-links header-links-profile d-md-flex align-items-center mr-md-2 mr-lg-3 h-full"
        >
          <nuxt-link to="/profile" class="d-flex align-items-center header-link">
            <i class="icon-profile-setting" />
            <span class="ml-md-2">پروفایل</span>
          </nuxt-link>
        </div>
      </div>
    </div>


    <header id="header" class="page-header">
      <div id="trigger-menu-wrapper" class="container-fluid trigger-menu-wrapper" :class="{'trigger-menu-wrapper2':bannerNav}">
        <div
          class="d-flex justify-content-between align-items-center header trigger-menu w-full" :class="{'menu-open': MenuOpen}" @click="MenuOpen = !MenuOpen"
        >
          <div class="d-flex align-items-center h-full">
            <nuxt-link v-if="(categories.includes($route.path) || profile.includes($route.path))" to="/" class="logo logo_another_pages">
              <i v-if="$config.envname=='upera'" class="icon-upera-fa-logotype" />
              <i v-if="$config.envname=='upera'" class="icon-upera-logo" />
              <img v-if="$config.envname=='igapp' && $colorMode.value=='light'" src="@/assets/img/_logo.png" :class="{'d-none d-md-block':bannerNav}" :alt="$config.name_fa">
              <img v-if="$config.envname=='igapp' && $colorMode.value=='dark'" src="@/assets/images/_logo-mobile.png" :class="{'d-none d-md-block':bannerNav}" :alt="$config.name_fa">
              <img v-if="$config.envname=='plus' && $colorMode.value=='light'" :src="'https://cdn.upera.shop/s3/vods/'+checkuser.logo" :class="{'d-none d-md-block':bannerNav}" :alt="$config.name_fa">
              <img v-if="$config.envname=='plus' && $colorMode.value=='dark'" :src="'https://cdn.upera.shop/s3/vods/'+checkuser.logo_dark" :class="{'d-none d-md-block':bannerNav}" :alt="$config.name_fa">
            </nuxt-link>
            <nuxt-link v-else to="/" class="logo">
              <img v-if="$config.envname=='upera'" src="@/assets/img/logo.svg" :class="{'d-none d-md-block':bannerNav}" :alt="$config.name_fa">
              <img v-if="$config.envname=='igapp' && $colorMode.value=='light'" src="@/assets/img/_logo.png" :class="{'d-none d-md-block':bannerNav}" :alt="$config.name_fa">
              <img v-if="$config.envname=='igapp' && $colorMode.value=='dark'" src="@/assets/images/_logo-mobile.png" :class="{'d-none d-md-block':bannerNav}" :alt="$config.name_fa">
              <img v-if="$config.envname=='plus' && $colorMode.value=='light'" :src="'https://cdn.upera.shop/s3/vods/'+checkuser.logo" :class="{'d-none d-md-block':bannerNav}" :alt="$config.name_fa">
              <img v-if="$config.envname=='plus' && $colorMode.value=='dark'" :src="'https://cdn.upera.shop/s3/vods/'+checkuser.logo_dark" :class="{'d-none d-md-block':bannerNav}" :alt="$config.name_fa">
              <img v-if="bannerNav && $config.envname=='upera'" src="/images/logo-mobile.svg" class="d-md-none" :alt="$config.name_fa">
              <img v-if="bannerNav && $config.envname=='igapp'" src="@/assets/images/_logo-mobile.png" class="d-md-none" :alt="$config.name_fa">
              <img v-if="bannerNav && $config.envname=='plus' && checkuser.ref<=5" src="@/assets/images/mobile.png" class="d-md-none" :alt="$config.name_fa">
              <img v-if="bannerNav && $config.envname=='plus' && checkuser.ref>5" :src="'https://cdn.upera.shop/s3/vods/'+checkuser.logo_dark" class="d-md-none" :alt="$config.name_fa">
            </nuxt-link>
            <div class="d-none d-md-flex align-items-center h-full">
              <div class="header-search">
                <input v-model="query" class="header-search-input"
                       :placeholder="$t('new.search')" type="text"
                       @keyup.enter="SEARCH"
                >
                <button class="header-search-submit" @click="SEARCH">
                  <i class="icon-search-stroke" />
                </button>
              </div>


              <div class="category d-flex align-items-center h-full header-category-profile" :class="{ 'open': categoriesNav }" @mouseover="categoriesHover()" @mouseleave="categoriesleave()">
                <div class="header-links header-links-category d-md-flex align-items-center ml-md-2 ml-lg-3 h-full">
                  <nuxt-link to="/genres" class="d-flex align-items-center header-link">
                    <i class="icon-categories" />
                    <span>{{ $t('new.categories') }}</span>
                    <!-- <i class="icon-expand-arrow hide-mobile" /> -->
                  </nuxt-link>
                </div>
                <ul v-if="!profileNav" class="container-fluid category-menu header-menu mega-menu hide-mobile">
                  <!--           <i class="fas fa-angle-down angle" /> -->
                  <li>
                    <nuxt-link to="/genres">
                      {{ $t('new.genres') }}
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/lives">
                      {{ $t('new.lives') }}
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/casts/iranian-actors">
                      {{ $t('new.iranianactors') }}
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/casts/foreign-actors">
                      {{ $t('new.foreignactors') }}
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/casts/directors">
                      {{ $t('new.directors') }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>

              <div class="category header-buttons d-flex align-items-center h-full" :class="{ 'open': profileNav }">
                <div class="header-links header-links-profile d-md-flex align-items-center mr-md-2 mr-lg-3 h-full">
                  <nuxt-link to="/profile" class="profile d-flex align-items-center header-link">
                    <i class="icon-profile-setting ml-2" />

                    <span>{{ $t('new.profile') }}</span>
                  </nuxt-link>

                  <ul v-if="profileNav" class="container-fluid category-menu profile_menu header-menu mega-menu hide-mobile">
                    <i class="fas fa-angle-down angle" />
                    <li>
                      <nuxt-link to="/profile">
                        {{ $t('setting.profile') }}
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/payments">
                        پرداخت ها
                      </nuxt-link>
                    </li>
                    <!--                                         <li>
                      <nuxt-link to="/profile/settings">
                        {{ $t('setting.app_setting') }}
                      </nuxt-link>
                    </li> -->
                    <!--                     <li v-if="checkuser.subscription==1">
                      <nuxt-link to="/profile/plans">
                        {{ $t('new.prices') }}
                      </nuxt-link>
                    </li> -->
                    <!--                   <li v-if="$i18n.locale=='fa'">
                    <nuxt-link to="/profile/internet">
                      {{ $t('new.internet') }}
                    </nuxt-link>
                  </li> -->
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="header-buttons">
            <div
              class="header-links header-links-profile-setting d-md-flex align-items-center h-full ml-lg-3 mr-lg-3 dropdown float-left"
            >
              <b-link id="popover-settings" class="d-flex align-items-center header-link hide-mobile">
                <i class="icon-setting ml-2" />
                <span>{{ $t('setting.app_setting') }}</span>
              </b-link>
              <b-popover id="popover-d-settings" target="popover-settings" triggers="hover" placement="bottom" fallback-placement="flip" boundary-padding="1">
                <ul class="dropdown-menu show">
                  <li class="px-3 py-2">
                    <div class="tab-content active">
                      <div id="tabsetting" class="tab-pane active">
                        <!--                           <div class="d-flex align-items-center justify-content-between pb-2 border-bottom-gray">
                            <div class="d-flex align-items-center">
                              <div class="avatar avatar-sm ml-2">
                                <img src="images/users/unnamed.jpg">
                              </div>
                              <span class="text-black">امیر</span>
                            </div>
                            <a class="text-muted p-fs-larger">
                              <i class="icon-edit" />
                            </a>
                          </div> -->
                        <div class="d-flex align-items-center justify-content-between pt-3 py-4 border-bottom-gray">
                          <div class="text-black">
                            حالت شب 
                          </div>
                          <div class="custom-control custom-switch">
                            <input id="nightMode" type="checkbox" class="custom-control-input" :checked="$colorMode.value==='dark'" @change="nightmode($event.target.checked)">
                            <label class="custom-control-label" for="nightMode" />
                          </div>
                        </div>
                        <div :class="{ 'border-bottom-gray' : $auth.loggedIn}" class="d-flex align-items-center justify-content-between py-4 pt-3">
                          <div class="text-black">
                            زبان فارسی 
                          </div>
                          <div class="custom-control custom-switch">
                            <input id="language" disabled type="checkbox" class="custom-control-input" :checked="$i18n.locale==='fa'" @change="language($event.target.checked)">
                            <label class="custom-control-label" for="language" />
                          </div>
                        </div>
                        <div v-if="$auth.loggedIn" class="d-flex align-items-center justify-content-between pt-4">
                          <a class="text-black" @click="SHOW_MODAL_CREDIT();$root.$emit('bv::hide::popover')">افزایش موجودی</a>
                        </div>
                        <div v-if="$auth.loggedIn" class="d-flex align-items-center justify-content-between pt-4 py-4 border-bottom-gray">
                          <nuxt-link class="text-black" to="/payments">
                            پرداخت ها
                          </nuxt-link>
                        </div>
                        <div v-if="$auth.loggedIn" class="d-flex align-items-center justify-content-between py-4">
                          <b-link class="text-black" @click="logout()">
                            خروج از حساب کاربری
                          </b-link>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </b-popover>
            </div>

            <nuxt-link v-if="checkuser.show_app" to="/app" class="btn btn-second px-lg-4 py-1 ml-1 btn-app">
              {{ $t('new.download_app') }}
            </nuxt-link>
            <b-button v-if="checkuser.subscription!=1 && !$auth.loggedIn && $route.name !=='login'" variant="main" class="py-1 px-lg-4" @click="SHOW_MODAL()">
              {{ $t('new.login_register') }}
            </b-button>
            <b-button v-else-if="checkuser.subscription==1 && !checkuser.access" variant="main" class="py-1 px-lg-4" @click="SHOW_MODAL_SUBSCRIPTION()">
              خرید اشتراک
            </b-button>
            <b-button v-else-if="checkuser.subscription==1 && checkuser.access" v-b-tooltip.hover :title="checkuser.days_period_to_end+' روز از اشتراک شما باقیمانده است'" variant="success" class="py-1 px-lg-4" @click="SHOW_MODAL_SUBSCRIPTION()">
              تمدید اشتراک
            </b-button>
            <!--             <b-button v-else-if="$route.name !=='login'" variant="main" class="py-1 px-lg-4" @click="logout()">
              {{ $t('nav.logout') }}
            </b-button> -->
          </div>
        </div>
      </div>
      <ul v-if="categories.includes($route.path)" class="d-md-none category-menu-mobile mt-5">
        <li>
          <nuxt-link to="/genres">
            {{ $t('new.genres') }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/lives">
            {{ $t('new.lives') }}
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
      <ul v-if="profile.includes($route.path)" class="container d-md-none category-menu-mobile category-menu-mobile-setting mt-5  pt-md-3 pt-lg-5 p- app_container_pricing_res">
        <li class="mr-3">
          <nuxt-link to="/profile">
            {{ $t('setting.profile') }}
          </nuxt-link>
        </li>
        <li v-show="showpayments" class="mr-3">
          <nuxt-link to="/payments">
            پرداخت ها
          </nuxt-link>
        </li>
        <li class="mr-3">
          <nuxt-link to="/profile/settings">
            {{ $t('setting.app_setting') }}
          </nuxt-link>
        </li>
        <!--         <li v-if="checkuser.subscription==1" class="mr-3">
          <nuxt-link to="/profile/plans">
            {{ $t('new.prices') }}
          </nuxt-link>
        </li> -->
        <!--         <li v-if="$i18n.locale=='fa'" class="mr-3">
          <nuxt-link to="/profile/internet">
            {{ $t('new.internet') }}
          </nuxt-link>
        </li> -->
      </ul>
    </header>
    <Login v-if="!$auth.loggedIn && $route.name !=='login'" :show="showModal" :staticmodal="false" @hide-modal="HIDE_MODAL" />
    <Credit v-if="$auth.loggedIn" :show="showCreditModal" @hide-modal="HIDE_MODAL_CREDIT" />
    <Subscription v-if="checkuser.subscription==1" :show="showSubscriptionModal" @hide-modal="HIDE_MODAL_SUBSCRIPTION" />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Login from "../components/Login"
import Credit from "../components/Credit"
import Subscription from "../components/Subscription"

  export default {
  components: {
    Login,
    Credit,
    Subscription
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
      categories: ["/genres", "/lives", "/casts/iranian-actors", "/casts/foreign-actors", "/casts/directors"],
      profile: ["/profile","/payments", "/profile/settings", "/profile/plans", "/profile/internet"],
      banner: ["index", "cast-id", "movie-id", "episode-id", "series-id", "genres-genre", "lives-live", "lists-list"],
      itemmenu: ["callback","movie-download-id","episode-download-id","ekran-id","movie-id", "episode-id", "series-id"]

    }
  },
    computed: {
        ...mapGetters({showModal: "login/showModal"}),
        ...mapGetters({showCreditModal: "credit/showModal"}),
        ...mapGetters({showSubscriptionModal: "subscription/showModal"}),
    },

  watch: {
    '$route.path': function() {
      this.Nav()

      document.body.classList.remove("scroll-up")
      document.body.classList.remove("scroll-down")
    }
    },
    
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted() {

if(this.$config.envname=='igapp' && (location.host=='igtv.igaptv.com' || location.host=='igtv.igaptv.net')){
  this.showpayments=false
}
      this.Nav()
      window.addEventListener('scroll', this.handleScroll)

if(this.$route.params.search)
  this.query=this.$route.params.search


document.body.classList.add("hfixed")
// document.body.classList.add("header-fixed")

// document.body.classList.add("scroll-up")
    },
    methods: {
            categoriesHover() {
              if(this.profileNav){
                this.profileNav=false
              }
            },
            categoriesleave() {
this.Nav()
            },
            handleScroll(e){
        var footer=document.getElementsByClassName('footer-sticky')


if(footer.length){
        if (document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight - 100) {
          footer[0].classList.add('d-none')
        } else if (document.documentElement.scrollTop + window.innerHeight < document.documentElement.scrollHeight - 100) {
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
        var goftino_w=document.getElementById("goftino_w")
        if(goftino_w)
          goftino_w.classList.remove('goftino_w_hide')
        
        // document.body.classList.add(delta > 0 ? 's-c' : 's-h')

        //console.log(document.documentElement.scrollHeight-document.documentElement.clientHeight)

        if(document.documentElement.scrollHeight-document.documentElement.clientHeight<=20){
          document.body.classList.add('s-h')
        }else if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
            document.body.classList.add('s-c')
            if(goftino_w){
              if(delta>0){
                goftino_w.classList.remove('goftino_w_hide')
              }else{
                goftino_w.classList.add('goftino_w_hide')
              }
            } 
        }else{
          if(goftino_w)
           goftino_w.classList.add('goftino_w_hide')
          document.body.classList.add('s-h')
        }


    }, 200)

    let height =  document.documentElement.scrollHeight

if(height>780 || !document.getElementById("trigger-menu-wrapper").classList.contains("trigger-menu-wrapper2")){


    var scroll = document.documentElement.scrollTop
    if (scroll >= 100) {
        document.body.classList.add("header-fixed-collapsed")
    }
    if (scroll >= 300) {

        document.body.classList.add("header-fixed")
    }
    else if (scroll == 0) {
       document.body.classList.remove("header-fixed")
       document.body.classList.remove("header-fixed-collapsed")
    }


        const currentScroll = window.pageYOffset

        if (currentScroll <= 10) {
            document.body.classList.remove("scroll-up")
            document.body.classList.remove("scroll-down")

            return
        }

        if (currentScroll > this.lastScroll && !document.body.classList.contains("scroll-down")) {
            // down
            document.body.classList.remove("scroll-up")
            document.body.classList.add("scroll-down")
        } else if (currentScroll < this.lastScroll && document.body.classList.contains("scroll-down")) {
            // up
            document.body.classList.remove("scroll-down")
            document.body.classList.add("scroll-up")
        }
        this.lastScroll = currentScroll
      }else{
document.body.classList.remove("header-fixed")
document.body.classList.add("header-fixed-collapsed")

          const currentScroll = window.pageYOffset

        if (currentScroll <= 10) {
            document.body.classList.remove("scroll-up")
            document.body.classList.remove("scroll-down")

            return
        }else{
           document.body.classList.add("scroll-down") 

            return
          }
      }

              return e

            },
            Nav() {

              if (this.categories.includes(this.$route.path)) {
                this.categoriesNav = true
              }
              else {
                this.categoriesNav = false
              }  


              if (this.profile.includes(this.$route.path)) {
                this.profileNav = true
              }
              else {
                this.profileNav = false
              }

              if (this.banner.includes(this.$route.name)) {
                this.bannerNav = true
              }
              else {
                this.bannerNav = false
              }
            },
            HIDE_MODAL() {
              this.$store.dispatch('login/HIDE_MODAL')
            },
            SEARCH() {
              if(this.query && this.query.length>1){
                this.$router.push({
                    name: "search-search",
                    params: {
                        search: this.query
                    }
                })
              }
            },
            changeroute() {
              if(this.$route.name ==='profile'){
                this.$router.push({
                    name: "login"
                })
              }
            },
            
      refresh() {
        this.$nuxt.refresh()
      },
      SHOW_MODAL() {
        this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})
      },

            SHOW_MODAL_CREDIT() {
              this.$store.dispatch('credit/SHOW_MODAL',{prewallet: null})
            },
            HIDE_MODAL_CREDIT() {
              this.$store.dispatch('credit/HIDE_MODAL')
            },
            SHOW_MODAL_SUBSCRIPTION() {
              this.$store.dispatch('subscription/SHOW_MODAL',{content_type: '',content_id: ''})
            },
            HIDE_MODAL_SUBSCRIPTION() {
              this.$store.dispatch('subscription/HIDE_MODAL')
            },
      nightmode(e) {
        if(e==true)
          this.$colorMode.preference='dark'
        else
          this.$colorMode.preference='light'
      },
      language(e) {
        if(e==true){
          this.$store.dispatch('SET_LANG','fa')
          this.$i18n.locale = 'fa'
        }else{
          this.$store.dispatch('SET_LANG','en')
          this.$i18n.locale = 'en'
        }
      },
      async logout() {

        await this.$auth.logout()
        this.$router.go()
        

      }
    },
  }
</script>
