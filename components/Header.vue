<template>
  <div>
    <div id="tab-bar" class="menu-bar d-lg-none">
      <nuxt-link to="/profile" style="opacity: 0.36;">
        <i class="icon-profile-setting" />
      </nuxt-link>
      <nuxt-link to="/genres" style="opacity: 0.36;">
        <i class="icon-categories" />
      </nuxt-link>
      <nuxt-link to="/search" style="opacity: 0.36;">
        <i class="icon-search" />
      </nuxt-link>
      <nuxt-link to="/" style="font-size: 1.97em;">
        <i class="icon-upera-fa-logotype" />
      </nuxt-link>
    </div>

    <header id="header" class="page-header">
      <div class="container-fluid trigger-menu-wrapper">
        <div
          class="d-flex justify-content-between align-items-center header trigger-menu"
        >
          <div class="d-flex align-items-center h-full">
            <nuxt-link v-if="categories.includes($route.path) || profile.includes($route.path)" to="/" class="logo logo_another_pages">
              <i class="icon-upera-fa-logotype" />
              <i class="icon-upera-logo" />
            </nuxt-link>

            <nuxt-link v-else to="/" class="logo">
              <img src="@/assets/img/logo.svg" alt="">
            </nuxt-link>
            <div class="d-none d-lg-flex align-items-center ml-5 h-full">
              <div class="category" :class="{ 'open': categoriesNav }" @mouseover="categoriesHover()" @mouseleave="categoriesleave()">
                <div class="d-flex align-items-center">
                  <i class="icon-categories" />
                  <span class="ml-2">{{ $t('new.categories') }}</span>
                </div>
                <ul v-if="!profileNav" class="category-menu">
                  <i class="fas fa-angle-down angle" />
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
              <div class="search ml-4">
                <b-form-input v-model="query"
                              :placeholder="$t('new.search')" type="text"
                              @keyup.enter="SEARCH"
                />
                <i class="fas fa-search" @click="SEARCH" />
              </div>

              <div class="category" :class="{ 'open': profileNav }">
                <nuxt-link to="/profile" class="profile ml-4">
                  <i class="fas fa-user-cog" />

                  <span>{{ $t('new.profile') }}</span>
                </nuxt-link>
                <ul v-if="profileNav" class="category-menu profile_menu">
                  <i class="fas fa-angle-down angle" />
                  <li>
                    <nuxt-link to="/profile">
                      {{ $t('setting.profile') }}
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/profile/settings">
                      {{ $t('setting.app_setting') }}
                    </nuxt-link>
                  </li>
                  <li v-if="checkuser.subscription==1">
                    <nuxt-link to="/profile/plans">
                      {{ $t('new.prices') }}
                    </nuxt-link>
                  </li>
                  <li v-if="$i18n.locale=='fa'">
                    <nuxt-link to="/profile/internet">
                      {{ $t('new.internet') }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="header-buttons">
            <nuxt-link to="/app" class="btn btn-secondary px-lg-4 py-1 ml-1">
              {{ $t('new.download_app') }}
            </nuxt-link>
            <b-button v-if="!$auth.loggedIn && $route.name !=='login'" variant="primary" class="py-1 px-lg-4" @click="SHOW_MODAL()">
              {{ $t('new.login_register') }}
            </b-button>
            <b-button v-else-if="$route.name !=='login'" variant="primary" class="py-1 px-lg-4" @click="$store.dispatch('logout');$auth.logout();refresh();">
              {{ $t('nav.logout') }}
            </b-button>
          </div>
        </div>
      </div>
      <ul v-if="categories.includes($route.path)" class="category-menu-mobile mt-5">
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
      <ul v-if="profile.includes($route.path)" class="container category-menu-mobile category-menu-mobile-setting mt-5  pt-md-3 pt-lg-5 p- app_container_pricing_res">
        <li class="mr-3">
          <nuxt-link to="/profile">
            {{ $t('setting.profile') }}
          </nuxt-link>
        </li>
        <li class="mr-3">
          <nuxt-link to="/profile/settings">
            {{ $t('setting.app_setting') }}
          </nuxt-link>
        </li>
        <li v-if="checkuser.subscription==1" class="mr-3">
          <nuxt-link to="/profile/plans">
            {{ $t('new.prices') }}
          </nuxt-link>
        </li>
        <li v-if="$i18n.locale=='fa'" class="mr-3">
          <nuxt-link to="/profile/internet">
            {{ $t('new.internet') }}
          </nuxt-link>
        </li>
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
    computed: {
        ...mapGetters({showModal: "login/showModal"})
    },
  data() {
    return {
      query: null,
      categoriesNav: false,
      profileNav: false,
      categories: ["/genres", "/casts/iranian-actors", "/casts/foreign-actors", "/casts/directors"],
      profile: ["/profile", "/profile/settings", "/profile/plans", "/profile/internet"]

    }
  },
  watch: {
    '$route.path': function() {
      this.Nav()

      document.body.classList.remove("scroll-up")
      document.body.classList.remove("scroll-down")
    }
    },
    mounted() {

      this.Nav()

if(this.$route.params.search)
  this.query=this.$route.params.search
// window.onscroll = function () {
   
    
//     const tabBar = this.document.getElementById('tab-bar')
//     if (this.oldScroll > this.scrollY) {
//         tabBar.classList.add('show')
//     } else {
//         tabBar.classList.remove('show')
        
//     }
//     this.oldScroll = this.scrollY
// }


$(document).ready(function () {
  
     const body = document.body
    const triggerMenu = document.querySelector(".page-header .trigger-menu")
    const scrollUp = "scroll-up"
    const scrollDown = "scroll-down"
    let lastScroll = 0

    triggerMenu.addEventListener("click", () => {
        body.classList.toggle("menu-open")
    })

    window.addEventListener("scroll", () => {
      
        const currentScroll = window.pageYOffset

        if (currentScroll <= 10) {
            body.classList.remove(scrollUp)
            body.classList.remove(scrollDown)

            return
        }

        if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
            // down
            body.classList.remove(scrollUp)
            body.classList.add(scrollDown)
        } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
            // up
            body.classList.remove(scrollDown)
            body.classList.add(scrollUp)
        }
        lastScroll = currentScroll
    })


})


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
        this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null})
      }
    },
  }
</script>
