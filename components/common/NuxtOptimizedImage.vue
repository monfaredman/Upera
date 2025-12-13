<template>
  <div :class="wrapperClass">
    <img
      v-lazy="computedSrc"
      :src="computedSrc"
      :alt="alt"
      :width="width"
      :height="height"
      :sizes="sizes"
      :srcset="srcset"
      :loading="loading"
      :class="imageClass"
      :style="imageStyle"
      @load="onLoad"
      @error="onError"
    />
    <!-- Placeholder while loading -->
    <div
      v-if="showPlaceholder && !imageLoaded"
      class="image-placeholder"
      :style="{ backgroundColor: placeholderColor }"
    />
  </div>
</template>

<script>
export default {
  name: 'NuxtOptimizedImage',
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
        q: 85, // Reduced quality for better performance
        a: 'c',
        zc: null,
        src: '',
      }),
    },
    type: {
      type: String,
      default: 'posters',
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
    // Responsive image sizes
    sizes: {
      type: String,
      default: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    },
    // Loading strategy
    loading: {
      type: String,
      default: 'lazy',
      validator: (value) => ['lazy', 'eager'].includes(value),
    },
    // Generate srcset for responsive images
    generateSrcset: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      imageLoaded: false,
      imageError: false,
    }
  },
  computed: {
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
        return `https://thumb.upera.shop/thumb?w=382&h=220&q=85&a=t&src=https://cdn.upera.shop/s3/${this.imageSrc}`
      }
      return baseUrl + params.toString()
    },
    srcset() {
      if (!this.generateSrcset || !this.width) return null

      const baseSrc = this.computedSrc
      if (!baseSrc) return null

      // Generate responsive srcset with different widths
      const widths = []
      const baseWidth = parseInt(this.width)

      if (baseWidth <= 200) {
        widths.push(baseWidth)
      } else if (baseWidth <= 400) {
        widths.push(Math.floor(baseWidth * 0.75), baseWidth)
      } else if (baseWidth <= 800) {
        widths.push(
          Math.floor(baseWidth * 0.5),
          Math.floor(baseWidth * 0.75),
          baseWidth
        )
      } else {
        widths.push(
          Math.floor(baseWidth * 0.5),
          Math.floor(baseWidth * 0.75),
          baseWidth,
          Math.floor(baseWidth * 1.5)
        )
      }

      return widths
        .map((w) => {
          // Update width in URL
          const url = new URL(baseSrc)
          url.searchParams.set('w', w.toString())
          return `${url.toString()} ${w}w`
        })
        .join(', ')
    },
    wrapperClass() {
      return [
        'optimized-image-wrapper',
        this.classNames,
        this.fluidGrow ? 'fluid-grow' : '',
      ].filter(Boolean)
    },
    imageClass() {
      return ['optimized-image', this.imageLoaded ? 'loaded' : 'loading']
    },
    imageStyle() {
      const style = {}
      if (this.aspectRatio) {
        style.aspectRatio = this.aspectRatio
      }
      if (this.fluidGrow) {
        style.width = '100%'
        style.height = 'auto'
      }
      return style
    },
    showPlaceholder() {
      return this.blank && !this.imageLoaded
    },
    placeholderColor() {
      return this.blankColor
    },
  },
  methods: {
    onLoad() {
      this.imageLoaded = true
      this.$emit('load')
    },
    onError() {
      this.imageError = true
      this.$emit('error')
    },
  },
}
</script>

<style scoped>
.optimized-image-wrapper {
  position: relative;
  overflow: hidden;
}

.optimized-image-wrapper.fluid-grow {
  width: 100%;
}

.optimized-image {
  display: block;
  width: 100%;
  height: auto;
  transition: opacity 0.3s ease;
}

.optimized-image.loading {
  opacity: 0;
}

.optimized-image.loaded {
  opacity: 1;
}

.image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

/* Prevent layout shift */
.optimized-image-wrapper::before {
  content: '';
  display: block;
  padding-top: var(--aspect-ratio, 56.25%);
}

.optimized-image-wrapper[style*='aspect-ratio']::before {
  display: none;
}
</style>

