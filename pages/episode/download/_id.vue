<template>
  <div id="checkcontainer" class="container-fluid">
    <section id="banner" class="mt-5 pt-lg-5 pt-md-5">
      <div class="container">
        <div>
          <Download
            :id="data.episode.id"
            :show="true"
            :ftb="false"
            :staticmodal="true"
            :owned="data.episode.owned"
            :traffic="data.episode.traffic"
            :ir="data.episode.ir"
            :hour="data.episode.hour"
            :trafficoo="data.episode.traffic_oo"
            :vod="data.episode.vod"
            :free="data.episode.free"
            :name="data.episode.name"
            :namefa="data.episode.name_fa"
            :posterf="data.episode.poster"
            :backdrop="data.episode.backdrop"
            :season="data.season"
            :itemdata="data.episode"
            type="episode"
            @hide-modal="HIDE_MODAL"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Download from '@/components/Download.vue'

export default {
  components: {
    Download,
  },
  layout: 'nofooter',
  async asyncData(context) {
    let episodeRes, seasonRes
    try {
      ;[episodeRes, seasonRes] = await Promise.all([
        context.app.$axios.get('/getV2/episode/' + context.params.id),
        context.app.$axios.get(
          '/ghost/get/season/episode/' + context.params.id
        ),
      ])
    } catch (e) {
      context.redirect('/')
      return e
    }
    return {
      data: {
        episode: episodeRes.data.data.episode,
        season: seasonRes.data.data.season,
      },
    }
  },
  data() {
    return {
      data: {},
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: 'download',
      },
      title:
        'دانلود ' +
        (this.data.episode.season_number == 1
          ? this.ChooseLang(
              this.data.episode.series_name,
              this.data.episode.series_name_fa
            ) +
            ',قسمت ' +
            this.data.episode.episode_number
          : this.ChooseLang(
              this.data.episode.series_name,
              this.data.episode.series_name_fa
            ) +
            ',قسمت ' +
            this.data.episode.episode_number +
            ' فصل ' +
            this.data.episode.season_number),
    }
  },
  mounted() {
    ;(async () => {
      // دریافت داده‌های accessibility با استفاده از /get/accessibility/episode/{id}
      const accessibilityPromise = this.$auth.loggedIn
        ? this.$axios.get('/get/accessibility/episode/' + this.data.episode.id)
        : Promise.resolve({
            data: { data: { owned: 0, owned_period_end: null } },
          })

      const accessibilityRes = await accessibilityPromise
      const accessibilityData = accessibilityRes.data.data
      // به‌روزرسانی اطلاعات accessibility در data.episode
      this.$set(this.data.episode, 'owned', accessibilityData.owned)
      this.$set(
        this.data.episode,
        'owned_period_end',
        accessibilityData.owned_period_end
      )
    })().catch((error) => {
      console.error('Error fetching accessibility data:', error)
    })
  },
  methods: {
    HIDE_MODAL() {
      // پیاده‌سازی تابع hide-modal در صورت نیاز
    },
    ChooseLang(en, fa) {
      return fa && this.$i18n.locale === 'fa' ? fa : en
    },
  },
}
</script>

<style>
.download .modal {
  z-index: 0;
}
.download #tab-bar,
.download header,
.download footer {
  z-index: 2000 !important;
}
.download .search {
  z-index: 9999999 !important;
}
.download .with-header .modal {
  top: 50px !important;
}
.download .modal {
  height: 100% !important;
}
.download #downloadLinks___BV_modal_outer_ {
  position: relative !important;
  height: 100% !important;
}
/*.download .modal .modal-content { bottom: 25px !important; } */
</style>
