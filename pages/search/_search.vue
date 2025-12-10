<template>
  <div class="search-page-container">
    <!-- Search Header -->
    <div class="search-page-header">
      <div class="search-input-container">
        <b-form-input
          ref="searchInput"
          v-model="query"
          autofocus
          :placeholder="$t('new.search')"
          type="text"
          class="search-input"
          @input="onInput"
          @keydown.down.prevent="moveSelection(1)"
          @keydown.up.prevent="moveSelection(-1)"
          @keydown.enter.prevent="handleEnter"
          @focus="onFocus"
          @blur="onBlur"
        />
        <button class="btn btn-search" @click="IN_SEARCH">
          <i class="icon-search" />
        </button>

        <!-- Autocomplete dropdown -->
        <div v-if="showAutocomplete" class="autocomplete-dropdown">
          <div v-if="autocompleteLoading" class="autocomplete-item loading">
            ...
          </div>
          <div
            v-for="(item, idx) in suggestions"
            :key="item.id + '-' + idx"
            :class="[
              'autocomplete-item',
              { active: idx === selectedSuggestion },
            ]"
            @mousedown.prevent="selectSuggestion(item)"
          >
            <div class="autocomplete-title">
              {{ ChooseLang(item.title_en || item.title, item.title_fa) }}
            </div>
            <div v-if="item.type" class="autocomplete-meta">
              {{ item.type }}
            </div>
          </div>
          <div
            v-if="!autocompleteLoading && suggestions.length === 0"
            class="autocomplete-item empty"
          >
            هیچ موردی یافت نشد
          </div>
        </div>
        <!-- /Autocomplete dropdown -->
      </div>
    </div>

    <!-- Search Content -->
    <div class="search-page-content">
      <FilterContents
        :show="true"
        :savedata="false"
        :no-top="false"
        :is-search="true"
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
              IN_SEARCH()
            "
            >امتیاز +۸</a
          >
        </div>

        <!--------------  Search Tags ---------------->
        <div
          v-if="!query && lastsearchs && data.data == null && data.cast == null"
          id="search-tags"
          class="search-tags"
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
                IN_SEARCH()
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
            class="clearfix"
            :class="{ 'pt-4': index > 0 }"
            @click.prevent="
              query = item
              IN_SEARCH()
            "
            >{{ item }}</a
          >
        </div>

        <!-------------- Movie Not Found ---------------->
        <div v-if="noresult && query" id="notFound" class="movie_notFound">
          <p>
            متاسفانه چیزی پیدا نکردیم. میتوانید به قسمت
            <nuxt-link to="/genres">
              <span>دسته بندی</span>
            </nuxt-link>
            سری بزنین یا
            <nuxt-link to="/genres">
              <span>درخواست اضافه کردن فیلم یا سریال</span>
            </nuxt-link>
            مورد نظرتون رو بدین.
          </p>
        </div>

        <!--------------  Search Results ---------------->
        <!-- Skeleton Loader -->
        <div v-if="isLoading" class="search_skeleton mt-5 container-fluid">
          <div v-for="n in 10" :key="n" class="actor">
            <b-skeleton-img
              no-aspect
              width="142px"
              height="212px"
              animation="wave"
              class="mb-2 rounded"
            />
            <b-skeleton width="70%" animation="wave" />
          </div>
        </div>

        <!-- Actual Results -->
        <div
          v-else-if="data.data != null || data.cast != null"
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
                  :to="{ name: item.type + '-id', params: { id: item.id } }"
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
                v-for="(item, index) in data.cast"
                :key="index"
                class="actor2"
              >
                <nuxt-link :to="{ name: 'cast-id', params: { id: item.id } }">
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
</template>
<script>
import { mapGetters } from 'vuex'
import FilterContents from '@/components/FilterContents'

export default {
  components: {
    FilterContents,
  },
  async asyncData(context) {
    if (context.params.search) {
      const queries = { query: context.params.search }
      if (context.query.dubbed) {
        queries.dubbed = 1
      }

      if (context.query.subtitle) {
        queries.subtitle = 1
      }

      if (context.query.imdb) {
        queries.imdb = 1
      }

      if (context.query.kids) {
        queries.kids = 1
      }

      const res = await context.app.$axios.post(
        '/ghost/get/search' + context.store.getters.filtercontents,
        queries
      )

      let noresult2
      if (res.data.data.data == null && res.data.data.cast == null)
        noresult2 = true
      else {
        noresult2 = false
      }

      const res2 = await context.app.$axios.get('/ghost/topsearch')

      if (context.app.i18n.locale !== 'fa')
        res2.data.data.topsearch = res2.data.data.topsearch_en

      return {
        data: res.data.data,
        topsearch: res2.data.data.topsearch,
        noresult: noresult2,
      }
    } else {
      const res = await context.app.$axios.get('/ghost/topsearch')

      if (context.app.i18n.locale !== 'fa')
        res.data.data.topsearch = res.data.data.topsearch_en

      return {
        data: { data: null, cast: null },
        topsearch: res.data.data.topsearch,
      }
    }
  },
  data() {
    return {
      query: null,
      dubbed: 0,
      subtitle: 0,
      imdb: 0,
      kids: 0,
      showCast: null,
      data: {},
      topsearch: {},
      noresult: false,
      isLoading: false,
      // Autocomplete state
      suggestions: [],
      showAutocomplete: false,
      autocompleteTimer: null,
      autocompleteLoading: false,
      autocompleteLimit: 8,
      selectedSuggestion: -1,
    }
  },
  head() {
    return {
      title: this.$route.params.search
        ? this.$route.params.search + ' | جستجو'
        : 'جستجو',
    }
  },
  computed: {
    ...mapGetters({ lastsearchs: 'search/lastsearchs' }),
    filtercontents() {
      return this.$store.getters.filtercontents
    },
  },
  mounted() {
    this.$store.dispatch('search/GetLastSearchs', this.$route.params.search)
    if (this.$route.params.search) {
      this.query = this.$route.params.search
      this.dubbed = this.$route.query.dubbed
      this.subtitle = this.$route.query.subtitle
      this.imdb = this.$route.query.imdb
      this.kids = this.$route.query.kids
      this.$store.dispatch('search/addSearch', this.$route.params.search)
    }
    // Focus input on mount
    this.$nextTick(() => {
      if (this.$refs.searchInput) {
        this.$refs.searchInput.focus()
      }
    })
  },
  methods: {
    ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa
      return en
    },

    // Autocomplete methods
    onInput() {
      // Debounce autocomplete
      if (this.autocompleteTimer) clearTimeout(this.autocompleteTimer)
      if (this.query && this.query.length > 1) {
        this.autocompleteTimer = setTimeout(() => {
          this.fetchAutocomplete()
        }, 300)
      } else {
        this.suggestions = []
        this.showAutocomplete = false
        this.selectedSuggestion = -1
      }
    },

    async fetchAutocomplete() {
      this.autocompleteLoading = true
      try {
        const response = await this.$axios.post(
          '/ghost/get/search/autocomplete',
          null,
          {
            params: { q: this.query, limit: this.autocompleteLimit },
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          }
        )
        const payload =
          response && response.data ? response.data.data || response.data : []
        this.suggestions = payload || []
        this.showAutocomplete = this.suggestions.length > 0
        this.selectedSuggestion = -1
      } catch (e) {
        console.error('Autocomplete error:', e)
        this.suggestions = []
        this.showAutocomplete = false
      } finally {
        this.autocompleteLoading = false
      }
    },

    moveSelection(delta) {
      if (!this.showAutocomplete || this.suggestions.length === 0) return
      const max = this.suggestions.length - 1
      let next = this.selectedSuggestion + delta
      if (next < 0) next = 0
      if (next > max) next = max
      this.selectedSuggestion = next
    },

    handleEnter() {
      if (this.showAutocomplete && this.selectedSuggestion >= 0) {
        const item = this.suggestions[this.selectedSuggestion]
        if (item) this.selectSuggestion(item)
      } else {
        this.IN_SEARCH()
      }
    },

    selectSuggestion(item) {
      const title = this.ChooseLang(item.title_en || item.title, item.title_fa)
      this.query = title
      this.showAutocomplete = false
      this.suggestions = []
      this.selectedSuggestion = -1
      this.IN_SEARCH()
    },

    onBlur() {
      setTimeout(() => {
        this.showAutocomplete = false
      }, 150)
    },

    onFocus() {
      if (
        this.suggestions &&
        this.suggestions.length > 0 &&
        this.query &&
        this.query.length > 1
      ) {
        this.showAutocomplete = true
      }
    },

    SEARCH() {
      if (this.query && this.query.length > 1) {
        const queries = {}
        if (this.dubbed) queries.dubbed = 1
        if (this.subtitle) queries.subtitle = 1
        if (this.imdb) queries.imdb = 1
        if (this.kids) queries.kids = 1

        this.$router.push({
          name: 'search-search',
          params: { search: this.query },
          query: queries,
        })
      }
    },

    removeSearch(x) {
      this.$store.dispatch('search/removeSearch', x)
    },

    async IN_SEARCH() {
      if (this.query && this.query.length > 1) {
        this.isLoading = true

        const queries = { query: this.query }
        if (this.dubbed) queries.dubbed = 1
        if (this.subtitle) queries.subtitle = 1
        if (this.imdb) queries.imdb = 1
        if (this.kids) queries.kids = 1

        try {
          const apiurl = '/ghost/get/search'
          const response = await this.$axios.post(
            apiurl + this.filtercontents,
            queries
          )

          if (response.status === 200) {
            this.data = response.data.data

            if (
              response.data.data.data == null &&
              response.data.data.cast == null
            ) {
              this.noresult = true
            } else {
              this.$store.dispatch('search/addSearch', this.query)
              this.noresult = false
            }
          }
        } catch (error) {
          this.data = { data: null, cast: null }
          this.noresult = true
          console.error('Search error:', error)
        } finally {
          this.isLoading = false
        }
      }
    },

    execute_content_filtering() {
      this.$nuxt.$loading.start()
      this.$store.dispatch('filter/FILTER_LOADING')

      if (this.query && this.query.length > 1) {
        const queries = { query: this.query }
        if (this.imdb) queries.imdb = 1

        const apiurl = '/ghost/get/search'

        this.$axios
          .post(apiurl + this.filtercontents, queries)
          .then((response) => {
            if (response.status === 200) {
              this.data = response.data.data

              if (
                response.data.data.data == null &&
                response.data.data.cast == null
              ) {
                this.noresult = true
              } else {
                this.$store.dispatch('search/addSearch', this.query)
                this.noresult = false
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
  },
}
</script>

<style scoped>
.search-page-container {
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.search-page-header {
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #e9ecef;
  flex-shrink: 0;
  margin-bottom: 1rem;
}

.theme-dark .search-page-header {
  border-bottom-color: #444;
}

.search-input-container {
  direction: rtl !important;
  display: flex;
  flex: 1;
  position: relative;
}

.search-input {
  border-radius: 0 8px 8px 0;
  border-right: none;
  flex: 1;
}

.btn-search {
  background: #007bff;
  color: white;
  border: 1px solid #007bff;
  border-radius: 8px 0 0 8px;
  padding: 0 1rem;
}

.btn-search:hover {
  background: #0056b3;
}

.search-page-content {
  flex: 1;
  overflow-y: auto;
  padding: 1rem 0;
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

.theme-dark .tag {
  background: #373737;
  color: #fff;
}

.tag:hover {
  background: #e9ecef;
}

.theme-dark .tag:hover {
  background: #4a4a4a;
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
  border-bottom: 1px solid #525252;
  transition: color 0.3s ease;
  color: inherit;
}

.theme-dark .popular_search a {
  color: #ccc;
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
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: center;
}

.actor2 {
  width: 12%;
}

.actor2 span {
  font-size: 0.8rem;
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

/* Autocomplete dropdown styles */
.autocomplete-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  max-height: 320px;
  overflow-y: auto;
  background: white;
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  z-index: 2000;
  direction: rtl;
  margin-top: 4px;
}

.theme-dark .autocomplete-dropdown {
  background: #2a2a2a;
  border-color: #444;
}

.autocomplete-item {
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  border-bottom: 1px solid #f1f1f1;
  font-size: 0.9rem;
}

.theme-dark .autocomplete-item {
  border-bottom-color: #444;
}

.autocomplete-item.active {
  background: #f0f8ff;
}

.theme-dark .autocomplete-item.active {
  background: #3a3a3a;
}

.autocomplete-item:hover {
  background: #f5f5f5;
}

.theme-dark .autocomplete-item:hover {
  background: #3a3a3a;
}

.autocomplete-title {
  font-weight: 500;
}

.autocomplete-meta {
  font-size: 0.75rem;
  color: #6c757d;
}

.autocomplete-item.loading,
.autocomplete-item.empty {
  color: #6c757d;
  text-align: center;
}

.link-wrapper {
  position: relative;
  display: inline-block;
}

span.label.label-rounded.label-warning.label-1,
span.label.label-rounded.label-red.label-1 {
  right: 4px !important;
  top: 4px !important;
  z-index: 2 !important;
  position: absolute;
}

.container-fluid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: start;
  align-content: center;
  padding: 0 !important;
}

.search_skeleton .actor {
  width: 18%;
  display: flex;
  flex-direction: column;
  align-items: start;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .search-page-container {
    padding: 0.5rem;
  }

  .search-page-header {
    padding: 0.75rem 0;
  }
}

@media (max-width: 576px) {
  .search-page-container {
    margin: 4rem auto 0 auto;
  }

  .actor {
    width: 28% !important;
  }

  .actor2 {
    width: 20% !important;
  }
}
</style>
