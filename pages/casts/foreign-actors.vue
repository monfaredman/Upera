<template>
  <div id="actor">
    <div class="container-fluid pl-md-4 pr-md-5">
      <div class="row">
        <div v-for="(item,index) in data.casts" :key="index" class="col-4 col-xl-1 col-md-2 col-sm-3 mt-2 mt-lg-4">
          <nuxt-link :to="{ name: 'cast-id', params: { id: item.id }}" class="actor">
            <img :src="'https://thumb.contentpanel.click/thumb?w=141&h=214&q=100&a=c&src=https://cdn.upera.shop/s3/casts/'+item.image" :alt="item.name">
            <span class="block">{{ ChooseLang(item.name,item.name_fa) }}</span>
          </nuxt-link>
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
        res = await context.app.$axios.get('new_casts/1/nonir/0')
     }else{
      res = await context.app.$axios.get('new_casts/1/nonir/0')
     }
    return {data:res.data.data}
  },
  data () {
    return {
      data:{},
      page: 1,
      distance: -Infinity,
      userApi:'new_casts/1/nonir/0',
      ghostApi:'new_casts/1/nonir/0'
    }
  },
  head() {

    return { title:  this.$t('new.foreignactors') }
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
                            if (response.data.data.casts.length) {
                              this.data.casts = this.data.casts.concat(response.data.data.casts)
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


