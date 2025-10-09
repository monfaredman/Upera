<template>
  <div>
    <!-- Slide layout (default) -->
    <div v-if="layout === 'slide'" class="swiper-slide">
      <div class="row no-gutters">
        <div class="col-md-12 col-lg-12 showcase-pic">
          <!-- Desktop Image -->
          <template v-if="variant === 'poster'">
            <nuxt-link :to="resolvedLink" :class="computedLinkClass">
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
            </nuxt-link>

            <div v-if="!isOffer" class="mt-2 d-none d-md-inline">
              <h6 class="mt-2 small font-weight-normal">
                {{ ChooseLang(item.name, item.name_fa) }}
              </h6>
            </div>
          </template>
          <template v-else>
            <nuxt-link :to="resolvedLink" :class="computedLinkClass">
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
          </template>
          <!-- Mobile Image -->
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
          <div
            v-if="variant === 'poster' && !isOffer"
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
      // only use mobile dimensions in slide layout when mobileSrc exists
      if (this.item?.mobileSrc && this.layout === 'slide') {
        w = 375
        h = 300
      }
      const base = cdnType === 1 ? CDN_BACKDROPS_1 : CDN_BACKDROPS_2
      return `${THUMB_BASE}?w=${w}&h=${h}&q=90&a=t&zc=1&fmt=webp&src=${base}/${filename}`
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
</style>
