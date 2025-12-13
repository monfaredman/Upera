<template>
  <div class="video-container">
    <div class="hamshahri">
      <!-- لوگوی سایت -->
      <div class="site-logo">
        <img
          src="@/assets/images/logo-mobile.svg"
          alt="Logo"
          loading="lazy"
          v-lazy="require('@/assets/images/logo-mobile.svg')"
        />
      </div>
      <!-- دکمه بازگشت -->
      <button class="back-button" @click="goBack">
        <p class="back-text">بازگشت</p>
        <i class="fa fa-chevron-left" style="color: white" />
      </button>

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
        ref="moviePlayer"
        playerid="movie-player"
        :stream="videoUrl"
        :poster="posterUrl"
        :title="movieTitle"
        :vast-url="vastUrl || ''"
        :tracks="tracks"
        :player-auto-play="true"
        class="full-screen-player vjs-fluid"
        :fullrate-data="fullrateData"
        :content-id="$route.params.id"
        :content-type="contentType"
        :credits-data="creditsData"
        @credits-skipped="handleEnded"
        @ready="handlePlayerReady"
        @timeupdate="handleTimeUpdate"
        @ended="handleEnded"
      />
    </div>
    <div
      v-if="showNextMovie && suggestion"
      class="next-movie-overlay"
      @click="playNextMovie"
    >
      <div class="next-movie-content">
        <p>{{ $t('player.next') }}: {{ suggestion.name_fa }}</p>
        <img :src="suggestionBackdrop" alt="Next Movie Backdrop" />
      </div>
    </div>
  </div>
</template>

<script>
// Dynamic import for code splitting - VideoPlayer is heavy
const VideoPlayer = () => import('~/components/VideoPlayer.vue')

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
      movieTitle: '',
      posterUrl: '',
      creditsData: {},
      videoUrl: '',
      vastUrl: '',
      tracks: [],
      loading: true,
      guest: true,
      show_report: false,
      report_problem_type: null,
      report_details: '',
      report_button: false,
      soon: false,
      // برای مدیریت گزارش، می‌توانید گزینه‌ها را از یک آرایه تعریف کنید
      reportOptions: [
        { value: 1, label: 'report.labeling_problem' },
        { value: 2, label: 'report.video_problem' },
        { value: 3, label: 'report.sound_problem' },
        { value: 4, label: 'report.caption_problem' },
      ],
      // برای زمان‌بندی بروزرسانی recently
      recentlyTime: 200,
      // برای نمایش فیلم بعدی
      showNextMovie: false,
      suggestion: null,
      suggestionBackdrop: '',
      // اگر زمان شروع پخش از قبل وجود داشته باشد
      startTime: 0,
      // Fullrate data for subscription button
      fullrateData: null,
      contentType: 'video',
    }
  },
  mounted() {
    // Prevent scrolling on mobile
    if (process.client && window.innerWidth <= 767.98) {
      document.documentElement.classList.add('video-page-mobile')
      document.body.classList.add('video-page-mobile')
    }

    // حذف کلاس‌های احتمالی قبلی
    if (this.$auth && this.$auth.loggedIn) {
      this.guest = false
    }
    this.loadMovie()

    // Handle browser back button
    window.addEventListener('popstate', this.handlePopState)
  },

  beforeDestroy() {
    // Restore scrolling when leaving page
    if (process.client) {
      document.documentElement.classList.remove('video-page-mobile')
      document.body.classList.remove('video-page-mobile')
    }

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
      if (data.show_download === 1) {
        dlsmbuttons.download = {
          text: this.$t('player.download'),
          value: 'download',
          closeModal: true,
        }
      }
      if (data.show_ekran === 1) {
        dlsmbuttons.download = {
          text: this.$t('show.buy_ticket'),
          value: 'download',
          closeModal: true,
        }
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
                  name: 'movie-id',
                  params: { id: this.$route.params.id },
                })
            break
          case 'subscribe':
            this.$store.dispatch('subscription/SHOW_MODAL', {
              content_type: 'movie',
              content_id: this.$route.params.id,
            })
            break
          case 'download':
            this.$router.push({
              name: 'movie-payment-id',
              params: { id: this.$route.params.id },
              query: { force_to_buy: 1 },
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
                  name: 'movie-id',
                  params: { id: this.$route.params.id },
                })
            break
        }
      })
    },
    async loadMovie() {
      try {
        const id = this.$route.params.id
        if (!id) return

        const ref = this.$cookiz.get('ref') || ''
        // انتخاب API مناسب بر اساس وضعیت guest
        const apiUrl = this.guest
          ? `/ghost/get/watch/movie-hls/${id}/1${ref ? `?ref=${ref}` : ''}`
          : `/get/watch/movie-hls/${id}/1${ref ? `?ref=${ref}` : ''}`

        const response = await this.$axios.get(apiUrl)
        if (response.status === 200) {
          const data = response.data.data
          // تنظیم اطلاعات اصلی فیلم
          this.movieTitle =
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
          this.creditsData = {
            first_credits: data.first_credits || null,
            after_credits: data.after_credits || null,
            final_credits: data.final_credits || null,
          }
          // Store fullrate_data for subscription button
          if (data.fullrate_data) {
            this.fullrateData = data.fullrate_data
          }

          const streamResponse = await fetch(streamUrl, { method: 'HEAD' })

          if (streamResponse.ok) {
            this.videoUrl = streamUrl
            this.vastUrl = data.vast
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
          movie_id: this.$route.params.id,
        }
        if (this.guest) {
          this.$axios.post('/ghost/create/watch/movie/recently', payload)
        } else {
          this.$axios.post('/create/watch/movie/recently', payload)
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
        this.playNextMovie()
      }
    },
    playNextMovie() {
      // در صورت وجود پلیر، می‌توان آن را پاک کرد یا متوقف نمود
      // سپس به صفحه فیلم بعدی هدایت می‌شویم
      this.$router.push({
        name: 'movie-show-id',
        params: { id: this.suggestion.id },
      })
    },
    goBack() {
      if (window.history.length > 2) {
        this.$router.go(-1)
      } else {
        this.$router.push({
          name: 'movie-id',
          params: { id: this.$route.params.id },
        })
      }
    },
    openReport() {
      // نمایش مدال گزارش و متوقف کردن پخش
      this.show_report = true
      const player = this.$refs.moviePlayer?.player
      if (player) {
        player.pause()
      }
    },
    closeReport() {
      // بستن مدال گزارش و ادامه پخش
      this.show_report = false
      const player = this.$refs.moviePlayer?.player
      if (player) {
        player.play()
      }
    },
    async sendReport() {
      this.report_button = true
      try {
        const payload = {
          type: this.report_problem_type,
          details: this.report_details,
          id: this.$route.params.id,
        }
        const res = await this.$axios.post('/create/report/movie', payload)
        if (res.data.status === 'success') {
          this.report_button = false
          this.closeReport()
          this.$alertify.logPosition('top right')
          this.$alertify.success('Successful Send, our team will check it soon')
        }
      } catch (error) {
        this.report_button = false
        console.error('Report Error:', error)
      }
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

.movie-player-page {
  position: relative;
  height: 100%;
  width: 100%;
}

/* استایل مدال گزارش */
.report-modal {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
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

/* استایل بخش بالایی */
.hamshahri {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

/* Fixed header on mobile */
@media (max-width: 767.98px) {
  .hamshahri {
    position: fixed !important;
    z-index: 1000;
  }
}

/* لوگوی سایت */
.site-logo {
  /* position: absolute;
  top: 16px;
  right: 16px; */
  z-index: 11;
}

.site-logo img {
  height: 40px;
  width: auto;
}

/* دکمه بازگشت */
.back-button {
  width: 131px;
  height: 40px;
  left: 0;
  border-radius: 8px;
  gap: 8px;
  padding: 12px 28px;
  background: #525252;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.back-button:hover {
  background: #6a6a6a;
}

.back-text {
  font-weight: 600;
  font-size: 16px;
  text-align: right;
  color: #f5f5f5;
  margin: 0 0 0 8px;
  height: 3rem;
  line-height: 3.1rem;
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

.report-button {
  background: rgba(0, 0, 0, 0.6);
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
}

.report-button:hover {
  background: rgba(0, 0, 0, 0.8);
}

/* استایل پوشش فیلم بعدی */
.next-movie-overlay {
  position: absolute;
  bottom: 60px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  z-index: 600;
}
.next-movie-content p {
  margin: 0 0 5px;
  color: #fff;
}
.next-movie-content img {
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

/* Prevent vertical scrolling on mobile */
@media (max-width: 767.98px) {
  html.video-page-mobile,
  body.video-page-mobile {
    overflow: hidden !important;
    position: fixed !important;
    width: 100% !important;
    height: 100% !important;
    touch-action: none !important;
    -webkit-overflow-scrolling: none !important;
    overscroll-behavior: none !important;
  }

  /* Prevent scrolling on video container and all parents */
  html.video-page-mobile #srm,
  html.video-page-mobile #srmrtl,
  body.video-page-mobile #srm,
  body.video-page-mobile #srmrtl {
    overflow: hidden !important;
    height: 100vh !important;
    max-height: 100vh !important;
  }

  /* Prevent scrolling on video container */
  .video-container {
    overflow: hidden !important;
    height: 100vh !important;
    max-height: 100vh !important;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100vw !important;
  }

  /* Hide default header on mobile */
  .video-container #header,
  .video-container .page-header {
    display: none !important;
  }

  /* Ensure hamshahri stays fixed */
  .video-container .hamshahri {
    position: fixed !important;
    z-index: 1000 !important;
  }

  /* Chrome-specific: Allow touch interactions on video player */
  .video-container .video-js,
  .video-container .video-js video,
  .video-container .video-js .vjs-control-bar,
  .video-container .video-js .vjs-control-bar * {
    touch-action: manipulation !important;
  }

  .video-container .video-js video {
    touch-action: pan-x pan-y !important;
  }

  .video-container .video-js .vjs-progress-control {
    touch-action: pan-x !important;
  }
}
</style>
