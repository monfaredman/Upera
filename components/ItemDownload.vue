<template>
  <div>
    <b-modal
      id="downloadLinks"
      ref="downloadLinks"
      :centered="staticmodal ? false : true"
      hide-footer
      hide-header
      size="xl"
      :no-close-on-backdrop="staticmodal ? true : false"
      :hide-backdrop="staticmodal ? true : false"
      :no-close-on-esc="staticmodal ? true : false"
      modal-class="modal-download-link"
      :static="staticmodal ? true : false"
      no-enforce-focus
    >
      <div class="download-links">
        <div
          class="download-links-poster download-links-poster2"
          :style="
            'background-image: url(\'https://thumb.upera.shop/thumb?w=800&h=412&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/' +
            backdrop +
            '\')'
          "
        >
          <div class="download-links-info d-flex align-items-center">
            <div class="download-links-thumbnail">
              <img
                class="download-links-thumbnail"
                :src="
                  'https://thumb.upera.shop/thumb?w=70&h=103&q=100&a=c&src=https://cdn.upera.shop/s3/posters/' +
                  posterf
                "
              />
            </div>
            <div
              v-if="type != 'episode'"
              class="download-links-title font-weight-bold"
            >
              <a href="" class="text-white" @click.prevent="Push(id, type)">
                {{ ChooseLang(name, namefa) }}
              </a>
            </div>
            <div v-else class="download-links-title font-weight-bold">
              <a href="" class="text-white" @click.prevent="Push(id, type)">
                {{ ChooseLang(itemdata.series_name, itemdata.series_name_fa) }}
              </a>
              <br />
              <h6 class="text-small">
                {{ ChooseLang(name, namefa) }}
              </h6>
            </div>
          </div>
          <button
            v-show="!staticmodal"
            type="button"
            class="close"
            @click="hideModal"
          >
            <i class="fas fa-times" />
          </button>
        </div>

        <div
          class="download-links-body"
          :class="{
            'download-links-body2': !lastseason,
            'download-links-0': divcount == 0,
            'download-links-2': divcount == 2,
            'download-links-3': divcount == 3,
          }"
        >
          <div v-if="lastseason" class="row py-4 download-options-wrapper">
            <div v-if="season_num > 1" class="col-sm-6">
              <b-dropdown block :text="seasontitle" variant="dark">
                <b-dropdown-item
                  v-for="(item, index) in lastseason"
                  :key="index"
                  href="#"
                  :active="selectseriesid == index"
                  @click.prevent="selectseries(index, lastseason[index][0].id)"
                >
                  فصل {{ index }}
                </b-dropdown-item>
              </b-dropdown>
            </div>
            <div
              :class="{
                'col-sm-6': season_num > 1,
                'col-sm-12': season_num <= 1,
              }"
            >
              <b-dropdown
                block
                :text="episodetitle"
                variant="outline-dark"
                class="srmb"
                :class="{
                  scrollable: episode_num > 20,
                  scrollable2: episode_num > 20 && staticmodal,
                }"
              >
                <b-dropdown-item
                  v-for="(item, index) in lastseason[selectseriesid]"
                  :key="index"
                  href="#"
                  :active="
                    type == 'episode' &&
                    itemdata.episode_number == item.episode_number
                  "
                  @click.prevent="selectepisode(item.id)"
                >
                  قسمت {{ item.episode_number }}
                </b-dropdown-item>
              </b-dropdown>
            </div>
          </div>

          <div
            id="download-links-items"
            class="download-links-items"
            :class="{ 'download-links-season-num1': season_num == 1 }"
          >
            <div class="col-12">
              <svg
                v-if="cartloading || downloadloading"
                id="L9"
                class="svg-loader"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                enable-background="new 0 0 0 0"
                xml:space="preserve"
              >
                <path
                  data-v-28f0b4cb=""
                  fill="#373737"
                  d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                  transform="rotate(109.69 50 50)"
                >
                  <animateTransform
                    data-v-28f0b4cb=""
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    dur="1s"
                    from="0 50 50"
                    to="360 50 50"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>

              <p v-if="message" class="text-danger">
                {{ message }}
              </p>

              <span
                v-if="!screening.ekran && !cartloading"
                class="text-info h6 text-justify"
                >حجم مصرفی: {{ fullrate_data.fa.title }}<br /><br
              /></span>

              <span
                v-if="
                  !ftb2 &&
                  !cartloading &&
                  traffic &&
                  !downloadslist.some(function (el) {
                    return el.owned === 1
                  })
                "
                class="text-justify"
              >
                دسترسی بدون خرید، با اینترنت {{ operator_fullrate }}<br />
                <button
                  class="btn btn-secondary text-right"
                  @click="SHOWAGAIN(0)"
                >
                  بررسی اتصال اینترنت
                  <i class="fas fa-sync-alt" />
                </button>
                <br />و یا خرید با اینترنت فعلی شما:<br /><br />
              </span>

              <span
                v-if="screening.ekran && !cartloading"
                class="text-info h6 text-justify"
                >مصرف اینترنت جهت تماشای آنلاین {{ fullrate_data.fa.title }} می
                باشد<br /><br
              /></span>

              <span
                v-if="!cartloading && !presale && pass"
                class="text-danger h6 text-justify"
                >رمز پیش خرید:
                <span class="text-primary">{{ pass }}</span> (مخصوص کسانی که
                قبلا خرید کرده اند)<br /><br
              /></span>
            </div>

            <div
              v-if="
                !cartloading &&
                Object.keys(downloadslist).length > 0 &&
                downloadslist.some(function (el) {
                  return el.owned === 1
                })
              "
            >
              <div
                v-for="(item, index) in downloadslist"
                :key="index"
                class="download-links-item"
              >
                <div class="row">
                  <div class="col-sm-6">
                    <div class="row">
                      <div v-if="screening.ekran" class="col-9">
                        <div class="download-quality font-weight-bold">
                          بلیط اکران
                        </div>
                        <div class="download-suitable">تماشای آنلاین</div>
                      </div>
                      <div
                        v-else-if="item.isfolder && type != 'series'"
                        class="col-9"
                      >
                        <div class="download-quality font-weight-bold">
                          {{ $t('download.all_qualities') }}
                        </div>
                        <div class="download-suitable">
                          {{ item.info }}
                        </div>
                      </div>
                      <div v-else class="col-9">
                        <div class="download-quality font-weight-bold">
                          {{ item.quality }}
                        </div>
                        <div v-show="showinfo" class="download-suitable">
                          {{ item.info }}
                        </div>
                      </div>
                      <div
                        class="col-3 d-flex justify-end align-items-end text-right"
                      >
                        <div v-if="item.isfolder == 0" class="download-size">
                          {{ item.size }}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    v-if="
                      item.owned == 1 && item.isfolder == 1 && !screening.ekran
                    "
                    class="col-sm-6"
                  >
                    <div class="d-flex h-100 align-items-end">
                      <div class="download-full-link">
                        <button class="btn btn-info btn-block" disabled>
                          خریداری شده
                          <i class="icon-download" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    v-else-if="item.owned == 1 && item.isfolder == 1"
                    class="col-sm-6"
                  >
                    <div class="d-flex h-100 align-items-end">
                      <div class="download-full-link">
                        <button
                          class="btn btn-secondary btn-block"
                          @click="EKRAN(screening.ekran_id)"
                        >
                          تماشا
                          <i class="icon-play" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div v-else-if="item.owned == 1" class="col-sm-6">
                    <div class="d-flex h-100 align-items-end">
                      <div class="download-link">
                        <button
                          class="btn btn-secondary btn-block"
                          @click="LINK_DOWNLOAD(item.id)"
                        >
                          {{ $t('show.download') }}
                          <i class="icon-download" />
                        </button>
                      </div>
                      <div class="copy-link">
                        <button
                          class="btn btn-copy btn-block"
                          @click="COPY_DOWNLOAD(item.id)"
                        >
                          کپی لینک
                        </button>
                      </div>
                    </div>
                  </div>

                  <div v-else class="col-sm-6">
                    <div class="d-flex h-100 align-items-end">
                      <div class="download-link w-100">
                        <button
                          class="btn btn-outline-secondary btn-block"
                          disabled
                        >
                          این کیفیت خریداری نشده است
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div v-else-if="!cartloading" class="col-12">
              <span class="text-danger h6 text-justify"
                >لینکی برای دانلود در دسترس نیست. لطفا وضعیت خرید خود را بررسی
                کنید.<br /><br
              /></span>
            </div>

            <div v-if="!cartloading && notes" class="col-12">
              <span class="text-info h6 text-justify"
                ><br />{{ notes }}<br /><br
              /></span>
            </div>
          </div>

          <div
            v-if="!cartloading"
            class="download-links-footer"
            :class="{ 'footer-0': divcount == 0, 'footer-1': divcount == 1 }"
          >
            <div v-show="play_button" class="download-links-item">
              <div class="row">
                <div class="col-sm-6">
                  <div class="font-weight-bold d-none d-sm-block">
                    کیفیت متناسب با سرعت اینترنت
                  </div>
                </div>
                <div class="col-sm-6">
                  <a
                    v-if="type == 'movie'"
                    href=""
                    class="btn btn-main btn-block"
                    @click.prevent="Push2(id, type)"
                  >
                    نمایش فیلم
                    <i class="icon-play" />
                  </a>
                  <a
                    v-else-if="type == 'series'"
                    class="btn btn-main btn-block"
                    href=""
                    @click.prevent="Push2(season[1][0].id, 'episode')"
                  >
                    نمایش قسمت اول سریال
                    <i class="icon-play" />
                  </a>
                  <a
                    v-else
                    href=""
                    class="btn btn-main btn-block"
                    @click.prevent="Push2(id, type)"
                  >
                    نمایش این قسمت
                    <i class="icon-play" />
                  </a>
                </div>
              </div>
            </div>

            <div v-show="sub_button" class="download-links-item">
              <div class="row">
                <div class="col-sm-6">
                  <div class="font-weight-bold d-none d-sm-block">
                    دسترسی همزمان به ۳۰۰۰۰ عنوان فیلم و اپیزود
                  </div>
                </div>
                <div class="col-sm-6">
                  <a
                    href=""
                    class="btn btn-main btn-block"
                    @click.prevent="UPERAPLUS(id, type)"
                  >
                    خرید اشتراک<span v-if="fullrate_data.rate == 1">
                      (حجم مصرفی: نیم بها)</span
                    >
                    <i class="fa fa-money-bill pr-2" />
                  </a>
                </div>
              </div>
            </div>

            <div v-show="show_free" class="download-links-item">
              <div class="row">
                <div class="col-sm-6">
                  <div class="font-weight-bold d-none d-sm-block">
                    همه کیفیت ها
                  </div>
                </div>
                <div class="col-sm-6">
                  <button
                    class="btn btn-secondary btn-block"
                    @click="SHOWAGAIN(0)"
                  >
                    دانلود رایگان
                    <i class="icon-download" />
                  </button>
                </div>
              </div>
            </div>

            <div v-show="show_buy" class="download-links-item">
              <div class="row">
                <div class="col-sm-6">
                  <div class="font-weight-bold d-none d-sm-block">
                    خرید و دانلود
                  </div>
                </div>
                <div class="col-sm-6">
                  <button
                    class="btn btn-danger btn-block"
                    @click="SHOWAGAIN(1)"
                  >
                    خرید و دانلود با حجم {{ fullrate_data.fa.alternative }}
                    <i class="fa fa-money-bill pr-2" />
                  </button>
                </div>
              </div>
            </div>

            <div v-show="ussd" class="download-links-item">
              <div class="row">
                <div class="col-sm-6">
                  <div class="font-weight-bold d-none d-sm-block">
                    خرید با USSD
                  </div>
                </div>
                <div class="col-sm-6">
                  <a :href="'tel:' + ussd" class="btn btn-danger btn-block">
                    خرید تکی از طریق هف هشتاد
                    <i class="fa fa-money-bill pr-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ItemDownload',
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
    ir: {
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
    redirect: {
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
      ftb2: 0,
      downloadloading: false,
      message: null,
      operator_fullrate: 'همراه اول یا ایرانسل',
      season_num: 0,
      episode_num: 0,
      showinfo: true,
      lastseason: {},
      selectseriesid: 1,
      seasontitle: 'فصل 1',
      episodetitle: 'قسمت ها',
    }
  },
  computed: {
    ...mapGetters({ downloadslist: 'download/downloadslist' }),
    ...mapGetters({ cartloading: 'download/cartloading' }),
    ...mapGetters({ presale: 'download/presale' }),
    ...mapGetters({ pass: 'download/pass' }),
    ...mapGetters({ screening: 'download/screening' }),
    ...mapGetters({ ussd: 'download/ussd' }),
    ...mapGetters({ fullrate_data: 'download/fullrate_data' }),
    ...mapGetters({ show_free: 'download/show_free' }),
    ...mapGetters({ play_button: 'download/play_button' }),
    ...mapGetters({ sub_button: 'download/sub_button' }),
    ...mapGetters({ show_buy: 'download/show_buy' }),
    ...mapGetters({ notes: 'download/notes' }),
    ...mapGetters({ divcount: 'download/divcount' }),
    ...mapGetters({ checkuser: 'checkuser' }),
  },
  watch: {
    show(val) {
      if (val !== null && this.show) {
        this.showModal()
      } else {
        this.hideModal()
      }
    },
    show_free() {
      this.checkdiv()
    },
    show_buy() {
      this.checkdiv()
    },
  },
  mounted() {
    if (this.checkuser.operator_fullrate) {
      this.operator_fullrate = this.checkuser.operator_fullrate
    }

    if (this.staticmodal) {
      this.showModal()
      document
        .getElementsByClassName('modal-content')[0]
        .removeAttribute('tabindex')
    }

    if (this.type == 'episode') {
      this.selectseriesid = this.itemdata.season_number
      this.seasontitle = 'فصل ' + this.selectseriesid
      this.episodetitle = 'قسمت ' + this.itemdata.episode_number
    } else if (this.type == 'series' && this.season) {
      this.selectseriesid = Object.keys(this.season)[0]
      this.seasontitle = 'فصل ' + this.selectseriesid
    }

    this.$refs['downloadLinks'].$on('hide', () => {
      window.removeEventListener('resize', this.Resize)
      this.$store.dispatch('download/RESET_DOWNLOAD')
      document.getElementsByClassName('default')[0].classList.remove('blure')
      this.$emit('hide-modal', null)
    })

    document.body.classList.add('loaded')
  },
  methods: {
    Resize(e) {
      const vh = window.innerHeight * 0.01
      const element = document.getElementsByClassName('download-links')
      if (element.length) element[0].style.setProperty('--vh', `${vh}px`)
      return e
    },
    ChooseLang(en, fa) {
      if (fa && this.$i18n.locale == 'fa') return fa
      return en
    },
    Push(id, type) {
      if (this.staticmodal || id != this.id) {
        this.$router.push({
          name: type + '-id',
          params: { id },
        })
      }
    },
    Push2(id, type) {
      this.$router.push({
        name: type + '-show-id',
        params: { id },
      })
    },
    showModal() {
      this.$refs['downloadLinks'].show()
      if (!this.staticmodal) {
        document.getElementsByClassName('default')[0].classList.add('blure')
      }

      if (window.innerHeight <= 500) {
        this.lastseason = null
      } else {
        this.lastseason = this.season
      }

      this.$refs['downloadLinks'].$on('shown', () => {
        window.addEventListener('resize', this.Resize)
        this.Resize('e')
        if (this.lastseason) {
          this.season_num = this.sizeofobj(this.lastseason)
          this.episode_num = this.sizeofobj(
            this.lastseason[this.selectseriesid]
          )
        }
      })

      this.ftb2 = this.ftb ? 1 : 0
      if (this.ftb2 != 1 && this.$route.query.force_to_buy == 1) this.ftb2 = 1

      const payload = {
        id: this.id,
        type: this.type,
        quality: this.$route.query.quality,
        force_to_buy: this.ftb2,
      }

      if (this.$auth.loggedIn) {
        this.$store.dispatch('download/GET_DOWNLOAD', payload)
      } else {
        this.$store.dispatch('download/GET_GHOST_DOWNLOAD', payload)
      }

      this.checkdiv()

      if (this.$route.query.quality) {
        this.showinfo = false
      }

      this.$route.query.quality = 0
      this.$route.query.force_to_buy = 0
    },
    hideModal() {
      this.$refs['downloadLinks'].hide()
      this.$emit('hide-modal', null)
      this.$store.dispatch('download/RESET_DOWNLOAD')
      document.getElementsByClassName('default')[0].classList.remove('blure')
    },
    sizeofobj(obj) {
      if (!obj) return 0
      return Object.keys(obj).length
    },
    EKRAN(ekranid) {
      this.$router.push({
        name: 'ekran-id',
        params: { id: ekranid },
      })
    },
    SHOWAGAIN(force_to_buy) {
      this.ftb2 = force_to_buy
      const payload = { id: this.id, type: this.type, quality: 0, force_to_buy }
      if (this.$auth.loggedIn) {
        this.$store.dispatch('download/GET_DOWNLOAD', payload)
      } else {
        this.$store.dispatch('download/GET_GHOST_DOWNLOAD', payload)
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
      let traffic_button
      if (this.fullrate_data.rate) {
        traffic_button = 'دانلود ' + this.fullrate_data.fa.title
      } else {
        traffic_button = 'دانلود'
      }

      let ref = this.$cookiz.get('ref')
      if (!ref || isNaN(ref)) ref = 0

      this.$axios
        .post(api_url, {
          itemid,
          ref,
          content: this.$route.query.content,
        })
        .then(
          (res) => {
            this.downloadloading = false
            if (res.status === 200) {
              const dlsmbuttons = {
                back: {
                  text: this.$t('player.back'),
                  value: 'back',
                  closeModal: true,
                  className: 'swal-back',
                },
                copy: {
                  text: 'کپی لینک',
                  value: 'copy',
                  closeModal: true,
                },
                dl1: {
                  text: traffic_button,
                  value: 'dl1',
                  closeModal: true,
                  className: 'btn-success',
                },
              }

              if (res.data.data.url2) {
                dlsmbuttons.dl2 = {
                  text: 'لینک کمکی',
                  value: 'dl2',
                  closeModal: true,
                }
              }

              this.$swal({
                title: this.ChooseLang(this.name, this.namefa) + '!',
                icon: 'success',
                dangerMode: false,
                buttons: dlsmbuttons,
              }).then((value) => {
                switch (value) {
                  case 'back':
                    this.$swal.close()
                    break
                  case 'dl1':
                    window.location.href = res.data.data.url
                    break
                  case 'dl2':
                    window.location.href = res.data.data.url2
                    break
                  case 'copy':
                    this.copy(res.data.data.url)
                    break
                  default:
                    this.$swal.close()
                    break
                }
              })
            } else {
              this.message = res.data.message
            }
          },
          (error) => {
            this.downloadloading = false
            return error
          }
        )
    },
    LINK_DOWNLOAD(itemid) {
      this.downloadloading = true
      const api_url = this.$auth.loggedIn
        ? '/get/download'
        : '/ghost/get/download'
      let ref = this.$cookiz.get('ref')
      if (!ref || isNaN(ref)) ref = 0

      this.$axios
        .post(api_url, {
          itemid,
          ref,
          content: this.$route.query.content,
        })
        .then(
          (res) => {
            this.downloadloading = false
            if (res.status === 200) {
              window.location.href = res.data.data.url
            } else {
              this.message = res.data.message
            }
          },
          (error) => {
            this.downloadloading = false
            return error
          }
        )
    },
    COPY_DOWNLOAD(itemid) {
      this.downloadloading = true
      const api_url = this.$auth.loggedIn
        ? '/get/download'
        : '/ghost/get/download'
      let ref = this.$cookiz.get('ref')
      if (!ref || isNaN(ref)) ref = 0

      this.$axios
        .post(api_url, {
          itemid,
          ref,
          content: this.$route.query.content,
        })
        .then(
          (res) => {
            this.downloadloading = false
            if (res.status === 200) {
              this.copy(res.data.data.url)
            } else {
              this.message = res.data.message
            }
          },
          (error) => {
            this.downloadloading = false
            return error
          }
        )
    },
    async copy(text) {
      try {
        await this.$copyText(text)
        this.$swal('لینک کپی شد', {
          icon: 'success',
        })
      } catch (e) {
        this.$swal('لینک در دیوایس شما قابل کپی نیست.')
        return e
      }
    },
    selectseries(id, num) {
      if (num && num !== this.id) {
        this.hideModal()
        this.$router.push({
          name: 'episode-id',
          params: { id: num },
        })
        return
      }
      this.selectseriesid = id
      this.seasontitle = 'فصل ' + id
    },
    selectepisode(id) {
      if (id !== this.id) {
        this.hideModal()
        this.$router.push({
          name: 'episode-id',
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
  },
}
</script>
