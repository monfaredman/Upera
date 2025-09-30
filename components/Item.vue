<template>
  <div>
    <ShowcaseMobileHeader
      :has-main-button="hasMainButton"
      :has-download-button="hasDownloadButton"
      :main-button-label="mainButtonLabel"
      :main-button-action="mainButtonAction"
      :episode="episode"
      :download-button-label="downloadButtonLabel"
      :clapinterval="clapinterval"
      :user-claps="user_claps"
      :is-watchlist="is_watchlist"
      :data="data"
      :type="type"
      @play="handlePlay"
      @buy="handleBuy"
      @subscription="handleSubscription"
      @download="handleDownloadClick"
      @toggle-watchlist="ADD_WATCHLIST"
      @clap-start="startclap"
      @clap-stop="stopclap"
      @share="modalsharing = true"
    />

    <MediaShowcase
      :data="data"
      :type="type"
      :episode="episode"
      :has-download-button="hasDownloadButton"
      :has-main-button="hasMainButton"
      :main-button-label="mainButtonLabel"
      :main-button-action="mainButtonAction"
      :download-button-label="downloadButtonLabel"
      :clapinterval="clapinterval"
      :user-claps="user_claps"
      :is-watchlist="is_watchlist"
      :total-claps="total_claps"
      :actions="actions"
      @play="handlePlay"
      @buy="handleBuy"
      @subscription="handleSubscription"
      @download="handleDownloadClick"
      @toggle-watchlist="ADD_WATCHLIST"
      @clap-start="startclap"
      @clap-stop="stopclap"
      @share="modalsharing = true"
    />

    <!-- Series Last Episode Showcase -->
    <SeriesLastEpisode
      v-if="type === 'series' && last_episode"
      :data="data"
      :last-episode="last_episode"
      :is-watchlist="is_watchlist"
      @toggle-watchlist="ADD_WATCHLIST"
    />

    <!-- Season Episodes Section -->
    <SeasonEpisodes
      v-if="type !== 'movie' && season"
      :season="season"
      :selectseriesid="selectseriesid"
      :seasontitle="seasontitle"
      :type="type"
      @select-season="selectseries"
    />

    <!-- Statistics -->
    <ContentStatistics
      :data="data"
      :type="type"
      :total-claps="total_claps"
      :episode-num="episode_num"
      :season-num="season_num"
    />

    <!-- Story Content -->
    <StoryContent :data="data" :type="type" />

    <!-- Similar Content Section -->
    <SimilarContent v-if="similar && similar.length" :similar="similar" />

    <ContentDetails
      :data="data"
      :type="type"
      :medias="medias"
      :total-claps="total_claps"
      :episode-num="episode_num"
      :season-num="season_num"
      :casts="casts"
      :directors="directors"
      :producers="producers"
      :writers="writers"
      :investors="investors"
      :comm-num="comm_num"
      @get-file="GET_FILE"
      @load-images="LoadImages"
    />

    <!-- Modal Components -->
    <Download
      :id="data.item.id"
      :show="showDownloadModal"
      :ftb="ftb"
      :owned="owned"
      :traffic="data.item.traffic"
      :trafficoo="data.item.traffic_oo"
      :vod="data.item.vod"
      :free="data.item.free"
      :name="data.item.name"
      :namefa="data.item.name_fa"
      :posterf="data.item.poster"
      :backdrop="data.item.backdrop"
      :season="season"
      :itemdata="data.item"
      :type="type"
      @hide-modal="HIDE_MODAL2"
    />

    <client-only>
      <File
        :id="data.item.id"
        :show="showplyrmodal"
        :content="modalcontent"
        :name="data.item.name"
        :namefa="data.item.name_fa"
        :backdrop="data.item.backdrop"
        :backdropteaser="data.item.backdrop_teaser"
        :type="type"
        @hide-modal="HIDE_MODAL3"
      />

      <b-modal
        id="modal-sharing"
        v-model="modalsharing"
        centered
        hide-footer
        :title="'اشتراک گذاری'"
      >
        <Socialsharing
          :mtitle="data.item.name_fa"
          :description="data.item.overview_fa"
        />
      </b-modal>
    </client-only>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ShowcaseMobileHeader from '@/components/item/showcase/ShowcaseMobileHeader'
import MediaShowcase from '@/components/item/showcase/MediaShowcase'
import ContentDetails from '@/components/item/showcase/ContentDetails'
import SeriesLastEpisode from '@/components/item/SeriesLastEpisode'
import SeasonEpisodes from '@/components/item/SeasonEpisodes'
import SimilarContent from '@/components/item/SimilarContent'
import Download from '@/components/Download'
import File from '@/components/item/File'
import Socialsharing from '@/components/Socialsharing'
import StoryContent from '@/components/item/content/StoryContent'
import ContentStatistics from '@/components/item/content/ContentStatistics'

export default {
  name: 'ContentShowcase',
  components: {
    ShowcaseMobileHeader,
    MediaShowcase,
    ContentDetails,
    SeriesLastEpisode,
    SeasonEpisodes,
    SimilarContent,
    Download,
    File,
    Socialsharing,
    StoryContent,
    ContentStatistics,
  },
  props: {
    data: {
      type: Object,
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      // Only keep essential state
      actions: null,
      medias: {},
      season: null,
      similar: null,

      // initialized to avoid "not defined" warnings
      episode: {},
      clapinterval: false,
      user_claps: 0,
      total_claps: 0,
      is_watchlist: 0,

      episode_num: 0,
      season_num: 0,

      user_claps_counter: 0,
      clapCheckTimer: null,

      ftb: false,
      current_time: 0,
      duration_time: 0,
      comm_num: 0,

      modalsharing: false,

      selectseriesid: null,
      seasontitle: '',
      first_episode: null,
      last_episode: null,
      last_episode_seen: null,

      lightimages: [],
      imagesloading: false,
      modalcontent: null,

      // Cast and crew data
      casts: [],
      directors: null,
      producers: null,
      writers: null,
      investors: null,
      characters: null,
      offer: null,

      // Add missing reactive properties
      owned: 0,
      owned_period_end: null,
    }
  },
  computed: {
    ...mapGetters({ showplyrmodal: 'showplyrmodal' }),
    ...mapGetters({ showDownloadModal: 'showDownloadModal' }),
    ...mapGetters({ commentsloading: 'comments/commentsloading' }),

    // Cleaner computed properties
    hasDownloadButton() {
      return this.actions?.downloadButton?.exist || false
    },
    hasMainButton() {
      return this.actions?.mainButton?.exist || false
    },
    // derive labels/actions safely
    mainButtonLabel() {
      if (!this.hasMainButton) return ''
      const lbl = this.actions.mainButton.label || {}
      return this.ChooseLang(lbl.en, lbl.fa)
    },
    mainButtonAction() {
      return this.hasMainButton ? this.actions.mainButton.action : ''
    },
    downloadButtonLabel() {
      if (!this.hasDownloadButton) return ''
      const lbl = this.actions.downloadButton.label || {}
      return this.ChooseLang(lbl.en, lbl.fa)
    },
  },

  watch: {
    data() {
      this.INIT(0)
      this.loadAdditionalData()
      if (this.$i18n.locale == 'fa' && this.data.item.name_fa)
        document.title = this.data.item.name_fa
      else document.title = this.data.item.name
    },
  },

  beforeDestroy() {
    this.$store.dispatch('SET_CONTENT_SUBSCRIPTION_ACTION', 0)
    window.removeEventListener('resize', this.itemsize)

    if (this.clapCheckTimer) {
      clearTimeout(this.clapCheckTimer)
    }

    if (this.clapinterval) clearInterval(this.clapinterval)

    this.flushClaps(true)
  },

  mounted() {
    this.INIT(1)
    this.loadAdditionalData()
  },

  methods: {
    handlePlay() {
      this.PLAY('play')
    },
    handleBuy() {
      this.PLAY('buy')
    },
    handleSubscription() {
      this.PLAY('subscription')
    },
    handleDownloadClick() {
      this.ftb = false
      this.DOWNLOAD_MODAL_LOAD()
    },

    async loadAdditionalData() {
      try {
        const statisticsEndpoint = this.$auth.loggedIn
          ? '/get/statistics/'
          : '/ghost/get/statistics/'

        const accessibilityPromise = this.$auth.loggedIn
          ? this.$axios.get(
              '/get/accessibility/' + this.type + '/' + this.data.item.id
            )
          : Promise.resolve({
              data: {
                data: {
                  owned: 0,
                  owned_period_end: null,
                  actions: this.data.item.actions,
                },
              },
            })

        if (this.type === 'movie') {
          const [
            castRes,
            mediaRes,
            similarRes,
            accessibilityRes,
            statisticsRes,
          ] = await Promise.all([
            this.$axios.get('/get/cast/' + this.type + '/' + this.data.item.id),
            this.$axios.get(
              '/get/media/' + this.type + '/' + this.data.item.id
            ),
            this.$axios.get(
              '/ghost/get/similar/' + this.type + '/' + this.data.item.id
            ),
            accessibilityPromise,
            this.$axios.get(
              statisticsEndpoint + this.type + '/' + this.data.item.id
            ),
          ])

          // ادغام داده‌های دریافتی برای فیلم
          this.casts = castRes.data.data.casts || []
          this.directors = castRes.data.data.directors || null
          this.producers = castRes.data.data.producers || null
          this.writers = castRes.data.data.writers || null
          this.investors = castRes.data.data.investors || null
          this.characters = castRes.data.data.characters || null
          this.medias = mediaRes.data.data.medias || {}
          this.similar = similarRes.data.data.similar || []
          this.offer = similarRes.data.data.offer || null
          this.owned = accessibilityRes.data.data.owned || 0
          this.owned_period_end =
            accessibilityRes.data.data.owned_period_end || null
          this.actions = accessibilityRes.data.data.actions || null
          this.total_claps = statisticsRes.data.data.claps?.total || 0
          this.user_claps = statisticsRes.data.data.claps?.user || 0
          this.current_time = statisticsRes.data.data.current_time || 0
          this.duration_time = statisticsRes.data.data.duration_time || 0
          this.is_watchlist = statisticsRes.data.data.is_watchlist || 0
          this.comm_num = statisticsRes.data.data.comm_num || 0
        } else {
          const seasonEndpoint = this.$auth.loggedIn
            ? '/get/season/'
            : '/ghost/get/season/'

          const [
            castRes,
            mediaRes,
            similarRes,
            accessibilityRes,
            statisticsRes,
            seasonRes,
          ] = await Promise.all([
            this.$axios.get('/get/cast/' + this.type + '/' + this.data.item.id),
            this.$axios.get(
              '/get/media/' + this.type + '/' + this.data.item.id
            ),
            this.$axios.get(
              '/ghost/get/similar/' + this.type + '/' + this.data.item.id
            ),
            accessibilityPromise,
            this.$axios.get(
              statisticsEndpoint + this.type + '/' + this.data.item.id
            ),
            this.$axios.get(
              seasonEndpoint + this.type + '/' + this.data.item.id
            ),
          ])

          // ادغام داده‌های دریافتی برای محتواهای غیر فیلم (سریال/اپیزود)
          this.casts = castRes.data.data.casts || []
          this.directors = castRes.data.data.directors || null
          this.producers = castRes.data.data.producers || null
          this.writers = castRes.data.data.writers || null
          this.investors = castRes.data.data.investors || null
          this.characters = castRes.data.data.characters || null
          this.medias = mediaRes.data.data.medias || {}
          this.similar = similarRes.data.data.similar || []
          this.offer = similarRes.data.data.offer || null
          this.owned = accessibilityRes.data.data.owned || 0
          this.owned_period_end =
            accessibilityRes.data.data.owned_period_end || null
          this.actions = accessibilityRes.data.data.actions || null
          this.total_claps = statisticsRes.data.data.claps?.total || 0
          this.user_claps = statisticsRes.data.data.claps?.user || 0
          this.current_time = statisticsRes.data.data.current_time || 0
          this.duration_time = statisticsRes.data.data.duration_time || 0
          this.is_watchlist = statisticsRes.data.data.is_watchlist || 0
          this.comm_num = statisticsRes.data.data.comm_num || 0

          // اختصاص داده‌های مربوط به فصل
          if (seasonRes?.data?.data) {
            this.season = seasonRes.data.data.season || null
            this.last_episode_seen =
              seasonRes.data.data.last_episode_seen || null
            this.first_episode = seasonRes.data.data.first_episode || null
            this.last_episode = seasonRes.data.data.last_episode || null
          }
        }

        if (this.type == 'series' && this.season) {
          this.season_num = this.sizeofobj(this.season)

          if (this.season_num > 0) {
            this.episode_num = 0
            for (const [, value] of Object.entries(this.season)) {
              this.episode_num += this.sizeofobj(value)
            }
          }
        }

        if (this.type == 'series') {
          if (this.last_episode_seen) this.episode = this.last_episode_seen
          else if (this.first_episode) this.episode = this.first_episode
        }

        if (this.$route.query.force_subscription == 1) {
          this.$store.dispatch('subscription/SHOW_MODAL', {
            content_type: this.type,
            content_id: this.data.item.id,
          })
        } else if (this.$route.query.force_download == 1) {
          this.ftb = false
          this.DOWNLOAD_MODAL_LOAD()
        }

        if (this.type != 'movie' && this.season) {
          if (this.type == 'episode') {
            this.selectseriesid = this.data.item.season_number
            this.seasontitle = 'فصل ' + this.selectseriesid
          } else if (this.type == 'series') {
            if (this.last_episode)
              this.selectseriesid = this.last_episode.season_number
            else this.selectseriesid = Object.keys(this.season)[0]
            this.seasontitle = 'فصل ' + this.selectseriesid
          }
        }
      } catch (error) {
        console.error('Error loading additional movie data:', error)
      }
    },

    // ... rest of the methods remain the same as your original code
    INIT(firstrun) {
      if (firstrun == 1) {
        window.addEventListener('resize', this.itemsize)
      }
      this.$store.dispatch(
        'SET_CONTENT_SUBSCRIPTION_ACTION',
        this.data.item.vod
      )
    },
    PLAY(action = null) {
      if (action == 'play') {
        if (this.type == 'series') {
          if (this.episode.id)
            this.$router.push({
              name: 'episode-show-id',
              params: { id: this.episode.id },
            })
        } else {
          this.$router.push({
            name: this.type + '-show-id',
            params: { id: this.data.item.id },
          })
        }
      } else if (action == 'buy') {
        if (this.actions?.downloadButton?.exist) this.ftb = true
        else this.ftb = false
        this.DOWNLOAD_MODAL_LOAD()
      } else if (action == 'subscription') {
        this.$store.dispatch('subscription/SHOW_MODAL', {
          content_type: this.type,
          content_id: this.data.item.id,
        })
      }
    },
    HIDE_MODAL2() {
      this.$router.push({ path: this.$route.path })
      this.$store.dispatch('DOWNLOAD_MODAL_CLEAN')
    },
    HIDE_MODAL3() {
      this.$store.dispatch('PLAYER_MODAL_CLEAN')
    },
    ChooseLang(en, fa) {
      if (fa && this.$i18n.locale == 'fa') return fa
      else return en
    },
    Chooseback(cdn, teaser, backdrop) {
      if (teaser) return cdn + 'files/' + teaser
      else return cdn + 'backdrops/' + backdrop
    },
    hasHistory() {
      return window.history.length > 2
    },

    GET_FILE(content) {
      this.modalcontent = content
      this.$store.dispatch('PLAYER_MODAL_LOAD')
    },

    ADD_WATCHLIST(payloadOrId, maybeType) {
      let id, type
      if (payloadOrId && typeof payloadOrId === 'object') {
        id = payloadOrId.id
        type = payloadOrId.type
      } else {
        id = payloadOrId
        type = maybeType
      }
      const contentId = id || (this.data?.item?.id ?? null)
      const contentType = type || this.type

      if (!contentId || !contentType) return

      if (this.$auth.loggedIn) {
        this.is_watchlist = this.is_watchlist == 0 ? 1 : 0
        this.$axios.post('/create/watchlist', {
          id: contentId,
          type: contentType,
        })
      } else {
        this.$store.dispatch('login/SHOW_MODAL', {
          premessage: null,
          premobile: null,
          preredirect: null,
          prerefresh: false,
        })
      }
    },

    incrementClapLocal() {
      this.user_claps_counter += 1
      this.total_claps = parseInt(this.total_claps) + 1
      this.user_claps = parseInt(this.user_claps) + 1
    },
    flushClaps(immediate = false) {
      if (this.clapCheckTimer) {
        clearTimeout(this.clapCheckTimer)
        this.clapCheckTimer = false
      }
      if (this.user_claps_counter < 1) return

      const pending = this.user_claps_counter
      const revert = () => {
        this.total_claps = parseInt(this.total_claps) - pending
        this.user_claps = parseInt(this.user_claps) - pending
      }

      const send = () => {
        this.$axios
          .post('/add/clap', {
            id: this.data.item.id,
            type: this.type,
            claps: pending,
          })
          .then(
            (res) => {
              if (res.status !== 200) revert()
            },
            () => {
              revert()
            }
          )
        this.user_claps_counter = 0
      }

      if (immediate) {
        send()
      } else {
        this.clapCheckTimer = setTimeout(() => {
          send()
        }, 2000)
      }
    },
    startclap() {
      if (!this.$auth.loggedIn) {
        this.$store.dispatch('login/SHOW_MODAL', {
          premessage: null,
          premobile: null,
          preredirect: null,
          prerefresh: false,
        })
        return
      }
      if (!this.clapinterval) {
        this.clapinterval = setInterval(this.incrementClapLocal, 30)
      }
    },
    stopclap() {
      if (this.clapinterval) {
        clearInterval(this.clapinterval)
        this.clapinterval = false
        this.flushClaps(false)
      }
    },
    ADD_CLAP() {
      if (!this.$auth.loggedIn) {
        this.$store.dispatch('login/SHOW_MODAL', {
          premessage: null,
          premobile: null,
          preredirect: null,
          prerefresh: false,
        })
        return
      }
      this.incrementClapLocal()
      this.flushClaps(false)
    },
    DOWNLOAD_MODAL_LOAD(action = null) {
      this.$store.dispatch('DOWNLOAD_MODAL_LOAD')
      return action
    },
    isactiveseason(season) {
      if (this.type == 'episode') return season == this.data.item.season_number
      return !!(
        this.first_episode && season == this.first_episode.season_number
      )
    },
    sizeofobj(obj) {
      if (!obj) return 0
      var size = 0,
        key
      for (key in obj) {
        if ({}.propertyIsEnumerable.call(obj, key)) size++
      }
      return size
    },
    itemsize(e) {
      const w = window.innerWidth
      let offset = 25
      if (w <= 357) {
        offset = 10
      } else if (w <= 375) {
        offset = 12
      }

      const outerWrapper = document.getElementById(
        'showcase-thumbnail-wrapper-outter'
      )
      const buttonWrapper = document.getElementById('showcase-button-wrapper')
      const bottomEl = document.querySelector('.showcase-bottom')

      if (!bottomEl || !outerWrapper || !buttonWrapper) {
        return e
      }

      bottomEl.style.removeProperty('height')
      bottomEl.style.removeProperty('padding-top')

      if (w <= 767.98) {
        const vh =
          outerWrapper.offsetHeight - buttonWrapper.offsetHeight - offset
        bottomEl.style.height = `${vh}px`

        if (!this.hasDownloadButton) {
          const factor = this.data.item.ir ? 0.5 : 1 / 3
          bottomEl.style.paddingTop = `${vh * factor}px`
        }
      }

      return e
    },
    selectseries(id) {
      this.selectseriesid = id
      this.seasontitle = 'فصل ' + id
    },
    LoadImages() {
      if (!this.lightimages.length) {
        this.imagesloading = true
        var api_url
        if (this.$auth.loggedIn) {
          api_url = '/get/files'
        } else {
          api_url = '/ghost/get/files'
        }
        this.$axios
          .post(api_url, {
            id: this.data.item.id,
            content: 5,
            hls: 1,
            type: this.type,
          })
          .then(
            (res) => {
              this.imagesloading = false
              if (res.status === 200) {
                let images = []
                var i
                for (i = 0; i < res.data.data.images.length; ++i) {
                  images[i] = res.data.data.images[i].src
                }
                this.lightimages = images
              }
            },
            (error) => {
              this.imagesloading = false
              return error
            }
          )
      }
    },
  },
}
</script>
