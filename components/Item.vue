<template>
  <div style="width: 100%">
    <!-- Loading Spinner Overlay -->
    <div v-if="isLoading" class="loading-overlay">
      <div class="spinner-container">
        <b-spinner variant="primary" label="Loading..."></b-spinner>
        <p class="mt-3 text-white">در حال بارگذاری...</p>
      </div>
    </div>

    <!-- Showcase Skeleton -->
    <ShowcaseSkeleton v-if="isLoadingShowcase" :page="'item'" />

    <!-- Actual Content -->
    <template v-else>
      <MediaShowcase
        :data="data"
        :type="type"
        :episode="derivedEpisode"
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
        :is-loading-stats="isLoadingStatistics"
        @play="handlePlay"
        @buy="handleBuy"
        @subscription="handleSubscription"
        @download="handleDownloadClick"
        @toggle-watchlist="ADD_WATCHLIST"
        @clap-start="startclap"
        @clap-stop="stopclap"
        @share="modalsharing = true"
      />
    </template>

    <!-- Navigation Header -->
    <div class="content-nav-header">
      <nav class="nav nav-pills">
        <!-- قسمت‌ها : SeasonEpisodes -->
        <a
          v-if="shouldShowSeasonTab"
          href="#episodes"
          class="nav-link"
          @click.prevent="scrollToSection('episodes')"
        >
          قسمت‌ها
        </a>

        <!-- درباره سریال/فیلم : ContentStatistics -->
        <a
          v-if="shouldShowStatisticsTab"
          href="#about"
          class="nav-link"
          @click.prevent="scrollToSection('about')"
        >
          {{ type === 'movie' ? 'درباره فیلم' : 'درباره سریال' }}
        </a>

        <!-- محتوا : ContentDetails -->
        <a
          v-if="shouldShowContentTab"
          href="#content"
          class="nav-link"
          @click.prevent="scrollToSection('content')"
        >
          محتوا
        </a>

        <!-- بازیگران : CastsTab -->
        <a
          v-if="shouldShowCastsTab"
          href="#casts"
          class="nav-link"
          @click.prevent="scrollToSection('casts')"
        >
          بازیگران
        </a>

        <!-- فیلم های مشابه : SimilarContent -->
        <a
          v-if="shouldShowSimilarTab"
          href="#similar"
          class="nav-link"
          @click.prevent="scrollToSection('similar')"
        >
          فیلم های مشابه
        </a>

        <!-- دیدگاه‌ها : CommentsTab -->
        <a
          v-if="shouldShowCommentsTab"
          href="#comments"
          class="nav-link"
          @click.prevent="scrollToSection('comments')"
        >
          <b-spinner
            v-if="commentsloading"
            type="border"
            class="mb-1 ml-1"
            small
          />
          دیدگاه‌ها
        </a>
      </nav>
    </div>

    <div class="content-body">
      <!-- All content sections displayed in order -->

      <!-- قسمت‌ها : SeasonEpisodes -->
      <section
        v-if="shouldShowEpisodesSection"
        id="episodes"
        class="content-section"
      >
        <div v-if="shouldShowSeasonContent">
          <SeasonEpisodesSkeleton v-if="isLoadingSeasons" />
          <SeasonEpisodes
            v-else-if="hasSeasonData"
            :season="season"
            :selectseriesid="selectseriesid"
            :seasontitle="seasontitle"
            :type="type"
            @select-season="selectseries"
          />
        </div>
      </section>

      <!-- درباره سریال/فیلم : ContentStatistics -->
      <section
        v-if="shouldShowStatisticsSection"
        id="about"
        class="content-section"
      >
        <ContentStatisticsSkeleton v-if="isLoadingStatistics" />
        <ContentStatistics
          v-else-if="hasStatisticsData"
          :data="data"
          :type="type"
          :total-claps="total_claps"
          :episode-num="episode_num"
          :season-num="season_num"
          :directors="directors"
          :producers="producers"
          :writers="writers"
          :investors="investors"
          :medias="medias"
          @play-teaser="GET_FILE(1)"
        />
      </section>

      <!-- محتوا : ContentDetails -->
      <section
        v-if="shouldShowContentSection"
        id="content"
        class="content-section"
      >
        <ContentDetailsSkeleton v-if="isLoadingContent" />
        <ContentDetails
          v-else-if="hasMediaTabs"
          :data="data"
          :type="type"
          :medias="medias"
          :total-claps="total_claps"
          :episode-num="episode_num"
          :season-num="season_num"
          :writers="writers"
          :investors="investors"
          :comm-num="comm_num"
          :light-images="lightimages"
          :images-loading="imagesloading"
          @get-file="GET_FILE"
          @load-images="LoadImages"
        />
      </section>

      <!-- بازیگران : CastsTab -->
      <section v-if="shouldShowCastsSection" id="casts" class="content-section">
        <CastsTabSkeleton v-if="isLoadingCasts" />
        <CastsTab
          v-else-if="hasCastsData"
          :casts="casts"
          :directors="directors"
          :producers="producers"
          :writers="writers"
          :investors="investors"
          :is-animation="isAnimation"
        />
      </section>

      <!-- فیلم های مشابه : SimilarContent -->
      <section
        v-if="shouldShowSimilarSection"
        id="similar"
        class="content-section"
      >
        <SimilarContentSkeleton v-if="isLoadingSimilar" />
        <SimilarContent v-else-if="hasSimilarData" :similar="similar" />
      </section>

      <!-- دیدگاه‌ها : CommentsTab -->
      <section
        v-if="shouldShowCommentsSection"
        id="comments"
        class="content-section"
      >
        <div v-show="commentsloading">
          <CommentsTabSkeleton />
        </div>
        <div v-show="!commentsloading" style="width: 100%">
          <CommentsTab
            :id="data.item.id"
            :type="type"
            :name="data.item.name"
            :namefa="data.item.name_fa"
            :comm-num="comm_num"
          />
        </div>
      </section>
    </div>

    <!-- Modal Components -->
    <!-- Download-New modal for Buy action -->
    <DownloadNew
      v-if="showDownloadModalBuy"
      :id="data.item.id"
      :show="showDownloadModalBuy"
      :ftb="ftb"
      :season="type !== 'movie' && season ? season : null"
      :owned="owned"
      :traffic="data.item.traffic"
      :trafficoo="data.item.traffic_oo"
      :vod="data.item.vod"
      :free="data.item.free"
      :name="data.item.name"
      :namefa="data.item.name_fa"
      :posterf="data.item.poster"
      :backdrop="data.item.backdrop"
      :itemdata="data.item"
      :type="type"
      @hide-modal="HIDE_MODAL_BUY"
    />

    <!-- Download modal for Download button -->
    <Download
      :id="data.item.id"
      :show="showDownloadModalDownload"
      :ftb="false"
      :staticmodal="false"
      :season="type !== 'movie' && season ? season : null"
      :owned="owned"
      :traffic="data.item.traffic"
      :ir="data.item.ir || 0"
      :trafficoo="data.item.traffic_oo"
      :vod="data.item.vod"
      :free="data.item.free"
      :name="data.item.name"
      :namefa="data.item.name_fa"
      :posterf="data.item.poster"
      :backdrop="data.item.backdrop"
      :itemdata="data.item"
      :type="type"
      @hide-modal="HIDE_MODAL_DOWNLOAD"
    />

    <client-only>
      <File
        :id="data.item.id"
        :show="showplyrmodal"
        :content="modalcontent"
        :name="data.item.name_fa"
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
        modal-class="enhanced-sharing-modal"
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
import MediaShowcase from '@/components/item/showcase/MediaShowcase'
import ContentDetails from '@/components/item/showcase/ContentDetails'
import SeasonEpisodes from '@/components/item/SeasonEpisodes'
import SimilarContent from '@/components/item/SimilarContent'
import CastsTab from '@/components/item/content/tabs/CastsTab'
import CommentsTab from '@/components/item/content/tabs/CommentsTab'
import Download from '@/components/ItemDownload.vue'
import DownloadNew from '@/components/Download-New.vue'
import File from '@/components/item/File'

// Skeleton Components
import ShowcaseSkeleton from '@/components/item/skeletons/ShowcaseSkeleton'
import SeasonEpisodesSkeleton from '@/components/item/skeletons/SeasonEpisodesSkeleton'
import ContentDetailsSkeleton from '@/components/item/skeletons/ContentDetailsSkeleton'
import SimilarContentSkeleton from '@/components/item/skeletons/SimilarContentSkeleton'
import CastsTabSkeleton from '@/components/item/skeletons/CastsTabSkeleton'
import CommentsTabSkeleton from '@/components/item/skeletons/CommentsTabSkeleton'
import ContentStatisticsSkeleton from '@/components/item/skeletons/ContentStatisticsSkeleton'

import Socialsharing from '@/components/Socialsharing'
import ContentStatistics from '@/components/item/content/ContentStatistics'

export default {
  name: 'ContentShowcase',
  components: {
    MediaShowcase,
    ContentDetails,
    SeasonEpisodes,
    SimilarContent,
    CastsTab,
    CommentsTab,
    Download,
    DownloadNew,
    File,
    Socialsharing,
    ContentStatistics,
    // Skeletons
    ShowcaseSkeleton,
    SeasonEpisodesSkeleton,
    ContentDetailsSkeleton,
    SimilarContentSkeleton,
    CastsTabSkeleton,
    CommentsTabSkeleton,
    ContentStatisticsSkeleton,
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
      // Loading states
      isLoading: false,
      isLoadingShowcase: true,
      isLoadingSeasons: true,
      isLoadingContent: true,
      isLoadingCasts: true,
      isLoadingStatistics: true,
      isLoadingSimilar: true,

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

      // Modal visibility states
      showDownloadModalBuy: false,
      showDownloadModalDownload: false,
    }
  },
  computed: {
    ...mapGetters({ showplyrmodal: 'showplyrmodal' }),
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

    hasMediaTabs() {
      return (
        this.medias.backstage === 1 ||
        this.medias.image === 1 ||
        this.medias.musicvideo === 1 ||
        this.medias.next === 1
      )
    },
    downloadButtonLabel() {
      if (!this.hasDownloadButton) return ''
      const lbl = this.actions.downloadButton.label || {}
      return this.ChooseLang(lbl.en, lbl.fa)
    },
    derivedEpisode() {
      if (this.type === 'episode' && this.data && this.data.item) {
        return this.data.item
      }
      return this.episode || {}
    },

    hasSeasonData() {
      if (
        !(this.type === 'series' || this.type === 'episode') ||
        !this.season ||
        typeof this.season !== 'object'
      ) {
        return false
      }

      return Object.values(this.season).some(
        (episodes) => Array.isArray(episodes) && episodes.length > 0
      )
    },
    shouldShowSeasonContent() {
      return (
        (this.type === 'series' || this.type === 'episode') &&
        (this.isLoadingSeasons || this.hasSeasonData)
      )
    },
    shouldShowSeasonTab() {
      return this.shouldShowSeasonContent
    },
    shouldShowEpisodesSection() {
      return this.shouldShowSeasonContent
    },
    shouldShowContentSection() {
      return this.isLoadingContent || this.hasMediaTabs
    },
    shouldShowContentTab() {
      return this.shouldShowContentSection
    },
    hasStatisticsData() {
      return Boolean(this.data && this.data.item)
    },
    shouldShowStatisticsSection() {
      return this.isLoadingStatistics || this.hasStatisticsData
    },
    shouldShowStatisticsTab() {
      return this.shouldShowStatisticsSection
    },
    hasCastsData() {
      return Array.isArray(this.casts) && this.casts.length > 0
    },
    shouldShowCastsSection() {
      return this.isLoadingCasts || this.hasCastsData
    },
    shouldShowCastsTab() {
      return this.shouldShowCastsSection
    },
    hasSimilarData() {
      return Array.isArray(this.similar) && this.similar.length > 0
    },
    shouldShowSimilarSection() {
      return this.isLoadingSimilar || this.hasSimilarData
    },
    shouldShowSimilarTab() {
      return this.shouldShowSimilarSection
    },
    shouldShowCommentsSection() {
      return Boolean(this.data && this.data.item)
    },
    shouldShowCommentsTab() {
      return this.shouldShowCommentsSection
    },
    isAnimation() {
      const genres = this.data?.item?.new_genres || {}
      return Object.keys(genres).some((key) =>
        ['animation', 'انیمیشن'].includes(key.toLowerCase())
      )
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
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        const offset = 100 // Adjust this value based on your header height
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })

        // Update URL hash without scrolling
        history.replaceState(null, null, `#${sectionId}`)
      }
    },

    handlePlay() {
      // For series type with seasons but no specific episode, scroll to seasons section
      if (this.type === 'series' && this.season) {
        this.scrollToSection('episodes')
      } else {
        this.PLAY('play')
      }
    },
    handleBuy() {
      this.ftb = true
      this.showDownloadModalBuy = true
    },
    handleSubscription() {
      this.PLAY('subscription')
    },
    handleDownloadClick() {
      this.showDownloadModalDownload = true
    },

    async loadAdditionalData() {
      // Set loading states
      this.isLoadingShowcase = true
      this.isLoadingSeasons = true
      this.isLoadingContent = true
      this.isLoadingCasts = true
      this.isLoadingStatistics = true
      this.isLoadingSimilar = true

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
          this.isLoadingCasts = false
          this.medias = mediaRes.data.data.medias || {}
          this.isLoadingContent = false

          this.similar = similarRes.data.data.similar || []
          this.offer = similarRes.data.data.offer || null
          this.isLoadingSimilar = false

          this.owned = accessibilityRes.data.data.owned || 0
          this.owned_period_end =
            accessibilityRes.data.data.owned_period_end || null
          this.actions = accessibilityRes.data.data.actions || null
          this.isLoadingShowcase = false

          this.total_claps = statisticsRes.data.data.claps?.total || 0
          this.user_claps = statisticsRes.data.data.claps?.user || 0
          this.current_time = statisticsRes.data.data.current_time || 0
          this.duration_time = statisticsRes.data.data.duration_time || 0
          this.is_watchlist = statisticsRes.data.data.is_watchlist || 0
          this.comm_num = statisticsRes.data.data.comm_num || 0
          this.isLoadingStatistics = false
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
          this.isLoadingCasts = false

          this.medias = mediaRes.data.data.medias || {}
          this.isLoadingContent = false

          this.similar = similarRes.data.data.similar || []
          this.offer = similarRes.data.data.offer || null
          this.isLoadingSimilar = false

          this.owned = accessibilityRes.data.data.owned || 0
          this.owned_period_end =
            accessibilityRes.data.data.owned_period_end || null
          this.actions = accessibilityRes.data.data.actions || null
          this.isLoadingShowcase = false

          this.total_claps = statisticsRes.data.data.claps?.total || 0
          this.user_claps = statisticsRes.data.data.claps?.user || 0
          this.current_time = statisticsRes.data.data.current_time || 0
          this.duration_time = statisticsRes.data.data.duration_time || 0
          this.is_watchlist = statisticsRes.data.data.is_watchlist || 0
          this.comm_num = statisticsRes.data.data.comm_num || 0
          this.isLoadingStatistics = false

          // اختصاص داده‌های مربوط به فصل
          if (seasonRes?.data?.data) {
            this.season = seasonRes.data.data.season || null
            this.last_episode_seen =
              seasonRes.data.data.last_episode_seen || null
            this.first_episode = seasonRes.data.data.first_episode || null
            this.last_episode = seasonRes.data.data.last_episode || null
          }
          this.isLoadingSeasons = false
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
        // Reset loading states on error
        this.isLoadingShowcase = false
        this.isLoadingSeasons = false
        this.isLoadingContent = false
        this.isLoadingCasts = false
        this.isLoadingStatistics = false
        this.isLoadingSimilar = false
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
    HIDE_MODAL_BUY() {
      this.showDownloadModalBuy = false
    },
    HIDE_MODAL_DOWNLOAD() {
      this.showDownloadModalDownload = false
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
                  const src = res.data.data.images[i].src
                  // Format image URL with thumb service
                  images[
                    i
                  ] = `https://thumb.upera.shop/thumb?w=1920&h=1200&q=100&a=c&src=${src}`
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

<style scoped>
::v-deep .content-section#about {
  min-height: 251px !important;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.spinner-container {
  text-align: center;
}

.spinner-container p {
  margin-top: 1rem;
  color: #fff;
  font-size: 1.1rem;
}

.content-body {
  margin-top: 4rem;
}

.theme-dark .content-body {
  margin-top: 2rem;
}

section#content {
  margin: 0 !important;
  width: 100% !important;
  max-width: 100% !important;
}

.content-nav-header {
  position: sticky;
  top: 3.5rem;
  z-index: 3;
  margin-top: -3rem;
}

.content-nav-header .nav {
  background: #00000099;
  backdrop-filter: blur(12px);
  border: 1px solid #e5e5e5;
  border-radius: 36px;
  padding: 7px 11px !important;
  width: fit-content;
  margin: 0 41px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.content-nav-header .nav-link {
  background: rgba(255, 255, 255, 0.04);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 0.45rem 0.9rem;
  font-weight: 600;
  font-size: 0.95rem;
  min-height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
  text-decoration: none;
}

.content-nav-header .nav-link:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
  color: #fff;
  text-decoration: none;
}

.content-nav-header .nav-link.active {
  background: linear-gradient(90deg, #ff7a18 0%, #af002d 100%);
  color: #fff !important;
  box-shadow: 0 8px 22px rgba(175, 0, 45, 0.22);
  border-radius: 10px;
  transform: none;
}

/* Responsive styles */
@media (min-width: 1500px) {
  .content-nav-header {
    margin-top: -3rem;
  }
}
/* Responsive styles */
@media (max-width: 1300px) {
  .content-nav-header {
    margin-top: -2rem;
  }

  .content-nav-header .nav {
    height: 56px;
    padding: 12px 14px;
    top: 0;
    margin-right: 15px;
  }
}
@media (max-width: 991.98px) {
  .content-nav-header .nav {
    height: 56px;
    padding: 12px 14px;
    top: 0;
    margin-right: 15px;
  }
}

@media (max-width: 767.98px) {
  .content-nav-header {
    margin-top: 0rem;
  }

  .content-nav-header .nav {
    width: calc(100% - 2rem);
    height: auto;
    min-height: 48px;
    border-radius: 24px;
    padding: 10px 0 !important;
    top: 0;
    right: 1rem;
    left: 1rem;
    margin: 0 auto;
  }

  nav.nav.nav-pills {
    gap: 0 !important;
  }
  ::v-deep .content-section#about {
    margin: 3rem 2rem 0 2rem;
  }
}

@media (max-width: 575.98px) {
  .content-nav-header {
    margin-top: 1rem;
  }

  .content-nav-header .nav {
    width: 93%;
    height: auto;
    padding: 4px 5px;
    top: 0;
    right: 0;
    left: 0.5rem;
    margin: 0 auto !important;
    gap: 5px;
    justify-content: space-around;
  }

  .content-nav-header .nav-link {
    padding: 0.1rem 0.35rem !important;
    font-weight: 500 !important;
    font-size: 0.75rem !important;
    min-height: 32px !important;
  }

  .content-nav-header .nav-link:hover {
    transform: none;
  }
}

a.nav-link {
  margin-right: 0 !important;
}

/* Enhanced Modal Styles */
::v-deep .enhanced-sharing-modal .modal-dialog {
  max-width: 600px;
}

::v-deep .enhanced-sharing-modal .modal-content {
  border-radius: 20px;
  border: none;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
}

::v-deep .enhanced-sharing-modal .modal-header {
  background: linear-gradient(90deg, #ff7a18 0%, #af002d 100%);
  border: none;
  padding: 20px 24px;
  border-radius: 20px 20px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

::v-deep .enhanced-sharing-modal .modal-title {
  color: #ffffff;
  font-family: 'dana-700', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.3px;
  margin: 0;
  line-height: 1.4;
}

::v-deep .enhanced-sharing-modal .close {
  color: #ffffff;
  opacity: 1;
  text-shadow: none;
  transition: all 0.3s ease;
  font-size: 1.5rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  margin: 0;
  padding: 0;
  line-height: 1;
}

::v-deep .enhanced-sharing-modal .close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

::v-deep .enhanced-sharing-modal .modal-body {
  padding: 0;
  background: transparent;
}

@media (prefers-color-scheme: dark) {
  ::v-deep .enhanced-sharing-modal .modal-content {
    background: linear-gradient(145deg, #1a1a2e 0%, #16213e 100%);
  }
}

@media (max-width: 768px) {
  ::v-deep .enhanced-sharing-modal .modal-dialog {
    max-width: 95%;
    margin: 1rem auto;
  }

  ::v-deep .enhanced-sharing-modal .modal-header {
    padding: 16px 20px;
  }

  ::v-deep .enhanced-sharing-modal .modal-title {
    font-size: 1.1rem;
  }
}
</style>
