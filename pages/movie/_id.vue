<template>
  <div>
    <section id="movie">
      <div class="banner mt-5">
        <div class="banner_container">
          <img :src="'https://thumb.contentpanel.click/thumb?w=1920&h=938&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+ChooseLang(data.movie.backdrop,data.movie.backdrop_fa)" :alt="data.movie.name">

          <a class="back" @click.prevent="hasHistory() ? $router.go(-1) : $router.push('/')">
            <img src="@/assets/img/icons/arrow-back.svg" width="30" alt="">
          </a>
        </div>


        <div class="content px-3 px-lg-5">
          <div class="d-flex justify-content-between align-items-end w-full srmshadow">
            <div class="d-flex detail">
              <div class="poster film_poster">
                <img :src="'https://thumb.contentpanel.click/thumb?w=272&h=404&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+data.movie.poster" :alt="data.movie.name">
                <img :class="{ active: data.movie.is_watchlist==1 }" class="viedomark" src="@/assets/img/icons/videomark.svg" @click="ADD_WATCHLIST(data.movie.id, 'movie', 'delete')">
                <img :class="{ active: !data.movie.is_watchlist }" class="viedomark" src="@/assets/img/icons/videomark-o.svg" @click="ADD_WATCHLIST(data.movie.id, 'movie', 'add')">
              </div>
              <div class="d-flex flex-column align-items-start pl-2 pl-lg-4 titles">
                <!--  mt-2  -->
                <h5 class="font-weight-bold mt-lg-4">
                  {{ ChooseLang(data.movie.name,data.movie.name_fa) }}
                </h5>
                <b class="mt-3 mt-lg-2">{{ ChooseLangAllGenres(data.movie.genre) }}</b>
                <p class="mt-3 mt-lg-5">
                  {{ data.movie.year }}
                </p>
              </div>
            </div>
            <div class="ranking d-flex flex-column justify-content-center align-items-end">
              <small class="mb-1">{{ data.movie.runtime }} {{ $t('new.minutes') }}</small>
              <span>{{ data.movie.age }}</span>
              <div class="d-flex justify-content-center align-items-center mb-2 mb-lg-4">
                <b class="font-weight-bold mr-1 mt-1 mr-lg-2 text-white pt-lg-2 mt-lg-0 small">{{ data.movie.rate }}</b>
                <img src="@/assets/img/imdb.png" height="25">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row description p-5 mt-2 p-lg-5 p-md-3">
        <div class="preview-btn preview-btn2 px-3 d-md-block d-none">
          <button v-if="MainButton" class="btn btn-primary rounded-pill btn-inline py-2 px-5" style="width: 250px;" @click="PLAY()">
            <span v-if="MainButton==9"><i class="fa fa-play pr-2 " /><span>نمایش</span></span>
            <span v-else-if="MainButton==1"><i class="fa fa-play pr-2 " /><span>خرید</span></span>
            <span v-else-if="MainButton==2"><i class="fa fa-play pr-2 " /><span>پیش خرید</span></span>
            <span v-else-if="MainButton==3"><i class="fa fa-play pr-2 " /><span>خرید اشتراک</span></span>
            <span v-else-if="MainButton==4"><i class="fa fa-play pr-2 " /><span>خرید بلیط</span></span>
            <span v-else-if="MainButton==5"><i class="fa fa-play pr-2 " /><span>پیش خرید بلیط</span></span>
            <span v-else-if="MainButton==6"><i class="fa fa-play pr-2 " /><span>به زودی</span></span>
            <span v-else-if="MainButton==7"><i class="fa fa-play pr-2 " /><span>presale ساعت مانده تا نمایش</span></span>
            <span v-else-if="MainButton==8"><i class="fa fa-play pr-2 " /><span>خرید امکان نمایش</span></span>
          </button>
          <button v-if="DownloadButton" class="btn btn-secondary rounded-pill btn-inline py-2 px-5" style="width: 200px; margin-right: 8px;" @click="ftb=false;DOWNLOAD_MODAL_LOAD();">
            <span v-if="DownloadButton==1"><i class="fa fa-download pr-2 " /><span>دانلد</span></span>
            <span v-else-if="DownloadButton==2"><i class="fa fa-download pr-2 " /><span>دانلود رایگان</span></span>
            <span v-else-if="DownloadButton==3"><i class="fa fa-download pr-2 " /><span>خرید و دانلود</span></span>
            <span v-else-if="DownloadButton==4"><i class="fa fa-download pr-2 " /><span>پیش خرید و دانلود</span></span>
          </button>
        </div>
        <div class="col-12 mt-5" :class="{ 'col-lg-7': (data.files.teaser === 1)}">
          <h6 class="mt-lg-4 mt-4">
            {{ $t('new.story') }}
          </h6>
          <p>
            {{ ChooseLang(data.movie.overview,data.movie.overview_fa) }}
          </p>
          <div v-if="data.files.teaser === 1" class="d-none d-lg-block">
            <h6 class="mt-2">
              {{ $t('show.similar') }}
            </h6>

    
            <div v-swiper:similar="swiperOption2" class="newset-slider">
              <div class="swiper-wrapper py-3">
                <!-- Slides -->


                <div v-for="(item, index) in data.similar" :key="index" class="swiper-slide">
                  <nuxt-link :to="{ name: 'movie-id', params: { id: item.id }}">
                    <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                  </nuxt-link>
                  <div class="mt-2 font-weight-bold">
                    <h5 class="mt-2 small font-weight-normal">
                      {{ ChooseLang(item.name,item.name_fa) }}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="d-none d-lg-block">
            <h6 class="mt-4">
              {{ $t('show.similar') }}
            </h6>

    
            <div v-swiper:similar="swiperOption" class="newset-slider">
              <div class="swiper-wrapper py-3">
                <!-- Slides -->


                <div v-for="(item, index) in data.similar" :key="index" class="swiper-slide">
                  <nuxt-link :to="{ name: 'movie-id', params: { id: item.id }}">
                    <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                  </nuxt-link>
                  <div class="mt-2 font-weight-bold">
                    <h5 class="mt-2 small font-weight-normal">
                      {{ ChooseLang(item.name,item.name_fa) }}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--           <a id="show-more" href="#" class="d-lg-none">
            <span>نمایش بیشتر</span>
            <i class="fas fa-angle-down" />
          </a> -->
          <div class="preview-btn px-3 mb-2 d-md-none d-block">
            <button v-if="MainButton" class="btn btn-primary rounded-pill btn-block py-2 px-5" @click="PLAY()">
              <span v-if="MainButton==9"><i class="fa fa-play pr-2 " /><span>نمایش</span></span>
              <span v-else-if="MainButton==1"><i class="fa fa-play pr-2 " /><span>خرید</span></span>
              <span v-else-if="MainButton==2"><i class="fa fa-play pr-2 " /><span>پیش خرید</span></span>
              <span v-else-if="MainButton==3"><i class="fa fa-play pr-2 " /><span>خرید اشتراک</span></span>
              <span v-else-if="MainButton==4"><i class="fa fa-play pr-2 " /><span>خرید بلیط</span></span>
              <span v-else-if="MainButton==5"><i class="fa fa-play pr-2 " /><span>پیش خرید بلیط</span></span>
              <span v-else-if="MainButton==6"><i class="fa fa-play pr-2 " /><span>به زودی</span></span>
              <span v-else-if="MainButton==7"><i class="fa fa-play pr-2 " /><span>presale ساعت مانده تا نمایش</span></span>
              <span v-else-if="MainButton==8"><i class="fa fa-play pr-2 " /><span>خرید امکان نمایش</span></span>
            </button>
            <button v-if="DownloadButton" class="btn btn-secondary rounded-pill btn-block py-2 px-5" @click="ftb=false;DOWNLOAD_MODAL_LOAD();">
              <span v-if="DownloadButton==1"><i class="fa fa-download pr-2 " /><span>دانلد</span></span>
              <span v-else-if="DownloadButton==2"><i class="fa fa-download pr-2 " /><span>دانلود رایگان</span></span>
              <span v-else-if="DownloadButton==3"><i class="fa fa-download pr-2 " /><span>خرید و دانلود</span></span>
              <span v-else-if="DownloadButton==4"><i class="fa fa-download pr-2 " /><span>پیش خرید و دانلود</span></span>
            </button>
          </div>
        </div>

        <div v-if="data.files.teaser === 1" class="col-12 col-lg-5 mt-md-5 mt-2">
          <h6 class="mt-lg-4 mt-3">
            {{ $t('show.trailer') }}
          </h6>
          <p>
            <a href="" class="position-relative" @click.prevent="GET_FILE(1);">
              <i class="far fa-2x fa-play-circle"
                 style="color: white; position: absolute; top: 45%; left: 45%;"
              />
              <img :src="'https://thumb.contentpanel.click/thumb?w=1920&h=1200&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+Chooseback(data.movie.backdrop_teaser,data.movie.backdrop)" class="img-fluid" :alt="'تیزر '+data.movie.name_fa">
            </a>
          </p>
        </div>
      </div>
    </section>

    <section id="newset" class="reach-begin d-block d-lg-none" :class="{ 'mt-4': (data.files.teaser === 0),'mt-3': (data.files.teaser === 1)}">
      <div class="d-flex align-items-center justify-content-between w-full px-3 pr-lg-5 pl-lg-5">
        <h4 class="font-weight-bold mb-0 head-title">
          {{ $t('show.similar') }}
        </h4>
      </div>
      <div v-swiper:similarSwiper="swiperOption" class="pr-1 newset-slider">
        <div class="swiper-wrapper py-4">
          <!-- Slides -->


          <div v-for="(item, index) in data.similar" :key="index" class="swiper-slide">
            <nuxt-link :to="{ name: 'movie-id', params: { id: item.id }}">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
            </nuxt-link>
            <div class="mt-2 font-weight-bold">
              <h5 class="mt-2 small font-weight-normal">
                {{ ChooseLang(item.name,item.name_fa) }}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section v-if="data.showtabs" class="container-fluid p-5 mt-2 p-lg-5 p-md-3 movie_tab_container">
      <div id="movie-tabs" class="border-top border-dark nav_tabContent">
        <div class="nav mt-3" role="tablist">
          <b-tabs content-class="mt-4" class="col-12">
            <b-tab v-if="data.casts !== null || data.directors !== null || data.producers !== null" :title="$t('new.casts')">
              <div id="actor" class="mt-2">
                <div class="container-fluid pl-md-0 pr-md-0 row_actor_movie_container">
                  <div v-show="data.casts !== null" class="row row_actor_movie">
                    <div v-for="(item, index) in data.casts" :key="index" class="col-4 col-xl-1 col-md-2 col-sm-3 mt-2 mt-lg-4">
                      <nuxt-link :to="{ name: 'cast-id', params: { id: item.id }}" class="actor">
                        <img :src="'https://thumb.contentpanel.click/thumb?w=141&h=214&q=100&a=c&src=https://cdn.upera.shop/s3/casts/'+item.image" :alt="item.name">
                        <span class="block">{{ ChooseLang(item.name,item.name_fa) }}</span>
                      </nuxt-link>
                    </div>
                  </div>
                  <hr v-show="data.casts !== null && (data.directors !== null || data.producers !== null)">
                  <div v-show="data.directors !== null || data.producers !== null" class="mt-md-2 small font-weight-bold">
                    <h6 v-show="data.casts !== null">
                      {{ $t('new.other_casts') }}
                    </h6>
                    <p v-show="data.directors !== null" class="font-weight-normal">
                      {{ $t('show.director') }}: <span v-for="(item, index) in data.directors" :key="index"><nuxt-link :to="{ name: 'cast-id', params: { id: item.id }}"> {{ ChooseLang(item.name,item.name_fa) }} </nuxt-link><span v-if="index+1 < data.directors.length">, </span></span>
                    </p>
                    <p v-show="data.producers !== null" class="font-weight-normal">
                      {{ $t('show.producer') }}: <span v-for="(item, index) in data.producers" :key="index"><nuxt-link :to="{ name: 'cast-id', params: { id: item.id }}"> {{ ChooseLang(item.name,item.name_fa) }} </nuxt-link><span v-if="index+1 < data.producers.length">, </span></span>
                    </p>     
                    <p v-show="data.writers !== null" class="font-weight-normal">
                      {{ $t('show.writer') }}: <span v-for="(item, index) in data.writers" :key="index"><nuxt-link :to="{ name: 'cast-id', params: { id: item.id }}"> {{ ChooseLang(item.name,item.name_fa) }} </nuxt-link><span v-if="index+1 < data.writers.length">, </span></span>
                    </p> 
                    <p v-show="data.investors !== null" class="font-weight-normal">
                      {{ $t('show.investor') }}: <span v-for="(item, index) in data.investors" :key="index"><nuxt-link :to="{ name: 'cast-id', params: { id: item.id }}"> {{ ChooseLang(item.name,item.name_fa) }} </nuxt-link><span v-if="index+1 < data.investors.length">, </span></span>
                    </p>                 
                  </div>
                </div>
              </div>
            </b-tab>
            <b-tab v-if="data.movie.news !== null" :title="$t('comment.comments')+' ('+data.movie.comm_num+')'">
              <div class="input-group search-field my-4 insert_comment">
                <!--autofocus-->
                <input class="form-control border-left-0 border shadow-none" type="search"
                       placeholder="نظر شمادر مورد این فیلم چیست؟"
                >
                <button class="btn rounded-pill btn-sm btn-secondary btn-send-comment">
                  {{ $t('comment.send_comment') }}
                </button>
              </div>
              <div id="comments">
                <div class="d-flex comment mb-3">
                  <div class="avatar">
                    <img src="@/assets/img/avatar.png" alt="">
                  </div>
                  <div class="d-flex flex-column align-items-start ml-2 ml-lg-4 border-bottom">
                    <b class="mb-2 comment-title">سید امیر تقی آبادی</b>
                    <p class="comment-text">
                      این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک
                      میکند تا این عزیزان با
                      بهره
                    </p>
                  </div>
                </div>
                <div class="d-flex comment mb-3">
                  <div class="avatar">
                    <img src="@/assets/img/avatar.png" alt="">
                  </div>
                  <div class="d-flex flex-column align-items-start ml-2 ml-lg-4 border-bottom">
                    <b class="mb-2 comment-title">سید امیر تقی آبادی</b>
                    <p class="comment-text">
                      بهره
                      گیری از این نوشته دستی و آزمایشی بتوانند نمونه تکمیل شده از پروژه و طرح خودشان
                      به
                      کارفرما نمایش دهند
                    </p>
                  </div>
                </div>
                <div class="d-flex comment mb-3">
                  <div class="avatar">
                    <img src="@/assets/img/avatar.png" alt="">
                  </div>
                  <div class="d-flex flex-column align-items-start ml-2 ml-lg-4">
                    <b class="mb-2 comment-title">سید امیر تقی آبادی</b>
                    <p class="comment-text">
                      این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک
                      میکند تا این عزیزان با
                      بهره
                      گیری از این نوشته دستی و آزمایشی بتوانند نمونه تکمیل شده از پروژه و طرح خودشان
                    </p>
                  </div>
                </div>
              </div>
            </b-tab>
            <b-tab v-if="data.files.backstage === 1" title="پشت صحنه">
              <div class="row">
                <div class="col-lg-6 mb-2">
                  <a href="" class="position-relative" @click.prevent="GET_FILE(2);">
                    <i class="far fa-2x fa-play-circle"
                       style="color: white; position: absolute; top: 45%; left: 45%;"
                    />
                    <img :src="'https://thumb.contentpanel.click/thumb?w=1920&h=1200&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+Chooseback(data.movie.backdrop_teaser,data.movie.backdrop)" class="img-fluid" :alt="'تیزر '+data.movie.name_fa">
                  </a>
                </div>
              </div>
            </b-tab>
            <b-tab v-if="data.files.image === 1" title="گالری">
              <div class="mansory">
                <no-ssr v-if="data.movie.images">
                  <LightGallery ref="lightbox" :images="data.movie.images" />
                </no-ssr>
                <no-ssr v-else-if="lightimages">
                  <LightGallery ref="lightbox" :images="lightimages" />
                </no-ssr>
              </div>
            </b-tab>
            <b-tab v-if="data.files.musicvideo === 1" title="موزیک ویدئو">
              <div class="row">
                <div class="col-lg-6 mb-2">
                  <a href="" class="position-relative" @click.prevent="GET_FILE(4);">
                    <i class="far fa-2x fa-play-circle"
                       style="color: white; position: absolute; top: 45%; left: 45%;"
                    />
                    <img :src="'https://thumb.contentpanel.click/thumb?w=1920&h=1200&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+Chooseback(data.movie.backdrop_teaser,data.movie.backdrop)" class="img-fluid" :alt="'تیزر '+data.movie.name_fa">
                  </a>
                </div>
              </div>
            </b-tab>
            <b-tab v-if="data.files.next === 1" title="آنچه در قسمت بعد خواهید دید">
              <div class="row">
                <div class="col-lg-6 mb-2">
                  <a href="" class="position-relative" @click.prevent="GET_FILE(3);">
                    <i class="far fa-2x fa-play-circle"
                       style="color: white; position: absolute; top: 45%; left: 45%;"
                    />
                    <img :src="'https://thumb.contentpanel.click/thumb?w=1920&h=1200&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+Chooseback(data.movie.backdrop_teaser,data.movie.backdrop)" class="img-fluid" :alt="'تیزر '+data.movie.name_fa">
                  </a>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </section>
    <Download :id="data.movie.id" :show="showDownloadModal" :ftb="ftb" :owned="data.movie.owned" :vod="data.movie.vod" :free="data.movie.free" :name="data.movie.name" :namefa="data.movie.name_fa" :posterf="data.movie.poster" :backdrop="data.movie.backdrop" type="movie" @hide-modal="HIDE_MODAL2" />
    <no-ssr>
      <File :id="data.movie.id" :show="showplyrmodal" :content="modalcontent" :name="data.movie.name" :namefa="data.movie.name_fa" :backdrop="data.movie.backdrop" :backdropteaser="data.movie.backdrop_teaser" type="movie" @hide-modal="HIDE_MODAL3" />
    </no-ssr>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import Download from "@/components/Download"
import File from "@/components/File"
    export default {
  components: {
    Download,
    File
  },

  async asyncData (context) {
  	let res
  	if (context.app.$auth.loggedIn) {
  	    res = await context.app.$axios.get('/get/movie/'+context.params.id)
  	 }else{
  	 	res = await context.app.$axios.get('/ghost/get/movie/'+context.params.id)
  	 }

     res.data.data.showtabs=1
     res.data.data.comments=0

  	 if(res.data.data.casts == null && res.data.data.directors == null && res.data.data.producers == null){
  	 	if(res.data.data.movie.news!== null){

         let comments
      	 if (context.app.$auth.loggedIn) {
      	   comments = await context.app.$axios.get('/get/comments/'+res.data.data.movie.news)
      	 }else{
      	   comments = await context.app.$axios.get('/ghost/get/comments/'+res.data.data.movie.news)
      	 }

         res.data.data.commentsData = comments.data.data.comments
         res.data.data.avatar=comments.data.data.avatar
         res.data.data.email=comments.data.data.email
         res.data.data.fullname=comments.data.data.name
         res.data.data.comments=1
  	 	}else{
  	 		if(res.data.data.files.backstage !== 1 && res.data.data.files.image === 1){
          let images
        	if (context.app.$auth.loggedIn) {
        	    images = await context.app.$axios.post('/get/files/', {
                          id: context.params.id,
                          content: 5,
                          hls: 1,
                          type: 'movie'
                      })
        	 }else{
        	 	  images = await context.app.$axios.post('/ghost/get/files/', {
                          id: context.params.id,
                          content: 5,
                          hls: 1,
                          type: 'movie'
                      })
        	 }

            res.data.data.images=images
  	 		}else if(res.data.data.files.musicvideo !== 1){
            res.data.data.showtabs=0
  	 		}
  	 	}
  	 }
    return {data:res.data.data}
  },
        computed: {
            ...mapGetters({showplyrmodal: "player/showplyrmodal"}),
            ...mapGetters({showDownloadModal: "player/showDownloadModal"})
        },
        data() {
            return {
            	data:{},
            	MainButton:0,
              ftb:false,
            	DownloadButton:0,
            	ShowPresale:0,
              modalcontent: 0,
        swiperOption: {
        spaceBetween: 10,
        slidesPerView: 3.3,
        grabCursor: true,
        setWrapperSize: true,
        threshold: 2,
        breakpoints: {
            768: {
                slidesPerView: 6.5,
            },
            992: {
                slidesPerView: 6.5,
            },
            1024: {
                slidesPerView: 7.5,
            },
            1420: {
                slidesPerView: 10.5,
            },
            1670: {
                slidesPerView: 11.5,
            },

        }
        },
        swiperOption2: {
        autoplay: {
            delay: 5800,
        },
        spaceBetween: 10,
        slidesPerView: 3.3,
        grabCursor: true,
        setWrapperSize: true,
        threshold: 2,
        breakpoints: {
            768: {
                slidesPerView: 3.5,
            },
            992: {
                slidesPerView: 3.5,
            },
            1024: {
                slidesPerView: 4.5,
            },
            1420: {
                slidesPerView: 5.5,
            },
            1670: {
                slidesPerView: 5.5,
            },

        }
        },
                castShow: null,
                rent_title: null,
                lightimages: [],
                collection: {
                    id: null,
                    poster: null,
                    name: null,
                    type: null,
                    index: null,
                },
                download: {
                    id: null,
                    poster: null,
                    name: null,
                    type: null,
                    index: null,
                },
                comments: {
                    post_id: null,
                    poster: null,
                    name: null
                }
            }
        },
        watch: {
            data() {
                if (this.data.movie.runtime <= 60) {
                    this.data.movie.runtime = this.data.movie.runtime + 'm'
                } else if (this.data.movie.runtime >= 60) {
                    const minutes = this.data.movie.runtime % 60
                    const hours = Math.floor(this.data.movie.runtime / 60)
                    this.data.movie.runtime = hours + 'h ' + minutes + 'm'
                }
                // Replice special characters

                this.data.movie.genre = this.data.movie.genre.replace(/-/g, ', ')
                // Set title

                if(this.$i18n.locale=="fa" && this.data.movie.name_fa)
                document.title = this.data.movie.name_fa
                else
                    document.title = this.data.movie.name


                if(this.data.movie.ekran===1){
                    if(this.data.movie.owned===1){
                        this.rent_title=this.$i18n.t('show.ekran')
                    }else{
                        this.rent_title=this.$i18n.t('show.buy_ticket')
                    }
                }else{
                    this.rent_title=this.$i18n.t('show.download')
                }
            }
        },
        mounted() {

                if(this.data.movie.free){

                  if(this.data.movie.vod || this.data.movie.owned){
          					this.MainButton=9
                  }else if(this.checkuser.subscription){
                    this.MainButton=3
                  }else{
                    this.MainButton=8
                  }
            		if(this.data.movie.upera && this.data.movie.download){
						      this.DownloadButton=2
            		}
                }else{
                	if(this.data.movie.ekran){
                		if(this.data.movie.upera){
							if(this.data.movie.presale){
								if(this.data.movie.owned){
									this.MainButton=7
								}else{
									this.MainButton=5
									this.ShowPresale=1
								}
							}else{
								if(this.data.movie.owned){
									this.MainButton=9
								}else{
									this.MainButton=4
								}
							}
                		}else{
                			this.MainButton=6
                		}
                	}else{
						if(this.data.movie.vod && this.checkuser.subscription){
							if(this.data.movie.presale){
								this.MainButton=6
								this.ShowPresale=1
							}else{
								if(this.checkuser.access || this.data.movie.owned){
									this.MainButton=9
								}else{
									this.MainButton=3
								}
							}
							if(this.data.movie.upera && this.data.movie.download && !this.data.movie.owned){
								if(this.data.movie.presale){
									this.DownloadButton=4
								}else{
									this.DownloadButton=3
								}
							}
						}else if(this.data.movie.upera && this.data.movie.download){
							if(this.data.movie.presale){
								if(this.data.movie.owned){
									this.MainButton=7
								}else{
									this.MainButton=2
									this.ShowPresale=1
								}
							}else{
								if(this.data.movie.owned){
									this.MainButton=9
									this.DownloadButton=1
								}else{
									this.MainButton=1
								}
							}
						}else{
							if(this.data.movie.presale){
								this.MainButton=7
							}else{
								this.MainButton=6
							}
						}
                	}
                }
        },

        methods: {
            PLAY() {
              if(this.MainButton==9){
                this.$router.push({ name: 'movie-show-id' , params: {id: this.data.movie.id }})
              }else if(this.MainButton==1 || this.MainButton==2 || this.MainButton==4 || this.MainButton==5 || this.MainButton==8){
                this.ftb=true
                this.$store.dispatch('player/DOWNLOAD_MODAL_LOAD')
              }
            },
            HIDE_MODAL2() {
              this.$store.dispatch('player/DOWNLOAD_MODAL_CLEAN')
            },
            HIDE_MODAL3() {
              this.$store.dispatch('player/PLAYER_MODAL_CLEAN')
            },
            ChooseLang(en,fa){
                if(fa && this.$i18n.locale=="fa")
                    return fa
                else
                    return en
            },
            Chooseback(teaser,backdrop){
                if(teaser)
                    return teaser
                else
                    return backdrop
            },
            ChooseLangAllGenres(genres){
                if(this.$i18n.locale=="fa"){
                    genres=genres.split(',')
                    if(Array.isArray(genres)){
                        const mm=this
                        genres.forEach(function( value, key ) {
                          genres[key]=mm.$i18n.t(`home.${value.toLowerCase()}`)
                        })
                        genres=genres.join(' - ')
                        return genres
                    }else if(genres !== null){
                        return this.$i18n.t(`home.${genres.toLowerCase()}`)
                    }else
                        return null
                }else
                    return genres
            },
            hasHistory () { return window.history.length > 2 },
			openimage (image) { this.$refs.lightbox.showImage(image) },

        fetchComments() {
        this.loading=true

        var api_url=''

        if(this.user)
          api_url='/api/v1/get/comments/'
        else
          api_url='/api/v1/ghost/get/comments/'

          this.$axios.get(api_url+ this.post_id).then((res) => {
            this.loading=false
            if(res.status === 200){
               this.commentsData = res.data.data.comments
               this.avatar=res.data.data.avatar
               this.email=res.data.data.email
               this.fullname=res.data.data.name
               // this.commentsData = _.orderBy(res.data, ['votes'], ['desc']);

               this.comments = 1
            }else{
              this.errorComment=res.data.message
            }
          }, (error) => {
            this.loading=false
            this.errorComment=error.response.data.message
          })

       },
 
       showComments(index) {
 
           if (!this.viewcomment[index]) {
 
               this.$set(this.show, index, "hide")
 
               this.$set(this.viewcomment, index, 1)
 
           } else {
 
               this.$set(this.show, index, "view")
 
               this.$set(this.viewcomment, index, 0)
 
           }
 
       },
 
       openComment(index) {
 
 
           if (this.commentBoxs[index]) {

               this.$set(this.commentBoxs, index, 0)

           } else {

               this.$set(this.commentBoxs, index, 1)

           }
 
       },
 
       replyCommentBox(index) {
 
 
           if (this.replyCommentBoxs[index]) {

               this.$set(this.replyCommentBoxs, index, 0)

           } else {

               this.$set(this.replyCommentBoxs, index, 1)

           }
 
           
 
       },
 
       saveComment() {
 
        if (this.message != null && this.message != ' ') {
          this.errorComment = null
          this.loading=true

        var api_url=''

        if(this.user)
          api_url='/api/v1/comments'
        else
          api_url='/api/v1/ghost/comments'

          this.$axios.post(api_url, {
             post_id: this.post_id,

             text: this.message,

             parent: 0,
             autor: this.fullname,
             email: this.email
          }).then((res) => {
            this.loading=false
            if(res.status === 200){
               if (res.data.status) {

                  this.commentsData.unshift({ "commentid": res.data.commentId, "name": res.data.autor, "comment": this.message, "votes": 0, "reply": 0, "photo_url": res.data.avatar, "vote_num": 0, "approve": 0, "replies": [] })

                   this.message = null

               }
            }else{
              this.errorComment=res.data.message
            }
          }, (error) => {
            this.loading=false
            this.errorComment=error.response.data.message
          })

        } else {
          this.errorComment = "لطفا نظر خود را وارد نمایید"
        }

       },
 
       replyComment(commentId, index) {
 
           if (this.message != null && this.message != ' ') {
 
               this.errorReply = null
 
            this.loading=true
        var api_url=''

        if(this.user)
          api_url='/api/v1/comments'
        else
          api_url='/api/v1/ghost/comments'

            this.$axios.post(api_url, {
               post_id: this.post_id,

               text: this.message,

               parent: commentId,
               autor: this.fullname,
               email: this.email
            }).then((res) => {
              this.loading=false
              if(res.status === 200){
                 if (res.data.status) {

                     if (!this.commentsData[index].reply) {

                         this.commentsData[index].replies.unshift({ "commentid": res.data.commentId, "name": res.data.autor, "comment": this.message, "votes": 0,"photo_url": res.data.avatar,"vote_num": 0,"approve": 0 })

                         this.commentsData[index].reply = 1

                         this.$set(this.replyCommentBoxs, index, 0)

                         this.$set(this.commentBoxs, index, 0)

                     } else {

                         this.commentsData[index].replies.unshift({ "commentid": res.data.commentId, "name": res.data.autor, "comment": this.message, "votes": 0,"photo_url": res.data.avatar,"vote_num": 0,"approve": 0 })

                         this.$set(this.replyCommentBoxs, index, 0)

                         this.$set(this.commentBoxs, index, 0)

                     }

                     this.message = null

                 }
              }else{
                this.errorReply=res.data.message
              }
            }, (error) => {
              this.loading=false
              this.errorReply=error.response.data.message
            })


 
           } else {
 
               this.errorReply = "لطفا نظر خود را وارد نمایید"
 
           }
 
       },

       GET_FILE(content) {
          this.modalcontent=content
          this.$store.dispatch('player/PLAYER_MODAL_LOAD')
       },
 
       voteComment(commentId, commentType, index, index2, voteType) {
 
            this.loading=true
 
         var api_url=''

        if(this.user)
          api_url='/api/v1/comments/'
        else
          api_url='/api/v1/ghost/comments/'

            this.$axios.post(api_url + commentId + '/vote', {
               vote: voteType
            }).then((res) => {
              this.loading=false
              if(res.status === 200){
                 if (res.data) {

                     if (commentType == 'directcomment') {

                         this.commentsData[index].vote=res.data.data.vote
                         this.commentsData[index].vote_num=res.data.data.vote_num
                         this.commentsData[index].votes=res.data.data.votes
                         this.commentsData[index].votedByUser=1

                     } else if (commentType == 'replycomment') {
                         this.commentsData[index].replies[index2].vote=res.data.data.vote
                         this.commentsData[index].replies[index2].vote_num=res.data.data.vote_num
                         this.commentsData[index].replies[index2].votes=res.data.data.votes
                         this.commentsData[index].replies[index2].votedByUser=1
                     }

                 }
              }
            }, (error) => {
              this.loading=false

              if (commentType == 'replycomment') {
                this.errorReply=error.response.data.message
              }else{
                this.errorComment=error.response.data.message
              }

            })
 
       },
		ADD_WATCHLIST(id, type, type1) {
		    if (this.$auth.loggedIn) {
		        if (type1 === 'add') {
		            this.data.movie.is_watchlist = 1
		        } else {
		            this.data.movie.is_watchlist = 0
		        }

	        	this.$axios.post('/create/watchlist', {id,type})
		    } else {
		        this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null})
		    }
		},
    DOWNLOAD_MODAL_LOAD() {
      this.$store.dispatch('player/DOWNLOAD_MODAL_LOAD')
    }
   }
}
</script>
<style scoped>
.namasha-embed{display:block;height:0;padding:0;overflow:hidden;padding-bottom:56.25%;}
</style>