<template>
  <div class="statistics-item statistics-item-row text-muted">
    <i class="icon-profile" />
    <span class="statistics-item-caption">
      <nuxt-link :id="ageRating" to="/profile/about-contact" class="text-black">
        <span class="hide-mobile">گروه سنی </span>
        <span class="font-weight-bold">{{ ageRating }}</span>
      </nuxt-link>

      <!-- Age Rating Tooltips -->
      <span v-show="false" id="G" class="tooltip-target">G</span>
      <b-tooltip target="G" title="مناسب تمامی سنین" variant="dark" />

      <span v-show="false" id="PG" class="tooltip-target">PG</span>
      <b-tooltip
        target="PG"
        title="سرپرستی والدین پیشنهاد می‌شود"
        variant="dark"
      />

      <span v-show="false" id="PG-13" class="tooltip-target">PG-13</span>
      <b-tooltip
        target="PG-13"
        title="برخی از صحنه ها برای افراد زیر ۱۳ سال نامناسب است"
        variant="dark"
      />

      <span v-show="false" id="R" class="tooltip-target">R</span>
      <b-tooltip
        target="R"
        title="زیر ۱۸ سال به همراهی والدین یا سرپرست نیاز دارد"
        variant="dark"
      />

      <span v-show="false" id="X" class="tooltip-target">X</span>
      <b-tooltip
        target="X"
        title="هیچ فرد کمتر از ۱۸ سال نباید این فیلم ها را ببینند"
        variant="dark"
      />
    </span>
  </div>
</template>

<script>
export default {
  name: 'AgeRatingItem',
  props: {
    ageRating: {
      type: String,
      required: true,
      validator: (value) => ['G', 'PG', 'PG-13', 'R', 'X'].includes(value),
    },
  },
  mounted() {
    // Ensure tooltips are properly initialized
    this.$nextTick(() => {
      // Bootstrap Vue tooltips are automatically initialized
    })
  },
}
</script>

<style scoped>
.age-rating-link {
  text-decoration: none;
  color: inherit;
}

.age-rating-link:hover {
  text-decoration: underline;
}
</style>
