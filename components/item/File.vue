<template>
  <div>
    <b-modal
      id="FilePlayer"
      ref="FilePlayer"
      :centered="staticmodal ? false : true"
      hide-footer
      hide-header
      size="lg"
      :no-close-on-backdrop="staticmodal ? true : false"
      :hide-backdrop="staticmodal ? true : false"
      :no-close-on-esc="staticmodal ? true : false"
      :static="staticmodal ? true : false"
      no-enforce-focus
      modal-class="files enhanced-file-modal"
    >
      <div dir="ltr" class="file-modal-wrapper">
        <div id="flowplayer-files-player" class="enhanced-player-container">
          <!-- Enhanced Loading Spinner -->
          <div v-show="filesloading" class="enhanced-spinner-container">
            <div class="spinner-backdrop"></div>
            <div class="spinner-content">
              <div class="modern-spinner">
                <div class="spinner-ring"></div>
                <div class="spinner-ring"></div>
                <div class="spinner-ring"></div>
              </div>
              <p class="loading-text">در حال بارگذاری...</p>
            </div>
          </div>

          <!-- Enhanced Close Button -->
          <button
            v-show="!filesloading"
            aria-label="بستن"
            class="enhanced-close-button"
            @click="hideModal"
          >
            <div class="close-icon-wrapper">
              <i class="fas fa-times"></i>
            </div>
          </button>

          <!-- Media Title Badge -->
          <div v-show="!filesloading && fileTitle" class="media-title-badge">
            <div class="title-badge-content">
              <i class="fas fa-play-circle badge-icon"></i>
              <span class="title-text">{{ fileTitle }}</span>
            </div>
          </div>

          <!-- Video Player with Enhanced Container -->
          <div v-if="filePlayerUrl && !filesloading" class="player-wrapper">
            <VideoPlayer
              ref="FileVideoPlayer"
              playerid="file-player"
              :stream="filePlayerUrl"
              :poster="filePosterUrl"
              :player-auto-play="true"
              :show-auto-play-toggle="false"
              :show-skip-teaser="false"
              :show-skip-intro="false"
              :show-skip-credits-button="false"
              class="fp-full fp-mute fp-edgy flowplayer enhanced-video-player"
            />
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
// فرض می‌کنیم که VideoPlayer یک کامپوننت موجود است
import VideoPlayer from '~/components/VideoPlayer.vue'

export default {
  components: { VideoPlayer },
  props: {
    show: Boolean,
    staticmodal: Boolean,
    content: {
      type: Number,
      default: 0,
    },
    id: {
      type: String,
      default: null,
    },
    backdrop: {
      type: String,
      default: null,
    },
    backdropteaser: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    namefa: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      filesloading: true,
      download_files: [],
      filePlayerUrl: null,
      filePosterUrl: null,
      fileTitle: null,
    }
  },
  watch: {
    show(val) {
      if (val) {
        this.showModal()
      } else {
        this.hideModal()
      }
    },
  },
  mounted() {
    if (this.staticmodal) {
      this.showModal()
      document
        .getElementsByClassName('modal-content')[0]
        .removeAttribute('tabindex')
    }
    // هنگام بسته شدن مدال، حذف کلاس blure و emit رویداد hide-modal
    this.$refs['FilePlayer'].$on('hide', () => {
      document.getElementsByClassName('default')[0].classList.remove('blure')
      this.$emit('hide-modal', null)
    })
    document.body.classList.add('loaded')
  },
  methods: {
    ChooseLang(en, fa) {
      return fa && this.$i18n.locale === 'fa' ? fa : en
    },
    Chooseback(teaser, backdrop) {
      return teaser ? teaser : backdrop
    },
    showModal() {
      this.$refs['FilePlayer'].show()
      if (!this.staticmodal)
        document.getElementsByClassName('default')[0].classList.add('blure')

      // شروع بارگذاری اطلاعات فایل
      this.filesloading = true
      let ref = this.$cookiz ? this.$cookiz.get('ref') : 0
      if (!ref || isNaN(ref)) ref = 0
      const api_url =
        this.$auth && this.$auth.loggedIn ? '/get/files' : '/ghost/get/files'

      // ارسال درخواست با Axios (می‌توانید از this.$axios استفاده کنید)
      this.$axios
        .post(api_url, {
          id: this.id,
          content: this.content,
          hls: 1,
          type: this.type,
          ref: ref,
        })
        .then((res) => {
          if (res.status === 200) {
            const data = res.data.data
            if (this.content === 5) {
              // در صورتی که content==5 باشد (برای تصاویر)
              // اطلاعات lightimages را می‌توانید در متغیر محلی یا به صورت دلخواه تنظیم کنید.
              // در این مثال تمرکز روی پخش فایل است.
            } else {
              if (data.file.length === 0) {
                this.$swal(
                  'There was a problem playing the video, we will fix it soon.',
                  {
                    icon: 'error',
                  }
                )
                this.filesloading = false
              } else {
                // تنظیم عنوان فایل بر اساس content
                let titlesm = this.name
                if (this.content === 1)
                  titlesm = this.$i18n.t('show.trailer') + ' ' + titlesm
                else if (this.content === 2)
                  titlesm =
                    this.$i18n.t('show.watch_backstage') + ' | ' + titlesm
                else if (this.content === 3)
                  titlesm = this.$i18n.t('show.watch_next') + ' | ' + titlesm
                else if (this.content === 4)
                  titlesm =
                    this.$i18n.t('show.watch_musicvideo') + ' | ' + titlesm
                else
                  titlesm = this.$i18n.t('show.watch_images') + ' | ' + titlesm

                // در اینجا می‌توانید اطلاعات دانلود را نیز تنظیم کنید
                this.download_files = data.download || []
                // تنظیم URL فایل پخش، پوستر و عنوان
                this.filePlayerUrl = data.file[0].file
                this.filePosterUrl = this.backdrop
                  ? 'https://thumb.upera.shop/thumb?w=1920&h=938&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/' +
                    this.Chooseback(this.backdropteaser, this.backdrop)
                  : null
                this.fileTitle = titlesm
                this.filesloading = false
              }
            }
          }
        })
        .catch((error) => {
          console.error(error)
          this.filesloading = false
          this.$swal(
            'There was a problem playing the video, we will fix it soon.',
            {
              icon: 'error',
            }
          )
        })
    },
    hideModal() {
      this.$refs['FilePlayer'].hide()
      this.$emit('hide-modal', null)
      document.getElementsByClassName('default')[0].classList.remove('blure')
    },
  },
}
</script>

<style scoped>
/* Enhanced Modal Styling */
.file-modal-wrapper {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  position: relative;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
  border-radius: 16px;
  overflow: hidden;
}

.enhanced-player-container {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 60vh;
  border-radius: 16px;
  overflow: hidden;
}

/* Enhanced Loading Spinner */
.enhanced-spinner-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-out;
}

.spinner-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(10, 10, 10, 0.98),
    rgba(26, 26, 46, 0.98)
  );
  backdrop-filter: blur(20px);
}

.spinner-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.modern-spinner {
  position: relative;
  width: 80px;
  height: 80px;
}

.spinner-ring {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 4px solid transparent;
  border-top-color: #ff7a18;
  border-radius: 50%;
  animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
}

.spinner-ring:nth-child(2) {
  border-top-color: #af002d;
  animation-delay: 0.2s;
  width: 90%;
  height: 90%;
  top: 5%;
  left: 5%;
}

.spinner-ring:nth-child(3) {
  border-top-color: #ff9a56;
  animation-delay: 0.4s;
  width: 80%;
  height: 80%;
  top: 10%;
  left: 10%;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading-text {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
  font-family: 'dana-700', sans-serif;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}

/* Enhanced Close Button */
.enhanced-close-button {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 100;
  background: linear-gradient(
    135deg,
    rgba(255, 60, 60, 0.2),
    rgba(255, 30, 30, 0.15)
  );
  border: 2px solid rgba(255, 80, 80, 0.4);
  border-radius: 50%;
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(15px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  padding: 0;
  outline: none;
}

.enhanced-close-button:hover {
  background: linear-gradient(
    135deg,
    rgba(255, 60, 60, 0.9),
    rgba(255, 30, 30, 0.8)
  );
  border-color: rgba(255, 80, 80, 1);
  transform: rotate(90deg) scale(1.1);
  box-shadow: 0 8px 32px rgba(255, 60, 60, 0.5);
}

.enhanced-close-button:active {
  transform: rotate(90deg) scale(1.05);
}

.close-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.close-icon-wrapper i {
  font-size: 20px;
  color: #ffffff;
  transition: transform 0.3s ease;
}

/* Media Title Badge */
.media-title-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 99;
  animation: slideInLeft 0.5s ease-out;
}

.title-badge-content {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  background: linear-gradient(
    90deg,
    rgba(255, 122, 24, 0.9),
    rgba(175, 0, 45, 0.9)
  );
  backdrop-filter: blur(15px);
  border-radius: 30px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(255, 122, 24, 0.4);
  transition: all 0.3s ease;
}

.title-badge-content:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(255, 122, 24, 0.6);
}

.badge-icon {
  font-size: 18px;
  color: #ffffff;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.title-text {
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: 'dana-700', sans-serif;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  letter-spacing: 0.3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Player Wrapper */
.player-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  animation: fadeInScale 0.4s ease-out;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.enhanced-video-player {
  width: 100%;
  height: 100%;
  border-radius: 16px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .enhanced-close-button {
    width: 48px;
    height: 48px;
    top: 15px;
    right: 15px;
  }

  .close-icon-wrapper i {
    font-size: 18px;
  }

  .media-title-badge {
    top: 15px;
    left: 15px;
  }

  .title-badge-content {
    padding: 10px 16px;
    gap: 10px;
  }

  .badge-icon {
    font-size: 16px;
  }

  .title-text {
    font-size: 0.85rem;
    max-width: 200px;
  }

  .modern-spinner {
    width: 60px;
    height: 60px;
  }

  .loading-text {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .enhanced-close-button {
    width: 44px;
    height: 44px;
    top: 12px;
    right: 12px;
  }

  .close-icon-wrapper i {
    font-size: 16px;
  }

  .media-title-badge {
    top: 12px;
    left: 12px;
  }

  .title-badge-content {
    padding: 8px 14px;
    gap: 8px;
  }

  .badge-icon {
    font-size: 14px;
  }

  .title-text {
    font-size: 0.8rem;
    max-width: 150px;
  }

  .modern-spinner {
    width: 50px;
    height: 50px;
  }

  .loading-text {
    font-size: 0.9rem;
  }

  .enhanced-player-container {
    min-height: 50vh;
  }
}
</style>

<style>
/* Global Overrides for Modal */
.enhanced-file-modal .modal-dialog {
  max-width: 90vw;
  margin: 1.75rem auto;
}

.enhanced-file-modal .modal-content {
  background: transparent;
  border: none;
  border-radius: 16px;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.6);
  overflow: hidden;
}

.enhanced-file-modal .modal-body {
  padding: 0;
}

#FilePlayer .video-title-overlay {
  left: auto !important;
  right: 20px !important;
}

/* Larger screens - reduce player size */
@media (min-width: 1600px) {
  .enhanced-file-modal .modal-dialog {
    max-width: 60vw;
    margin: 3rem auto;
  }

  .enhanced-player-container {
    min-height: 50vh;
    max-height: 70vh;
  }
}

@media (max-width: 768px) {
  .enhanced-file-modal .modal-dialog {
    max-width: 95vw;
    margin: 1rem auto;
  }
}

@media (max-width: 480px) {
  .enhanced-file-modal .modal-dialog {
    max-width: 98vw;
    margin: 0.5rem auto;
  }
}
</style>
