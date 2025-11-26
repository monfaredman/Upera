<template>
  <div>
    <!-- Slide layout (default) -->
    <div v-if="layout === 'slide'" class="swiper-slide">
      <div class="row no-gutters">
        <div class="col-md-12 col-lg-12 showcase-pic">
          <!-- Desktop Image -->
          <template v-if="variant === 'poster'">
            <nuxt-link
              :to="resolvedLink"
              :class="
                (computedLinkClass,
                ['media-card', { offer: hoverable }],
                { 'is-series': item.type != 'movie' })
              "
            >
              <template v-if="hoverable">
                <div class="media-image-wrapper">
                  <b-img
                    blank
                    blank-color="#bbb"
                    :width="size.w"
                    :height="223"
                    show
                    class="d-none d-lg-block d-xl-none d-xxl-none media-image"
                    :src="
                      variant === 'poster'
                        ? posterSrc(item.poster)
                        : backdropSrc(
                            item.mobileSrc ? item.mobileSrc : item.backdrop,
                            item.cdnType ?? 1
                          )
                    "
                    :alt="altText"
                    rounded
                  />
                  <b-img
                    blank
                    blank-color="#bbb"
                    :width="size.w"
                    :height="241"
                    show
                    class="d-none d-lg-none d-xl-block d-xxl-none media-image"
                    :src="
                      variant === 'poster'
                        ? posterSrc(item.poster)
                        : backdropSrc(
                            item.mobileSrc ? item.mobileSrc : item.backdrop,
                            item.cdnType ?? 1
                          )
                    "
                    :alt="altText"
                    rounded
                  />

                  <!-- Hover Overlay -->
                  <div v-if="hoverable" class="hover-overlay">
                    <h5 class="media-title">
                      {{ ChooseLang(item.name, item.name_fa) }}
                    </h5>
                    <p class="media-genre">
                      {{ item.genre || '...' }}
                    </p>
                  </div>
                </div>
              </template>
              <template v-else>
                <!-- Desktop Images  -->
                <b-img
                  blank
                  blank-color="#bbb"
                  :width="size.w"
                  :height="size.h"
                  show
                  class="d-none d-lg-block d-xl-none d-xxl-none"
                  style="min-height: fit-content"
                  :src="
                    variant === 'poster'
                      ? posterSrc(item.poster)
                      : backdropSrc(
                          item.mobileSrc ? item.mobileSrc : item.backdrop,
                          item.cdnType ?? 1
                        )
                  "
                  :alt="altText"
                  rounded
                />
                <!--xl Desktop Images  -->
                <b-img
                  blank
                  blank-color="#bbb"
                  :width="size.w"
                  :height="size.h"
                  show
                  class="d-none d-lg-none d-xl-block d-xxl-none non-hover-media-image-xxl"
                  style="min-height: fit-content"
                  :src="
                    variant === 'poster'
                      ? posterSrc(item.poster)
                      : backdropSrc(
                          item.mobileSrc ? item.mobileSrc : item.backdrop,
                          item.cdnType ?? 1
                        )
                  "
                  :alt="altText"
                  rounded
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
                  class="d-none d-lg-none d-xl-block d-xxl-none non-hover-media-image-xxl"
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
                  class="d-none d-lg-none d-xl-block d-xxl-none non-hover-media-image-xxl"
                  :src="
                    'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/' +
                    item.poster
                  "
                  :alt="item.name"
                />
                <!-- Badges -->
                <template v-if="showBadges">
                  <span
                    v-if="showDubbed"
                    class="label label-rounded label-red label-1"
                    >دوبله</span
                  >
                  <span
                    v-else-if="showSubtitle"
                    class="label label-rounded label-warning label-1"
                    >زیرنویس</span
                  >
                  <span v-if="showFree" class="label label-blue label-2"
                    >رایگان</span
                  >
                </template>
              </template>
            </nuxt-link>

            <div v-if="!hoverable" class="mt-2 d-none d-md-inline">
              <h6 class="mt-2 small font-weight-normal">
                {{ ChooseLang(item.name, item.name_fa) }}
              </h6>
            </div>
          </template>
          <template v-else>
            <div
              v-if="hoverable && item.type === 'teaser'"
              :class="(computedLinkClass, ['media-card', { offer: hoverable }])"
              style="cursor: pointer"
              @click="handleTeaserClick"
            >
              <div class="media-image-wrapper">
                <b-img
                  v-if="variant === 'backdrop'"
                  blank
                  blank-color="#bbb"
                  :src="backdropSrc(item.backdrop, item.cdnType ?? 1, true)"
                  :alt="altText"
                  :width="size.w"
                  :height="size.h"
                  class="media-image"
                  rounded
                />

                <!-- Teaser Play Icon Overlay -->
                <div class="teaser-play-overlay">
                  <div class="teaser-play-icon-circle">
                    <i class="icon-play" />
                  </div>
                </div>

                <!-- Hover Overlay -->
                <div class="hover-overlay teaser-overlay">
                  <h5 class="media-title">
                    {{ ChooseLang(item.name, item.name_fa) }}
                  </h5>
                </div>
              </div>
            </div>
            <nuxt-link
              v-else-if="hoverable"
              :to="resolvedLink"
              :class="(computedLinkClass, ['media-card', { offer: hoverable }])"
            >
              <div class="media-image-wrapper">
                <!-- Non Hover Overlay -->
                <div v-if="item.type === 'video'" class="none-hover-overlay">
                  <p class="none-media-title">
                    {{ ChooseLang(item.studio_list_en, item.studio_list_fa) }}
                  </p>
                </div>
                <div
                  v-if="item.type === 'live'"
                  class="none-hover-overlay-live"
                >
                  <img
                    :src="require('~/assets/images/live-icon.gif')"
                    class="image-live"
                  />
                  <p class="none-media-title">نمایش همزمان</p>
                </div>

                <b-img
                  v-if="variant === 'backdrop'"
                  blank
                  blank-color="#bbb"
                  :src="
                    backdropSrc(
                      isOffer ? item.back_teaser : item.backdrop,
                      item.cdnType ?? 1
                    )
                  "
                  :alt="altText"
                  :width="size.w"
                  :height="size.h"
                  class="media-image"
                  rounded
                />
                <!-- Hover Overlay -->
                <div
                  v-if="hoverable"
                  class="hover-overlay"
                  :class="{
                    'video-overlay':
                      item.type === 'video' || item.type === 'live',
                  }"
                >
                  <template
                    v-if="item.type !== 'video' && item.type !== 'live'"
                  >
                    <h5 class="media-title">
                      {{ ChooseLang(item.name, item.name_fa) }}
                    </h5>
                    <p class="media-genre">
                      {{ getGenreDisplay(item.new_genres) || '...' }}
                    </p>
                  </template>
                  <div v-else-if="item.type === 'video'" class="video-stats">
                    <div class="stat-item">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                        ></path>
                      </svg>
                      <span>{{ item.likes || 0 }}</span>
                    </div>
                    <div class="stat-item">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                        ></path>
                      </svg>
                      <span>{{ item.comments || 0 }}</span>
                    </div>
                    <div class="stat-item">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        ></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      <span>{{ item.watching || 0 }}</span>
                    </div>
                  </div>
                  <div v-else-if="item.type === 'live'" class="live-stats">
                    <p>{{ ChooseLang(item.name, item.name_fa) }}</p>
                    <div>
                      <i
                        class="fa fa-dot-circle fa-xs"
                        style="color: #1b6be5"
                      />
                      <span>۱۲</span> <span>بیننده</span>
                    </div>
                  </div>
                </div>
              </div>
            </nuxt-link>
            <nuxt-link v-else :to="resolvedLink" :class="computedLinkClass">
              <b-img
                blank
                blank-color="#bbb"
                :width="size.w"
                :height="size.h"
                show
                class="d-none d-lg-block"
                :src="backdropSrc(item.backdrop, item.cdnType ?? 1)"
                :alt="altText"
                rounded
              />
            </nuxt-link>
            <div v-if="item.type === 'video'" class="mt-2 d-none d-md-inline">
              <h6 class="mt-2 small font-weight-normal">
                {{ ChooseLang(item.name, item.name_fa) }}
              </h6>
            </div>
          </template>
          <!-- Mobile Image -->
          <nuxt-link
            v-if="!isOffer && !hoverable"
            :to="resolvedLink"
            :class="computedLinkClass"
          >
            <b-img
              blank
              blank-color="#bbb"
              width="142"
              height="159"
              show
              class="d-sm-none"
              :src="
                variant === 'poster'
                  ? posterSrc(item.poster, true)
                  : backdropSrc(
                      item.mobileSrc ? item.mobileSrc : item.backdrop,
                      item.cdnType ?? 1
                    )
              "
              :alt="altText"
              rounded
            />
            <b-img
              blank
              width="142"
              height="232"
              blank-color="#bbb"
              show
              class="d-none d-sm-block d-lg-none"
              :src="
                variant === 'poster'
                  ? posterSrc(item.poster)
                  : backdropSrc(
                      item.mobileSrc ? item.mobileSrc : item.backdrop,
                      item.cdnType ?? 1
                    )
              "
              :alt="altText"
              rounded
            />
          </nuxt-link>
          <div
            v-if="variant === 'poster' || item.type === 'video'"
            class="mt-2 d-block d-md-none"
          >
            <h6 class="mt-2 small font-weight-normal">
              {{ ChooseLang(item.name, item.name_fa) }}
            </h6>
          </div>
        </div>
      </div>
    </div>

    <!-- Grid layout -->
    <div v-else>
      <nuxt-link :to="resolvedLink" :class="computedLinkClass">
        <b-img
          v-if="variant === 'poster'"
          blank
          blank-color="#bbb"
          :width="size.w"
          :height="size.h"
          show
          :src="posterSrc(item.poster)"
          :alt="altText"
        />
        <b-img
          v-else
          blank
          blank-color="#bbb"
          :width="size.w"
          :height="size.h"
          show
          :src="backdropSrc(item.backdrop, item.cdnType ?? 1)"
          :alt="altText"
        />
        <!-- Badges -->
        <template v-if="showBadges">
          <span v-if="showDubbed" class="label label-rounded label-red label-1"
            >دوبله</span
          >
          <span
            v-else-if="showSubtitle"
            class="label label-rounded label-warning label-1"
            >زیرنویس</span
          >
          <span v-if="showFree" class="label label-blue label-2">رایگان</span>
        </template>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
const THUMB_BASE = 'https://thumb.upera.shop/thumb'
const CDN_POSTERS = 'https://cdn.upera.shop/s3/posters'
const CDN_BACKDROPS_1 = 'https://cdn.upera.shop/s3/backdrops'
const CDN_BACKDROPS_2 = 'https://s35.upera.net/files2'

export default {
  name: 'MediaCard',
  props: {
    item: { type: Object, required: true },
    index: { type: Number, default: 0 },
    hoverable: { type: Boolean, default: false },
    // 'poster' or 'backdrop'
    variant: { type: String, default: 'poster' },
    // { w: number, h: number }
    size: {
      type: Object,
      default: () => ({ w: 1512, h: 461 }),
    },
    // Function: (item) => routeObject
    linkBuilder: { type: [Function, String, Object], required: true },
    showBadges: { type: Boolean, default: true },
    addSeriesClass: { type: Boolean, default: true },
    // 'slide' | 'grid'
    layout: { type: String, default: 'slide' },
    // additional class for nuxt-link (e.g., 'actor' in poster grid)
    linkBaseClass: { type: [String, Object, Array], default: '' },
    isOffer: { type: Boolean, default: false },
  },
  computed: {
    altText() {
      return this.item?.name || this.item?.name_fa || ''
    },
    computedLinkClass() {
      return [
        this.linkBaseClass,
        // { 'is-series': this.addSeriesClass && this.item?.type !== 'movie' },
      ]
    },
    resolvedLink() {
      if (typeof this.linkBuilder === 'string') {
        return this.linkBuilder
      }
      if (typeof this.linkBuilder === 'object') {
        return this.linkBuilder
      }
      return this.linkBuilder(this.item)
    },
    // Badges visibility derived from item and env
    showDubbed() {
      return !this.item?.ir && !!this.item?.persian
    },
    showSubtitle() {
      return !this.item?.ir && !this.item?.persian
    },
    showFree() {
      const env = this.$config?.envname
      return !!this.item?.free && env === 'upera'
    },
  },
  methods: {
    handleTeaserClick() {
      if (
        this.item.type === 'teaser' &&
        typeof this.linkBuilder === 'function'
      ) {
        const result = this.linkBuilder(this.item)
        if (result && typeof result.click === 'function') {
          result.click()
        }
      }
    },
    posterSrc(filename, isMobile = false) {
      if (!filename) return ''
      const { w, h } = isMobile ? { w: 142, h: 212 } : this.size
      return `${THUMB_BASE}?w=${w}&h=${h}&q=100&a=c&src=${CDN_POSTERS}/${filename}`
    },
    backdropSrc(filename, cdnType = 1, isTeaser = false) {
      if (!filename) return ''
      let { w, h } = this.size

      // Special config for video type
      if (this.item?.type === 'video') {
        w = 364
        h = 190
        return `${THUMB_BASE}?w=${w}&h=${h}&q=100&a=c&src=${CDN_BACKDROPS_1}/${filename}`
      }

      // only use mobile dimensions in slide layout when mobileSrc exists
      if (this.item?.mobileSrc && this.layout === 'slide') {
        w = 375
        h = 300
      }

      if (isTeaser) {
        return `https://thumb.upera.shop/thumb?w=382&h=220&q=100&a=t&src=https://cdn.upera.shop/s3/${filename}`
      }
      const base = cdnType === 1 ? CDN_BACKDROPS_1 : CDN_BACKDROPS_2
      if (this.isOffer) {
        if (this.index === 0)
          return `https://thumb.upera.shop/thumb?w=${w}&h=${h}&q=100&a=t&src=https://cdn.upera.shop/s3/${filename}`
        else {
          return `https://thumb.upera.shop/thumb?w=${1600}&h=${1000}&q=100&a=r&src=https://cdn.upera.shop/s3/${filename}`
        }
      }
      return this.variant === 'md_backdrop'
        ? `${THUMB_BASE}?w=${w}&h=${h}&q=100&src=${base}/${filename}`
        : `${THUMB_BASE}?w=${w}&h=${h}&q=100&a=t&src=${base}/${filename}`
    },
    ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa
      return en
    },

    getGenreDisplay(newGenre) {
      if (!newGenre) return ''

      if (typeof newGenre === 'object' && newGenre !== null) {
        return Object.values(newGenre).join(', ')
      }

      return newGenre
    },
  },
}
</script>

<style scoped>
.showcase-img {
  object-fit: cover;
}
.rounded {
  border-radius: 6px !important;
}

.media-card.offer .media-image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.media-card.offer .media-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.media-card.offer:hover .media-image {
  transform: scale(1.05);
  filter: brightness(0.7);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
}

.media-card.offer .hover-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  color: #fff;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  background: linear-gradient(to bottom rgba(0, 0, 0, 0.8), transparent);
}

.media-card.offer .hover-overlay.video-overlay {
  background-color: #00000099;
  padding: 0.5rem;
}

.media-card.offer:hover .hover-overlay {
  opacity: 1;
  transform: translateY(0);
}

.media-card.offer .media-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  line-height: 1.3;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.7);
}

.media-card.offer .media-genre {
  font-size: 0.875rem;
  opacity: 0.8;
  line-height: 1.2;
}

.media-card.offer .video-stats {
  width: 100%;
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  align-items: center;
  gap: 5rem;
  justify-content: space-between !important;
}

.media-card.offer .stat-item {
  width: 33%;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: #fff;
  justify-content: center;
}

.media-card.offer .stat-item svg {
  width: 16px;
  height: 16px;
  opacity: 0.9;
}

.none-hover-overlay {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem 1rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
  border-bottom-left-radius: 8px;
  z-index: 10;
}

.media-card.offer:hover .none-hover-overlay {
  background: rgba(0, 0, 0, 0.85);
}

.none-hover-overlay .media-title {
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0;
  line-height: 1.3;
}

.none-hover-overlay {
  width: fit-content;
  height: 28px;
  top: 8px;
  right: 8px;
  opacity: 1;

  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  border-image-source: linear-gradient(
    83.46deg,
    rgba(0, 0, 0, 0.2) 0.19%,
    rgba(102, 102, 102, 0) 100.19%
  ) !important;
  border-radius: 6px;
  padding-right: 5.33px;
  padding-left: 5.33px;
  border-width: 0.5px;
}

.none-hover-overlay-live {
  position: absolute;
  padding: 0.5rem 0.6rem;
  z-index: 10;
  width: fit-content;
  height: 28px;
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff0000;
  border-radius: 8px;
}

.media-card.offer .live-stats {
  width: 100%;
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  align-items: center;
  gap: 5rem;
  justify-content: space-between !important;
}

.media-card.offer:hover .none-hover-overlay-live {
  background: rgba(0, 0, 0, 0.85);
}

.none-hover-overlay-live .none-media-title {
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0;
  line-height: 1.3;
  color: white !important;
}
.none-hover-overlay-live .image-live {
  width: 10px;
  height: 10px;
  margin-left: 32px;
  border-radius: 1rem;
  scale: 6.5;
}

.none-media-title {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  margin: 0 !important;
}

@media (max-width: 576px) {
  .none-hover-overlay-live .image-live {
    width: 10px;
    height: 10px;
    margin-left: 32px;
    border-radius: 1rem;
    scale: 3.5;
  }

  .live-stats span {
    font-size: 10px !important;
  }
  .live-stats p {
    font-size: 12px !important;
    margin: 0 !important;
  }
  .live-stats {
    gap: 2rem !important;
    margin: 0 !important;
  }

  .media-card.offer .media-image {
    width: 100%;
    height: 9rem !important;
    object-fit: cover;
    transition: transform 0.3s ease, filter 0.3s ease;
  }
}

/* Teaser Play Icon Overlay */
.teaser-play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  transition: background 0.3s ease;
  border-radius: 8px;
  pointer-events: none;
  z-index: 5;
}

.media-card.offer:hover .teaser-play-overlay {
  background: rgba(0, 0, 0, 0.5);
}

.teaser-play-icon-circle {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.media-card.offer:hover .teaser-play-icon-circle {
  transform: scale(1.1);
  background: rgba(255, 255, 255, 1);
}

.teaser-play-icon-circle i {
  font-size: 24px;
  color: #000;
  margin-left: 4px;
}

.hover-overlay.teaser-overlay {
  bottom: 0;
  top: auto;
  height: auto;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  padding: 12px;
  z-index: 6;
}

@media (max-width: 767.98px) {
  .teaser-play-icon-circle {
    width: 48px;
    height: 48px;
  }

  .teaser-play-icon-circle i {
    font-size: 18px;
  }
}

@media (max-width: 1500px) {
  .non-hover-media-image-xxl {
    height: auto !important;
    width: 100% !important;
  }
}

.is-series {
  position: relative;
  display: block;
}

.is-series img:nth-child(2) {
  -webkit-transform: scale(0.96);
  transform: scale(0.96);
  opacity: 0.3;
  position: absolute;
  top: -4%;
  left: 0;
  border-radius: 8px;
}

.is-series img:nth-child(3) {
  -webkit-transform: scale(0.91);
  transform: scale(0.91);
  opacity: 0.15;
  position: absolute;
  top: -8%;
  left: 0;
  border-radius: 8px;
}

.is-series img:nth-child(4) {
  position: relative;
  z-index: 5;
  border-radius: 8px;
}
</style>
