<template>
  <VueSlickCarousel
    :key="swiperKey"
    ref="innerCarousel"
    v-bind="options"
    :arrows="true"
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

    <div v-for="(item, index) in sliders" :key="index" class="swiper-slide">
      <div class="row no-gutters">
        <div class="col-md-6 col-lg-7 col-xl-12 showcase-pic">
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
          <div
            class="d-flex h-full align-items-end d-flex align-items-center justify-content-start"
          >
            <div class="pr-md-4 pr-md-2 showcase-desc-wrapper">
              <div class="showcase-desc">
                <!--Logo-->
                <div v-if="item.type != 'episode'">
                  <div v-if="item.logo" class="showcase-logo mb-2">
                    <b-img
                      :src="item.logo"
                      :alt="item.name"
                      style="
                        max-width: 220px !important;
                        min-height: 180px !important;
                      "
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
                  <div v-else class="title text-invert mb-1 mb-md-3">
                    <nuxt-link
                      :to="{ name: item.type + '-id', params: { id: item.id } }"
                    >
                      {{ ChooseLang(item.name, item.name_fa) }}
                    </nuxt-link>
                  </div>
                </div>
                <div v-else>
                  <div v-if="item.logo" class="showcase-logo mb-2">
                    <b-img
                      :src="item.logo"
                      :alt="item.name"
                      style="
                        max-width: 220px !important;
                        min-height: 180px !important;
                      "
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
                  <div v-else class="title text-invert mb-1 mb-md-3">
                    <nuxt-link
                      :to="{ name: item.type + '-id', params: { id: item.id } }"
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
                  class="p-fs-small text-invert mb-1 mb-md-3 hide-mobile font-weight-normal"
                >
                  {{ $t('show.season') }}{{ item.season_number }} -
                  {{ $t('show.episode') }} {{ item.episode_number }}
                </div>
                <div v-else class="text-invert mb-1 mb-md-3">
                  <nuxt-link
                    v-for="(persianName, englishName) in item.genre"
                    :key="englishName"
                    :to="{ name: 'lists-list', params: { list: englishName } }"
                    class="tag"
                  >
                    {{ persianName }}
                  </nuxt-link>
                </div>
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
                  class="btn btn-main d-flex justify-content-between align-items-center"
                >
                  <span>تماشا</span>
                  <div class="mr-1"><i class="fa fa-play fa-xs" /></div>

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
                  class="btn btn-main"
                >
                  قسمت ها
                </nuxt-link>

                <nuxt-link
                  :to="{ name: item.type + '-id', params: { id: item.id } }"
                  class="btn btn-download ml-md-2 hide-mobile text-white showcase-about-btn"
                >
                  درباره
                  <span class="hide-mobile hide-tablet">
                    <span v-if="item.type == 'movie'">فیلم</span>
                    <span v-else> سریال</span>
                  </span>
                  <i class="fa fa-chevron-left fa-xs mr-2" />
                </nuxt-link>

                <nuxt-link
                  :to="{ name: item.type + '-id', params: { id: item.id } }"
                  class="text-invert show-mobile"
                >
                  <i class="icon-info" />
                  <div v-if="item.type != 'episode'">توضیحات</div>
                  <div v-else>قسمت {{ item.episode_number }}</div>
                </nuxt-link>
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
  },
}
</script>
<style scoped>
.col-md-6.col-lg-7.col-xl-12.showcase-pic {
  height: 100vh !important;
}
.showcase-about-btn {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid #fff !important;
  color: #fff;
}
.col-md-6.col-lg-7.col-xl-12.showcase-pic {
  height: 100vh !important;
}

.swiper-wrapper {
  position: relative;
}

.custom-arrow {
  position: absolute;
  bottom: 16px;
  top: auto;
  transform: none;
  width: 44px;
  height: 44px;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.6);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  backdrop-filter: blur(6px);
  outline: none;
}
.custom-arrow:hover {
  background: rgba(0, 0, 0, 0.55);
}
.custom-prev {
  left: 12px;
  bottom: 400px;
}
.custom-next {
  left: 64px; /* 12(left) + 44(width) + 8(gap) */
  right: auto;
  bottom: 400px;
}
@media (max-width: 768px) {
  .custom-arrow {
    width: 36px;
    height: 36px;
  }
  .custom-next {
    left: 56px; /* 12 + 36 + 8 */
  }
}
</style>
