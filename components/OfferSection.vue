<template>
  <div v-if="offer && offer.data && offer.data.length" class="offer-section">
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
      card-variant="backdrop"
      :size="{ w: 764, h: 400 }"
      :link-builder="buildIdRoute"
      :show-badges="true"
      :is-offer="true"
    />
  </div>
</template>

<script>
import HorizontalList from '@/components/HorizontalList'

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

export default {
  name: 'OfferSection',
  components: {
    HorizontalList,
  },
  props: {
    offer: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      SWIPER_OPTION_OFFER,
    }
  },
  methods: {
    buildIdRoute(item) {
      return { name: item.type + '-id', params: { id: item.id } }
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
    margin-top: -8rem;
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
