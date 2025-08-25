<template>
  <div class="video-container">
    <div class="hamshahri">
      <!-- دکمه بازگشت -->
      <a class="srmjs " @click="goBack">
        <div id="flowplayer-back-button">
          <div class="icon-back" />
        </div>
      </a>

      <!-- لودینگ -->
      <div v-if="loading" class="video-loading-spinner" />

      <!-- پیام "به زودی" -->
      <p v-if="soon" class="soon">
        به زودی...
      </p>

      <!-- دکمه رفرش -->
      <button v-if="soon" class="btn btn-primary btn-lg fw-bold refresh-btn" @click="reloadPage">
        بارگذاری مجدد
      </button>
    </div>

    <!-- پلیر -->
    <div class="player-wrapper">
      <VideoPlayer
        v-if="videoUrl && !loading"
        ref="episodePlayer"
        playerid="episode-player"
        :stream="videoUrl"
        :poster="posterUrl"
        :title="episodeTitle"
        :vast-url="vastUrl || ''"
        :tracks="tracks"
        :player-auto-play="true"
        :has-playlist="!!((seasonList && seasonList.length) || (currentEpisodeList && currentEpisodeList.length))"

        class="full-screen-player vjs-fluid"
        @ready="handlePlayerReady"
        @timeupdate="handleTimeUpdate"
        @ended="handleEnded"
        @playlistButtonClick="togglePlaylistMenu"
      />
    </div>
    <!--     <div v-if="season && seasonList.length" class="playlist-container">
      <div class="season-list">
        <button v-for="seasonNum in seasonList"
                :key="seasonNum"
                :class="['season-toggle-btn', { active: seasonOpened === seasonNum }]"
                @click="setSeason(seasonNum)"
        >
          {{ seasonNum }}
        </button>
      </div>
      <div class="episode-list">
        <a v-for="ep in currentEpisodeList"
           :key="ep.id"
           class="list-group-item playlist-play-button"
           @click="playEpisode(ep.id)"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">قسمت {{ ep.episode_number }}</h5>
            <small>{{ ep.season_number }}</small>
          </div>
          <p class="mb-1">{{ $t( ($i18n.locale==='fa' && ep.overview_fa) ? ep.overview_fa : ep.overview) }}</p>
        </a>
      </div>
    </div> -->

    <div v-if="showPlaylistMenu" class="playlist-modal">
      <div class="playlist-modal-content">
        <!-- هدر منو -->
        <div class="playlist-modal-header">
          <span class="modal-title">انتخاب فصل و قسمت</span>
          <button class="close-btn" @click="togglePlaylistMenu">
            ×
          </button>
        </div>

        <!-- انتخاب فصل -->
        <div class="season-selector">
          <button
            v-for="seasonNum in seasonList"
            :key="seasonNum"
            :class="['season-btn', { active: seasonOpened === seasonNum }]"
            @click="setSeason(seasonNum)"
          >
            فصل {{ seasonNum }}
          </button>
        </div>

        <!-- انتخاب قسمت -->
        <div class="episode-selector">
          <button
            v-for="ep in currentEpisodeList"
            :key="ep.id"
            class="episode-btn"
            @click="selectEpisode(ep.id)"
          >
            قسمت {{ ep.episode_number }}
          </button>
        </div>
      </div>
    </div>

    <!-- نمایش قسمت بعدی (Suggestion) -->
    <div v-if="showNextEpisode && suggestion" class="next-episode-overlay" @click="playNextEpisode">
      <div class="next-episode-content">
        <p>{{ $t('player.play_next_episode') }}: {{ suggestion.name_fa }}</p>
        <img :src="suggestionBackdrop" alt="Next Episode Backdrop">
      </div>
    </div>
  </div>
</template>

<script>
import VideoPlayer from '~/components/VideoPlayer.vue'

export default {
  components: { VideoPlayer },
  layout: 'empty',
  data() {
    return {
      episodeTitle: '',
      posterUrl: '',
      videoUrl: '',
      vastUrl: '',
      tracks: [],
      loading: true,
      soon: false,
      guest: true,
      series_id: 0,
      // گزارش
      show_report: false,
      report_problem_type: null,
      report_details: '',
      report_button: false,
      reportOptions: [
        { value: 1, label: 'report.labeling_problem' },
        { value: 2, label: 'report.video_problem' },
        { value: 3, label: 'report.sound_problem' },
        { value: 4, label: 'report.caption_problem' }
      ],
      // پیشنهاد و تغییر قسمت
      suggestion: null,
      suggestionBackdrop: '',
      showNextEpisode: false,
      recentlyTime: 200,
      showPlaylistMenu: false,
      // مدیریت لیست پخش
      season: null,      // داده‌های فصل‌ها (object به شکل: { seasonNumber: [episode, ...] })
      seasonList: [],    // آرایه‌ای از شماره فصل‌ها
      seasonOpened: null,
      // زمان شروع پخش در صورت وجود
      startTime: 0
    }
  },
computed: {
  currentEpisodeList() {
    // اگر داده‌های فصل وجود دارد و فصل باز شده معتبر است، لیست قسمت‌های آن را برگردانیم؛ در غیر این صورت آرایه خالی برگردانیم.
    return this.season && this.season[this.seasonOpened]
      ? this.season[this.seasonOpened]
      : []
  }
},
  mounted() {
    // document.body.classList.remove('loaded')
    if (this.$auth && this.$auth.loggedIn) {
      this.guest = false
    }
    this.loadEpisode()
  },
  methods: {

    showErrorAlert(data) {
    let dlsmtitle = this.$i18n.locale === 'fa' ? data.message_fa : data.message
// let backtohome=false

    if(!dlsmtitle){
      dlsmtitle=this.$t('player.error1')
      // backtohome=true
    }
    let dlsmbuttons = {
      back: {
        text: this.$t('player.back'),
        value: "back",
        closeModal: true,
        className: 'swal-back'
      }
    }
    if (data.show_download === 1) {
      dlsmbuttons.download = {
        text: this.$t('player.download'),
        value: "download",
        closeModal: true
      }
    }
    if (data.show_ekran === 1) {
      dlsmbuttons.download = {
        text: this.$t('show.buy_ticket'),
        value: "download",
        closeModal: true
      }
    }
    if (data.show_subscription === 1) {
      dlsmbuttons.subscribe = {
        text: this.$t('player.subscribe'),
        value: "subscribe",
        closeModal: true
      }
    }
    if(!this.$auth.loggedIn && data.show_login === 1){
      Object.assign(dlsmbuttons, {login: {
            text: this.$t('nav.login'),
            value: "login",
            closeModal: true
      }})
    }
    this.$swal({
      title: dlsmtitle,
      icon: 'error',
      dangerMode: true,
      buttons: dlsmbuttons,
    }).then((value) => {
      switch (value) {
        case "back":
          (window.history.length > 2)
            ? this.$router.go(-1)
            : this.$router.push({ name: 'episode-id', params: { id: this.$route.params.id } })
          break
        case "subscribe":
          this.$store.dispatch('subscription/SHOW_MODAL', { content_type: 'episode', content_id: this.$route.params.id })
          break
        case "download":
          this.$router.push({ name: 'episode-download-id', params: { id: this.$route.params.id }, query: { force_to_buy: 1 } })
          break

                            case "login":
                                  this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})
                                
                              break
        default:
          (window.history.length > 2)
            ? this.$router.go(-1)
            : this.$router.push({ name: 'episode-id', params: { id: this.$route.params.id } })
          break
      }
    })
  },
    async loadEpisode() {
      try {
        const episode_id = this.$route.params.id
        if (!episode_id) return

        const ref = this.$cookiz.get('ref') || ''
        // انتخاب API مناسب بر اساس وضعیت guest
        const apiUrl = this.guest
          ? `/ghost/get/watch/series`
          : `/get/watch/series`
        // ارسال درخواست (در اینجا از POST استفاده شده است مانند نسخه‌ی قبلی)
        const response = await this.$axios.post(apiUrl, {
          episode_id,
          type: 'sp',
          series_id: '',
          hls: 1,
          ref: ref
        })
        if (response.data.status === 'success') {
          const data = response.data.data
          // تنظیم اطلاعات اصلی قسمت
          const ep = data.episode[0]
          this.episodeTitle = (this.$i18n.locale === 'fa' && ep.name_fa) ? ep.name_fa : ep.name
          this.posterUrl = data.cdn.lg_backdrop + ep.backdrop
          // فرض بر این است که لینک ویدیو دارای پارامتر nosub است
          this.videoUrl = ep.video.includes('?')
            ? ep.video + '&nosub=1'
            : ep.video + '?nosub=1'
          this.vastUrl = data.vast
          this.startTime = ep.current_time || 0
          this.series_id = ep.series_id || 0

          // تنظیم زیرنویس‌ها (در صورت موجود بودن)
          if (data.new_subtitle && Array.isArray(data.new_subtitle)) {
            this.tracks = data.new_subtitle.map((track, index) => ({
              kind: 'captions',
              label: track.language,
              src: track.url,
              default: index === 0,
              language: track.language
            }))
          }

          // تنظیم پیشنهاد (قسمت بعدی یا فصل بعدی)
          if (data.suggestion) {
            this.suggestion = data.suggestion
            this.suggestionBackdrop = data.cdn.md_backdrop + data.suggestion.backdrop
          }

          // تنظیم لیست فصل‌ها و قسمت‌های هر فصل
          if (data.season && Object.keys(data.season).length) {
            this.season = data.season
            this.seasonList = Object.keys(data.season)
            // باز کردن فصلی که این قسمت به آن تعلق دارد
            this.seasonOpened = ep.season_number.toString()
          }

          // (در صورت نیاز می‌توانید وضعیت "soon" را هم مدیریت کنید)
          this.soon = false
        } else {
            this.showErrorAlert(response.data.data)
        }
      } catch (error) {
              this.showErrorAlert(error.response.data)
      } finally {
        this.loading = false
        // document.body.classList.add('loaded', 'playerback')
      }
    },
    togglePlaylistMenu() {
    // منطق باز و بسته کردن منوی انتخاب فصل و قسمت
    this.showPlaylistMenu = !this.showPlaylistMenu
  },
    handlePlayerReady(playerInstance) {
      if (this.startTime && playerInstance.currentTime) {
        playerInstance.currentTime(this.startTime)
      }
    },
    handleTimeUpdate({ currentTime, duration, player }) {
      // (در اینجا می‌توانید منطق ارسال recently مانند نسخه قبل اضافه کنید)
      // نمایش قسمت بعدی زمانی که زمان باقی‌مانده کمتر از 100 ثانیه باشد

      if (Math.floor(currentTime) >= this.recentlyTime) {
        this.recentlyTime = Math.floor(currentTime) + 200
        // ارسال درخواست به سرور جهت ذخیره زمان دیده شده
        const payload = {
          current_time: Math.floor(currentTime),
          duration_time: Math.floor(duration),
          episode_id: this.$route.params.id,
          series_id: this.series_id,
        }

        if (this.guest) {
          this.$axios.post('/ghost/create/watch/series/recently', payload)
        } else {
          this.$axios.post('/create/watch/series/recently', payload)
        }
      }

      if (duration - currentTime <= 100 && this.suggestion) {
        this.showNextEpisode = true
      } else {
        this.showNextEpisode = false
      }
      return player
    },
    handleEnded() {
      // در پایان پخش، در صورت وجود پیشنهاد، به آن هدایت شود
      if (this.suggestion) {
        this.playNextEpisode()
      }
    },
    playNextEpisode() {
      this.$router.push({ name: 'episode-show-id', params: { id: this.suggestion.id } })
    },
    playEpisode(episodeId) {
      this.$router.push({ name: 'episode-show-id', params: { id: episodeId } })
    },
    setSeason(seasonNum) {
      this.seasonOpened = seasonNum
    },
    selectEpisode(episodeId) {
      // بسته شدن منو
      this.togglePlaylistMenu()
      // هدایت به صفحه قسمت انتخاب شده
      this.$router.push({ name: 'episode-show-id', params: { id: episodeId } })
    },
    goBack() {
      if (window.history.length > 2) {
        this.$router.go(-1)
      } else {
        this.$router.push({ name: 'episode-id', params: { id: this.$route.params.id } })
      }
    },
    reloadPage() {
      location.reload()
    },
    openReport() {
      this.show_report = true
      const player = this.$refs.episodePlayer?.player
      if (player) player.pause()
    },
    closeReport() {
      this.show_report = false
      const player = this.$refs.episodePlayer?.player
      if (player) player.play()
      this.$store.commit('player/CLOSE_REPORT')
    },
    async sendReport() {
      this.report_button = true
      try {
        const payload = {
          type: this.report_problem_type,
          details: this.report_details,
          id: this.$route.params.id
        }
        const res = await this.$axios.post('/create/report/episode', payload)
        if (res.data.status === 'success') {
          this.report_button = false
          this.closeReport()
          this.$alertify.logPosition("top right")
          this.$alertify.success('Successful Send, our team will check it soon')
        }
      } catch (error) {
        this.report_button = false
        console.error('Report Error:', error)
      }
    }
  }
}
</script>

<style scoped>
.episode-player-page {
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
  background: rgba(0,0,0,0.7);
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

/* استایل بخش بالایی (بازگشت، لودینگ، پیام) */

#flowplayer-back-button {
  cursor: pointer;
}
.video-loading-spinner {
  margin-left: 10px;
}
.soon {
  margin-left: 10px;
  font-size: 20px;
  color: #fff;
}
.refresh-btn {
  margin-left: 10px;
}

/* استایل پلیر */
.player-wrapper {
  height: 100%;
}

/* استایل لیست پخش */
.playlist-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.8);
  padding: 10px;
  color: #fff;
}
.season-list {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
.season-toggle-btn {
  margin: 0 5px;
  padding: 5px 10px;
  background: #444;
  border: none;
  cursor: pointer;
  color: #fff;
}
.season-toggle-btn.active {
  background: #888;
}
.episode-list a {
  display: block;
  padding: 5px;
  border-bottom: 1px solid #555;
  color: #fff;
  text-decoration: none;
}
.episode-list a:hover {
  background: #333;
}

/* استایل قسمت بعدی */
.next-episode-overlay {
  position: absolute;
  bottom: 80px;
  right: 20px;
  background: rgba(0,0,0,0.7);
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  z-index: 600;
}
.next-episode-content p {
  margin: 0 0 5px;
  color: #fff;
}
.next-episode-content img {
  width: 100%;
  border-radius: 4px;
}

.playlist-menu {
  position: relative;
  margin-top: 20px;
  text-align: center;
}

/* دکمه باز کردن منو */
.playlist-toggle-btn {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.playlist-toggle-btn:hover {
  background-color: #0056b3;
}

/* منوی مدال */
.playlist-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* محتوای مدال */
.playlist-modal-content {
  background: #fff;
  width: 90%;
  max-width: 400px;
  border-radius: 8px;
  overflow: hidden;
}

/* هدر مدال */
.playlist-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: #f5f5f5;
  border-bottom: 1px solid #ddd;
}
.modal-title {
  font-size: 18px;
  font-weight: bold;
}
.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
}

/* انتخاب فصل */
.season-selector {
  display: flex;
  justify-content: center;
  padding: 12px;
  background: #fafafa;
}
.season-btn {
  margin: 0 5px;
  padding: 8px 12px;
  border: 1px solid #007bff;
  background: #fff;
  color: #007bff;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
}
.season-btn.active,
.season-btn:hover {
  background: #007bff;
  color: #fff;
}

/* انتخاب قسمت */
.episode-selector {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 16px;
}
.episode-btn {
  margin: 5px;
  padding: 8px 12px;
  border: none;
  background: #28a745;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}
.episode-btn:hover {
  background: #1e7e34;
}
.video-loading-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>
