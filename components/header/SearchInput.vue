<template>
  <div class="header-search">
    <!-- <input
      v-model="searchQuery"
      class="header-search-input"
      :placeholder="$t('new.search')"
      type="text"
      @keyup.enter="handleSearch"
    /> -->
    <button
      class="header-search-submit"
      @keyup.enter="handleSearch"
      @click="handleSearch"
    >
      <i class="icon-search-stroke" style="font-size: 22px" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    searchQuery: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
  methods: {
    handleSearch() {
      if (this.searchQuery && this.searchQuery.length > 1) {
        // Update URL with hash and query
        const newHash = `#search?query=${encodeURIComponent(this.searchQuery)}`
        window.location.hash = newHash
      } else {
        this.openSearchModal()
      }
    },

    openSearchModal() {
      // Just add #search to URL to open empty modal
      window.location.hash = '#search'
    },
  },
}
</script>
<style scoped>
.header-search {
  position: unset !important;
  margin: 0 0.5rem;
}
.header-search-submit {
  position: unset !important;
}
</style>
