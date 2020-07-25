<template>
  <div>
    <h1>Post page</h1>

    <button @click="loaduser">
      Load user
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: [],
    }
  },
  mounted: {},
  methods: {
    loaduser() {
      this.$router.push(`/users/${this.id}`)
    },
  },
}
</script>
