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
              :class="(computedLinkClass, ['media-card', { offer: hoverable }])"
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
                <b-img
                  blank
                  blank-color="#bbb"
                  :width="size.w"
                  :height="223"
                  show
                  class="d-none d-lg-block d-xl-none d-xxl-none"
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
                  class="d-none d-lg-none d-xl-block d-xxl-none"
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
              </template>
            </nuxt-link>

            <div v-if="!hoverable" class="mt-2 d-none d-md-inline">
              <h6 class="mt-2 small font-weight-normal">
                {{ ChooseLang(item.name, item.name_fa) }}
              </h6>
            </div>
          </template>
          <template v-else>
            <nuxt-link
              v-if="hoverable"
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

                <b-img
                  v-if="variant === 'backdrop'"
                  blank
                  blank-color="#bbb"
                  :src="backdropSrc(item.backdrop, item.cdnType ?? 1)"
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
                  :class="{ 'video-overlay': item.type === 'video' }"
                >
                  <template v-if="item.type !== 'video'">
                    <h5 class="media-title">
                      {{ ChooseLang(item.name, item.name_fa) }}
                    </h5>
                    <p class="media-genre">
                      {{ item.genre || '...' }}
                    </p>
                  </template>
                  <div v-else class="video-stats">
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
    posterSrc(filename, isMobile = false) {
      if (!filename) return ''
      const { w, h } = isMobile ? { w: 142, h: 212 } : this.size
      return `${THUMB_BASE}?w=${w}&h=${h}&q=100&a=c&src=${CDN_POSTERS}/${filename}`
    },
    backdropSrc(filename, cdnType = 1) {
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
      const base = cdnType === 1 ? CDN_BACKDROPS_1 : CDN_BACKDROPS_2

      return this.variant === 'md_backdrop'
        ? `${THUMB_BASE}?w=${w}&h=${h}&q=100&src=${base}/${filename}`
        : `${THUMB_BASE}?w=${w}&h=${h}&q=100&a=t&src=${base}/${filename}`
    },
    ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa
      return en
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
.none-media-title {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  margin: 0 !important;
}
</style>
