<template>
  <div>
    <div class="d-flex header-mobile d-md-none">
      <div class="show-mobile header-home w-full">
        <div class="px-3 h-full">
          <div class="row h-full align-items-center">
            <div class="col-6">
              <button v-if="!MainButton && DownloadButton" class="btn btn-main btn-block" @click="ftb=false;DOWNLOAD_MODAL_LOAD();">
                <span v-if="DownloadButton==1"><i class="fa fa-download pr-2 " /><span>دانلود</span></span>
                <span v-else-if="DownloadButton==2" class="smallsrm"><i class="fa fa-download pr-2 " /><span>دانلود رایگان</span></span>
                <span v-else-if="DownloadButton==3" class="smallsrm"><i class="fa fa-download pr-2 " /><span>خرید و دانلود</span></span>
                <span v-else-if="DownloadButton==4" class="smallsrm"><i class="fa fa-download pr-2 " /><span>پیش خرید و دانلود</span></span>
              </button>
              <button v-else-if="!MainButton" class="btn btn-main">
                به زودی
              </button>
              <button v-else class="btn btn-main btn-block" @click="PLAY()">
                <span v-if="MainButton==9" class="smallsrm"><i class="fa fa-play pr-2 " /><span>نمایش<span v-if="episode.id"> قسمت {{ episode.episode_number }}</span></span></span>
                <span v-else-if="MainButton==1"><i class="fa fa-play pr-2 " /><span>خرید</span></span>
                <span v-else-if="MainButton==2"><i class="fa fa-play pr-2 " /><span>پیش خرید</span></span>
                <span v-else-if="MainButton==3"><i class="fa fa-play pr-2 " /><span>خرید اشتراک</span></span>
                <span v-else-if="MainButton==4"><i class="fa fa-play pr-2 " /><span>خرید بلیط</span></span>
                <span v-else-if="MainButton==5" class="smallsrm"><i class="fa fa-play pr-2 " /><span>پیش خرید بلیط</span></span>
                <span v-else-if="MainButton==6"><i class="fa fa-play pr-2 " /><span>به زودی</span></span>
                <span v-else-if="MainButton==7"><i class="fa fa-play pr-2 " /><span>به زودی</span></span>
                <span v-else-if="MainButton==8" class="smallsrm"><i class="fa fa-play pr-2 " /><span>خرید امکان نمایش</span></span>
              </button>
            </div>
            <div class="col-6 h-full">
              <div class="row h-full">
                <!-- @click.prevent="ADD_CLAP(data.item.id, type)" -->
                <a :class="{active:clapinterval}" class="col-4 d-flex align-items-center justify-content-center text-darker" @mousedown="startclap" @mouseleave="stopclap" @mouseup="stopclap" @touchstart="startclap" @touchend="stopclap" @touchcancel="stopclap">
                  <div class="likes">
                    <span v-if="user_claps" class="badge badge-secondary">{{ user_claps }}</span>
                    <i class="icon-clap" />
                  </div>
                </a>
                <a class="col-4 d-flex align-items-center justify-content-center text-darker" @click.prevent="modalsharing = !modalsharing">
                  <i class="icon-share-android" />
                </a>
                <a href="" class="col-4 d-flex align-items-center justify-content-center text-darker" @click.prevent="ADD_WATCHLIST(data.item.id, type)">
                  <i :class="{ 'icon-bookmark-empty': !is_watchlist,'icon-bookmark': is_watchlist==1 }" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section id="slideshow">
      <div class="swiper-container showcase showcase-theme-m-tn">
        <div class="swiper-slide">
          <div class="row no-gutters">
            <div class="col-md-6 col-lg-5" />
            <div class="col-md-6 col-lg-7 showcase-pic">
              <img data-back="https://placehold.it/1120x576" class="showcase-img d-none d-lg-block" :src="'https://thumb.upera.tv/thumb?w=1120&h=576&q=90&a=t&zc=1&src=https://cdn.upera.shop/s3/backdrops/'+ChooseLang(data.item.backdrop,data.item.backdrop_fa)" :alt="data.item.name">
              <img data-back="https://placehold.it/375x300" class="showcase-img d-lg-none" :src="'https://thumb.upera.tv/thumb?w=375&h=300&q=100&a=c&zc=1&src=https://cdn.upera.shop/s3/backdrops/'+ChooseLang(data.item.backdrop,data.item.backdrop_fa)" :alt="data.item.name">
            </div>
          </div>
          <div id="showcase-thumbnail-wrapper-outter" class="showcase-thumbnail-wrapper-outter d-flex align-items-center justify-content-between pr-gutter p-lg-3 p-md-3">
            <div class="showcase-thumbnail-wrapper w-full container-fluid">
              <div class="d-flex h-full align-items-end">
                <div class="thumbnail">
                  <nuxt-link :to="{ name: type+'-id', params: { id: data.item.id }}">
                    <img data-back="https://placehold.it/207x307" class="thumbnail" :src="'https://thumb.upera.tv/thumb?w=207&h=307&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+data.item.poster" :alt="data.item.name" @load="itemsize('e')" @error="itemsize('e')">
                  </nuxt-link>
                </div>
                <div class="pr-md-4 pr-2 pr-0 mr-0 showcase-desc-wrapper h-full">
                  <div class="showcase-desc">
                    <div class="showcase-top">
                      <div v-if="type!='episode'" class="title text-invert mb-5 mb-md-3">
                        <nuxt-link :to="{ name: type+'-id', params: { id: data.item.id }}">
                          {{ ChooseLang(data.item.name,data.item.name_fa) }}
                        </nuxt-link>
                      </div>
                      <div v-else class="title text-invert mb-5 mb-md-3">
                        <nuxt-link :to="{ name: type+'-id', params: { id: data.item.id }}">
                          {{ ChooseLang(data.item.series_name,data.item.series_name_fa) }}
                        </nuxt-link>
                      </div>
                      <div v-if="type=='episode'" class="p-fs-small title title2 text-invert mb-1 mb-md-3 font-weight-normal d-lg-none">
                        {{ $t('show.season') }}{{ data.item.season_number }}
                        - {{ $t('show.episode') }} {{ data.item.episode_number }}
                      </div>
                    </div>
                    <div class="showcase-bottom">
                      <div v-if="type=='episode'" class="p-fs-small text-invert mb-1 mb-md-3 font-weight-normal d-none d-lg-block">
                        {{ $t('show.season') }}{{ data.item.season_number }}
                        - {{ $t('show.episode') }} {{ data.item.episode_number }}
                      </div>
                      <div class="text-invert mb-1 mb-md-3">
                        <nuxt-link v-for="(item2,index2) in ChooseLangAllGenres(data.item.genre)" :key="index2" :to="{ name: 'genres-genre', params: { genre: item2.genre }}" class="tag">
                          {{ item2.title }}
                        </nuxt-link>
                      </div>
                      <div v-if="!data.item.ir && data.item.persian" class="text-invert mb-1 mb-md-3">
                        دوبله فارسی
                      </div>
                      <div v-else-if="!data.item.ir && !data.item.persian" class="text-invert mb-1 mb-md-3">
                        زیرنویس فارسی
                      </div>
                    </div>
                  </div>
                  <div id="showcase-button-wrapper" class="showcase-button-wrapper">
                    <button v-if="MainButton" class="btn btn-main mr-1 ml-0" @click="PLAY()">
                      <span v-if="MainButton==9" class="smallsrm"><i class="fa fa-play pr-2 " /><span>نمایش<span v-if="episode.id"> قسمت {{ episode.episode_number }}</span></span></span>
                      <span v-else-if="MainButton==1"><i class="fa fa-play pr-2 " /><span>خرید</span></span>
                      <span v-else-if="MainButton==2"><i class="fa fa-play pr-2 " /><span>پیش خرید</span></span>
                      <span v-else-if="MainButton==3"><i class="fa fa-play pr-2 " /><span>خرید اشتراک</span></span>
                      <span v-else-if="MainButton==4"><i class="fa fa-play pr-2 " /><span>خرید بلیط</span></span>
                      <span v-else-if="MainButton==5" class="smallsrm"><i class="fa fa-play pr-2 " /><span>پیش خرید بلیط</span></span>
                      <span v-else-if="MainButton==6"><i class="fa fa-play pr-2 " /><span>به زودی</span></span>
                      <span v-else-if="MainButton==7" class="smallsrm"><i class="fa fa-play pr-2 " /><span>به زودی</span></span>
                      <span v-else-if="MainButton==8" class="smallsrm"><i class="fa fa-play pr-2 " /><span>خرید امکان نمایش</span></span>
                    </button>

                    <button v-if="DownloadButton" class="btn btn-dark btn-download mr-1 ml-0" @click="ftb=false;DOWNLOAD_MODAL_LOAD();">
                      <span v-if="DownloadButton==1"><i class="fa fa-download pr-2 " /><span>دانلود</span></span>
                      <span v-else-if="DownloadButton==2" class="smallsrm"><i class="fa fa-download pr-2 " /><span>دانلود رایگان</span></span>
                      <span v-else-if="DownloadButton==3" class="smallsrm"><i class="fa fa-download pr-2 " /><span>خرید و دانلود</span></span>
                      <span v-else-if="DownloadButton==4" class="smallsrm"><i class="fa fa-download pr-2 " /><span>پیش خرید و دانلود</span></span>
                    </button>
                    <!-- @click.prevent="ADD_CLAP(data.item.id, type)" -->
                    <a :class="{active:clapinterval}" class="btn btn-dark btn-icon ml-1 hide-mobile" @mousedown="startclap" @mouseleave="stopclap" @mouseup="stopclap" @touchstart="startclap" @touchend="stopclap" @touchcancel="stopclap">
                      <div class="likes">
                        <span v-if="user_claps" class="badge badge-secondary">{{ user_claps }}</span>
                        <i class="icon-clap" />
                      </div>
                    </a>
                    <a href="" class="btn btn-dark btn-icon ml-1 hide-mobile" @click.prevent="modalsharing = !modalsharing">
                      <i class="icon-share-android" />
                    </a>
                    <a href="" class="btn btn-dark btn-icon ml-1 hide-mobile" @click.prevent="ADD_WATCHLIST(data.item.id, type)">
                      <i :class="{ 'icon-bookmark-empty': !is_watchlist,'icon-bookmark': is_watchlist==1 }" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--           <div
            class="showcase-thumbnail-wrapper-outter d-flex align-items-center justify-content-between pr-gutter pr-md-3"
          >
            <div class="showcase-thumbnail-wrapper w-full">
              <div class="d-flex h-full align-items-end">
                <div class="pr-md-4 pr-md-2 showcase-desc-wrapper">
                  <div class="showcase-desc">

                    
                  </div>
                  <div class="showcase-button-wrapper">
                    <a v-if="DownloadButton && MainButton" href="" class="text-invert show-mobile" @click.prevent="ftb=false;DOWNLOAD_MODAL_LOAD();">
                      <span v-if="DownloadButton==1"><i class="fa fa-download " /></span>
                      <span v-else-if="DownloadButton==2"><i class="fa fa-download " /></span>
                      <span v-else-if="DownloadButton==3"><i class="fa fa-download " /></span>
                      <span v-else-if="DownloadButton==4"><i class="fa fa-download " /></span>


                      <div>
                        <span v-if="DownloadButton==1"><span>دانلود</span></span>
                        <span v-else-if="DownloadButton==2"><span>دانلود رایگان</span></span>
                        <span v-else-if="DownloadButton==3"><span>خرید و دانلود</span></span>
                        <span v-else-if="DownloadButton==4"><span>پیش خرید و دانلود</span></span>
                      </div>
                    </a>

                    <button v-if="!MainButton && DownloadButton" class="btn btn-main mr-1 ml-0" @click="ftb=false;DOWNLOAD_MODAL_LOAD();">
                      <span v-if="DownloadButton==1"><i class="fa fa-download pr-2 " /><span>دانلود</span></span>
                      <span v-else-if="DownloadButton==2"><i class="fa fa-download pr-2 " /><span>دانلود رایگان</span></span>
                      <span v-else-if="DownloadButton==3"><i class="fa fa-download pr-2 " /><span>خرید و دانلود</span></span>
                      <span v-else-if="DownloadButton==4"><i class="fa fa-download pr-2 " /><span>پیش خرید و دانلود</span></span>
                    </button>
                    <button v-else-if="!MainButton" class="btn btn-main">
                      به زودی
                    </button>
                    <button v-else class="btn btn-main mr-1 ml-0" @click="PLAY()">
                      <span v-if="MainButton==9"><i class="fa fa-play pr-2 " /><span>نمایش<span v-if="episode.id"> قسمت {{ episode.episode_number }}</span></span></span>
                      <span v-else-if="MainButton==1"><i class="fa fa-play pr-2 " /><span>خرید</span></span>
                      <span v-else-if="MainButton==2"><i class="fa fa-play pr-2 " /><span>پیش خرید</span></span>
                      <span v-else-if="MainButton==3"><i class="fa fa-play pr-2 " /><span>خرید اشتراک</span></span>
                      <span v-else-if="MainButton==4"><i class="fa fa-play pr-2 " /><span>خرید بلیط</span></span>
                      <span v-else-if="MainButton==5"><i class="fa fa-play pr-2 " /><span>پیش خرید بلیط</span></span>
                      <span v-else-if="MainButton==6"><i class="fa fa-play pr-2 " /><span>به زودی</span></span>
                      <span v-else-if="MainButton==7"><i class="fa fa-play pr-2 " /><span>presale ساعت مانده تا نمایش</span></span>
                      <span v-else-if="MainButton==8"><i class="fa fa-play pr-2 " /><span>خرید امکان نمایش</span></span>
                    </button>

                    <button v-if="DownloadButton && MainButton" class="btn btn-dark btn-download ml-md-2 hide-mobile" @click="ftb=false;DOWNLOAD_MODAL_LOAD();">
                      <span v-if="DownloadButton==1"><i class="fa fa-download pr-2 " /><span>دانلود</span></span>
                      <span v-else-if="DownloadButton==2"><i class="fa fa-download pr-2 " /><span>دانلود رایگان</span></span>
                      <span v-else-if="DownloadButton==3"><i class="fa fa-download pr-2 " /><span>خرید و دانلود</span></span>
                      <span v-else-if="DownloadButton==4"><i class="fa fa-download pr-2 " /><span>پیش خرید و دانلود</span></span>
                    </button>
                    <a href="#" class="btn btn-dark btn-icon ml-1 hide-mobile">
                      <i class="icon-clap" />
                    </a>
                    <a href="#" class="btn btn-dark btn-icon ml-1 hide-mobile">
                      <i class="icon-share-android" />
                    </a>
                    <a href="" class="btn btn-dark btn-icon ml-1 hide-mobile" @click.prevent="ADD_WATCHLIST(data.item.id, type)">
                      <i :class="{ 'icon-bookmark-empty': !is_watchlist,'icon-bookmark': is_watchlist==1 }" />
                    </a>
                    <a href="" class="text-invert show-mobile" @click.prevent="ADD_WATCHLIST(data.item.id, type)">
                      <i :class="{ 'icon-bookmark-empty': !is_watchlist,'icon-bookmark': is_watchlist==1 }" />
                      <div v-if="is_watchlist==1">حذف از لیست</div>
                      <div v-else>بعدا می بینم</div>
                    </a>
                  </div>
                </div>
                <div class="thumbnail hide-mobile">
                  <nuxt-link :to="{ name: type+'-id', params: { id: data.item.id }}">
                    <img class="thumbnail" :src="'https://thumb.upera.tv/thumb?w=207&h=307&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+data.item.poster" :alt="data.item.name">
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div> -->
          <client-only>
            <countdown v-if="data.item.presale" :left-time="data.item.presale * 1000">
              <div slot="process" slot-scope="{ timeObj }" class="d-flex align-items-center justify-content-center count-down-wrapper">
                <div class="count-down count-down-invert text-center">
                  <div class="count-down-num">
                    {{ timeObj.s }}
                  </div>
                  <div class="count-down-caption">
                    ثانیه
                  </div>
                </div>
                <div class="count-down count-down-invert text-center">
                  <div class="count-down-num">
                    {{ timeObj.m }}
                  </div>
                  <div class="count-down-caption">
                    دقیقه
                  </div>
                </div>
                <div class="count-down count-down-invert text-center">
                  <div class="count-down-num">
                    {{ timeObj.h }}
                  </div>
                  <div class="count-down-caption">
                    ساعت
                  </div>
                </div>
                <div v-if="timeObj.d" class="count-down count-down-invert text-center">
                  <div class="count-down-num">
                    {{ timeObj.d }}
                  </div>
                  <div class="count-down-caption">
                    روز
                  </div>
                </div>
              </div>
            </countdown>
          </client-only>
          <a href="#" class="back d-md-none" @click.prevent="hasHistory() ? $router.go(-1) : $router.push('/')">
            <img src="@/assets/img/icons/arrow-back.svg" width="30" alt="">
          </a>
          <a href="#" class="back2 d-none d-md-block" @click.prevent="hasHistory() ? $router.go(-1) : $router.push('/')">
            <img src="@/assets/img/icons/arrow-back2.svg" width="30" alt="">
          </a>
        </div>
      </div>
    </section>

    <section id="movie" class="page">
      <div class="container-fluid">
        <div class="article py-3">
          <div v-if="data.files.teaser==1" class="article-img-wrapper mr-lg-3" @click.prevent="GET_FILE(1);">
            <div class="font-weight-bold mb-2 d-none d-lg-block">
              نمایش تیزر
            </div>
            <div class="article-img-holder d-none d-lg-block">
              <img data-back="https://placehold.it/413x558" class="article-img" :src="'https://thumb.upera.tv/thumb?w=413&h=258&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+Chooseback(data.item.back_teaser,data.item.backdrop)" :alt="'تیزر '+data.item.name_fa">
              <a href="#" class="play-movie text-invert">
                <i class="icon-play" />
              </a>
            </div>
            <button class="btn btn-block btn-dark btn-second d-lg-none" @click.prevent="GET_FILE(1);">
              نمایش تیزر
            </button>
          </div>
          <div class="content">
            <div class="statistics d-flex align-items-center justify-content-between">
              <div class="statistics-item statistics-item-row text-muted">
                <i class="icon-calendar" />
                <span class="statistics-item-caption">
                  <span class="hide-mobile">محصول سال </span><span class="font-weight-bold"> {{ data.item.year }}</span>
                </span>
              </div>
              <div class="statistics-item statistics-item-row text-muted">
                <i class="icon-imdb" />
                <span class="statistics-item-caption">
                  <span class="hide-mobile">امتیاز </span><span class="font-weight-bold">{{ data.item.rate }}</span> <span
                    class="hide-mobile"
                  >از IMDB</span>
                </span>
              </div>
              <div class="statistics-item statistics-item-row text-muted">
                <i class="icon-profile" />
                <span class="statistics-item-caption">
                  <span class="hide-mobile">گروه سنی </span><span class="font-weight-bold">{{ data.item.age }}</span>
                  <!--                                 <span
                                    class="hide-mobile"> سال به بالا</span> -->
                </span>
              </div>
              <div v-if="total_claps" class="statistics-item statistics-item-row text-muted">
                <i class="icon-clap" />
                <span class="statistics-item-caption">
                  <span class="font-weight-bold">{{ total_claps }}</span><span class="hide-mobile"> بار این <span v-if="type=='movie'">فیلم</span><span v-else-if="type=='episode'">قسمت</span><span v-else>سریال</span> را
                    پسندیده&zwnj;اند</span>
                </span>
                <span class="statistics-item-caption" />
              </div>
              <div v-if="type=='series' || data.item.runtime" class="statistics-item statistics-item-row text-muted">
                <i class="icon-episodes" />
                <span v-if="type=='series'" class="statistics-item-caption">
                  <span class="font-weight-bold">{{ episode_num }}</span><span class="hide-mobile"> قسمت در </span><span
                    class="show-mobile"
                  > - </span><span class="font-weight-bold">{{ season_num }}</span><span
                    class="hide-mobile"
                  >
                    فصل</span></span>
                <span v-else class="statistics-item-caption"><span class="font-weight-bold">{{ data.item.runtime }} </span><span class="hide-mobile">{{ $t('new.minutes') }}</span></span>
              </div>
            </div>
            <!--                     <div class="alert alert-warning my-4">
                        این فیلم هنوز به نمایش خانگی نرسیده است اما خوشبختانه می&zwnj;توانید با هزینه&zwnj;ی یک بلیط
                        سینما آن را
                        خریداری و تماشا کنید. توجه داشته باشید از زمانی که شما شروع به نمایش فیلم می&zwnj;کنید تنها ۸
                        ساعت زمان
                        دارید و پس از آن با توجه به قوانین و مقررات اکران آنلاین امکان تماشای آن را ندارید.
                    </div> -->
            <div v-if="type=='movie'" class="title mt-4 mb-3">
              {{ $t('new.story') }}
            </div>
            <div v-else class="title mt-4 mb-3">
              {{ $t('new.story2') }}
            </div>
            <p>{{ ChooseLang(data.item.overview,data.item.overview_fa) }} <span v-if="type=='episode'">({{ ChooseLang(data.item.name,data.item.name_fa) }})</span></p>
          </div>
        </div>
      </div>
    </section>
    <section v-if="data.similar!=null" class="horizontal-list-container mt-4 reach-begin">
      <div class="d-flex justify-content-between align-items-center mb-2 container-fluid">
        <h4 class="title">
          {{ $t('show.similar') }}
        </h4>
      </div>
      <div v-swiper:offerSwiper="swiperOption" class="newset-slider">
        <div class="swiper-wrapper py-1">
          <!-- Slides -->
          <div v-for="(item,index) in data.similar" :key="index" class="swiper-slide" :class="{'movielabel':true}">
            <nuxt-link :to="{ name: 'movie-id', params: { id: item.id }}" :class="{'is-series': false}">
              <img data-back="https://placehold.it/142x212" :src="'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
              <!--               <img v-if="item.type!='movie'" :src="'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
              <img v-if="item.type!='movie'" :src="'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name"> -->
              <span v-if="!item.ir && item.persian" class="label label-rounded label-red label-1">دوبله</span>
              <span v-if="!item.ir && !item.persian" class="label label-rounded label-warning label-1">زیرنویس</span>
              <span v-if="item.free" class="label label-blue label-2" :class="{'label-rotated':true}">رایگان</span>
            </nuxt-link>
            <div class="mt-2">
              <h6 class="mt-2 small font-weight-normal">
                {{ ChooseLang(item.name,item.name_fa) }}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section v-if="type=='series' && data.last_episode" id="slideshow" dir="ltr">
      <div class="swiper-container showcase main-slideshow showcase-season">
        <div class="swiper-slide">
          <div class="row no-gutters">
            <div class="col-md-6 col-lg-7 showcase-pic">
              <img data-back="https://placehold.it/1120x400" class="showcase-img d-none d-lg-block" :src="'https://thumb.upera.tv/thumb?w=1120&h=400&q=90&a=c&zc=1&src=https://cdn.upera.shop/s3/backdrops/'+data.last_episode.backdrop" :alt="data.last_episode.name">
              <img data-back="https://placehold.it/375x300" class="showcase-img d-lg-none" :src="'https://thumb.upera.tv/thumb?w=375&h=300&q=100&a=c&zc=1&src=https://cdn.upera.shop/s3/backdrops/'+data.last_episode.backdrop" :alt="data.last_episode.name">
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
                    <div class="title text-invert mb-5 mb-md-3">
                      <nuxt-link :to="{ name: 'episode-id', params: { id: data.last_episode.id }}">
                        {{ ChooseLang(data.item.name,data.item.name_fa) }} - قسمت {{ data.last_episode.episode_number }}
                      </nuxt-link>
                    </div>
                    <div class="p-fs-small text-invert mb-1 mb-md-3 hide-mobile font-weight-normal">
                      جدیدترین قسمت
                    </div>
                  </div>
                  <div class="showcase-button-wrapper">
                    <nuxt-link :to="{ name: 'episode-id', params: { id: data.last_episode.id }}" class="text-invert show-mobile">
                      <i class="icon-info" />


                      <div>توضیحات این قسمت</div>
                    </nuxt-link>

                    <nuxt-link :to="{ name: 'episode-show-id', params: { id: data.last_episode.id }}" class="btn btn-main">
                      نمایش
                    </nuxt-link>

                    <nuxt-link :to="{ name: 'episode-id', params: { id: data.last_episode.id }}" class="btn btn-dark btn-download ml-md-2 hide-mobile">
                      توضیحات این قسمت <i class="icon-info" />
                    </nuxt-link>
                    <!--                                     <a href="#" class="btn btn-dark btn-icon hide-mobile">
                                        <i class="icon-clap"></i>
                                    </a>
                                    <a href="#" class="btn btn-dark btn-icon mr-1 hide-mobile">
                                        <i class="icon-share-android"></i>
                                    </a> -->
                    <!--                       <a href="" class="btn btn-dark btn-icon hide-mobile" @click.prevent="ADD_WATCHLIST(data.item.id, type)">
                        <i :class="{ 'icon-bookmark': !is_watchlist,'icon-bookmark-empty': is_watchlist==1 }" />
                      </a>
                      <a href="" class="text-invert show-mobile" @click.prevent="ADD_WATCHLIST(data.item.id, type)">
                        <i :class="{ 'icon-bookmark': !is_watchlist,'icon-bookmark-empty': is_watchlist==1 }" />
                        <div v-if="is_watchlist==1">حذف از لیست</div>
                        <div v-else>بعدا می بینم</div>
                      </a> -->
                  </div>
                </div>
                <div class="thumbnail hide-mobile">
                  <nuxt-link :to="{ name: 'episode-id', params: { id: data.last_episode.id }}">
                    <img class="thumbnail" :src="'https://thumb.upera.tv/thumb?w=207&h=307&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+data.last_episode.poster" :alt="data.last_episode.name">
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- 
    <section v-if="type!='movie' && data.season" id="episode-v2">
      

      <div class="horizontal-list-container">
        <div class="swiper-container horizontal-list">
        <section id="movie-tabs" class="nav_tabContent">
          <div id="movie-tabs" class="border-top border-dark nav_tabContent">
            <div class="nav mt-3" role="tablist">
              <b-tabs content-class="mt-4" class="col-12">
                <b-tab v-for="(item, index) in data.season" :key="index" :title="'فصل '+index" :active="isactiveseason(index)">
      <div v-swiper:offerSwiper="swiperOption">
        <div class="swiper-wrapper py-1">
          <div v-for="(item2,index2) in item" :key="index2" class="swiper-slide movielabel">
            <nuxt-link :to="{ name: 'episode-id', params: { id: item2.id }}">
              <img :src="'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item2.poster" :alt="item2.name">
            </nuxt-link>
            <div class="mt-2">
              <h6 class="mt-2 small font-weight-normal">
                قسمت {{ item2.episode_number }}
              </h6>
            </div>
          </div>
        </div>
      </div>

                  <div class="mt-2">
                    <div class="container-fluid pl-md-0 pr-md-0 row_actor_movie_container">
                      <div class="row row_actor_movie">
                        <div v-for="(item2, index2) in item" :key="index2" class="col-4 col-xl-2 col-md-2 col-sm-3">
                          <nuxt-link :to="{ name: 'episode-id', params: { id: item2.id }}" class="episode-poster">
                            <img :src="'https://thumb.upera.tv/thumb?w=184&h=279&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item2.poster" alt="">
                            <span class="block">قسمت {{ item2.episode_number }}</span>
                          </nuxt-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-tab>
              </b-tabs>
            </div>
          </div>
        </section>
      </div>
    </div>
    </section> -->




    <section v-if="type!='movie' && data.season">
      <div v-for="(item, index) in data.season" :key="index" class="horizontal-list-container mt-4 reach-begin">
        <div class="d-flex justify-content-between align-items-center mb-2 container-fluid">
          <h4 class="title">
            فصل {{ index }}
          </h4>
        </div>
        <swiper :ref="'mySwiper'+index" :options="swiperOption">
          <swiper-slide v-for="(item2,index2) in item" :key="index2" class="swiper-slide movielabel">
            <nuxt-link :to="{ name: 'episode-id', params: { id: item2.id }}">
              <img :src="'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item2.poster" :alt="item2.name">
            </nuxt-link>
            <div class="mt-2">
              <h6 class="mt-2 small font-weight-normal">
                قسمت {{ item2.episode_number }}
              </h6>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>


    <section v-if="data.showtabs" class="horizontal-list-container mt-4">
      <div class="swiper-container horizontal-list">
        <div id="movie-tabs" class="border-top border-dark">
          <div class="nav mt-3" role="tablist">
            <b-tabs content-class="mt-4" class="w-full">
              <b-tab v-if="data.casts !== null || data.directors !== null || data.producers !== null" :title="$t('new.casts')">
                <div id="actor" class="mt-2">
                  <div class="container-fluid pl-md-0 pr-md-0 row_actor_movie_container">
                    <div v-show="data.casts !== null" class="row row_actor_movie">
                      <div v-for="(item, index) in data.casts" :key="index" class="col-4 col-xl-1 col-md-2 col-sm-3 mt-2 mt-lg-4">
                        <nuxt-link :to="{ name: 'cast-id', params: { id: item.id }}" class="actor">
                          <img :src="'https://thumb.upera.tv/thumb?w=141&h=214&q=100&a=c&src=https://cdn.upera.shop/s3/casts/'+item.image" :alt="item.name">
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
              <b-tab v-if="data.item.news !== null" @click="showcomment=true">
                <template #title>
                  <b-spinner v-if="commentsloading" type="border" class="mb-1 ml-1" small /> {{ $t('comment.comments') }} ({{ data.item.comm_num }})
                </template>
                <Comments :showcomment="showcomment" :postid="data.item.news" :type="type" :name="data.item.name" :namefa="data.item.name_fa" :precommentsdata="data.commentsData" :preavatar="data.avatar" :preemail="data.email" :prefullname="data.fullname" :precomments="data.comments" />
              </b-tab>
              <b-tab v-if="data.files.backstage === 1" title="پشت صحنه">
                <div class="row">
                  <div class="col-lg-6 mb-2">
                    <a href="" class="position-relative" @click.prevent="GET_FILE(2);">
                      <i class="far fa-2x fa-play-circle"
                         style="color: white; position: absolute; top: 45%; left: 45%;"
                      />
                      <img :src="'https://thumb.upera.tv/thumb?w=1920&h=1200&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+Chooseback(data.item.back_teaser,data.item.backdrop)" class="img-fluid" :alt="'تیزر '+data.item.name_fa">
                    </a>
                  </div>
                </div>
              </b-tab>
              <b-tab v-if="data.files.image === 1 && data.images" title="گالری" dir="ltr">
                <div>
                  <client-only>
                    <LightGallery :index="galleryindex" :images="data.images" @close="galleryindex = null" />
                  </client-only>

                  <div v-if="data.images.length>=1" class="row text-center text-lg-left">
                    <div v-for="(thumb, thumbIndex) in data.images"
                         :key="thumbIndex" class="col-lg-3 col-md-4 col-6"
                    >
                      <a href="" class="d-block mb-4 h-100" @click.prevent="galleryindex = thumbIndex">

                        <img :src="'https://thumb.upera.tv/thumb?w=1920&h=1200&q=100&a=c&src='+thumb" class="img-fluid img-thumbnail" :alt="'تصویر '+thumbIndex+' '+data.item.name_fa">
                      </a>
                    </div>
                  </div>
                </div>
              </b-tab>
              <b-tab v-if="data.files.image === 1 && !data.images" dir="ltr" @click="LoadImages()">
                <template #title>
                  <b-spinner v-if="imagesloading" type="border" class="mb-1 ml-1" small /> گالری
                </template>
                <div v-if="lightimages.length>=1">
                  <client-only>
                    <LightGallery :index="galleryindex" :images="lightimages" @close="galleryindex = null" />
                  </client-only>

                  <div v-if="lightimages.length>=1" class="row text-center text-lg-left">
                    <div v-for="(thumb, thumbIndex) in lightimages"
                         :key="thumbIndex" class="col-lg-3 col-md-4 col-6"
                    >
                      <a href="" class="d-block mb-4 h-100" @click.prevent="galleryindex = thumbIndex">

                        <img :src="'https://thumb.upera.tv/thumb?w=1920&h=1200&q=100&a=c&src='+thumb" class="img-fluid img-thumbnail" :alt="'تصویر '+thumbIndex+' '+data.item.name_fa">
                      </a>
                    </div>
                  </div>
                </div>
              </b-tab>
              <b-tab v-if="data.files.musicvideo === 1" title="موزیک ویدئو">
                <div class="row">
                  <div class="col-lg-6 mb-2">
                    <a href="" class="position-relative" @click.prevent="GET_FILE(4);">
                      <i class="far fa-2x fa-play-circle"
                         style="color: white; position: absolute; top: 45%; left: 45%;"
                      />
                      <img :src="'https://thumb.upera.tv/thumb?w=1920&h=1200&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+Chooseback(data.item.back_teaser,data.item.backdrop)" class="img-fluid" :alt="'تیزر '+data.item.name_fa">
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
                      <img :src="'https://thumb.upera.tv/thumb?w=1920&h=1200&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+Chooseback(data.item.back_teaser,data.item.backdrop)" class="img-fluid" :alt="'تیزر '+data.item.name_fa">
                    </a>
                  </div>
                </div>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
    </section>
    <Download :id="data.item.id" :show="showDownloadModal" :ftb="ftb" :owned="data.item.owned" :traffic="data.item.traffic" :trafficoo="data.item.traffic_oo" :vod="data.item.vod" :free="data.item.free" :name="data.item.name" :namefa="data.item.name_fa" :posterf="data.item.poster" :backdrop="data.item.backdrop" :season="season" :itemdata="data.item" :type="type" @hide-modal="HIDE_MODAL2" />
    <client-only>
      <File :id="data.item.id" :show="showplyrmodal" :content="modalcontent" :name="data.item.name" :namefa="data.item.name_fa" :backdrop="data.item.backdrop" :backdropteaser="data.item.backdrop_teaser" :type="type" @hide-modal="HIDE_MODAL3" />

      <b-modal id="modal-sharing" v-model="modalsharing" centered hide-footer :title="'اشتراک گذاری'">
        <Socialsharing :mtitle="data.item.name_fa" :description="data.item.overview_fa" />
      </b-modal>
    </client-only>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import Download from "@/components/Download"
import File from "@/components/File"
import Socialsharing from "@/components/Socialsharing"
import Comments from "@/components/Comments"
    export default {
  components: {
    Download,
    File,
    Socialsharing,
    Comments
  },

  props: {
    data: {
        type: Object,
        default: null
    },
    type: {
        type: String,
        default: null
    }
  },


        data() {
            return {
              galleryindex:null,
              MainButton:0,
              ftb:false,
              DownloadButton:0,
              ShowPresale:0,
              modalcontent: 0,
              showcomment: false,
              season: null,
              season_num: 0,
              episode_num: 0,
              episode: {
                id: null
              },
        
        countdown: {},
        total_claps: 0,
        user_claps: 0,
        user_claps_counter: 0,
      clapCheckTimer: false,
      clapinterval:false,
        swiperOption: {
        spaceBetween: 10,
        slidesPerView: 3.3,
        grabCursor: true,
        setWrapperSize: true,
        threshold: 2,
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

        }},
                lightimages: [],
                imagesloading: false,
                is_watchlist: 0,
                modalsharing:false
            }
        },
  head() {

    return { title: (this.type=='episode') ? ((this.data.item.season_number==1) ? (this.ChooseLang(this.data.item.series_name,this.data.item.series_name_fa)+',قسمت '+this.data.item.episode_number) : (this.ChooseLang(this.data.item.series_name,this.data.item.series_name_fa)+',قسمت '+this.data.item.episode_number+' فصل '+this.data.item.season_number)) : this.ChooseLang(this.data.item.name,this.data.item.name_fa) }
  },
        computed: {
            ...mapGetters({showplyrmodal: "player/showplyrmodal"}),
            ...mapGetters({showDownloadModal: "player/showDownloadModal"}),
            ...mapGetters({commentsloading: "comments/commentsloading"})
        },
        watch: {
            data() {
                // if (this.data.item.runtime <= 60) {
                //     this.data.item.runtime = this.data.item.runtime + 'm'
                // } else if (this.data.item.runtime >= 60) {
                //     const minutes = this.data.item.runtime % 60
                //     const hours = Math.floor(this.data.item.runtime / 60)
                //     this.data.item.runtime = hours + 'h ' + minutes + 'm'
                // }
                // // Replice special characters

                // this.data.item.genre = this.data.item.genre.replace(/-/g, ', ')
                // // Set title



                if(this.$i18n.locale=="fa" && this.data.item.name_fa)
                document.title = this.data.item.name_fa
                else
                    document.title = this.data.item.name

            }
        },

        beforeDestroy() {
          window.removeEventListener('resize', this.itemsize)

      if (this.clapCheckTimer) {
        clearTimeout(this.clapCheckTimer)
    }

if(this.user_claps_counter>=1){
        this.$axios.post('/add/clap', {id:this.data.item.id,type:this.type,claps:this.user_claps_counter}).then((res) => {
          if(res.status === 200){



              this.user_claps_counter=0


          }else{
              this.user_claps_counter=0
              this.total_claps=parseInt(this.total_claps) - this.user_claps_counter
              this.user_claps=parseInt(this.user_claps) - this.user_claps_counter
          }
        }, (error) => {
              this.user_claps_counter=0
              this.total_claps=parseInt(this.total_claps) - this.user_claps_counter
              this.user_claps=parseInt(this.user_claps) - this.user_claps_counter
          return error
        })
}   
        },  
        created() {
          this.total_claps=this.data.claps.total
          this.user_claps=this.data.claps.user
        },
        mounted() {


          window.addEventListener("resize", this.itemsize)
          if(this.data.comments){
            this.showcomment=true
          }



          if(this.type!="movie" && this.data.season) {
            this.season=this.data.season

            if(this.type=="series"){
              this.season_num=this.sizeofobj(this.season)

              console.log(this.season_num)



              if(this.season_num>0){
                var j=this

                for (const [key, value] of Object.entries(this.season)) {
                  j.episode_num=j.episode_num+j.sizeofobj(value)
                  key
                }

              }
            }
          }

          this.is_watchlist=this.data.item.is_watchlist

                if(this.data.item.free){

                  if(this.data.item.vod || this.data.item.owned){
          					this.MainButton=9
                    if(this.type=='series'){
                      if(this.data.last_episode_seen)
                        this.episode=this.data.last_episode_seen
                      else if(this.data.first_episode)
                         this.episode=this.data.first_episode

                    }
                  }else if(this.checkuser.subscription){
                    this.MainButton=3
                  }else{
                    this.MainButton=8
                  }
            		if(this.data.item.upera && this.data.item.download){
						      this.DownloadButton=2
            		}
                }else{
                	if(this.data.item.ekran){
                		if(this.data.item.upera){
							if(this.data.item.presale){
								if(this.data.item.owned){
									this.MainButton=7
								}else{
									this.MainButton=5
									this.ShowPresale=1
								}
							}else{
								if(this.data.item.owned){
									this.MainButton=9
                  if(this.type=='series'){
                    if(this.data.last_episode_seen)
                      this.episode=this.data.last_episode_seen
                    else if(this.data.first_episode)
                       this.episode=this.data.first_episode

                  }
								}else{
									this.MainButton=4
								}
							}
                		}else{
                			this.MainButton=6
                		}
                	}else{
						if(this.data.item.vod && this.checkuser.subscription){
							if(this.data.item.presale){
								this.MainButton=6
								this.ShowPresale=1
							}else{
								if(this.checkuser.access || this.data.item.owned){
									this.MainButton=9
                  if(this.type=='series'){
                    if(this.data.last_episode_seen)
                      this.episode=this.data.last_episode_seen
                    else if(this.data.first_episode)
                       this.episode=this.data.first_episode

                  }
								}else{
									this.MainButton=3
								}
							}
							if(this.data.item.upera && this.data.item.download && !this.data.item.owned){
								if(this.data.item.presale){
									this.DownloadButton=4
								}else{
									this.DownloadButton=3
								}
							}
            }else if(this.data.item.upera && this.data.item.download){
							if(this.data.item.presale){
								if(this.data.item.owned){
									this.MainButton=7
								}else{
									this.MainButton=2
									this.ShowPresale=1
								}
							}else{
								if(this.data.item.owned){
									this.MainButton=9
                  if(this.type=='series'){
                    if(this.data.last_episode_seen)
                      this.episode=this.data.last_episode_seen
                    else if(this.data.first_episode)
                       this.episode=this.data.first_episode

                  }


									this.DownloadButton=1
								}else{
                  if(this.type=='series'){
                    this.MainButton=9
                    if(this.data.last_episode_seen)
                      this.episode=this.data.last_episode_seen
                    else if(this.data.first_episode)
                       this.episode=this.data.first_episode

                  }else{
                    this.MainButton=1
                  }

									
								}
							}
						}else{
							if(this.data.item.presale){
								this.MainButton=7
							}else if(this.type=='series'){
                this.MainButton=9
                if(this.data.last_episode_seen)
                  this.episode=this.data.last_episode_seen
                else if(this.data.first_episode)
                   this.episode=this.data.first_episode

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
                if(this.type=='series'){
                  if(this.episode.id)
                    this.$router.push({ name: 'episode-show-id' , params: {id: this.episode.id }})
                }else{
                  this.$router.push({ name: this.type+'-show-id' , params: {id: this.data.item.id }})
                }
              }else if(this.MainButton==1 || this.MainButton==2 || this.MainButton==4 || this.MainButton==5 || this.MainButton==8){
                if(this.DownloadButton)
                  this.ftb=true
                else
                  this.ftb=false
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
            hasHistory () { return window.history.length > 2 },

 
 

       GET_FILE(content) {
          this.modalcontent=content
          this.$store.dispatch('player/PLAYER_MODAL_LOAD')
       },
 
     ADD_WATCHLIST(id, type) {
        if (this.$auth.loggedIn) {

      if (this.is_watchlist==0) {
        // Add true to data array
        this.is_watchlist = 1
      } else {
        // Add false to data array
        this.is_watchlist = 0

      }

      this.$axios.post('/create/watchlist', {id,type})
                } else {
                    this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})

                }
              
    },
    startclap(){
      if (this.$auth.loggedIn) {
      if(!this.clapinterval){
        this.clapinterval = setInterval(() => (this.user_claps_counter=this.user_claps_counter + 1,
            this.total_claps=parseInt(this.total_claps) + 1,
              this.user_claps=parseInt(this.user_claps) + 1)

, 30) 
  

      }
                } else {
                    this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})

                }
    },
    stopclap(){
      if(this.clapinterval){
        clearInterval(this.clapinterval)
        this.clapinterval = false
if(this.user_claps_counter>=1){
this.clapCheckTimer = setTimeout(function(scope) {
if(scope.user_claps_counter>=1){
        scope.$axios.post('/add/clap', {id:scope.data.item.id,type:scope.type,claps:scope.user_claps_counter}).then((res) => {
          if(res.status !== 200){
              scope.total_claps=parseInt(scope.total_claps) - scope.user_claps_counter
              scope.user_claps=parseInt(scope.user_claps) - scope.user_claps_counter
          }
        }, (error) => {
              scope.total_claps=parseInt(scope.total_claps) - scope.user_claps_counter
              scope.user_claps=parseInt(scope.user_claps) - scope.user_claps_counter
          return error
        })
          scope.user_claps_counter=0
        }
        }, 2000, this)
}  
      }
    },
     ADD_CLAP(id, type) {
        if (this.$auth.loggedIn) {
      this.user_claps_counter=this.user_claps_counter + 1

            this.total_claps=parseInt(this.total_claps) + 1
              this.user_claps=parseInt(this.user_claps) + 1


if(this.user_claps_counter==1){
this.clapCheckTimer = setTimeout(function(scope) {

        scope.$axios.post('/add/clap', {id,type,claps:scope.user_claps_counter}).then((res) => {
          if(res.status !== 200){
              scope.total_claps=parseInt(scope.total_claps) - scope.user_claps_counter
              scope.user_claps=parseInt(scope.user_claps) - scope.user_claps_counter
          }
        }, (error) => {
              scope.total_claps=parseInt(scope.total_claps) - scope.user_claps_counter
              scope.user_claps=parseInt(scope.user_claps) - scope.user_claps_counter
          return error
        })
          scope.user_claps_counter=0
        }, 2000, this)
}   
                } else {
                    this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})

                }
              
    },
    DOWNLOAD_MODAL_LOAD() {
      this.$store.dispatch('player/DOWNLOAD_MODAL_LOAD')
    },
    isactiveseason(season){
      if(this.type=="episode")
        if(season==this.data.item.season_number)
          return true
        else
          return false
      else
        if(this.data.first_episode && season==this.data.first_episode.season_number)
          return true
        else
          return false
    },
        sizeofobj(obj) {
          if(!obj)
            return 0
        var size = 0, key
        for (key in obj) {
            if ({}.propertyIsEnumerable.call(obj,key)) size++
        }
        return size
    },
  itemsize(e) {
    let w=window.innerWidth
    let i=25
    
    if(w<=375){
      i=12
    }else if(w<=357){
      i=10
    }
    if(w<=767.98){
      let vh = document.getElementById("showcase-thumbnail-wrapper-outter").offsetHeight-document.getElementById("showcase-button-wrapper").offsetHeight-i
      let element=document.getElementsByClassName('showcase-bottom')

      if(element.length){
        element[0].style.setProperty('height', `${vh}px`)
        if(this.data.item.ir && !this.DownloadButton)
          element[0].style.setProperty('padding-top', `${(vh/2)}px`)
        else if(!this.data.item.ir && !this.DownloadButton)
          element[0].style.setProperty('padding-top', `${(vh/3)}px`)
      }
    }else if(e!='e'){
      let element=document.getElementsByClassName('showcase-bottom')
      if(element.length){
        element[0].style.removeProperty('height')
        element[0].style.removeProperty('padding-top')
      }
    }
    return e
  },
    LoadImages() {
if(!this.lightimages.length){
        this.imagesloading=true
        var api_url
        if (this.$auth.loggedIn) {
            api_url='/get/files'
        } else {
            api_url='/ghost/get/files'
        }
        this.$axios.post(api_url, {
            id: this.data.item.id,
            content: 5,
            hls: 1,
            type: this.type
        }).then((res) => {
          this.imagesloading=false
          if(res.status === 200){
            let images=[]
            var i
            for (i = 0; i < res.data.data.images.length; ++i) {
              images[i]=res.data.data.images[i].src
            }
            this.lightimages=images
          }
        }, (error) => {
          this.imagesloading=false
          return error
        })
}
    }
   }
}
</script>