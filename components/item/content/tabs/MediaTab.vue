<template>
  <b-tab :title="title">
    <div v-if="hasContent" class="row">
      <div class="col-lg-6 mb-2">
        <MediaPreview
          :data="data"
          :media-type="mediaType"
          @play-media="$emit('play-media')"
        />
      </div>
    </div>

    <div v-else class="no-content-message">
      <div class="text-center py-5">
        <i class="fas fa-film fa-3x mb-3 text-muted"></i>
        <p class="text-muted">محتوایی برای نمایش وجود ندارد</p>
      </div>
    </div>
  </b-tab>
</template>

<script>
import MediaPreview from '@/components/item/content/MediaPreview'

export default {
  name: 'MediaTab',
  components: {
    MediaPreview,
  },
  props: {
    title: { type: String, default: '' },
    data: { type: Object, default: () => ({ item: {} }) },
    mediaType: { type: String, default: '' },
  },
  emits: ['play-media'],
  computed: {
    hasContent() {
      // Check if there's a backdrop image which indicates content exists
      return this.data?.item?.backdrop || this.data?.item?.back_teaser
    },
  },
}
</script>

<style scoped>
.no-content-message {
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.no-content-message .text-muted {
  opacity: 0.6;
}
</style>
