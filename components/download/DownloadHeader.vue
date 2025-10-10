<template>
  <div
    class="d-flex justify-content-between align-items-center download-header p-3"
  >
    <!-- <div class="download-links-thumbnail">
        <img class="download-links-thumbnail" :src="thumbnailUrl" />
      </div> -->
    <div
      class="d-flex justify-content-start align-items-center download-header ح-۴"
    >
      <h6 class="ml-1">خرید</h6>
      <h6 v-if="itemType == 'episode'">قسمت</h6>
      <h6 v-else>فیلم</h6>
    </div>

    <button v-if="!isStaticModal" type="button" class="close" @click="onClose">
      <i class="fas fa-times" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'DownloadHeader',
  components: {},
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
