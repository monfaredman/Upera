<template>
  <section class="horizontal-list-container mt-4 reach-begin">
    <div
      class="d-flex justify-content-between align-items-center mb-2 container-fluid"
    >
      <h4 class="title">
        {{ $t('show.similar') }}
      </h4>
    </div>
    <div
      v-if="similar && similar.length"
      v-swiper:offerSwiper="swiperOption"
      class="swiper-container"
      style="height: 300px"
    >
      <div class="swiper-wrapper py-1">
        <div
          v-for="(item, index) in similar"
          :key="index"
          class="swiper-slide"
          :class="{ movielabel: item.type == 'movie' }"
        >
          <nuxt-link
            :to="{
              name: (item.type || 'movie') + '-id',
              params: { id: item.id },
            }"
          >
            <OptimizedImage
              :image-src="item.poster"
              :alt="item.name"
              :width="142"
              :height="212"
              :thumb-options="{ w: 142, h: 212, q: 100, a: 'c' }"
              type="posters"
              fluid-grow
            />
          </nuxt-link>
          <div class="mt-2">
            <h6 class="mt-2 small font-weight-normal">
              {{ ChooseLang(item.name, item.name_fa) }}
            </h6>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center py-4">
      <p class="text-muted">محتوای مشابهی یافت نشد</p>
    </div>
  </section>
</template>
<script>
import OptimizedImage from '@/components/item/common/OptimizedImage'

export default {
  name: 'SimilarContent',
  components: {
    OptimizedImage,
  },
  props: {
    similar: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 10,
        slidesPerView: 3.3,
        grabCursor: true,
        setWrapperSize: true,
        threshold: 2,
        breakpoints: {
          200: {
            slidesPerView: 2.5,
          },
          420: {
            slidesPerView: 3.5,
          },
          768: {
            slidesPerView: 4.5,
          },
          992: {
            slidesPerView: 5.5,
          },
          1024: {
            slidesPerView: 6.5,
          },
          1200: {
            slidesPerView: 7,
          },
          1420: {
            slidesPerView: 8,
          },
          1670: {
            slidesPerView: 9,
          },
        },
      },
    }
  },
  methods: {
    ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa
      return en
    },
  },
}
</script>
