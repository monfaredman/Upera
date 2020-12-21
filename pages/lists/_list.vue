<template>
  <div id="episode">
    <div v-if="data.movies!==null" id="actor" class="episodes_collection">
      <div class="banner mt-5">
        <div class="banner_container">
          <img :src="'https://thumb.contentpanel.click/thumb?w=1920&h=938&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+data.movies[0].backdrop" alt="">
          <a href="#" class="back" @click.prevent="hasHistory() ? $router.go(-1) : $router.push('/')">
            <img src="@/assets/img/icons/arrow-back.svg" width="30" alt="">
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
              {{ ChooseLang(data.titles_en[$route.params.list],data.titles[$route.params.list]) }}
            </h2>
            <div class="series-select movie_selection">
              <a href="#" class="back" @click.prevent="hasHistory() ? $router.go(-1) : $router.push('/')">
                <i class="icon-arrow-back" />
              </a>
            </div>
          </div>
        </div>
        
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
  </div>
</template>

<script>
  export default {

  async asyncData (context) {
    let res
    if (context.app.$auth.loggedIn) {
        res = await context.app.$axios.get('/get/discover')
     }else{
      res = await context.app.$axios.get('/ghost/get/discover')
     }
     let finded=0
     if(context.params.list==="offer" || context.params.list==="new_titles" || context.params.list==="free" || context.params.list==="soon"){
     	res.data.data.movies=res.data.data[context.params.list]
     	finded=1
   	 }else if(res.data.data.occasions!==null){
        for (var key = 0, len = res.data.data.occasions.length; key < len; key++) {
        	if(res.data.data.occasions[key].occasion==context.params.list){
		    	res.data.data.movies=res.data.data.occasions[key].list
		    	finded=1
		    	res.data.data.titles[context.params.list]=res.data.data.occasions[key].occasion_fa
		    	res.data.data.titles_en[context.params.list]=context.params.list
		    	break
        	}
		}
	}

	if(!finded){
		return context.redirect(404, '/404')
	}
    return {data:res.data.data}
  },
  data () {
    return {
      data:{},
      userApi:'/get/discover',
      ghostApi:'/ghost/get/discover'
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
    hasHistory () { return window.history.length > 2 },
  }
  }
</script>

<style>
#episode #feature .feature {align-items: baseline;}
#episode #feature .feature .title {font-size: 3em !important;color: black;text-shadow: 2px 2px #fff;}
</style>
