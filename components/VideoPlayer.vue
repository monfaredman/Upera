<template>
  <div style="position: relative">
    <!-- Video Placeholder -->
    <div
      v-if="!stream && posterUrl"
      class="video-placeholder"
      :style="{ backgroundImage: `url(${posterUrl})` }"
    >
      <div v-if="title" class="video-title-overlay">
        {{ displayTitle }}
      </div>
    </div>

    <!-- Video Player -->
    <video
      v-else
      :id="playerid"
      :ref="playerid"
      class="video-js vjs-default-skin vjs-theme-fantasy vjs-big-play-centered vjs-16-9"
      controls
      preload="auto"
      playsinline
      webkit-playsinline
      x5-playsinline
      style="width: 100%; height: 100%; border-radius: 0.375rem"
      :poster="posterUrl"
    />

    <!-- Skip Credits Button -->
    <button
      v-if="showSkipCredits && stream"
      :id="`${playerid}-skip-credits`"
      class="skip-credits-btn"
      @click="skipCredits"
    >
      {{ skipButtonText }}
      <span class="skip-icon"><i class="fa fa-forward" /></span>
    </button>

    <!-- Title Display (Bottom Left) -->
    <div
      v-if="title && stream"
      :id="`${playerid}-title`"
      class="video-title-bottom"
    >
      {{ displayTitle }}
    </div>

    <!-- Timer Display (Bottom Right) -->
    <div v-if="stream" :id="`${playerid}-timer`" class="video-timer-bottom">
      {{ currentTimeFormatted }} / {{ durationFormatted }}
    </div>

    <!-- Progress Bar Preview Popover -->
    <div
      v-if="stream && showProgressPreview"
      :id="`${playerid}-progress-preview`"
      ref="progressPreview"
      class="progress-preview-popover"
      :style="{ left: previewPosition.x + 'px' }"
    >
      <div class="preview-thumbnail">
        <canvas ref="previewCanvas" width="160" height="90"></canvas>
      </div>
      <div class="preview-time">{{ previewTime }}</div>
    </div>

    <!-- VAST CTA Button -->
    <button id="vast-cta-btn">اطلاعات بیشتر</button>

    <!-- Settings Drawer -->
    <div
      v-if="showSettingsDrawer"
      :id="`${playerid}-settings-drawer`"
      ref="settingsDrawer"
      class="settings-drawer-overlay"
      @click="closeSettingsDrawer"
    >
      <div
        class="settings-drawer"
        :class="{ 'mobile-drawer': isMobile }"
        @click.stop
      >
        <!-- Main Menu -->
        <div v-if="settingsDrawerView === 'main'" class="drawer-content">
          <div class="drawer-header">
            <h3>تنظیمات</h3>
          </div>
          <div class="drawer-body">
            <div class="drawer-item" @click="openSpeedSettings">
              <div class="drawer-item-icon">
                <i class="fa fa-clock"></i>
              </div>
              <div class="drawer-item-info">
                <div class="drawer-item-title">سرعت پخش</div>
                <div class="drawer-item-value">{{ getSpeedLabel() }}</div>
              </div>
              <div class="drawer-item-arrow">
                <i class="fa fa-chevron-left"></i>
              </div>
            </div>

            <div
              v-if="tracks && tracks.length > 0"
              class="drawer-item"
              @click="openSubtitleSettings"
            >
              <div class="drawer-item-icon">
                <i class="fa fa-closed-captioning"></i>
              </div>
              <div class="drawer-item-info">
                <div class="drawer-item-title">زیرنویس</div>
                <div class="drawer-item-value">{{ getSubtitleLabel() }}</div>
              </div>
              <div class="drawer-item-arrow">
                <i class="fa fa-chevron-left"></i>
              </div>
            </div>

            <div class="drawer-item" @click="openQualitySettings">
              <div class="drawer-item-icon">
                <i class="fa fa-video"></i>
              </div>
              <div class="drawer-item-info">
                <div class="drawer-item-title">کیفیت</div>
                <div class="drawer-item-value">{{ getQualityLabel() }}</div>
              </div>
              <div class="drawer-item-arrow">
                <i class="fa fa-chevron-left"></i>
              </div>
            </div>
          </div>
        </div>

        <!-- Subtitle Style Settings -->
        <div
          v-if="settingsDrawerView === 'subtitle-style'"
          class="drawer-content"
        >
          <div class="drawer-header with-back">
            <button class="back-button" @click="backToSubtitleSettings">
              <i class="fa fa-chevron-right"></i>
            </button>
            <h3>تنظیمات ظاهر زیرنویس</h3>
          </div>
          <div class="drawer-divider"></div>
          <div class="drawer-body px-4">
            <!-- Font Size -->
            <div class="subtitle-style-group">
              <label class="subtitle-style-label">اندازه فونت</label>
              <div class="subtitle-style-options">
                <div
                  v-for="size in FONT_SIZES"
                  :key="size.value"
                  class="subtitle-style-option"
                  :class="{ active: subtitleStyle.fontSize === size.value }"
                  @click="updateSubtitleStyle('fontSize', size.value)"
                >
                  {{ size.label }}
                </div>
              </div>
            </div>

            <!-- Text Color -->
            <div class="subtitle-style-group">
              <label class="subtitle-style-label">رنگ متن</label>
              <div class="subtitle-style-options">
                <div
                  v-for="color in TEXT_COLORS"
                  :key="color.value"
                  class="subtitle-style-option color-option"
                  :class="{
                    active: subtitleStyle.color === color.value,
                    [color.class]: true,
                  }"
                  @click="updateSubtitleStyle('color', color.value)"
                >
                  <div
                    class="color-preview"
                    :style="{ backgroundColor: color.value }"
                  ></div>
                  <span>{{ color.label }}</span>
                </div>
              </div>
            </div>

            <!-- Background Color -->
            <div class="subtitle-style-group">
              <label class="subtitle-style-label">پس‌زمینه</label>
              <div class="subtitle-style-options">
                <div
                  v-for="bg in BACKGROUND_OPACITIES"
                  :key="bg.value"
                  class="subtitle-style-option"
                  :class="{ active: subtitleStyle.background === bg.value }"
                  @click="updateSubtitleStyle('background', bg.value)"
                >
                  <div class="bg-preview" :style="{ opacity: bg.value }"></div>
                  <span>{{ bg.label }}</span>
                </div>
              </div>
            </div>

            <!-- Text Shadow -->
            <div class="subtitle-style-group">
              <label class="subtitle-style-label">سایه متن</label>
              <div class="subtitle-style-options">
                <div
                  v-for="shadow in TEXT_SHADOWS"
                  :key="shadow.value"
                  class="subtitle-style-option"
                  :class="{ active: subtitleStyle.shadow === shadow.value }"
                  @click="updateSubtitleStyle('shadow', shadow.value)"
                >
                  {{ shadow.label }}
                </div>
              </div>
            </div>

            <!-- Reset to Default -->
            <div class="subtitle-style-actions">
              <button class="reset-default-btn" @click="resetSubtitleStyles">
                بازنشانی به پیش‌فرض
              </button>
            </div>
          </div>
        </div>
        <!-- Speed Settings -->
        <div v-if="settingsDrawerView === 'speed'" class="drawer-content">
          <div class="drawer-header with-back">
            <button class="back-button" @click="backToMain">
              <i class="fa fa-chevron-right"></i>
            </button>
            <h3>سرعت پخش</h3>
          </div>
          <div class="drawer-divider"></div>
          <div class="drawer-body">
            <div
              v-for="rate in PLAYBACK_RATES"
              :key="rate.value"
              class="drawer-option"
              :class="{ active: isSpeedActive(rate.value) }"
              @click="selectSpeed(rate.value)"
            >
              <div class="drawer-option-radio">
                <div
                  v-if="isSpeedActive(rate.value)"
                  class="radio-checked"
                ></div>
              </div>
              <div class="drawer-option-label">{{ rate.label }}</div>
            </div>
          </div>
        </div>

        <!-- Subtitle Settings -->
        <div v-if="settingsDrawerView === 'subtitle'" class="drawer-content">
          <div class="drawer-header with-back">
            <button class="back-button" @click="backToMain">
              <i class="fa fa-chevron-right"></i>
            </button>
            <h3>زیرنویس</h3>
          </div>
          <div class="drawer-divider"></div>
          <div class="drawer-body">
            <div
              class="drawer-option"
              :class="{ active: currentSubtitle === null }"
              @click="selectSubtitle(null)"
            >
              <div class="drawer-option-radio">
                <div
                  v-if="currentSubtitle === null"
                  class="radio-checked"
                ></div>
              </div>
              <div class="drawer-option-label">خاموش</div>
            </div>
            <div
              v-for="(track, index) in getSubtitleTracks()"
              :key="index"
              class="drawer-option"
              :class="{ active: currentSubtitle === index }"
              @click="selectSubtitle(index)"
            >
              <div class="drawer-option-radio">
                <div
                  v-if="currentSubtitle === index"
                  class="radio-checked"
                ></div>
              </div>
              <div class="drawer-option-label">{{ track.label }}</div>
            </div>
            <div class="drawer-divider"></div>
            <div class="drawer-item" @click="openSubtitleStyleSettings">
              <div class="drawer-item-icon">
                <i class="fa fa-cog"></i>
              </div>
              <div class="drawer-item-info">
                <div class="drawer-item-title">تنظیمات زیرنویس</div>
                <div class="drawer-item-value">سایز، رنگ، پس‌زمینه</div>
              </div>
              <div class="drawer-item-arrow">
                <i class="fa fa-chevron-left"></i>
              </div>
            </div>
          </div>
        </div>

        <!-- Quality Settings -->
        <div v-if="settingsDrawerView === 'quality'" class="drawer-content">
          <div class="drawer-header with-back">
            <button class="back-button" @click="backToMain">
              <i class="fa fa-chevron-right"></i>
            </button>
            <h3>کیفیت</h3>
          </div>
          <div class="drawer-divider"></div>
          <div class="drawer-body">
            <div
              v-for="quality in getAvailableQualities()"
              :key="quality.value"
              class="drawer-option"
              :class="{ active: isQualityActive(quality.value) }"
              @click="selectQuality(quality.value)"
            >
              <div class="drawer-option-radio">
                <div
                  v-if="isQualityActive(quality.value)"
                  class="radio-checked"
                ></div>
              </div>
              <div class="drawer-option-label">{{ quality.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import videojs from 'video.js'
import '@arte/videojs-vast'
import 'videojs-hls-quality-selector'
import fa from 'video.js/dist/lang/fa.json'

const prev10Icon = require('@/assets/images/player/prev-10-icon.png')
const next10Icon = require('@/assets/images/player/next-10-icon.png')
const volumeIcon = require('@/assets/images/player/volume-icon.png')
const volumeDownIcon = require('@/assets/images/player/volume-down-icon.png')
const volumeOffIcon = require('@/assets/images/player/volume-off-icon.png')
const settingIcon = require('@/assets/images/player/setting-icon.png')
const episodesIcon = require('@/assets/images/player/episodes-icon.png')
const nextIcon = require('@/assets/images/player/next-icon.png')

// Constants
const MOBILE_BREAKPOINT = 768
const SEEK_TIME = 10
const VOLUME_STEP = 0.1
const PLAYBACK_RATES = [
  { value: 0.5, label: '۰.۵x' },
  { value: 0.75, label: '۰.۷۵x' },
  { value: 1, label: '۱x (عادی)' },
  { value: 1.25, label: '۱.۲۵x' },
  { value: 1.5, label: '۱.۵x' },
  { value: 1.75, label: '۱.۷۵x' },
  { value: 2, label: '۲x' },
]
const LANGUAGE_MAP = {
  fa: 'فارسی',
  en: 'English',
  ar: 'العربية',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
}
const QUALITY_MAP = {
  '1080p': '۱۰۸۰p - Full HD',
  '720p': '۷۲۰p - HD',
  '480p': '۴۸۰p - SD',
  '360p': '۳۶۰p',
  '240p': '۲۴۰p',
  auto: 'خودکار',
  Auto: 'خودکار',
}

export default {
  props: {
    stream: {
      type: String,
      default: '',
    },
    playerid: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    showAutoPlayToggle: {
      type: Boolean,
      default: true,
    },
    vastUrl: {
      type: String,
      default: '',
    },
    posterUrl: {
      type: String,
      default: '',
    },
    playerAutoPlay: {
      type: Boolean,
      default: true,
    },
    tracks: {
      type: Array,
      default: () => [],
    },
    hasPlaylist: {
      type: Boolean,
      default: false,
    },
    shouldIncrementViews: {
      type: Boolean,
      default: false,
    },
    videoid: {
      type: String,
      default: '',
    },
    videotype: {
      type: String,
      default: '',
    },
    muteOnOtherPlay: {
      type: Boolean,
      default: false,
    },
    creditsData: {
      type: Object,
      default: () => ({
        first_credits: 1,
        after_credits: 60,
        final_credits: 5550,
      }),
    },
  },

  data() {
    return {
      FONT_SIZES: [
        { value: 'small', label: 'کوچک' },
        { value: 'medium', label: 'متوسط' },
        { value: 'large', label: 'بزرگ' },
        { value: 'x-large', label: 'خیلی بزرگ' },
      ],
      TEXT_COLORS: [
        { value: '#ffffff', label: 'سفید', class: 'color-white' },
        { value: '#ffff00', label: 'زرد', class: 'color-yellow' },
        { value: '#00ff00', label: 'سبز', class: 'color-green' },
        { value: '#00ffff', label: 'فیروزه‌ای', class: 'color-cyan' },
        { value: '#ffa500', label: 'نارنجی', class: 'color-orange' },
      ],
      BACKGROUND_OPACITIES: [
        { value: 0, label: 'بدون پس‌زمینه' },
        { value: 0.5, label: 'نیمه شفاف' },
        { value: 0.8, label: 'مات', selected: true },
        { value: 1, label: 'کاملاً مات' },
      ],
      TEXT_SHADOWS: [
        { value: 'none', label: 'بدون سایه' },
        { value: 'light', label: 'سایه کم' },
        { value: 'medium', label: 'سایه متوسط' },
        { value: 'heavy', label: 'سایه زیاد' },
      ],
      adActive: false,
      viewsIncremented: false,
      player: null,
      showSkipCredits: false,
      skipButtonText: 'رد کردن تیتراژ',
      currentCreditType: null,
      creditCheckInterval: null,
      isMobile: false,
      currentTimeFormatted: '00:00',
      durationFormatted: '00:00',
      showSettingsDrawer: false,
      settingsDrawerView: 'main', // 'main', 'speed', 'subtitle', 'quality'
      currentPlaybackRate: 1,
      currentSubtitle: null,
      currentQuality: 'auto',
      // Track subtitle state to prevent conflicts
      subtitleTracksInitialized: false,
      subtitleStyle: {
        fontSize: 'medium',
        color: '#ffffff',
        background: 0.8,
        shadow: 'medium',
      },
      // Progress preview state
      showProgressPreview: false,
      previewPosition: { x: 0, y: 0 },
      previewTime: '00:00',
      progressBarElement: null,
      lastPreviewTime: -1,
    }
  },

  computed: {
    ...mapGetters({
      autoPlay: 'autoplay',
    }),

    displayTitle() {
      return this.adActive ? 'نمایش تبلیغات' : this.title
    },

    isRtl() {
      return this.$i18n.locale === 'fa'
    },

    PLAYBACK_RATES() {
      return PLAYBACK_RATES
    },
  },

  watch: {
    stream(newVal) {
      if (newVal) {
        this.initPlayer()
      }
    },
    autoPlay() {
      if (this.player) {
        this.updateIcon()
      }
    },
    '$i18n.locale'(newLang) {
      if (this.player) {
        this.player.language(newLang)
        this.player.el().style.direction = newLang === 'fa' ? 'rtl' : 'ltr'
      }
    },
    showSettingsDrawer(newVal) {
      if (newVal) {
        // When drawer becomes visible, move it to player element
        this.$nextTick(() => {
          this.moveDrawerToPlayer()
        })
      }
    },
  },

  mounted() {
    this.isMobile = window.innerWidth <= 768
    window.addEventListener('resize', this.handleResize)

    if (this.stream) {
      this.initPlayer()
    }
    window.addEventListener('keydown', this.handleKeydown)
  },

  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
    if (this.creditCheckInterval) {
      clearInterval(this.creditCheckInterval)
    }
    // Clean up observer
    if (this.cueObserver) {
      this.cueObserver.disconnect()
    }
    // Remove custom style tag
    const existingStyle = document.getElementById('custom-subtitle-styles')
    if (existingStyle) {
      existingStyle.remove()
    }
    window.removeEventListener('keydown', this.handleKeydown)
    window.removeEventListener('resize', this.handleResize)
  },

  methods: {
    ...mapActions(['SET_AUTOPLAY']),

    // ============================================
    // Lifecycle & Setup Methods
    // ============================================

    handleResize() {
      this.isMobile = window.innerWidth <= MOBILE_BREAKPOINT
    },

    initPlayer() {
      const currentLang = this.$i18n.locale

      if (currentLang === 'fa') {
        videojs.addLanguage('fa', fa)
      }

      // Determine initial autoplay based on prop and global setting
      const initialAutoplay = !!(this.playerAutoPlay && this.autoPlay !== false)

      this.player = videojs(this.playerid, {
        autoplay: initialAutoplay,
        controls: true,
        controlBar: {
          children: [
            'progressControl',
            'playToggle',
            'volumePanel',
            'fullscreenToggle',
          ],
        },
        fluid: true,
        poster: this.posterUrl,
        language: currentLang,
        sources: [{ src: this.stream, type: 'application/x-mpegURL' }],
      })

      this.player.addClass('vjs-split-controls')
      this.applyRtlSettings()
      this.setupVastPlugin()
      this.setupPlayerEvents()
    },

    applyRtlSettings() {
      const videoEl = this.$refs[this.playerid]
      if (videoEl) {
        videoEl.classList.toggle('vjs-rtl', this.isRtl)
        videoEl.style.direction = this.isRtl ? 'rtl' : 'ltr'
      }
    },

    // ============================================
    // VAST Ad Plugin Setup
    // ============================================

    setupVastPlugin() {
      if (!this.vastUrl) return

      const vastVjsOptions = {
        vastUrl: this.vastUrl,
        playAdAlways: true,
        withCredentials: false,
        mediaFileRegex: /.*/,
        addCtaClickZone: false,
        timeout: 5,
        skipButtonOptions: {
          text: 'رد کردن >>',
        },
      }

      this.player.vast(vastVjsOptions)
      this.setupVastCtaButton()
    },

    setupVastCtaButton() {
      const ctaBtn = document.getElementById('vast-cta-btn')
      if (!ctaBtn) return

      this.player.on('vast.play', (e, { ctaUrl, adClickCallback, adTitle }) => {
        ctaBtn.innerText = adTitle
        if (ctaUrl) {
          ctaBtn.style.display = 'block'
          ctaBtn.onclick = () => {
            adClickCallback()
            window.open(ctaUrl, '_blank')
          }
        }
      })

      const hideCta = () => {
        ctaBtn.style.display = 'none'
      }

      this.player.on('vast.complete', hideCta)
      this.player.on('vast.error', hideCta)
    },

    setupAdEvents() {
      this.player.on('vast.play', () => {
        this.adActive = true
      })

      this.player.on(['vast.complete', 'vast.skip'], () => {
        this.adActive = false
      })
    },

    // ============================================
    // Text Tracks & Subtitles - FIXED
    // ============================================

    setupTextTracks() {
      if (!this.tracks?.length || this.subtitleTracksInitialized) return

      // Clear any existing tracks first
      const existingTracks = this.player.remoteTextTracks()
      for (let i = existingTracks.length - 1; i >= 0; i--) {
        this.player.removeRemoteTextTrack(existingTracks[i])
      }

      // Add new tracks
      this.tracks.forEach((track, index) => {
        const textTrack = this.player.addRemoteTextTrack(
          {
            kind: track.kind,
            src: track.src,
            label: track.label,
            srclang: track.language || '',
            default: track.default || false,
          },
          false
        )

        // Set initial mode based on default flag
        if (track.default) {
          textTrack.track.mode = 'showing'
          this.currentSubtitle = index
        } else {
          textTrack.track.mode = 'disabled'
        }
      })

      this.subtitleTracksInitialized = true
    },

    // ============================================
    // Custom Buttons Setup
    // ============================================

    setupCustomButtons() {
      this.createRuntimeDisplay()

      if (this.hasPlaylist) {
        this.createPlaylistButton()
      }

      this.createNextButton()
      this.createPipButton()
      this.createSettingsButton()

      if (this.isRtl) {
        this.createCustomRTLVolumeControl()
      }

      if (this.showAutoPlayToggle) {
        this.createSkipButtons()
      }
    },

    getFullscreenInsertIndex() {
      const fullscreenToggle =
        this.player.controlBar.getChild('fullscreenToggle')
      const fullscreenIndex = this.player.controlBar
        .children()
        .indexOf(fullscreenToggle)
      return fullscreenIndex === -1
        ? this.player.controlBar.children().length - 1
        : fullscreenIndex
    },

    // ============================================
    // Button Creation Methods
    // ============================================

    createNextButton() {
      const Button = videojs.getComponent('Button')
      const iconSrc = nextIcon

      class NextButton extends Button {
        constructor(player, options) {
          super(player, options)
          this.addClass('vjs-next-button')
          this.addClass('vjs-custom-icon-button')
          this.controlText('قسمت بعد')

          const img = document.createElement('img')
          img.src = iconSrc
          img.className = 'vjs-button-icon'
          this.el().appendChild(img)
        }

        handleClick() {
          this.player().trigger('ended')
        }
      }

      videojs.registerComponent('NextButton', NextButton)
      this.player.controlBar.addChild(
        'NextButton',
        {},
        this.getFullscreenInsertIndex()
      )
    },

    createPipButton() {
      const Button = videojs.getComponent('Button')

      class PipButton extends Button {
        constructor(player, options) {
          super(player, options)
          this.addClass('vjs-pip-button')
          this.controlText('تصویر در تصویر')
          const icon = document.createElement('span')
          icon.className = 'vjs-icon-pip'
          icon.innerHTML = '<i class="fa fa-clone"></i>'
          this.el().appendChild(icon)
        }

        handleClick() {
          const videoElement = this.player().el().querySelector('video')
          if (!videoElement) return

          if (document.pictureInPictureElement) {
            document.exitPictureInPicture()
          } else if (videoElement.requestPictureInPicture) {
            videoElement.requestPictureInPicture().catch((error) => {
              console.error('Picture-in-Picture error:', error)
            })
          }
        }
      }

      videojs.registerComponent('PipButton', PipButton)
      this.player.controlBar.addChild(
        'PipButton',
        {},
        this.getFullscreenInsertIndex()
      )
    },

    createSettingsButton() {
      const Button = videojs.getComponent('Button')
      const self = this
      const iconSrc = settingIcon

      class SettingsButton extends Button {
        constructor(player, options) {
          super(player, options)
          this.addClass('vjs-settings-button')
          this.addClass('vjs-custom-icon-button')
          this.controlText('تنظیمات')

          const img = document.createElement('img')
          img.src = iconSrc
          img.className = 'vjs-button-icon'
          this.el().appendChild(img)
        }

        handleClick() {
          self.toggleSettingsDrawer()
        }
      }

      videojs.registerComponent('SettingsButton', SettingsButton)
      this.player.controlBar.addChild(
        'SettingsButton',
        {},
        this.getFullscreenInsertIndex()
      )
    },

    // ============================================
    // Settings Drawer Methods - FIXED SUBTITLE MANAGEMENT
    // ============================================

    toggleSettingsDrawer() {
      this.showSettingsDrawer = !this.showSettingsDrawer
      if (this.showSettingsDrawer) {
        this.settingsDrawerView = 'main'
      }
    },

    closeSettingsDrawer() {
      this.showSettingsDrawer = false
      this.settingsDrawerView = 'main'
    },

    backToMain() {
      this.settingsDrawerView = 'main'
    },

    openSpeedSettings() {
      this.settingsDrawerView = 'speed'
    },

    openSubtitleSettings() {
      this.settingsDrawerView = 'subtitle'
    },

    openQualitySettings() {
      this.settingsDrawerView = 'quality'
    },

    getSpeedLabel() {
      const rate = PLAYBACK_RATES.find(
        (r) => r.value === this.currentPlaybackRate
      )
      return rate ? rate.label : '۱x (عادی)'
    },

    getSubtitleLabel() {
      if (this.currentSubtitle === null) return 'خاموش'
      const tracks = this.getSubtitleTracks()
      const track = tracks.find((t) => t.index === this.currentSubtitle)
      return track?.label || 'خاموش'
    },

    getQualityLabel() {
      return QUALITY_MAP[this.currentQuality] || 'خودکار'
    },

    isSpeedActive(value) {
      return Math.abs(this.currentPlaybackRate - value) < 0.01
    },

    selectSpeed(value) {
      this.currentPlaybackRate = value
      if (this.player) {
        this.player.playbackRate(value)
      }
      this.closeSettingsDrawer()
    },

    getSubtitleTracks() {
      if (!this.player) return []
      const textTracks = this.player.textTracks()
      const trackList = []
      for (let i = 0; i < textTracks.length; i++) {
        const track = textTracks[i]
        if (track.kind === 'subtitles' || track.kind === 'captions') {
          const displayLabel =
            LANGUAGE_MAP[track.language] || track.label || `زبان ${i + 1}`
          trackList.push({
            label: displayLabel,
            language: track.language,
            index: i,
          })
        }
      }
      return trackList
    },

    selectSubtitle(index) {
      // Update current subtitle state
      this.currentSubtitle = index

      if (this.player) {
        const textTracks = this.player.textTracks()

        // Disable all tracks first
        for (let i = 0; i < textTracks.length; i++) {
          textTracks[i].mode = 'disabled'
        }

        // Enable selected track if not null
        if (index !== null && textTracks[index]) {
          textTracks[index].mode = 'showing'
        }
      }

      this.closeSettingsDrawer()
    },

    getAvailableQualities() {
      return [
        { value: 'auto', label: 'خودکار' },
        { value: '1080p', label: '۱۰۸۰p - Full HD' },
        { value: '720p', label: '۷۲۰p - HD' },
        { value: '480p', label: '۴۸۰p - SD' },
        { value: '360p', label: '۳۶۰p' },
      ]
    },

    isQualityActive(value) {
      return this.currentQuality === value
    },

    selectQuality(value) {
      this.currentQuality = value
      if (this.player && this.player.qualityLevels) {
        const levels = this.player.qualityLevels()
        if (value === 'auto') {
          for (let i = 0; i < levels.length; i++) {
            levels[i].enabled = true
          }
        } else {
          for (let i = 0; i < levels.length; i++) {
            const height = levels[i].height
            levels[i].enabled = height + 'p' === value
          }
        }
      }
      this.closeSettingsDrawer()
    },

    // ============================================
    // REMOVED LEGACY MENU METHODS
    // All subtitle management is now handled through the settings drawer only
    // ============================================

    createCustomRTLVolumeControl() {
      // Remove default volume panel
      const volumePanel = this.player.controlBar.getChild('volumePanel')
      if (volumePanel) {
        this.player.controlBar.removeChild(volumePanel)
      }

      const Component = videojs.getComponent('Component')

      class CustomRTLVolumeControl extends Component {
        constructor(player, options) {
          super(player, options)
          this.addClass('vjs-custom-rtl-volume')
          this.volumeLevel = player.volume()
          this.isDragging = false
          this.createVolumeElements()
          this.attachEventHandlers()
          this.updateVolumeDisplay()
          this.updateMuteIcon() // Call this immediately to set initial icon

          // Listen to player volume changes
          player.on('volumechange', () => {
            this.volumeLevel = player.volume()
            this.updateVolumeDisplay()
            this.updateMuteIcon()
          })
        }

        createVolumeElements() {
          this.el().innerHTML = `
        <button class="vjs-rtl-volume-button vjs-control vjs-button vjs-custom-icon-button" type="button">
          <img class="vjs-button-icon" />
        </button>
        <div class="vjs-rtl-volume-control vjs-control">
          <div class="vjs-rtl-volume-bar">
            <div class="vjs-rtl-volume-level">
              <span class="vjs-rtl-volume-handle"></span>
            </div>
          </div>
        </div>
      `
        }

        attachEventHandlers() {
          const button = this.el().querySelector('.vjs-rtl-volume-button')
          const volumeControl = this.el().querySelector(
            '.vjs-rtl-volume-control'
          )

          const volumeBar = this.el().querySelector('.vjs-rtl-volume-bar')

          // Mute/unmute on button click
          button.addEventListener('click', (e) => {
            e.stopPropagation()
            if (this.player().volume() > 0) {
              this.lastVolume = this.player().volume()
              this.player().volume(0)
            } else {
              this.player().volume(this.lastVolume || 0.5)
            }
          })

          // Show/hide volume bar on hover
          this.el().addEventListener('mouseenter', () => {
            volumeControl.classList.add('vjs-slider-active')
          })

          this.el().addEventListener('mouseleave', () => {
            if (!this.isDragging) {
              volumeControl.classList.remove('vjs-slider-active')
            }
          })

          // Volume bar interactions
          volumeBar.addEventListener('mousedown', (e) => {
            this.isDragging = true
            this.updateVolumeFromEvent(e)

            const onMouseMove = (e) => {
              if (this.isDragging) {
                this.updateVolumeFromEvent(e)
              }
            }

            const onMouseUp = () => {
              this.isDragging = false
              volumeControl.classList.remove('vjs-slider-active')
              document.removeEventListener('mousemove', onMouseMove)
              document.removeEventListener('mouseup', onMouseUp)
            }

            document.addEventListener('mousemove', onMouseMove)
            document.addEventListener('mouseup', onMouseUp)
          })

          // Click on volume bar
          volumeBar.addEventListener('click', (e) => {
            this.updateVolumeFromEvent(e)
          })
        }

        updateVolumeFromEvent(e) {
          const volumeBar = this.el().querySelector('.vjs-rtl-volume-bar')
          const rect = volumeBar.getBoundingClientRect()

          // Calculate from left to right (0% to 100%)
          let position = (e.clientX - rect.left) / rect.width
          position = Math.max(0, Math.min(1, position))

          this.volumeLevel = position
          this.player().volume(position)
        }

        updateVolumeDisplay() {
          const volumeLevel = this.el().querySelector('.vjs-rtl-volume-level')
          if (volumeLevel) {
            const percentage = this.volumeLevel * 100
            volumeLevel.style.width = `${percentage}%`
          }
        }

        updateMuteIcon() {
          const button = this.el().querySelector('.vjs-rtl-volume-button')
          const img = this.el().querySelector('.vjs-button-icon')

          if (button && img) {
            const volume = this.player().volume()

            if (volume === 0) {
              img.src = volumeOffIcon
            } else if (volume < 0.5) {
              img.src = volumeDownIcon
            } else {
              img.src = volumeIcon
            }

            // Set alt text for accessibility
            img.alt = volume === 0 ? 'Unmute' : 'Mute'
          }
        }

        createEl() {
          return videojs.dom.createEl('div', {
            className:
              'vjs-custom-rtl-volume vjs-volume-panel vjs-control vjs-volume-panel-horizontal',
          })
        }
      }

      videojs.registerComponent(
        'CustomRTLVolumeControl',
        CustomRTLVolumeControl
      )

      // Add to control bar after next10 button (or after play button if no next10)
      const next10Button = this.player.controlBar.getChild('Next10Button')
      const playToggle = this.player.controlBar.getChild('playToggle')
      let insertIndex

      if (next10Button) {
        insertIndex =
          this.player.controlBar.children().indexOf(next10Button) + 1
      } else if (playToggle) {
        insertIndex = this.player.controlBar.children().indexOf(playToggle) + 1
      } else {
        insertIndex = 1
      }

      const volumeControl = this.player.controlBar.addChild(
        'CustomRTLVolumeControl',
        {},
        insertIndex
      )

      // Force initial icon update after component is created
      setTimeout(() => {
        if (volumeControl && volumeControl.updateMuteIcon) {
          volumeControl.updateMuteIcon()
        }
      }, 100)
    },

    createPlaylistButton() {
      const Button = videojs.getComponent('Button')
      const iconSrc = episodesIcon

      class PlaylistButton extends Button {
        constructor(player, options) {
          super(player, options)
          this.addClass('vjs-playlist-button')
          this.addClass('vjs-custom-icon-button')
          this.controlText('انتخاب فصل و قسمت')

          const img = document.createElement('img')
          img.src = iconSrc
          img.className = 'vjs-button-icon'
          this.el().appendChild(img)
        }
        handleClick() {
          this.player().trigger('playlistButtonClick')
        }
      }

      videojs.registerComponent('PlaylistButton', PlaylistButton)
      this.player.controlBar.addChild(
        'PlaylistButton',
        {},
        this.player.controlBar.children().length - 1
      )

      this.player.on('playlistButtonClick', () => {
        this.$emit('playlistButtonClick')
      })
    },

    createSkipButtons() {
      // Don't add skip buttons on mobile
      if (this.isMobile) {
        return
      }

      const Button = videojs.getComponent('Button')

      class Prev10Button extends Button {
        constructor(player, options) {
          super(player, options)
          this.addClass('vjs-prev10-button')
          this.controlText('10 ثانیه قبل')
          const icon = document.createElement('img')
          icon.src = prev10Icon
          icon.style.width = '20px'
          icon.style.height = '20px'
          icon.alt = '10 seconds back'
          this.el().appendChild(icon)
        }
        handleClick() {
          const current = this.player().currentTime()
          this.player().currentTime(Math.max(current - 10, 0))
        }
      }

      class Next10Button extends Button {
        constructor(player, options) {
          super(player, options)
          this.addClass('vjs-next10-button')
          this.controlText('10 ثانیه بعد')
          const icon = document.createElement('img')
          icon.src = next10Icon
          icon.style.width = '20px'
          icon.style.height = '20px'
          icon.alt = '10 seconds forward'
          this.el().appendChild(icon)
        }
        handleClick() {
          const current = this.player().currentTime()
          const duration = this.player().duration()
          this.player().currentTime(Math.min(current + 10, duration))
        }
      }

      videojs.registerComponent('Prev10Button', Prev10Button)
      videojs.registerComponent('Next10Button', Next10Button)

      const playToggle = this.player.controlBar.getChild('PlayToggle')
      const playToggleIndex = this.player.controlBar
        .children()
        .indexOf(playToggle)

      this.player.controlBar.addChild('Prev10Button', {}, playToggleIndex)
      this.player.controlBar.addChild('Next10Button', {}, playToggleIndex + 2)
    },

    setupPlaybackEvents() {
      this.player.on('play', () => {
        this.handlePlayEvent()
      })

      this.player.on('timeupdate', () => {
        const currentTime = this.player.currentTime()
        const duration = this.player.duration()

        // Update timer display
        this.currentTimeFormatted = this.formatTime(currentTime)
        this.durationFormatted = this.formatTime(duration)

        this.$emit('timeupdate', {
          currentTime,
          duration,
          player: this.player,
        })
      })

      this.player.on('ended', () => {
        if (this.autoPlay) {
          this.$emit('ended')
        }
      })
    },

    formatTime(seconds) {
      if (!seconds || isNaN(seconds)) return '00:00'
      const hours = Math.floor(seconds / 3600)
      const minutes = Math.floor((seconds % 3600) / 60)
      const secs = Math.floor(seconds % 60)

      if (hours > 0) {
        return `${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
      } else {
        return `${minutes.toString().padStart(2, '0')}:${secs
          .toString()
          .padStart(2, '0')}`
      }
    },

    handlePlayEvent() {
      if (!this.viewsIncremented && this.shouldIncrementViews && this.videoid) {
        this.$axios
          .$post(`/nocache/videos/${this.videoid}/increment-views`, {
            videotype: this.videotype,
          })
          .then(() => {
            this.viewsIncremented = true
          })
          .catch((error) => {
            console.error('Error incrementing views:', error)
          })
      }

      if (this.muteOnOtherPlay) {
        this.$emit('video-played', this.playerid)
      }
    },

    customizeQualityLabels() {
      const qualityButton = this.player
        .el()
        .querySelector('.vjs-quality-selector')
      if (!qualityButton) return

      const observer = new MutationObserver(() => {
        const menuItems = this.player
          .el()
          .querySelectorAll('.vjs-quality-selector .vjs-menu-item')
        menuItems.forEach((item) => {
          const text = item.textContent.trim()
          if (QUALITY_MAP[text]) {
            item.textContent = QUALITY_MAP[text]
          }
        })
      })

      observer.observe(this.player.el(), {
        childList: true,
        subtree: true,
      })
    },

    // ============================================
    // Player Control Methods
    // ============================================

    play() {
      this.player?.play()
    },

    pause() {
      this.player?.pause()
    },

    updateIcon() {
      const button = this.player.controlBar.getChild('AutoPlayButton')
      button?.updateIcon()
    },

    // ============================================
    // Keyboard Event Handler
    // ============================================

    handleKeydown(event) {
      if (!this.player) return

      const keyActions = {
        ArrowLeft: () => this.seekBackward(),
        ArrowRight: () => this.seekForward(),
        ArrowUp: () => this.volumeUp(),
        ArrowDown: () => this.volumeDown(),
        ' ': () => this.togglePlayPause(event),
      }

      const action = keyActions[event.key]
      if (action) {
        action()
      }
    },

    seekBackward() {
      const newTime = Math.max(this.player.currentTime() - SEEK_TIME, 0)
      this.player.currentTime(newTime)
    },

    seekForward() {
      const newTime = Math.min(
        this.player.currentTime() + SEEK_TIME,
        this.player.duration()
      )
      this.player.currentTime(newTime)
    },

    volumeUp() {
      const newVolume = Math.min(this.player.volume() + VOLUME_STEP, 1)
      this.player.volume(newVolume)
    },

    volumeDown() {
      const newVolume = Math.max(this.player.volume() - VOLUME_STEP, 0)
      this.player.volume(newVolume)
    },

    togglePlayPause(event) {
      event.preventDefault()
      this.player.paused() ? this.player.play() : this.player.pause()
    },

    createRuntimeDisplay() {
      const Component = videojs.getComponent('Component')

      class RuntimeDisplay extends Component {
        updateText() {
          const currentTime = this.player().currentTime()
          const duration = this.player().duration()

          const formatTime = (seconds) => {
            if (!seconds || isNaN(seconds)) return '00:00'
            const hours = Math.floor(seconds / 3600)
            const minutes = Math.floor((seconds % 3600) / 60)
            const secs = Math.floor(seconds % 60)

            if (hours > 0) {
              return `${hours.toString().padStart(2, '0')}:${minutes
                .toString()
                .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
            } else {
              return `${minutes.toString().padStart(2, '0')}:${secs
                .toString()
                .padStart(2, '0')}`
            }
          }

          const currentTimeFormatted = formatTime(currentTime)
          const durationFormatted = formatTime(duration)

          this.el().innerHTML = `${currentTimeFormatted} / ${durationFormatted}`
        }
      }

      videojs.registerComponent('RuntimeDisplay', RuntimeDisplay)

      const controlBar = this.player.controlBar
      const volumePanel = controlBar.getChild('volumePanel')
      const fullscreenToggle = controlBar.getChild('fullscreenToggle')

      let insertIndex
      if (volumePanel) {
        insertIndex = controlBar.children().indexOf(volumePanel) + 1
      } else if (fullscreenToggle) {
        insertIndex = controlBar.children().indexOf(fullscreenToggle)
      } else {
        insertIndex = controlBar.children().length - 2
      }

      controlBar.addChild('RuntimeDisplay', {}, insertIndex)
    },

    // ============================================
    // Credits Skip Functionality
    // ============================================

    setupCreditsSkip() {
      if (this.creditCheckInterval) {
        clearInterval(this.creditCheckInterval)
      }

      this.creditCheckInterval = setInterval(() => {
        this.checkCreditsPosition()
      }, 1000)

      this.player.on('dispose', () => {
        if (this.creditCheckInterval) {
          clearInterval(this.creditCheckInterval)
        }
      })
    },

    checkCreditsPosition() {
      if (!this.player || this.player.paused()) return

      const currentTime = this.player.currentTime()

      if (this.isInFirstCredits(currentTime)) {
        this.showSkipCredits = true
        this.currentCreditType = 'first_credits'
        this.skipButtonText = 'رد کردن تیتراژ'
      } else {
        this.showSkipCredits = false
        this.currentCreditType = null
      }
    },

    isInFirstCredits(currentTime) {
      const { first_credits, after_credits } = this.creditsData

      return (
        first_credits >= 0 &&
        currentTime > first_credits &&
        currentTime < after_credits
      )
    },

    isInFinalCredits(currentTime, duration) {
      const { final_credits } = this.creditsData
      const creditsStart = final_credits > 0 ? final_credits : duration * 0.9
      return currentTime >= creditsStart && duration > 0
    },

    skipCredits() {
      if (!this.player) return

      const creditActions = {
        first_credits: () => {
          this.player.currentTime(this.creditsData.after_credits || 60)
        },
        final_credits: () => {
          const duration = this.player.duration()
          this.player.currentTime(duration - 1)
          this.$emit('credits-skipped', 'final_credits')
        },
      }

      const action = creditActions[this.currentCreditType]
      if (action) {
        action()
      }

      this.showSkipCredits = false
      this.currentCreditType = null
    },

    // ============================================
    // Auto-hide Controls Functionality
    // ============================================

    setupAutoHideControls() {
      if (!this.player) return

      let inactivityTimeout = null
      const INACTIVITY_DELAY = 3000 // 3 seconds

      const hideControls = () => {
        if (!this.player.paused()) {
          this.player.userActive(false)
          // Also hide custom elements
          const titleEl = document.querySelector('.video-title-bottom')
          const timerEl = document.querySelector('.video-timer-bottom')
          const skipBtn = document.querySelector('.skip-credits-btn')
          const backBtn = document.querySelector('.back-button')
          const logoEl = document.querySelector('.site-logo')
          const controlBarEl = document.querySelector('.vjs-control-bar')

          if (titleEl) titleEl.style.opacity = '0'
          if (timerEl) timerEl.style.opacity = '0'
          if (skipBtn) skipBtn.style.opacity = '0'
          if (backBtn) backBtn.style.opacity = '0'
          if (logoEl) logoEl.style.opacity = '0'
          if (controlBarEl)
            controlBarEl.style.setProperty('opacity', '0', 'important')
        }
      }

      const showControls = () => {
        this.player.userActive(true)
        // Also show custom elements
        const titleEl = document.querySelector('.video-title-bottom')
        const timerEl = document.querySelector('.video-timer-bottom')
        const skipBtn = document.querySelector('.skip-credits-btn')
        const backBtn = document.querySelector('.back-button')
        const logoEl = document.querySelector('.site-logo')
        const controlBarEl = document.querySelector('.vjs-control-bar')

        if (titleEl) titleEl.style.opacity = '1'
        if (timerEl) timerEl.style.opacity = '1'
        if (skipBtn) skipBtn.style.opacity = '1'
        if (backBtn) backBtn.style.opacity = '1'
        if (logoEl) logoEl.style.opacity = '1'
        if (controlBarEl)
          controlBarEl.style.setProperty('opacity', '1', 'important')
      }

      const resetInactivityTimer = () => {
        clearTimeout(inactivityTimeout)
        showControls()

        // Only set hide timer if video is playing
        if (!this.player.paused()) {
          inactivityTimeout = setTimeout(hideControls, INACTIVITY_DELAY)
        }
      }

      // Listen to user activity on the player element
      const playerEl = this.player.el()

      playerEl.addEventListener('mousemove', resetInactivityTimer)
      playerEl.addEventListener('touchstart', resetInactivityTimer)
      playerEl.addEventListener('click', resetInactivityTimer)

      // Show controls when paused
      this.player.on('pause', () => {
        clearTimeout(inactivityTimeout)
        showControls()
      })

      // Start hiding timer when playing
      this.player.on('play', resetInactivityTimer)
      this.player.on('playing', resetInactivityTimer)

      // Clear timeout on player dispose
      this.player.on('dispose', () => {
        clearTimeout(inactivityTimeout)
      })

      // Start timer immediately if already playing
      if (!this.player.paused()) {
        resetInactivityTimer()
      }
    },

    // Call this in setupPlayerEvents
    setupPlayerEvents() {
      this.player.ready(() => {
        this.setupAdEvents()
        this.setupTextTracks()
        this.setupCustomButtons()
        this.setupPlaybackEvents()
        this.setupCreditsSkip()
        this.applySubtitleStyles()
        this.setupProgressBarPreview()

        // Initialize drawer state
        this.currentPlaybackRate = this.player.playbackRate()
        this.initializeSubtitleState()

        // Move custom overlays into player for fullscreen support
        this.setupFullscreenCustomOverlays()

        // Auto-hide control bar after 3 seconds of inactivity
        this.setupAutoHideControls()

        // ✅ Fix RTL volume bar direction
        const isRtl = this.$i18n.locale === 'fa'
        if (isRtl) {
          const volumeBar =
            this.player.controlBar?.getChild('volumePanel')?.volumeControl
              ?.volumeBar

          if (volumeBar) {
            const originalHandleMouseMove = volumeBar.handleMouseMove
            volumeBar.handleMouseMove = function (event) {
              // reverse the x position
              if (event) {
                const rect = this.el_.getBoundingClientRect()
                const x = event.clientX - rect.left
                const reversedX = rect.width - x
                const fakeEvent = new MouseEvent(event.type, {
                  clientX: rect.left + reversedX,
                  clientY: event.clientY,
                  bubbles: true,
                })
                return originalHandleMouseMove.call(this, fakeEvent)
              }
              return originalHandleMouseMove.call(this, event)
            }
          }
        }
        // Attempt autoplay when player becomes ready if requested.
        // Some browsers block autoplay unless muted — try to play, and if blocked
        // mute and retry to provide a silent autoplay fallback.
        const shouldAutoplay = !!(
          this.playerAutoPlay && this.autoPlay !== false
        )
        if (shouldAutoplay) {
          const playResult = this.player.play()
          if (playResult && typeof playResult.then === 'function') {
            playResult.catch(() => {
              // Try muted autoplay as a fallback
              try {
                this.player.muted(true)
                this.player.play().catch(() => {})
              } catch (e) {
                // ignore
              }
            })
          }
        }
      })
    },

    setupFullscreenCustomOverlays() {
      if (!this.player) return

      const playerEl = this.player.el()

      // Function to move custom overlays into player
      const moveOverlaysToPlayer = () => {
        const skipBtn = document.getElementById(`${this.playerid}-skip-credits`)
        const titleEl = document.getElementById(`${this.playerid}-title`)
        const timerEl = document.getElementById(`${this.playerid}-timer`)

        if (skipBtn && !playerEl.contains(skipBtn)) {
          playerEl.appendChild(skipBtn)
        }
        if (titleEl && !playerEl.contains(titleEl)) {
          playerEl.appendChild(titleEl)
        }
        if (timerEl && !playerEl.contains(timerEl)) {
          playerEl.appendChild(timerEl)
        }

        // Move drawer if it exists
        this.moveDrawerToPlayer()
      }

      // Function to move overlays back to original container
      const moveOverlaysToContainer = () => {
        const container = playerEl.parentElement
        const skipBtn = document.getElementById(`${this.playerid}-skip-credits`)
        const titleEl = document.getElementById(`${this.playerid}-title`)
        const timerEl = document.getElementById(`${this.playerid}-timer`)
        const drawerEl = document.getElementById(
          `${this.playerid}-settings-drawer`
        )

        if (skipBtn && playerEl.contains(skipBtn)) {
          container.appendChild(skipBtn)
        }
        if (titleEl && playerEl.contains(titleEl)) {
          container.appendChild(titleEl)
        }
        if (timerEl && playerEl.contains(timerEl)) {
          container.appendChild(timerEl)
        }
        if (drawerEl && playerEl.contains(drawerEl)) {
          container.appendChild(drawerEl)
        }
      }

      // Listen to fullscreen changes
      this.player.on('fullscreenchange', () => {
        if (this.player.isFullscreen()) {
          moveOverlaysToPlayer()
        } else {
          moveOverlaysToContainer()
        }
      })

      // Initial move to player element
      setTimeout(() => {
        moveOverlaysToPlayer()
      }, 100)
    },

    moveDrawerToPlayer() {
      if (!this.player) return

      const playerEl = this.player.el()

      // Try to get drawer by ref first, then by ID
      let drawerEl = this.$refs.settingsDrawer

      if (!drawerEl) {
        drawerEl = document.getElementById(`${this.playerid}-settings-drawer`)
      }

      if (drawerEl && !playerEl.contains(drawerEl)) {
        playerEl.appendChild(drawerEl)
      }
    },

    initializeSubtitleState() {
      if (!this.player) return
      const textTracks = this.player.textTracks()
      let foundActive = false

      for (let i = 0; i < textTracks.length; i++) {
        if (textTracks[i].mode === 'showing') {
          this.currentSubtitle = i
          foundActive = true
          break
        }
      }

      // If no active subtitle found, set to null (off)
      if (!foundActive) {
        this.currentSubtitle = null
      }
    },

    // Add to methods
    openSubtitleStyleSettings() {
      this.settingsDrawerView = 'subtitle-style'
    },

    backToSubtitleSettings() {
      this.settingsDrawerView = 'subtitle'
    },

    updateSubtitleStyle(property, value) {
      this.subtitleStyle[property] = value
      this.applySubtitleStyles()
    },

    applySubtitleStyles() {
      if (!this.player) return

      const textTrackDisplay = this.player
        .el()
        .querySelector('.vjs-text-track-display')
      if (!textTrackDisplay) return

      // Apply font size to the display container with !important (using pixels)
      const fontSizeMap = {
        small: '20px',
        medium: '24px',
        large: '28px',
        'x-large': '32px',
      }

      const fontSize = fontSizeMap[this.subtitleStyle.fontSize] || '24px'
      textTrackDisplay.style.cssText += `font-size: ${fontSize} !important;`

      // Apply styles to existing cues
      this.updateExistingCues()

      // Set up observer for new cues
      this.setupCueObserver()

      // Also inject a style tag for more specific CSS
      this.injectSubtitleStyles()
    },
    setupCueObserver() {
      const textTrackDisplay = this.player
        .el()
        .querySelector('.vjs-text-track-display')
      if (!textTrackDisplay) return

      // Remove existing observer if any
      if (this.cueObserver) {
        this.cueObserver.disconnect()
      }

      // Create mutation observer to watch for new cues
      this.cueObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList') {
            mutation.addedNodes.forEach((node) => {
              if (
                node.classList &&
                node.classList.contains('vjs-text-track-cue')
              ) {
                this.applyCueStyles(node)
              }
            })
          }
        })
      })

      // Start observing
      this.cueObserver.observe(textTrackDisplay, {
        childList: true,
        subtree: true,
      })
    },
    updateExistingCues() {
      const textTrackDisplay = this.player
        .el()
        .querySelector('.vjs-text-track-display')
      if (!textTrackDisplay) return

      const cues = textTrackDisplay.querySelectorAll('.vjs-text-track-cue')
      cues.forEach((cue) => {
        this.applyCueStyles(cue)
      })
    },
    applyCueStyles(cue) {
      // Find the inner div that contains the actual text
      const innerDiv = cue.querySelector('div')
      if (!innerDiv) return

      const fontSizeMap = {
        small: '20px',
        medium: '24px',
        large: '28px',
        'x-large': '32px',
      }

      const fontSize = fontSizeMap[this.subtitleStyle.fontSize] || '24px'

      // Apply styles with !important using CSSText to override inline styles
      const styles = `
    font-size: ${fontSize} !important;
    color: ${this.subtitleStyle.color} !important;
    background-color: rgba(0, 0, 0, ${
      this.subtitleStyle.background
    }) !important;
    padding: ${this.subtitleStyle.background > 0 ? '4px 8px' : '0'} !important;
    border-radius: 4px !important;
    font-family: Arial, "Segoe UI", Tahoma, sans-serif !important;
    font-weight: bold !important;
    line-height: 1.4 !important;
  `

      // Text shadow
      const shadowMap = {
        none: 'none',
        light: '0 1px 2px rgba(0,0,0,0.8) !important',
        medium: '0 2px 4px rgba(0,0,0,0.8) !important',
        heavy:
          '0 3px 6px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.9) !important',
      }
      const shadowStyle = shadowMap[this.subtitleStyle.shadow] || 'none'

      innerDiv.style.cssText += styles + `text-shadow: ${shadowStyle};`

      // Also apply font size to the cue itself
      cue.style.cssText += `font-size: ${fontSize} !important;`
    },
    injectSubtitleStyles() {
      // Remove existing style tag if any
      const existingStyle = document.getElementById('custom-subtitle-styles')
      if (existingStyle) {
        existingStyle.remove()
      }

      // Create new style tag with specific CSS
      const style = document.createElement('style')
      style.id = 'custom-subtitle-styles'

      const fontSizeMap = {
        small: '20px',
        medium: '24px',
        large: '28px',
        'x-large': '32px',
      }

      const fontSize = fontSizeMap[this.subtitleStyle.fontSize] || '24px'
      const shadowMap = {
        none: 'none',
        light: '0 1px 2px rgba(0,0,0,0.8)',
        medium: '0 2px 4px rgba(0,0,0,0.8)',
        heavy: '0 3px 6px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.9)',
      }
      const textShadow = shadowMap[this.subtitleStyle.shadow] || 'none'

      style.textContent = `
    .vjs-text-track-display {
      font-size: ${fontSize} !important;
    }
    .vjs-text-track-cue {
      font-size: ${fontSize} !important;
    }
    .vjs-text-track-cue div {
      font-size: ${fontSize} !important;
      color: ${this.subtitleStyle.color} !important;
      background-color: rgba(0, 0, 0, ${
        this.subtitleStyle.background
      }) !important;
      padding: ${
        this.subtitleStyle.background > 0 ? '4px 8px' : '0'
      } !important;
      border-radius: 4px !important;
      font-family: Arial, "Segoe UI", Tahoma, sans-serif !important;
      font-weight: bold !important;
      text-shadow: ${textShadow} !important;
      line-height: 1.4 !important;
    }
  `

      document.head.appendChild(style)
    },

    resetSubtitleStyles() {
      this.subtitleStyle = {
        fontSize: 'medium',
        color: '#ffffff',
        background: 0.8,
        shadow: 'medium',
      }
      this.applySubtitleStyles()
    },

    // ============================================
    // Progress Bar Preview Methods
    // ============================================

    setupProgressBarPreview() {
      if (!this.player) return

      // Get the progress control element
      const progressControl = this.player.controlBar.getChild('progressControl')
      if (!progressControl) return

      this.progressBarElement = progressControl.el()

      // Add event listeners for hover
      this.progressBarElement.addEventListener(
        'mouseenter',
        this.handleProgressBarEnter
      )
      this.progressBarElement.addEventListener(
        'mousemove',
        this.handleProgressBarMove
      )
      this.progressBarElement.addEventListener(
        'mouseleave',
        this.handleProgressBarLeave
      )

      // Clean up on dispose
      this.player.on('dispose', () => {
        if (this.progressBarElement) {
          this.progressBarElement.removeEventListener(
            'mouseenter',
            this.handleProgressBarEnter
          )
          this.progressBarElement.removeEventListener(
            'mousemove',
            this.handleProgressBarMove
          )
          this.progressBarElement.removeEventListener(
            'mouseleave',
            this.handleProgressBarLeave
          )
        }
      })
    },

    handleProgressBarEnter() {
      this.showProgressPreview = true
      this.lastPreviewTime = -1 // Reset to ensure first preview is shown
    },

    handleProgressBarMove(event) {
      if (!this.player || !this.progressBarElement) return

      const rect = this.progressBarElement.getBoundingClientRect()
      const duration = this.player.duration()

      if (!duration || isNaN(duration)) return

      // Calculate hover position and time
      const mouseX = event.clientX - rect.left
      const percentage = Math.max(0, Math.min(1, mouseX / rect.width))
      const hoverTime = percentage * duration

      // Round to nearest second for 1-second precision
      const roundedTime = Math.round(hoverTime)

      // Update preview time
      this.previewTime = this.formatTime(roundedTime)

      // Calculate popover position (centered on cursor)
      const popoverWidth = 160 // matches canvas width
      let xPos = event.clientX - rect.left - popoverWidth / 2

      // Keep popover within bounds
      xPos = Math.max(10, Math.min(xPos, rect.width - popoverWidth - 10))
      this.previewPosition.x = xPos + 14

      // Generate thumbnail preview only if time changed (1-second precision)
      // if (roundedTime !== this.lastPreviewTime) {
      //   this.lastPreviewTime = roundedTime
      //   this.$nextTick(() => {
      //     this.generateThumbnailPreview(roundedTime)
      //   })
      // }
    },

    handleProgressBarLeave() {
      this.showProgressPreview = false
    },

    generateThumbnailPreview(time) {
      if (!this.player || !this.$refs.previewCanvas) return

      const canvas = this.$refs.previewCanvas
      const ctx = canvas.getContext('2d')
      const videoElement = this.player.el().querySelector('video')

      if (!videoElement) return

      try {
        // Create a temporary video element to seek to the time
        const tempVideo = document.createElement('video')
        tempVideo.src = videoElement.src || videoElement.currentSrc
        tempVideo.crossOrigin = 'anonymous'
        tempVideo.muted = true
        tempVideo.currentTime = time

        tempVideo.addEventListener('loadeddata', () => {
          // Draw the frame to canvas
          ctx.drawImage(tempVideo, 0, 0, canvas.width, canvas.height)
          tempVideo.remove()
        })

        // Fallback: if thumbnail generation fails, show a placeholder
        tempVideo.addEventListener('error', () => {
          ctx.fillStyle = '#1a1a1a'
          ctx.fillRect(0, 0, canvas.width, canvas.height)
          ctx.fillStyle = '#ffffff'
          ctx.font = '14px Arial'
          ctx.textAlign = 'center'
          ctx.fillText('پیش‌نمایش', canvas.width / 2, canvas.height / 2)
          tempVideo.remove()
        })
      } catch (error) {
        // Fallback for CORS or other errors
        ctx.fillStyle = '#1a1a1a'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = '#ffffff'
        ctx.font = '14px Arial'
        ctx.textAlign = 'center'
        ctx.fillText('پیش‌نمایش', canvas.width / 2, canvas.height / 2)
      }
    },
  },
}
</script>

<style scoped>
::v-deep .video-js {
  font-family: 'dana VF' !important;
  font-size: unset !important;
}
::v-deep .video-js .vjs-play-control {
  width: 3em !important;
}

/* Custom Button Icon Styles */
::v-deep .vjs-custom-icon-button {
  background-color: transparent !important;
  border: none !important;
  padding: 0 !important;
}

::v-deep .vjs-icon-pip {
  width: 36px;
  height: 36px;
  border-radius: 32px;
  border-width: 1px;
  opacity: 1;
  background: #00000040;
  border: 1px solid;
  border-image-source: linear-gradient(
    202.36deg,
    rgba(255, 255, 255, 0.2) 8.26%,
    rgba(255, 255, 255, 0) 85.43%
  );
  backdrop-filter: blur(20px);
  box-shadow: -0.73px 0.73px 0.73px -1.46px #ffffff59 inset;
  display: block;
  object-fit: contain;
  padding: 6px;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.3s ease;
}
::v-deep .vjs-next10-button {
  width: 36px;
  height: 36px;
  border-radius: 32px;
  border-width: 1px;
  opacity: 1;
  background: #00000040;
  border: 1px solid;
  border-image-source: linear-gradient(
    202.36deg,
    rgba(255, 255, 255, 0.2) 8.26%,
    rgba(255, 255, 255, 0) 85.43%
  );
  backdrop-filter: blur(20px);
  box-shadow: -0.73px 0.73px 0.73px -1.46px #ffffff59 inset;
  display: block;
  object-fit: contain;
  padding: 6px;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.3s ease;
}
::v-deep .vjs-prev10-button {
  width: 36px;
  height: 36px;
  border-radius: 32px;
  border-width: 1px;
  opacity: 1;
  background: #00000040;
  border: 1px solid;
  border-image-source: linear-gradient(
    202.36deg,
    rgba(255, 255, 255, 0.2) 8.26%,
    rgba(255, 255, 255, 0) 85.43%
  );
  backdrop-filter: blur(20px);
  box-shadow: -0.73px 0.73px 0.73px -1.46px #ffffff59 inset;
  display: block;
  object-fit: contain;
  padding: 6px;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.3s ease;
}
::v-deep .vjs-button-icon {
  width: 36px;
  height: 36px;
  border-radius: 32px;
  border-width: 1px;
  opacity: 1;
  background: #00000040;
  border: 1px solid;
  border-image-source: linear-gradient(
    202.36deg,
    rgba(255, 255, 255, 0.2) 8.26%,
    rgba(255, 255, 255, 0) 85.43%
  );
  backdrop-filter: blur(20px);
  box-shadow: -0.73px 0.73px 0.73px -1.46px #ffffff59 inset;
  display: block;
  object-fit: contain;
  padding: 6px;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.3s ease;
}

::v-deep .vjs-button-icon:hover {
  transform: scale(1.1);
  opacity: 0.9;
}

/* Progress Bar Bullet (Handle) Styles */
::v-deep .vjs-progress-control .vjs-play-progress::before {
  width: 12px !important;
  height: 12px !important;
  opacity: 1 !important;
  background: #ffffff !important;
  top: -5px !important;
  font-size: 0 !important;
  border-radius: 50% !important;
}

/* Control Bar Styles */
::v-deep .video-js .vjs-control-bar {
  background: linear-gradient(
    180deg,
    rgba(8, 9, 13, 0) 0%,
    rgba(8, 9, 13, 0.9) 80.37%
  ) !important;
  backdrop-filter: blur(2px) !important;
  opacity: 1 !important;
  padding-right: 16px !important;
  padding-bottom: 24px !important;
  padding-left: 16px !important;
}

/* Hide cursor when user is inactive */
::v-deep .video-js.vjs-user-inactive.vjs-playing {
  cursor: none;
}

/* Style for built-in Video.js play/pause and fullscreen controls */
::v-deep .vjs-play-control,
::v-deep .vjs-fullscreen-control {
  background-color: transparent !important;
}

::v-deep .vjs-play-control .vjs-icon-placeholder::before,
::v-deep .vjs-fullscreen-control .vjs-icon-placeholder::before {
  width: 36px !important;
  height: 36px !important;
  border-radius: 32px !important;
  opacity: 1 !important;
  background-color: #00000040 !important;
  border: 1px solid !important;
  border-image-source: linear-gradient(
    202.36deg,
    rgba(255, 255, 255, 0.2) 8.26%,
    rgba(255, 255, 255, 0) 85.43%
  ) !important;
  backdrop-filter: blur(20px) !important;
  box-shadow: -0.73px 0.73px 0.73px -1.46px #ffffff59 inset !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  transition: transform 0.2s ease, opacity 0.3s ease !important;
}

::v-deep .vjs-play-control:hover .vjs-icon-placeholder::before,
::v-deep .vjs-fullscreen-control:hover .vjs-icon-placeholder::before {
  transform: scale(1.1) !important;
  opacity: 0.9 !important;
}

.vjs-vast-click-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 25;
}

.vjs-vast-countdown {
  position: absolute;
  top: 15px;
  right: 20px;
  color: #fff;
  font-size: 16px;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.7);
  z-index: 30;
}

.video-title-overlay {
  position: absolute;
  top: 15px;
  left: 20px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  z-index: 10;
  padding: 5px 10px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
}

.video-placeholder {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
  background-color: #333;
}

.vjs-quality-selector,
.vjs-autoplay-toggle {
  background-size: 20px 20px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.vjs-quality-selector {
  background: url('/images/quality.svg') no-repeat center;
}

.vjs-autoplay-toggle {
  background: url('/images/autoplay.svg') no-repeat center;
}

.vjs-quality-selector:hover,
.vjs-autoplay-toggle:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: scale(1.1);
}

.vjs-control-bar {
  background: rgba(0, 0, 0, 0.7) !important;
  border-radius: 8px;
  transition: background 0.3s ease;
}

.vjs-control-bar:hover {
  background: rgba(0, 0, 0, 0.9) !important;
}

.vjs-control {
  margin: 0 5px;
}

:deep(.video-js.vjs-rtl) {
  direction: rtl !important;
}

:deep(.video-js.vjs-rtl .vjs-control-bar) {
  flex-direction: row-reverse !important;
}

.vjs-prev10-button,
.vjs-next10-button {
  width: 36px;
  height: 36px;
  background-color: transparent;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  margin: 0 5px;
}

.vjs-prev10-button:hover,
.vjs-next10-button:hover {
  transform: scale(1.2);
  color: #00a8ff;
}

.vjs-next10-button {
  margin-right: 5px !important;
}

::v-deep button.vjs-control.vjs-button.vjs-next10-button {
  margin-left: -7px !important;
  margin-right: 10px !important;
}

/* ::v-deep .vjs-runtime-display {
  color: white;
  font-size: 13px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  padding: 0;
  display: flex;
  align-items: center;
  font-family: Arial, sans-serif;
  margin: 0 5px;
  min-width: 118px;
  text-align: center;
  justify-content: center;
} */

/* ::v-deep .vjs-rtl .vjs-runtime-display {
  direction: rtl !important;
} */

/* @media (max-width: 480px) {
  ::v-deep .vjs-runtime-display {
    font-size: 11px;
    min-width: 80px;
    padding: 0 5px;
  }
} */

.skip-credits-btn {
  position: absolute;
  bottom: 108px;
  left: 20px;
  background: rgba(0, 0, 0, 0.8) !important;
  color: white;
  border: 2px solid black;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  z-index: 20;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease, opacity 0.3s ease;
  backdrop-filter: blur(10px);
  animation: fadeInUp 0.5s ease;
}

.skip-credits-btn:hover {
  background: rgba(0, 0, 0, 0.9);
  border-color: rgba(255, 255, 255, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.skip-icon {
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 16px;
}

/* Animation for button appearance */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .skip-credits-btn {
    bottom: 70px;
    left: 15px;
    padding: 8px 16px;
    font-size: 12px;
  }

  .skip-icon {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .skip-credits-btn {
    bottom: 100px;
    left: 10px;
    padding: 6px 12px;
    font-size: 11px;
  }
}

/* Hide the volume tooltip */
::v-deep(.vjs-volume-tooltip) {
  display: none !important;
}
::v-deep(.vjs-mouse-display) {
  display: none !important;
}

video#episode-player_html5_api {
  outline: none !important;
}

/* Title Display at Bottom Left */
.video-title-bottom {
  position: absolute;
  bottom: 70px;
  left: 20px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  z-index: 15;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 6px;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: opacity 0.3s ease;
}

/* Timer Display at Bottom Right */
.video-timer-bottom {
  position: absolute;
  bottom: 70px;
  right: 20px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  z-index: 1;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 6px;
  direction: ltr;
  pointer-events: none;
  transition: opacity 0.3s ease;
  text-align: center !important;
  font-family: 'dana VF', sans-serif !important;
}

/* Fullscreen Custom Overlays Support */
.video-js.vjs-fullscreen .skip-credits-btn,
.video-js.vjs-fullscreen .video-title-bottom,
.video-js.vjs-fullscreen .video-timer-bottom,
.video-js.vjs-fullscreen .settings-drawer-overlay {
  position: fixed !important;
  z-index: 2147483647 !important;
}

/* Adjust positioning in fullscreen for better visibility */
.video-js.vjs-fullscreen .skip-credits-btn {
  bottom: 120px !important;
}

.video-js.vjs-fullscreen .video-title-bottom {
  bottom: 80px !important;
}

.video-js.vjs-fullscreen .video-timer-bottom {
  bottom: 80px !important;
}

.video-js.vjs-fullscreen .settings-drawer-overlay {
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  position: fixed !important;
}

/* Ensure drawer remains centered in fullscreen */
.video-js.vjs-fullscreen .settings-drawer {
  position: relative;
}

/* In fullscreen mode on desktop, make drawer a bit smaller for better UX */
@media (min-width: 769px) {
  .video-js.vjs-fullscreen .settings-drawer:not(.mobile-drawer) {
    max-height: 70vh;
  }
}

/* Hide skip buttons on mobile */
@media (max-width: 768px) {
  ::v-deep .vjs-prev10-button,
  ::v-deep .vjs-next10-button {
    display: none !important;
  }

  /* Simplify volume control on mobile - only mute/unmute */
  ::v-deep .vjs-volume-panel .vjs-volume-control {
    display: none !important;
  }

  ::v-deep .vjs-volume-panel {
    width: auto !important;
  }

  .video-title-bottom {
    bottom: 90px;
    left: 10px;
    font-size: 14px;
    max-width: 200px;
    padding: 6px 10px;
  }

  .video-timer-bottom {
    bottom: 90px;
    right: 10px;
    font-size: 12px;
    padding: 6px 10px;
  }
}

@media (max-width: 480px) {
  .video-title-bottom {
    font-size: 12px;
    max-width: 150px;
    padding: 4px 8px;
  }

  .video-timer-bottom {
    font-size: 11px;
    padding: 4px 8px;
  }
}

/* Hide autoplay toggle as requested */
::v-deep .vjs-autoplay-button {
  display: none !important;
}

/* Next Button Styles */
::v-deep .vjs-next-button {
  cursor: pointer;
  color: white;
  background-color: transparent;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, color 0.2s ease;
}

::v-deep .vjs-next-button:hover {
  color: #00a8ff;
  transform: scale(1.1);
}

::v-deep .vjs-icon-next {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

/* Picture-in-Picture Button Styles */
::v-deep .vjs-pip-button {
  cursor: pointer;
  color: white;
  background-color: transparent;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, color 0.2s ease;
}

::v-deep .vjs-pip-button:hover {
  color: #00a8ff;
  transform: scale(1.1);
}

::v-deep .vjs-icon-pip {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

/* Subtitle Settings Button Styles */
::v-deep .vjs-subtitle-settings-button {
  cursor: pointer;
  color: white;
  background-color: transparent;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, color 0.2s ease;
}

::v-deep .vjs-subtitle-settings-button:hover {
  color: #00a8ff;
  transform: scale(1.1);
}

::v-deep .vjs-icon-subtitles {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

/* Subtitle Menu Overlay */
::v-deep .vjs-subtitle-menu-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

::v-deep .vjs-subtitle-menu-content {
  background: rgba(30, 30, 30, 0.95);
  border-radius: 8px;
  padding: 20px;
  min-width: 250px;
  max-width: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

::v-deep .vjs-subtitle-menu-title {
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 10px;
}

::v-deep .vjs-subtitle-menu-item {
  color: white;
  padding: 12px 15px;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 5px;
  transition: background-color 0.2s ease, transform 0.1s ease;
  text-align: center;
}

::v-deep .vjs-subtitle-menu-item:hover {
  background-color: rgba(0, 168, 255, 0.3);
  transform: translateX(-2px);
}

::v-deep .vjs-subtitle-menu-item.active {
  background-color: rgba(0, 168, 255, 0.5);
  font-weight: bold;
}

::v-deep .vjs-subtitle-menu-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 10px 0;
}

::v-deep .vjs-subtitle-menu-item.settings {
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

::v-deep .vjs-subtitle-menu-item.settings:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* Subtitle Settings Overlay */
::v-deep .vjs-subtitle-settings-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
}

::v-deep .vjs-subtitle-settings-content {
  background: rgba(30, 30, 30, 0.98);
  border-radius: 12px;
  padding: 25px;
  min-width: 300px;
  max-width: 450px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.7);
}

::v-deep .vjs-subtitle-settings-title {
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  border-bottom: 2px solid rgba(0, 168, 255, 0.5);
  padding-bottom: 12px;
}

::v-deep .vjs-subtitle-setting-group {
  margin-bottom: 20px;
}

::v-deep .vjs-subtitle-setting-group label {
  color: white;
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
}

::v-deep .vjs-subtitle-setting-group select {
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}

::v-deep .vjs-subtitle-setting-group select:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(0, 168, 255, 0.5);
}

::v-deep .vjs-subtitle-setting-group select:focus {
  outline: none;
  border-color: rgba(0, 168, 255, 0.8);
  box-shadow: 0 0 0 2px rgba(0, 168, 255, 0.2);
}

::v-deep .vjs-subtitle-settings-apply {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #00a8ff 0%, #0080ff 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
}

::v-deep .vjs-subtitle-settings-apply:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 168, 255, 0.4);
}

::v-deep .vjs-subtitle-settings-apply:active {
  transform: translateY(0);
}

/* Playback Rate Button */
::v-deep .vjs-playback-rate-button {
  cursor: pointer;
  color: white;
  background-color: transparent;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, color 0.2s ease;
}

::v-deep .vjs-playback-rate-button:hover {
  color: #00a8ff;
  transform: scale(1.1);
}

::v-deep .vjs-icon-playback-rate {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

/* Playback Rate Menu Overlay */
::v-deep .vjs-playback-rate-menu-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

::v-deep .vjs-playback-rate-menu-content {
  background: rgba(30, 30, 30, 0.95);
  border-radius: 8px;
  padding: 20px;
  min-width: 220px;
  max-width: 350px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

::v-deep .vjs-playback-rate-menu-title {
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 10px;
}

::v-deep .vjs-playback-rate-menu-item {
  color: white;
  padding: 12px 15px;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 5px;
  transition: background-color 0.2s ease, transform 0.1s ease;
  text-align: center;
  font-family: Arial, sans-serif;
}

::v-deep .vjs-playback-rate-menu-item:hover {
  background-color: rgba(0, 168, 255, 0.3);
  transform: translateX(-2px);
}

::v-deep .vjs-playback-rate-menu-item.active {
  background-color: rgba(0, 168, 255, 0.5);
  font-weight: bold;
}

/* Enhanced Quality Selector Styles */
::v-deep .vjs-quality-selector .vjs-menu {
  background: rgba(30, 30, 30, 0.95);
  border-radius: 8px;
  padding: 8px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

::v-deep .vjs-quality-selector .vjs-menu-item {
  color: white;
  padding: 10px 20px;
  font-size: 14px;
  transition: background-color 0.2s ease;
}

::v-deep .vjs-quality-selector .vjs-menu-item:hover {
  background-color: rgba(0, 168, 255, 0.3);
}

::v-deep .vjs-quality-selector .vjs-menu-item.vjs-selected {
  background-color: rgba(0, 168, 255, 0.5);
  font-weight: bold;
}

::v-deep .vjs-quality-selector .vjs-menu-item.vjs-selected::before {
  content: '✓ ';
  margin-right: 8px;
}

/* Mobile adjustments for new buttons */
@media (max-width: 768px) {
  ::v-deep .vjs-next-button,
  ::v-deep .vjs-pip-button,
  ::v-deep .vjs-subtitle-settings-button,
  ::v-deep .vjs-playback-rate-button {
    padding: 0 8px;
  }

  ::v-deep .vjs-icon-next,
  ::v-deep .vjs-icon-pip,
  ::v-deep .vjs-icon-subtitles,
  ::v-deep .vjs-icon-playback-rate {
    font-size: 14px;
  }

  ::v-deep .vjs-subtitle-menu-content,
  ::v-deep .vjs-playback-rate-menu-content {
    min-width: 200px;
    padding: 15px;
  }

  ::v-deep .vjs-subtitle-menu-title,
  ::v-deep .vjs-playback-rate-menu-title {
    font-size: 16px;
  }

  ::v-deep .vjs-subtitle-menu-item,
  ::v-deep .vjs-playback-rate-menu-item {
    padding: 10px 12px;
    font-size: 14px;
  }

  ::v-deep .vjs-subtitle-settings-content {
    min-width: 250px;
    padding: 20px;
  }

  ::v-deep .vjs-subtitle-settings-title {
    font-size: 18px;
  }
}

/* Applies only to our custom layout */
::v-deep .vjs-split-controls .vjs-control-bar {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 0;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.4);
  padding-bottom: 4px;
  flex-wrap: wrap;
  justify-content: space-between;
}

/* Move the progress bar to its own row */
::v-deep .vjs-split-controls .vjs-progress-control {
  order: 0;
  width: 100%;
  margin-bottom: -24px;
  bottom: 1.2rem !important;
}

/* LEFT SIDE: Playback controls (prev10, play, next10) */
::v-deep .vjs-split-controls .vjs-prev10-button {
  order: 10;
}

::v-deep .vjs-split-controls .vjs-play-control {
  order: 11;
}

::v-deep .vjs-split-controls .vjs-next10-button {
  order: 12;
}

/* RIGHT SIDE: Other controls */
::v-deep .vjs-split-controls .vjs-volume-panel {
  order: 13;
}

::v-deep .vjs-split-controls .vjs-next-button {
  order: 22;
  margin-left: auto;
}

::v-deep .vjs-split-controls .vjs-pip-button {
  order: 23;
}

::v-deep .vjs-split-controls .vjs-settings-button {
  order: 24;
}

::v-deep .vjs-split-controls .vjs-playlist-button {
  order: 25;
}

::v-deep .vjs-split-controls .vjs-fullscreen-control {
  order: 27;
}

::v-deep .vjs-split-controls .vjs-quality-selector {
  order: 26;
}

/* Keep all controls aligned properly */
::v-deep
  .vjs-split-controls
  .vjs-control-bar
  > *:not(.vjs-progress-control, .vjs-custom-rtl-volume) {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Make sure progress bar spans full width on mobile too */
::v-deep .vjs-split-controls .vjs-progress-holder {
  width: 100% !important;
}

::v-deep .vjs-split-controls .vjs-progress-holder {
  height: 2px !important;
}

::v-deep .video-js .vjs-control-bar {
  bottom: 0 !important;
  padding: 0 16px;
}

::v-deep .vjs-volume-control.vjs-control.vjs-volume-horizontal {
  height: 5.5em !important;
}

/* Custom RTL Volume Control */
::v-deep .vjs-custom-rtl-volume {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
}

::v-deep .vjs-rtl-volume-button {
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.5em;
  padding: 0;
  width: 2em;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s;
}

::v-deep .vjs-rtl-volume-button:hover {
  color: #00a8ff;
}

::v-deep .vjs-rtl-volume-control {
  width: 0;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  opacity: 0;
  transition: width 0.3s ease, opacity 0.3s ease;
}

::v-deep .vjs-custom-rtl-volume:hover .vjs-rtl-volume-control,
::v-deep .vjs-rtl-volume-control.vjs-slider-active {
  width: 9em;
  opacity: 1;
}

::v-deep .vjs-rtl-volume-bar {
  width: 100%;
  height: 0.3em;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 0.15em;
  position: relative;
  cursor: pointer;
  margin: 0 0.5em;
}

::v-deep .vjs-rtl-volume-level {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #00a8ff 0%, #00d4ff 100%);
  border-radius: 0.15em;
  position: absolute;
  left: 0;
  top: 0;
  transition: width 0.1s ease;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

::v-deep .vjs-rtl-volume-handle {
  width: 0.9em;
  height: 0.9em;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  position: relative;
  right: -0.45em;
  cursor: grab;
  transition: transform 0.1s ease;
}

::v-deep .vjs-rtl-volume-handle:active {
  cursor: grabbing;
  transform: scale(1.2);
}
::v-deep
  .vjs-custom-rtl-volume.vjs-volume-panel.vjs-control.vjs-volume-panel-horizontal:active {
  width: 4em !important;
}

::v-deep .vjs-rtl-volume-bar:hover .vjs-rtl-volume-handle {
  transform: scale(1.1);
}

/* Position for custom RTL volume in control bar */
::v-deep .vjs-split-controls .vjs-custom-rtl-volume {
  order: 22;
}

/* Mobile - hide slider, only show mute button */
@media (max-width: 768px) {
  ::v-deep .vjs-custom-rtl-volume:hover .vjs-rtl-volume-control,
  ::v-deep .vjs-rtl-volume-control.vjs-slider-active {
    width: 0;
    opacity: 0;
  }
}

::v-deep
  .vjs-custom-rtl-volume
  .vjs-volume-panel
  .vjs-control
  .vjs-volume-panel-horizontal:hover {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
}

::v-deep .vjs-split-controls .vjs-control-bar > .vjs-custom-rtl-volume {
  display: flex;
  align-items: center;
  justify-content: start;
}

/* ============================================ */
/* Settings Drawer Styles */
/* ============================================ */

.settings-drawer-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.settings-drawer {
  width: 40vw;
  max-width: 500px;
  min-width: 320px;
  border-radius: 12px 12px 0 0;
  opacity: 1;
  background: #373737;
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.5);
  animation: slideUp 0.3s ease-out;
  direction: rtl;
  overflow: hidden;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
}

.settings-drawer.mobile-drawer {
  width: 100vw;
  height: 100vh;
  max-width: none;
  border-radius: 0;
  animation: slideUpFull 0.3s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideUpFull {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.drawer-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.drawer-header {
  padding: 20px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.drawer-header.with-back {
  justify-content: center;
}

.drawer-header h3 {
  margin: 0;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
}

.back-button {
  position: absolute;
  right: 20px;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;
}

.back-button:hover {
  color: #00a8ff;
}

.drawer-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 0;
}

.drawer-body {
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;
}

/* Main Menu Items */
.drawer-item {
  display: flex;
  align-items: center;
  padding: 16px 24px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.drawer-item:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.drawer-item-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  margin-left: 16px;
  color: #ffffff;
  font-size: 18px;
}

.drawer-item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.drawer-item-title {
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
}

.drawer-item-value {
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
}

.drawer-item-arrow {
  color: rgba(255, 255, 255, 0.4);
  font-size: 14px;
}

/* Option Items (Radio Buttons) */
.drawer-option {
  display: flex;
  align-items: center;
  padding: 14px 24px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.drawer-option:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.drawer-option.active {
  background-color: rgba(0, 168, 255, 0.15);
}

.drawer-option-radio {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  margin-left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s ease;
}

.drawer-option.active .drawer-option-radio {
  border-color: #00a8ff;
}

.radio-checked {
  width: 10px;
  height: 10px;
  background: #00a8ff;
  border-radius: 50%;
}

.drawer-option-label {
  color: #ffffff;
  font-size: 15px;
  flex: 1;
}

.drawer-option.active .drawer-option-label {
  color: #00a8ff;
  font-weight: 500;
}

/* Mobile Adjustments */
@media (max-width: 768px) {
  .settings-drawer:not(.mobile-drawer) {
    width: 80vw;
  }

  .drawer-header h3 {
    font-size: 16px;
  }

  .drawer-item {
    padding: 14px 20px;
  }

  .drawer-item-icon {
    width: 36px;
    height: 36px;
    font-size: 16px;
    margin-left: 12px;
  }

  .drawer-item-title {
    font-size: 14px;
  }

  .drawer-item-value {
    font-size: 12px;
  }

  .drawer-option {
    padding: 12px 20px;
  }

  .drawer-option-label {
    font-size: 14px;
  }
}

/* Settings Button Styles */
::v-deep .vjs-settings-button {
  cursor: pointer;
  color: white;
  background-color: transparent;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, color 0.2s ease;
}

::v-deep .vjs-settings-button:hover {
  color: #00a8ff;
  transform: scale(1.1);
}

/* Add these styles to your CSS */
.subtitle-style-group {
  margin-bottom: 20px;
}

.subtitle-style-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #e0e0e0;
}

.subtitle-style-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.subtitle-style-option {
  padding: 10px;
  border: 1px solid #444;
  border-radius: 6px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  background: #2d2d2d;
}

.subtitle-style-option.active {
  border-color: #ff5722;
  background: #3d2d2d;
}

.subtitle-style-option.color-option {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-start;
  padding: 8px 10px;
}

.color-preview {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #555;
}

.bg-preview {
  width: 16px;
  height: 16px;
  background: #000;
  border-radius: 2px;
  margin-right: 8px;
}

.subtitle-style-actions {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #444;
}

.reset-default-btn {
  width: 100%;
  padding: 12px;
  background: #ff5722;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

.reset-default-btn:hover {
  background: #e64a19;
}

/* Progress Bar Preview Popover */
.progress-preview-popover {
  position: absolute;
  bottom: 78px;
  z-index: 100;
  pointer-events: none;
  transition: opacity 0.2s ease;
}

.preview-thumbnail {
  display: none;
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 8px;
}

.preview-thumbnail canvas {
  display: block;
  width: 160px;
  height: 90px;
  object-fit: cover;
}

.preview-time {
  width: 160px;
  background: rgba(0, 0, 0, 0.9);
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  font-family: 'dana VF', sans-serif;
}

/* Arrow pointing down to progress bar */
.progress-preview-popover::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.9);
}

::v-deep .video-js .vjs-progress-control:hover .vjs-time-tooltip,
.video-js
  .vjs-progress-control:hover
  .vjs-progress-holder:focus
  .vjs-time-tooltip,
.video-js.vjs-scrubbing.vjs-touch-enabled
  .vjs-progress-control
  .vjs-time-tooltip {
  display: none !important;
}
</style>
