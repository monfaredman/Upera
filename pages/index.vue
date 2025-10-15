<template>
  <div>
    <section v-if="sliders && sliders.length" id="slideshow">
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

    <OfferSection :offer="offer" />

    <FilterContents
      :show="true"
      :show-genres="true"
      :savedata="false"
      :no-top="!(sliders && sliders.length > 0)"
      @execute_content_filtering="execute_content_filtering"
    />

    <!-- <div v-if="checkuser.show_lives && lives && lives.data.length"> -->
    <div v-if="lives && lives.data.length" class="mt-4">
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
      />
    </div>

    <div v-if="ugcs && ugcs.data.length" class="mt-4">
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

    <section
      v-if="recently !== null"
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
import ShowcaseCarousel from '@/components/ShowcaseCarousel'
import OfferSection from '@/components/OfferSection'

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
    1024: { slidesPerView: 3 },
    1420: { slidesPerView: 2.8 },
    1670: { slidesPerView: 3 },
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
      SWIPER_OPTION_OFFER,
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

    // if (this.checkuser.show_lives === 1) {
    try {
      // const livesRes = await this.$axios.get(
      //   '/get/lives?ref=' + this.checkuser.ref
      // )
      this.lives = {
        data: [
          {
            type: 'live',
            id: '5575f550-bb2f-11ef-98f9-a5ef130167cc',
            name: 'Breaking News',
            name_fa: 'پخش زنده تلویزیون همشهری',
            updated_at: '2025-05-04T16:56:14.000000Z',
            poster: null,
            genre: '',
            backdrop: 'lives/RpxNv7ODVVrnswSWEI3V.jpg',
            free: 1,
            created_at: '2024-12-15T18:25:44.000000Z',
            series_id: 0,
            series_name: '',
            series_name_fa: '',
            season_number: 0,
            episode_number: 0,
          },
        ],
      }
    } catch (e) {
      console.error('fetch lives failed', e)
    }

    // if (this.checkuser.show_ugcs === 1) {
    try {
      // const ugcsRes = await this.$axios.get(
      //   '/get/ugcs?ref=' + this.checkuser.ref
      // )
      // this.ugcs = ugcsRes.data
      this.ugcs = {
        data: [
          {
            list: 'latest_news',
            title_fa: 'آخرین خبرها',
            title_en: 'Latest News',
            list_fa: 'آخرین خبرها',
            list_en: 'Latest News',
            style: 'backdrop',
            sortable: false,
            filterable: false,
            data: [
              {
                u_id: 'b3f38d27-89f1-4294-8409-40c081fc806e',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'خوش غیرت',
                desc: null,
                desc_fa: 'خوش غیرت',
                created_at: '2025-10-13T07:13:44.000000Z',
                updated_at: '2025-10-13T12:21:42.000000Z',
                status: 'approved',
                tags: null,
                views_count: 1,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["e1fffa80-d15b-11ef-8e17-9bcb8bb601ed", "e1fffa80-d15b-11ef-8e17-9bcb8bb601ed"]',
                primary_channel_id: null,
                poster: 'ugcs/4f2a5f53b0442b6d8174bb8d47bf7c55.jpg',
                backdrop: 'ugcs/f6022866453c2a96b8c18750084047bb.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 98.4,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'خوشغیرت',
                id: 'b3f38d27-89f1-4294-8409-40c081fc806e',
                type: 'video',
              },
              {
                u_id: 'f31c4385-cccf-4447-a2ab-e3dc2aa6d029',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'تولد نسل جدید حماس',
                desc: null,
                desc_fa: 'تولد نسل جدید حماس',
                created_at: '2025-10-12T08:32:17.000000Z',
                updated_at: '2025-10-13T11:00:27.000000Z',
                status: 'approved',
                tags: null,
                views_count: 10,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["e1fffa80-d15b-11ef-8e17-9bcb8bb601ed", "e1fffa80-d15b-11ef-8e17-9bcb8bb601ed"]',
                primary_channel_id: null,
                poster: 'ugcs/982590006beda2a68a5458e3c37af041.jpg',
                backdrop: 'ugcs/e9fc737e0ca33a47d125f3cc5fdcec96.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 69.42667,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'تولدنسلجدیدحماس',
                id: 'f31c4385-cccf-4447-a2ab-e3dc2aa6d029',
                type: 'video',
              },
              {
                u_id: '4f5b9e91-6fb9-475c-9e03-3f0ee8881f59',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'جشن پیروزی',
                desc: null,
                desc_fa: 'جشن پیروزی',
                created_at: '2025-10-11T11:11:04.000000Z',
                updated_at: '2025-10-13T09:36:57.000000Z',
                status: 'approved',
                tags: null,
                views_count: 19,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["e1fffa80-d15b-11ef-8e17-9bcb8bb601ed", "e1fffa80-d15b-11ef-8e17-9bcb8bb601ed"]',
                primary_channel_id: null,
                poster: 'ugcs/5b882c99f1d474025d1af1313ee784ea.jpg',
                backdrop: 'ugcs/dec8af645c4f5dd59e83615231d7f235.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 68.70667,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'جشنپیروزی',
                id: '4f5b9e91-6fb9-475c-9e03-3f0ee8881f59',
                type: 'video',
              },
              {
                u_id: 'd1cf7448-6f1a-4a9d-9fe6-d14d0c5ebf62',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'روز پیروزی',
                desc: null,
                desc_fa: 'روز پیروزی',
                created_at: '2025-10-08T09:12:59.000000Z',
                updated_at: '2025-10-13T06:59:22.000000Z',
                status: 'approved',
                tags: null,
                views_count: 10,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["e1fffa80-d15b-11ef-8e17-9bcb8bb601ed", "e1fffa80-d15b-11ef-8e17-9bcb8bb601ed"]',
                primary_channel_id: null,
                poster: 'ugcs/c992dcbe39fa55008fed5163ffa8e67b.jpg',
                backdrop: 'ugcs/494bab1b94481d1f5ee42490c0a26a5a.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 89.722,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'روزپیروزی',
                id: 'd1cf7448-6f1a-4a9d-9fe6-d14d0c5ebf62',
                type: 'video',
              },
              {
                u_id: '2da4f346-5e50-438a-a2a6-efabd03bb74c',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'کالا برگ چه شد',
                desc: null,
                desc_fa: 'کالا برگ چه شد',
                created_at: '2025-10-08T08:41:07.000000Z',
                updated_at: '2025-10-11T11:22:47.000000Z',
                status: 'approved',
                tags: null,
                views_count: 49,
                likes_count: 0,
                comments_count: 0,
                category_id: '["e1fffa80-d15b-11ef-8e17-9bcb8bb601ed"]',
                primary_channel_id: null,
                poster: 'ugcs/c420f401435f3e9e00142f4d02547dae.jpg',
                backdrop: 'ugcs/6a9436fd9d44fbaf97da538a86d5d91a.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 60.62701,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'کالابرگچهشد',
                id: '2da4f346-5e50-438a-a2a6-efabd03bb74c',
                type: 'video',
              },
              {
                u_id: 'a3a7241d-2a3b-4ee2-bb04-a135408081c4',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: '۱۰ خبر خوب، دور از هیاهو',
                desc: null,
                desc_fa: '۱۰ خبر خوب، دور از هیاهو',
                created_at: '2025-10-06T08:05:22.000000Z',
                updated_at: '2025-10-12T06:36:52.000000Z',
                status: 'approved',
                tags: null,
                views_count: 33,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["e1fffa80-d15b-11ef-8e17-9bcb8bb601ed", "e1fffa80-d15b-11ef-8e17-9bcb8bb601ed"]',
                primary_channel_id: null,
                poster: 'ugcs/2e1a4fbea4874eece24364a26d4e3ab0.jpg',
                backdrop: 'ugcs/fe4d68487686acaab10acbc67516374f.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 102.02,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: '۱۰خبرخوب،دورازهیاهو',
                id: 'a3a7241d-2a3b-4ee2-bb04-a135408081c4',
                type: 'video',
              },
              {
                u_id: '027187d5-b0cf-4783-a512-0c8c39fe3d81',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'یک اتفاق تاریخی در شهرداری تهران!',
                desc: null,
                desc_fa: 'یک اتفاق تاریخی در شهرداری تهران!',
                created_at: '2025-10-05T08:38:07.000000Z',
                updated_at: '2025-10-11T00:04:55.000000Z',
                status: 'approved',
                tags: null,
                views_count: 28,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["e1fffa80-d15b-11ef-8e17-9bcb8bb601ed", "e1fffa80-d15b-11ef-8e17-9bcb8bb601ed"]',
                primary_channel_id: null,
                poster: 'ugcs/9ba79aab3ba8fe1fde060da716c03910.jpg',
                backdrop: 'ugcs/a78121157bf17bbcf36aeb3bcf677c84.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 48.042,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'یکاتفاقتاریخیدرشهرداریتهران!',
                id: '027187d5-b0cf-4783-a512-0c8c39fe3d81',
                type: 'video',
              },
              {
                u_id: '3d26d6b7-c820-498f-b862-1d6bb8f37208',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'کاروان بیداری جهان',
                desc: null,
                desc_fa: 'کاروان بیداری جهان',
                created_at: '2025-10-04T06:54:23.000000Z',
                updated_at: '2025-10-07T15:59:40.000000Z',
                status: 'approved',
                tags: null,
                views_count: 31,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["e1fffa80-d15b-11ef-8e17-9bcb8bb601ed", "e1fffa80-d15b-11ef-8e17-9bcb8bb601ed"]',
                primary_channel_id: null,
                poster: 'ugcs/458fd576879fc6f94865c018a654a308.jpg',
                backdrop: 'ugcs/98aeee57be654848cb6ccacca0feafe2.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 45.6,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'کاروانبیداریجهان',
                id: '3d26d6b7-c820-498f-b862-1d6bb8f37208',
                type: 'video',
              },
              {
                u_id: 'e04df379-ec95-4d95-a459-96085d4728da',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'سفیران سربلندی',
                desc: null,
                desc_fa: 'سفیران سربلندی',
                created_at: '2025-10-02T13:51:53.000000Z',
                updated_at: '2025-10-07T13:59:57.000000Z',
                status: 'approved',
                tags: null,
                views_count: 33,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["e1fffa80-d15b-11ef-8e17-9bcb8bb601ed", "e1fffa80-d15b-11ef-8e17-9bcb8bb601ed"]',
                primary_channel_id: null,
                poster: 'ugcs/5f2a8c1d3db9164370987a4049ea0dc3.jpg',
                backdrop: 'ugcs/b76138efebbba8ae86116a612f0ce2bb.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 74.36,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'سفیرانسربلندی',
                id: 'e04df379-ec95-4d95-a459-96085d4728da',
                type: 'video',
              },
              {
                u_id: '1e584852-fdb2-4eca-a9fc-246f791b7257',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'ضد حمله به ماشه',
                desc: null,
                desc_fa: 'ضد حمله به ماشه',
                created_at: '2025-09-29T07:39:19.000000Z',
                updated_at: '2025-10-13T07:27:53.000000Z',
                status: 'approved',
                tags: null,
                views_count: 67,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["e1fffa80-d15b-11ef-8e17-9bcb8bb601ed", "e1fffa80-d15b-11ef-8e17-9bcb8bb601ed"]',
                primary_channel_id: null,
                poster: 'ugcs/64a0592666d89d0dce4c35ded96d3925.jpg',
                backdrop: 'ugcs/cc1bf4fa67db5884059cf6950b732564.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 67.88,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'ضدحملهبهماشه',
                id: '1e584852-fdb2-4eca-a9fc-246f791b7257',
                type: 'video',
              },
              {
                u_id: '75ccca8c-f68c-47ca-a7b4-51668b5c8684',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'روشنایی ایران با برق هسته ای',
                desc: null,
                desc_fa: 'روشنایی ایران با برق هسته ای',
                created_at: '2025-09-27T09:37:56.000000Z',
                updated_at: '2025-10-11T19:07:27.000000Z',
                status: 'approved',
                tags: null,
                views_count: 51,
                likes_count: 0,
                comments_count: 0,
                category_id: '["e1fffa80-d15b-11ef-8e17-9bcb8bb601ed"]',
                primary_channel_id: null,
                poster: 'ugcs/b69a00c5c68d8b4ab6f9c561f5b60b66.jpg',
                backdrop: 'ugcs/0cb3a25492273ac377743344efba06f5.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 93.32,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'روشناییایرانبابرقهستهای',
                id: '75ccca8c-f68c-47ca-a7b4-51668b5c8684',
                type: 'video',
              },
              {
                u_id: '99df5f09-2378-4ef0-8645-0a6ffed24854',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'توسط اسرائیل به شهادت رسیدند',
                desc: null,
                desc_fa: 'توسط اسرائیل به شهادت رسیدند',
                created_at: '2025-09-26T13:25:24.000000Z',
                updated_at: '2025-10-07T22:21:53.000000Z',
                status: 'approved',
                tags: null,
                views_count: 45,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["e1fffa80-d15b-11ef-8e17-9bcb8bb601ed", "e1fffa80-d15b-11ef-8e17-9bcb8bb601ed"]',
                primary_channel_id: null,
                poster: 'ugcs/4cc95e8d2e7184e7e5dfbdf139297b8c.jpg',
                backdrop: 'ugcs/d577f43ebb038f1f2e780358fde15fec.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 82.52,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'توسطاسرائیلبهشهادترسیدند',
                id: '99df5f09-2378-4ef0-8645-0a6ffed24854',
                type: 'video',
              },
            ],
            current_page: 1,
            last_page: 37,
            per_page: 12,
          },
          {
            list: 'studio_updates',
            title_fa: 'آخرین‌های استودیو',
            title_en: 'Studio Updates',
            list_fa: 'آخرین‌های استودیو',
            list_en: 'Studio Updates',
            style: 'backdrop',
            sortable: false,
            filterable: false,
            data: [
              {
                u_id: '4141d59d-10dd-460a-9652-6d0c1b77c3aa',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'سرتیتر؛ طوفان الاقصی، فصل پیروزی',
                desc: null,
                desc_fa:
                  'باحضور:\r\n\r\nکورش علیانی،پژوهشگر ،نویسنده و مدرس دانشگاه',
                created_at: '2025-10-13T05:33:09.000000Z',
                updated_at: '2025-10-13T13:19:21.000000Z',
                status: 'approved',
                tags: null,
                views_count: 11,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["eb73d3a0-d15b-11ef-abde-19069aefbf3b", "41a37bc0-d15f-11ef-8d08-1d4ce61156d5"]',
                primary_channel_id: null,
                poster: 'ugcs/983c210e65f0e3f0473ec7506b8b7d2e.jpg',
                backdrop: 'ugcs/e40452a0a5d03202805ea3d834cbb931.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 2086.92,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'سرتیتر؛طوفانالاقصی،فصلپیروزی',
                id: '4141d59d-10dd-460a-9652-6d0c1b77c3aa',
                type: 'video',
              },
              {
                u_id: '8fd3c96f-238d-46d1-8876-272e9bfb6ee5',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'دیپلماتیک؛ دو سالگی طوفان الاقصی',
                desc: null,
                desc_fa: 'با حضور:\r\n\r\nخالد قدومی ، نماینده حماس در تهران',
                created_at: '2025-10-12T17:11:55.000000Z',
                updated_at: '2025-10-13T12:39:03.000000Z',
                status: 'approved',
                tags: null,
                views_count: 8,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["eb73d3a0-d15b-11ef-abde-19069aefbf3b", "41a37bc0-d15f-11ef-8d08-1d4ce61156d5"]',
                primary_channel_id: null,
                poster: 'ugcs/a14693980460bc338db24186ffe67bb5.jpg',
                backdrop: 'ugcs/478bb27580cbb6ab9382d477df0569fb.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 2599.733,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'دیپلماتیک؛دوسالگیطوفانالاقصی',
                id: '8fd3c96f-238d-46d1-8876-272e9bfb6ee5',
                type: 'video',
              },
              {
                u_id: 'c6169c10-a263-42db-9473-40e271b6b574',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'تندرستی؛ چرا روانشناسی اینستاگرامی طرفدار دارد؟',
                desc: null,
                desc_fa: 'باحضور:\r\n\r\nدکتر سیما فردوسی ،روانشناس بالینی',
                created_at: '2025-10-12T17:01:47.000000Z',
                updated_at: '2025-10-13T12:49:24.000000Z',
                status: 'approved',
                tags: null,
                views_count: 18,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["eb73d3a0-d15b-11ef-abde-19069aefbf3b", "41a37bc0-d15f-11ef-8d08-1d4ce61156d5"]',
                primary_channel_id: null,
                poster: 'ugcs/d262322a7616a3b07ed5883d7cfd5918.jpg',
                backdrop: 'ugcs/093579722cbf63a2a08fc8618c4c6cd3.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 2642.133,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'تندرستی؛چراروانشناسیاینستاگرامیطرفداردارد؟',
                id: 'c6169c10-a263-42db-9473-40e271b6b574',
                type: 'video',
              },
              {
                u_id: '0fad4373-2d88-47a0-a06f-6a6edfb6cb86',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'دروازه تهران؛ تهران به روایت آقای تهرانگرد',
                desc: null,
                desc_fa:
                  'باحضور:\r\n\r\nاحمد مسجدی جامعی،وزیر اسبق ارشاد و عضو سابق شورای شهر',
                created_at: '2025-10-11T20:50:14.000000Z',
                updated_at: '2025-10-13T10:15:57.000000Z',
                status: 'approved',
                tags: null,
                views_count: 21,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["eb73d3a0-d15b-11ef-abde-19069aefbf3b", "41a37bc0-d15f-11ef-8d08-1d4ce61156d5"]',
                primary_channel_id: null,
                poster: 'ugcs/e5b9f1da5f61f8d8d201748af7556ad3.jpg',
                backdrop: 'ugcs/67b0b59fdebe7255943da758bbd819ab.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 2878.46601,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'دروازهتهران؛تهرانبهروایتاقایتهرانگرد',
                id: '0fad4373-2d88-47a0-a06f-6a6edfb6cb86',
                type: 'video',
              },
              {
                u_id: '5156e021-638e-416e-8edb-af0cde2f971a',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'ضد حمله؛ نگران تیم ملی باشیم؟',
                desc: null,
                desc_fa:
                  'گپ و گفت پیرامون حواشی فوتبال ایران، قسمت هفدهم\r\n\r\nبا حضور کارشناسان رسانه:\r\nامیرمحمد یعقوب‌پور\r\nشهرام فرهنگی\r\nرضا خدادادی',
                created_at: '2025-10-11T19:16:58.000000Z',
                updated_at: '2025-10-13T13:07:06.000000Z',
                status: 'approved',
                tags: null,
                views_count: 133,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["eb73d3a0-d15b-11ef-abde-19069aefbf3b", "41a37bc0-d15f-11ef-8d08-1d4ce61156d5"]',
                primary_channel_id: null,
                poster: 'ugcs/c33a4e555b418c16541968bcf4c5bc3f.jpg',
                backdrop: 'ugcs/0b32aec8b0a2d514d78cfb89e4a41ac3.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 3059,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'ضدحمله؛نگرانتیمملیباشیم؟',
                id: '5156e021-638e-416e-8edb-af0cde2f971a',
                type: 'video',
              },
              {
                u_id: '80eeae5f-f54f-4319-8bc9-b2bccc2ef2a0',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa:
                  'سرنخ؛ گفتگو با آمنه بهرامی، مشهورترین قربانی اسیدپاشی',
                desc: null,
                desc_fa:
                  'سرنخ؛ گفتگو با آمنه بهرامی، مشهورترین قربانی اسیدپاشی',
                created_at: '2025-10-11T19:00:45.000000Z',
                updated_at: '2025-10-13T13:01:51.000000Z',
                status: 'approved',
                tags: null,
                views_count: 167,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["eb73d3a0-d15b-11ef-abde-19069aefbf3b", "41a37bc0-d15f-11ef-8d08-1d4ce61156d5"]',
                primary_channel_id: null,
                poster: 'ugcs/c29de7cc6ec0cfbb3b5011950c403642.jpg',
                backdrop: 'ugcs/9c0826f8bd8c1c15fd99b968b3a55d6c.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 2774.033,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns:
                  'سرنخ؛گفتگوباامنهبهرامی،مشهورترینقربانیاسیدپاشی',
                id: '80eeae5f-f54f-4319-8bc9-b2bccc2ef2a0',
                type: 'video',
              },
              {
                u_id: '572878b9-56d8-45be-b8d8-6ec941353579',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'دروازه تهران؛ زیر پای تهران چه می‌گذرد؟',
                desc: null,
                desc_fa:
                  'باحضور:\r\n\r\nنصراله حدادی،تهران شناس \r\n\r\nداریوش شهبازی،کارشناس',
                created_at: '2025-10-11T17:18:07.000000Z',
                updated_at: '2025-10-12T14:14:40.000000Z',
                status: 'approved',
                tags: null,
                views_count: 12,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["eb73d3a0-d15b-11ef-abde-19069aefbf3b", "41a37bc0-d15f-11ef-8d08-1d4ce61156d5"]',
                primary_channel_id: null,
                poster: 'ugcs/3b5dc6ffbbeb9ec24f41fab63ad501e3.jpg',
                backdrop: 'ugcs/5b1cd5eb8208418742dff7928cd5bea3.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 2889.733,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'دروازهتهران؛زیرپایتهرانچهمی‌گذرد؟',
                id: '572878b9-56d8-45be-b8d8-6ec941353579',
                type: 'video',
              },
              {
                u_id: '6884fbc3-99b5-44b3-8dc6-37751dabd419',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'یک روایت فانتزی زیر پوست غرب',
                desc: null,
                desc_fa: 'قسمت پنجم \r\n\r\nروای:\r\nپیمان اکبری',
                created_at: '2025-10-11T17:17:05.000000Z',
                updated_at: '2025-10-13T13:04:31.000000Z',
                status: 'approved',
                tags: null,
                views_count: 27,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["eb73d3a0-d15b-11ef-abde-19069aefbf3b", "41a37bc0-d15f-11ef-8d08-1d4ce61156d5"]',
                primary_channel_id: null,
                poster: 'ugcs/670f29194246fcf7e133bcbd6a6f132b.jpg',
                backdrop: 'ugcs/738d4d2e1e1f5315a5c02e0170cdbf5b.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 1376.76601,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'یکروایتفانتزیزیرپوستغرب',
                id: '6884fbc3-99b5-44b3-8dc6-37751dabd419',
                type: 'video',
              },
              {
                u_id: 'b8b0fdb0-6c1e-4c7c-90af-99a730e69659',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'کات؛ فصل چهارم، شب اول',
                desc: null,
                desc_fa: 'کات؛ فصل چهارم، شب اول',
                created_at: '2025-10-11T09:31:48.000000Z',
                updated_at: '2025-10-13T13:38:45.000000Z',
                status: 'approved',
                tags: null,
                views_count: 1255,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["eb73d3a0-d15b-11ef-abde-19069aefbf3b", "41a37bc0-d15f-11ef-8d08-1d4ce61156d5"]',
                primary_channel_id: null,
                poster: 'ugcs/bb4b831657d0ea8bcaabefd936803093.jpg',
                backdrop: 'ugcs/aad96bca22fc547e8ecbcb36635c9049.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 6126.2,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'کات؛فصلچهارم،شباول',
                id: 'b8b0fdb0-6c1e-4c7c-90af-99a730e69659',
                type: 'video',
              },
              {
                u_id: 'cca6a088-3dfe-4613-acc6-0d019938a495',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'اقتصاد؛ چالش سرمایه‌گذاری در رمز ارزها',
                desc: null,
                desc_fa:
                  'با حضور:\r\nمحمد رضا شرفی، کارشناس بازار ارز دیجیتال\r\n\r\nسهیل نیکزاد، موسس و عضو هیات مدیره انجمن بلاک‌چین ایران\r\n\r\nپوریا آسترکی، سردبیر مجله ارز دیجیتال',
                created_at: '2025-10-11T09:10:12.000000Z',
                updated_at: '2025-10-12T09:06:02.000000Z',
                status: 'approved',
                tags: null,
                views_count: 11,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["eb73d3a0-d15b-11ef-abde-19069aefbf3b", "41a37bc0-d15f-11ef-8d08-1d4ce61156d5"]',
                primary_channel_id: null,
                poster: 'ugcs/db7d864b97345030479c925915bd937c.jpg',
                backdrop: 'ugcs/fc5a4b3346737c8fbd504f029e6fc8d5.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 3973.8,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'اقتصاد؛چالشسرمایه‌گذاریدررمزارزها',
                id: 'cca6a088-3dfe-4613-acc6-0d019938a495',
                type: 'video',
              },
              {
                u_id: 'cb1998b4-0dc3-45b4-a5dd-ba6fc9e4d54e',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'دانستنیها؛ دوباره دیدنی‌ها',
                desc: null,
                desc_fa:
                  'با حضور:\r\nمهدی اسماعیلی، وکیل دادگستری و عضو تیم سازنده روبات و سامانه هوش مصنوعی روبولگال\r\nمحمد واحدی، وکیل دادگستری و نوآور',
                created_at: '2025-10-11T09:07:59.000000Z',
                updated_at: '2025-10-13T12:57:19.000000Z',
                status: 'approved',
                tags: null,
                views_count: 29,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["eb73d3a0-d15b-11ef-abde-19069aefbf3b", "41a37bc0-d15f-11ef-8d08-1d4ce61156d5"]',
                primary_channel_id: null,
                poster: 'ugcs/fdd988e57756d13716f47c1dc7e6c156.jpg',
                backdrop: 'ugcs/0a759cb71fd11dcbeebb870421744280.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 3126.8,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'دانستنیها؛دوبارهدیدنی‌ها',
                id: 'cb1998b4-0dc3-45b4-a5dd-ba6fc9e4d54e',
                type: 'video',
              },
              {
                u_id: '7aebcaf4-2f07-4c90-9c87-c54b765cbde4',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'کربلای ایران؛ پرواز از خط مقدم رسانه',
                desc: null,
                desc_fa:
                  'با حضور:\r\nخانواده شهیدان احسان ذاکری و محمدجواد (امید) الوندی',
                created_at: '2025-10-10T13:07:13.000000Z',
                updated_at: '2025-10-13T10:10:14.000000Z',
                status: 'approved',
                tags: null,
                views_count: 28,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["eb73d3a0-d15b-11ef-abde-19069aefbf3b", "41a37bc0-d15f-11ef-8d08-1d4ce61156d5"]',
                primary_channel_id: null,
                poster: 'ugcs/b98ccef342d0d80b3788a357695e2ac4.jpg',
                backdrop: 'ugcs/583369bab39489d3079285e9e59baaeb.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 3992.133,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'کربلایایران؛پروازازخطمقدمرسانه',
                id: '7aebcaf4-2f07-4c90-9c87-c54b765cbde4',
                type: 'video',
              },
            ],
            current_page: 1,
            last_page: 46,
            per_page: 12,
          },
          {
            list: 'latest_magazines',
            title_fa: 'آخرین‌های مجلات',
            title_en: 'Magazine Updates',
            list_fa: 'آخرین‌های مجلات',
            list_en: 'Magazine Updates',
            style: 'backdrop',
            sortable: false,
            filterable: false,
            data: [
              {
                u_id: '4141d59d-10dd-460a-9652-6d0c1b77c3aa',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'سرتیتر؛ طوفان الاقصی، فصل پیروزی',
                desc: null,
                desc_fa:
                  'باحضور:\r\n\r\nکورش علیانی،پژوهشگر ،نویسنده و مدرس دانشگاه',
                created_at: '2025-10-13T05:33:09.000000Z',
                updated_at: '2025-10-13T13:19:21.000000Z',
                status: 'approved',
                tags: null,
                views_count: 11,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["eb73d3a0-d15b-11ef-abde-19069aefbf3b", "41a37bc0-d15f-11ef-8d08-1d4ce61156d5"]',
                primary_channel_id: null,
                poster: 'ugcs/983c210e65f0e3f0473ec7506b8b7d2e.jpg',
                backdrop: 'ugcs/e40452a0a5d03202805ea3d834cbb931.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 2086.92,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'سرتیتر؛طوفانالاقصی،فصلپیروزی',
                id: '4141d59d-10dd-460a-9652-6d0c1b77c3aa',
                type: 'video',
              },
              {
                u_id: '8fd3c96f-238d-46d1-8876-272e9bfb6ee5',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'دیپلماتیک؛ دو سالگی طوفان الاقصی',
                desc: null,
                desc_fa: 'با حضور:\r\n\r\nخالد قدومی ، نماینده حماس در تهران',
                created_at: '2025-10-12T17:11:55.000000Z',
                updated_at: '2025-10-13T12:39:03.000000Z',
                status: 'approved',
                tags: null,
                views_count: 8,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["eb73d3a0-d15b-11ef-abde-19069aefbf3b", "41a37bc0-d15f-11ef-8d08-1d4ce61156d5"]',
                primary_channel_id: null,
                poster: 'ugcs/a14693980460bc338db24186ffe67bb5.jpg',
                backdrop: 'ugcs/478bb27580cbb6ab9382d477df0569fb.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 2599.733,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'دیپلماتیک؛دوسالگیطوفانالاقصی',
                id: '8fd3c96f-238d-46d1-8876-272e9bfb6ee5',
                type: 'video',
              },
              {
                u_id: '33e0488b-9c04-4f83-a729-4642cdcb2ce5',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'عهد برادری؛ شهید آینده',
                desc: null,
                desc_fa: 'باحضور:\r\n\r\nاستاد اصغر طاهر زاده،نظریه پردازدینی',
                created_at: '2025-10-12T17:03:01.000000Z',
                updated_at: '2025-10-13T12:08:53.000000Z',
                status: 'approved',
                tags: null,
                views_count: 14,
                likes_count: 0,
                comments_count: 0,
                category_id: '["eb73d3a0-d15b-11ef-abde-19069aefbf3b"]',
                primary_channel_id: null,
                poster: 'ugcs/b7937d1871958314391aa35b2a00d654.jpg',
                backdrop: 'ugcs/48e246d7e11bc8bdf53a7906e65cc569.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 3219.6,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'عهدبرادری؛شهیداینده',
                id: '33e0488b-9c04-4f83-a729-4642cdcb2ce5',
                type: 'video',
              },
              {
                u_id: 'c6169c10-a263-42db-9473-40e271b6b574',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'تندرستی؛ چرا روانشناسی اینستاگرامی طرفدار دارد؟',
                desc: null,
                desc_fa: 'باحضور:\r\n\r\nدکتر سیما فردوسی ،روانشناس بالینی',
                created_at: '2025-10-12T17:01:47.000000Z',
                updated_at: '2025-10-13T12:49:24.000000Z',
                status: 'approved',
                tags: null,
                views_count: 18,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["eb73d3a0-d15b-11ef-abde-19069aefbf3b", "41a37bc0-d15f-11ef-8d08-1d4ce61156d5"]',
                primary_channel_id: null,
                poster: 'ugcs/d262322a7616a3b07ed5883d7cfd5918.jpg',
                backdrop: 'ugcs/093579722cbf63a2a08fc8618c4c6cd3.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 2642.133,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'تندرستی؛چراروانشناسیاینستاگرامیطرفداردارد؟',
                id: 'c6169c10-a263-42db-9473-40e271b6b574',
                type: 'video',
              },
              {
                u_id: '0fad4373-2d88-47a0-a06f-6a6edfb6cb86',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'دروازه تهران؛ تهران به روایت آقای تهرانگرد',
                desc: null,
                desc_fa:
                  'باحضور:\r\n\r\nاحمد مسجدی جامعی،وزیر اسبق ارشاد و عضو سابق شورای شهر',
                created_at: '2025-10-11T20:50:14.000000Z',
                updated_at: '2025-10-13T10:15:57.000000Z',
                status: 'approved',
                tags: null,
                views_count: 21,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["eb73d3a0-d15b-11ef-abde-19069aefbf3b", "41a37bc0-d15f-11ef-8d08-1d4ce61156d5"]',
                primary_channel_id: null,
                poster: 'ugcs/e5b9f1da5f61f8d8d201748af7556ad3.jpg',
                backdrop: 'ugcs/67b0b59fdebe7255943da758bbd819ab.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 2878.46601,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'دروازهتهران؛تهرانبهروایتاقایتهرانگرد',
                id: '0fad4373-2d88-47a0-a06f-6a6edfb6cb86',
                type: 'video',
              },
              {
                u_id: '5156e021-638e-416e-8edb-af0cde2f971a',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'ضد حمله؛ نگران تیم ملی باشیم؟',
                desc: null,
                desc_fa:
                  'گپ و گفت پیرامون حواشی فوتبال ایران، قسمت هفدهم\r\n\r\nبا حضور کارشناسان رسانه:\r\nامیرمحمد یعقوب‌پور\r\nشهرام فرهنگی\r\nرضا خدادادی',
                created_at: '2025-10-11T19:16:58.000000Z',
                updated_at: '2025-10-13T13:07:06.000000Z',
                status: 'approved',
                tags: null,
                views_count: 133,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["eb73d3a0-d15b-11ef-abde-19069aefbf3b", "41a37bc0-d15f-11ef-8d08-1d4ce61156d5"]',
                primary_channel_id: null,
                poster: 'ugcs/c33a4e555b418c16541968bcf4c5bc3f.jpg',
                backdrop: 'ugcs/0b32aec8b0a2d514d78cfb89e4a41ac3.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 3059,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'ضدحمله؛نگرانتیمملیباشیم؟',
                id: '5156e021-638e-416e-8edb-af0cde2f971a',
                type: 'video',
              },
              {
                u_id: '80eeae5f-f54f-4319-8bc9-b2bccc2ef2a0',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa:
                  'سرنخ؛ گفتگو با آمنه بهرامی، مشهورترین قربانی اسیدپاشی',
                desc: null,
                desc_fa:
                  'سرنخ؛ گفتگو با آمنه بهرامی، مشهورترین قربانی اسیدپاشی',
                created_at: '2025-10-11T19:00:45.000000Z',
                updated_at: '2025-10-13T13:01:51.000000Z',
                status: 'approved',
                tags: null,
                views_count: 167,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["eb73d3a0-d15b-11ef-abde-19069aefbf3b", "41a37bc0-d15f-11ef-8d08-1d4ce61156d5"]',
                primary_channel_id: null,
                poster: 'ugcs/c29de7cc6ec0cfbb3b5011950c403642.jpg',
                backdrop: 'ugcs/9c0826f8bd8c1c15fd99b968b3a55d6c.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 2774.033,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns:
                  'سرنخ؛گفتگوباامنهبهرامی،مشهورترینقربانیاسیدپاشی',
                id: '80eeae5f-f54f-4319-8bc9-b2bccc2ef2a0',
                type: 'video',
              },
              {
                u_id: '8d1fddbf-f2b8-476e-b874-6d20a58a4453',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'عهد برادری؛ سوگ ناتمام',
                desc: null,
                desc_fa: 'با حضور:\r\n\r\nعلیرضا پناهیان، استاد حوزه و دانشگاه',
                created_at: '2025-10-11T17:52:29.000000Z',
                updated_at: '2025-10-13T12:07:40.000000Z',
                status: 'approved',
                tags: null,
                views_count: 43,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["eb73d3a0-d15b-11ef-abde-19069aefbf3b", "eb73d3a0-d15b-11ef-abde-19069aefbf3b"]',
                primary_channel_id: null,
                poster: 'ugcs/f174c07015af282591825479f7ee648a.jpg',
                backdrop: 'ugcs/28efa883a495b16d4931ff06541f3eda.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 4776.4,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'عهدبرادری؛سوگناتمام',
                id: '8d1fddbf-f2b8-476e-b874-6d20a58a4453',
                type: 'video',
              },
              {
                u_id: '572878b9-56d8-45be-b8d8-6ec941353579',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'دروازه تهران؛ زیر پای تهران چه می‌گذرد؟',
                desc: null,
                desc_fa:
                  'باحضور:\r\n\r\nنصراله حدادی،تهران شناس \r\n\r\nداریوش شهبازی،کارشناس',
                created_at: '2025-10-11T17:18:07.000000Z',
                updated_at: '2025-10-12T14:14:40.000000Z',
                status: 'approved',
                tags: null,
                views_count: 12,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["eb73d3a0-d15b-11ef-abde-19069aefbf3b", "41a37bc0-d15f-11ef-8d08-1d4ce61156d5"]',
                primary_channel_id: null,
                poster: 'ugcs/3b5dc6ffbbeb9ec24f41fab63ad501e3.jpg',
                backdrop: 'ugcs/5b1cd5eb8208418742dff7928cd5bea3.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 2889.733,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'دروازهتهران؛زیرپایتهرانچهمی‌گذرد؟',
                id: '572878b9-56d8-45be-b8d8-6ec941353579',
                type: 'video',
              },
              {
                u_id: '6884fbc3-99b5-44b3-8dc6-37751dabd419',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'یک روایت فانتزی زیر پوست غرب',
                desc: null,
                desc_fa: 'قسمت پنجم \r\n\r\nروای:\r\nپیمان اکبری',
                created_at: '2025-10-11T17:17:05.000000Z',
                updated_at: '2025-10-13T13:04:31.000000Z',
                status: 'approved',
                tags: null,
                views_count: 27,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["eb73d3a0-d15b-11ef-abde-19069aefbf3b", "41a37bc0-d15f-11ef-8d08-1d4ce61156d5"]',
                primary_channel_id: null,
                poster: 'ugcs/670f29194246fcf7e133bcbd6a6f132b.jpg',
                backdrop: 'ugcs/738d4d2e1e1f5315a5c02e0170cdbf5b.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 1376.76601,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'یکروایتفانتزیزیرپوستغرب',
                id: '6884fbc3-99b5-44b3-8dc6-37751dabd419',
                type: 'video',
              },
              {
                u_id: 'e2b1c3d1-edf9-43b8-b688-675d1780833e',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'عهد برادری؛ پدیده جهان اسلام',
                desc: null,
                desc_fa: 'ویژه برنامه سالگرد شهادت سید حسن نصرالله (قسمت پنجم)',
                created_at: '2025-10-11T09:33:03.000000Z',
                updated_at: '2025-10-12T09:31:57.000000Z',
                status: 'approved',
                tags: null,
                views_count: 7,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["eb73d3a0-d15b-11ef-abde-19069aefbf3b", "41a37bc0-d15f-11ef-8d08-1d4ce61156d5"]',
                primary_channel_id: null,
                poster: 'ugcs/3b3de91ff49d857131cc612934ffe76b.jpg',
                backdrop: 'ugcs/c7ae0e2ef2d7b274d1f48fa535bccbe8.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 3712.733,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'عهدبرادری؛پدیدهجهاناسلام',
                id: 'e2b1c3d1-edf9-43b8-b688-675d1780833e',
                type: 'video',
              },
              {
                u_id: 'b8b0fdb0-6c1e-4c7c-90af-99a730e69659',
                user_id: 'ca075240-469c-11f0-8057-6f2695183435',
                name: '',
                name_fa: 'کات؛ فصل چهارم، شب اول',
                desc: null,
                desc_fa: 'کات؛ فصل چهارم، شب اول',
                created_at: '2025-10-11T09:31:48.000000Z',
                updated_at: '2025-10-13T13:38:45.000000Z',
                status: 'approved',
                tags: null,
                views_count: 1255,
                likes_count: 0,
                comments_count: 0,
                category_id:
                  '["eb73d3a0-d15b-11ef-abde-19069aefbf3b", "41a37bc0-d15f-11ef-8d08-1d4ce61156d5"]',
                primary_channel_id: null,
                poster: 'ugcs/bb4b831657d0ea8bcaabefd936803093.jpg',
                backdrop: 'ugcs/aad96bca22fc547e8ecbcb36635c9049.jpg',
                traffic: 1,
                traffic_os: 0,
                traffic_oo: 0,
                internal_studio: 0,
                free: 1,
                persian: 1,
                owner: 7202018,
                amount: '0.00',
                news: 0,
                presale: null,
                inapp: 1,
                exact_runtime: 6126.2,
                master_file: null,
                master_remaster_file: null,
                show: 1,
                vod: 1,
                ir: 1,
                pin: 0,
                name_norm_ns: '',
                name_fa_norm_ns: 'کات؛فصلچهارم،شباول',
                id: 'b8b0fdb0-6c1e-4c7c-90af-99a730e69659',
                type: 'video',
              },
            ],
            current_page: 1,
            last_page: 52,
            per_page: 12,
          },
        ],
      }
      this.ugcs = this.transformUgcsData(this.ugcs)
    } catch (e) {
      console.error('fetch ugcs failed', e)
    }
  },
  methods: {
    ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa
      if (!en) return fa || ''
      return en.charAt(0).toUpperCase() + en.slice(1)
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
<style scoped>
.offer-section {
  margin-top: -11rem;
}

@media (max-width: 1500px) {
  .offer-section {
    margin-top: -7rem;
  }
}

@media (max-width: 1400px) {
  .offer-section {
    margin-top: -5rem;
  }
}

@media (max-width: 1200px) {
  .offer-section {
    margin-top: -3rem;
  }
}
@media (max-width: 992px) {
  .offer-section {
    margin-top: -2rem;
  }
}
@media (max-width: 768px) {
  .offer-section {
    margin-top: -1rem;
  }
}
@media (max-width: 576px) {
  .offer-section {
    margin-top: 2rem;
  }
}
</style>
