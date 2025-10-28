<template>
  <SearchModal ref="searchModal" />
</template>

<script>
import SearchModal from '@/components/SearchModal'

export default {
  name: 'GlobalSearchModal',
  components: {
    SearchModal,
  },
  mounted() {
    // Make search modal available globally
    this.$root.$searchModal = this.$refs.searchModal
  },
}
</script>
