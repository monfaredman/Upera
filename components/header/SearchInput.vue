<template>
  <div class="header-search">
    <input
      v-model="searchQuery"
      class="header-search-input"
      :placeholder="$t('new.search')"
      type="text"
      @keyup.enter="handleSearch"
    />
    <button class="header-search-submit" @click="handleSearch">
      <i class="icon-search-stroke" />
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
