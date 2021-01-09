<template>
  <div>
    <div v-if="!itemmenu.includes($route.name)" class="d-flex header-mobile d-md-none">
      <div class="show-mobile header-home">
        <nuxt-link to="/" class="header-link d-flex flex-column align-items-center justify-content-center text-nowrap active">
          <i class="icon-upera-logo" />
          <span>
            <i class="icon-upera-fa-logotype" />
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
      <div class="container-fluid trigger-menu-wrapper" :class="{'trigger-menu-wrapper2':bannerNav}">
        <div
          class="d-flex justify-content-between align-items-center header trigger-menu w-full" :class="{'menu-open': MenuOpen}" @click="MenuOpen = !MenuOpen"
        >
          <div class="d-flex align-items-center h-full">
            <nuxt-link v-if="(categories.includes($route.path) || profile.includes($route.path))" to="/" class="logo logo_another_pages">
              <i class="icon-upera-fa-logotype" />
              <i class="icon-upera-logo" />
            </nuxt-link>
            <nuxt-link v-else to="/" class="logo">
              <img src="@/assets/img/logo.svg" :class="{'d-none d-md-block':bannerNav}" alt="آپرا">

              <img v-if="bannerNav" src="/images/logo-mobile.svg" class="d-md-none" alt="آپرا">
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
                    <!--                     <li>
                      <nuxt-link to="/profile/settings">
                        {{ $t('setting.app_setting') }}
                      </nuxt-link>
                    </li> -->
                    <li v-if="checkuser.subscription==1">
                      <nuxt-link to="/profile/plans">
                        {{ $t('new.prices') }}
                      </nuxt-link>
                    </li>
                    <!--                   <li v-if="$i18n.locale=='fa'">
                    <nuxt-link to="/profile/internet">
                      {{ $t('new.internet') }}
                    </nuxt-link>
                  </li> -->
                  </ul>
                </div>
              </div>


              <div class="header-buttons d-flex align-items-center h-full">
                <div
                  class="header-links header-links-profile-setting d-md-flex align-items-center h-full ml-lg-3 mr-lg-3 dropdown"
                >
                  <a class="d-flex align-items-center header-link hide-mobile" href="#">
                    <i class="icon-setting ml-2" />
                    <span>تنظیمات</span>
                  </a>

                  <ul class="dropdown-menu">
                    <li class="page-tab">
                      <ul class="nav nav-tabs page-tabs-nav show-mobile">
                        <li class="nav-item">
                          <a class="nav-link" data-toggle="tab" href="#tabsetting">
                            <i class="icon-setting" />
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link active" data-toggle="tab" href="#tabprofile">پروفایل</a>
                        </li>
                        <li class="nav-item nav-item-last">
                          <button type="button" class="btn btn-sm btn-main">
                            ورود | ثبت نام
                          </button>
                        </li>
                      </ul>
                    </li>
                    <li class="px-3 py-2">
                      <div class="tab-content">
                        <div id="tabsetting" class="tab-pane">
                          <div class="d-flex align-items-center justify-content-between pb-2 border-bottom-gray">
                            <div class="d-flex align-items-center">
                              <div class="avatar avatar-sm ml-2">
                                <img src="images/users/unnamed.jpg">
                              </div>
                              <span class="text-black">امیر</span>
                            </div>
                            <a class="text-muted p-fs-larger">
                              <i class="icon-edit" />
                            </a>
                          </div>
                          <div class="d-flex align-items-center justify-content-between pt-3">
                            <div class="text-black">
                              حالت شب <div class="text-muted font-weight-lighter mt-1">
                                تا
                                15%
                                کاهش
                                مصرف
                                باطری
                              </div>
                            </div>
                            <div class="custom-control custom-switch">
                              <input id="nightMode" type="checkbox" class="custom-control-input">
                              <label class="custom-control-label" for="nightMode" />
                            </div>
                          </div>
                          <div class="d-flex align-items-center justify-content-between py-3 border-bottom-gray">
                            <div class="text-black">
                              دستگاه های متصل
                            </div>
                            <button class="btn btn-dark btn-sm btn-pill">
                              اتصال به تلویزیون <i
                                class="icon-tv p-fs-medium mr-1"
                              />
                            </button>
                          </div>
                          <div class="d-flex align-items-center justify-content-between pt-4">
                            <div class="text-black">
                              اطلاع رسانی فیلم های جدید
                            </div>
                            <div class="custom-control custom-switch">
                              <input id="" checked type="checkbox" class="custom-control-input">
                              <label class="custom-control-label" for="" />
                            </div>
                          </div>
                          <div class="d-flex align-items-center justify-content-between pt-4">
                            <div class="text-black">
                              زبان سایت
                            </div>
                            <div class="text-muted">
                              فارسی
                            </div>
                          </div>
                          <div class="d-flex align-items-center justify-content-between pt-4">
                            <div class="text-black">
                              فقط نمایش زبان فارسی ها
                            </div>
                            <div class="custom-control custom-switch">
                              <input id="" type="checkbox" class="custom-control-input">
                              <label class="custom-control-label" for="" />
                            </div>
                          </div>
                          <div class="d-flex align-items-center justify-content-between py-4 border-bottom-gray">
                            <div class="text-black">
                              نسخه کودکان
                            </div>
                            <div class="custom-control custom-switch">
                              <input id="" type="checkbox" class="custom-control-input">
                              <label class="custom-control-label" for="" />
                            </div>
                          </div>
                          <div class="d-flex align-items-center justify-content-between pt-4">
                            <div class="text-black">
                              افزایش موجودی
                            </div>
                          </div>
                          <div class="d-flex align-items-center justify-content-between pt-4">
                            <div class="text-black">
                              سوابق پرداخت
                            </div>
                          </div>
                          <div class="d-flex align-items-center justify-content-between py-4 border-bottom-gray">
                            <div class="text-black">
                              دعوت دوستان
                            </div>
                          </div>
                          <div class="d-flex align-items-center justify-content-between py-4">
                            <div class="text-black">
                              خروج از حساب کاربری
                            </div>
                          </div>
                        </div>
                        <div id="tabprofile" class="tab-pane active">
                          <section class="horizontal-list-container mt-3 d-none">
                            <div class="d-flex justify-content-between align-items-center mb-2 px-3">
                              <div class="title">
                                براساس سلیقه شما
                              </div>
                              <a class="text-dark" href="#">نمایش همه <i class="icon-see-more mr-1" /></a>
                            </div>
                            <div class="swiper-container horizontal-list" dir="rtl">
                              <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                  <a href="#" class="horizontal-list-item d-block">
                                    <div class="lazyload-wrapper">
                                      <img class="horizontal-list-img" src="images/thumbnail/thumb1.jpg">
                                    </div>
                                    <div class="p-fs font-weight-normal ellipsis mt-2 text-black">شبی که ماه کامل شد
                                    </div>
                                  </a>
                                </div>
                                <div class="swiper-slide">
                                  <a href="#" class="horizontal-list-item d-block">
                                    <div class="lazyload-wrapper">
                                      <img class="horizontal-list-img" src="images/thumbnail/thumb2.jpg">
                                    </div>
                                    <div class="p-fs font-weight-normal ellipsis mt-2 text-black
                                            "
                                    >شبی که ماه کامل شد</div>
                                  </a>
                                </div>
                                <div class="swiper-slide">
                                  <a href="#" class="horizontal-list-item d-block">
                                    <div class="lazyload-wrapper">
                                      <img class="horizontal-list-img" src="images/thumbnail/thumb1.jpg">
                                    </div>
                                    <div class="p-fs font-weight-normal ellipsis mt-2 text-black">شبی که ماه کامل شد
                                    </div>
                                  </a>
                                </div>
                                <div class="swiper-slide">
                                  <a href="#" class="horizontal-list-item d-block">
                                    <div class="lazyload-wrapper">
                                      <img class="horizontal-list-img" src="images/thumbnail/thumb2.jpg">
                                    </div>
                                    <div class="p-fs font-weight-normal ellipsis mt-2 text-black
                                            "
                                    >شبی که ماه کامل شد</div>
                                  </a>
                                </div>
                                <div class="swiper-slide">
                                  <a href="#" class="horizontal-list-item d-block">
                                    <div class="lazyload-wrapper">
                                      <img class="horizontal-list-img" src="images/thumbnail/thumb1.jpg">
                                    </div>
                                    <div class="p-fs font-weight-normal ellipsis mt-2 text-black">شبی که ماه کامل شد
                                    </div>
                                  </a>
                                </div>
                                <div class="swiper-slide">
                                  <a href="#" class="horizontal-list-item d-block">
                                    <div class="lazyload-wrapper">
                                      <img class="horizontal-list-img" src="images/thumbnail/thumb2.jpg">
                                    </div>
                                    <div class="p-fs font-weight-normal ellipsis mt-2 text-black
                                            "
                                    >شبی که ماه کامل شد</div>
                                  </a>
                                </div>
                                <div class="swiper-slide">
                                  <a href="#" class="horizontal-list-item d-block">
                                    <div class="lazyload-wrapper">
                                      <img class="horizontal-list-img" src="images/thumbnail/thumb1.jpg">
                                    </div>
                                    <div class="p-fs font-weight-normal ellipsis mt-2 text-black">شبی که ماه کامل شد
                                    </div>
                                  </a>
                                </div>
                                <div class="swiper-slide">
                                  <a href="#" class="horizontal-list-item d-block">
                                    <div class="lazyload-wrapper">
                                      <img class="horizontal-list-img" src="images/thumbnail/thumb2.jpg">
                                    </div>
                                    <div class="p-fs font-weight-normal ellipsis mt-2 text-black
                                            "
                                    >شبی که ماه کامل شد</div>
                                  </a>
                                </div>
                                <div class="swiper-slide">
                                  <a href="#" class="horizontal-list-item d-block">
                                    <div class="lazyload-wrapper">
                                      <img class="horizontal-list-img" src="images/thumbnail/thumb1.jpg">
                                    </div>
                                    <div class="p-fs font-weight-normal ellipsis mt-2 text-black">شبی که ماه کامل شد
                                    </div>
                                  </a>
                                </div>
                                <div class="swiper-slide">
                                  <a href="#" class="horizontal-list-item d-block">
                                    <div class="lazyload-wrapper">
                                      <img class="horizontal-list-img" src="images/thumbnail/thumb2.jpg">
                                    </div>
                                    <div class="p-fs font-weight-normal ellipsis mt-2 text-black
                                            "
                                    >شبی که ماه کامل شد</div>
                                  </a>
                                </div>
                                <div class="swiper-slide">
                                  <a href="#" class="horizontal-list-item d-block">
                                    <div class="lazyload-wrapper">
                                      <img class="horizontal-list-img" src="images/thumbnail/thumb1.jpg">
                                    </div>
                                    <div class="p-fs font-weight-normal ellipsis mt-2 text-black">شبی که ماه کامل شد
                                    </div>
                                  </a>
                                </div>
                                <div class="swiper-slide">
                                  <a href="#" class="horizontal-list-item d-block">
                                    <div class="lazyload-wrapper">
                                      <img class="horizontal-list-img" src="images/thumbnail/thumb2.jpg">
                                    </div>
                                    <div class="p-fs font-weight-normal ellipsis mt-2 text-black
                                            "
                                    >شبی که ماه کامل شد</div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section class="container-fluid mt-3">
                            <div class="d-flex align-items-center justify-content-center">
                              <img class="w-full round" src="images/login.jpg">
                            </div>
                          </section>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="header-buttons">
            <nuxt-link to="/app" class="btn btn-second px-lg-4 py-1 ml-1 btn-app">
              {{ $t('new.download_app') }}
            </nuxt-link>
            <b-button v-if="!$auth.loggedIn && $route.name !=='login'" variant="main" class="py-1 px-lg-4" @click="SHOW_MODAL()">
              {{ $t('new.login_register') }}
            </b-button>
            <b-button v-else-if="$route.name !=='login'" variant="main" class="py-1 px-lg-4" @click="logout()">
              {{ $t('nav.logout') }}
            </b-button>
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
      <ul v-if="profile.includes($route.path)" class="container d-md-none category-menu-mobile category-menu-mobile-setting mt-5  pt-md-3 pt-lg-5 p- app_container_pricing_res">
        <li class="mr-3">
          <nuxt-link to="/profile">
            {{ $t('setting.profile') }}
          </nuxt-link>
        </li>
        <li class="mr-3">
          <nuxt-link to="/payments">
            پرداخت ها
          </nuxt-link>
        </li>
        <!--         <li class="mr-3">
          <nuxt-link to="/profile/settings">
            {{ $t('setting.app_setting') }}
          </nuxt-link>
        </li> -->
        <li v-if="checkuser.subscription==1" class="mr-3">
          <nuxt-link to="/profile/plans">
            {{ $t('new.prices') }}
          </nuxt-link>
        </li>
        <!--         <li v-if="$i18n.locale=='fa'" class="mr-3">
          <nuxt-link to="/profile/internet">
            {{ $t('new.internet') }}
          </nuxt-link>
        </li> -->
      </ul>
    </header>

    <Login v-if="!$auth.loggedIn && $route.name !=='login'" :show="showModal" :staticmodal="false" @hide-modal="HIDE_MODAL" />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Login from "../components/Login"

  export default {
  components: {
    Login
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
      categories: ["/genres", "/casts/iranian-actors", "/casts/foreign-actors", "/casts/directors"],
      profile: ["/profile","/payments", "/profile/settings", "/profile/plans", "/profile/internet"],
      banner: ["index", "cast-id", "movie-id", "episode-id", "series-id", "genres-genre", "lists-list"],
      itemmenu: ["callback","movie-download-id","episode-download-id","ekran-id","movie-id", "episode-id", "series-id"]

    }
  },
    computed: {
        ...mapGetters({showModal: "login/showModal"})
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

      this.Nav()
      window.addEventListener('scroll', this.handleScroll)

if(this.$route.params.search)
  this.query=this.$route.params.search


document.body.classList.add("hfixed")


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

        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
             $('.footer-sticky').addClass('d-none')
        } else if ($(window).scrollTop() + $(window).height() < $(document).height() - 100) {
             $('.footer-sticky').removeClass('d-none')
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
        document.body.classList.add(delta > 0 ? 's-c' : 's-h')
        if(delta>0){
          $('#raychatBtn').removeClass('raychatBtn_hide')
        }else{
          $('#raychatBtn').addClass('raychatBtn_hide')
        }
    }, 200)


    let height = $( document ).width()

if(height>780 || $(".trigger-menu-wrapper").hasClass("trigger-menu-wrapper2")===false){


    var scroll = $(window).scrollTop()
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
      async logout() {

        await this.$auth.logout()
        this.$router.go()
        

      }
    },
  }
</script>
