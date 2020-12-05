<template>
  <div>
    <section id="movie">
      <div class="banner mt-5">
        <div class="banner_container">
          <img :src="data.cdn.cdn_backdrop+ChooseLang(data.movie.backdrop,data.movie.backdrop_fa)" :alt="data.movie.name">

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
                <img :class="{ active: data.movie.is_watchlist==0 }" class="viedomark" src="@/assets/img/icons/videomark-o.svg" @click="ADD_WATCHLIST(data.movie.id, 'movie', 'add')">
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
        <div class="preview-btn px-3 d-md-block  d-none">
          <button class="btn btn-primary rounded-pill btn-inline py-2 px-5" style="width: 250px;">
            <span v-if="MainButton==0"><i class="fa fa-play pr-2 " /><span>نمایش</span></span>
            <span v-else-if="MainButton==1"><i class="fa fa-play pr-2 " /><span>خرید</span></span>
            <span v-else-if="MainButton==2"><i class="fa fa-play pr-2 " /><span>پیش خرید</span></span>
            <span v-else-if="MainButton==3"><i class="fa fa-play pr-2 " /><span>خرید اشتراک</span></span>
            <span v-else-if="MainButton==4"><i class="fa fa-play pr-2 " /><span>خرید بلیط</span></span>
            <span v-else-if="MainButton==5"><i class="fa fa-play pr-2 " /><span>پیش خرید بلیط</span></span>
            <span v-else-if="MainButton==6"><i class="fa fa-play pr-2 " /><span>به زودی</span></span>
            <span v-else-if="MainButton==7"><i class="fa fa-play pr-2 " /><span>presale ساعت مانده تا نمایش</span></span>
          </button>
          <button class="btn btn-secondary rounded-pill btn-inline py-2 px-5" style="width: 200px; margin-right: 8px;">
            پیش نمایش فیلم
          </button>
          <button v-if="DownloadButton" class="btn btn-light rounded-pill btn-inline" style="width: 50px;">
            <span v-if="DownloadButton==1"><i class="fa fa-download pr-2 " /></span>
            <span v-else-if="DownloadButton==2"><i class="fa fa-download pr-2 " /></span>
          </button>
        </div>
        <div class="col-12 col-lg-7 mt-5">
          <h6 class="mt-lg-4 mt-5">
            {{ $t('new.story') }}
          </h6>
          <p>
            {{ ChooseLang(data.movie.overview,data.movie.overview_fa) }}
          </p>
          <div class="d-none d-lg-block">
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
          <!--           <a id="show-more" href="#" class="d-lg-none">
            <span>نمایش بیشتر</span>
            <i class="fas fa-angle-down" />
          </a> -->
          <div class="preview-btn px-3 d-lg-none">
            <button class="btn btn-primary rounded-pill btn-block py-2 px-5">
              <img src="@/assets/img/icons/play.svg"><span>نمایش فیلم</span>
            </button>
            <button class="btn btn-secondary rounded-pill btn-block py-2 px-5">
              پیش نمایش فیلم
            </button>
          </div>
        </div>

        <div class="col-12 col-lg-5 mt-5 pt-5 p-0">
          <div>
            <div class="modal-content border-0 modal_overlay shadow-none">
              <div class="tooltip1">
                <div class="top text-right">
                  <h6>مصرف اینترنت جهت دانلود قانونی نیم بها است</h6>
                  <i />
                </div>
              </div>
              <div class="modal-body p-0">
                <form>
                  <fieldset>
                    <table class="table text-right overlay_tbl">
                      <tbody>
                        <tr class="table-active tbl_color1">
                          <td>
                            480p
                            <span class="d-block font-weight-light">مناسب موبایل</span>
                          </td>
                          <td>
                            <span class="overlay_price font-weight-light"><span class="overlay_price_label position-relative"><i class="icon-toman" /></span><span>۴</span>.۰۰۰</span>
                            <span dir="ltr" class="d-block font-weight-light">583 mb</span>
                          </td>
                          <td class="box_sell_btn">
                            <a class="overlay_sell_btn sell_btn"><span class="btn_sell_cover">خرید</span>دانلود</a>
                          </td>
                        </tr>
                        <tr class="table-active tbl_color2">
                          <td>
                            480p
                            <span class="d-block font-weight-light">مناسب تبلت</span>
                          </td>
                          <td>
                            <span class="overlay_price font-weight-light"><span class="overlay_price_label position-relative"><i class="icon-toman" /></span><span>۴</span>.۵۰۰</span>
                            <span dir="ltr" class="d-block font-weight-light">978 mb</span>
                          </td>
                          <td class="box_sell_btn">
                            <a class="overlay_sell_btn sell_btn"><span class="btn_sell_cover">خرید</span>دانلود</a>
                          </td>
                        </tr>
                        <tr class="table-active tbl_color1">
                          <td>
                            1080p
                            <span class="d-block font-weight-light">مناسب لپ تاپ</span>
                          </td>
                          <td>
                            <span class="overlay_price font-weight-light"><span class="overlay_price_label position-relative"><i class="icon-toman" /></span><span>۵</span>.۰۰۰</span>
                            <span dir="ltr" class="d-block font-weight-light">1.1 GB</span>
                          </td>
                          <td class="box_sell_btn">
                            <a class="overlay_sell_btn sell_btn btn_sell_cover_active">دانلود</a>
                          </td>
                        </tr>
                        <tr class="table-active tbl_color2">
                          <td>
                            1080p-HQ
                            <span class="d-block font-weight-light">مناسب تلویزیون</span>
                          </td>
                          <td>
                            <span class="overlay_price font-weight-light"><span class="overlay_price_label position-relative"><i class="icon-toman" /></span><span>۶</span>.۰۰۰</span>
                            <span dir="ltr" class="d-block font-weight-light">2.23 GB</span>
                          </td>
                          <td class="box_sell_btn">
                            <a class="overlay_sell_btn sell_btn"><span class="btn_sell_cover">خرید</span>دانلود</a>
                          </td>
                        </tr>
                        <tr class="table-active tbl_color1">
                          <td>
                            BLURAY
                            <span class="d-block font-weight-light">مناسب سینمای خانگی</span>
                          </td>
                          <td>
                            <span class="overlay_price font-weight-light"><span class="overlay_price_label position-relative"><i class="icon-toman" /></span><span>۷</span>.۰۰۰</span>
                            <span dir="ltr" class="d-block font-weight-light">4.63 GB</span>
                          </td>
                          <td class="box_sell_btn">
                            <a class="overlay_sell_btn sell_btn"><span class="btn_sell_cover">خرید</span>دانلود</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p class="text-center overlay_p_faq">
                      جهت مدیریت دانلود ها Documents دریافت اپلیکیشن
                    </p>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="newset" class="mt-2 in-movie d-block d-lg-none">
      <div class="d-flex align-items-center justify-content-between w-full px-3 pr-lg-5 pl-lg-5">
        <h5 class="font-weight-bold mb-0 head-title">
          {{ $t('show.similar') }}
        </h5>
      </div>
      <div v-swiper:similarSwiper="swiperOption" class="newset-slider mr-2">
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
            <b-tab v-if="data.files.backstage !== null" title="پشت صحنه">
              <div class="row">
                <div class="col-lg-6 mb-2">
                  <a href="#" class="position-relative">
                    <i class="far fa-2x fa-play-circle"
                       style="color: white; position: absolute; top: 45%; left: 45%;"
                    />
                    <img src="@/assets/img/music-video.jpg" alt="">
                  </a>
                </div>
                <div class="col-lg-6 mb-2">
                  <a href="#" class="position-relative">
                    <i class="far fa-2x fa-play-circle"
                       style="color: white; position: absolute; top: 45%; left: 45%;"
                    />
                    <img src="@/assets/img/music-video.jpg" alt="">
                  </a>
                </div>
              </div>
            </b-tab>
            <b-tab v-if="data.files.image !== null" title="گالری">
              <div class="mansory">
                <a href="#">
                  <img src="@/assets/img/gallery/1.jpg" alt="">
                </a>
                <a href="#">
                  <img src="@/assets/img/gallery/2.jpg" alt="">
                </a>
                <a href="#">
                  <img src="@/assets/img/gallery/3.jpg" alt="">
                </a>
                <a href="#">
                  <img src="@/assets/img/gallery/4.jpg" alt="">
                </a>
                <a href="#">
                  <img src="@/assets/img/gallery/5.jpg" alt="">
                </a>
                <a href="#">
                  <img src="@/assets/img/gallery/6.jpg" alt="">
                </a>
                <a href="#">
                  <img src="@/assets/img/gallery/7.jpg" alt="">
                </a>
                <a href="#">
                  <img src="@/assets/img/gallery/8.jpg" alt="">
                </a>
                <a href="#">
                  <img src="@/assets/img/gallery/9.jpg" alt="">
                </a>
                <a href="#">
                  <img src="@/assets/img/gallery/10.jpg" alt="">
                </a>
              </div>
            </b-tab>
            <b-tab v-if="data.files.musicvideo !== null" title="موزیک ویدئو">
              <div class="row">
                <div class="col-lg-6 mb-2">
                  <a href="#" class="position-relative">
                    <i class="far fa-2x fa-play-circle"
                       style="color: white; position: absolute; top: 42%; left: 45%;"
                    />
                    <img src="@/assets/img/music-video.jpg" alt="">
                  </a>
                </div>
                <div class="col-lg-6 mb-2">
                  <a href="#" class="position-relative">
                    <i class="far fa-2x fa-play-circle"
                       style="color: white; position: absolute; top: 42%; left: 45%;"
                    />
                    <img src="@/assets/img/music-video.jpg" alt="">
                  </a>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </section>
    <Login v-if="!$auth.loggedIn" :show="showModal" :staticmodal="false" @hide-modal="HIDE_MODAL" />
  </div>
</template>
<script>
import Login from "@/components/Login"
    export default {
  components: {
    Login
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
        data() {
            return {
            	data:{},
            	MainButton:0,
            	DownloadButton:0,
            	ShowPresale:0,
      showModal: false,
        swiperOption: {
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
                showplyrmodal: false,
                lightimages: [],
                download_files: [],
                filesloading: false,
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

                if(this.data.files.teaser===1){
                    this.GET_FILE_TEASER()
                }

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
					this.MainButton=0
            		if(this.data.movie.upera && this.data.movie.download){
						this.DownloadButton=1
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
									this.MainButton=0
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
									this.MainButton=0
								}else{
									this.MainButton=3
								}
							}
							if(this.data.movie.upera && this.data.movie.download && !this.data.movie.owned){
								if(this.data.movie.presale){
									this.DownloadButton=2
								}else{
									this.DownloadButton=1
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
									this.MainButton=0
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
            HIDE_MODAL() {
              this.showModal=false
            },
            ChooseLang(en,fa){
                if(fa && this.$i18n.locale=="fa")
                    return fa
                else
                    return en
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
		        this.showModal=true
		    }
		}
   }
}
</script>