<template>
  <div id="episode">
    <div v-if="data.movies!==null" id="actor" class="episodes_collection">
      <div class="banner mt-5">
        <div class="banner_container d-lg-none">
          <img :src="'https://thumb.contentpanel.click/thumb?w=400&h=200&zc=3&q=100&a=c&src=https://cdn.upera.shop/s3/casts/'+data.cast.image" alt="">
          <a href="#" class="back" @click.prevent="hasHistory() ? $router.go(-1) : $router.push('/')">
            <img src="@/assets/img/icons/arrow-back.svg" width="30" alt="">
          </a>
        </div>
        <div class="banner_container d-none d-lg-block img-gradient">
          <img :src="'https://thumb.contentpanel.click/thumb?w=600&h=300&zc=3&q=100&a=t&src=https://cdn.upera.shop/s3/casts/'+data.cast.image" class="srm-img">
          <a href="#" class="back srm-back" @click.prevent="hasHistory() ? $router.go(-1) : $router.push('/')">
            <img src="@/assets/img/icons/arrow-back2.svg" width="30" alt="">
          </a>
        </div>
        <div class="content px-3 px-lg-3 py-3">
          <div class="d-flex justify-content-between align-items-center" />
        </div>
      </div>
      <div class="container-fluid pl-md-4 pr-md-5 mt-n5  ">
        <div id="episode_topNav" class="content px-0 px-lg-0 py-3 episode_topNav_conten">
          <div class="d-flex justify-content-between align-items-center episode_topNav_box ">
            <h2 class="h4 text-nowrap font-weight-bold mb-0">
              {{ ChooseLang(data.cast.name,data.cast.name_fa) }}
            </h2>
            <div class="series-select movie_selection">
              <a href="#" class="back" @click.prevent="hasHistory() ? $router.go(-1) : $router.push('/')">
                <i class="icon-arrow-back" />
              </a>
            </div>
          </div>
        </div>

        <div class="row">
          <div v-for="(item,index) in data.filmography" :key="index" class="col-4 col-xl-1 col-md-2 col-sm-3 mt-2 mt-lg-4">
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
      <button class="btn-load-more btn btn-primary" @click="manualLoad">
        {{ $t('home.load_more') }}
      </button>
    </div>
    <infinite-loading v-else-if="data.last_page > 1" ref="infiniteLoading" @infinite="infiniteHandler">
      <span slot="no-more" />
      <span slot="no-results" />
    </infinite-loading>
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
        res = await context.app.$axios.get('/get/cast/'+context.params.id)
     }else{
        res = await context.app.$axios.get('/ghost/get/cast/'+context.params.id)
     }
    return {data:res.data.data}
  },
  data () {
    return {
      data:{},
      page: 1,
      distance: -Infinity,
      userApi:'/get/cast/'+this.$route.params.id,
      ghostApi:'/ghost/get/cast/'+this.$route.params.id
    }
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
                            if (response.data.data.filmography.length) {
                              this.data.filmography = this.data.filmography.concat(response.data.data.filmography)
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


