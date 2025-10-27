<template>
  <div style="position: relative">
    <div
      v-if="!stream && posterUrl"
      class="video-placeholder"
      :style="{ backgroundImage: `url(${posterUrl})` }"
    >
      <div v-if="title" class="video-title-overlay">
        {{ adActive ? 'نمایش تبلیغات' : title }}
      </div>
    </div>
    <video
      v-else
      :id="playerid"
      :ref="playerid"
      class="video-js vjs-default-skin vjs-theme-fantasy vjs-big-play-centered vjs-16-9"
      controls
      preload="auto"
      style="width: 100%; height: 100%; border-radius: 0.375rem"
      :poster="posterUrl"
    />

    <!-- Skip Credits Button -->
    <button
      v-if="showSkipCredits && stream"
      class="skip-credits-btn"
      @click="skipCredits"
    >
      {{ skipButtonText }}
      <span class="skip-icon"><i class="fa fa-forward" /></span>
    </button>

    <div v-if="title && stream" class="video-title-overlay">
      {{ adActive ? 'نمایش تبلیغات' : title }}
    </div>

    <button id="vast-cta-btn">اطلاعات بیشتر</button>
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
        first_credits: 0, // Start time of first credits (in seconds)
        after_credits: 0, // Start time of mid credits scene
        final_credits: 0, // Start time of final credits
      }),
    },
  },

  data() {
    return {
      adActive: false,
      viewsIncremented: false,
      player: null,
      showSkipCredits: false,
      skipButtonText: 'رد کردن تیتراژ',
      currentCreditType: null,
      creditCheckInterval: null,
    }
  },

  computed: {
    ...mapGetters({
      autoPlay: 'autoplay',
    }),
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
  },

  mounted() {
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
    window.removeEventListener('keydown', this.handleKeydown)
  },

  methods: {
    ...mapActions(['SET_AUTOPLAY']),

    initPlayer() {
      const currentLang = this.$i18n.locale
      const isRtl = currentLang === 'fa'

      if (currentLang === 'fa') {
        videojs.addLanguage('fa', fa)
      }

      this.player = videojs(this.playerid, {
        autoplay: this.playerAutoPlay,
        controls: true,
        fluid: true,
        poster: this.posterUrl,
        language: currentLang,
        sources: [{ src: this.stream, type: 'application/x-mpegURL' }],
      })

      const videoEl = this.$refs[this.playerid]
      if (videoEl) {
        videoEl.classList.toggle('vjs-rtl', isRtl)
        videoEl.style.direction = isRtl ? 'rtl' : 'ltr'
      }

      this.setupVastPlugin()
      this.setupPlayerEvents()
    },

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
      const ctaBtn = document.getElementById('vast-cta-btn')

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

    setupTextTracks() {
      if (this.tracks?.length) {
        this.tracks.forEach((track) => {
          this.player.addRemoteTextTrack(
            {
              kind: track.kind,
              src: track.src,
              label: track.label,
              default: track.default,
              language: track.language || '',
            },
            false
          )
        })
      }
    },

    setupCustomButtons() {
      this.createRuntimeDisplay()

      if (this.hasPlaylist) {
        this.createPlaylistButton()
      }

      if (this.showAutoPlayToggle) {
        this.createAutoPlayButton()
        this.createSkipButtons()
      }
    },

    createNextButton() {
      const Button = videojs.getComponent('Button')

      class NextButton extends Button {
        constructor(player, options) {
          super(player, options)
          this.addClass('vjs-next-button')
          this.controlText('Next')
          const icon = document.createElement('span')
          icon.className = 'vjs-icon-next'
          this.el().appendChild(icon)
        }
        handleClick() {
          this.player().trigger('ended')
        }
      }

      videojs.registerComponent('NextButton', NextButton)

      const playToggle = this.player.controlBar.getChild('PlayToggle')
      let insertIndex = this.player.controlBar.children().indexOf(playToggle)
      insertIndex =
        insertIndex === -1
          ? this.player.controlBar.children().length
          : insertIndex + 1

      this.player.controlBar.addChild('NextButton', {}, insertIndex)
    },

    createPlaylistButton() {
      const Button = videojs.getComponent('Button')

      class PlaylistButton extends Button {
        constructor(player, options) {
          super(player, options)
          this.addClass('vjs-playlist-button')
          this.controlText('انتخاب فصل و قسمت')
          const icon = document.createElement('span')
          icon.className = 'vjs-icon-playlist'
          this.el().appendChild(icon)
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

    createAutoPlayButton() {
      const Button = videojs.getComponent('Button')
      const _this = this

      class AutoPlayButton extends Button {
        constructor(player, options) {
          super(player, options)
          this.addClass('vjs-autoplay-toggle')
          this.controlText('Toggle AutoPlay')
          this.icon = document.createElement('img')
          this.icon.style.width = '28px'
          this.icon.style.height = '28px'
          this.el().appendChild(this.icon)
          this.updateIcon()
        }

        handleClick() {
          const newState = !_this.autoPlay
          _this.SET_AUTOPLAY(newState)
          this.updateIcon()
        }

        updateIcon() {
          this.icon.src = _this.autoPlay
            ? '/images/autoplay.svg'
            : '/images/no-autoplay.svg'
        }
      }

      videojs.registerComponent('AutoPlayButton', AutoPlayButton)
      this.player.controlBar.addChild(
        'AutoPlayButton',
        {},
        this.player.controlBar.children().length - 1
      )
    },

    createSkipButtons() {
      this.createNextButton()
      this.createSkip10Buttons()
    },

    createSkip10Buttons() {
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
        this.$emit('timeupdate', {
          currentTime: this.player.currentTime(),
          duration: this.player.duration(),
          player: this.player,
        })
      })

      this.player.on('ended', () => {
        if (this.autoPlay) {
          this.$emit('ended')
        }
      })
    },

    handlePlayEvent() {
      if (!this.viewsIncremented && this.shouldIncrementViews && this.videoid) {
        this.$axios
          .$post(`/nocache/videos/${this.videoid}/increment-views`, {
            videotype: this.videotype,
          })
          .then((response) => {
            console.log(
              'Views incremented, new view count:',
              response.views_count
            )
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

    setupQualitySelector() {
      this.player.hlsQualitySelector({
        displayCurrentQuality: true,
      })
    },

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

    handleKeydown(event) {
      if (!this.player) return

      const seekTime = 10
      const volumeStep = 0.1

      switch (event.key) {
        case 'ArrowLeft':
          this.player.currentTime(
            Math.max(this.player.currentTime() - seekTime, 0)
          )
          break
        case 'ArrowRight':
          this.player.currentTime(
            Math.min(
              this.player.currentTime() + seekTime,
              this.player.duration()
            )
          )
          break
        case 'ArrowUp':
          this.player.volume(Math.min(this.player.volume() + volumeStep, 1))
          break
        case 'ArrowDown':
          this.player.volume(Math.max(this.player.volume() - volumeStep, 0))
          break
        case ' ':
          event.preventDefault()
          this.player.paused() ? this.player.play() : this.player.pause()
          break
      }
    },

    createRuntimeDisplay() {
      const Component = videojs.getComponent('Component')

      class RuntimeDisplay extends Component {
        constructor(player, options) {
          super(player, options)
          this.addClass('vjs-runtime-display')
          this.updateText()

          player.on('timeupdate', () => {
            this.updateText()
          })

          player.on('loadedmetadata', () => {
            this.updateText()
          })
        }

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

        createEl() {
          return videojs.dom.createEl('div', {
            className: 'vjs-runtime-display vjs-control',
            innerHTML: '00:00 / 00:00',
          })
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

    setupCreditsSkip() {
      // Clear any existing interval
      if (this.creditCheckInterval) {
        clearInterval(this.creditCheckInterval)
      }

      // Check for credit sections every second
      this.creditCheckInterval = setInterval(() => {
        if (!this.player || this.player.paused()) return

        const currentTime = this.player.currentTime()
        const duration = this.player.duration()

        // Check if we're in any credit section
        console.log(this.isInFirstCredits(currentTime))
        if (this.isInFirstCredits(currentTime)) {
          this.showSkipCredits = true
          this.currentCreditType = 'first_credits'
          this.skipButtonText = 'رد کردن تیتراژ'
        } else if (this.isInFinalCredits(currentTime, duration)) {
          this.showSkipCredits = true
          this.currentCreditType = 'final_credits'
          this.skipButtonText = 'قسمت بعد'
        } else {
          this.showSkipCredits = false
          this.currentCreditType = null
        }
      }, 1000)

      // Clean up interval when player is disposed
      this.player.on('dispose', () => {
        if (this.creditCheckInterval) {
          clearInterval(this.creditCheckInterval)
        }
      })
    },

    isInFirstCredits(currentTime) {
      const firstCreditsStart = this.creditsData.first_credits
      const firstCreditsEnd = this.creditsData.after_credits
      return (
        firstCreditsStart > 0 &&
        currentTime >= firstCreditsStart &&
        currentTime <= firstCreditsEnd
      )
    },

    isInFinalCredits(currentTime, duration) {
      const finalCreditsStart = this.creditsData.final_credits
      // If final credits start is provided, use it, otherwise assume last 10% of video
      const creditsStart =
        finalCreditsStart > 0 ? finalCreditsStart : duration * 0.9
      return currentTime >= creditsStart && duration > 0
    },

    skipCredits() {
      if (!this.player) return

      const duration = this.player.duration()

      switch (this.currentCreditType) {
        case 'first_credits':
          // Skip to after first credits (usually the main content)
          this.player.currentTime(this.creditsData.first_credits + 60)
          break

        case 'after_credits':
          // Skip to after the mid-credits scene
          this.player.currentTime(this.creditsData.after_credits + 30)
          break

        case 'final_credits':
          // Skip to end or trigger next episode
          this.player.currentTime(duration - 1)
          this.$emit('credits-skipped', 'final_credits')
          break

        default:
          // Default skip behavior
          this.player.currentTime(this.player.currentTime() + 60)
      }

      // Hide the button after clicking
      this.showSkipCredits = false
      this.currentCreditType = null
    },

    // Call this in setupPlayerEvents
    setupPlayerEvents() {
      this.player.ready(() => {
        this.setupAdEvents()
        this.setupTextTracks()
        this.setupCustomButtons()
        this.setupPlaybackEvents()
        this.setupQualitySelector()
        this.setupCreditsSkip() // Add this line
      })
    },
  },
}
</script>

<style scoped>
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

::v-deep .vjs-runtime-display {
  color: white;
  font-size: 13px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  padding: 0 10px;
  display: flex;
  align-items: center;
  font-family: Arial, sans-serif;
  margin: 0 5px;
  min-width: 118px;
  text-align: center;
  justify-content: center;
}

::v-deep .vjs-rtl .vjs-runtime-display {
  direction: rtl !important;
}

@media (max-width: 480px) {
  ::v-deep .vjs-runtime-display {
    font-size: 11px;
    min-width: 80px;
    padding: 0 5px;
  }
}

.skip-credits-btn {
  position: absolute;
  bottom: 80px;
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
  transition: all 0.3s ease;
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
    bottom: 60px;
    left: 10px;
    padding: 6px 12px;
    font-size: 11px;
  }
}
</style>
