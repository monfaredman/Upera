<template>
    <div id="checkcontainer">
    <section v-if="data.movies!==null" id="slideshow" class="banner">
      <div class="swiper-container showcase main-slideshow">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="row no-gutters">
              <div class="col-md-6 col-lg-8" />
              <div class="col-md-6 col-lg-4 showcase-pic">
                <img class="showcase-img d-none d-lg-block" :src="'https://thumb.contentpanel.click/thumb?w=800&h=400&zc=3&q=100&a=t&src=https://cdn.upera.shop/s3/backdrops/'+data.movies[0].backdrop" alt="">
                <img class="showcase-img d-lg-none" :src="'https://thumb.contentpanel.click/thumb?w=400&h=300&zc=3&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+data.movies[0].backdrop" alt="">
              </div>
            </div>
            <div
              class="showcase-thumbnail-wrapper-outter d-flex align-items-center justify-content-between pr-gutter pr-md-3"
            >
              <div class="showcase-thumbnail-wrapper w-full">
                <div class="d-flex h-full align-items-end">
                  <div class="pr-md-4 pr-md-2 showcase-desc-wrapper">
                    <div class="showcase-desc">
                      <div class="h2 text-invert mb-1 mb-md-3">
                        {{ ChooseLangGenres($route.params.genre) }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#" class="back d-md-none" @click.prevent="hasHistory() ? $router.go(-1) : $router.push('/')">
            <img src="@/assets/img/icons/arrow-back.svg" width="30" alt="">
          </a>
          <a href="#" class="back2 d-none d-md-block" @click.prevent="hasHistory() ? $router.go(-1) : $router.push('/')">
            <img src="@/assets/img/icons/arrow-back2.svg" width="30" alt="">
          </a>
        </div>
      </div>
    </section>
  <div id="episode">
    <div v-if="data.movies!==null" id="actor" class="episodes_collection">

        <div class="container-fluid pl-md-4 pr-md-5 mt-3  ">
          <div class="row">
          <div v-for="(item,index) in data.movies" :key="index" class="col-4 col-xl-1 col-md-2 col-sm-3 mt-2 mt-lg-4">
            <nuxt-link v-if="item.type=='movie'" :to="{ name: 'movie-id', params: { id: item.id }}" class="actor">
              <img :src="'https://thumb.contentpanel.click/thumb?w=272&h=404&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
              <span class="block">{{ ChooseLang(item.name,item.name_fa) }}</span>
            </nuxt-link>
            <nuxt-link v-else-if="item.type=='episode'" :to="{ name: 'episode-id', params: { id: item.id }}" class="actor is-series">
              <img :src="'https://thumb.contentpanel.click/thumb?w=272&h=404&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
              <img :src="'https://thumb.contentpanel.click/thumb?w=272&h=404&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
              <img :src="'https://thumb.contentpanel.click/thumb?w=272&h=404&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
              <span class="block">{{ ChooseLang(item.name,item.name_fa) }}</span>
            </nuxt-link>
            <nuxt-link v-else :to="{ name: 'series-id', params: { id: item.id }}" class="actor is-series">
              <img :src="'https://thumb.contentpanel.click/thumb?w=272&h=404&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
              <img :src="'https://thumb.contentpanel.click/thumb?w=272&h=404&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
              <img :src="'https://thumb.contentpanel.click/thumb?w=272&h=404&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
              <span class="block">{{ ChooseLang(item.name,item.name_fa) }}</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div v-if="distance < 0 && data.last_page > 1" class="text-center p-2">
      <button class="btn-load-more btn btn-main" @click="manualLoad">
        {{ $t('home.load_more') }}
      </button>
    </div>
    <infinite-loading v-else-if="data.last_page > 1" ref="infiniteLoading" @infinite="infiniteHandler">
      <span slot="no-more" />
      <span slot="no-results" />
    </infinite-loading>
  </div>
</div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
  export default {

        components: {
            InfiniteLoading
        },
  async asyncData (context) {
    let res
    if (context.app.$auth.loggedIn) {
        res = await context.app.$axios.get('/genre/'+context.params.genre.toLowerCase())
     }else{
      res = await context.app.$axios.get('/genre/'+context.params.genre.toLowerCase())
     }
    return {data:res.data.data}
  },
  data () {
    return {
      data:{},
      page: 1,
      distance: -Infinity,
      userApi:'/genre/'+this.$route.params.genre.toLowerCase(),
      ghostApi:'/genre/'+this.$route.params.genre.toLowerCase()
    }
  },
  head() {

    return { title:  this.ChooseLangGenres(this.$route.params.genre) }
  },
    methods: {
    ChooseLang(en,fa){
        if(fa && this.$i18n.locale=="fa")
            return fa
        else
            return en
    },
    ChooseLangGenres(genre){
        if(this.$i18n.locale=="fa"){
            return this.$i18n.t(`home.${genre.toLowerCase()}`)
        }else
           return genre 
    },
            infiniteHandler($state) {
                var apiurl
                if (this.$auth.loggedIn) {
                        apiurl=this.userApi
                } else {
                        apiurl=this.ghostApi
                }
                    this.$axios.get(apiurl,{params: {page: this.page + 1}}).then(response => {
                        if (response.status === 200) {
                            if (response.data.data.movies.length) {
                              this.data.movies = this.data.movies.concat(response.data.data.movies)
                              if(response.data.data.last_page==this.page)
                                $state.complete()
                              else
                                $state.loaded()
                            } else {
                              $state.complete()
                            }
                        }
                    })
                this.page = this.page + 1
            },
            manualLoad() {
              this.distance = 100
              this.$nextTick(() => {
                this.$refs.infiniteLoading.attemptLoad()
              })
            },
            hasHistory () { return window.history.length > 2 }
  }
  }
</script>


