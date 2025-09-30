<template>
  <b-tab :title="title">
    <div class="row">
      <div class="col-lg-6 mb-2">
        <MediaPreview
          :data="data"
          :media-type="mediaType"
          @play-media="$emit('play-media')"
        />
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
}
</script>
