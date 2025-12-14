<template>
  <div class="comments-tab-container">
    <Comments :id="id" :type="type" :name="name" :namefa="namefa" />
  </div>
</template>

<script>
import Comments from '@/components/Comments'

export default {
  name: 'CommentsTab',
  components: {
    Comments,
  },
  props: {
    id: { type: [String, Number], default: null },
    type: { type: String, default: '' },
    name: { type: String, default: '' },
    namefa: { type: String, default: '' },
  },
}
</script>

<style scoped>
.comments-tab-container {
  padding: 24px 0;
  width: 100% !important;
  margin-top: -1rem;
}

@media (max-width: 768px) {
  .comments-tab-container {
    padding: 16px;
  }
  .comments-tab-container {
    margin-top: 1rem;
  }
}

@media (max-width: 576px) {
  .comments-tab-container {
    margin-top: 1rem;
  }
}
</style>
