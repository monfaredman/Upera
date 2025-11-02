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
      playsinline
      webkit-playsinline
      x5-playsinline
      style="width: 100%; height: 100%; border-radius: 0.375rem"
      :poster="posterUrl"
    />

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

    <!-- Title Display (Bottom Left) -->
    <div v-if="title && stream" class="video-title-bottom">
      {{ adActive ? 'نمایش تبلیغات' : title }}
    </div>

    <!-- Timer Display (Bottom Right) -->
    <div v-if="stream" class="video-timer-bottom">
      {{ currentTimeFormatted }} / {{ durationFormatted }}
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
        first_credits: 1, // Start time of first credits (in seconds)
        after_credits: 60, // Start time of mid credits scene
        final_credits: 5550, // Start time of final credits
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
      isMobile: false,
      currentTimeFormatted: '00:00',
      durationFormatted: '00:00',
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
    window.removeEventListener('keydown', this.handleKeydown)
    window.removeEventListener('resize', this.handleResize)
  },

  methods: {
    ...mapActions(['SET_AUTOPLAY']),

    handleResize() {
      this.isMobile = window.innerWidth <= 768
    },

    initPlayer() {
      const currentLang = this.$i18n.locale
      const isRtl = currentLang === 'fa'

      if (currentLang === 'fa') {
        videojs.addLanguage('fa', fa)
      }

      this.player = videojs(this.playerid, {
        autoplay: false, // Disabled autoplay as requested
        controls: true,
        controlBar: {
          children: [
            'progressControl',
            'playToggle',
            'volumePanel',
            'fullscreenToggle',
            // 'autoPlayButton',
          ],
        },
        fluid: true,
        poster: this.posterUrl,
        language: currentLang,
        sources: [{ src: this.stream, type: 'application/x-mpegURL' }],
      })
      this.player.addClass('vjs-split-controls')

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

      // Add next button
      this.createNextButton()

      // Add picture-in-picture button
      this.createPipButton()

      // Add subtitle settings button only if subtitles are available
      if (this.tracks && this.tracks.length > 0) {
        this.createSubtitleSettingsButton()
      }

      // Create custom RTL volume control for Persian
      if (this.$i18n.locale === 'fa') {
        this.createCustomRTLVolumeControl()
      }

      if (this.showAutoPlayToggle) {
        // this.createAutoPlayButton()
        this.createSkipButtons()
      }
    },

    createNextButton() {
      const Button = videojs.getComponent('Button')

      class NextButton extends Button {
        constructor(player, options) {
          super(player, options)
          this.addClass('vjs-next-button')
          this.controlText('قسمت بعد')
          const icon = document.createElement('span')
          icon.className = 'vjs-icon-next'
          icon.innerHTML = '<i class="fa fa-step-forward"></i>'
          this.el().appendChild(icon)
        }
        handleClick() {
          this.player().trigger('ended')
        }
      }

      videojs.registerComponent('NextButton', NextButton)

      // Insert before fullscreen toggle
      const fullscreenToggle =
        this.player.controlBar.getChild('fullscreenToggle')
      let insertIndex = this.player.controlBar
        .children()
        .indexOf(fullscreenToggle)
      insertIndex =
        insertIndex === -1
          ? this.player.controlBar.children().length - 1
          : insertIndex

      this.player.controlBar.addChild('NextButton', {}, insertIndex)
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
          if (videoElement) {
            if (document.pictureInPictureElement) {
              document.exitPictureInPicture()
            } else if (videoElement.requestPictureInPicture) {
              videoElement.requestPictureInPicture().catch((error) => {
                console.error('Picture-in-Picture error:', error)
              })
            }
          }
        }
      }

      videojs.registerComponent('PipButton', PipButton)

      // Insert before fullscreen toggle
      const fullscreenToggle =
        this.player.controlBar.getChild('fullscreenToggle')
      let insertIndex = this.player.controlBar
        .children()
        .indexOf(fullscreenToggle)
      insertIndex =
        insertIndex === -1
          ? this.player.controlBar.children().length - 1
          : insertIndex

      this.player.controlBar.addChild('PipButton', {}, insertIndex)
    },

    createSubtitleSettingsButton() {
      const Button = videojs.getComponent('Button')
      const _this = this

      class SubtitleSettingsButton extends Button {
        constructor(player, options) {
          super(player, options)
          this.addClass('vjs-subtitle-settings-button')
          this.controlText('تنظیمات زیرنویس')
          const icon = document.createElement('span')
          icon.className = 'vjs-icon-subtitles'
          icon.innerHTML = '<i class="fa fa-closed-captioning"></i>'
          this.el().appendChild(icon)
        }
        handleClick() {
          _this.toggleSubtitleMenu()
        }
      }

      videojs.registerComponent(
        'SubtitleSettingsButton',
        SubtitleSettingsButton
      )

      // Insert before fullscreen toggle
      const fullscreenToggle =
        this.player.controlBar.getChild('fullscreenToggle')
      let insertIndex = this.player.controlBar
        .children()
        .indexOf(fullscreenToggle)
      insertIndex =
        insertIndex === -1
          ? this.player.controlBar.children().length - 1
          : insertIndex

      this.player.controlBar.addChild('SubtitleSettingsButton', {}, insertIndex)
    },

    toggleSubtitleMenu() {
      // Get all text tracks
      const textTracks = this.player.textTracks()
      const trackList = []

      for (let i = 0; i < textTracks.length; i++) {
        const track = textTracks[i]
        if (track.kind === 'subtitles' || track.kind === 'captions') {
          trackList.push({
            label: track.label || `Track ${i + 1}`,
            language: track.language,
            mode: track.mode,
            index: i,
          })
        }
      }

      // Create subtitle menu overlay
      let menu = document.querySelector('.vjs-subtitle-menu-overlay')
      if (menu) {
        menu.remove()
        return
      }

      menu = document.createElement('div')
      menu.className = 'vjs-subtitle-menu-overlay'

      const menuContent = document.createElement('div')
      menuContent.className = 'vjs-subtitle-menu-content'

      const title = document.createElement('div')
      title.className = 'vjs-subtitle-menu-title'
      title.textContent = 'انتخاب زیرنویس'
      menuContent.appendChild(title)

      // Add "Off" option
      const offOption = document.createElement('div')
      offOption.className = 'vjs-subtitle-menu-item'
      offOption.textContent = 'خاموش'
      offOption.onclick = () => {
        for (let i = 0; i < textTracks.length; i++) {
          textTracks[i].mode = 'disabled'
        }
        menu.remove()
      }
      menuContent.appendChild(offOption)

      // Add track options
      trackList.forEach((track) => {
        const option = document.createElement('div')
        option.className = 'vjs-subtitle-menu-item'
        if (track.mode === 'showing') {
          option.classList.add('active')
        }
        option.textContent = track.label
        option.onclick = () => {
          for (let i = 0; i < textTracks.length; i++) {
            textTracks[i].mode = i === track.index ? 'showing' : 'disabled'
          }
          menu.remove()
        }
        menuContent.appendChild(option)
      })

      menu.appendChild(menuContent)
      this.player.el().appendChild(menu)

      // Close menu when clicking outside
      menu.onclick = (e) => {
        if (e.target === menu) {
          menu.remove()
        }
      }
    },

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

          // Listen to player volume changes
          player.on('volumechange', () => {
            this.volumeLevel = player.volume()
            this.updateVolumeDisplay()
            this.updateMuteIcon()
          })
        }

        createVolumeElements() {
          this.el().innerHTML = `
            <button class="vjs-rtl-volume-button vjs-control vjs-button" type="button">
              <i class="fa fa-volume-up"></i>
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
          const icon = this.el().querySelector('.vjs-rtl-volume-button i')
          if (icon) {
            const volume = this.player().volume()
            if (volume === 0) {
              icon.className = 'fa fa-volume-off'
            } else if (volume < 0.5) {
              icon.className = 'fa fa-volume-down'
            } else {
              icon.className = 'fa fa-volume-up'
            }
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

      this.player.controlBar.addChild('CustomRTLVolumeControl', {}, insertIndex)
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

    // createAutoPlayButton() {
    //   const Button = videojs.getComponent('Button')
    //   const _this = this

    //   class AutoPlayButton extends Button {
    //     constructor(player, options) {
    //       super(player, options)
    //       this.addClass('vjs-autoplay-toggle')
    //       this.controlText('Toggle AutoPlay')
    //       this.icon = document.createElement('img')
    //       this.icon.style.width = '28px'
    //       this.icon.style.height = '28px'
    //       this.el().appendChild(this.icon)
    //       this.updateIcon()
    //     }

    //     handleClick() {
    //       const newState = !_this.autoPlay
    //       _this.SET_AUTOPLAY(newState)
    //       this.updateIcon()
    //     }

    //     updateIcon() {
    //       this.icon.src = _this.autoPlay
    //         ? '/images/autoplay.svg'
    //         : '/images/no-autoplay.svg'
    //     }
    //   }

    //   videojs.registerComponent('AutoPlayButton', AutoPlayButton)
    //   this.player.controlBar.addChild(
    //     'AutoPlayButton',
    //     {},
    //     this.player.controlBar.children().length - 1
    //   )
    // },

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
        // constructor(player, options) {
        //   super(player, options)
        //   this.addClass('vjs-runtime-display')
        //   this.updateText()

        //   player.on('timeupdate', () => {
        //     this.updateText()
        //   })

        //   player.on('loadedmetadata', () => {
        //     this.updateText()
        //   })
        // }

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

        // createEl() {
        //   return videojs.dom.createEl('div', {
        //     className: 'vjs-runtime-display vjs-control',
        //     innerHTML: '00:00 / 00:00',
        //   })
        // }
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
        // const duration = this.player.duration()

        // Check if we're in any credit section
        if (this.isInFirstCredits(currentTime)) {
          this.showSkipCredits = true
          this.currentCreditType = 'first_credits'
          this.skipButtonText = 'رد کردن تیتراژ'
        }
        //  else if (this.isInFinalCredits(currentTime, duration)) {
        //   this.showSkipCredits = true
        //   this.currentCreditType = 'final_credits'
        //   this.skipButtonText = 'قسمت بعد'
        // }
        else {
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
      const firstCreditsStart = this.creditsData.first_credits || 1
      const firstCreditsEnd = this.creditsData.after_credits || 60
      return (
        firstCreditsStart > 0 &&
        currentTime > firstCreditsStart &&
        currentTime < firstCreditsEnd
      )
    },

    isInFinalCredits(currentTime, duration) {
      const finalCreditsStart = this.creditsData.final_credits || duration - 70
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
          this.player.currentTime(this.creditsData.after_credits || 60)
          break

        case 'final_credits':
          // Skip to end or trigger next episode
          this.player.currentTime(duration - 1)
          this.$emit('credits-skipped', 'final_credits')
          break

        default:
          // Default skip behavior
          this.player.currentTime(this.player.currentTime())
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
        this.setupCreditsSkip()

        // ✅ Fix RTL volume bar direction
        const isRtl = this.$i18n.locale === 'fa'
        if (isRtl) {
          console.log('isRtl', isRtl)
          const volumeBar =
            this.player.controlBar?.getChild('volumePanel')?.volumeControl
              ?.volumeBar

          if (volumeBar) {
            console.log('volumeBar', volumeBar)
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
  z-index: 15;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 6px;
  font-family: Arial, sans-serif;
  direction: ltr;
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
    bottom: 60px;
    left: 10px;
    font-size: 14px;
    max-width: 200px;
    padding: 6px 10px;
  }

  .video-timer-bottom {
    bottom: 60px;
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

/* Mobile adjustments for new buttons */
@media (max-width: 768px) {
  ::v-deep .vjs-next-button,
  ::v-deep .vjs-pip-button,
  ::v-deep .vjs-subtitle-settings-button {
    padding: 0 8px;
  }

  ::v-deep .vjs-icon-next,
  ::v-deep .vjs-icon-pip,
  ::v-deep .vjs-icon-subtitles {
    font-size: 14px;
  }

  ::v-deep .vjs-subtitle-menu-content {
    min-width: 200px;
    padding: 15px;
  }

  ::v-deep .vjs-subtitle-menu-title {
    font-size: 16px;
  }

  ::v-deep .vjs-subtitle-menu-item {
    padding: 10px 12px;
    font-size: 14px;
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
  order: 25;
}

::v-deep .vjs-split-controls .vjs-subtitle-settings-button {
  order: 24;
}

::v-deep .vjs-split-controls .vjs-playlist-button {
  order: 23;
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
  height: 6px !important;
}

::v-deep .video-js .vjs-control-bar {
  bottom: 32px !important;
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
</style>
