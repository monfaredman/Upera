<template>
  <b-modal
    id="searchModal"
    ref="searchModal"
    centered
    hide-footer
    hide-header
    size="xl"
    modal-class="search-modal"
    no-enforce-focus
    @hidden="onHidden"
    @shown="onShown"
  >
    <div class="search-modal-container">
      <!-- Header -->
      <div class="search-modal-header">
        <div class="search-input-container">
          <b-form-input
            v-model="query"
            autofocus
            :placeholder="$t('new.search')"
            type="text"
            class="search-input"
            @keyup.enter="performSearch"
            @input="updateURL"
          />
          <button class="btn btn-search" @click="performSearch">
            <i class="icon-search" />
          </button>
        </div>
        <button type="button" class="btn-close" @click="hideModal">
          <i class="fas fa-times" />
        </button>
      </div>

      <!-- Content -->
      <div class="search-modal-content">
        <FilterContents
          :show="true"
          :savedata="false"
          :no-top="false"
          @execute_content_filtering="execute_content_filtering"
        />

        <div class="search-main-content">
          <!--------------  Search Badges ---------------->
          <div class="search_badge">
            <a
              href=""
              :class="{ 'badge-secondary': !imdb, 'badge-info': imdb }"
              class="badge badge-pill small font-weight-normal py-2 px-3 mt-2 mb-2"
              @click.prevent="
                imdb = !imdb
                performSearch()
              "
              >امتیاز +۸</a
            >
          </div>

          <!--------------  Search Tags ---------------->
          <div
            v-if="
              !query && lastsearchs && data.data == null && data.cast == null
            "
            id="search-tags"
            class="mt-4 search-tags"
          >
            <div
              v-for="(item, index) in lastsearchs"
              :key="index"
              class="tag mt-2"
            >
              <i class="icon-close" @click="removeSearch(item)" />
              <span
                @click="
                  query = item
                  performSearch()
                "
                >{{ item }}</span
              >
            </div>
          </div>

          <header
            v-if="!query && topsearch && data.data == null && data.cast == null"
            class="headline py-4"
          >
            <h6 class="title">محبوبترین جستجوها</h6>
          </header>

          <!-------------- Popular Search ---------------->
          <div
            v-if="!query && topsearch && data.data == null && data.cast == null"
            id="popular_search"
            class="d-flex flex-column align-start popular_search"
          >
            <a
              v-for="(item, index) in topsearch"
              :key="index"
              href=""
              class="clearfix text-dark"
              :class="{ 'pt-4': index > 0 }"
              @click.prevent="
                query = item
                performSearch()
              "
              >{{ item }}</a
            >
          </div>

          <!-------------- Movie Not Found ---------------->
          <div v-if="noresult && query" id="notFound" class="movie_notFound">
            <p>
              متاسفانه چیزی پیدا نکردیم. میتوانید به قسمت
              <a href="#" @click.prevent="navigateToGenres">
                <span>دسته بندی</span>
              </a>
              سری بزنین یا
              <a href="#" @click.prevent="navigateToRequest">
                <span>درخواست اضافه کردن فیلم یا سریال</span>
              </a>
              مورد نظرتون رو بدین.
            </p>
          </div>

          <!--------------  Search Results ---------------->
          <div
            v-if="data.data != null || data.cast != null"
            id="actor"
            class="search_collection"
          >
            <div class="mt-5">
              <div v-if="data.data != null" class="container-fluid">
                <div
                  v-for="(item, index) in data.data"
                  :key="index"
                  class="mt-2 actor"
                >
                  <nuxt-link
                    class="link-wrapper"
                    :to="buildIdRoute(item)"
                    @click.prevent="navigateToContent(item)"
                  >
                    <span
                      v-if="!item.ir && item.persian"
                      class="label label-rounded label-red label-1"
                      >دوبله</span
                    >
                    <span
                      v-if="!item.ir && !item.persian"
                      class="label label-rounded label-warning label-1"
                      >زیرنویس</span
                    >
                    <span
                      v-if="item.free && $config.envname == 'upera'"
                      class="label label-blue label-2"
                      >رایگان</span
                    >
                    <b-img
                      v-bind="{
                        fluidGrow: true,
                        blank: true,
                        blankColor: '#bbb',
                        width: 142,
                        height: 212,
                        show: true,
                      }"
                      :src="
                        'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/' +
                        item.poster
                      "
                      :alt="item.name"
                    />
                  </nuxt-link>
                  <h6 class="mt-2 small font-weight-normal">
                    {{ ChooseLang(item.name, item.name_fa) }}
                  </h6>
                </div>
              </div>
              <div v-if="data.cast != null" class="container-fluid mt-4">
                <div
                  class="actor2"
                  v-for="(item, index) in data.cast"
                  :key="index"
                >
                  <nuxt-link
                    :to="{ name: 'cast-id', params: { id: item.id } }"
                    @click.prevent="navigateToCast(item)"
                  >
                    <b-img
                      v-bind="{
                        fluidGrow: true,
                        blank: true,
                        blankColor: '#bbb',
                        width: 140,
                        height: 140,
                        show: true,
                      }"
                      :src="
                        'https://thumb.upera.shop/thumb?w=140&h=140&q=100&a=t&src=https://cdn.upera.shop/s3/casts/' +
                        item.image
                      "
                      :alt="item.name"
                      class="rounded-circle"
                    />
                    <span
                      class="block"
                      :class="
                        $colorMode.value === 'dark' ? 'text-white' : 'text-dark'
                      "
                      >{{ ChooseLang(item.name, item.name_fa) }}</span
                    >
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
import { mapGetters } from 'vuex'
import FilterContents from '@/components/FilterContents'

export default {
  name: 'SearchModal',
  components: {
    FilterContents,
  },
  data() {
    return {
      query: '',
      dubbed: 0,
      subtitle: 0,
      imdb: 0,
      kids: 0,
      showCast: null,
      data: { data: null, cast: null },
      topsearch: {},
      noresult: false,
      isVisible: false,
      isHandlingHashChange: false, // Prevent recursive calls
    }
  },
  computed: {
    ...mapGetters({ lastsearchs: 'search/lastsearchs' }),
    filtercontents() {
      return this.$store.getters.filtercontents
    },
  },
  watch: {
    $route(to) {
      // Only handle hash changes from route changes, not from our own updates
      if (!this.isHandlingHashChange) {
        this.handleHashChange(to.hash)
      }
    },
  },
  async mounted() {
    await this.loadTopSearch()
    this.handleHashChange(this.$route.hash)
    window.addEventListener('hashchange', this.handleWindowHashChange)
  },
  beforeDestroy() {
    window.removeEventListener('hashchange', this.handleWindowHashChange)
  },
  methods: {
    handleWindowHashChange() {
      if (!this.isHandlingHashChange) {
        this.handleHashChange(window.location.hash)
      }
    },

    handleHashChange(hash) {
      console.log('Hash changed:', hash)

      if (hash === '#search') {
        // Open modal without query
        this.query = ''
        this.showModal()
      } else if (hash.startsWith('#search?')) {
        // Extract query from hash
        const hashParams = new URLSearchParams(hash.replace('#search?', ''))
        const queryParam = hashParams.get('query')

        if (queryParam) {
          this.query = decodeURIComponent(queryParam)
          this.showModal()
          // Don't call performSearch here to avoid double calls
        } else {
          this.query = ''
          this.showModal()
        }
      } else if (this.isVisible && !hash.includes('#search')) {
        // Only close modal if hash doesn't contain search AND modal is visible
        console.log('Closing modal - no search hash')
        this.hideModal()
      }
    },

    updateURL() {
      // Debounce URL updates to avoid too many history entries
      if (this.updateURLTimeout) {
        clearTimeout(this.updateURLTimeout)
      }

      this.updateURLTimeout = setTimeout(() => {
        this.isHandlingHashChange = true

        if (this.query) {
          const newHash = `#search?query=${encodeURIComponent(this.query)}`
          this.updateHash(newHash)
        } else {
          this.updateHash('#search')
        }

        // Reset flag after a short delay
        setTimeout(() => {
          this.isHandlingHashChange = false
        }, 100)
      }, 300)
    },

    updateHash(newHash) {
      // Only update if hash is different
      if (window.location.hash !== newHash) {
        window.history.replaceState(
          null,
          null,
          `${window.location.pathname}${window.location.search}${newHash}`
        )
      }
    },

    async loadTopSearch() {
      try {
        let res
        if (this.$auth.loggedIn) {
          res = await this.$axios.get('/topsearch')
        } else {
          res = await this.$axios.get('/ghost/topsearch')
        }

        if (this.$i18n.locale !== 'fa')
          res.data.data.topsearch = res.data.data.topsearch_en

        this.topsearch = res.data.data.topsearch
      } catch (error) {
        console.error('Error loading top search:', error)
      }
    },

    ChooseLang(en, fa) {
      if (fa && this.$i18n.locale == 'fa') return fa
      else return en
    },

    removeSearch(x) {
      this.$store.dispatch('search/removeSearch', x)
    },

    async performSearch() {
      if (this.query && this.query.length > 1) {
        const queries = { query: this.query }
        if (this.dubbed) queries.dubbed = 1
        if (this.subtitle) queries.subtitle = 1
        if (this.imdb) queries.imdb = 1
        if (this.kids) queries.kids = 1

        try {
          const apiurl = this.$auth.loggedIn
            ? '/get/search'
            : '/ghost/get/search'
          const response = await this.$axios.post(
            apiurl + this.filtercontents,
            queries
          )

          if (response.status === 200) {
            this.data = response.data.data
            this.noresult =
              response.data.data.data == null && response.data.data.cast == null

            if (!this.noresult) {
              this.$store.dispatch('search/addSearch', this.query)
            }
          }
        } catch (error) {
          this.data = { data: null, cast: null }
          this.noresult = true
          console.error('Search error:', error)
        }
      } else {
        // Clear results if query is empty
        this.data = { data: null, cast: null }
        this.noresult = false
      }
    },

    execute_content_filtering() {
      this.$nuxt.$loading.start()
      this.$store.dispatch('filter/FILTER_LOADING')

      if (this.query && this.query.length > 1) {
        const queries = { query: this.query }
        if (this.imdb) queries.imdb = 1

        const apiurl = this.$auth.loggedIn ? '/get/search' : '/ghost/get/search'

        this.$axios
          .post(apiurl + this.filtercontents, queries)
          .then((response) => {
            if (response.status === 200) {
              this.data = response.data.data
              this.noresult =
                response.data.data.data == null &&
                response.data.data.cast == null

              if (!this.noresult) {
                this.$store.dispatch('search/addSearch', this.query)
              }
            }
            this.$store.dispatch('filter/CLEAN_FILTER_LOADING')
            this.$nuxt.$loading.finish()
          })
          .catch((error) => {
            this.$store.dispatch('filter/CLEAN_FILTER_LOADING')
            this.$nuxt.$loading.finish()
            this.data = { data: null, cast: null }
            this.noresult = true
            console.error('Filter search error:', error)
          })
      }
    },

    navigateToContent(item) {
      this.hideModal()
      this.$router.push({
        name: item.type + '-id',
        params: { id: item.id },
      })
    },

    navigateToCast(item) {
      this.hideModal()
      this.$router.push({
        name: 'cast-id',
        params: { id: item.id },
      })
    },

    navigateToGenres() {
      this.hideModal()
      this.$router.push('/genres')
    },

    navigateToRequest() {
      this.hideModal()
      this.$router.push('/request-content')
    },

    showModal() {
      if (!this.isVisible) {
        this.isVisible = true
        this.$refs.searchModal.show()

        // Focus input after modal opens
        this.$nextTick(() => {
          if (this.$refs.searchInput) {
            this.$refs.searchInput.focus()
          }
        })
      }
    },

    hideModal() {
      if (this.isVisible) {
        this.isVisible = false
        this.$refs.searchModal.hide()

        // Remove hash from URL when closing modal
        if (window.location.hash.includes('#search')) {
          const newUrl = window.location.pathname + window.location.search
          window.history.replaceState(null, null, newUrl)
        }
      }
    },

    onHidden() {
      this.hideModal()
    },

    onShown() {
      this.isVisible = true
      console.log('Search modal shown')

      // Perform search if we have a query when modal opens
      if (this.query) {
        this.performSearch()
      }
    },

    buildIdRoute(item) {
      return { name: item.type + '-id', params: { id: item.id } }
    },
  },
}
</script>
<style scoped>
.search-modal-container {
  display: flex;
  flex-direction: column;
  height: 80vh;
  border-radius: 12px;
  overflow: hidden;
}

.search-modal-header {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
  flex-shrink: 0;
  gap: 5rem;
}

.search-input-container {
  direction: rtl !important;
  display: flex;
  flex: 1;
}

.search-input {
  border-radius: 0 8px 8px 0;
  border-right: none;
}

.btn-search {
  background: #007bff;
  color: white;
  border: 1px solid #007bff;
  border-radius: 8px 0 0 8px;
  padding: 0 1rem;
}

.btn-close {
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #6c757d;
  cursor: pointer;
  padding: 0.5rem;
}

.btn-close:hover {
  color: #495057;
}

.search-modal-content {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  max-height: 70vh;
}

.search-main-content {
  max-width: 100%;
}

/* Search tags styles */
.search-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  display: flex;
  align-items: center;
  background: #f8f9fa;
  border-radius: 20px;
  padding: 0.25rem 0.75rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
::v-deep .modal-body {
  padding: 0 !important;
}

.tag:hover {
  background: #e9ecef;
}

.tag .icon-close {
  margin-left: 0.5rem;
  font-size: 0.8rem;
  opacity: 0.6;
}

.tag .icon-close:hover {
  opacity: 1;
}

/* Popular search styles */
.popular_search a {
  display: block;
  padding: 0.5rem 0;
  text-decoration: none;
  border-bottom: 1px solid #f8f9fa;
  transition: color 0.3s ease;
}

.popular_search a:hover {
  color: #007bff;
}

/* Search results styles */
.search_collection {
  margin-top: 1rem;
}

.actor {
  width: 18%;
}
.actor2 {
  width: 12%;
}
.actor2 span {
  font-size: 0.8rem;
}
.actor {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: center;
}

.actor img,
.actor2 img {
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.actor:hover img,
.actor2:hover img {
  transform: scale(1.05);
}

.label {
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
}

.label-red {
  background: #dc3545;
  color: white;
}

.label-warning {
  background: #ffc107;
  color: #212529;
}

.label-blue {
  background: #007bff;
  color: white;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .search-modal-container {
    height: 90vh;
  }

  .search-modal-header {
    padding: 0.75rem;
  }
}

.container-fluid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: start;
  align-content: center;
  padding: 0 !important;
}

.theme-dark .form-control {
  color: black !important;
}

.is-series img:nth-child(1) {
  position: unset !important;
}
span.label.label-rounded.label-warning.label-1,
span.label.label-rounded.label-red.label-1 {
  right: 4px !important;
  top: 4px !important;
  z-index: 2 !important;
}
.link-wrapper {
  position: relative;
  display: inline-block;
}

.search-modal-content::-webkit-scrollbar,
.search-modal-content::-webkit-scrollbar {
  width: 8px;
  background: #f9f9f9;
}

.search-modal-content::-webkit-scrollbar-thumb,
.search-modal-content::-webkit-scrollbar-thumb {
  background: #ff6633;
  border-radius: 8px;
}

.search-modal-content::-webkit-scrollbar-track,
.search-modal-content::-webkit-scrollbar-track {
  background: #f0f0f0;
  border-radius: 8px;
}

.mt-5.pt-lg-2.pt-md-2.pt-1 {
  margin-top: 0 !important;
}

.theme-dark .form-control:focus {
  border-color: white !important;
  box-shadow: unset !important;
}
</style>
