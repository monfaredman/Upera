<template>
  <div
    v-show="show"
    class="filter-section-wrapper"
    :class="{ 'container-fluid pt-4 pb-1 bg-filtermenu': !setting }"
  >
    <div class="w-100" :class="{ 'mt-5 pt-lg-2 pt-md-2 pt-1': noTop }">
      <b-button
        class="btn btn-block mb-1 filter-btn"
        :class="{
          'btn-secondary': $colorMode.value == 'dark',
          'btn-dark btn-download': $colorMode.value != 'dark',
          collapsed: visible,
        }"
        :aria-expanded="visible ? 'true' : 'false'"
        aria-controls="collapse-filter"
        @click="visible = !visible"
      >
        <i class="icon-filter ml-2" /> <span>فیلتر</span>
      </b-button>
      <b-collapse id="collapse-filter" v-model="visible">
        <div class="filter-background">
          <div class="filter-container" :style="filterStyle">
            <div class="filter-item">
              <b-form-select
                v-model="f_type"
                :options="f_types"
                :disabled="filter_loading"
                class="filter-input"
                @change="change_filter('f_type', f_type)"
              />
            </div>
            <div class="filter-item">
              <b-form-select
                v-model="country"
                :options="countries"
                :disabled="filter_loading"
                class="filter-input"
                @change="change_filter('country', country)"
              />
            </div>
            <div class="filter-item">
              <b-form-select
                v-model="lang"
                :options="langs"
                :disabled="filter_loading"
                class="filter-input"
                @change="change_filter('lang', lang)"
              />
            </div>
            <div class="filter-item">
              <b-form-select
                v-model="age"
                :options="ages"
                :disabled="filter_loading || disable_age"
                class="filter-input"
                @change="change_filter('age', age)"
              />
            </div>
            <div v-show="localshowgenres" class="filter-item">
              <b-form-select
                v-model="genre"
                :options="genres"
                :disabled="filter_loading"
                class="filter-input"
                @change="change_filter('genre', genre)"
              />
            </div>
          </div>
        </div>
      </b-collapse>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    show: Boolean,
    savedata: Boolean,
    showGenres: Boolean,
    noTop: Boolean,
    setting: Boolean,
    startFetching: {
      type: Boolean,
      default: false,
    },
    listGenre: {
      type: String,
      default: null,
    },
    isSearch: {
      type: Boolean,
      default: false,
      require: false,
    },
  },

  data() {
    return {
      f_type: 0,
      f_types: [
        { text: 'فیلم و سریال', value: 0 },
        { text: 'فیلم', value: 'movie' },
        { text: 'سریال', value: 'series' },
      ],
      country: 0,
      countries: [
        { text: 'همه کشورها', value: 0 },
        { text: 'ایرانی', value: 'IR' },
        { text: 'خارجی', value: 'noIR' },
      ],
      lang: 0,
      langs: [
        { text: 'همه زبان ها', value: 0 },
        { text: 'فارسی (دوبله)', value: 'persian' },
        { text: 'زبان اصلی (زیرنویس)', value: 'nopersian' },
      ],
      age: 0,
      ages: [
        { text: 'همه سنین', value: 0 },
        { text: 'زیر ۳ سال', value: 'G' },
        { text: 'تا ۶ سال', value: 'TO-PG' },
        { text: 'تا ۱۲ سال', value: 'TO-PG-13' },
        { text: 'تا ۱۵ سال', value: 'TO-R' },
        { text: 'تا ۱۸ سال', value: 'TO-X' },
        { text: '۴ تا ۶ سال', value: 'PG' },
        { text: '۷ تا ۱۲ سال', value: 'PG-13' },
        { text: '۱۳ تا ۱۵ سال', value: 'R' },
      ],
      genre: 0,
      genres: [{ text: 'همه ژانرها', value: 0 }],
      genresFetched: false,
      localshowgenres: true,
      visible: true,
      disable_age: false,
      windowWidth: 0,
      filterStyle: { justifyContent: 'flex-between' },
    }
  },

  computed: {
    ...mapGetters({ filter: 'filter/data' }),
    ...mapGetters({ filter_loading: 'filter/filter_loading' }),
  },

  watch: {
    startFetching(newVal) {
      if (newVal && !this.genresFetched) {
        this.fetchGenres()
      }
    },
  },

  mounted() {
    if (this.startFetching) {
      this.fetchGenres()
    }
    if (window.innerWidth <= 576) this.visible = false

    this.windowWidth = window.innerWidth
    window.addEventListener('resize', this.Resize)

    if (!this.setting) {
      this.f_type = this.filter.f_type
      this.country = this.filter.country
      this.lang = this.filter.lang
      this.age = this.filter.age
    }
    if (this.$cookiz.get('filtercontents')) {
      var filtercontents = new URLSearchParams(
        this.$cookiz.get('filtercontents')
      )
      filtercontents = Object.fromEntries([...filtercontents])

      if ('f_type' in filtercontents) this.f_type = filtercontents.f_type
      if ('country' in filtercontents) this.country = filtercontents.country
      if ('lang' in filtercontents) this.lang = filtercontents.lang
      if ('age' in filtercontents) {
        this.age = filtercontents.age
        if (!this.setting) {
          this.disable_age = true
        }
      }
    }
    this.filterContainerStyle()
  },

  methods: {
    fetchGenres() {
      this.$axios
        .get('/genres')
        .then((response) => {
          if (response.status === 200 && response.data.genres) {
            // Map the response to the expected format for the genres dropdown
            this.genres = [
              { text: 'همه ژانرها', value: 0 }, // Default option
              ...Object.entries(response.data.genres).map(
                ([english_name, persian_name]) => ({
                  text: persian_name,
                  value: english_name.toLowerCase(),
                })
              ),
            ]
            this.localshowgenres = this.showGenres
            var listgenre = this.listGenre
            if (this.localshowgenres && listgenre) {
              if (
                !this.genres.some(function (el) {
                  return el.value === listgenre
                })
              ) {
                this.localshowgenres = false
              } else {
                this.genre = listgenre
              }
            }
          }
          // Mark genres as fetched and emit ready event
          this.genresFetched = true
          this.$emit('filters-ready')
        })
        .catch((error) => {
          console.error('Error fetching genres:', error)
          // Mark as fetched and emit ready even on error to prevent infinite loading
          this.genresFetched = true
          this.$emit('filters-ready')
        })
    },
    Resize(e) {
      if (window.innerWidth != this.windowWidth) {
        if (window.innerWidth <= 576) this.visible = false
        else this.visible = true
      }
      return e
    },
    change_filter(filtertype, value) {
      if (filtertype == 'genre') {
        if (value == 0) {
          this.$router.push({
            name: 'index',
          })
        } else {
          this.$router.push({
            name: 'lists-list',
            params: {
              list: value,
            },
          })
        }
      } else {
        var newfilter = { age: 0, lang: 0, country: 0, f_type: 0 }

        newfilter.age = this.age
        newfilter.lang = this.lang
        newfilter.country = this.country
        newfilter.f_type = this.f_type

        this.$store.dispatch('filter/SET_FILTER', newfilter)

        var filter_str = []
        for (var p in this.filter) {
          if (this.filter[p] != 0) {
            filter_str.push(
              encodeURIComponent(p) + '=' + encodeURIComponent(this.filter[p])
            )
          }
        }
        filter_str = '?' + filter_str.join('&')

        this.$store.dispatch('SET_FILTER_CONTENTS', filter_str)

        if (this.savedata) {
          this.$cookiz.set('filtercontents', filter_str)
        }

        this.$emit('execute_content_filtering', null)
      }
    },
    filterContainerStyle() {
      if (this.isSearch) {
        this.filterStyle = { justifyContent: 'flex-start' }
      } else {
        this.filterStyle = { justifyContent: 'flex-between' }
      }
    },
  },
}
</script>

<style scoped>
.filter-background {
  width: 100% !important;
  padding: 16px;
  border-radius: 12px;
  background: #525252;
}

.filter-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
}

.filter-item {
  flex: 1 1 20%;
  min-width: 200px;
}

.filter-input {
  width: 100% !important;
  height: 44px;
  border-radius: 12px;
  border-width: 1px;
  border: 1px solid #737373;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23343a40' viewBox='0 0 16 16'%3E%3Cpath d='M1.5 5.5L8 12l6.5-6.5-1.75-1.75L8 8.5 3.25 3.75z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: left 16px center;
  background-size: 1rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

/* Mobile styles */
@media (max-width: 576px) {
  .filter-container {
    flex-direction: column;
    gap: 8px;
  }

  .filter-item {
    flex: 1 1 100%; /* 100% width on mobile */
    min-width: unset; /* Remove min-width on mobile */
    width: 100%;
  }

  .filter-input {
    width: 100% !important;
  }

  .filter-btn {
    color: white !important;
    background-color: #525252 !important;
  }
}

/* Tablet styles */
@media (min-width: 577px) and (max-width: 768px) {
  .filter-item {
    flex: 1 1 50%; /* 50% width on tablet */
    min-width: 150px;
  }
}

/* Desktop styles */
@media (min-width: 769px) {
  .filter-btn {
    display: none !important;
    color: #525252;
  }

  .filter-item {
    flex: 1 1 20%;
    max-width: 19%;
  }
}

@media (min-width: 769px) and (max-width: 992px) {
  .filter-section-wrapper {
    padding-top: 10rem !important;
  }
}
</style>
