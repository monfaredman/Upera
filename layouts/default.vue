<template>
  <div id="srm" class="srmrtl">
    <div class="default">
      <Header />
      <Nuxt />
      <GlobalSearchModal />

      <Footer />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GlobalSearchModal from '@/components/GlobalSearchModal'

export default {
  components: {
    Header,
    Footer,
    GlobalSearchModal,
  },
  head: {
    title: process.env.APP_NAME_DESC,
    meta: [
      {
        description:
          'تماشای آنلاین فیلم ها و سریال ها در تلویزیون هوشمند , کنسول بازی , کامپیوتر , لپتاپ , تبلت و ... همین امروز شروع کنید',
      },
    ],
  },
  computed: {
    ...mapGetters({ locale: 'locale' }),
  },

  mounted() {
    if (process.server) return

    const widgetId = 'gLKqpv'

    // --- Load script only once ---
    if (!document.getElementById('goftino-widget-script')) {
      const script = document.createElement('script')
      const base = `https://www.goftino.com/widget/${widgetId}`
      const opt = localStorage.getItem('goftino_' + widgetId)

      script.id = 'goftino-widget-script'
      script.async = true
      script.src = opt ? `${base}?o=${opt}` : base

      document.head.appendChild(script)
    }

    // --- Wait for widget to become ready ---
    window.addEventListener('goftino_ready', () => {
      console.warn('Goftino Ready:', window.Goftino)

      if (!window.Goftino) return

      window.Goftino.setWidget({
        iconUrl: `${window.location.origin}/message-icon.png`,
        hasIcon: true,
        marginRight: 320,
        counter: '#unread_counter',
        filterWords: 'word1,word2,word3',
      })

      const btn = document.getElementById('new_widget_button')
      if (btn) {
        btn.addEventListener('click', () => {
          window.Goftino.toggle()
        })
      }
    })
  },
}
</script>
