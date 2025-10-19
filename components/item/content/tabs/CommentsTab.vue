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
