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
        <i class="icon-farsi-logotype" />
      </nuxt-link>
    </div>

    <header id="header" class="page-header">
      <div class="container-fluid trigger-menu-wrapper">
        <div
          class="d-flex justify-content-between align-items-center header trigger-menu"
        >
          <div class="d-flex align-items-center h-full">
            <nuxt-link to="/" class="logo">
              <img src="@/assets/img/logo.svg" alt="">
              <img src="@/assets/img/logotype-fa.svg" alt="">
            </nuxt-link>
            <div class="d-none d-lg-flex align-items-center ml-5 h-full">
              <div class="category">
                <div class="d-flex align-items-center">
                  <i class="icon-categories" />

                  <span class="ml-2">{{ $t('new.categories') }}</span>
                </div>
                <ul class="category-menu">
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

              <nuxt-link to="/profile" class="profile ml-4">
                <i class="fas fa-user-cog" />
                <span>{{ $t('new.profile') }}</span>
              </nuxt-link>
            </div>
          </div>
          <div class="header-buttons">
            <nuxt-link to="/app" class="btn btn-secondary px-lg-4 py-1 ml-1">
              {{ $t('new.download_app') }}
            </nuxt-link>
            <b-button v-if="!$auth.loggedIn && $route.name !=='login'" variant="primary" class="py-1 px-lg-4" @click="showModal=true">
              {{ $t('new.login_register') }}
            </b-button>
            <b-button v-else-if="$route.name !=='login'" variant="primary" class="py-1 px-lg-4" @click="$auth.logout();changeroute();">
              خروج
            </b-button>
          </div>
        </div>
      </div>
    </header>

    <Login v-if="$route.name !=='login'" :show="showModal" :staticmodal="false" @hideModal="HIDE_MODAL" />
  </div>
</template>

<script>
import Login from "../components/Login"

  export default {
  components: {
    Login
  },
  data() {
    return {
      query: null,
      showModal: false
    }
  },
  watch: {
    $route () {
      $(document).ready(function () {
    document.body.classList.remove( "scroll-down" )
  })
    }
    },
    mounted() {
window.onscroll = function () {
   
    
    const tabBar = this.document.getElementById('tab-bar')
    if (this.oldScroll > this.scrollY) {
        tabBar.classList.add('show')
    } else {
        tabBar.classList.remove('show')
        
    }
    this.oldScroll = this.scrollY
}

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

        if (currentScroll == 0) {
            body.classList.remove(scrollUp)

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
            HIDE_MODAL() {
              this.showModal=false
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
            
    },
  }
</script>
