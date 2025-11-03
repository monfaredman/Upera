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
        v-if="videoUrl && !soon"
        ref="live"
        playerid="live"
        :stream="videoUrl"
        :title="movieTitle"
        :poster="posterUrl"
        :player-auto-play="true"
        :show-auto-play-toggle="false"
        class="full-screen-player vjs-fluid"
      />
    </div>
  </div>
</template>

<script>
import VideoPlayer from '~/components/VideoPlayer.vue'

export default {
  components: {
    VideoPlayer,
  },
  layout: 'empty',
  data() {
    return {
      movieTitle: '',
      posterUrl: '',
      videoUrl: '',
      loading: true, // نشانگر لودینگ
      soon: false, // نشانگر حالت "به زودی"
      intervalId: null, // نشانگر حالت "به زودی"
    }
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler() {
        this.loadVideo()
      },
    },
    // مانیتور تغییر وضعیت متغیر soon
    // soon(newVal) {
    //   if (newVal) {
    //     // اگر soon برابر true شد، تایمر هر 30 ثانیه اجرا شود
    //     this.startReloadInterval()
    //   } else {
    //     // در غیر این صورت تایمر را متوقف می‌کنیم
    //     this.stopReloadInterval()
    //   }
    // }
  },
  // mounted() {
  //   // اگر از قبل وضعیت soon true بود، تایمر شروع شود
  //   if (this.soon) {
  //     this.startReloadInterval()
  //   }
  // },
  // beforeDestroy() {
  //   // قبل از از بین رفتن کامپوننت، تایمر را پاک می‌کنیم
  //   this.stopReloadInterval()
  // },
  methods: {
    async loadVideo() {
      console.log('loadVideo() is called!')

      try {
        const id = this.$route.params.id
        if (!id) {
          console.log('No ID found in route params')
          return
        }

        console.log('ID:', id)

        const ref = this.$cookiz.get('ref') || ''
        const apiUrl = `/ghost/get/watch/live/${id}${ref ? `?ref=${ref}` : ''}`

        console.log('API URL:', apiUrl)

        // **دریافت اطلاعات ویدیو از API**
        const apiResponse = await this.$axios.get(apiUrl)

        if (apiResponse.status === 200) {
          const data = apiResponse.data.data
          this.movieTitle = data.title || 'پخش زنده'
          this.posterUrl = data.poster || ''
          const streamUrl = data.video.video // دریافت آدرس استریم از API

          console.log('Stream URL from API:', streamUrl)

          // **بررسی استریم با `HEAD` request**
          const streamResponse = await fetch(streamUrl, { method: 'HEAD' })

          if (streamResponse.ok) {
            console.log('Stream is available:', streamUrl)
            this.videoUrl = streamUrl
            this.soon = false
          } else {
            console.log("Stream not available - Showing 'Soon' message")
            this.soon = true
          }
        } else {
          console.log('API response was not 200')
          this.soon = true
        }

        this.loading = false
      } catch (error) {
        console.error('API Error:', error)
        this.loading = false
        this.soon = true
      }
    },
    reloadPage() {
      location.reload()
    },
    goBack() {
      if (window.history.length > 2) {
        this.$router.go(-1)
      } else {
        this.$router.push({ name: 'index' })
      }
    },
  },
}
</script>

<style scoped>
::v-deep .full-screen-player.vjs-fluid {
  overflow: hidden !important;
}

/* کل صفحه را می‌گیرد */

.hamshahri {
  background-color: unset !important;
}

/* دکمه بازگشت */
.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
  z-index: 10;
}

.back-button:hover {
  background: rgba(0, 0, 0, 0.8);
}

/* لودینگ */
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
}

.loading svg {
  width: 50px;
  height: 50px;
  margin-top: 10px;
  animation: spin 1s linear infinite;
}

/* پیام "به زودی" */
.soon {
  font-size: 22px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-top: 20px;
}

/* دکمه رفرش */
.refresh-btn {
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}
</style>
