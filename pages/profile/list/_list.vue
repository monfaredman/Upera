<template>
  <div id="checkcontainer">
    <section v-if="data.movies.length" id="slideshow" class="banner">
      <div class="swiper-container showcase main-slideshow">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="row no-gutters">
              <div class="col-md-6 col-lg-8" />
              <div class="col-md-6 col-lg-4 showcase-pic">
                <b-img
                  class="showcase-img d-none d-lg-block"
                  v-bind="{
                    fluidGrow: true,
                    blank: true,
                    blankColor: '#bbb',
                    width: 800,
                    height: 400,
                    show: true,
                  }"
                  :src="
                    'https://thumb.upera.shop/thumb?w=800&h=400&zc=3&q=100&a=t&src=https://cdn.upera.shop/s3/backdrops/' +
                    data.movies[0].backdrop
                  "
                  alt=""
                />
                <b-img
                  class="showcase-img d-lg-none"
                  v-bind="{
                    fluidGrow: true,
                    blank: true,
                    blankColor: '#bbb',
                    width: 400,
                    height: 300,
                    show: true,
                  }"
                  :src="
                    'https://thumb.upera.shop/thumb?w=400&h=300&zc=3&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/' +
                    data.movies[0].backdrop
                  "
                  alt=""
                />

                <!--
                <img class="showcase-img d-none d-lg-block" :src="'https://thumb.upera.shop/thumb?w=800&h=400&zc=3&q=100&a=t&src=https://cdn.upera.shop/s3/backdrops/'+data.movies[0].backdrop" alt="">
                <img class="showcase-img d-lg-none" :src="'https://thumb.upera.shop/thumb?w=400&h=300&zc=3&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+data.movies[0].backdrop" alt=""> -->
              </div>
            </div>
            <div
              class="showcase-thumbnail-wrapper-outter d-flex align-items-center justify-content-between pr-gutter pr-md-3"
            >
              <div class="showcase-thumbnail-wrapper w-full">
                <div class="d-flex h-full align-items-end">
                  <div class="pr-md-4 pr-md-2 showcase-desc-wrapper">
                    <div class="showcase-desc">
                      <div class="h2 text-invert mb-1 mb-md-3">
                        {{ ChooseLang(data.titles_en, data.titles) }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            href="#"
            class="back d-md-none"
            @click.prevent="hasHistory() ? $router.go(-1) : $router.push('/')"
          >
            <img src="@/assets/img/icons/arrow-back.svg" width="30" alt="" />
          </a>
          <a
            href="#"
            class="back2 d-none d-md-block"
            @click.prevent="hasHistory() ? $router.go(-1) : $router.push('/')"
          >
            <img src="@/assets/img/icons/arrow-back2.svg" width="30" alt="" />
          </a>
        </div>
      </div>
    </section>
    <FilterContents
      :show="true"
      :no-top="noTop"
      :savedata="false"
      @execute_content_filtering="execute_content_filtering"
    />
    <div id="episode">
      <div v-if="data.movies.length" id="actor" class="episodes_collection">
        <div class="container-fluid pl-md-4 pr-md-5 mt-3">
          <div class="row">
            <div
              v-for="(item, index) in data.movies"
              :key="index"
              class="col-4 col-xl-1 col-md-2 col-sm-3 mt-2 mt-lg-4"
            >
              <nuxt-link
                :to="{ name: item.type + '-id', params: { id: item.id } }"
                class="actor"
                :class="{ 'is-series': item.type != 'movie' }"
              >
                <b-img
                  v-bind="{
                    fluidGrow: true,
                    blank: true,
                    blankColor: '#bbb',
                    width: 142,
                    height: 212,
                    show: true,
                  }"
                  :src="
                    'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/' +
                    item.poster
                  "
                  :alt="item.name"
                />
                <b-img
                  v-if="item.type != 'movie'"
                  v-bind="{
                    fluidGrow: true,
                    blank: true,
                    blankColor: '#bbb',
                    width: 142,
                    height: 212,
                    show: true,
                  }"
                  :src="
                    'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/' +
                    item.poster
                  "
                  :alt="item.name"
                />
                <b-img
                  v-if="item.type != 'movie'"
                  v-bind="{
                    fluidGrow: true,
                    blank: true,
                    blankColor: '#bbb',
                    width: 142,
                    height: 212,
                    show: true,
                  }"
                  :src="
                    'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/' +
                    item.poster
                  "
                  :alt="item.name"
                />

                <!--                 <img :src="'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                <img v-if="item.type!='movie'" :src="'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                <img v-if="item.type!='movie'" :src="'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name"> -->
                <span
                  v-if="!item.ir && item.persian"
                  class="label label-rounded label-red label-1"
                  >دوبله</span
                >
                <span
                  v-if="!item.ir && !item.persian"
                  class="label label-rounded label-warning label-1"
                  >زیرنویس</span
                >
                <span
                  v-if="item.free && $config.envname == 'upera'"
                  class="label label-blue label-2"
                  >رایگان</span
                >
              </nuxt-link>
              <div class="mt-2">
                <h6 class="mt-2 small font-weight-normal">
                  {{ ChooseLang(item.name, item.name_fa) }}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="container-fluid">
        <div class="text-center my-5">
          <h2>محتوایی جهت نمایش وجود ندارد</h2>
        </div>
      </div>
      <div v-if="distance < 0 && data.last_page > 1" class="text-center p-2">
        <button class="btn-load-more btn btn-main" @click="manualLoad">
          {{ $t('home.load_more') }}
        </button>
      </div>
      <infinite-loading
        v-else-if="data.last_page > 1"
        ref="infiniteLoading"
        :identifier="infiniteId"
        @infinite="infiniteHandler"
      >
        <span slot="no-more" />
        <span slot="no-results" />
      </infinite-loading>
    </div>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import FilterContents from '@/components/FilterContents'
export default {
  components: {
    InfiniteLoading,
    FilterContents,
  },
  async asyncData(context) {
    if (
      context.params.list === 'watchlist' ||
      context.params.list === 'recently' ||
      context.params.list === 'likes' ||
      context.params.list === 'downloads' ||
      context.params.list === 'offer' ||
      context.params.list === 'watched'
    ) {
      let res
      if (context.app.$auth.loggedIn) {
        res = await context.app.$axios.get(
          '/get/profile/get_list/' +
            context.params.list +
            context.store.getters.filtercontents
        )
      } else {
        res = await context.app.$axios.get(
          '/get/profile/get_list/' +
            context.params.list +
            context.store.getters.filtercontents
        )
      }
      res.data.data.titles_en = res.data.data[context.params.list].list
      res.data.data.titles = res.data.data[context.params.list].list_fa
      res.data.data.movies = res.data.data[context.params.list].data
      res.data.data.last_page = res.data.data[context.params.list].last_page
      res.data.data.per_page = res.data.data[context.params.list].per_page

      res.data.data[context.params.list] = null

      return { data: res.data.data }
    } else {
      return context.redirect('/404')
    }
  },
  data() {
    return {
      data: {},
      page: 1,
      infiniteId: +new Date(),
      noTop: false,
      distance: -Infinity,
      userApi: '/get/profile/get_list/' + this.$route.params.list,
      ghostApi: '/get/profile/get_list/' + this.$route.params.list,
    }
  },
  head() {
    return { title: this.ChooseLang(this.data.titles_en, this.data.titles) }
  },
  mounted() {
    if (!this.data.movies.length) {
      this.noTop = true
    }
  },
  methods: {
    ChooseLang(en, fa) {
      if (fa && this.$i18n.locale == 'fa') return fa
      else return en
    },
    infiniteHandler($state) {
      var apiurl
      if (this.$auth.loggedIn) {
        apiurl = this.userApi
      } else {
        apiurl = this.ghostApi
      }
      this.$axios
        .get(apiurl + this.filtercontents, { params: { page: this.page + 1 } })
        .then((response) => {
          if (response.status === 200) {
            if (response.data.data[this.$route.params.list] != null) {
              response.data.data.movies =
                response.data.data[this.$route.params.list].data
              response.data.data.last_page =
                response.data.data[this.$route.params.list].last_page
              response.data.data.per_page =
                response.data.data[this.$route.params.list].per_page
              if (response.data.data.movies.length) {
                this.data.movies = this.data.movies.concat(
                  response.data.data.movies
                )
                if (response.data.data.last_page == this.page) $state.complete()
                else $state.loaded()
              } else {
                $state.complete()
              }
            } else {
              $state.complete()
            }
          }
        })
      this.page = this.page + 1
    },
    manualLoad() {
      this.distance = 100
      this.$nextTick(() => {
        this.$refs.infiniteLoading.attemptLoad()
      })
    },
    hasHistory() {
      return window.history.length > 2
    },

    execute_content_filtering() {
      this.$nuxt.$loading.start()
      this.$store.dispatch('filter/FILTER_LOADING')
      var apiurl
      if (this.$auth.loggedIn) {
        apiurl = this.userApi
      } else {
        apiurl = this.ghostApi
      }
      this.$axios.get(apiurl + this.filtercontents).then((response) => {
        if (response.status === 200) {
          if (response.data.data[this.$route.params.list] != null) {
            response.data.data.movies =
              response.data.data[this.$route.params.list].data
            response.data.data.last_page =
              response.data.data[this.$route.params.list].last_page
            response.data.data.per_page =
              response.data.data[this.$route.params.list].per_page
            if (response.data.data.movies.length) {
              this.data.movies = response.data.data.movies

              this.data.last_page = response.data.data.last_page
              this.data.per_page = response.data.data.per_page
              this.page = 1
              this.infiniteId += 1
              this.noTop = false
            } else {
              this.data.movies = []
              this.page = 1
              this.data.last_page = 1
              this.data.per_page = 1
              this.infiniteId += 1
              this.noTop = true
            }
          } else {
            this.data.movies = []
            this.page = 1
            this.data.last_page = 1
            this.data.per_page = 1
            this.infiniteId += 1
            this.noTop = true
          }
        }
        this.$store.dispatch('filter/CLEAN_FILTER_LOADING')
        this.$nuxt.$loading.finish()
      })
    },
  },
}
</script>
