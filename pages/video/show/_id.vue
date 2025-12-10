<template>
  <div class="video-container">
    <div class="hamshahri">
      <!-- دکمه بازگشت -->
      <a class="srmjs" @click="goBack">
        <div id="flowplayer-back-button">
          <div class="icon-back" />
        </div>
      </a>

      <!-- لودینگ -->
      <div v-if="loading" class="video-loading-spinner" />

      <!-- پیام "به زودی" -->
      <p v-if="soon" class="soon">به زودی...</p>

      <!-- دکمه رفرش -->
      <button
        v-if="soon"
        class="btn btn-primary btn-lg fw-bold refresh-btn"
        @click="reloadPage"
      >
        بارگذاری مجدد
      </button>
    </div>

    <!-- پلیر -->
    <div class="player-wrapper">
      <VideoPlayer
        v-if="videoUrl && !loading"
        ref="videoPlayer"
        playerid="video-player"
        :stream="videoUrl"
        :poster="posterUrl"
        :title="videoTitle"
        :tracks="tracks"
        :player-auto-play="true"
        :credits-data="creditsData"
        :fullrate-data="fullrateData"
        :content-id="$route.params.id"
        :content-type="'video'"
        class="full-screen-player vjs-fluid"
        @ready="handlePlayerReady"
        @timeupdate="handleTimeUpdate"
        @ended="handleEnded"
        @subscription-purchase="handleSubscriptionPurchase"
      />
    </div>
    <div
      v-if="showNextVideo && suggestion"
      class="next-video-overlay"
      @click="playNextVideo"
    >
      <div class="next-video-content">
        <p>{{ $t('player.next') }}: {{ suggestion.name_fa }}</p>
        <img :src="suggestionBackdrop" alt="Next Video Backdrop" />
      </div>
    </div>
  </div>
</template>

<script>
import VideoPlayer from '~/components/VideoPlayer.vue'

export default {
  components: { VideoPlayer },
  beforeRouteLeave(to, from, next) {
    // Close any open SweetAlert modal when route changes
    if (this.$swal && this.$swal.close) {
      try {
        this.$swal.close()
      } catch (e) {
        // Ignore errors when closing swal
      }
    }
    next()
  },
  layout: 'empty',
  data() {
    return {
      videoTitle: '',
      posterUrl: '',
      videoUrl: '',
      creditsData: {},
      tracks: [],
      loading: true,
      guest: true,
      soon: false,
      // برای زمان‌بندی بروزرسانی recently
      recentlyTime: 200,
      // برای نمایش فیلم بعدی
      showNextVideo: false,
      suggestion: null,
      suggestionBackdrop: '',
      // اگر زمان شروع پخش از قبل وجود داشته باشد
      startTime: 0,
      // داده‌های نرخ کامل برای دکمه اشتراک
      fullrateData: null,
    }
  },
  mounted() {
    // حذف کلاس‌های احتمالی قبلی
    if (this.$auth && this.$auth.loggedIn) {
      this.guest = false
    }
    this.loadVideo()

    // Handle browser back button
    window.addEventListener('popstate', this.handlePopState)
  },

  beforeDestroy() {
    // Close any open SweetAlert modal
    if (this.$swal && this.$swal.close) {
      try {
        this.$swal.close()
      } catch (e) {
        // Ignore errors when closing swal
      }
    }

    // Remove event listener
    window.removeEventListener('popstate', this.handlePopState)
  },

  methods: {
    handlePopState() {
      // Close any open SweetAlert modal when back button is pressed
      if (this.$swal && this.$swal.close) {
        try {
          this.$swal.close()
        } catch (e) {
          // Ignore errors when closing swal
        }
      }
    },
    showErrorAlert(data) {
      let dlsmtitle =
        this.$i18n.locale === 'fa' ? data.message_fa : data.message
      // let backtohome=false
      if (!dlsmtitle) {
        dlsmtitle = this.$t('player.error1')
        // backtohome=true
      }
      let dlsmbuttons = {
        back: {
          text: this.$t('player.back'),
          value: 'back',
          closeModal: true,
          className: 'swal-back',
        },
      }
      if (data.show_subscription === 1) {
        dlsmbuttons.subscribe = {
          text: this.$t('player.subscribe'),
          value: 'subscribe',
          closeModal: true,
        }
      }
      if (!this.$auth.loggedIn && data.show_login === 1) {
        Object.assign(dlsmbuttons, {
          login: {
            text: this.$t('nav.login'),
            value: 'login',
            closeModal: true,
          },
        })
      }
      this.$swal({
        title: dlsmtitle,
        icon: 'error',
        dangerMode: true,
        buttons: dlsmbuttons,
      }).then((value) => {
        switch (value) {
          case 'back':
            window.history.length > 2
              ? this.$router.go(-1)
              : this.$router.push({
                  name: 'video-id',
                  params: { id: this.$route.params.id },
                })
            break
          case 'subscribe':
            this.$store.dispatch('subscription/SHOW_MODAL', {
              content_type: 'video',
              content_id: this.$route.params.id,
            })
            break

          case 'login':
            this.$store.dispatch('login/SHOW_MODAL', {
              premessage: null,
              premobile: null,
              preredirect: null,
              prerefresh: false,
            })

            break
          default:
            window.history.length > 2
              ? this.$router.go(-1)
              : this.$router.push({
                  name: 'video-id',
                  params: { id: this.$route.params.id },
                })
            break
        }
      })
    },
    async loadVideo() {
      try {
        const id = this.$route.params.id
        if (!id) return

        const ref = this.$cookiz.get('ref') || ''
        // انتخاب API مناسب بر اساس وضعیت guest
        const apiUrl = this.guest
          ? `/ghost/get/watch/video/${id}${ref ? `?ref=${ref}` : ''}`
          : `/get/watch/video/${id}${ref ? `?ref=${ref}` : ''}`

        const response = await this.$axios.get(apiUrl)
        if (response.status === 200) {
          const data = response.data.data

          // ذخیره داده‌های fullrate برای دکمه اشتراک
          if (data.fullrate_data) {
            this.fullrateData = data.fullrate_data
          }

          this.creditsData = {
            first_credits: data.first_credits || null,
            after_credits: data.after_credits || null,
            final_credits: data.final_credits || null,
          }
          // تنظیم اطلاعات اصلی فیلم
          this.videoTitle =
            this.$i18n.locale === 'fa' && data.video[0].name_fa
              ? data.video[0].name_fa
              : data.video[0].name
          this.posterUrl = data.cdn.lg_backdrop + data.video[0].backdrop
          // فرض بر این است که آدرس ویدیو حاوی پارامتر nosub است
          const streamUrl = data.video[0].video.includes('?')
            ? data.video[0].video + '&nosub=1'
            : data.video[0].video + '?nosub=1'
          // ذخیره زمان شروع (در صورت وجود)
          this.startTime = data.video[0].current_time || 0

          const streamResponse = await fetch(streamUrl, { method: 'HEAD' })

          if (streamResponse.ok) {
            this.videoUrl = streamUrl
            this.soon = false
          } else {
            this.soon = true
          }

          // تنظیم زیرنویس‌ها (در صورت موجود بودن)
          if (data.new_subtitle && Array.isArray(data.new_subtitle)) {
            this.tracks = data.new_subtitle.map((track, index) => {
              return {
                kind: 'captions',
                label: track.language,
                src: track.url,
                default: index === 0,
              }
            })
          }
          // ذخیره پیشنهاد فیلم بعدی در صورت موجود بودن
          if (data.suggestion) {
            this.suggestion = data.suggestion
            this.suggestionBackdrop =
              data.cdn.md_backdrop + data.suggestion.backdrop
          }
        } else {
          this.showErrorAlert(response.data.data)
        }
      } catch (error) {
        this.showErrorAlert(error.response.data)
      } finally {
        this.loading = false
      }
    },
    handlePlayerReady(playerInstance) {
      // اگر زمان پخش ذخیره شده باشد، پلیر را از آن نقطه آغاز می‌کنیم
      if (this.startTime && playerInstance.currentTime) {
        playerInstance.currentTime(this.startTime)
      }
      // در صورت نیاز می‌توان رویدادهای دیگری را نیز در اینجا اضافه کرد
    },
    handleTimeUpdate({ currentTime, duration, player }) {
      // ارسال زمان اخیر (recently) هر ۲۰۰ ثانیه
      if (Math.floor(currentTime) >= this.recentlyTime) {
        this.recentlyTime = Math.floor(currentTime) + 200
        // ارسال درخواست به سرور جهت ذخیره زمان دیده شده
        const payload = {
          current_time: Math.floor(currentTime),
          duration_time: Math.floor(duration),
          video_id: this.$route.params.id,
        }
        if (this.guest) {
          this.$axios.post('/ghost/create/watch/video/recently', payload)
        } else {
          this.$axios.post('/create/watch/video/recently', payload)
        }
      }
      // نمایش دکمه/اوورلی فیلم بعدی زمانی که زمان باقی‌مانده کمتر از 100 ثانیه است
      if (
        this.creditsData.final_credits &&
        currentTime >= this.creditsData.final_credits &&
        this.suggestion
      ) {
        this.showNextMovie = true
      } else if (
        !this.creditsData.final_credits &&
        duration - currentTime <= 100 &&
        this.suggestion
      ) {
        this.showNextMovie = true
      } else {
        this.showNextMovie = false
      }
      return player
    },
    handleEnded() {
      // در پایان پخش فیلم، در صورت وجود پیشنهاد فیلم بعدی، به آن هدایت می‌شویم
      if (this.suggestion) {
        this.playNextVideo()
      }
    },
    playNextVideo() {
      // در صورت وجود پلیر، می‌توان آن را پاک کرد یا متوقف نمود
      // سپس به صفحه فیلم بعدی هدایت می‌شویم
      this.$router.push({
        name: 'video-show-id',
        params: { id: this.suggestion.id },
      })
    },
    goBack() {
      if (window.history.length > 2) {
        this.$router.go(-1)
      } else {
        this.$router.push({
          name: 'video-id',
          params: { id: this.$route.params.id },
        })
      }
    },
    handleSubscriptionPurchase() {
      // پردازش خرید اشتراک
      console.log('Subscription purchase triggered from video player')
    },
  },
}
</script>

<style scoped>
.site-logo img {
  opacity: 0.3 !important;
}

::v-deep .full-screen-player.vjs-fluid {
  overflow: hidden !important;
}

.video-player-page {
  position: relative;
  height: 100%;
  width: 100%;
}

.modal-container {
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
}
.header {
  text-align: right;
}
.sm-exit-svg {
  width: 24px;
  cursor: pointer;
}

/* دکمه‌های روی ویدیو */
.video-overlay {
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  z-index: 500;
  display: flex;
  justify-content: space-between;
}
.back-button {
  background: rgba(0, 0, 0, 0.6);
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
}
.back-button:hover {
  background: rgba(0, 0, 0, 0.8);
}

/* استایل پوشش فیلم بعدی */
.next-video-overlay {
  position: absolute;
  bottom: 60px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  z-index: 600;
}
.next-video-content p {
  margin: 0 0 5px;
  color: #fff;
}
.next-video-content img {
  width: 100%;
  border-radius: 4px;
}

/* استایل پلیر */
.player-wrapper {
  height: 100%;
}
.video-loading-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
