<template>
  <div>
    <b-modal
      id="downloadLinks"
      ref="downloadLinks"
      :centered="!staticmodal"
      hide-footer
      hide-header
      size="lg"
      :no-close-on-backdrop="staticmodal"
      :hide-backdrop="staticmodal"
      :no-close-on-esc="staticmodal"
      modal-class="modal-download-link"
      :static="staticmodal"
      no-enforce-focus
    >
      <div class="download-links">
        <DownloadHeader
          :backdrop="backdrop"
          :poster="posterf"
          :content="contentInfo"
          :item-type="type"
          :content-id="id"
          :is-static-modal="staticmodal"
          @close="hideModal"
          @title-click="onContentNavigate"
        />

        <DownloadBody
          :has-items-in-cart="hasItemsInCart"
          :is-loading="isLoading"
          :downloads-list="downloadslist"
          :cart="cart"
          :content-info="contentInfo"
          :user="user"
          :payment-method="method"
          :errors="errors"
          :is-static-modal="staticmodal"
          :seasons="season"
          :selected-season-id="selectedSeasonId"
          :episode-title="episodeTitle"
          :user-tax="checkuser && checkuser.tax ? checkuser.tax : 0"
          :screening="screening"
          :total-amount="totalamount"
          :disable-button="disable_button || !totalamount"
          :mobile="mobile"
          @update:mobile="mobile = $event"
          @payment-method-change="onPaymentMethodChange"
          @buy="onBuy"
          @buy-keyup="onBuyKeyup"
          @season-selected="onSeasonSelected"
          @episode-selected="onEpisodeSelected"
          @remove-from-cart="onRemoveFromCart"
          @add-to-cart="ADDTOCART"
          @play-content="onPlayContent"
          @ussd-call="onUssdCall"
          @ekran="EKRAN"
          @show-again="SHOWAGAIN"
          @download="DOWNLOAD"
          @link-download="LINK_DOWNLOAD"
          @copy-download="COPY_DOWNLOAD"
          @uperaplus="UPERAPLUS"
          @hide-modal="hideModal"
          @content-navigate="onContentNavigate"
          @cleanup="cleanup"
          @initialize-modal="initializeModal"
          @buy-click="onBuy"
        />

        <DownloadFooter
          :total-amount="totalamount"
          :user="user"
          :is-loading="buyloading"
          :is-disabled="disable_button || !totalamount"
          :has-screening="Boolean(screening.ekran)"
          @payment="onBuyPayment"
        />
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DownloadHeader from '@/components/download/DownloadHeader'
import DownloadBody from '@/components/download/DownloadBody'
import DownloadFooter from '@/components/download/DownloadFooter'

export default {
  name: 'Download',
  components: {
    DownloadHeader,
    DownloadBody,
    DownloadFooter,
  },
  props: {
    show: Boolean,
    staticmodal: Boolean,
    owned: {
      type: Number,
      default: 0,
    },
    traffic: {
      type: Number,
      default: 0,
    },
    trafficoo: {
      type: Number,
      default: 0,
    },
    vod: {
      type: Number,
      default: 0,
    },
    free: {
      type: Number,
      default: 0,
    },
    ftb: Boolean,
    id: {
      type: String,
      default: null,
    },
    posterf: {
      type: String,
      default: null,
    },
    backdrop: {
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
    season: {
      type: Object,
      default: null,
    },
    itemdata: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      method: 'saman3',
      mobile: null,
      buyloading: false,
      disable_button: false,
      // ADDED: Missing reactive properties
      selectedSeasonId: 1,
      episodeTitle: 'قسمت ها',
      // ADDED: Other missing properties from original code
      login: 0,
      ftb2: 0,
      mref: 0,
      i: 0,
      downloadloading: false,
      message: null,
      premessage: null,
      operator_fullrate: 'همراه اول یا ایرانسل',
      season_num: 0,
      episode_num: 0,
      showinfo: true,
      lastseason: {},
      showBoxAnimation: false,
      seasontitle: 'فصل 1',
      directdebit_payment_id: 0,
      // errors: null,
    }
  },
  computed: {
    ...mapGetters({
      downloadslist: 'download/downloadslist',
      cartloading: 'download/cartloading',
      cart: 'download/cart',
      presale: 'download/presale',
      screening: 'download/screening',
      totalamount: 'download/total_amount',
      user: 'auth/user',
      // ADDED: Missing getters from original code
      presale_date: 'download/presale_date',
      pass: 'download/pass',
      title_poster: 'download/title_poster',
      ussd: 'download/ussd',
      fullrate_data: 'download/fullrate_data',
      show_free: 'download/show_free',
      play_button: 'download/play_button',
      sub_button: 'download/sub_button',
      show_buy: 'download/show_buy',
      notes: 'download/notes',
      divcount: 'download/divcount',
      checkuser: 'auth/user',
    }),

    contentInfo() {
      return {
        id: this.id,
        name: this.name,
        name_fa: this.namefa,
        type: this.type,
        itemdata: this.itemdata,
      }
    },

    hasItemsInCart() {
      return (
        this.cart.length > 0 &&
        this.cart.some((cartItem) =>
          this.downloadslist.some(
            (downloadItem) => cartItem.itemid === downloadItem.id
          )
        )
      )
    },

    isLoading() {
      return this.cartloading || this.buyloading
    },
  },
  watch: {
    show(val) {
      if (val) {
        this.showModal()
      } else {
        this.hideModal()
      }
    },
    // ADDED: Missing watchers from original code
    show_free() {
      this.checkdiv()
    },
    show_buy() {
      this.checkdiv()
    },
  },
  mounted() {
    // ADDED: Missing initialization from original code
    this.mref = this.$cookiz.get('ref')

    if (this.checkuser?.operator_fullrate) {
      this.operator_fullrate = this.checkuser.operator_fullrate
    } else {
      this.operator_fullrate = 'Default Value' // Provide a fallback value
    }

    if (this.staticmodal) {
      this.showModal()
      document.querySelector('.modal-content')?.removeAttribute('tabindex')
    }

    // ADDED: Season/episode initialization from original code
    if (this.type == 'episode') {
      this.selectedSeasonId = this.itemdata.season_number
      this.seasontitle = 'فصل ' + this.selectedSeasonId
      this.episodeTitle = 'قسمت ' + this.itemdata.episode_number
    } else if (this.type == 'series' && this.season) {
      this.selectedSeasonId = Object.keys(this.season)[0]
      this.seasontitle = 'فصل ' + this.selectedSeasonId
    }

    this.setupModalEvents()

    document.body.classList.add('loaded')
  },
  methods: {
    initializeModal() {
      if (this.staticmodal) {
        this.showModal()
      }
    },

    setupModalEvents() {
      this.$refs.downloadLinks?.$on('hide', () => {
        this.cleanup()
        this.$emit('hide-modal')
      })
    },

    loadDownloadData() {
      const payload = {
        id: this.id,
        type: this.type,
        quality: this.$route.query.quality,
        force_to_buy: this.ftb || this.$route.query.force_to_buy,
      }

      const action = this.$auth.loggedIn
        ? 'download/GET_DOWNLOAD'
        : 'download/GET_GHOST_DOWNLOAD'

      this.$store.dispatch(action, payload)
    },

    onPaymentMethodChange(method) {
      this.method = method
    },

    onBuy({ mobile }) {
      if (!mobile || mobile.length < 10) {
        this.$swal('لطفا شماره موبایل معتبر وارد کنید', { icon: 'error' })
        return
      }
      this.mobile = mobile
    },
    onBuyPayment() {
      if (!this.mobile || this.mobile.length < 10) {
        this.$swal('لطفا شماره موبایل معتبر وارد کنید', { icon: 'error' })
        return
      }
      console.log('onBuyPayment called with:', {
        mobile: this.mobile,
      })
      this.BUY()
    },
    onBuyKeyup({ mobile }) {
      if (!mobile || mobile.length < 10) {
        this.$swal('لطفا شماره موبایل معتبر وارد کنید', { icon: 'error' })
        return
      }
      this.mobile = mobile
      console.log('onBuy called with:', {
        mobile,
      })
      this.BUY()
    },

    cleanup() {
      window.removeEventListener('resize', this.Resize)
      this.$store.dispatch('download/RESET_DOWNLOAD')
      document.querySelector('.default')?.classList.remove('blure')
    },

    chooseLang(en, fa) {
      if (fa && this.$i18n.locale == 'fa') return fa
      else return en
    },

    onContentNavigate(id, type) {
      if (this.staticmodal || id != this.id) {
        this.$router.push({
          name: type + '-id',
          params: { id },
        })
      }
    },

    onPlayContent() {
      this.$router.push({
        name: this.type + '-show-id',
        params: { id: this.id },
      })
    },

    onUssdCall() {
      // USSD call logic
    },

    sizeofobj(obj) {
      if (!obj) return 0
      let size = 0
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) size++
      }
      return size
    },

    charAt2(string) {
      string = String(string)
      const l = string.length
      if (l == 4) return string.substring(0, 1)
      else if (l == 5) return string.substring(0, 2)
      else return string.substring(0, 3)
    },

    substring2(string) {
      string = String(string)
      const l = string.length
      if (l == 4) return string.substring(1)
      else if (l == 5) return string.substring(2)
      else return string.substring(3)
    },

    showModal() {
      this.$refs.downloadLinks?.show()
      if (!this.staticmodal) {
        document.querySelector('.default')?.classList.add('blure')
      }

      if (window.innerHeight <= 500) {
        this.lastseason = null
      } else {
        this.lastseason = this.season
      }

      this.$refs.downloadLinks?.$on('shown', () => {
        window.addEventListener('resize', this.Resize)
        this.Resize('e')
        if (this.lastseason) {
          this.season_num = this.sizeofobj(this.lastseason)
          this.episode_num = this.sizeofobj(
            this.lastseason[this.selectedSeasonId]
          )
        }
      })

      if (!this.ftb) this.ftb2 = 0
      else this.ftb2 = 1

      if (this.ftb2 != 1 && this.$route.query.force_to_buy == 1) this.ftb2 = 1

      if (this.$auth.loggedIn) {
        this.$store.dispatch('download/GET_DOWNLOAD', {
          id: this.id,
          type: this.type,
          quality: this.$route.query.quality,
          force_to_buy: this.ftb2,
        })
      } else {
        this.$store.dispatch('download/GET_GHOST_DOWNLOAD', {
          id: this.id,
          type: this.type,
          quality: this.$route.query.quality,
          force_to_buy: this.ftb2,
        })
      }

      this.checkdiv()

      if (this.$route.query.quality) {
        this.showinfo = false
      }

      this.$route.query.quality = 0
      this.$route.query.force_to_buy = 0
    },

    hideModal() {
      this.$refs.downloadLinks?.hide()
      this.$emit('hide-modal', null)
      this.$store.dispatch('download/RESET_DOWNLOAD')
      document.querySelector('.default')?.classList.remove('blure')
    },

    Resize(e) {
      const vh = window.innerHeight * 0.01
      const element = document.querySelector('.download-links')
      if (element) element.style.setProperty('--vh', `${vh}px`)
      return e
    },

    // ADDTOCART(itemid, amount, size, quality) {
    //   let name
    //   if (this.type == 'episode') {
    //     if (this.itemdata.season_number == 1) {
    //       name =
    //         this.chooseLang(
    //           this.itemdata.series_name,
    //           this.itemdata.series_name_fa
    //         ) +
    //         ',قسمت ' +
    //         this.itemdata.episode_number
    //     } else {
    //       name =
    //         this.chooseLang(
    //           this.itemdata.series_name,
    //           this.itemdata.series_name_fa
    //         ) +
    //         ',قسمت ' +
    //         this.itemdata.episode_number +
    //         ' فصل ' +
    //         this.itemdata.season_number
    //     }
    //   } else {
    //     name = this.chooseLang(this.name, this.namefa)
    //   }

    //   this.$store.dispatch('download/ADD_NEW_TO_DOWNLOAD', {
    //     itemid,
    //     amount,
    //     size,
    //     name,
    //     quality,
    //     id: this.id,
    //     type: this.type,
    //     poster: `https://thumb.upera.shop/thumb?w=70&h=103&q=100&a=c&src=https://cdn.upera.shop/s3/posters/${this.posterf}`,
    //   })

    //   document.getElementById('download-links-items')?.scrollTo(0, 0)
    // },

    ADDTOCART({ id, amount, size, quality }) {
      console.log('Adding to cart:', { id, amount, size, quality })
      var name

      if (this.type == 'episode') {
        if (this.itemdata.season_number == 1)
          name =
            this.chooseLang(
              this.itemdata.series_name,
              this.itemdata.series_name_fa
            ) +
            ',قسمت ' +
            this.itemdata.episode_number
        else
          name =
            this.chooseLang(
              this.itemdata.series_name,
              this.itemdata.series_name_fa
            ) +
            ',قسمت ' +
            this.itemdata.episode_number +
            ' فصل ' +
            this.itemdata.season_number
      } else name = this.chooseLang(this.name, this.namefa)

      this.$store.dispatch('download/ADD_NEW_TO_DOWNLOAD', {
        itemid: id,
        amount: amount,
        size: size,
        name: name,
        quality: quality,
        id: this.id,
        type: this.type,
        poster:
          'https://thumb.upera.shop/thumb?w=70&h=103&q=100&a=c&src=https://cdn.upera.shop/s3/posters/' +
          this.posterf,
      })

      document.getElementById('download-links-items').scrollTop = 0
    },

    onRemoveFromCart(item) {
      console.log('Removing from cart:', item)
      this.REMOVEFROMCART(item.itemid || item.id, item.amount)
    },

    REMOVEFROMCART(itemid, amount) {
      console.log('Removing from cart - itemid:', itemid, 'amount:', amount)
      this.$store.dispatch('download/DELETE_FROM_DOWNLOAD', {
        itemid: itemid,
        amount: amount,
      })
      document.getElementById('download-links-items')?.scrollTo(0, 0)
    },

    EKRAN(ekranid) {
      this.$router.push({
        name: 'ekran-id',
        params: { id: ekranid },
      })
    },

    SHOWAGAIN(force_to_buy) {
      this.ftb2 = force_to_buy
      if (this.$auth.loggedIn) {
        this.$store.dispatch('download/GET_DOWNLOAD', {
          id: this.id,
          type: this.type,
          quality: 0,
          force_to_buy,
        })
      } else {
        this.$store.dispatch('download/GET_GHOST_DOWNLOAD', {
          id: this.id,
          type: this.type,
          quality: 0,
          force_to_buy,
        })
      }
      this.checkdiv()
    },

    checkdiv() {
      let free = this.free
      if (this.show_free == 1) free = 0
      if (this.show_buy == 1) free = 1

      if (
        this.show_free == 0 &&
        (this.owned ||
          (free && this.vod) ||
          (this.vod && this.checkuser.access))
      ) {
        this.$store.dispatch('download/ADD_DIVCOUNT')
      } else {
        this.$store.dispatch('download/MIN_DIVCOUNT')
      }

      if (!this.owned && this.vod && !this.checkuser.access) {
        this.$store.dispatch('download/ADD_DIVCOUNT2')
      } else {
        this.$store.dispatch('download/MIN_DIVCOUNT2')
      }
    },

    DOWNLOAD(itemid) {
      this.downloadloading = true
      const api_url = this.$auth.loggedIn
        ? '/get/download'
        : '/ghost/get/download'
      const ref = this.$cookiz.get('ref') || 0

      this.$axios
        .post(api_url, {
          itemid,
          ref,
          content: this.$route.query.content,
        })
        .then((res) => {
          this.downloadloading = false
          if (res.status === 200) {
            // Download success logic
          } else {
            this.message = res.data.message
          }
        })
        .catch((error) => {
          this.downloadloading = false
          return error
        })
    },

    LINK_DOWNLOAD(itemid) {
      this.downloadloading = true
      const api_url = this.$auth.loggedIn
        ? '/get/download'
        : '/ghost/get/download'
      const ref = this.$cookiz.get('ref') || 0

      this.$axios
        .post(api_url, {
          itemid,
          ref,
          content: this.$route.query.content,
        })
        .then((res) => {
          this.downloadloading = false
          if (res.status === 200) {
            window.location.href = res.data.data.url
          } else {
            this.message = res.data.message
          }
        })
        .catch((error) => {
          this.downloadloading = false
          return error
        })
    },

    COPY_DOWNLOAD(itemid) {
      this.downloadloading = true
      const api_url = this.$auth.loggedIn
        ? '/get/download'
        : '/ghost/get/download'
      const ref = this.$cookiz.get('ref') || 0

      this.$axios
        .post(api_url, {
          itemid,
          ref,
          content: this.$route.query.content,
        })
        .then((res) => {
          this.downloadloading = false
          if (res.status === 200) {
            this.copy(res.data.data.url)
          } else {
            this.message = res.data.message
          }
        })
        .catch((error) => {
          this.downloadloading = false
          return error
        })
    },

    async copy(text) {
      try {
        await this.$copyText(text)
        this.$swal('لینک کپی شد', { icon: 'success' })
      } catch (e) {
        this.$swal('لینک در دیوایس شما قابل کپی نیست.')
        return e
      }
    },

    onSeasonSelected({ seasonId, firstEpisodeId }) {
      if (firstEpisodeId && firstEpisodeId != this.id) {
        this.$router.push({
          name: 'episode-download-id',
          params: { id: firstEpisodeId },
        })
      } else {
        this.selectedSeasonId = seasonId
        this.seasontitle = 'فصل ' + seasonId
      }
    },

    onEpisodeSelected(id) {
      if (id != this.id) {
        this.$router.push({
          name: 'episode-download-id',
          params: { id },
        })
      }
    },

    UPERAPLUS() {
      this.$store.dispatch('subscription/SHOW_MODAL', {
        content_type: this.type,
        content_id: this.id,
      })
    },

    BUY() {
      if (this.mobile) {
        this.mobile = this.mobile.replace(/۱/g, '1')
        this.mobile = this.mobile.replace(/۲/g, '2')
        this.mobile = this.mobile.replace(/۳/g, '3')
        this.mobile = this.mobile.replace(/۴/g, '4')
        this.mobile = this.mobile.replace(/۵/g, '5')
        this.mobile = this.mobile.replace(/۶/g, '6')
        this.mobile = this.mobile.replace(/۷/g, '7')
        this.mobile = this.mobile.replace(/۸/g, '8')
        this.mobile = this.mobile.replace(/۹/g, '9')
        this.mobile = this.mobile.replace(/۰/g, '0')
        this.mobile = this.mobile.replace(/\D/g, '')
      }

      var ref = this.$cookiz.get('ref')
      if (!ref || isNaN(ref)) ref = 0

      if (this.method == 'directdebit' && !this.$auth.loggedIn) {
        this.$store.dispatch('login/SHOW_MODAL', {
          premessage: this.premessage,
          premobile: this.mobile,
          preredirect: null,
          prerefresh: 'directdebit',
        })
      } else if (this.method == 'credit' && !this.$auth.loggedIn) {
        this.$store.dispatch('login/SHOW_MODAL', {
          premessage: this.premessage,
          premobile: this.mobile,
          preredirect: null,
          prerefresh: false,
        })
      }
      var api_url
      if (this.$auth.loggedIn) {
        api_url = '/get/buy'
      } else {
        api_url = '/ghost/get/buy'
      }
      this.buyloading = true
      this.$axios
        .post(api_url, {
          cart: this.cart,
          mobile: this.mobile,
          ekran: this.screening.ekran,
          callback_url: location.origin + '/callback?mobile=' + this.mobile,
          method: this.method,
          ref: ref,
        })
        .then(
          (res) => {
            this.buyloading = false
            if (res.status === 200) {
              if (res.data.data.login) {
                this.$store.dispatch('login/SHOW_MODAL', {
                  premessage: this.premessage,
                  premobile: this.mobile,
                  preredirect: null,
                  prerefresh: false,
                })
              } else if (this.method == 'directdebit') {
                if (res.data.data.payment_id) {
                  this.directdebit_payment_id = res.data.data.payment_id
                }
                if (res.data.data.showdirectdebitbox == 1)
                  this.SHOW_MODAL_DIRECTDEBIT()
                else {
                  localStorage.removeItem('_cart')
                  // if(!this.staticmodal)
                  // this.$router.replace({query: { force_download: 1 }})
                  this.$router.go()
                }
              } else if (this.method == 'credit') {
                localStorage.removeItem('_cart')
                if (this.$auth.loggedIn) {
                  // if(!this.staticmodal)
                  // this.$router.replace({query: { force_download: 1 }})
                  this.$router.go()
                } else {
                  this.$swal(
                    'لینک های دانلود پیامک شدند. لطفا جهت دسترسی از طریق سایت وارد سایت شوید',
                    {
                      icon: 'success',
                    }
                  )
                }
              } else {
                window.location.href = res.data.data.pay_url
              }
            } else {
              this.message = res.data.message
            }
          },
          (error) => {
            this.buyloading = false
            this.premessage = error.response.data.message
            if (error.response.data.login)
              this.$store.dispatch('login/SHOW_MODAL', {
                premessage: this.premessage,
                premobile: this.mobile,
                preredirect: null,
                prerefresh: false,
              })
            else if (
              (this.$auth.loggedIn ||
                (this.method != 'credit' && this.method != 'directdebit')) &&
              error.response.data.message
            ) {
              var dlsmbuttons = {
                back: {
                  text: 'ok',
                  value: 'back',
                  closeModal: true,
                  className: 'swal-back',
                },
              }

              if (this.method == 'credit') {
                Object.assign(dlsmbuttons, {
                  addcredit: {
                    text: 'افزایش موجودی آپرا',
                    value: 'addcredit',
                    closeModal: true,
                  },
                })
              }

              this.$swal({
                icon: 'error',
                title: error.response.data.message,
                dangerMode: true,
                buttons: dlsmbuttons,
              }).then((value) => {
                switch (value) {
                  case 'back':
                    this.$swal.close()
                    if (!this.$auth.loggedIn) this.$refs.focusMe.focus()
                    break

                  case 'addcredit':
                    this.SHOW_MODAL_CREDIT()
                    this.$swal.close()
                    break

                  default:
                    this.$swal.close()
                    if (!this.$auth.loggedIn) this.$refs.focusMe.focus()
                    break
                }
              })
            }
          }
        )
    },
  },
}
</script>
