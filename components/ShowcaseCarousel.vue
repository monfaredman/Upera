<template>
  <VueSlickCarousel
    :key="swiperKey"
    ref="innerCarousel"
    v-bind="options"
    :rtl="true"
    :arrows="true"
    :dots="true"
    class="swiper-wrapper"
    :class="{ 'dir-ltr': sliders.length === 1 }"
  >
    <template #prevArrow>
      <button
        class="custom-arrow custom-prev"
        type="button"
        aria-label="Previous"
      >
        <i class="fa fa-chevron-left" />
      </button>
    </template>
    <template #nextArrow>
      <button class="custom-arrow custom-next" type="button" aria-label="Next">
        <i class="fa fa-chevron-right" />
      </button>
    </template>

    <!-- Adding manual backdrops -->
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
      v-for="(item, index) in reorderedSliders"
      :key="index"
      class="swiper-slide"
    >
      <div class="row no-gutters">
        <div class="col-12 showcase-pic showcase-pic-main">
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
              :src="transformThumbUrl(item.image_src)"
              :alt="item.name"
            />
            <b-img
              blank
              blank-color="#bbb"
              width="375"
              height="300"
              show
              class="showcase-img d-lg-none"
              :src="transformMobileUrl(item.image_mobile_src)"
              :alt="item.name"
            />
          </template>
        </div>
        <div class="col-md-6 col-lg-5" />
      </div>
      <div
        class="showcase-thumbnail-wrapper-outter d-flex align-items-center justify-content-between pr-md-3 showcases-desc-wrapper"
      >
        <div class="showcase-thumbnail-wrapper w-full">
          <div
            class="d-flex h-full align-items-end d-flex align-items-center justify-content-start"
          >
            <div class="showcase-desc-wrapper">
              <div class="showcase-desc">
                <div v-if="item.logo" class="showcase-logo mb-2 mb-md-4">
                  <b-img
                    :src="item.logo"
                    :alt="item.name"
                    v-bind="{
                      fluidGrow: true,
                      blank: true,
                      blankColor: '#bbb',
                      width: 207,
                      height: 307,
                      show: true,
                    }"
                  />
                </div>
                <div class="showcase-details">
                  <!--Logo-->
                  <div v-if="item.type != 'episode'">
                    <div
                      v-if="!item.logo"
                      class="detail-title text-invert mb-1 mb-md-2"
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
                  </div>
                  <div v-else>
                    <div
                      v-if="!item.logo"
                      class="detail-title text-invert mb-1 mb-md-2"
                    >
                      <nuxt-link
                        :to="{
                          name: item.type + '-id',
                          params: { id: item.id },
                        }"
                      >
                        {{ ChooseLang(item.name, item.name_fa) }}
                        <span v-if="item.season_number > 1" class="show-mobile">
                          {{ item.season_number }}
                        </span>
                      </nuxt-link>
                    </div>
                  </div>

                  <!--Description-->
                  <div
                    v-if="item.type == 'episode'"
                    class="detail-paragraph text-invert mb-1 mb-md-3 hide-mobile font-weight-normal"
                  >
                    {{ $t('show.season') }}{{ item.season_number }} -
                    {{ $t('show.episode') }} {{ item.episode_number }}
                  </div>
                  <div v-else class="detail-paragraph text-invert mb-2 mb-md-3">
                    <nuxt-link v-if="item.slogan" class="tag">
                      {{ item.slogan }}
                    </nuxt-link>
                    <template v-else>
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
                    </template>
                  </div>
                </div>

                <!-- Dubbed / Subbed -->
                <!--
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
                 -->
              </div>

              <!-- Buttons -->
              <div class="showcase-button-wrapper">
                <nuxt-link
                  v-if="item.presale"
                  :to="{ name: item.type + '-id', params: { id: item.id } }"
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
                  class="btn btn-main d-flex justify-content-center align-items-center watch-btn"
                >
                  <i class="fa fa-play fa-xs" />
                  <span class="mr-2">تماشا</span>

                  <!--
                  <span class="hide-mobile hide-tablet">
                    <span v-if="item.type == 'movie'">فیلم</span>
                    <span v-else>این قسمت سریال</span>
                  </span>
                  -->
                </nuxt-link>

                <nuxt-link
                  v-else
                  :to="{ name: 'series-id', params: { id: item.id } }"
                  class="btn btn-main watch-btn"
                >
                  <span> قسمت ها </span>
                </nuxt-link>

                <nuxt-link
                  :to="{ name: item.type + '-id', params: { id: item.id } }"
                  class="btn btn-download ml-md-2 text-white showcase-about-btn"
                >
                  <i class="fa fa-chevron-right fa-xs mr-2 ml-0" />
                  <span> درباره </span>
                  <span>
                    <span v-if="item.type == 'movie'">فیلم</span>
                    <span v-else> سریال</span>
                  </span>
                </nuxt-link>
                <!--
                <nuxt-link
                  :to="{ name: item.type + '-id', params: { id: item.id } }"
                  class="text-invert show-mobile"
                  style="display: none"
                >
                  <i class="icon-info" />
                  <div v-if="item.type != 'episode'">توضیحات</div>
                  <div v-else>قسمت {{ item.episode_number }}</div>
                </nuxt-link>
                -->
              </div>
            </div>

            <!-- Item poster -->

            <!--
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
            -->
          </div>
        </div>
      </div>
    </div>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'ShowcaseCarousel',
  components: { VueSlickCarousel },
  props: {
    sliders: { type: Array, required: true },
    options: { type: Object, default: () => ({}) },
    swiperKey: { type: [String, Number], default: '' },
  },
  computed: {
    reorderedSliders() {
      if (this.sliders.length === 0) return []
      const [first, ...rest] = this.sliders
      return [...rest, first]
    },
  },
  methods: {
    next() {
      if (this.$refs.innerCarousel && this.$refs.innerCarousel.next) {
        this.$refs.innerCarousel.next()
      }
    },
    prev() {
      if (this.$refs.innerCarousel && this.$refs.innerCarousel.prev) {
        this.$refs.innerCarousel.prev()
      }
    },
    ChooseLang(en, fa) {
      if (fa && this.$i18n && this.$i18n.locale === 'fa') return fa
      if (!en) return fa || ''
      return en.charAt(0).toUpperCase() + en.slice(1)
    },
    transformThumbUrl(url) {
      if (!url) return url

      const urlObj = new URL(url)

      // Keep the same `src` param
      const src = urlObj.searchParams.get('src')

      // Build the new URL
      return `https://thumb.upera.shop/thumb?w=1920&h=1070&src=${encodeURIComponent(
        src
      )}`
    },
    transformMobileUrl(url) {
      if (!url) return url

      const urlObj = new URL(url)

      // Keep the same `src` param
      const src = urlObj.searchParams.get('src')

      // Build the new URL
      return `https://thumb.upera.shop/thumb?w=960&h=1000&a=c&src=${encodeURIComponent(
        src
      )}`
    },
  },
}
</script>
<style scoped>
.detail-paragraph {
  font-size: 17px !important;
  font-weight: 500 !important;
}
.detail-title {
  font-size: 44px !important;
  font-weight: 700 !important;
  text-wrap: nowrap;
}

.showcases-desc-wrapper {
  padding: 0 2.6rem !important;
}

.showcase-thumbnail-wrapper-outter {
  position: relative;
  background-color: black;
}

.col-md-6.col-lg-7.col-xl-12.showcase-pic {
  height: 100vh !important;
}
.showcase-desc {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  min-height: 160px;
  display: flex;
  /* place buttons on the same horizontal baseline as arrows and dots */
  position: absolute;
  right: 2.6rem;
  bottom: calc(var(--controls-bottom) + 4rem);
  z-index: 25;
  gap: 0.75rem;
  flex-wrap: nowrap;
}
.showcase-button-wrapper {
  display: flex;
  /* place buttons on the same horizontal baseline as arrows and dots */
  position: absolute;
  right: 2.6rem;
  bottom: var(--controls-bottom);
  z-index: 25;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: nowrap;
}
.showcase-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.showcase-logo {
  max-width: 220px;
  min-height: 60px;
  margin-bottom: 0.5rem;
}
.showcase-logo >>> img {
  width: 100%;
  height: 100px;
  object-fit: contain;
}
.showcase-about-btn {
  background: #00000040;
  backdrop-filter: blur(8px);
  border: 1px solid #ffffff !important;
  color: #fff;
  border-radius: 8px;
  width: 132px !important;
  padding: 0.3rem 0.75rem !important;
  gap: 0.3rem !important;
}
.showcase-about-btn span {
  font-size: 14px !important;
}
.swiper-wrapper >>> .slick-dots {
  position: absolute;
  bottom: var(--controls-bottom);
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  display: flex !important;
  padding: 0;
  margin: 0;
  list-style: none;
}
.swiper-wrapper >>> .slick-dots li {
  margin: 0 4px;
}
.swiper-wrapper >>> .slick-dots li button {
  font-size: 0;
  line-height: 0;
  display: block;
  width: 6px;
  height: 6px;
  padding: 0;
  cursor: pointer;
  border: 0;
  outline: none;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 9999px;
  transition: all 0.3s ease;
}
.swiper-wrapper >>> .slick-dots li.slick-active button {
  background: #fff;
  width: 40px;
}
.col-md-6.col-lg-7.col-xl-12.showcase-pic {
  height: 100vh !important;
}

.swiper-wrapper {
  position: relative;
  /* controls vertical baseline (arrows, dots, buttons) — adjusted per-media queries below */
  --controls-bottom: 19rem;
}

.custom-arrow {
  position: absolute;
  bottom: var(--controls-bottom) !important;
  top: auto;
  transform: none;
  width: 42px;
  height: 42px;
  border-radius: 9999px;
  background: transparent;
  border: 1px solid #ffffff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  backdrop-filter: blur(8px);
  outline: none;
}
.custom-arrow:hover {
  background: rgba(0, 0, 0, 0.55);
}
.custom-prev {
  left: 2.6rem;
  right: auto;
  bottom: var(--controls-bottom) !important;
}
.custom-next {
  left: 6rem;
  right: auto;
  bottom: var(--controls-bottom) !important;
}

@media (max-width: 768px) {
  .custom-arrow {
    display: none;
  }
}

@media (max-width: 576px) {
  .detail-paragraph {
    font-size: 0.875rem !important;
    font-weight: 500 !important;
  }
  .detail-title {
    font-size: 1.125rem !important;
    font-weight: 700 !important;
  }

  /* keep dots horizontally centered but on the shared controls baseline */
  .swiper-wrapper {
    --controls-bottom: 6rem;
  }
  .swiper-wrapper >>> .slick-dots {
    justify-content: center;
  }
  .showcase-button-wrapper {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .showcase-button-wrapper .btn {
    flex: 1 1 calc(50% - 0.25rem);
    text-align: center;
    margin: 0;
  }
  .showcase-logo {
    max-width: 150px !important;
    max-height: 90px !important;
    min-height: 60px !important;
    margin-bottom: 0.5rem;
  }

  .showcase-logo >>> img {
    width: 100%;
    height: 90px;
    object-fit: contain;
  }

  .showcase-thumbnail-wrapper {
    padding: 0 1rem !important;
    margin-top: 4rem !important;
  }

  .showcase .showcase-img {
    height: 100% !important;
  }

  .swiper-wrapper >>> .slick-dots li.slick-active button {
    width: 20px;
  }
}

@media (max-width: 1300px) {
  .showcases-desc-wrapper {
    padding: 0 1rem !important;
  }

  .swiper-wrapper {
    --controls-bottom: 20rem;
  }
  .swiper-wrapper >>> .slick-dots {
    bottom: var(--controls-bottom);
  }

  .showcase-thumbnail-wrapper {
    margin-top: 10rem !important;
  }

  .custom-prev {
    left: 1rem;
    right: auto;
    bottom: var(--controls-bottom) !important;
  }
  .custom-next {
    left: 4rem;
    right: auto;
    bottom: var(--controls-bottom) !important;
  }
}
@media (min-width: 1300px) and (max-width: 1500px) {
  .swiper-wrapper {
    --controls-bottom: 11rem !important;
  }
  .swiper-wrapper >>> .slick-dots {
    bottom: var(--controls-bottom) !important;
  }
  .custom-prev {
    left: 2.6rem;
    right: auto;
    bottom: var(--controls-bottom) !important;
  }
  .custom-next {
    left: 5.8rem;
    right: auto;
    bottom: var(--controls-bottom) !important;
  }
}
@media (min-width: 1300px) {
  .showcase-thumbnail-wrapper {
    margin-top: 0rem;
  }
  .swiper-wrapper {
    --controls-bottom: 21rem;
  }
  .swiper-wrapper >>> .slick-dots {
    bottom: var(--controls-bottom);
  }

  .showcase-button-wrapper {
    bottom: calc(var(--controls-bottom) - 0.5rem);
  }

  .showcase-desc {
    bottom: calc(var(--controls-bottom) + 3rem);
  }
}

@media (min-width: 1500px) and (max-width: 1700px) {
  .swiper-wrapper {
    --controls-bottom: 19rem;
  }
  .custom-prev {
    left: 2.6rem;
    right: auto;
    bottom: var(--controls-bottom) !important;
  }
  .custom-next {
    left: 5.8rem;
    right: auto;
    bottom: var(--controls-bottom) !important;
  }
}
@media (min-width: 1500px) and (max-width: 1600px) {
  .swiper-wrapper {
    --controls-bottom: 12rem;
  }
  .custom-prev {
    left: 2.6rem;
    right: auto;
    bottom: var(--controls-bottom) !important;
  }
  .custom-next {
    left: 5.8rem;
    right: auto;
    bottom: var(--controls-bottom) !important;
  }
}

@media (max-width: 992px) {
  .showcase .showcase-img {
    height: 100%;
  }

  .swiper-wrapper {
    --controls-bottom: 30rem;
  }

  .showcase-button-wrapper {
    bottom: calc(var(--controls-bottom) + 1rem);
  }

  .showcase-desc {
    bottom: calc(var(--controls-bottom) + 4rem);
  }

  .swiper-wrapper >>> .slick-dots {
    bottom: var(--controls-bottom);
  }

  .showcase-thumbnail-wrapper {
    margin-top: 10rem !important;
  }
  .custom-prev {
    left: 12px;
    right: auto;
    bottom: var(--controls-bottom) !important;
  }
  .custom-next {
    left: 64px;
    right: auto;
    bottom: var(--controls-bottom) !important;
  }
}

@media (max-width: 768px) {
  .swiper-wrapper {
    --controls-bottom: 10rem;
  }

  .showcase-button-wrapper {
    bottom: calc(var(--controls-bottom) + 1rem);
  }

  .showcase-desc {
    bottom: calc(var(--controls-bottom) + 4rem);
  }

  .showcase-button-wrapper {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .showcase-button-wrapper .btn {
    flex: 1 1 calc(50% - 0.25rem);
    text-align: center;
    margin: 0;
  }

  .swiper-wrapper >>> .slick-dots {
    bottom: calc(var(--controls-bottom) - 3rem) !important;
  }

  .custom-next {
    left: 56px;
    right: auto;
  }

  .showcases-desc-wrapper {
    padding: 0 2.6rem !important;
  }

  .showcase-thumbnail-wrapper {
    padding: 0 1rem !important;
  }

  .swiper-wrapper >>> .slick-dots li.slick-active button {
    width: 20px;
  }
  .showcase-desc {
    bottom: calc(var(--controls-bottom) + 2rem);
  }
  .showcase-button-wrapper {
    bottom: calc(var(--controls-bottom) - 2rem);
  }
}

.watch-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px !important;
  width: 121px !important;
  padding: 0.3rem 0.75rem !important;
}
.watch-btn span {
  font-size: 14px !important;
  padding: 0 !important;
}

/* Ensure each carousel slide content is vertically centered */
.showcase-carousel,
.showcase-carousel .swiper-slide,
.showcase-carousel .carousel-item,
.showcase-carousel .showcase-thumbnail-wrapper,
.showcase-carousel .showcase-desc,
.showcase-carousel .showcase-button-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Icons inside the carousel keep centered */
.showcase-carousel [class^='icon-'],
.showcase-carousel [class*=' icon-'] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
