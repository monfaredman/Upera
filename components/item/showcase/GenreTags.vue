<template>
  <div class="genre-tags">
    <nuxt-link
      v-for="(persianName, englishName) in genres"
      :key="englishName"
      :to="{
        name: 'lists-list',
        params: { list: englishName },
      }"
      class="tag"
    >
      {{ persianName }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'GenreTags',
  props: {
    genres: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style scoped>
.genre-tags {
  display: flex;
  font-size: 17px !important;
  font-weight: 500 !important;
  text-shadow: 2px 2px 1px rgb(0 0 0 / 69%);
}

@media (max-width: 576px) {
  .genre-tags {
    font-size: 0.875rem !important;
    font-weight: 500 !important;
    justify-content: center !important;
  }
  .tag {
    color: black !important;
    text-shadow: none !important;
  }

  .showcase-theme-m-tn
    .showcase-thumbnail-wrapper-outter
    .text-invert:not(.title)
    .tag
    + .tag::before {
    background-color: black !important;
  }

  .theme-dark
    .showcase-theme-m-tn
    .showcase-thumbnail-wrapper-outter
    .text-invert:not(.title)
    .tag
    + .tag::before {
    background-color: white !important;
  }

  .theme-dark .tag {
    color: white !important;
    text-shadow: none !important;
  }
}

.tag {
  color: white;
  gap: 0.5rem;
}
</style>
