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
}

@media (max-width: 576px) {
  .genre-tags {
    font-size: 0.875rem !important;
    font-weight: 500 !important;
  }
}

.tag {
  color: white;
  gap: 0.5rem;
}
</style>
