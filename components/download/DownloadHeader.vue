<template>
  <div
    class="download-links-poster download-links-poster2"
    :style="posterStyle"
  >
    <div class="download-links-info d-flex align-items-center">
      <div class="download-links-thumbnail">
        <img class="download-links-thumbnail" :src="thumbnailUrl" />
      </div>
      <div class="download-links-title font-weight-bold">
        <ContentTitle
          :content="content"
          :item-type="itemType"
          @title-click="onTitleClick"
        />
      </div>
    </div>

    <button v-if="!isStaticModal" type="button" class="close" @click="onClose">
      <i class="fas fa-times" />
    </button>
  </div>
</template>

<script>
import ContentTitle from '@/components/download/ContentTitle.vue'

export default {
  name: 'DownloadHeader',
  components: {
    ContentTitle,
  },
  props: {
    backdrop: {
      type: String,
      default: '',
    },
    poster: {
      type: String,
      default: '',
    },
    content: {
      type: Object,
      default: () => ({}),
    },
    itemType: {
      type: String,
      default: '',
    },
    contentId: {
      type: String,
      default: '',
    },
    isStaticModal: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    posterStyle() {
      return {
        backgroundImage: `url('https://thumb.upera.shop/thumb?w=800&h=412&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/${this.backdrop}')`,
      }
    },
    thumbnailUrl() {
      return `https://thumb.upera.shop/thumb?w=70&h=103&q=100&a=c&src=https://cdn.upera.shop/s3/posters/${this.poster}`
    },
  },
  methods: {
    onClose() {
      this.$emit('close')
    },
    onTitleClick() {
      this.$emit('title-click', {
        id: this.contentId,
        type: this.itemType,
      })
    },
  },
}
</script>
