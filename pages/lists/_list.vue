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
                    THUMB_BASE +
                    `?w=800&h=600&fmt=webp&q=90&a=t&src=${CDN_BACKDROPS_1}/` +
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
                    THUMB_BASE +
                    `?w=400&h=300&fmt=webp&q=90&a=c&src=${CDN_BACKDROPS_1}/` +
                    data.movies[0].backdrop
                  "
                  alt=""
                />
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
                        {{ chooseLang(data.titles_en, data.titles) }}
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
      :show="showfilter"
      :no-top="noTop"
      :show-genres="true"
      :list-genre="$route.params.list"
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
              :class="gridColClasses(item)"
              class="mt-2 mt-lg-4"
            >
              <MediaCard
                :item="item"
                :variant="
                  item.type === 'video' || item.type === 'live'
                    ? 'backdrop'
                    : 'poster'
                "
                :size="
                  item.type === 'video' || item.type === 'live'
                    ? SIZES.backdropGrid
                    : SIZES.posterGrid
                "
                :link-builder="buildItemRoute"
                layout="grid"
                :link-base-class="
                  item.type === 'video' || item.type === 'live' ? '' : 'actor'
                "
                :show-badges="true"
                :add-series-class="true"
              />
              <div class="mt-2">
                <h6 class="mt-2 small font-weight-normal">
                  {{ chooseLang(item.name, item.name_fa) }}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="container-fluid">
        <div class="text-center py-5">
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
import MediaCard from '@/components/MediaCard'

const API_BASE = '/ghost/get/get_listV3/'
const THUMB_BASE = 'https://thumb.upera.shop/thumb'
const CDN_BACKDROPS_1 = 'https://cdn.upera.shop/s3/backdrops'

const SIZES = Object.freeze({
  backdropGrid: { w: 364, h: 190 },
  posterGrid: { w: 142, h: 212 },
})

export default {
  components: {
    InfiniteLoading,
    FilterContents,
    MediaCard,
  },
  async asyncData(context) {
    const res = await context.app.$axios.get(
      API_BASE + context.params.list + context.store.getters.filtercontents
    )

    const normalized = normalizeListResponse(res?.data?.data)
    return {
      data: normalized,
      showfilter: normalized.filterable,
    }

    function normalizeListResponse(payload) {
      const empty = {
        titles_en: '',
        titles: '',
        movies: [],
        last_page: 1,
        per_page: 1,
        filterable: false,
      }
      if (!payload) return empty
      if (payload.list == null) return { ...empty, movies: [] }

      const { list } = payload
      return {
        titles_en: list.list,
        titles: list.list_fa,
        movies: list.data || [],
        last_page: list.last_page || 1,
        per_page: list.per_page || 1,
        filterable: !!list.filterable,
      }
    }
  },
  data() {
    return {
      data: {},
      page: 1,
      showfilter: true,
      noTop: false,
      infiniteId: +new Date(),
      distance: -Infinity,
      SIZES,
      THUMB_BASE,
      CDN_BACKDROPS_1,
    }
  },
  head() {
    return { title: this.pageTitle }
  },
  computed: {
    ghostApi() {
      return API_BASE + this.$route.params.list
    },
    filtercontents() {
      return this.$store.getters.filtercontents
    },
    pageTitle() {
      return this.chooseLang(this.data.titles_en, this.data.titles)
    },
  },
  mounted() {
    if (!this.data.movies.length) {
      this.noTop = true
    }
  },
  methods: {
    chooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa
      return en
    },
    buildItemRoute(item) {
      return { name: `${item.type}-id`, params: { id: item.id } }
    },
    gridColClasses(item) {
      const isVideo = item.type === 'video' || item.type === 'live'
      return isVideo
        ? ['col-12', 'col-xl-3', 'col-md-4', 'col-sm-6']
        : ['col-4', 'col-xl-1', 'col-md-2', 'col-sm-3']
    },
    normalizeAppendPayload(response) {
      const list = response?.data?.data?.list
      if (!list)
        return {
          movies: [],
          last_page: this.page,
          per_page: this.data.per_page,
        }
      return {
        movies: list.data || [],
        last_page: list.last_page || this.data.last_page,
        per_page: list.per_page || this.data.per_page,
      }
    },
    infiniteHandler($state) {
      const apiurl = this.ghostApi
      const nextPage = this.page + 1

      this.$axios
        .get(apiurl + this.filtercontents, { params: { page: nextPage } })
        .then((response) => {
          const { movies, last_page, per_page } =
            this.normalizeAppendPayload(response)
          if (movies.length) {
            this.data.movies = this.data.movies.concat(movies)
            this.data.last_page = last_page
            this.data.per_page = per_page

            this.page = nextPage
            if (last_page === this.page) $state.complete()
            else $state.loaded()
          } else {
            $state.complete()
          }
        })
        .catch(() => {
          $state.complete()
        })
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

      const apiurl = this.ghostApi

      this.$axios
        .get(apiurl + this.filtercontents)
        .then((response) => {
          const list = response?.data?.data?.list
          if (list && Array.isArray(list.data) && list.data.length) {
            this.data.movies = list.data
            this.data.last_page = list.last_page || 1
            this.data.per_page = list.per_page || 1
            this.showfilter = list.sortable == 1
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
        })
        .finally(() => {
          this.$store.dispatch('filter/CLEAN_FILTER_LOADING')
          this.$nuxt.$loading.finish()
        })
    },
  },
}
</script>

<style>
#episode #feature .feature {
  align-items: baseline;
}
#episode #feature .feature .title {
  font-size: 3em !important;
  color: black;
  text-shadow: 2px 2px #fff;
}
</style>
