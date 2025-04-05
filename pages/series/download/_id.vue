<template>
  <div id="checkcontainer" class="container-fluid">
    <section id="banner" class="mt-5 pt-lg-5 pt-md-5">
      <div class="container">
        <div>
          <Download 
            :id="data.series.id" 
            :show="true" 
            :ftb="false" 
            :staticmodal="true" 
            :owned="data.series.owned" 
            :traffic="data.series.traffic" 
            :ir="data.series.ir" 
            :hour="data.series.hour" 
            :trafficoo="data.series.traffic_oo" 
            :vod="data.series.vod" 
            :free="data.series.free" 
            :name="data.series.name" 
            :namefa="data.series.name_fa" 
            :posterf="data.series.poster" 
            :backdrop="data.series.backdrop" 
            :season="data.season" 
            type="series" 
            @hide-modal="HIDE_MODAL" 
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Download from "../../../components/Download"

export default {
  components: {
    Download
  },
  layout: "nofooter",
  async asyncData(context) {
    let seriesRes, seasonRes
    try {
      [seriesRes, seasonRes] = await Promise.all([
        context.app.$axios.get('/getV2/series/' + context.params.id),
        context.app.$axios.get('/ghost/get/season/series/' + context.params.id)
      ])
    } catch (e) {
      context.redirect('/')
      return e
    }
    return { 
      data: { 
        series: seriesRes.data.data.series,
        season: seasonRes.data.data.season 
      }
    }
  },
  data() {
    return {
      data: {}
    }
  },
  head() {
    return { 
      bodyAttrs: {
        class: 'download'
      },
      title: 'دانلود ' + this.ChooseLang(this.data.series.name, this.data.series.name_fa)
    }
  },
  mounted() {
    (async () => {
      // دریافت داده‌های accessibility با استفاده از /get/accessibility/series/{id}
      const accessibilityPromise = this.$auth.loggedIn
        ? this.$axios.get('/get/accessibility/series/' + this.data.series.id)
        : Promise.resolve({ data: { data: { owned: 0, owned_period_end: null } } })
      
      const accessibilityRes = await accessibilityPromise
      const accessibilityData = accessibilityRes.data.data
      // به‌روزرسانی اطلاعات accessibility در data.series
      this.$set(this.data.series, 'owned', accessibilityData.owned)
      this.$set(this.data.series, 'owned_period_end', accessibilityData.owned_period_end)
    })().catch(error => {
      console.error('Error fetching accessibility data:', error)
    })
  },
  methods: {
    HIDE_MODAL() {
      // پیاده‌سازی تابع hide-modal در صورت نیاز
    },
    ChooseLang(en, fa) {
      return (fa && this.$i18n.locale === "fa") ? fa : en
    }
  }
}
</script>

<style>
.download .modal { z-index: 0 }
.download #tab-bar,
.download header,
.download footer { z-index: 2000 !important }
.download .search { z-index: 9999999 !important }
.download .modal { top: 50px !important; height: 100% !important; }
.download #downloadLinks___BV_modal_outer_ { position: relative !important; height: 100% !important; }
/*.download .modal .modal-content { bottom: 25px !important; } */
</style>