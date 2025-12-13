<template>
  <section id="slideshow" dir="ltr">
    <div class="swiper-container showcase main-slideshow showcase-season">
      <div class="swiper-slide">
        <div class="row no-gutters">
          <div class="col-md-6 col-lg-7 showcase-pic">
            <OptimizedImage
              class="showcase-img d-none d-lg-block"
              :image-src="lastEpisode.backdrop"
              :alt="lastEpisode.name"
              :width="1120"
              :height="400"
              :thumb-options="{ w: 1120, h: 400, q: 95, a: 'c', zc: 1 }"
              type="backdrops"
              fluid-grow
              :aspect-ratio="1120 / 400"
            />

            <OptimizedImage
              class="showcase-img d-lg-none"
              :image-src="lastEpisode.backdrop"
              :alt="lastEpisode.name"
              :width="375"
              :height="300"
              :thumb-options="{ w: 375, h: 300, q: 100, a: 'c', zc: 1 }"
              type="backdrops"
              fluid-grow
              :aspect-ratio="375 / 300"
            />
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
                  <div class="title text-invert mb-5 mb-md-3">
                    <nuxt-link
                      :to="{
                        name: 'episode-id',
                        params: { id: lastEpisode.id },
                      }"
                    >
                      {{ ChooseLang(data.item.name, data.item.name_fa) }} - قسمت
                      {{ lastEpisode.episode_number }}
                    </nuxt-link>
                  </div>
                  <div
                    class="p-fs-small text-invert mb-1 mb-md-3 hide-mobile font-weight-normal"
                  >
                    جدیدترین قسمت
                  </div>
                </div>
                <div class="showcase-button-wrapper">
                  <nuxt-link
                    :to="{
                      name: 'episode-id',
                      params: { id: lastEpisode.id },
                    }"
                    class="text-invert show-mobile"
                  >
                    <i class="icon-info" />
                    <div>توضیحات این قسمت</div>
                  </nuxt-link>

                  <nuxt-link
                    :to="{
                      name: 'episode-show-id',
                      params: { id: lastEpisode.id },
                    }"
                    class="btn btn-main"
                  >
                    نمایش
                  </nuxt-link>

                  <nuxt-link
                    :to="{
                      name: 'episode-id',
                      params: { id: lastEpisode.id },
                    }"
                    class="btn btn-dark btn-download ml-md-2 hide-mobile"
                  >
                    توضیحات این قسمت <i class="icon-info" />
                  </nuxt-link>
                </div>
              </div>
              <div class="thumbnail hide-mobile">
                <nuxt-link
                  :to="{
                    name: 'episode-id',
                    params: { id: lastEpisode.id },
                  }"
                >
                  <OptimizedImage
                    class="thumbnail"
                    :image-src="lastEpisode.poster"
                    :alt="lastEpisode.name"
                    :width="207"
                    :height="307"
                    :thumb-options="{ w: 207, h: 307, q: 100, a: 'c' }"
                    type="posters"
                    fluid-grow
                    :aspect-ratio="207 / 307"
                  />
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import OptimizedImage from '@/components/item/common/OptimizedImage'

export default {
  name: 'SeriesLastEpisode',
  components: {
    OptimizedImage,
  },
  props: {
    data: { type: Object, default: () => ({ item: {} }) },
    lastEpisode: { type: Object, default: () => ({}) },
    isWatchlist: { type: [Number, Boolean], default: 0 },
  },
  methods: {
    ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa
      return en
    },
  },
}
</script>
