<template>
  <b-tab @click="handleTabClick">
    <template #title>
      <b-spinner v-if="commentsLoading" type="border" class="mb-1 ml-1" small />
      {{ $t('comment.comments') }} ({{ commNum }})
    </template>
    <Comments :id="id" :type="type" :name="name" :namefa="namefa" />
  </b-tab>
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
    commNum: { type: Number, default: 0 },
  },
  computed: {
    commentsLoading() {
      return this.$store.getters['comments/commentsloading']
    },
  },
  methods: {
    handleTabClick() {
      // Additional logic when comments tab is clicked
    },
  },
}
</script>
