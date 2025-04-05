<template>
  <div style="position: relative;">
    <div v-if="!stream && posterUrl" class="video-placeholder" :style="{ backgroundImage: `url(${poster})` }">
      <div v-if="title" class="video-title-overlay">
        {{ title }}
      </div>
    </div>
    <video
      v-else
      :id="playerid"
      :ref="playerid"
      class="video-js vjs-default-skin vjs-theme-fantasy vjs-big-play-centered vjs-16-9"
      controls
      preload="auto"
      style="width: 100%; height: 100%; border-radius: 0.375rem;"
      :poster="posterUrl"
    />
    <div v-if="title && stream" class="video-title-overlay">
      {{ title }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import videojs from 'video.js'
import 'videojs-contrib-ads'
import 'videojs-ima'
import 'videojs-hls-quality-selector'

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

    // prop اختیاری برای افزایش شمارش بازدیدها
    shouldIncrementViews: {
      type: Boolean,
      default: false,
    },
    // prop اختیاری برای ارسال شناسه ویدیو
    videoid: {
      type: String,
      default: '',
    },
    // prop اختیاری برای ارسال نوع ویدیو (videotype)
    videotype: {
      type: String,
      default: '',
    },
    
    muteOnOtherPlay: { type: Boolean, default: false }
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
        this.updateIcon() // به‌روزرسانی تنظیمات پلیر با مقدار جدید
      }
    }
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
    window.removeEventListener('keydown', this.handleKeydown)
  },
  methods: {
    ...mapActions(['SET_AUTOPLAY']),
    initPlayer() {
      this.player = videojs(this.playerid, {
        autoplay: this.playerAutoPlay,
        controls: true,
        fluid: true,
        poster: this.posterUrl,
        sources: [{ src: this.stream, type: 'application/x-mpegURL' }],
      })

      if (this.vastUrl) {
        this.player.ima({
          adTagUrl: this.vastUrl,
          debug: true,
        })
      }

      this.player.ready(() => {

  if (this.tracks && this.tracks.length) {
    this.tracks.forEach(track => {
      this.player.addRemoteTextTrack({
        kind: track.kind,       // مثلاً 'captions'
        src: track.src,         // آدرس فایل زیرنویس
        label: track.label,     // برچسب نمایش داده شده برای زیرنویس
        default: track.default, // تعیین می‌کند که زیرنویس پیش‌فرض باشد یا خیر
        language: track.language || '', // (اختیاری) زبان زیرنویس
      }, false) // false یعنی به صورت خودکار نمایش داده نشود (تنظیم false یا true بستگی به نیاز شما دارد)
    })
  }


    if (this.hasPlaylist) {
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
    this.player.controlBar.addChild('PlaylistButton', {}, this.player.controlBar.children().length - 1)

    this.player.on('playlistButtonClick', () => {
      this.$emit('playlistButtonClick')
    })
  }



        // Add autoplay toggle button if enabled
        if (this.showAutoPlayToggle) {
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
              const isAutoPlayEnabled = _this.autoPlay
              this.icon.src = isAutoPlayEnabled
                ? '/images/autoplay.svg'
                : '/images/no-autoplay.svg'
            }
          }

          videojs.registerComponent('AutoPlayButton', AutoPlayButton)
          const controlBar = this.player.controlBar
          if (controlBar) {
            controlBar.addChild('AutoPlayButton', {}, controlBar.children().length - 1)
          }


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
              // با کلیک روی دکمه Next، رویداد ended ارسال می‌شود
              this.player().trigger('ended')
            }
          }
    videojs.registerComponent('NextButton', NextButton)

    // پیدا کردن اندیس دکمه playToggle در controlBar
    const playToggle = this.player.controlBar.getChild('PlayToggle')
    let insertIndex = this.player.controlBar.children().indexOf(playToggle)
    // اگر پیدا نشد (مثلاً -1) می‌توانید به انتهای نوار کنترل اضافه کنید
    if (insertIndex === -1) {
      insertIndex = this.player.controlBar.children().length
    } else {
      // اضافه کردن بعد از playToggle
      insertIndex += 1
    }
    // اضافه کردن دکمه Next در اندیس مشخص‌شده
    this.player.controlBar.addChild('NextButton', {}, insertIndex)



        }


  const Button = videojs.getComponent('Button')
  if (!Button) {
    console.error('Button component is not available in Video.js')
    return
  }

  // تشخیص پشتیبانی از AirPlay:
  // اگر WebKitPlaybackTargetAvailabilityEvent تعریف شده باشد، فرض می‌کنیم AirPlay پشتیبانی می‌شود.
  const airplayAvailable = typeof window.WebKitPlaybackTargetAvailabilityEvent !== 'undefined'

  // تشخیص پشتیبانی از Chromecast:
  // اگر window.chrome.cast وجود داشته باشد، Chromecast را پشتیبانی می‌کنیم.
  const chromecastAvailable = !!(window.chrome && window.chrome.cast)


  // تعیین نوع دکمه‌ای که باید اضافه شود:
  let buttonType = null
  if (airplayAvailable && !chromecastAvailable) {
    buttonType = 'AirPlayButton'
  } else if (chromecastAvailable && !airplayAvailable) {
    buttonType = 'ChromecastButton'
  } else if (airplayAvailable && chromecastAvailable) {
    // اگر هر دو موجود باشند، می‌توانید یکی را به عنوان اولویت انتخاب کنید؛ در اینجا اولویت را به AirPlay می‌دهیم.
    buttonType = 'AirPlayButton'
  }


  if (buttonType === 'AirPlayButton') {
    class AirPlayButton extends Button {
      constructor(player, options) {
        super(player, options)
        this.addClass('vjs-airplay-button')
        this.controlText('AirPlay')
      }
      handleClick() {
        // در اینجا رویداد airPlayRequested trigger می‌شود؛
        // شما باید در جای دیگری این رویداد را مدیریت کنید.
        this.player().trigger('airPlayRequested')
      }
    }
    videojs.registerComponent('AirPlayButton', AirPlayButton)
    this.player.controlBar.addChild('AirPlayButton', {}, this.player.controlBar.children().length - 2)
  } else if (buttonType === 'ChromecastButton') {
    class ChromecastButton extends Button {
      constructor(player, options) {
        super(player, options)
        this.addClass('vjs-chromecast-button')
        this.controlText('Chromecast')
      }
      handleClick() {
        // در اینجا رویداد chromecastRequested trigger می‌شود؛
        // شما باید در جای دیگری این رویداد را مدیریت کنید.
        this.player().trigger('chromecastRequested')
      }
    }
    videojs.registerComponent('ChromecastButton', ChromecastButton)
    this.player.controlBar.addChild('ChromecastButton', {}, this.player.controlBar.children().length - 2)
  } else {
    console.info('Neither AirPlay nor Chromecast is available.')
  }

      this.viewsIncremented = false

    // افزودن listener به رویداد play؛ axios فراخوانی غیرهمزمان است و پلی بدون تأخیر ادامه می‌یابد.
    this.player.on('play', () => {
      if (!this.viewsIncremented && this.shouldIncrementViews && this.videoid) {
        this.$axios
          .$post(`/nocache/videos/${this.videoid}/increment-views`, { videotype: this.videotype })
          .then((response) => {
            console.log('Views incremented, new view count:', response.views_count)
            // علامت‌گذاری که درخواست یک بار ارسال شده است
            this.viewsIncremented = true
          })
          .catch((error) => {
            console.error('Error incrementing views:', error)
          })
      }
      if (this.muteOnOtherPlay) {
        this.$emit('video-played', this.playerid)
      }
    })
    
  
      })

this.player.on('userinactive', function() {
  // پیدا کردن المنت با آی‌دی flowplayer-back-button
  var backButton = document.getElementById('flowplayer-back-button')
  // پیدا کردن المنت با کلاس video-title-overlay
  // var videoTitleOverlay = document.querySelector('.video-title-overlay')

  if (backButton) {
    backButton.style.display = 'none'
  }
  // if (videoTitleOverlay) {
  //   videoTitleOverlay.style.display = 'none'
  // }
})

this.player.on('useractive', function() {
  var backButton = document.getElementById('flowplayer-back-button')
  // var videoTitleOverlay = document.querySelector('.video-title-overlay')

  if (backButton) {
    backButton.style.display = 'block' // یا هر حالت نمایش مورد نظرتون (مثلاً inline-block)
  }
  // if (videoTitleOverlay) {
  //   videoTitleOverlay.style.display = 'block'
  // }
})

this.player.on('timeupdate', () => {
  const currentTime = this.player.currentTime()
  const duration = this.player.duration()
  // ارسال رویداد به کامپوننت پدر
  this.$emit('timeupdate', { currentTime, duration, player: this.player })
})

this.player.on('ready', () => {
  this.$emit('ready', this.player )
})

this.player.hlsQualitySelector({
    displayCurrentQuality: true,
})
      this.player.on('ended', () => {
        if (this.autoPlay) {
          this.$emit('ended')
        }
      })
    },
  play() {
    if (this.player) {
      this.player.play()
    }
  },
  pause() {
    if (this.player) {
      this.player.pause()
    }
  },
  updateIcon() {
    const button = this.player.controlBar.getChild('AutoPlayButton')
    if (button) {
      button.updateIcon()
    }
  },  
  handleKeydown(event) {
    if (!this.player) return
    const seekTime = 10 // مدت زمان جابجایی به ثانیه (مثلاً 10 ثانیه)
    const volumeStep = 0.1 // میزان تغییر صدا (بین 0 تا 1)

    switch (event.key) {
      case 'ArrowLeft': {
        // عقب بردن ویدیو
        const newTime = Math.max(this.player.currentTime() - seekTime, 0)
        this.player.currentTime(newTime)
        break
      }
      case 'ArrowRight': {
        // جلو بردن ویدیو
        const duration = this.player.duration()
        const newTime = Math.min(this.player.currentTime() + seekTime, duration)
        this.player.currentTime(newTime)
        break
      }
      case 'ArrowUp': {
        // افزایش حجم صدا
        const newVolume = Math.min(this.player.volume() + volumeStep, 1)
        this.player.volume(newVolume)
        break
      }
      case 'ArrowDown': {
        // کاهش حجم صدا
        const newVolume = Math.max(this.player.volume() - volumeStep, 0)
        this.player.volume(newVolume)
        break
      }
      case ' ': {
        // پلی/پاز با Space
        event.preventDefault() // جلوگیری از اسکرول صفحه هنگام فشردن Space
        if (this.player.paused()) {
          this.player.play()
        } else {
          this.player.pause()
        }
        break
      }
    }
  },

  },

}
</script>
<style scoped>
/* Title overlay with better shadow and positioning */
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

/* Placeholder styling for when no video is loaded */
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

/* Quality selector button styling */
.vjs-quality-selector {
  background: url('/images/quality.svg') no-repeat center;
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

.vjs-quality-selector:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: scale(1.1);
}

/* Autoplay toggle button styling */
.vjs-autoplay-toggle {
  background: url('/images/autoplay.svg') no-repeat center;
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

.vjs-autoplay-toggle:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: scale(1.1);
}


/* Hover effects for the control bar */
.vjs-control-bar {
  background: rgba(0, 0, 0, 0.7) !important;
  border-radius: 8px;
  transition: background 0.3s ease;
}

.vjs-control-bar:hover {
  background: rgba(0, 0, 0, 0.9) !important;
}

/* Tooltip styling for better UX */
.vjs-tooltip {
  background: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 4px;
  text-align: center;
  white-space: nowrap;
}

/* Hide default tooltip background */
.vjs-tooltip:after {
  content: none;
}

/* Better alignment for the control buttons */
.vjs-control {
  margin: 0 5px;
}
</style>

