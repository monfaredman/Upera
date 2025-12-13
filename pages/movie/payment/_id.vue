<template>
  <div id="checkcontainer" class="container-fluid">
    <section id="banner" class="mt-5 pt-lg-5 pt-md-5">
      <div class="container">
        <div v-if="data && data.item && data.item.id && data.item.name">
          <DownloadNew
            :id="data.item.id"
            :show="true"
            :ftb="false"
            :staticmodal="true"
            :owned="data.item.owned"
            :traffic="data.item.traffic"
            :ir="data.item.ir"
            :hour="data.item.hour"
            :trafficoo="data.item.traffic_oo"
            :vod="data.item.vod"
            :free="data.item.free"
            :name="data.item.name"
            :namefa="data.item.name_fa"
            :posterf="data.item.poster"
            :backdrop="data.item.backdrop"
            :type="type"
            :itemdata="data.item"
            @hide-modal="HIDE_MODAL"
          />
        </div>
        <div v-else>
          <p>Loading...</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DownloadNew from '@/components/Download-New.vue'

export default {
  components: {
    DownloadNew,
  },
  layout: 'nofooter',
  async asyncData(context) {
    try {
      let endpoint
      endpoint = `/getV2/movie/${context.params.id}`

      const resp = await context.app.$axios.get(endpoint)
      const api = resp.data

      // Normalize getV2 response to a flat object with cdn + entity fields
      let normalized = null
      normalized = { ...api?.data?.movie, cdn: api?.data?.cdn }

      // Return the data instead of setting this.data
      return {
        data: { item: normalized },
      }
    } catch (error) {
      console.error('Error loading content data:', error)
      // Return empty data structure to prevent errors
      return {
        data: { item: {} },
      }
    }
  },
  data() {
    return {
      data: {
        item: {}, // Initialize with empty object to prevent undefined errors
      },
      type: 'movie', // Define type property
      season: null, // Define season property
      // Remove undefined 'movie' property if it was meant to be something else
    }
  },
  head() {
    // Add safe checks for the head method
    const title =
      this.data && this.data.item
        ? 'دانلود ' +
          this.ChooseLang(this.data.item.name, this.data.item.name_fa)
        : 'Loading...'

    return {
      bodyAttrs: {
        class: 'download',
      },
      title: title,
    }
  },

  methods: {
    HIDE_MODAL() {
      // پیاده‌سازی تابع hide-modal در صورت نیاز
    },
    ChooseLang(en, fa) {
      // Add safe checks for the ChooseLang method
      if (!en && !fa) return ''
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
