<template>
  <div>
    <!-- Slider Section with Skeleton -->
    <ShowcaseSkeleton v-if="isLoadingSlider" :page="'home'" />
    <section v-else-if="sliders && sliders.length" id="slideshow">
      <div class="swiper-container showcase main-slideshow">
        <!-- replaced inline VueSlickCarousel + slides with external component -->
        <ShowcaseCarousel
          :key="swiperKey"
          ref="carousel"
          :options="swiperOption3"
          :sliders="sliders"
        />
        <!-- <div v-if="sliders.length > 1" dir="rtl">
          <div
            class="swiper-next swiper-button-next main-slideshow-next"
            @click="showPrev"
          />
          <div
            class="swiper-prev swiper-button-prev main-slideshow-prev"
            @click="showNext"
          />
        </div> -->
      </div>
    </section>

    <OfferSectionSkeleton v-if="isLoadingOffer" />
    <OfferSection v-else :offer="offer" />

    <!-- Filter Section with Skeleton -->
    <FilterSkeleton v-show="isLoadingFilters" />
    <div v-show="!isLoadingFilters">
      <FilterContents
        :show="true"
        :show-genres="true"
        :savedata="false"
        :start-fetching="startFetchingFilters"
        :no-top="!(sliders && sliders.length > 0)"
        @execute_content_filtering="execute_content_filtering"
        @filters-ready="isLoadingFilters = false"
      />
    </div>

    <!-- New Types Section with Skeleton -->
    <!-- Type 1 Section - Full Width Carousel -->
    <HorizontalListSkeleton v-if="isLoadingType1" variant="backdrop" />
    <section
      v-else-if="type1Sliders && type1Sliders.length"
      class="type1-carousel-section mt-4"
    >
      <div
        v-swiper:type1Carousel="swiperOptionType1"
        class="swiper-container type1-carousel-container"
      >
        <div class="swiper-wrapper">
          <div
            v-for="(item, index) in type1Sliders"
            :key="index"
            class="swiper-slide type1-carousel-slide"
          >
            <nuxt-link :to="buildIdRoute(item)" class="type1-carousel-link">
              <b-img
                blank
                blank-color="#bbb"
                show
                class="type1-carousel-image"
                :src="getType1ImageSrc(item)"
                :alt="ChooseLang(item.name, item.name_fa)"
              />
            </nuxt-link>
          </div>
        </div>
        <!-- Navigation Buttons - Left Bottom -->
        <div v-if="type1Sliders.length > 1" class="type1-carousel-navigation">
          <button
            aria-label="Previous"
            class="type1-carousel-btn type1-carousel-prev"
            @click="type1CarouselPrev"
          >
            <i class="fa fa-chevron-right" />
          </button>
          <button
            aria-label="Next"
            class="type1-carousel-btn type1-carousel-next"
            @click="type1CarouselNext"
          >
            <i class="fa fa-chevron-left" />
          </button>
        </div>
      </div>
    </section>

    <!-- Type 2 Section -->
    <!-- <HorizontalListSkeleton v-if="isLoadingType2" variant="backdrop" />
    <div v-else-if="type2Sliders && type2Sliders.length" class="mt-4">
      <HorizontalList
        :title-en="'Type 2'"
        :title-fa="'نوع ۲'"
        :items="type2Sliders"
        instance-name="type2Swip"
        :options="SWIPER_OPTION_BACKDROP"
        card-variant="backdrop"
        :size="{ w: 364, h: 190 }"
        :link-builder="buildIdRoute"
        :show-badges="false"
        :add-series-class="false"
        :hoverable="true"
        :type="'slider'"
      />
    </div> -->

    <!-- Type 3 Section -->
    <!-- <HorizontalListSkeleton v-if="isLoadingType3" variant="backdrop" />
    <div v-else-if="type3Sliders && type3Sliders.length" class="mt-4">
      <HorizontalList
        :title-en="'Type 3'"
        :title-fa="'نوع ۳'"
        :items="type3Sliders"
        instance-name="type3Swip"
        :options="SWIPER_OPTION_BACKDROP"
        card-variant="backdrop"
        :size="{ w: 364, h: 190 }"
        :link-builder="buildIdRoute"
        :show-badges="false"
        :add-series-class="false"
        :hoverable="true"
        :type="'slider'"
      />
    </div> -->

    <!-- Lives Section with Skeleton -->
    <HorizontalListSkeleton v-if="isLoadingLives" variant="backdrop" />
    <div v-else-if="lives && lives.data.length" class="mt-4">
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
        :hoverable="true"
        :type="'live'"
      />
    </div>

    <!-- UGCs Section with Skeleton -->
    <HorizontalListSkeleton v-if="isLoadingUgcs" variant="backdrop" />
    <div v-else-if="ugcs && ugcs.data.length" class="mt-4">
      <div v-for="(sec, rootindex) in ugcs" :key="rootindex">
        <HorizontalList
          :title-en="sec.title_en"
          :title-fa="sec.title_fa"
          :show-all-route="{ name: 'lists-list', params: { list: sec.list } }"
          :items="sec"
          :instance-name="`ugcs${rootindex + 9000}`"
          :options="SWIPER_OPTION_BACKDROP"
          card-variant="backdrop"
          :size="{ w: 450, h: 254 }"
          :link-builder="buildShowIdRoute"
          :show-badges="false"
          :add-series-class="false"
          :hoverable="true"
          :type="'ugc'"
        />
      </div>
    </div>

    <!-- <div v-if="offer" class="offer-section">
      <HorizontalList
        :title-en="offer.list_en"
        :title-fa="offer.list_fa"
        :show-all-route="{
          name: 'lists-list',
          params: { list: offer.list.toLowerCase() },
        }"
        :items="offer.data"
        instance-name="offerSwip"
        :options="SWIPER_OPTION_OFFER"
        card-variant="poster"
        :size="{ w: 142, h: 212 }"
        :link-builder="buildIdRoute"
        :show-badges="true"
        :is-offer="true"
      />
    </div> -->

    <!-- Recently Watched Section with Skeleton -->
    <HorizontalListSkeleton
      v-if="isLoadingRecently && $auth.loggedIn"
      variant="backdrop"
    />
    <section
      v-else-if="recently !== null"
      id="watching"
      class="horizontal-list-container mt-lg-4 pt-4 pb-4"
    >
      <div class="d-flex align-items-center justify-content-between w-full">
        <h4
          class="font-weight-bold text-nowrap mr-5 ml-0 ml-sm-4 ml-xl-0 px-5 in-watching"
        >
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

    <!-- Discover Content Sections with Skeletons -->
    <template v-if="isLoadingDiscover">
      <OccasionSectionSkeleton />
      <HorizontalListSkeleton variant="poster" />
      <HorizontalListSkeleton variant="poster" />
      <HorizontalListSkeleton variant="poster" />
    </template>
    <div v-else-if="data.data">
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
                                class="d-inline-flex align-items-center show-all-link"
                              >
                                <span class="show-all-text ml-1">
                                  {{ $t('new.show_all') }}
                                </span>
                                <i
                                  class="fa fa-ellipsis-h show-all-icon"
                                  aria-hidden="true"
                                ></i>
                              </nuxt-link>
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
        <div v-else-if="list.data.length > 0" class="mt-4">
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
            :size="{ w: 183, h: 273 }"
            :link-builder="buildIdRoute"
            :show-badges="true"
            :type="'discover'"
          />
        </div>
      </div>
    </div>

    <div v-else-if="nocontent" class="container-fluid-notfound">
      <div class="text-center py-5">
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

    <!-- Sharing Modal -->
    <client-only>
      <b-modal
        id="modal-sharing"
        v-model="modalsharing"
        centered
        hide-footer
        :title="'اشتراک گذاری'"
      >
        <Socialsharing
          :mtitle="simpleData.name_fa"
          :description="simpleData.overview_fa"
        />
      </b-modal>
    </client-only>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import FilterContents from '@/components/FilterContents'
import HorizontalList from '@/components/HorizontalList'
import ShowcaseCarousel from '@/components/ShowcaseCarousel'
import OfferSection from '@/components/OfferSection'
import Socialsharing from '@/components/Socialsharing'

const SWIPER_OPTION_OFFER = {
  slidesPerView: 5.5,
  spaceBetween: 10,
  breakpoints: {
    320: { slidesPerView: 1.5 },
    768: { slidesPerView: 3.5 },
    1200: { slidesPerView: 5.5 },
    1600: { slidesPerView: 7.5 },
  },
}

const SWIPER_OPTION_POSTER = {
  spaceBetween: 10,
  slidesPerView: 3.3,
  grabCursor: true,
  setWrapperSize: true,
  threshold: 2,
  countdown: {},
  breakpoints: {
    200: { slidesPerView: 2.8 },
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
    1024: { slidesPerView: 3 },
    1420: { slidesPerView: 2.8 },
    1670: { slidesPerView: 3 },
  },
}

const SWIPER_OPTION_RECENTLY = {
  slidesPerView: 2.5,
  spaceBetween: 10,
  grabCursor: true,
  watchOverflow: true,
  threshold: 2,
  breakpoints: {
    320: { slidesPerView: 1.5 },
    768: { slidesPerView: 2.5 },
    992: { slidesPerView: 3.5 },
    1024: { slidesPerView: 4.5 },
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
    ShowcaseCarousel,
    OfferSection,
    Socialsharing,
    ShowcaseSkeleton: () =>
      import('@/components/item/skeletons/ShowcaseSkeleton.vue'),
    HorizontalListSkeleton: () =>
      import('@/components/home/HorizontalListSkeleton.vue'),
    OccasionSectionSkeleton: () =>
      import('@/components/home/OccasionSectionSkeleton.vue'),
    FilterSkeleton: () => import('@/components/home/FilterSkeleton.vue'),
    OfferSectionSkeleton: () =>
      import('@/components/home/OfferSectionSkeleton.vue'),
  },
  asyncData() {
    // Return empty data, all fetching will happen in mounted()
    return { data: {}, offer: null }
  },
  data() {
    return {
      data: {},
      recently: null,
      offer: null,
      lives: null,
      ugcs: null,
      page: 1,
      infiniteId: +new Date(),
      swiperKey: +new Date(),
      simpleData: {
        type: 'episode',
        id: '9f761f10-ad1c-11f0-a2bb-d96f4ae09bb8',
        name: 'Episode 11 Midnight with Amirhossein Qeyasi S05',
        name_fa: 'قسمت 11 نیمه شب با امیرحسین قیاسی ۵',
        created_at: '2025-10-19 18:51:29',
        updated_at: '2025-10-19 19:12:04',
        poster: 'eZhlFjdY73xCtKo6ZhkK.jpg',
        overview: 'توسعه اونا تند و ناپایدار؛ توسعه ما کند و پایدار!',
        overview_fa: 'توسعه اونا تند و ناپایدار؛ توسعه ما کند و پایدار!',
        year: 2025,
        genre: 'Comedy',
        rate: 6,
        backdrop: 'RpCWoHg6swpNyucUxzsQ.jpg',
        age: 'PG-13',
        runtime: 28,
        free: 0,
        traffic: 0,
        traffic_oo: 0,
        internal_studio: 0,
        current_time: 0,
        duration_time: 0,
        player: 'default',
        upera: '3057504',
        cloud: 'aws',
        ir: 1,
        owner: 3439731,
        imdb: null,
        persian: 1,
        series_id: 'ab9fb8b0-76e5-11f0-ab63-bf0bb12031a6',
        series_name: 'Midnight with Amirhossein Qeyasi S05',
        series_name_fa: 'نیمه شب با امیرحسین قیاسی ۵',
        season_number: '1',
        episode_number: '11',
        old_name_fa: 'قسمت یازدهم نیمه شب با امیرحسین قیاسی',
        old_name: 'Midnight with Amirhossein Ghiasi S05 E11',
      },
      actionsButtons: [
        {
          mainButton: {
            exist: true,
            action: 'play',
            label: {
              en: 'Play',
              fa: 'نمایش',
            },
            type: {
              en: 'Play',
              fa: 'نمایش',
            },
          },

          downloadButton: {
            exist: true,
            action: 'openDownloadModal',
            label: {
              en: 'Free Download',
              fa: 'دانلود رایگان',
            },
          },
        },
      ],
      distance: -Infinity,
      nocontent: false,
      ghostApi: '/getV2/discover',
      SWIPER_OPTION_POSTER,
      SWIPER_OPTION_BACKDROP,
      SWIPER_OPTION_OFFER,
      swiperOption3: SLICK_MAIN_OPTIONS,
      swiperOption2: SWIPER_OPTION_RECENTLY,
      swiperOptionType1: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        effect: 'slide',
        speed: 500,
      },
      // Loading states
      isLoadingSlider: true,
      isLoadingRecently: true,
      isLoadingLives: true,
      isLoadingUgcs: false,
      isLoadingDiscover: true,
      isLoadingFilters: true,
      isLoadingOffer: true,
      isLoadingType1: true,
      isLoadingType2: true,
      isLoadingType3: true,
      startFetchingFilters: false,
      // Clap and watchlist state
      clapinterval: false,
      user_claps_counter: 0,
      clapCheckTimer: false,
      modalsharing: false,
    }
  },
  computed: {
    sliders() {
      // Return sliders sorted by index property, or empty array if not found
      const sliders = this.$store.state.slider.sliders
      return Array.isArray(sliders) && sliders.length > 0
        ? sliders.slice().sort((a, b) => (a.index ?? 0) - (b.index ?? 0))
        : []
    },
    type1Sliders() {
      const sliders = this.$store.state.slider.type1Sliders
      return Array.isArray(sliders) && sliders.length > 0
        ? this.transformSliderData(sliders)
        : []
    },
    type2Sliders() {
      const sliders = this.$store.state.slider.type2Sliders
      return Array.isArray(sliders) && sliders.length > 0
        ? this.transformSliderData(sliders)
        : []
    },
    type3Sliders() {
      const sliders = this.$store.state.slider.type3Sliders
      return Array.isArray(sliders) && sliders.length > 0
        ? this.transformSliderData(sliders)
        : []
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
    // Clear clap interval if exists
    if (this.clapinterval) {
      clearInterval(this.clapinterval)
      this.clapinterval = false
    }
    // Clear clap timer if exists
    if (this.clapCheckTimer) {
      clearTimeout(this.clapCheckTimer)
      this.clapCheckTimer = false
    }
  },
  async mounted() {
    // Fetch slider FIRST and wait for it to complete
    this.isLoadingSlider = true
    await this.$store.dispatch('slider/fetchSlider', {
      filtercontents: this.filtercontents,
    })
    this.isLoadingSlider = false

    // After slider loads, trigger filters/genres to load
    this.startFetchingFilters = true

    // After slider is loaded, fetch other content in parallel
    // Fetch offer
    this.isLoadingOffer = true
    this.$axios
      .get('/get/offer' + this.filtercontents)
      .then((offerRes) => {
        this.offer = offerRes.data
      })
      .catch((error) => {
        console.error('Error fetching offer:', error)
      })
      .finally(() => {
        this.isLoadingOffer = false
      })

    // Fetch recently watched
    this.get_recently()

    // Fetch discover content
    this.fetchDiscoverData()

    // Fetch lives
    this.isLoadingLives = true
    this.$axios
      .get('/get/lives?ref=' + this.checkuser?.ref)
      .then((livesRes) => {
        this.lives = livesRes.data
      })
      .catch((e) => {
        console.error('fetch lives failed', e)
      })
      .finally(() => {
        this.isLoadingLives = false
      })

    // Fetch New Types Section (Type 1, 2, 3)
    this.isLoadingType1 = true
    this.$store
      .dispatch('slider/fetchType1Slider', {
        filtercontents: this.filtercontents,
      })
      .finally(() => {
        this.isLoadingType1 = false
      })

    // this.isLoadingType2 = true
    // this.$store
    //   .dispatch('slider/fetchType2Slider', {
    //     filtercontents: this.filtercontents,
    //   })
    //   .finally(() => {
    //     this.isLoadingType2 = false
    //   })

    // this.isLoadingType3 = true
    // this.$store
    //   .dispatch('slider/fetchType3Slider', {
    //     filtercontents: this.filtercontents,
    //   })
    //   .finally(() => {
    //     this.isLoadingType3 = false
    //   })

    // Fetch UGCs
    // this.isLoadingUgcs = true
    // this.$axios
    //   .get('/get/ugcs?ref=' + this.checkuser?.ref)
    //   .then((ugcsRes) => {
    //     this.ugcs = ugcsRes.data
    //     this.ugcs = this.transformUgcsData(this.ugcs)
    //   })
    //   .catch((e) => {
    //     console.error('fetch ugcs failed', e)
    //   })
    //   .finally(() => {
    //     this.isLoadingUgcs = false
    //   })
  },
  methods: {
    ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa
      if (!en) return fa || ''
      return en.charAt(0).toUpperCase() + en.slice(1)
    },
    transformSliderData(sliders) {
      return sliders.map((item) => {
        // Extract backdrop filename from image_src URL if available
        let backdrop = item.backdrop
        if (!backdrop && item.image_src) {
          try {
            const url = new URL(item.image_src)
            const srcParam = url.searchParams.get('src')
            if (srcParam) {
              // Extract filename from src URL (e.g., "https://thumb.upera.shop/s3/backdrops/xzVIX3yB1ZK0n4uuoI8z.jpg")
              const srcUrl = new URL(srcParam)
              const pathParts = srcUrl.pathname.split('/')
              backdrop = pathParts[pathParts.length - 1]
            }
          } catch (e) {
            // If URL parsing fails, try to extract from the src parameter directly
            const match = item.image_src.match(/src=([^&]+)/)
            if (match) {
              try {
                const decoded = decodeURIComponent(match[1])
                const srcUrl = new URL(decoded)
                const pathParts = srcUrl.pathname.split('/')
                backdrop = pathParts[pathParts.length - 1]
              } catch (e2) {
                console.warn(
                  'Could not extract backdrop from image_src:',
                  item.image_src
                )
              }
            }
          }
        }

        return {
          ...item,
          backdrop: backdrop || item.backdrop || '',
          // Keep original image_src for reference if needed
          image_src: item.image_src,
          image_mobile_src: item.image_mobile_src,
        }
      })
    },
    transformUgcsData(ugcsData) {
      if (!ugcsData || !ugcsData.data) return { data: [] }

      const transformedItems = []

      ugcsData.data.forEach((section) => {
        if (section.data && Array.isArray(section.data)) {
          section.data.forEach((item) => {
            transformedItems.push({
              ...item,
              studio_title_fa: section.title_fa || section.list_fa,
              studio_title_en: section.title_en || section.list_en,
              studio_list_fa: section.list_fa,
              studio_list_en: section.list_en,
              studio_list: section.list,
              studio_style: section.style,
            })
          })
        }
      })

      return { data: transformedItems }
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
      this.isLoadingRecently = true
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
      } finally {
        this.isLoadingRecently = false
      }
    },
    async fetchDiscoverData() {
      this.isLoadingDiscover = true
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
      } finally {
        this.isLoadingDiscover = false
      }
    },
    showNext() {
      this.$refs.carousel.next()
    },
    showPrev() {
      this.$refs.carousel.prev()
    },
    async execute_content_filtering() {
      // Set all loading states
      this.isLoadingSlider = true
      this.isLoadingRecently = true
      this.isLoadingDiscover = true
      this.isLoadingOffer = true
      this.isLoadingType1 = true
      this.isLoadingType2 = true
      this.isLoadingType3 = true
      this.$store.dispatch('filter/FILTER_LOADING')

      const requests = []

      requests.push(
        this.$store
          .dispatch('slider/fetchSlider', {
            filtercontents: this.filtercontents,
            loadagain: 1,
          })
          .finally(() => {
            this.isLoadingSlider = false
          })
      )

      requests.push(
        this.$axios
          .get('/get/offer' + this.filtercontents)
          .then((response) => {
            if (response.status === 200) this.offer = response.data
          })
          .finally(() => {
            this.isLoadingOffer = false
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
            .finally(() => {
              this.isLoadingRecently = false
            })
        )
      } else {
        this.isLoadingRecently = false
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
          .finally(() => {
            this.isLoadingDiscover = false
          })
      )

      // Fetch New Types Section
      requests.push(
        this.$store
          .dispatch('slider/fetchType1Slider', {
            filtercontents: this.filtercontents,
            loadagain: 1,
          })
          .finally(() => {
            this.isLoadingType1 = false
          })
      )

      // requests.push(
      //   this.$store
      //     .dispatch('slider/fetchType2Slider', {
      //       filtercontents: this.filtercontents,
      //       loadagain: 1,
      //     })
      //     .finally(() => {
      //       this.isLoadingType2 = false
      //     })
      // )

      // requests.push(
      //   this.$store
      //     .dispatch('slider/fetchType3Slider', {
      //       filtercontents: this.filtercontents,
      //       loadagain: 1,
      //     })
      //     .finally(() => {
      //       this.isLoadingType3 = false
      //     })
      // )

      try {
        await Promise.all(requests)
      } catch (error) {
        console.error('Error in requests:', error)
      } finally {
        this.$store.dispatch('filter/CLEAN_FILTER_LOADING')
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
    // Icon Actions handlers
    handleToggleWatchlist(item) {
      if (!this.$auth.loggedIn) {
        this.$store.dispatch('login/SHOW_MODAL', {
          premessage: null,
          premobile: null,
          preredirect: null,
          prerefresh: false,
        })
        return
      }

      // Toggle watchlist status for the item
      if (item.isWatchlist !== undefined) {
        item.isWatchlist = item.isWatchlist === 0 ? 1 : 0
      }

      this.$axios.post('/create/watchlist', {
        id: item.id,
        type: item.type,
      })
    },
    handleShare() {
      this.modalsharing = true
    },
    handleClapStart(item) {
      if (!this.$auth.loggedIn) {
        this.$store.dispatch('login/SHOW_MODAL', {
          premessage: null,
          premobile: null,
          preredirect: null,
          prerefresh: false,
        })
        return
      }
      if (!this.clapinterval) {
        this.clapinterval = setInterval(() => {
          this.incrementClapLocal(item)
        }, 30)
      }
    },
    handleClapStop(item) {
      if (this.clapinterval) {
        clearInterval(this.clapinterval)
        this.clapinterval = false
        this.flushClaps(item, false)
      }
    },
    incrementClapLocal(item) {
      this.user_claps_counter += 1
      if (item.userClaps !== undefined) {
        item.userClaps = parseInt(item.userClaps || 0) + 1
      }
    },
    flushClaps(item, immediate = false) {
      if (this.clapCheckTimer) {
        clearTimeout(this.clapCheckTimer)
        this.clapCheckTimer = false
      }
      if (this.user_claps_counter < 1) return

      const pending = this.user_claps_counter
      const revert = () => {
        if (item.userClaps !== undefined) {
          item.userClaps = parseInt(item.userClaps || 0) - pending
        }
      }

      const send = () => {
        this.$axios
          .post('/add/clap', {
            id: item.id,
            type: item.type,
            claps: pending,
          })
          .then(
            (res) => {
              if (res.status !== 200) revert()
            },
            () => {
              revert()
            }
          )
        this.user_claps_counter = 0
      }

      if (immediate) {
        send()
      } else {
        this.clapCheckTimer = setTimeout(() => {
          send()
        }, 2000)
      }
    },
    handleOpenDownloadModal(item) {
      // Navigate to the item page which has download functionality
      this.$router.push({
        name: item.type + '-show-id',
        params: { id: item.id },
        query: { force_download: 1 },
      })
    },
    getType1ImageSrc(item) {
      // Transform image_src URL to match carousel dimensions
      if (item.image_src) {
        try {
          const urlObj = new URL(item.image_src)
          const src = urlObj.searchParams.get('src')
          if (src) {
            // Build new URL with carousel dimensions (full width, 324px height)
            return `https://thumb.upera.shop/thumb?w=1920&h=324&q=100&a=t&src=${encodeURIComponent(
              src
            )}`
          }
        } catch (e) {
          // If URL parsing fails, try to extract src parameter directly
          const match = item.image_src.match(/src=([^&]+)/)
          if (match) {
            const decoded = decodeURIComponent(match[1])
            return `https://thumb.upera.shop/thumb?w=1920&h=324&q=100&a=t&src=${encodeURIComponent(
              decoded
            )}`
          }
        }
        // Fallback to original if transformation fails
        return item.image_src
      }
      // Fallback to backdrop if image_src is not available
      if (item.backdrop) {
        return `https://thumb.upera.shop/thumb?w=1920&h=324&q=100&a=t&src=https://cdn.upera.shop/s3/backdrops/${item.backdrop}`
      }
      return ''
    },
    type1CarouselPrev() {
      if (this.type1Carousel) {
        this.type1Carousel.slidePrev()
      }
    },
    type1CarouselNext() {
      if (this.type1Carousel) {
        this.type1Carousel.slideNext()
      }
    },
  },
}
</script>
<style scoped>
/* Type 1 Carousel Styles */
.type1-carousel-section {
  width: 100%;
  margin-bottom: 1rem;
  padding-right: 2.6rem;
  padding-left: 2.6rem;
}

.offer-section {
  margin-top: -17rem;
}

@media (max-width: 1600px) {
  .offer-section {
    margin-top: -7rem;
  }
}
@media (max-width: 1500px) {
  .offer-section {
    margin-top: -7rem;
  }
}

@media (max-width: 1400px) {
  .offer-section {
    margin-top: -9rem;
  }
}

@media (max-width: 1300px) {
  .offer-section {
    margin-top: -14rem;
  }

  .type1-carousel-section {
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
  }
}
@media (max-width: 1200px) {
  .offer-section {
    margin-top: -16rem;
  }
}
@media (max-width: 992px) {
  .offer-section {
    margin-top: -27rem;
  }
}
@media (max-width: 768px) {
  .offer-section {
    margin-top: -4rem;
  }

  .type1-carousel-section {
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
  }
}
@media (max-width: 576px) {
  .offer-section {
    margin-top: 3rem !important;
  }
  .type1-carousel-section {
    width: 100%;
    margin-bottom: 1rem;
    padding-right: 1rem;
    padding-left: 1rem;
  }
}

.container-fluid-notfound {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh !important;
}

.type1-carousel-container {
  width: 100%;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 6px 12px 0px #00000033;
}

.type1-carousel-container::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.2) 30%,
    transparent 100%
  );
  pointer-events: none;
  z-index: 1;
  border-radius: 16px;
}

.type1-carousel-slide {
  width: 100%;
  height: 324px;
}

.type1-carousel-link {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
}

.type1-carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.type1-carousel-navigation {
  position: absolute;
  left: 20px;
  bottom: 20px;
  z-index: 10;
  display: flex;
  gap: 10px;
  align-items: center;
}

.type1-carousel-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.8);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 18px;
  outline: none;
}

.type1-carousel-btn:hover {
  background-color: rgba(0, 0, 0, 0.8);
  border-color: rgba(255, 255, 255, 1);
  transform: scale(1.1);
}

.type1-carousel-btn:active {
  transform: scale(0.95);
}

.type1-carousel-btn i {
  font-size: 16px;
}

@media (max-width: 768px) {
  .type1-carousel-slide {
    height: 200px;
  }

  .type1-carousel-navigation {
    left: 15px;
    bottom: 15px;
  }

  .type1-carousel-btn {
    width: 40px;
    height: 40px;
    font-size: 14px;
  }
}
</style>
