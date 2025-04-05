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
      modal-class="files"
    >
      <div dir="ltr" class="col-12" style="padding:0; margin: 0; height: 100%;">
        <div id="flowplayer-files-player" class="is-closeable">
          <!-- Spinner هنگام بارگذاری -->
          <div v-show="filesloading" class="light-gallery__spinner">
            <div class="light-gallery__dot" style="border-color: rgba(0, 0, 0, 0.8);" /> <div class="light-gallery__dot" style="border-color: rgba(0, 0, 0, 0.8);" /> <div class="light-gallery__dot" style="border-color: rgba(0, 0, 0, 0.8);" />
          </div>

          <!-- دکمه خروج -->
          <div v-show="!filesloading" id="files-exit-button" class="exit" @click="hideModal">
            <img src="/images/exit-icon.svg" alt="exit icon">
          </div>

          <!-- استفاده از VideoPlayer به جای jwplayer -->
          <VideoPlayer
            v-if="filePlayerUrl && !filesloading"
            ref="FileVideoPlayer"
            playerid="file-player"
            :stream="filePlayerUrl"
            :poster="filePosterUrl"
            :player-auto-play="true"
            :show-auto-play-toggle="false"
            class="fp-full fp-mute fp-edgy flowplayer"
          />

          <!-- دکمه دانلود -->
          <!--           <b-dropdown
            v-show="!filesloading"
            id="dropdown-left"
            :text="$t('show.download')"
            variant="danger"
            class="mt-1 float-right"
          >
            <b-dropdown-item
              v-for="(item, index) in download_files"
              :key="index"
              target="_blank"
              class="dropdown-item"
              :href="item"
            >
              {{ index }}p
            </b-dropdown-item>
          </b-dropdown> -->
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
      default: 0
    },
    id: {
      type: String,
      default: null
    },
    backdrop: {
      type: String,
      default: null
    },
    backdropteaser: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    namefa: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      filesloading: true,
      download_files: [],
      filePlayerUrl: null,
      filePosterUrl: null,
      fileTitle: null
    }
  },
  watch: {
    show(val) {
      if (val) {
        this.showModal()
      } else {
        this.hideModal()
      }
    }
  },
  mounted() {
    if (this.staticmodal) {
      this.showModal()
      document.getElementsByClassName('modal-content')[0].removeAttribute('tabindex')
    }
    // هنگام بسته شدن مدال، حذف کلاس blure و emit رویداد hide-modal
    this.$refs['FilePlayer'].$on('hide', () => {
      document.getElementsByClassName('default')[0].classList.remove('blure')
      this.$emit("hide-modal", null)
    })
    document.body.classList.add('loaded')
  },
  methods: {
    ChooseLang(en, fa) {
      return (fa && this.$i18n.locale === "fa") ? fa : en
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
      const api_url = this.$auth && this.$auth.loggedIn ? '/get/files' : '/ghost/get/files'

      // ارسال درخواست با Axios (می‌توانید از this.$axios استفاده کنید)
      this.$axios.post(api_url, {
        id: this.id,
        content: this.content,
        hls: 1,
        type: this.type,
        ref: ref
      }).then((res) => {
        if (res.status === 200) {
          const data = res.data.data
          if (this.content === 5) {
            // در صورتی که content==5 باشد (برای تصاویر)
            // اطلاعات lightimages را می‌توانید در متغیر محلی یا به صورت دلخواه تنظیم کنید.
            // در این مثال تمرکز روی پخش فایل است.
          } else {
            if (data.file.length === 0) {
              this.$swal('There was a problem playing the video, we will fix it soon.', {
                icon: "error",
              })
              this.filesloading = false
            } else {
              // تنظیم عنوان فایل بر اساس content
              let titlesm = this.name
              if (this.content === 1)
                titlesm = this.$i18n.t('show.trailer') + ' ' + titlesm
              else if (this.content === 2)
                titlesm = this.$i18n.t('show.watch_backstage') + ' | ' + titlesm
              else if (this.content === 3)
                titlesm = this.$i18n.t('show.watch_next') + ' | ' + titlesm
              else if (this.content === 4)
                titlesm = this.$i18n.t('show.watch_musicvideo') + ' | ' + titlesm
              else
                titlesm = this.$i18n.t('show.watch_images') + ' | ' + titlesm

              // در اینجا می‌توانید اطلاعات دانلود را نیز تنظیم کنید
              this.download_files = data.download || []
              // تنظیم URL فایل پخش، پوستر و عنوان
              this.filePlayerUrl = data.file[0].file
              this.filePosterUrl = this.backdrop 
                  ? 'https://thumb.upera.shop/thumb?w=1920&h=938&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/' + this.Chooseback(this.backdropteaser, this.backdrop)
                  : null
              this.fileTitle = titlesm
              this.filesloading = false
            }
          }
        }
      }).catch((error) => {
        console.error(error)
        this.filesloading = false
        this.$swal('There was a problem playing the video, we will fix it soon.', {
          icon: "error",
        })
      })
    },
    hideModal() {
      this.$refs['FilePlayer'].hide()
      this.$emit("hide-modal", null)
      document.getElementsByClassName('default')[0].classList.remove('blure')
    }
  }
}
</script>

<style>
/* استایل‌های مربوط به مدال و پلیر فایل */

.exit {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 10;
}

.file-player-container {
  position: relative;
  height: 100%;
}

/* استایل‌های مربوط به دکمه دانلود (dropdown) */
#dropdown-left {
  position: absolute;
  bottom: 10px;
  left: 10px;
}
#FilePlayer .video-title-overlay {
    left: auto !important;
    right: 20px !important;
}

/* سایر استایل‌های مورد نیاز برای VideoPlayer و بخش‌های دیگر */
</style>
