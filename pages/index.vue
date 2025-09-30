<template>
  <div>
    <section v-if="sliders && sliders.length" id="slideshow">
      <div class="swiper-container showcase main-slideshow">
        <VueSlickCarousel
          :key="swiperKey"
          ref="carousel"
          v-bind="swiperOption3"
          class="swiper-wrapper"
          :class="{ 'dir-ltr': sliders.length == 1 }"
        >
          // Adding manual backdrops
          <!--
          <template v-for="(mediaItem, index) in mediaItems">
            <MediaCard
              :key="index"
              :item="mediaItem"
              :variant="mediaItem.variant"
              :size="mediaItem.size"
              :link-builder="buildIdRoute"
            />
          </template>
          -->

          <div
            v-for="(item, index) in sliders"
            :key="index"
            class="swiper-slide"
          >
            <div class="row no-gutters">
              <div class="col-md-6 col-lg-7 showcase-pic">
                <template v-if="item.media_type === 'video2'">
                  <video
                    class="showcase-img d-none d-lg-block"
                    autoplay
                    loop
                    playsinline
                    :muted="item.muted"
                    :src="item.video_src"
                    :poster="item.image_src"
                    style="width: 1120px; height: 576px; object-fit: cover"
                    @loadeddata="item.is_loading = false"
                  />
                  <video
                    class="showcase-img d-lg-none"
                    autoplay
                    loop
                    playsinline
                    :muted="item.muted"
                    :src="item.video_src"
                    :poster="item.image_mobile_src"
                    style="width: 375px; height: 300px; object-fit: cover"
                    @loadeddata="item.is_loading = false"
                  />
                  <div
                    v-if="item.is_loading"
                    class="video-loading-spinner"
                    style="
                      position: absolute;
                      inset: 0;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      z-index: 10;
                    "
                  >
                    Loading…
                  </div>
                </template>
                <template v-else>
                  <b-img
                    blank
                    blank-color="#bbb"
                    width="1120"
                    height="576"
                    show
                    class="showcase-img d-none d-lg-block"
                    :src="item.image_src"
                    :alt="item.name"
                  />
                  <b-img
                    fluid-grow
                    blank
                    blank-color="#bbb"
                    width="375"
                    height="300"
                    show
                    class="showcase-img d-lg-none"
                    :src="item.image_mobile_src"
                    :alt="item.name"
                  />
                </template>
              </div>
              <div class="col-md-6 col-lg-5" />
            </div>
            <div
              class="showcase-thumbnail-wrapper-outter d-flex align-items-center justify-content-between pr-gutter pr-md-3"
            >
              <div class="showcase-thumbnail-wrapper w-full">
                <div class="d-flex h-full align-items-end">
                  <div class="pr-md-4 pr-md-2 showcase-desc-wrapper">
                    <div class="showcase-desc">
                      <div
                        v-if="item.type != 'episode'"
                        class="title text-invert mb-1 mb-md-3"
                      >
                        <nuxt-link
                          :to="{
                            name: item.type + '-id',
                            params: { id: item.id },
                          }"
                        >
                          {{ ChooseLang(item.name, item.name_fa) }}
                        </nuxt-link>
                      </div>
                      <div v-else class="title text-invert mb-1 mb-md-3">
                        <nuxt-link
                          :to="{
                            name: item.type + '-id',
                            params: { id: item.id },
                          }"
                        >
                          {{ ChooseLang(item.name, item.name_fa)
                          }}<span
                            v-if="item.season_number > 1"
                            class="show-mobile"
                          >
                            {{ item.season_number }}</span
                          >
                        </nuxt-link>
                      </div>
                      <div
                        v-if="item.type == 'episode'"
                        class="p-fs-small text-invert mb-1 mb-md-3 hide-mobile font-weight-normal"
                      >
                        {{ $t('show.season') }}{{ item.season_number }} -
                        {{ $t('show.episode') }} {{ item.episode_number }}
                      </div>
                      <div class="text-invert mb-1 mb-md-3">
                        <nuxt-link
                          v-for="(persianName, englishName) in item.genre"
                          :key="englishName"
                          :to="{
                            name: 'lists-list',
                            params: { list: englishName },
                          }"
                          class="tag"
                        >
                          {{ persianName }}
                        </nuxt-link>
                      </div>
                      <div
                        v-if="item.dubbed"
                        class="text-invert mb-1 mb-md-3 hide-mobile"
                      >
                        دوبله فارسی
                      </div>
                      <div
                        v-else-if="item.subbed"
                        class="text-invert mb-1 mb-md-3 hide-mobile"
                      >
                        زیرنویس فارسی
                      </div>
                    </div>
                    <div class="showcase-button-wrapper">
                      <nuxt-link
                        v-if="item.presale"
                        :to="{
                          name: item.type + '-id',
                          params: { id: item.id },
                        }"
                        class="btn btn-main"
                      >
                        به زودی
                      </nuxt-link>
                      <nuxt-link
                        v-else-if="item.type != 'series'"
                        :to="{
                          name: item.type + '-show-id',
                          params: { id: item.id },
                        }"
                        class="btn btn-main"
                      >
                        نمایش
                        <span class="hide-mobile hide-tablet"
                          ><span v-if="item.type == 'movie'">فیلم</span
                          ><span v-else>این قسمت سریال</span></span
                        >
                      </nuxt-link>

                      <nuxt-link
                        v-else
                        :to="{ name: 'series-id', params: { id: item.id } }"
                        class="btn btn-main"
                      >
                        قسمت ها
                      </nuxt-link>

                      <nuxt-link
                        :to="{
                          name: item.type + '-id',
                          params: { id: item.id },
                        }"
                        class="btn btn-dark btn-download ml-md-2 hide-mobile"
                      >
                        توضیحات
                        <i class="icon-info" />
                      </nuxt-link>

                      <nuxt-link
                        :to="{
                          name: item.type + '-id',
                          params: { id: item.id },
                        }"
                        class="text-invert show-mobile"
                      >
                        <i class="icon-info" />
                        <div v-if="item.type != 'episode'">توضیحات</div>
                        <div v-else>قسمت {{ item.episode_number }}</div>
                      </nuxt-link>
                    </div>
                  </div>
                  <div class="thumbnail hide-mobile">
                    <nuxt-link
                      :to="{ name: item.type + '-id', params: { id: item.id } }"
                    >
                      <b-img
                        v-bind="{
                          fluidGrow: true,
                          blank: true,
                          blankColor: '#bbb',
                          width: 207,
                          height: 307,
                          show: true,
                        }"
                        :src="item.poster"
                        :alt="item.name"
                        class="thumbnail"
                      />
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
        <div v-if="sliders.length > 1" dir="rtl">
          <div
            class="swiper-next swiper-button-next main-slideshow-next"
            @click="showPrev"
          />
          <div
            class="swiper-prev swiper-button-prev main-slideshow-prev"
            @click="showNext"
          />
        </div>
      </div>
    </section>

    <FilterContents
      :show="true"
      :show-genres="true"
      :savedata="false"
      :no-top="!(sliders && sliders.length > 0)"
      @execute_content_filtering="execute_content_filtering"
    />

    <div v-if="checkuser.show_lives && lives && lives.data.length">
      <HorizontalList
        :title-en="lives.list_en"
        :title-fa="lives.list_fa"
        :show-all-route="{ name: 'lists-list', params: { list: lives.list } }"
        :items="lives.data"
        instance-name="livesSwip"
        :options="SWIPER_OPTION_BACKDROP"
        card-variant="backdrop"
        :size="{ w: 364, h: 190 }"
        :link-builder="buildIdRoute"
        :show-badges="false"
        :add-series-class="false"
      />
    </div>

    <div v-if="checkuser.show_ugcs && ugcs && ugcs.data.length">
      <div v-for="(sec, rootindex) in ugcs.data" :key="rootindex">
        <HorizontalList
          :title-en="sec.title_en"
          :title-fa="sec.title_fa"
          :show-all-route="{ name: 'lists-list', params: { list: sec.list } }"
          :items="sec.data"
          :instance-name="`ugcs${rootindex + 9000}`"
          :options="SWIPER_OPTION_BACKDROP"
          card-variant="backdrop"
          :size="{ w: 364, h: 190 }"
          :link-builder="buildShowIdRoute"
          :show-badges="false"
          :add-series-class="false"
        />
      </div>
    </div>

    <div v-if="offer">
      <HorizontalList
        :title-en="offer.list_en"
        :title-fa="offer.list_fa"
        :show-all-route="{
          name: 'lists-list',
          params: { list: offer.list.toLowerCase() },
        }"
        :items="offer.data"
        instance-name="offerSwip"
        :options="SWIPER_OPTION_POSTER"
        card-variant="poster"
        :size="{ w: 142, h: 212 }"
        :link-builder="buildIdRoute"
        :show-badges="true"
      />
    </div>

    <section
      v-if="recently !== null"
      id="watching"
      class="horizontal-list-container mt-lg-4 pt-5"
    >
      <div class="d-flex align-items-center justify-content-between w-full">
        <h4 class="font-weight-bold text-nowrap mr-5 px-5 in-watching">
          {{ ChooseLang(recently.list_en, recently.list_fa) }}
        </h4>
        <div
          v-swiper:watchSwip="swiperOption2"
          class="swiper-container watching-slider"
        >
          <div class="swiper-wrapper">
            <div
              v-for="(item, index) in recently.recently"
              :key="index"
              class="swiper-slide"
            >
              <nuxt-link
                v-if="item.type == 'movie'"
                :to="{ name: 'movie-show-id', params: { id: item.id } }"
              >
                <b-img
                  v-bind="{
                    fluidGrow: true,
                    blank: true,
                    blankColor: '#bbb',
                    width: 364,
                    height: 190,
                    show: true,
                  }"
                  :src="
                    'https://thumb.upera.shop/thumb?w=364&h=190&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/' +
                    item.backdrop
                  "
                  :alt="item.name"
                />
              </nuxt-link>
              <nuxt-link
                v-else-if="item.type == 'episode'"
                :to="{ name: 'episode-show-id', params: { id: item.id } }"
              >
                <b-img
                  v-bind="{
                    fluidGrow: true,
                    blank: true,
                    blankColor: '#bbb',
                    width: 364,
                    height: 190,
                    show: true,
                  }"
                  :src="
                    'https://thumb.upera.shop/thumb?w=364&h=190&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/' +
                    item.backdrop
                  "
                  :alt="item.name"
                />
              </nuxt-link>
              <nuxt-link
                v-else
                :to="{ name: 'series-show-id', params: { id: item.id } }"
              >
                <b-img
                  v-bind="{
                    fluidGrow: true,
                    blank: true,
                    blankColor: '#bbb',
                    width: 364,
                    height: 190,
                    show: true,
                  }"
                  :src="
                    'https://thumb.upera.shop/thumb?w=364&h=190&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/' +
                    item.backdrop
                  "
                  :alt="item.name"
                />
              </nuxt-link>
              <div class="progress">
                <div
                  class="progress-bar"
                  :style="
                    'width: ' +
                    (item.current_time / item.duration_time) * 100 +
                    '%'
                  "
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div v-if="data.data">
      <div v-for="(list, rootindex) in data.data" :key="rootindex">
        <div v-if="list.style == 'occasion' && list.data.length > 0">
          <section id="special" class="mb-5">
            <div class="container-fluid">
              <div
                class="special d-flex flex-column justify-content-start align-items-start align-items-lg-center flex-lg-row"
              >
                <h4
                  class="font-weight-bold text-nowrap mr-lg-5 mb-4 mb-lg-0 special-title"
                >
                  {{ ChooseLang(list.list_en, list.list_fa) }}
                </h4>
                <div class="position-relative w-full">
                  <div id="special-slides" class="special-slides">
                    <div
                      v-for="(item, index) in list.data"
                      :key="index"
                      class="special-slide"
                      :class="{ active: index == 0 }"
                    >
                      <div class="d-flex justify-content-start w-full special">
                        <img
                          class="special-image spec-1"
                          :src="
                            'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/' +
                            item.poster
                          "
                          :alt="item.name"
                        />
                        <div
                          class="special-content d-flex flex-column justify-content-between justify-content-lg-around align-items-end w-full"
                        >
                          <div class="d-flex justify-content-between w-full">
                            <div class="ml-2 ml-lg-5">
                              <h6 class="font-weight-bold mb-0 d-lg-none">
                                {{
                                  truncate(
                                    ChooseLang(item.name, item.name_fa),
                                    15
                                  )
                                }}
                              </h6>
                              <h5
                                class="font-weight-bold mb-0 d-none d-lg-block"
                              >
                                {{ ChooseLang(item.name, item.name_fa) }}
                              </h5>
                              <p class="mt-1 font-weight-normal">
                                <span
                                  v-for="(genre, index2) in item.genre.split(
                                    ','
                                  )"
                                  :key="index2"
                                >
                                  {{
                                    item.new_genres[genre.toLowerCase()] ||
                                    genre
                                  }}
                                  <span
                                    v-if="
                                      index2 + 1 < item.genre.split(',').length
                                    "
                                  >
                                    |
                                  </span>
                                </span>
                              </p>
                            </div>
                            <div
                              class="d-flex flex-column justify-content-center align-items-center small"
                            >
                              <nuxt-link
                                :to="{
                                  name: 'lists-list',
                                  params: { list: list.occasion },
                                }"
                              >
                                {{ $t('new.show_all') }}
                              </nuxt-link>
                              <img
                                src="@/assets/img/more.svg"
                                height="3"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="d-flex justify-content-between w-full">
                            <p class="d-lg-none">
                              {{
                                truncate(
                                  ChooseLang(item.overview, item.overview_fa),
                                  60
                                )
                              }}
                            </p>
                            <p
                              class="d-none d-lg-block text-justify ml-2 ml-lg-5"
                            >
                              {{ ChooseLang(item.overview, item.overview_fa) }}
                            </p>
                          </div>

                          <nuxt-link
                            v-if="item.type == 'movie'"
                            :to="{ name: 'movie-id', params: { id: item.id } }"
                            class="show-btn small"
                          >
                            <span>نمایش</span>
                            <img
                              class="ml-2"
                              src="@/assets/img/play.svg"
                              alt=""
                            />
                          </nuxt-link>
                          <nuxt-link
                            v-else-if="item.type == 'episode'"
                            :to="{
                              name: 'episode-id',
                              params: { id: item.id },
                            }"
                            class="show-btn small"
                          >
                            <span>نمایش</span>
                            <img
                              class="ml-2"
                              src="@/assets/img/play.svg"
                              alt=""
                            />
                          </nuxt-link>
                          <nuxt-link
                            v-else
                            :to="{ name: 'series-id', params: { id: item.id } }"
                            class="show-btn small"
                          >
                            <span>نمایش</span>
                            <img
                              class="ml-2"
                              src="@/assets/img/play.svg"
                              alt=""
                            />
                          </nuxt-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div v-else-if="list.data.length > 0">
          <HorizontalList
            :title-en="list.list_en"
            :title-fa="list.list_fa"
            :show-all-route="{
              name: 'lists-list',
              params: { list: list.list.toLowerCase() },
            }"
            :items="list.data"
            :instance-name="String(rootindex)"
            :options="SWIPER_OPTION_POSTER"
            card-variant="poster"
            :size="{ w: 142, h: 212 }"
            :link-builder="buildIdRoute"
            :show-badges="true"
          />
        </div>
      </div>
    </div>

    <div v-else-if="!nocontent" class="d-flex align-items-center">
      <b-spinner class="ml-auto" />
    </div>
    <div v-if="nocontent" class="container-fluid">
      <div class="text-center my-5">
        <h2>محتوایی جهت نمایش وجود ندارد</h2>
      </div>
    </div>
    <client-only>
      <infinite-loading
        v-if="data.last_page > 1"
        :identifier="infiniteId"
        @infinite="infiniteHandler"
      >
        <span slot="no-more" />
        <span slot="no-results" />
      </infinite-loading>
    </client-only>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import FilterContents from '@/components/FilterContents'
import HorizontalList from '@/components/HorizontalList'
// import MediaCard from '@/components/MediaCard'

const SWIPER_OPTION_POSTER = {
  spaceBetween: 10,
  slidesPerView: 3.3,
  grabCursor: true,
  setWrapperSize: true,
  threshold: 2,
  countdown: {},
  breakpoints: {
    200: { slidesPerView: 2.5 },
    420: { slidesPerView: 3.5 },
    768: { slidesPerView: 4.5 },
    992: { slidesPerView: 5.5 },
    1024: { slidesPerView: 6.5 },
    1200: { slidesPerView: 7 },
    1420: { slidesPerView: 8 },
    1670: { slidesPerView: 9 },
  },
}

const SWIPER_OPTION_BACKDROP = {
  slidesPerView: 2.5,
  spaceBetween: 10,
  grabCursor: true,
  watchOverflow: true,
  threshold: 2,
  breakpoints: {
    320: { slidesPerView: 1.5 },
    768: { slidesPerView: 2.5 },
    992: { slidesPerView: 2.5 },
    1024: { slidesPerView: 3.5 },
    1420: { slidesPerView: 4.5 },
    1670: { slidesPerView: 4.5 },
  },
}

const SLICK_MAIN_OPTIONS = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  touchThreshold: 10,
  autoplay: true,
}

export default {
  components: {
    InfiniteLoading,
    FilterContents,
    HorizontalList,
    // MediaCard,
  },
  async asyncData(context) {
    try {
      const filter = context.store.getters.filtercontents
      const offerRes = await context.app.$axios.get('/get/offer' + filter)
      return { data: {}, offer: offerRes.data }
    } catch (error) {
      console.error('Error fetching offer in asyncData:', error)
      return { data: {}, offer: null }
    }
  },
  data() {
    return {
      data: {},
      // mediaItems: [
      //   {
      //     backdrop: 'iran.jpg',
      //     name: 'Iran Showcase',
      //     name_fa: 'نمایش ایران',
      //     type: 'movie',
      //     size: { w: 1120, h: 576 },
      //     variant: 'backdrop',
      //     cdnType: 2,
      //     mobileSrc: 'iran2.png',
      //   },
      // ],
      recently: null,
      offer: null,
      lives: null,
      ugcs: null,
      page: 1,
      infiniteId: +new Date(),
      swiperKey: +new Date(),
      distance: -Infinity,
      nocontent: false,
      ghostApi: '/getV2/discover',
      SWIPER_OPTION_POSTER,
      SWIPER_OPTION_BACKDROP,
      swiperOption3: SLICK_MAIN_OPTIONS,
      swiperOption2: SWIPER_OPTION_BACKDROP,
    }
  },
  computed: {
    sliders() {
      return this.$store.state.slider.sliders
    },
  },
  destroyed() {
    if (this.data.occasions != null) {
      let specials = document.getElementsByClassName('special-slides')
      let k = specials.length
      if (k) {
        window.removeEventListener('resize', this.specialsize)
      }
    }
  },
  async mounted() {
    await this.$store.dispatch('slider/fetchSlider', {
      filtercontents: this.filtercontents,
    })
    this.get_recently()
    this.fetchDiscoverData()

    if (this.checkuser.show_lives === 1) {
      try {
        const livesRes = await this.$axios.get(
          '/get/lives?ref=' + this.checkuser.ref
        )
        this.lives = livesRes.data
      } catch (e) {
        console.error('fetch lives failed', e)
      }
    }

    if (this.checkuser.show_ugcs === 1) {
      try {
        const ugcsRes = await this.$axios.get(
          '/get/ugcs?ref=' + this.checkuser.ref
        )
        this.ugcs = ugcsRes.data
      } catch (e) {
        console.error('fetch ugcs failed', e)
      }
    }
  },
  methods: {
    ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa
      if (!en) return fa || ''
      return en.charAt(0).toUpperCase() + en.slice(1)
    },
    truncate(string, value) {
      if (!string) return ''
      return string.length > value ? string.substring(0, value) + '...' : string
    },
    buildIdRoute(item) {
      return { name: item.type + '-id', params: { id: item.id } }
    },
    buildShowIdRoute(item) {
      return { name: item.type + '-show-id', params: { id: item.id } }
    },
    async get_recently() {
      try {
        if (!this.$auth.loggedIn) {
          this.recently = null
          return
        }
        const apiurl = '/get/recently'
        const { data, status } = await this.$axios.get(
          apiurl + this.filtercontents
        )
        if (status === 200) {
          this.recently = data.data
          this.$nextTick(() => {
            const watching = document.getElementById('watching')
            if (watching && this.watchSwip) {
              this.watchSwip.on('reachBeginning', () => {
                watching.classList.remove('swipe')
              })
              this.watchSwip.on('fromEdge', () => {
                watching.classList.add('swipe')
              })
            }
          })
        }
      } catch (error) {
        console.error('get_recently failed:', error)
      }
    },
    async fetchDiscoverData() {
      try {
        const response = await this.$axios.get(
          this.ghostApi + this.filtercontents
        )
        if (response.status === 200) {
          this.data = response.data.data
          if (!this.data.data.length) this.nocontent = true
        }
      } catch (error) {
        console.error('Error fetching discover:', error)
      }
    },
    showNext() {
      this.$refs.carousel.next()
    },
    showPrev() {
      this.$refs.carousel.prev()
    },
    async execute_content_filtering() {
      this.$nuxt.$loading.start()
      this.$store.dispatch('filter/FILTER_LOADING')

      const requests = []

      requests.push(
        this.$store.dispatch('slider/fetchSlider', {
          filtercontents: this.filtercontents,
          loadagain: 1,
        })
      )

      requests.push(
        this.$axios.get('/get/offer' + this.filtercontents).then((response) => {
          if (response.status === 200) this.offer = response.data
        })
      )

      if (this.$auth.loggedIn) {
        requests.push(
          this.$axios
            .get('/get/recently' + this.filtercontents)
            .then((response) => {
              if (response.status === 200) {
                this.recently = response.data.data
                this.$nextTick(() => {
                  const watching = document.getElementById('watching')
                  if (watching && this.watchSwip) {
                    this.watchSwip.on('reachBeginning', () => {
                      watching.classList.remove('swipe')
                    })
                    this.watchSwip.on('fromEdge', () => {
                      watching.classList.add('swipe')
                    })
                  }
                })
              }
            })
        )
      }

      requests.push(
        this.$axios
          .get(this.ghostApi + this.filtercontents)
          .then((response) => {
            if (response.status === 200) {
              this.nocontent = !response.data.data.data.length
              this.data = response.data.data
              this.page = 1
              this.infiniteId += 1
              this.swiperKey += 1
            }
          })
      )

      try {
        await Promise.all(requests)
      } catch (error) {
        console.error('Error in requests:', error)
      } finally {
        this.$store.dispatch('filter/CLEAN_FILTER_LOADING')
        this.$nuxt.$loading.finish()
      }
    },
    infiniteHandler($state) {
      const apiurl = this.ghostApi
      const nextPage = this.page + 1

      this.$axios
        .get(apiurl + this.filtercontents, {
          params: { discover_page: nextPage },
        })
        .then((response) => {
          if (response.status !== 200) {
            $state.complete()
            return
          }

          const payload =
            response.data && response.data.data ? response.data.data : null
          const nextChunk = payload && payload.data ? payload.data : []

          if (nextChunk && nextChunk.length) {
            this.data.data = this.data.data.concat(nextChunk)

            if (payload.last_page && payload.last_page === this.page) {
              $state.complete()
            } else {
              $state.loaded()
            }
          } else {
            $state.complete()
          }
        })
        .catch(() => {
          $state.complete()
        })

      this.page = nextPage
    },
  },
}
</script>
