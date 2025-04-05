<template>
  <div id="checkcontainer" class="container-fluid">
    <section id="banner" class="mt-5 pt-lg-5 pt-md-5">
      <div class="container">
        <div>
          <Download 
            :id="data.movie.id" 
            :show="true" 
            :ftb="false" 
            :staticmodal="true" 
            :owned="data.movie.owned" 
            :traffic="data.movie.traffic" 
            :ir="data.movie.ir" 
            :hour="data.movie.hour" 
            :trafficoo="data.movie.traffic_oo" 
            :vod="data.movie.vod" 
            :free="data.movie.free" 
            :name="data.movie.name" 
            :namefa="data.movie.name_fa" 
            :posterf="data.movie.poster" 
            :backdrop="data.movie.backdrop" 
            type="movie" 
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
    // استفاده از endpoint جدید /getV2/movie/{id} برای همه کاربران
    let res = await context.app.$axios.get('/getV2/movie/' + context.params.id)
    return { data: res.data.data }
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
      title: ((this.data.movie.ekran == 1) ? 'اکران ' : 'دانلود ') + this.ChooseLang(this.data.movie.name, this.data.movie.name_fa)
    }
  },
  mounted() {
    // دریافت داده‌های accessibility با استفاده از /get/accessibility/ و data.movie.id
    const accessibilityPromise = this.$auth.loggedIn
      ? this.$axios.get('/get/accessibility/movie/' + this.data.movie.id)
      : Promise.resolve({ data: { data: { owned: 0, owned_period_end: null } } })

    accessibilityPromise.then(response => {
      const accessibilityData = response.data.data
      // به‌روزرسانی اطلاعات accessibility در data.movie
      this.$set(this.data.movie, 'owned', accessibilityData.owned)
      this.$set(this.data.movie, 'owned_period_end', accessibilityData.owned_period_end)
    }).catch(error => {
      console.error('Error fetching accessibility data:', error)
    })
  },
  methods: {
    HIDE_MODAL() {
      // پیاده‌سازی تابع hide modal در صورت نیاز
    },
    ChooseLang(en, fa) {
      return (fa && this.$i18n.locale === "fa") ? fa : en
    }
  }
}
</script>

<style>
.download .modal{ z-index: 0 }
.download #tab-bar, .download header, .download footer { z-index: 2000 !important }
.download .search { z-index: 9999999 !important }
.download .with-header .modal { top: 50px !important; }
.download .modal { height: 100% !important; }
.download #downloadLinks___BV_modal_outer_ { position: relative !important; height: 100% !important; }
/*.download .modal .modal-content { bottom: 25px !important; } */
</style>
