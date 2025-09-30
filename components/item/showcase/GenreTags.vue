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
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 2rem;
  color: inherit;
  text-decoration: none;
  font-size: 0.875rem;
  transition: all 0.2s ease;
}

.tag:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  color: inherit;
}
</style>
