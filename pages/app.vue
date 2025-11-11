<template>
  <div style="background-color: black" class="pb-4 pb-md-0 mb-md-0">
    <Banner />
    <AppLinks />
    <NewMoviesSlider :ugc-movies="ugcs ? ugcs : []" />
    <div v-if="offers && offers.length" class="mt-5">
      <HorizontalList
        title-en="Top Rated"
        title-fa="پیشنهادی"
        :show-all-route="{ name: 'lists-list', params: { list: 'offer' } }"
        :items="offers"
        instance-name="topRatedSwiper"
        :options="swiperOptionPoster"
        card-variant="poster"
        :size="{ w: 183, h: 273 }"
        :link-builder="buildIdRoute"
        :show-badges="true"
        :type="'offer'"
      />
    </div>
    <ChildSection />
    <LogoSection />
    <Highlights />
  </div>
</template>
<script>
// import pwa from '@/components/pwa'
import Banner from '@/components/app/Banner.vue'
import AppLinks from '@/components/app/AppLinks'
import NewMoviesSlider from '@/components/app/NewMoviesSlider'
import HorizontalList from '@/components/HorizontalList'
import ChildSection from '@/components/app/ChildSection'
import LogoSection from '@/components/app/LogoSection.vue'
import Highlights from '../components/app/Highlights.vue'
export default {
  components: {
    // pwa,
    Banner,
    AppLinks,
    NewMoviesSlider,
    HorizontalList,
    ChildSection,
    LogoSection,
    Highlights,
  },
  data() {
    return {
      showModal: false,
      apptype: 'android',
      ugcs: null,
      offers: null,
      swiperOption: {
        autoplay: {
          delay: 5800,
        },
        spaceBetween: 10,
        slidesPerView: 3.3,
        grabCursor: true,
        setWrapperSize: true,
        threshold: 2,
        breakpoints: {
          768: {
            slidesPerView: 3.5,
          },
          992: {
            slidesPerView: 3.5,
          },
          1024: {
            slidesPerView: 4.5,
          },
          1420: {
            slidesPerView: 7.5,
          },
          1670: {
            slidesPerView: 8.5,
          },
        },
      },
      swiperOptionPoster: {
        spaceBetween: 10,
        slidesPerView: 3.3,
        grabCursor: true,
        setWrapperSize: true,
        threshold: 2,
        breakpoints: {
          200: { slidesPerView: 2.5 },
          420: { slidesPerView: 3.5 },
          768: { slidesPerView: 4.5 },
          992: { slidesPerView: 5.5 },
          1024: { slidesPerView: 6.5 },
          1200: { slidesPerView: 7 },
          1420: { slidesPerView: 8 },
          1670: { slidesPerView: 9 },
        },
      },
      ghostApi: '/getV2/discover',
    }
  },
  head() {
    return {
      title: this.ChooseLang(
        'Install Movie and TV Series Application',
        'نصب اپلیکیشن فیلم و سریال'
      ),
    }
  },
  async mounted() {
    this.fetchDiscoverData()
    this.fetchOfferData()
  },
  methods: {
    buildIdRoute(item) {
      return { name: item.type + '-id', params: { id: item.id } }
    },
    async fetchDiscoverData() {
      try {
        const response = await this.$axios.get(
          this.ghostApi + this.filtercontents
        )
        if (response.status === 200) {
          this.ugcs = response.data.data.data.filter(
            (item) => item.list_en === 'New Titles'
          )
          if (!this.data.data.length) this.nocontent = true
        }
      } catch (error) {
        console.error('Error fetching discover:', error)
      }
    },
    async fetchOfferData() {
      try {
        const response = await this.$axios.get(
          'https://web.upera.tv/api/v1/get/offer'
        )
        if (response.status === 200) {
          // handle offer data as needed, e.g.:
          this.offers = response.data.data
        }
      } catch (error) {
        console.error('Error fetching offer:', error)
      }
    },
    show(index) {
      var collapse = document
        .getElementById('collapse-' + index)
        .getElementsByClassName('fa')

      if (collapse.length) {
        collapse[0].classList.add('fa-angle-down')
        collapse[0].classList.remove('fa-angle-up')
      }
    },
    hide(index) {
      var collapse = document
        .getElementById('collapse-' + index)
        .getElementsByClassName('fa')

      if (collapse.length) {
        collapse[0].classList.add('fa-angle-up')
        collapse[0].classList.remove('fa-angle-down')
      }
    },
    ChooseLang(en, fa) {
      if (fa && this.$i18n.locale == 'fa') return fa
      else return en
    },
    install(url) {
      if (this.checkuser.show_app == 3) {
        window.location.href = url
      } else if (this.$auth.loggedIn || !this.$cookiz.get('ref')) {
        window.location.href = url
      } else {
        this.$store.dispatch('login/SHOW_MODAL', {
          premessage: null,
          premobile: null,
          preredirect: null,
          prerefresh: false,
        })
      }
    },

    HIDE_MODAL() {
      this.showModal = false
      if (document.getElementsByClassName('default').length)
        document.getElementsByClassName('default')[0].classList.remove('blure')
    },
    show_pwa(type) {
      this.apptype = type
      this.showModal = true
    },
  },
}
</script>
