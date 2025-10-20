<template>
  <section class="mt-4">
    <HorizontalList
      v-if="similar && similar.length"
      :items="similar"
      :options="swiperOption"
      :instance-name="instanceName"
      :title-fa="$t('show.similar')"
      :link-builder="linkBuilder"
      :card-variant="'poster'"
      :size="{ w: 142, h: 212 }"
      :show-badges="false"
      :show-title="true"
    />

    <div v-else class="text-center py-4">
      <p class="text-muted">محتوای مشابهی یافت نشد</p>
    </div>
  </section>
</template>
<script>
import HorizontalList from '@/components/HorizontalList'

export default {
  name: 'SimilarContent',
  components: {
    HorizontalList,
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
      },
      // instanceName allows multiple swipers to coexist
      instanceName: 'similarSwiper',
    }
  },
  methods: {
    linkBuilder(item) {
      return { name: (item.type || 'movie') + '-id', params: { id: item.id } }
    },
    ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa
      return en
    },
  },
}
</script>

<style scoped>
.container-fluid {
  padding-right: 0 !important;
}
section {
  margin-top: 0 !important;
}

@media (max-width: 768px) {
  section {
    margin-top: -1rem !important;
  }
}
</style>
