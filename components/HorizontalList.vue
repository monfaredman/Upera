<!--
  HorizontalList Component

  This component supports 3 different display types:

  TYPE 1: Normal Swiper List (Multiple Items)
  - Default behavior for multiple items
  - Supports: normal, lives, ugcs, and offer layouts
  - Uses swiper for horizontal scrolling
  - Example usage:
    <HorizontalList
      :items="movies"
      :options="swiperOptions"
      :linkBuilder="buildLink"
      titleFa="فیلم‌ها"
      titleEn="Movies"
    />

  TYPE 2: Single Item Simple Card
  - Displays when items.length === 1 and singleItemType="simple"
  - Shows full-width image with max-height: 324px and border-radius: 16px
  - Example usage:
    <HorizontalList
      :items="[featuredItem]"
      :linkBuilder="buildLink"
      singleItemType="simple"
      titleFa="ویژه"
    />

  TYPE 3: Single Item Detailed Card
  - Displays when items.length === 1 and singleItemType="detailed"
  - Shows full-width card with poster on right and details on left
  - Includes: title, description, action buttons, and optional icon actions
  - Example usage:
    <HorizontalList
      :items="[featuredItem]"
      :linkBuilder="buildLink"
      singleItemType="detailed"
      :actionsButtons="[{
        mainButton: { exist: true, action: 'play', label: { en: 'Play', fa: 'نمایش' } },
        downloadButton: { exist: true, action: 'openDownloadModal', label: { en: 'Free Download', fa: 'دانلود رایگان' } }
      }]"
      :showIconActions="true"
      @toggle-watchlist="handleWatchlist"
      @share="handleShare"
      @clap-start="handleClapStart"
      @clap-stop="handleClapStop"
      titleFa="پیشنهاد ویژه"
    />
-->
<template>
  <section class="horizontal-list-container reach-begin">
    <!-- Title and Show All - Only for Type 1 (Normal Swiper) -->
    <div
      v-if="!isSingleItem"
      class="d-flex justify-content-between align-items-center mb-2 container-fluid"
    >
      <div class="d-flex align-items-center justify-content-start">
        <img
          v-if="items[0].type === 'video'"
          src="@/assets/images/ugcs.png"
          alt="UGC"
          height="30"
          class="ml-2"
        />
        <h4 class="font-weight-bold" style="z-index: 4">
          {{ localizedTitle }}
        </h4>
      </div>
      <nuxt-link
        v-if="showAllRoute"
        :to="showAllRoute"
        class="mb-1 d-flex justify-content-center align-items-center"
        :class="{
          'text-white': localizedTitle === 'پیشنهادی',
          '': localizedTitle !== 'پیشنهادی',
        }"
        style="z-index: 4"
      >
        <span class="watch-more-text ml-1">
          {{ $t('new.show_all') }}
        </span>
        <i v-if="localizedTitle === 'پیشنهادی'" class="fa fa-ellipsis-h" />
        <img v-else src="@/assets/img/more.svg" class="text-white" height="3" />
      </nuxt-link>
    </div>

    <!-- Type 1: Normal swiper layout (default + lives + ugcs + offer) -->
    <div
      v-if="!isSingleItem"
      ref="swiperContainer"
      v-swiper:[instanceName]="mergedOptions"
      class="swiper-container newset-slider2"
      :class="{ 'offer-slider': isOffer }"
    >
      <div class="swiper-wrapper py-1">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="swiper-slide"
          :class="isOffer ? offerSlideClass(index) : ''"
        >
          <MediaCard
            :item="item"
            :variant="cardVariant"
            :size="size"
            :linkBuilder="linkBuilder"
            :showBadges="showBadges"
            :showTitle="showTitle"
            :addSeriesClass="addSeriesClass"
            :hoverable="hoverable"
            :is-offer="isOffer"
          />
        </div>
      </div>
    </div>

    <!-- Type 2: Single item - Full width simple card -->
    <div
      v-else-if="isSingleItem && singleItemType === 'simple'"
      class="single-item-simple-card container-fluid"
    >
      <nuxt-link :to="resolvedSingleItemLink" class="single-simple-link">
        <b-img
          :src="singleItemImageSrc"
          :alt="singleItem.name || singleItem.title"
          fluid
          rounded
          class="single-simple-image"
        />
      </nuxt-link>
    </div>

    <!-- Type 3: Single item - Full width card with poster + details -->
    <div
      v-else-if="isSingleItem && singleItemType === 'detailed'"
      class="single-item-detailed-card container-fluid"
    >
      <div
        class="single-detailed-content"
        :style="{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.5) 100%), url('${singleItemImageSrc}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }"
      >
        <!-- Details on the left -->
        <div class="single-detailed-info">
          <h3 class="item-title">{{ singleItem.name || singleItem.title }}</h3>
          <p
            v-if="singleItem.overview_fa || singleItem.description"
            class="item-description"
          >
            {{
              truncateDescription(
                singleItem.overview_fa || singleItem.description
              )
            }}
          </p>

          <!-- All Actions in One Row -->
          <div class="item-all-actions">
            <!-- Action Buttons -->
            <template v-if="actionsButtons && actionsButtons.length > 0">
              <template v-for="(buttonGroup, index) in actionsButtons">
                <!-- Main Button -->
                <button
                  v-if="buttonGroup.mainButton && buttonGroup.mainButton.exist"
                  :key="`main-${index}`"
                  class="btn btn-main"
                  @click.prevent="handleAction(buttonGroup.mainButton.action)"
                >
                  <span>
                    {{ getButtonLabel(buttonGroup.mainButton.label) }}
                    <i
                      v-if="buttonGroup.mainButton.action === 'play'"
                      class="fa fa-play pl-2"
                    />
                    <i
                      v-else-if="buttonGroup.mainButton.action === 'buy'"
                      class="fa fa-shopping-cart pl-2"
                    />
                  </span>
                </button>

                <!-- Download Button -->
                <button
                  v-if="
                    buttonGroup.downloadButton &&
                    buttonGroup.downloadButton.exist
                  "
                  :key="`download-${index}`"
                  class="btn btn-download"
                  @click.prevent="
                    handleAction(buttonGroup.downloadButton.action)
                  "
                >
                  <span>
                    {{ getButtonLabel(buttonGroup.downloadButton.label) }}
                    <i class="fa fa-download pl-2" />
                  </span>
                </button>
              </template>
            </template>

            <!-- Icon Actions -->
            <IconActions
              v-if="showIconActions"
              :variant="'desktop'"
              :is-watchlist="singleItem.isWatchlist || 0"
              :user-claps="singleItem.userClaps || 0"
              :clap-active="clapActive"
              :custom-style="{
                width: '32px',
                height: '32px',
                borderRadius: '4px',
                backgroundColor: '#00000073',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                fontSize: '20px !important',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }"
              @toggle-watchlist="$emit('toggle-watchlist', singleItem)"
              @share="$emit('share', singleItem)"
              @clap-start="$emit('clap-start', singleItem)"
              @clap-stop="$emit('clap-stop', singleItem)"
            />
          </div>
        </div>

        <!-- Poster on the right -->
        <div class="single-detailed-poster">
          <nuxt-link :to="resolvedSingleItemLink">
            <b-img
              :src="singleItemPosterSrc"
              :alt="singleItem.name || singleItem.title"
              fluid
              rounded
              class="poster-image"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MediaCard from '@/components/MediaCard'
import IconActions from '@/components/item/showcase/IconActions'

export default {
  name: 'HorizontalList',
  components: { MediaCard, IconActions },
  props: {
    // Titles
    titleEn: { type: String, default: '' },
    hoverable: { type: Boolean, default: false },
    titleFa: { type: String, default: '' },
    isOffer: { type: Boolean, default: false },

    // "Show all" link object or null
    showAllRoute: { type: Object, default: null },

    // Items to render
    items: { type: Array, default: () => [] },

    // v-swiper instance name (must be unique per list)
    instanceName: { type: [String, Number], default: 'listSwip' },

    // Swiper options
    options: { type: Object, required: true },

    // Card configuration
    cardVariant: { type: String, default: 'poster' }, // 'poster' | 'backdrop'
    size: { type: Object, default: () => ({ w: 142, h: 212 }) },

    // Route builder: (item) => { name, params }
    linkBuilder: { type: [Function, String, Object], required: true },

    // UI toggles
    showBadges: { type: Boolean, default: true },
    showTitle: { type: Boolean, default: true },
    addSeriesClass: { type: Boolean, default: true },

    // Single item type: 'simple' | 'detailed' | null (auto-detect)
    singleItemType: { type: String, default: null },

    // Action buttons for single item detailed view
    actionsButtons: {
      type: Array,
      default: () => [],
    },

    // Show icon actions (watchlist, share, clap) for Type 3
    showIconActions: {
      type: Boolean,
      default: false,
    },

    type: { type: String, default: 'discover' },
  },
  data() {
    return {
      clapActive: false,
    }
  },
  computed: {
    localizedTitle() {
      // Check if items contain live content and use live item title
      if (
        this.items &&
        this.items.length > 0 &&
        this.items[0].type === 'live'
      ) {
        const isFa = this.$i18n && this.$i18n.locale === 'fa'
        return isFa ? 'پخش زنده' : 'Live '
      }

      if (
        this.items &&
        this.items.length > 0 &&
        this.items[0].type === 'video'
      ) {
        const isFa = this.$i18n && this.$i18n.locale === 'fa'
        return isFa ? 'ویدیو کست' : 'Video Cast'
      }

      // Default behavior for other content types
      const isFa = this.$i18n && this.$i18n.locale === 'fa'
      const en = this.titleEn || ''
      const fa = this.titleFa || ''
      return isFa ? fa || en : this.capitalize(en || fa)
    },
    mergedOptions() {
      // Merge default options that help swiper recalculate on DOM changes
      const defaults = {
        observer: true,
        observeParents: true,
        watchOverflow: true,
      }
      return { ...defaults, ...(this.options || {}) }
    },

    // Check if we have exactly one item
    isSingleItem() {
      return this.items && this.items.length === 1 && this.type === 'slider'
    },

    // Get the single item
    singleItem() {
      return this.isSingleItem ? this.items[0] : null
    },

    // Build link for single item
    resolvedSingleItemLink() {
      if (!this.singleItem) return '#'

      if (typeof this.linkBuilder === 'function') {
        return this.linkBuilder(this.singleItem)
      }
      if (typeof this.linkBuilder === 'string') {
        return this.linkBuilder
      }
      return this.linkBuilder || '#'
    },

    // Get image source for simple single item (backdrop)
    singleItemImageSrc() {
      if (!this.singleItem) return ''
      const backdrop = this.singleItem.backdrop || this.singleItem.poster || ''
      return this.backdropSrc(backdrop)
    },

    // Get poster source for detailed single item
    singleItemPosterSrc() {
      if (!this.singleItem) return ''
      const poster = this.singleItem.poster || ''
      return this.posterSrc(poster)
    },
  },
  watch: {
    items: {
      handler() {
        // Force swiper update when items change
        this.$nextTick(() => {
          this.updateSwiper()
        })
      },
      deep: true,
    },
  },
  mounted() {
    // Force swiper update after mount to fix sizing issues
    this.$nextTick(() => {
      setTimeout(() => {
        this.updateSwiper()
      }, 100)
    })
  },
  methods: {
    capitalize(text) {
      if (!text) return ''
      return text.charAt(0).toUpperCase() + text.slice(1)
    },
    slideClass(item) {
      // preserve previous class behavior for movie cards
      return {
        movielabel: this.cardVariant === 'poster' && item.type === 'movie',
      }
    },
    offerSlideClass(index) {
      return index === 0 ? 'offer-slide-large' : 'offer-slide-small'
    },
    updateSwiper() {
      // Access swiper instance via the directive binding
      const container = this.$refs.swiperContainer
      if (container && container.swiper) {
        container.swiper.update()
      }
    },

    // Poster image helper
    posterSrc(poster) {
      if (!poster) return ''
      const prefix =
        'https://thumb.upera.shop/thumb?w=400&q=90&fmt=webp&src=https://thumb.upera.shop/s3/posters/'
      return poster.startsWith(prefix) ? poster : prefix + poster
    },

    // Backdrop image helper
    backdropSrc(backdrop) {
      if (!backdrop) return ''
      const prefix =
        'https://thumb.upera.shop/thumb?w=364&h=190&q=100&a=t&src=https://cdn.upera.shop/s3/backdrops/'
      return backdrop.startsWith('https://') ? backdrop : prefix + backdrop
    },

    // Truncate description to a reasonable length
    truncateDescription(desc, maxLength = 200) {
      if (!desc) return ''
      if (desc.length <= maxLength) return desc
      return desc.substring(0, maxLength) + '...'
    },

    // Get localized button label
    getButtonLabel(label) {
      if (!label) return ''
      if (typeof label === 'string') return label

      const isFa = this.$i18n && this.$i18n.locale === 'fa'
      return isFa ? label.fa || label.en : label.en || label.fa
    },

    // Handle action button clicks
    handleAction(action) {
      if (!action || !this.singleItem) return

      if (action === 'play') {
        // Navigate to the item's page or emit play event
        this.$router.push(this.resolvedSingleItemLink)
      } else if (action === 'buy') {
        // Emit buy event or navigate
        this.$emit('buy', this.singleItem)
      } else if (action === 'subscription') {
        this.$emit('subscription', this.singleItem)
      } else if (action === 'openDownloadModal') {
        // Emit download modal event
        this.$emit('openDownloadModal', this.singleItem)
      } else {
        // Generic action emit
        this.$emit(action, this.singleItem)
      }
    },
  },
}
</script>
<style>
.watch-more-text {
  font-size: 12px !important;
  font-weight: 600 !important;
  color: #d4d4d4;
}

/* ==================== TYPE 2: Single Item Simple Card ==================== */
.single-item-simple-card {
  width: 100%;
  margin-bottom: 1rem;
}

.single-simple-link {
  display: block;
  width: 100%;
  max-height: 324px;
  overflow: hidden;
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.single-simple-image {
  width: 100%;
  height: auto;
  max-height: 324px;
  object-fit: cover;
  border-radius: 16px;
  display: block;
}

/* ==================== TYPE 3: Single Item Detailed Card ==================== */
.single-item-detailed-card {
  width: 100%;
  margin-bottom: 1rem;
}

.single-detailed-content {
  display: flex;
  flex-direction: row-reverse;
  align-items: stretch;
  gap: 1rem;
  border-radius: 16px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  justify-content: start;
}

.single-detailed-poster {
  flex-shrink: 0;
  width: 159px;
}

.single-detailed-poster .poster-image {
  width: 159px;
  height: 236px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

.single-detailed-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  color: #fff;
  max-width: 30%;
}

.single-detailed-info .item-title {
  font-weight: 700;
  font-size: 25px;
  text-align: right;
  color: #ffffff;
  margin: 0;
  line-height: 1.3;
}

.single-detailed-info .item-description {
  font-weight: 600;
  font-size: 16px;
  text-align: right;
  color: #d4d4d4;
  margin: 0;
  margin-bottom: 1rem;
  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* All Actions in One Row */
.single-detailed-info .item-all-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.single-detailed-info .btn-main,
.single-detailed-info .btn-download {
  width: 126px;
  height: 32px;
  border-radius: 7px;
  border: none;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 0.5rem;
}

.single-detailed-info .btn-main {
  background-color: #ff6633;
  color: #ffffff;
}

.single-detailed-info .btn-main:hover {
  background-color: #e55529;
  transform: translateY(-2px);
}

.single-detailed-info .btn-download {
  background-color: #f6f6f6;
  color: #373737;
}

.single-detailed-info .btn-download:hover {
  background-color: #e0e0e0;
  transform: translateY(-2px);
}

.single-detailed-info .btn-main:active,
.single-detailed-info .btn-download:active {
  transform: translateY(0);
}

/* Icon Actions in Type 3 - inline with buttons */
.single-detailed-info .item-all-actions .icon-actions {
  display: flex;
  align-items: center;
  gap: 0;
}

/* Responsive for single item layouts */
@media (max-width: 768px) {
  .single-detailed-content {
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }

  .single-detailed-poster {
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
  }

  .single-detailed-info .item-title {
    font-size: 22px;
  }

  .single-detailed-info .item-description {
    font-size: 13px;
    max-height: 80px;
  }

  .single-simple-image {
    max-height: 200px;
  }
}

/* ==================== TYPE 1: Original Styles (Offer Slider) ==================== */
/* Base (xs <640): single row, no spanning */
.offer-slider .swiper-wrapper {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 1fr;
  grid-auto-columns: max-content;
  align-items: stretch;
  gap: 6px;
}

.offer-slider .offer-slide-large {
  grid-row: auto;
  width: 260px !important;
  height: 150px !important;
  margin-left: 0 !important;
}

.offer-slider .offer-slide-small {
  width: 260px !important;
  height: 150px !important;
}

.offer-slider .offer-slide-large img,
.offer-slider .offer-slide-small img {
  width: 100%;
  height: 100% !important;
  object-fit: cover;
  display: block;
}

@media (max-width: 640px) {
  h4 {
    font-size: 14px !important;
  }
}

/* sm ≥640 */
@media (min-width: 640px) {
  .offer-slider .swiper-wrapper {
    gap: 8px;
  }
  .offer-slider .offer-slide-large {
    width: 320px !important;
    height: 200px !important;
  }
  .offer-slider .offer-slide-small {
    width: 260px !important;
    height: 200px !important;
  }

  .offer-slider .offer-slide-large img,
  .offer-slider .offer-slide-small img {
    width: 100%;
    height: 100% !important;
    object-fit: cover;
    display: block;
    border-radius: 8px !important;
  }
}

/* md ≥768: switch to 2 rows */
@media (min-width: 768px) {
  .offer-slider .swiper-wrapper {
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
  }
  .offer-slider .offer-slide-large {
    grid-row: span 2;
    width: 420px !important;
    height: 220px !important;
    margin-left: 0 !important;
  }
  .offer-slider .offer-slide-large img {
    height: 220px !important;
    object-fit: cover;
    border-radius: 8px !important;
  }
  .offer-slider .offer-slide-small {
    height: 110px !important;
    object-fit: cover;
    margin-left: 0 !important;
  }
  .offer-slider .offer-slide-small img {
    height: 110px !important;
    object-fit: cover;
    border-radius: 8px !important;
  }
}

/* lg ≥1024 */
@media (min-width: 1024px) {
  .offer-slider .offer-slide-large {
    grid-row: span 2;
    width: 420px !important;
    height: 220px !important;
    margin-left: 0 !important;
  }
  .offer-slider .offer-slide-large img {
    height: 220px !important;
    object-fit: cover;
    border-radius: 8px !important;
  }
  .offer-slider .offer-slide-small {
    height: 110px !important;
    object-fit: cover;
    margin-left: 0 !important;
  }
  .offer-slider .offer-slide-small img {
    height: 110px !important;
    object-fit: cover;
    border-radius: 8px !important;
  }
}

/* xl ≥1280: keep your current sizes */
@media (min-width: 1280px) {
  .offer-slider .swiper-wrapper {
    grid-template-rows: repeat(2, 1fr);
    grid-auto-columns: min-content;
    align-items: stretch;
    gap: 10px;
  }
  .offer-slider .offer-slide-large {
    grid-row: span 2;
    width: 620px !important;
    height: 350px !important;
    margin-left: 0 !important;
  }
  .offer-slider .offer-slide-large img {
    height: 350px !important;
    object-fit: cover;
    border-radius: 8px !important;
  }
  .offer-slider .offer-slide-small {
    height: 170px !important;
    object-fit: cover;
    margin-left: 0 !important;
  }
  .offer-slider .offer-slide-small img {
    height: 170px !important;
    object-fit: cover;
    border-radius: 8px !important;
  }
}
</style>
