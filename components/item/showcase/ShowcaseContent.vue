<template>
  <div
    id="showcase-thumbnail-wrapper-outter"
    class="showcase-thumbnail-wrapper-outter d-flex align-items-center justify-content-between"
  >
    <div class="showcase-thumbnail-wrapper w-full container-fluid">
      <div
        class="d-flex h-full align-items-end d-flex align-items-center justify-content-start"
      >
        <!-- Description and Actions -->
        <div class="showcase-desc-wrapper h-full">
          <!-- Optional Logo like homepage slider -->
          <div
            v-if="data && data.item && data.item.logo"
            class="showcase-logo mb-2 mb-md-4"
          >
            <b-img
              :src="logoSrc"
              :alt="data.item.name"
              v-bind="{
                fluidGrow: true,
                blank: true,
                blankColor: '#bbb',
                width: 207,
                height: 307,
                show: true,
              }"
            />
          </div>
          <!-- Title and Metadata -->
          <ShowcaseDescription :data="data" :type="type" :episode="episode" />

          <!-- NEW: Stats Row (IMDB / Watch time / Like / Created) -->
          <div class="showcase-stats-wrapper d-flex align-items-center my-2">
            <div class="showcase-stats" role="group" aria-label="episode-stats">
              <div class="stat-item">
                <div class="stat-icon" aria-hidden="true">
                  <img src="@/assets/images/imdb.png" class="img-imdb" />
                </div>
                <div class="stat-body">
                  <div class="stat-value">{{ imdbRate }}</div>
                </div>
              </div>

              <div class="stat-item">
                <div class="stat-icon" aria-hidden="true">
                  <i class="fas fa-clock" aria-hidden="true"></i>
                </div>
                <div class="stat-body">
                  <div class="stat-value">{{ watchTime }}</div>
                </div>
              </div>

              <div class="stat-item">
                <div class="stat-icon" aria-hidden="true">
                  <i class="icon-clap" aria-hidden="true"></i>
                </div>
                <div class="stat-body">
                  <div class="stat-value">{{ likes }}</div>
                </div>
              </div>

              <div class="stat-item">
                <div class="stat-icon" aria-hidden="true">
                  <i class="fas fa-calendar-alt" aria-hidden="true"></i>
                </div>
                <div class="stat-body">
                  <div class="stat-value">{{ createdDate }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <ShowcaseActions
            :id="data.item.id"
            :has-main-button="hasMainButton"
            :has-download-button="hasDownloadButton"
            :main-button-label="mainButtonLabel"
            :main-button-action="mainButtonAction"
            :download-button-label="downloadButtonLabel"
            :clapinterval="clapinterval"
            :user-claps="userClaps"
            :is-watchlist="isWatchlist"
            :episode="episode"
            :actions="actions"
            :type="type"
            @play="$emit('play')"
            @buy="$emit('buy')"
            @subscription="$emit('subscription')"
            @download="$emit('download')"
            @toggle-watchlist="$emit('toggle-watchlist', $event)"
            @clap-start="$emit('clap-start')"
            @clap-stop="$emit('clap-stop')"
            @share="$emit('share')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShowcaseDescription from '@/components/item/showcase/ShowcaseDescription'
import ShowcaseActions from '@/components/item/showcase/ShowcaseActions'

export default {
  name: 'ShowcaseContent',
  components: {
    ShowcaseDescription,
    ShowcaseActions,
  },
  props: {
    data: { type: Object, default: () => ({}) },
    type: { type: String, default: '' },
    episode: { type: Object, default: () => ({}) },
    hasDownloadButton: { type: Boolean, default: false },
    hasMainButton: { type: Boolean, default: false },
    mainButtonLabel: { type: String, default: '' },
    mainButtonAction: { type: String, default: '' },
    downloadButtonLabel: { type: String, default: '' },
    clapinterval: { type: [Boolean, Number], default: 0 },
    userClaps: { type: [Number, String], default: 0 },
    isWatchlist: {
      type: [Number, Boolean],
      default: 0,
    },
    totalClaps: { type: [Number, String], default: 0 },
    actions: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: [
    'play',
    'buy',
    'subscription',
    'download',
    'toggle-watchlist',
    'clap-start',
    'clap-stop',
    'share',
  ],
  computed: {
    logoSrc() {
      const prefix =
        'https://thumb.upera.shop/thumb?w=400&q=90&fmt=webp&src=https://thumb.upera.shop/s3/files/'
      const logo =
        this.data && this.data.item && this.data.item.logo
          ? String(this.data.item.logo)
          : ''
      if (!logo) return logo
      return logo.startsWith(prefix) ? logo : prefix + logo
    },

    // NEW computed values for the stats row
    imdbRate() {
      const src =
        this.episode && this.episode.rate !== undefined
          ? this.episode.rate
          : (this.data && this.data.item && this.data.item.rate) || '-'
      return src === null || src === '' ? '-' : String(src)
    },
    watchTime() {
      // using 'hour' from provided object as watch time fallback
      const src =
        this.episode && this.episode.hour !== undefined
          ? this.episode.hour
          : (this.data && this.data.item && this.data.item.hour) || ''
      return src ? `${src} min` : '-'
    },
    likes() {
      // prefer totalClaps prop, fallback to traffic or 0
      const fromProp = this.totalClaps || this.userClaps
      if (fromProp) return String(fromProp)
      const traffic =
        this.episode && this.episode.traffic !== undefined
          ? this.episode.traffic
          : (this.data && this.data.item && this.data.item.traffic) || 0
      return String(traffic || 0)
    },
    createdDate() {
      const year =
        (this.episode && this.episode.year) ||
        (this.data && this.data.item && this.data.item.year) ||
        ''
      return year ? String(year) : '-'
    },
  },
  methods: {
    itemsize(e) {
      // Implementation from original code
      const w = window.innerWidth
      let offset = 25
      if (w <= 357) offset = 10
      else if (w <= 375) offset = 12

      const outerWrapper = document.getElementById(
        'showcase-thumbnail-wrapper-outter'
      )
      const buttonWrapper = document.getElementById('showcase-button-wrapper')
      const bottomEl = document.querySelector('.showcase-bottom')

      if (!bottomEl || !outerWrapper || !buttonWrapper) {
        return e
      }

      bottomEl.style.removeProperty('height')
      bottomEl.style.removeProperty('padding-top')

      if (w <= 767.98) {
        const vh =
          outerWrapper.offsetHeight - buttonWrapper.offsetHeight - offset
        bottomEl.style.height = `${vh}px`

        if (!this.hasDownloadButton) {
          const factor = this.data.item.ir ? 0.5 : 1 / 3
          bottomEl.style.paddingTop = `${vh * factor}px`
        }
      }

      return e
    },
  },
}
</script>

<style scoped>
.showcase-logo {
  max-width: 220px;
  min-height: 60px;
  margin-bottom: 0.5rem;
}
.showcase-logo >>> img {
  width: 100%;
  height: 100px;
  object-fit: contain;
}
@media (max-width: 576px) {
  .showcase-logo {
    max-width: 150px !important;
    max-height: 90px !important;
    min-height: 60px !important;
    margin-bottom: 0.5rem;
  }
  .showcase-thumbnail-wrapper {
    padding: 0 1rem !important;
    margin-top: 4rem !important;
  }

  .showcase-logo >>> img {
    width: 100%;
    height: 90px;
    object-fit: contain;
  }
}

@media (max-width: 992px) {
  .showcase-thumbnail-wrapper {
    margin-top: 10rem !important;
  }
}

@media (max-width: 1300px) {
  .showcase-thumbnail-wrapper {
    margin-top: 10rem !important;
  }
}
@media (min-width: 1300px) {
  .showcase-thumbnail-wrapper {
    margin-top: 18rem;
  }
}

.showcase-stats-wrapper {
  /* small spacing around the stats container */
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
}

/* Container as specified: width 336px, height 52px, rounded, padding and gap */
.showcase-stats {
  width: 360px;
  height: 52px;
  border-radius: 8px;
  padding: 2px 4px;
  gap: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #00000073 !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  box-sizing: border-box;
}

/* each stat occupies equal flex space */
.stat-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  flex: 1 1 0;
}

/* icon area */
.stat-icon {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  opacity: 0.95;
  color: #fff; /* icons will inherit this color */
}

/* ensure the Font Awesome <i> scales and centers */
.stat-icon i {
  font-size: 16px;
  line-height: 1;
  display: inline-block;
  color: inherit;
}

/* text body */
.stat-body {
  display: flex;
  align-items: center; /* center the value vertically beside the icon */
  overflow: hidden;
  justify-content: flex-start;
}

/* .stat-label removed (no longer used) */

.stat-value {
  font-size: 13px;
  color: #fff;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 1rem;
}

/* responsive: shrink width on small screens */
@media (max-width: 420px) {
  .showcase-stats {
    width: 100%;
    max-width: 336px;
  }
}

.img-imdb {
  width: 28px;
  height: 28px;
  object-fit: none;
}
</style>
