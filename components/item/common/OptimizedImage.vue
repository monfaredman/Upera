<template>
  <div>
    <b-img
      blank
      blank-color="#bbb"
      show
      :width="width"
      :height="height === 'full' ? '600px' : height"
      v-bind="computedProps"
      :src="computedSrc"
      :alt="alt"
      rounded="lg"
      class="img-grid-flow"
      :class="height === 'full' ? 'h-full' : '' + ' ' + classNames"
      v-on="$listeners"
    />
  </div>
</template>

<script>
export default {
  name: 'OptimizedImage',
  props: {
    imageSrc: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      required: true,
    },
    width: {
      type: [String, Number],
      default: null,
    },
    height: {
      type: [String, Number],
      default: null,
    },
    thumbOptions: {
      type: Object,
      default: () => ({
        w: null,
        h: null,
        q: 100,
        a: 'c',
        zc: null,
        src: '',
      }),
    },
    type: {
      type: String,
      default: 'posters', // 'posters', 'backdrops', 'casts', 'files'
      validator: (value) =>
        [
          'posters',
          'backdrops',
          'casts',
          'files',
          'backstage',
          'next',
        ].includes(value),
    },
    fluidGrow: {
      type: Boolean,
      default: false,
    },
    blank: {
      type: Boolean,
      default: true,
    },
    blankColor: {
      type: String,
      default: '#bbb',
    },
    show: {
      type: Boolean,
      default: true,
    },
    classNames: {
      type: String,
      default: '',
    },
    aspectRatio: {
      type: String,
      default: null,
    },
  },
  computed: {
    computedProps() {
      const baseProps = {
        blank: this.blank,
        blankColor: this.blankColor,
        show: this.show,
      }

      if (this.fluidGrow) {
        baseProps.fluidGrow = true
      } else if (this.width && this.height) {
        baseProps.width = this.width
        baseProps.height = this.height === 'full' ? '100%' : this.height
      }

      return baseProps
    },
    computedSrc() {
      const baseUrl = 'https://thumb.upera.shop/thumb?'
      const params = new URLSearchParams()

      // Add thumbnail options
      Object.entries(this.thumbOptions).forEach(([key, value]) => {
        if (value !== null && value !== '') {
          params.set(key, value)
        }
      })

      // Ensure base CDN URL or return undefined if no src available
      if (!params.get('src')) {
        if (!this.imageSrc) {
          return undefined
        }
        params.set(
          'src',
          `https://cdn.upera.shop/s3/${this.type}/${this.imageSrc}`
        )
      }
      if (this.type === 'backstage' || this.type === 'next') {
        return `https://thumb.upera.shop/thumb?w=382&h=220&q=100&a=t&src=https://cdn.upera.shop/s3/${this.imageSrc}`
      }
      return baseUrl + params.toString()
    },
  },
}
</script>
<style scoped>
@media (max-width: 567px) {
  .img-grid-flow {
    aspect-ratio: v-bind(aspectRatio) !important;
  }
}
</style>
