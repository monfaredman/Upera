<template>
  <div>
    <FilterContents :show="true" :savedata="false" :notop="true" @execute_content_filtering="execute_content_filtering" />
    <div id="checkcontainer" class="container-fluid">
      <!-- class="mt-5  pt-lg-5 pt-md-5" -->
      <div>
        <div class="search_main_container_reswidth">
          <!--------------  Search Box Show in small device ---------------->
          <div class="input-group search-field with-filter my-4 insert_comment search_box_container d-md-none">
            <b-form-input v-model="query" autofocus
                          :placeholder="$t('new.search')" type="text"
                          class="form-control border-left-0 border shadow-none" style="top:15px" @keyup.enter="SEARCH"
            />

            <button class="btn btn-sm  btn-send-comment" @click="IN_SEARCH">
              <i class="icon-search" />
            </button>


            <a href="#" class="filter">
              <i class="icon-filter" />
            </a>
          </div>
          <!--------------  Search Box Show in small device ---------------->
          <!--------------  Search Badges ---------------->
          <div class="search_badge">
            <a href="" :class="{ 'badge-secondary': !imdb, 'badge-info': imdb }" class="badge badge-pill small font-weight-normal py-2 px-3 mb-2 mr-2 mr-lg-4" @click.prevent="imdb = !imdb;IN_SEARCH()">امتیاز +۸</a>
            <br><br>
          </div>

          <!--------------  Search Badges ---------------->
          <!--------------  Search Tags ---------------->
          <div v-if="!query && lastsearchs && (data.data==null && data.cast==null)" id="search-tags" class="mt-4 search-tags">
            <div v-for="(item,index) in lastsearchs" :key="index" class="tag mt-2">
              <i class="icon-close" @click="removeSearch(item)" />
              <span @click="query = item;IN_SEARCH()">{{ item }}</span>
            </div>
          </div>
          <!--------------  Search Tags ---------------->
          <header v-if="!query && topsearch && (data.data==null && data.cast==null)" class="headline py-4">
            <h6 class="title">
              محبوبترین جستجوها
            </h6>
          </header>

          <!-------------- Popular Search ---------------->
          <!--رو اضافه کنینd-none اگر خواستین این قسمت رو حذف یا مخفی کنین فقط کافیه کلاس-->
          <div v-if="!query && topsearch && (data.data==null && data.cast==null)" id="popular_search" class="d-flex flex-column align-start popular_search">
            <a v-for="(item,index) in topsearch" :key="index" href="" class="clearfix text-dark" :class="{ 'pt-4': index>0 }" @click.prevent="query = item;IN_SEARCH()">{{ item }}</a>
          </div>
          <!-------------- Popular Search ---------------->
          <!-------------- Movie Not Found ---------------->
          <!--رو اضافه کنینd-none اگر خواستین این قسمت رو حذف یا مخفی کنین فقط کافیه کلاس-->
          <div v-if="noresult && query" id="notFound" class="movie_notFound mt-5 ">
            <p>
              متاسفانه چیزی پیدا نکردیم. میتوانید به قسمت <nuxt-link to="/genres">
                <span>دسته بندی</span>
              </nuxt-link>  سری
              بزنین یا <nuxt-link to="/genres">
                <span>درخواست اضافه کردن فیلم یا سریال</span>
              </nuxt-link> مورد نظرتون رو بدین.
            </p>
          </div>
          <!-------------- Movie Not Found ---------------->
        </div>


        <!--------------  Search Container ---------------->
        <!--رو اضافه کنینd-none اگر خواستین این قسمت رو حذف یا مخفی کنین فقط کافیه کلاس-->
        <div v-if="data.data!=null || data.cast!=null" id="actor" class="search_collection">
          <div class="container-fluid pl-md-4 pr-md-5 mt-n5">
            <div v-if="data.data!=null" class="row">
              <div v-for="(item,index) in data.data" :key="index" class="col-4 col-xl-1 col-md-2 col-sm-3 mt-2 mt-lg-4">
                <nuxt-link :to="{ name: item.type+'-id', params: { id: item.id }}" class="actor" :class="{'is-series': item.type!='movie'}">
                  <b-img v-bind="{fluidGrow: true,blank: true,blankColor: '#bbb',width: 142,height: 212,show:true}" :src="'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name" />
                  <b-img v-if="item.type!='movie'" v-bind="{fluidGrow: true,blank: true,blankColor: '#bbb',width: 142,height: 212,show:true}" :src="'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name" />
                  <b-img v-if="item.type!='movie'" v-bind="{fluidGrow: true,blank: true,blankColor: '#bbb',width: 142,height: 212,show:true}" :src="'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name" />
                  <!--                 <img :src="'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                <img v-if="item.type!='movie'" :src="'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                <img v-if="item.type!='movie'" :src="'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name"> -->
                  <span v-if="!item.ir && item.persian" class="label label-rounded label-red label-1">دوبله</span>
                  <span v-if="!item.ir && !item.persian" class="label label-rounded label-warning label-1">زیرنویس</span>
                  <span v-if="item.free && $config.envname=='upera'" class="label label-blue label-2">رایگان</span>
                </nuxt-link>
                <div class="mt-2">
                  <h6 v-if="item.type!='episode'" class="mt-2 small font-weight-normal">
                    {{ ChooseLang(item.name,item.name_fa) }}
                  </h6>
                  <h6 v-else class="mt-2 small font-weight-normal">
                    {{ $t('show.episode') }} {{ item.episode_number }} {{ ChooseLang(item.series_name,item.series_name_fa) }}<span v-if="item.season_number>1"> {{ item.season_number }}</span>
                  </h6>
                </div>
              </div>
            </div>
            <div v-if="data.cast!=null" class="row">
              <div v-for="(item,index) in data.cast" :key="index" class="col-4 col-xl-1 col-md-2 col-sm-3 mt-2 mt-lg-4">
                <nuxt-link :to="{ name: 'cast-id', params: { id: item.id }}" class="actor2">
                  <b-img v-bind="{fluidGrow: true,blank: true,blankColor: '#bbb',width: 140,height: 140,show:true}" :src="'https://thumb.upera.shop/thumb?w=140&h=140&q=100&a=t&src=https://cdn.upera.shop/s3/casts/'+item.image" :alt="item.name" class="rounded-circle" />

                  <!-- <img :src="'https://thumb.upera.shop/thumb?w=141&h=214&q=100&a=c&src=https://cdn.upera.shop/s3/casts/'+item.image" :alt="item.name"> -->
                  <span class="block">{{ ChooseLang(item.name,item.name_fa) }}</span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <!--------------  Search Container ---------------->
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import FilterContents from "@/components/FilterContents"
    export default {
        components: {
            FilterContents
        },
  async asyncData (context) {
  if(context.params.search){
    var queries ={'query':context.params.search}
    if(context.query.dubbed){
      queries.dubbed = 1
    }

    if(context.query.subtitle){
      queries.subtitle = 1
    }

    if(context.query.imdb){
      queries.imdb = 1
    }

    if(context.query.kids){
      queries.kids = 1
    }

    let res
    if (context.app.$auth.loggedIn) {
        res = await context.app.$axios.post('/get/search'+context.store.getters.filtercontents, queries)
     }else{
      res = await context.app.$axios.post('/ghost/get/search'+context.store.getters.filtercontents, queries)
     }


     let noresult2

    if(res.data.data.data==null && res.data.data.cast==null)
      noresult2=true
    else{
      noresult2=false
    }


    let res2
    if (context.app.$auth.loggedIn) {
        res2 = await context.app.$axios.get('/topsearch')
     }else{
      res2 = await context.app.$axios.get('/ghost/topsearch')
     }
    

    if(context.app.i18n.locale!=="fa")
      res2.data.data.topsearch=res2.data.data.topsearch_en

    return {data:res.data.data,topsearch:res2.data.data.topsearch,noresult:noresult2}
  }else{
    let res
    if (context.app.$auth.loggedIn) {
        res = await context.app.$axios.get('/topsearch')
     }else{
      res = await context.app.$axios.get('/ghost/topsearch')
     }
    

    if(context.app.i18n.locale!=="fa")
      res.data.data.topsearch=res.data.data.topsearch_en

    return {data:{data:null,cast:null},topsearch:res.data.data.topsearch}
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
                noresult: false
            }
        },
  head() {

    return { title: (this.$route.params.search) ? this.$route.params.search+' | جستجو' : 'جستجو' }
  },
        computed: {
            ...mapGetters({lastsearchs: "search/lastsearchs"})
        },
  // watch: {
  //   query: function() {
  //     this.data={data:null,cast:null}
  //   }
  //   },
    mounted() {
this.$store.dispatch('search/GetLastSearchs',this.$route.params.search)
if(this.$route.params.search){
  
  this.query=this.$route.params.search
  this.dubbed=this.$route.query.dubbed
  this.subtitle=this.$route.query.subtitle
  this.imdb=this.$route.query.imdb
  this.kids=this.$route.query.kids
  this.$store.dispatch('search/addSearch',this.$route.params.search)
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
    ChooseLangAllGenres(genres){
        if(this.$i18n.locale=="fa"){
            genres=genres.split(',')
            if(Array.isArray(genres)){
                const mm=this
                for (var key = 0, len = genres.length; key < len; key++) {
            genres[key] = mm.$i18n.t(`home.${genres[key].toLowerCase()}`)
        }
                return genres
            }else if(genres !== null){
                return [this.$i18n.t(`home.${genres.toLowerCase()}`)]
            }else
                return null
        }else{
          if(Array.isArray(genres)){
              return genres.split(',')
          }else if(genres !== null){
            return [genres]
          }else{
            return null
          }
        }
    },

            SEARCH() {
              if(this.query && this.query.length>1){
                var queries ={}
                if(this.dubbed){
                  queries.dubbed = 1
                }

                if(this.subtitle){
                  queries.subtitle = 1
                }

                if(this.imdb){
                  queries.imdb = 1
                }

                if(this.kids){
                  queries.kids = 1
                }

                this.$router.push({
                    name: "search-search",
                    params: {
                        search: this.query
                    },
                    query: queries
                })
              }
            },

            removeSearch(x) {
              this.$store.dispatch('search/removeSearch',x)

            },

            IN_SEARCH() {
  if(this.query && this.query.length>1){
    var queries ={'query':this.query}
    if(this.dubbed){
      queries.dubbed = 1
    }

    if(this.subtitle){
      queries.subtitle = 1
    }

    if(this.imdb){
      queries.imdb = 1
    }

    if(this.kids){
      queries.kids = 1
    }


                var apiurl
                if (this.$auth.loggedIn) {
                        apiurl='/get/search'
                } else {
                        apiurl='/ghost/get/search'
                }
                    this.$axios.post(apiurl+this.filtercontents,queries).then(response => {
                        if (response.status === 200) {
                            this.data=response.data.data

                          if(response.data.data.data==null && response.data.data.cast==null){
                            this.noresult=true
                          }else{
                            this.$store.dispatch('search/addSearch',this.query)
                            this.noresult=false
                          }
                        }
                    }).catch(error => {
                        this.data={data:null,cast:null}
                        this.noresult=true
                        return error
                    })

                 
  }
            },


            execute_content_filtering() {
                this.$nuxt.$loading.start()
                this.$store.dispatch('filter/FILTER_LOADING')
  if(this.query && this.query.length>1){
    var queries ={'query':this.query}
    if(this.imdb){
      queries.imdb = 1
    }
                var apiurl
                if (this.$auth.loggedIn) {
                        apiurl='/get/search'
                } else {
                        apiurl='/ghost/get/search'
                }
                    this.$axios.post(apiurl+this.filtercontents,queries).then(response => {
                        if (response.status === 200) {
                            this.data=response.data.data

                          if(response.data.data.data==null && response.data.data.cast==null){
                            this.noresult=true
                          }else{
                            this.$store.dispatch('search/addSearch',this.query)
                            this.noresult=false
                          }
                        }
                        this.$store.dispatch('filter/CLEAN_FILTER_LOADING')
                        this.$nuxt.$loading.finish()
                    }).catch(error => {
                        this.$store.dispatch('filter/CLEAN_FILTER_LOADING')
                        this.$nuxt.$loading.finish()
                        this.data={data:null,cast:null}
                        this.noresult=true
                        return error
                    })

                 
  }
            },
        },
    }
</script>