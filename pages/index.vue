<template>
  <div>
    <section v-if="data.top!==null" id="slideshow">
      <div class="swiper-container showcase main-slideshow">
        <VueSlickCarousel ref="carousel" v-bind="swiperOption3" class="swiper-wrapper">
          <div v-for="(item,index) in data.top" :key="index" class="swiper-slide">
            <div class="row no-gutters">
              <div class="col-md-6 col-lg-7 showcase-pic">
                <b-img v-bind="{blank: true,blankColor: '#bbb',width: 1120,height: 576,show:true}" :src="'https://thumb.upera.shop/thumb?w=1120&h=576&q=90&a=t&zc=1&src=https://cdn.upera.shop/s3/backdrops/'+item.backdrop" :alt="item.name" class="showcase-img d-none d-lg-block" />
                <b-img v-bind="{fluidGrow: true,blank: true,blankColor: '#bbb',width: 375,height: 300,show:true}" :src="'https://thumb.upera.shop/thumb?w=375&h=300&q=90&a=c&zc=1&src=https://cdn.upera.shop/s3/backdrops/'+item.backdrop" :alt="item.name" class="showcase-img d-lg-none" />
                <!--                 <img loading="lazy" data-back="/images/1120x576.png" class="showcase-img d-none d-lg-block" :src="'https://thumb.upera.shop/thumb?w=1120&h=576&q=90&a=t&zc=1&src=https://cdn.upera.shop/s3/backdrops/'+item.backdrop" :alt="item.name">
                <img loading="lazy" data-back="/images/375x300.png" class="showcase-img d-lg-none" :src="'https://thumb.upera.shop/thumb?w=375&h=300&q=90&a=c&zc=1&src=https://cdn.upera.shop/s3/backdrops/'+item.backdrop" :alt="item.name"> -->
              </div>
              <div class="col-md-6 col-lg-5" />
            </div>
            <div
              class="showcase-thumbnail-wrapper-outter d-flex align-items-center justify-content-between pr-gutter pr-md-3"
            >
              <div class="showcase-thumbnail-wrapper w-full">
                <div class="d-flex h-full align-items-end">
                  <div class="pr-md-4 pr-md-2 showcase-desc-wrapper">
                    <div class="showcase-desc">
                      <div v-if="item.type!='episode'" class="title text-invert mb-1 mb-md-3">
                        <nuxt-link :to="{ name: item.type+'-id', params: { id: item.id }}">
                          {{ ChooseLang(item.name,item.name_fa) }}
                        </nuxt-link>
                      </div>
                      <div v-else class="title text-invert mb-1 mb-md-3">
                        <nuxt-link :to="{ name: item.type+'-id', params: { id: item.id }}">
                          {{ ChooseLang(item.series_name,item.series_name_fa) }}<span v-if="item.season_number>1" class="show-mobile"> {{ item.season_number }}</span>
                        </nuxt-link>
                      </div>
                      <div v-if="item.type=='episode'" class="p-fs-small text-invert mb-1 mb-md-3 hide-mobile font-weight-normal">
                        {{ $t('show.season') }}{{ item.season_number }}
                        - {{ $t('show.episode') }} {{ item.episode_number }}
                      </div>
                      <div class="text-invert mb-1 mb-md-3">
                        <nuxt-link v-for="(item2,index2) in ChooseLangAllGenres(item.genre)" :key="index2" :to="{ name: 'genres-genre', params: { genre: item2.genre }}" class="tag">
                          {{ item2.title }}
                        </nuxt-link>
                      </div>
                      <div v-if="!item.ir && item.persian" class="text-invert mb-1 mb-md-3 hide-mobile">
                        دوبله فارسی
                      </div>
                      <div v-else-if="!item.ir && !item.persian" class="text-invert mb-1 mb-md-3 hide-mobile">
                        زیرنویس فارسی
                      </div>
                    </div>
                    <div class="showcase-button-wrapper">
                      <nuxt-link :to="{ name: item.type+'-id', params: { id: item.id }}" class="text-invert show-mobile">
                        <i class="icon-info" />
                        <!-- <div class="hide-mobile">توضیحات <span v-if="item.type=='movie'">فیلم</span><span v-else-if="item.type=='episode'">این قسمت سریال</span><span v-else>سریال</span></div> -->
                        <div v-if="item.type!='episode'">
                          توضیحات
                        </div>
                        <div v-else>
                          قسمت {{ item.episode_number }}
                        </div>
                        <!-- <span v-if="item.type=='movie'">فیلم</span><span v-else-if="item.type=='episode'">قسمت</span><span v-else>سریال</span> -->
                      </nuxt-link>

                      <nuxt-link v-if="item.presale" :to="{ name: item.type+'-id', params: { id: item.id }}" class="btn btn-main">
                        به زودی
                      </nuxt-link>
                      <nuxt-link v-else-if="item.type!='series'" :to="{ name: item.type+'-show-id', params: { id: item.id }}" class="btn btn-main">
                        نمایش <span class="hide-mobile hide-tablet"><span v-if="item.type=='movie'">فیلم</span><span v-else>این قسمت سریال</span></span>
                      </nuxt-link>

                      <nuxt-link v-else :to="{ name: 'series-id', params: { id: item.id }}" class="btn btn-main">
                        قسمت ها
                      </nuxt-link>

                      <nuxt-link :to="{ name: item.type+'-id', params: { id: item.id }}" class="btn btn-dark btn-download ml-md-2 hide-mobile">
                        توضیحات
                        <i class="icon-info" />
                      </nuxt-link>
                      <a href="" class="btn btn-dark btn-icon hide-mobile" @click.prevent="ADD_WATCHLIST(item.id, item.type, index, item.is_watchlist)">
                        <i :class="{ 'icon-bookmark-empty': !item.is_watchlist,'icon-bookmark': item.is_watchlist==1 }" />
                      </a>
                      <a href="" class="text-invert show-mobile" @click.prevent="ADD_WATCHLIST(item.id, item.type, index, item.is_watchlist)">
                        <i :class="{ 'icon-bookmark-empty': !item.is_watchlist,'icon-bookmark': item.is_watchlist==1 }" />
                        <div v-if="item.is_watchlist==1">حذف از لیست</div>
                        <div v-else>بعدا می بینم</div>
                      </a>
                    </div>
                  </div>
                  <div class="thumbnail hide-mobile">
                    <nuxt-link :to="{ name: item.type+'-id', params: { id: item.id }}">
                      <b-img v-bind="{fluidGrow: true,blank: true,blankColor: '#bbb',width: 207,height: 307,show:true}" :src="'https://thumb.upera.shop/thumb?w=207&h=307&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name" class="thumbnail" />

                      <!-- <img loading="lazy" data-back="/images/207x307.png" class="thumbnail" :src="'https://thumb.upera.shop/thumb?w=207&h=307&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster"> -->
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
        <div dir="rtl">
          <div class="swiper-next swiper-button-next main-slideshow-next" @click="showPrev" />
          <div class="swiper-prev swiper-button-prev main-slideshow-prev" @click="showNext" />
        </div>
      </div>
    </section>

    <div v-for="(list, rootindex) in data.data" :key="rootindex">
      <div v-if="list.style == 'occasion' && list.data.length > 0">
        <section id="special" class="mb-5">
          <div class="container-fluid">
            <div class="special d-flex flex-column justify-content-start align-items-start align-items-lg-center flex-lg-row">
              <h4 class="font-weight-bold text-nowrap mr-lg-5 mb-4 mb-lg-0 special-title">
                {{ ChooseLang(list.list_en,list.list_fa) }}
              </h4>
              <div class="position-relative w-full">
                <div id="special-slides" class="special-slides">
                  <div v-for="(item,index) in list.data" :key="index" class="special-slide" :class="{ active: index==0 }">
                    <div class="d-flex justify-content-start w-full special">
                      <img class="special-image spec-1" :src="'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                      <div class="special-content d-flex flex-column justify-content-between justify-content-lg-around align-items-end w-full">
                        <div class="d-flex justify-content-between w-full">
                          <div class=" ml-2 ml-lg-5">
                            <h6 class="font-weight-bold mb-0 d-lg-none">
                              {{ truncate(ChooseLang(item.name,item.name_fa),15 ) }}
                            </h6>
                            <h5 class="font-weight-bold mb-0 d-none d-lg-block">
                              {{ ChooseLang(item.name,item.name_fa) }}
                            </h5>                        
                            <p class="mt-1 font-weight-normal">
                              <span v-for="(item2,index2) in ChooseLangAllGenres(item.genre)" :key="index2">{{ item2.title }}<span v-if="index2+1 < ChooseLangAllGenres(item.genre).length"> | </span></span>
                            </p>
                          </div>
                          <div class="d-flex flex-column justify-content-center align-items-center small">
                            <nuxt-link :to="{ name: 'lists-list', params: { list: list.occasion }}">
                              {{ $t('new.show_all') }}
                            </nuxt-link>
                            <img src="@/assets/img/more.svg" height="3" alt="">
                          </div>
                        </div>
                        <div class="d-flex justify-content-between w-full">
                          <p class="d-lg-none">
                            {{ truncate( ChooseLang(item.overview,item.overview_fa),60 ) }}
                          </p>
                          <p class="d-none d-lg-block text-justify ml-2 ml-lg-5">
                            {{ ChooseLang(item.overview,item.overview_fa) }}
                          </p>
                        </div>

                        <nuxt-link v-if="item.type=='movie'" :to="{ name: 'movie-id', params: { id: item.id }}" class="show-btn small">
                          <span>نمایش</span>
                          <img class="ml-2" src="@/assets/img/play.svg" alt="">
                        </nuxt-link>
                        <nuxt-link v-else-if="item.type=='episode'" :to="{ name: 'episode-id', params: { id: item.id }}" class="show-btn small">
                          <span>نمایش</span>
                          <img class="ml-2" src="@/assets/img/play.svg" alt="">
                        </nuxt-link>
                        <nuxt-link v-else :to="{ name: 'series-id', params: { id: item.id }}" class="show-btn small">
                          <span>نمایش</span>
                          <img class="ml-2" src="@/assets/img/play.svg" alt="">
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div v-else-if="list.data.length > 0 ">
        <section class="horizontal-list-container  mt-5 reach-begin">
          <div class="d-flex justify-content-between align-items-center mb-2 container-fluid">
            <h4 class="font-weight-bold">
              {{ ChooseLang(list.list_en,list.list_fa) }}
              <!--               <small v-if="list.type === 'Movies'" class="text-muted"> - {{ $t('home.movies') }} </small>
              <small v-else class="text-muted"> - {{ $t('home.series') }} </small> -->
            </h4>
            <nuxt-link :to="{ name: 'lists-list', params: { list: list.list.toLowerCase() }}" class="mb-1">
              {{ $t('new.show_all') }}
              <img src="@/assets/img/more.svg" height="3" alt="">
            </nuxt-link>
          </div>
          <div v-swiper:[rootindex]="swiperOption" class="swiper-container newset-slider2">
            <div class="swiper-wrapper py-1">
              <div v-for="(item, index) in list.data" :key="index" class="swiper-slide" :class="{'movielabel':item.type=='movie'}">
                <nuxt-link :to="{ name: item.type+'-id', params: { id: item.id }}" :class="{'is-series': item.type!='movie'}">
                  <b-img v-bind="{fluidGrow: true,blank: true,blankColor: '#bbb',width: 142,height: 212,show:true}" :src="'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name" />
                  <b-img v-if="item.type!='movie'" v-bind="{fluidGrow: true,blank: true,blankColor: '#bbb',width: 142,height: 212,show:true}" :src="'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name" />
                  <b-img v-if="item.type!='movie'" v-bind="{fluidGrow: true,blank: true,blankColor: '#bbb',width: 142,height: 212,show:true}" :src="'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name" />
                  <!--                   <img loading="lazy" data-back="/images/142x212.png" :src="'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                  <img v-if="item.type!='movie'" loading="lazy" data-back="/images/142x212.png" :src="'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                  <img v-if="item.type!='movie'" loading="lazy" data-back="/images/142x212.png" :src="'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name"> -->
                  <span v-if="!item.ir && item.persian" class="label label-rounded label-red label-1">دوبله</span>
                  <span v-if="!item.ir && !item.persian" class="label label-rounded label-warning label-1">زیرنویس</span>
                  <span v-if="item.free && $config.envname=='upera'" class="label label-blue label-2" :class="{'label-rotated':item.type=='movie'}">رایگان</span>
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
          </div>
        </section>
      </div>
      <section v-if="rootindex==0 && data.recently!==null" id="watching" class="horizontal-list-container mt-lg-4 pt-5">
        <div class="d-flex align-items-center justify-content-between w-full">
          <h4 class="font-weight-bold text-nowrap mr-5 px-5 in-watching">
            {{ ChooseLang(data.titles_en.recently,data.titles.recently) }}
          </h4>
          <div v-swiper:watchSwip="swiperOption2" class="swiper-container watching-slider">
            <div class="swiper-wrapper">
              <!-- Slides -->
              <div v-for="(item,index) in data.recently" :key="index" class="swiper-slide">
                <nuxt-link v-if="item.type=='movie'" :to="{ name: 'movie-show-id', params: { id: item.id }}">
                  <b-img v-bind="{fluidGrow: true,blank: true,blankColor: '#bbb',width: 364,height: 190,show:true}" :src="'https://thumb.upera.shop/thumb?w=364&h=190&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+item.backdrop" :alt="item.name" />

                  <!-- <img loading="lazy" data-back="/images/364x190.png" :src="'https://thumb.upera.shop/thumb?w=364&h=190&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+item.backdrop" :alt="item.name"> -->
                </nuxt-link>
                <nuxt-link v-else-if="item.type=='episode'" :to="{ name: 'episode-show-id', params: { id: item.id }}">
                  <b-img v-bind="{fluidGrow: true,blank: true,blankColor: '#bbb',width: 364,height: 190,show:true}" :src="'https://thumb.upera.shop/thumb?w=364&h=190&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+item.backdrop" :alt="item.name" />
                  <!-- <img loading="lazy" data-back="/images/364x190.png" :src="'https://thumb.upera.shop/thumb?w=364&h=190&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+item.backdrop" :alt="item.name"> -->
                </nuxt-link>
                <nuxt-link v-else :to="{ name: 'series-show-id', params: { id: item.id }}">
                  <b-img v-bind="{fluidGrow: true,blank: true,blankColor: '#bbb',width: 364,height: 190,show:true}" :src="'https://thumb.upera.shop/thumb?w=364&h=190&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+item.backdrop" :alt="item.name" />
                  <!-- <img loading="lazy" data-back="/images/364x190.png" :src="'https://thumb.upera.shop/thumb?w=364&h=190&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+item.backdrop" :alt="item.name"> -->
                </nuxt-link>
                <div class="progress">
                  <div class="progress-bar" :style="'width: '+(item.current_time/item.duration_time)*100+'%'" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <client-only>
      <infinite-loading v-if="data.last_page > 1" @infinite="infiniteHandler">
        <span slot="no-more" />
        <span slot="no-results" />
      </infinite-loading>
    </client-only>
  </div>
</template>
<script>
  import InfiniteLoading from 'vue-infinite-loading'
    export default {
        components: {
            InfiniteLoading
        },
  filters: {
    // Cut word
    truncate(string, value) {
    	if(string.length>value)
      return string.substring(0, value) + "..."
  		else
  			return string
    }
  },
  async asyncData (context) {
  	let res

  	if (context.app.$auth.loggedIn) {
  	    res = await context.app.$axios.get('/get/discoverV2')
  	 }else{
  	 	res = await context.app.$axios.get('/ghost/get/discoverV2')
  	 }
    return {data:res.data.data}
  },
    data () {
      return {
      	data:{},
      page: 1,
      distance: -Infinity,
      userApi:'/get/discoverV2',
      ghostApi:'/ghost/get/discoverV2',
        swiperOption: {
        spaceBetween: 10,
        slidesPerView: 3.3,
        grabCursor: true,
        setWrapperSize: true,
        threshold: 2,
        countdown: {},
        breakpoints: {
            200: {
                slidesPerView: 2.5,
            },
            420: {
                slidesPerView: 3.5,
            },
            768: {
                slidesPerView: 4.5,
            },
            992: {
                slidesPerView: 5.5,
            },
            1024: {
                slidesPerView: 6.5,
            },
            1200: {
                slidesPerView: 7,
            },
            1420: {
                slidesPerView: 8,
            },
            1670: {
                slidesPerView: 9,
            },

        },
        },
        swiperOption3: {
 "dots": false,
 "arrows": false,
  "infinite": true,
  "speed": 500,
  "slidesToShow": 1,
  "slidesToScroll": 1,
  "touchThreshold": 10,
  "autoplay": true
        },
        swiperOption2: {
        slidesPerView: 2.5,
        spaceBetween: 10,
        grabCursor: true,
        watchOverflow: true,
        threshold: 2,
        breakpoints: {
            320: {
                slidesPerView: 1.5,
            },
            768: {
                slidesPerView: 2.5,
            },
            992: {
                slidesPerView: 2.5,
            },
            1024: {
                slidesPerView: 3.5,
            },
            1420: {
                slidesPerView: 4.5,
            },
            1670: {
                slidesPerView: 4.5,
            },

        }
        }
      }
    },

    destroyed () {
if(this.data.occasions!=null){
  let specials=document.getElementsByClassName('special-slides')
  let k=specials.length
  if(k){
    window.removeEventListener('resize', this.specialsize)

  }
}
  },
    mounted() {


      

    	if(this.data.recently!=null){
    	    const watching = document.getElementById("watching")
    	if(watching){
    this.watchSwip.on('reachBeginning', () => {
        watching.classList.remove('swipe')
    })
    this.watchSwip.on('fromEdge', () => {
        watching.classList.add('swipe')
    })
  }
}




if(this.data.occasions!=null){



  let specials=document.getElementsByClassName('special-slides')
  let k=specials.length
  var spec

  if(k){

    window.addEventListener('resize', this.specialsize)
    var h=0
    var cur = 0
    var count=0
    var curr
    var l
    var s
    var na

    for (var i = 0; i < k; i++) {
      spec = specials[i].getElementsByClassName('special-slide')
      count=spec.length
      if(count){
        h=h+spec[0].offsetHeight

        cur = 0

        na=0
        for (l = 0; l < count; l++) {
          if(spec[l].classList.contains("active")===false){
            spec[l].getElementsByClassName('special-image')[0].style.transform=`translate3d(-${na * 5}px, ${na * 5}px, 0)`
            spec[l].getElementsByClassName('special-image')[0].style.zIndex=na
            na++
          }else{
            spec[l].getElementsByClassName('special-image')[0].style.transform='translate3d(-15px, 15px, 0)'
            spec[l].getElementsByClassName('special-image')[0].style.zIndex=9
          }
        }

        setInterval(function () {
            spec[cur].classList.remove('active')
            cur = (cur + 1) % count
            spec[cur].classList.add('active')

            spec[cur].getElementsByClassName('special-image')[0].style.transform='translate3d(-15px, 15px, 0)'
            spec[cur].getElementsByClassName('special-image')[0].style.zIndex=9

            curr = cur
            na=0
            for (s = 0; s < count; s++) {
              if(spec[s].classList.contains("active")===false){
                curr = (cur + (na + 1)) % count
                spec[curr].getElementsByClassName('special-image')[0].style.transform=`translate3d(${- na * 5}px, ${na * 5}px, 0)`
                spec[curr].getElementsByClassName('special-image')[0].style.zIndex= na + 1
                na++
              }
            }
        }, 3000)

      }
    }

    document.getElementById('special').style.height=(h+20)+'px'

  }

}
    },
  methods: {
    ChooseLang(en,fa){
        if(fa && this.$i18n.locale=="fa")
            return fa
        else
            return en.charAt(0).toUpperCase() + en.slice(1)
    },
    ChooseLangGenres(genre){
        if(this.$i18n.locale=="fa"){
            return this.$i18n.t(`home.${genre.toLowerCase()}`)
        }else
           return genre.toUpperCase(genre) 
    },
    ChooseLangAllGenres(genres){
          if(!genres){
            return null
          }

          genres=genres.split(',')

          if(!Array.isArray(genres)){
            genres=[genres]
          }

          var key = 0, len = genres.length
          var genres2 =[]

        if(this.$i18n.locale=="fa"){
            const mm=this
            for (key = 0; key < len; key++) {
              genres2[key] = {genre:genres[key].toLowerCase(),title:mm.$i18n.t(`home.${genres[key].toLowerCase()}`)}
            }
            return genres2
        }else{
            for (key = 0; key < len; key++) {
              genres2[key] = {genre:genres[key].toLowerCase(),title:genres[key]}
            }
            return genres2
        }
    },
    truncate(string, value) {
      return string.substring(0, value) + "..."
    },

      showNext() {
        this.$refs.carousel.next()
      },

      showPrev() {
        this.$refs.carousel.prev()
      },
    // Add new like or delete it
    // Params type1 detected if add or delete
    ADD_WATCHLIST(id, type, index, is_watchlist) {
        if (this.$auth.loggedIn) {

      if (is_watchlist==0) {
        // Add true to data array
        this.data.top[index].is_watchlist = 1
      } else {
        // Add false to data array
        this.data.top[index].is_watchlist = 0

      }

      this.$axios.post('/create/watchlist', {id,type})
                } else {
                    this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})

                }
                
    },
    specialsize(e){
      let specials=document.getElementsByClassName('special-slides')
      let k=specials.length
      var spec

      if(k){
        var h=0
        for (var i = 0; i < k; i++) {
          spec = specials[i].getElementsByClassName('special-slide')
          if(spec.length)
            h=h+spec[0].offsetHeight
        }

        document.getElementById('special').style.height=(h+20)+'px'
      }
      return e
    },

               infiniteHandler($state) {
                var apiurl
                if (this.$auth.loggedIn) {
                        apiurl=this.userApi
                } else {
                        apiurl=this.ghostApi
                }
                    this.$axios.get(apiurl,{params: {discover_page: this.page + 1}}).then(response => {

                        if (response.status === 200) {
                            if (response.data.data.data.length) {
                              this.data.data = this.data.data.concat(response.data.data.data)
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
  }
  }
</script>