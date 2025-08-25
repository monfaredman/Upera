<template>
  <div>
    <div class="d-flex header-mobile d-md-none">
      <div class="show-mobile header-home w-full">
        <div class="px-3 h-full">
          <div class="row h-full align-items-center">
            <div class="col-6">
              <button 
                v-if="actions && !actions.mainButton.exist && actions.downloadButton.exist" 
                class="btn btn-main btn-block" 
                @click="ftb = false; DOWNLOAD_MODAL_LOAD(actions.downloadButton.action)"
              >
                <span>
                  <i class="fa fa-download pr-2" />
                  <span>{{ ChooseLang(actions.downloadButton.label.en, actions.downloadButton.label.fa) }}</span>
                </span>
              </button>


              <button 
                v-else-if="actions && actions.mainButton.exist"
                class="btn btn-main btn-block" 
                @click="PLAY(actions.mainButton.action)"
              >
                <span class="smallsrm">
                  <i class="fa fa-play pr-2" />
                  <span>
                    {{ ChooseLang(actions.mainButton.label.en, actions.mainButton.label.fa) }}
                    <span v-if="actions.mainButton.action == 'play' && episode.id"> {{ $t('show.episode') }} {{ episode.episode_number }}
                    </span>
                  </span>
                </span>
              </button>

              <button 
                v-else
                class="btn btn-main"
              >
                <b-spinner small />
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
              <b-img v-bind="{blank: true,blankColor: '#bbb',width: 1120,height: 576,show:true}" :src="'https://thumb.upera.shop/thumb?w=1120&h=576&q=95&a=t&zc=1&src=https://cdn.upera.shop/s3/backdrops/'+ChooseLang(data.item.backdrop,data.item.backdrop_fa)" :alt="data.item.name" class="showcase-img d-none d-lg-block" />
              <b-img v-bind="{fluidGrow: true,blank: true,blankColor: '#bbb',width: 375,height: 300,show:true}" :src="'https://thumb.upera.shop/thumb?w=375&h=300&q=100&a=c&zc=1&src=https://cdn.upera.shop/s3/backdrops/'+ChooseLang(data.item.backdrop,data.item.backdrop_fa)" :alt="data.item.name" class="showcase-img d-lg-none" />


              <!--               <img loading="lazy" data-back="/images/1120x576.png" class="showcase-img d-none d-lg-block" :src="'https://thumb.upera.shop/thumb?w=1120&h=576&q=95&a=t&zc=1&src=https://cdn.upera.shop/s3/backdrops/'+ChooseLang(data.item.backdrop,data.item.backdrop_fa)" :alt="data.item.name">
              <img loading="lazy" data-back="/images/375x300.png" class="showcase-img d-lg-none" :src="'https://thumb.upera.shop/thumb?w=375&h=300&q=100&a=c&zc=1&src=https://cdn.upera.shop/s3/backdrops/'+ChooseLang(data.item.backdrop,data.item.backdrop_fa)" :alt="data.item.name"> -->
            </div>
          </div>
          <div id="showcase-thumbnail-wrapper-outter" class="showcase-thumbnail-wrapper-outter d-flex align-items-center justify-content-between pr-gutter p-lg-3 p-md-3">
            <div class="showcase-thumbnail-wrapper w-full container-fluid">
              <div class="d-flex h-full align-items-end">
                <div class="thumbnail">
                  <nuxt-link :to="{ name: type+'-id', params: { id: data.item.id }}">
                    <b-img class="thumbnail" v-bind="{fluidGrow: true,blank: true,blankColor: '#bbb',width: 207,height: 307,show:true}" :src="'https://thumb.upera.shop/thumb?w=207&h=307&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+data.item.poster" :alt="data.item.name" @load="itemsize('e')" @error="itemsize('e')" />

                    <!-- <img loading="lazy" data-back="/images/207x307.png" class="thumbnail" :src="'https://thumb.upera.shop/thumb?w=207&h=307&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+data.item.poster" :alt="data.item.name" @load="itemsize('e')" @error="itemsize('e')"> -->
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
                        <nuxt-link 
                          v-for="(persianName, englishName) in data.item.new_genres" 
                          :key="englishName" 
                          :to="{ name: 'lists-list', params: { list: englishName }}" 
                          class="tag"
                        >
                          {{ persianName }}
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
                    <button v-if="actions && actions.mainButton.exist" class="btn btn-main mr-1 ml-0" @click="PLAY(actions.mainButton.action)">
                      <span class="smallsrm">
                        <i class="fa fa-play pr-2" />
                        <span>
                          {{ ChooseLang(actions.mainButton.label.en, actions.mainButton.label.fa) }}
                          <span v-if="actions.mainButton.action === 'play' && episode.id"> {{ $t('show.episode') }} {{ episode.episode_number }}
                          </span>
                        </span>
                      </span>
                    </button>

                    <button v-if="actions && actions.downloadButton.exist" class="btn btn-dark btn-download mr-1 ml-0" @click="ftb = false; DOWNLOAD_MODAL_LOAD(actions.downloadButton.action)">
                      <span class="smallsrm">
                        <i class="fa fa-download pr-2" />
                        <span>
                          {{ ChooseLang(actions.downloadButton.label.en, actions.downloadButton.label.fa) }}
                        </span>
                      </span>
                    </button>

                    <button v-if="!actions || (!actions.mainButton.exist && !actions.downloadButton.exist)" class="btn btn-main mr-1 ml-0">
                      <span class="smallsrm">
                        <b-spinner small />
                      </span>
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
     
          <client-only>
            <countdown v-if="data.item.presale && data.item.presale <= 6288798" :left-time="data.item.presale * 1000">
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
          <div v-if="medias.teaser==1" class="article-img-wrapper mr-lg-3" @click.prevent="GET_FILE(1);">
            <div class="font-weight-bold mb-2 d-none d-lg-block">
              نمایش تیزر
            </div>
            <div class="article-img-holder d-none d-lg-block">
              <b-img class="article-img" v-bind="{fluidGrow: true,blank: true,blankColor: '#bbb',width: 413,height: 258,show:true}" :src="Chooseback('https://thumb.upera.shop/thumb?w=413&h=258&q=100&a=c&src=https://cdn.upera.shop/s3/',data.item.back_teaser,data.item.backdrop)" :alt="'تیزر '+data.item.name_fa" />

              <!-- <img loading="lazy" data-back="/images/413x258.png" class="article-img" :src="Chooseback('https://thumb.upera.shop/thumb?w=413&h=258&q=100&a=c&src=https://cdn.upera.shop/s3/',data.item.back_teaser,data.item.backdrop)" :alt="'تیزر '+data.item.name_fa"> -->
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
                  <nuxt-link :id="data.item.age" to="/profile/about-contact" class="text-black">
                    <span class="hide-mobile">گروه سنی </span>
                    <span class="font-weight-bold">{{ data.item.age }}</span>
                  </nuxt-link>

                  <span v-show="null" id="G" class="tooltip-target">G</span>
                  <b-tooltip target="G" title="مناسب تمامی سنین" variant="dark" />

                  <span v-show="null" id="PG" class="tooltip-target">PG</span>
                  <b-tooltip target="PG" title="سرپرستی والدین پیشنهاد می‌شود" variant="dark" />

                  <span v-show="null" id="PG-13" class="tooltip-target">PG-13</span>
                  <b-tooltip target="PG-13" title="برخی از صحنه ها برای افراد زیر ۱۳ سال نامناسب است" variant="dark" />

                  <span v-show="null" id="R" class="tooltip-target">R</span>
                  <b-tooltip target="R" title="زیر ۱۸ سال به همراهی والدین یا سرپرست نیاز دارد" variant="dark" />

                  <span v-show="null" id="X" class="tooltip-target">X</span>
                  <b-tooltip target="X" title="هیچ فرد کمتر از ۱۸ سال نباید این فیلم ها را ببینند" variant="dark" />
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



    <section v-if="type=='series' && last_episode" id="slideshow" dir="ltr">
      <div class="swiper-container showcase main-slideshow showcase-season">
        <div class="swiper-slide">
          <div class="row no-gutters">
            <div class="col-md-6 col-lg-7 showcase-pic">
              <b-img class="showcase-img d-none d-lg-block" v-bind="{fluidGrow: true,blank: true,blankColor: '#bbb',width: 1120,height: 400,show:true}" :src="'https://thumb.upera.shop/thumb?w=1120&h=400&q=95&a=c&zc=1&src=https://cdn.upera.shop/s3/backdrops/'+last_episode.backdrop" :alt="last_episode.name" />

              <b-img class="showcase-img d-lg-none" v-bind="{fluidGrow: true,blank: true,blankColor: '#bbb',width: 375,height: 300,show:true}" :src="'https://thumb.upera.shop/thumb?w=375&h=300&q=100&a=c&zc=1&src=https://cdn.upera.shop/s3/backdrops/'+last_episode.backdrop" :alt="last_episode.name" />

              <!--  <img loading="lazy" data-back="/images/1120x400.png" class="showcase-img d-none d-lg-block" :src="'https://thumb.upera.shop/thumb?w=1120&h=400&q=95&a=c&zc=1&src=https://cdn.upera.shop/s3/backdrops/'+last_episode.backdrop" :alt="last_episode.name">
              <img loading="lazy" data-back="/images/375x300.png" class="showcase-img d-lg-none" :src="'https://thumb.upera.shop/thumb?w=375&h=300&q=100&a=c&zc=1&src=https://cdn.upera.shop/s3/backdrops/'+last_episode.backdrop" :alt="last_episode.name"> -->
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
                      <nuxt-link :to="{ name: 'episode-id', params: { id: last_episode.id }}">
                        {{ ChooseLang(data.item.name,data.item.name_fa) }} - قسمت {{ last_episode.episode_number }}
                      </nuxt-link>
                    </div>
                    <div class="p-fs-small text-invert mb-1 mb-md-3 hide-mobile font-weight-normal">
                      جدیدترین قسمت
                    </div>
                  </div>
                  <div class="showcase-button-wrapper">
                    <nuxt-link :to="{ name: 'episode-id', params: { id: last_episode.id }}" class="text-invert show-mobile">
                      <i class="icon-info" />


                      <div>توضیحات این قسمت</div>
                    </nuxt-link>

                    <nuxt-link :to="{ name: 'episode-show-id', params: { id: last_episode.id }}" class="btn btn-main">
                      نمایش
                    </nuxt-link>

                    <nuxt-link :to="{ name: 'episode-id', params: { id: last_episode.id }}" class="btn btn-dark btn-download ml-md-2 hide-mobile">
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
                  <nuxt-link :to="{ name: 'episode-id', params: { id: last_episode.id }}">
                    <b-img class="thumbnail" v-bind="{fluidGrow: true,blank: true,blankColor: '#bbb',width: 207,height: 307,show:true}" :src="'https://thumb.upera.shop/thumb?w=207&h=307&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+last_episode.poster" :alt="last_episode.name" />

                    <!--  <img loading="lazy" class="thumbnail" :src="'https://thumb.upera.shop/thumb?w=207&h=307&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+last_episode.poster" :alt="last_episode.name"> -->
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>





    <section v-if="type!='movie' && season" id="watching" class="horizontal-list-container item mt-lg-2 pt-3">
      <div class="container-fluid mb-2">
        <div class="row">
          <b-dropdown class="col-lg-2 col-md-3 col-4" block :text="seasontitle" variant="dark">
            <b-dropdown-item v-for="(item, index) in season" :key="index" href="#" :active="selectseriesid==index" @click.prevent="selectseries(index)">
              فصل {{ index }}
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div v-for="(item2,index2) in season[selectseriesid]" :key="index2" class="col-lg-3 col-md-4 col-6">
            <nuxt-link :to="{ name: 'episode-id', params: { id: item2.id }}">
              <b-img v-bind="{fluidGrow: true,blank: true,blankColor: '#bbb',width: 364,height: 190,show:true}" :src="'https://thumb.upera.shop/thumb?w=364&h=190&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+item2.backdrop" :alt="item2.name" class="rounded" />

              <!-- <img loading="lazy" data-back="/images/364x190.png" :src="'https://thumb.upera.shop/thumb?w=364&h=190&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+item2.backdrop" :alt="item2.name" class="rounded" width="100%"> -->
              <div v-if="$auth.loggedIn" class="progress">
                <div class="progress-bar" :style="'width: '+(item2.current_time/item2.duration_time)*100+'%'" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" />
              </div>
            </nuxt-link>
            <div class="mt-2">
              <h6 class="mt-2 small font-weight-normal">
                {{ ChooseLang(item2.name,item2.name_fa) }}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section v-if="similar!=null" class="horizontal-list-container mt-4 reach-begin">
      <div class="d-flex justify-content-between align-items-center mb-2 container-fluid">
        <h4 class="title">
          {{ $t('show.similar') }}
        </h4>
      </div>
      <div v-swiper:offerSwiper="swiperOption" class="newset-slider">
        <div class="swiper-wrapper py-1">
          <!-- Slides -->
          <div v-for="(item,index) in similar" :key="index" class="swiper-slide" :class="{'movielabel':item.type=='movie'}">
            <nuxt-link :to="{ name: item.type+'-id', params: { id: item.id }}" :class="{'is-series': item.type!='movie'}">
              <b-img v-bind="{fluidGrow: true,blank: true,blankColor: '#bbb',width: 142,height: 212,show:true}" :src="'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name" />
              <b-img v-if="item.type!='movie'" v-bind="{fluidGrow: true,blank: true,blankColor: '#bbb',width: 142,height: 212,show:true}" :src="'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name" />
              <b-img v-if="item.type!='movie'" v-bind="{fluidGrow: true,blank: true,blankColor: '#bbb',width: 142,height: 212,show:true}" :src="'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name" />
              <!--               <img loading="lazy" data-back="/images/142x212.png" :src="'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
              <img v-if="item.type!='movie'" :src="'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
              <img v-if="item.type!='movie'" :src="'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name"> -->
              <span v-if="!item.ir && item.persian" class="label label-rounded label-red label-1">دوبله</span>
              <span v-if="!item.ir && !item.persian" class="label label-rounded label-warning label-1">زیرنویس</span>
              <span v-if="item.free && $config.envname=='upera'" class="label label-blue label-2" :class="{'label-rotated':true}">رایگان</span>
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
    <section class="horizontal-list-container mt-4">
      <div class="swiper-container horizontal-list">
        <div id="movie-tabs" class="border-top border-dark">
          <div class="nav mt-3" role="tablist">
            <b-tabs v-model="activeTab" content-class="mt-4" class="w-full">
              <b-tab v-if="casts !== null || directors !== null || producers !== null" :title="$t('new.casts')">
                <div id="actor" class="mt-2">
                  <div class="container-fluid pl-md-0 pr-md-0 row_actor_movie_container">
                    <div v-show="casts !== null" class="row row_actor_movie row_actor2_movie">
                      <div v-for="(item, index) in casts" :key="index" class="col-4 col-xl-1 col-md-2 col-sm-3 mt-2 mt-lg-4">
                        <nuxt-link :to="{ name: 'cast-id', params: { id: item.id }}" class="actor2">
                          <b-img v-bind="{fluidGrow: true,blank: true,blankColor: '#bbb',width: 140,height: 140,show:true}" :src="'https://thumb.upera.shop/thumb?w=140&h=140&q=100&a=t&src=https://cdn.upera.shop/s3/casts/'+item.image" :alt="item.name" class="rounded-circle" />

                          <!-- <img :src="'https://thumb.upera.shop/thumb?w=141&h=214&q=100&a=c&src=https://cdn.upera.shop/s3/casts/'+item.image" :alt="item.name"> -->
                          <span class="block">{{ ChooseLang(item.name,item.name_fa) }}</span>
                        </nuxt-link>
                      </div>
                    </div>
                    <hr v-show="casts !== null && (directors !== null || producers !== null)">
                    <div v-show="directors !== null || producers !== null" class="mt-md-2 small font-weight-bold">
                      <h6 v-show="casts !== null">
                        {{ $t('new.other_casts') }}
                      </h6>
                      <p v-show="directors !== null" class="font-weight-normal">
                        {{ $t('show.director') }}: <span v-for="(item, index) in directors" :key="index"><nuxt-link :to="{ name: 'cast-id', params: { id: item.id }}"> {{ ChooseLang(item.name,item.name_fa) }} </nuxt-link><span v-if="index+1 < directors.length">, </span></span>
                      </p>
                      <p v-show="producers !== null" class="font-weight-normal">
                        {{ $t('show.producer') }}: <span v-for="(item, index) in producers" :key="index"><nuxt-link :to="{ name: 'cast-id', params: { id: item.id }}"> {{ ChooseLang(item.name,item.name_fa) }} </nuxt-link><span v-if="index+1 < producers.length">, </span></span>
                      </p>     
                      <p v-show="writers !== null" class="font-weight-normal">
                        {{ $t('show.writer') }}: <span v-for="(item, index) in writers" :key="index"><nuxt-link :to="{ name: 'cast-id', params: { id: item.id }}"> {{ ChooseLang(item.name,item.name_fa) }} </nuxt-link><span v-if="index+1 < writers.length">, </span></span>
                      </p> 
                      <p v-show="investors !== null" class="font-weight-normal">
                        {{ $t('show.investor') }}: <span v-for="(item, index) in investors" :key="index"><nuxt-link :to="{ name: 'cast-id', params: { id: item.id }}"> {{ ChooseLang(item.name,item.name_fa) }} </nuxt-link><span v-if="index+1 < investors.length">, </span></span>
                      </p>                 
                    </div>
                  </div>
                </div>
              </b-tab>
              <b-tab @click="showcomment=true">
                <template #title>
                  <b-spinner v-if="commentsloading" type="border" class="mb-1 ml-1" small /> {{ $t('comment.comments') }} ({{ comm_num }})
                </template>
                <Comments :id="data.item.id" :type="type" :name="data.item.name" :namefa="data.item.name_fa" />
              </b-tab>
              <b-tab v-if="medias.backstage === 1" title="پشت صحنه">
                <div class="row">
                  <div class="col-lg-6 mb-2">
                    <a href="" class="position-relative" @click.prevent="GET_FILE(2);">
                      <i class="far fa-2x fa-play-circle"
                         style="color: white; position: absolute; top: 45%; left: 45%;"
                      />
                      <img :src="Chooseback('https://thumb.upera.shop/thumb?w=1920&h=1200&q=100&a=c&src=https://cdn.upera.shop/s3/',data.item.back_teaser,data.item.backdrop)" class="img-fluid" :alt="'تیزر '+data.item.name_fa">
                    </a>
                  </div>
                </div>
              </b-tab>
              <b-tab v-if="medias.image === 1" dir="ltr" @click="LoadImages()">
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

                        <img :src="'https://thumb.upera.shop/thumb?w=1920&h=1200&q=100&a=c&src='+thumb" class="img-fluid img-thumbnail" :alt="'تصویر '+thumbIndex+' '+data.item.name_fa">
                      </a>
                    </div>
                  </div>
                </div>
              </b-tab>
              <b-tab v-if="medias.musicvideo === 1" title="موزیک ویدئو">
                <div class="row">
                  <div class="col-lg-6 mb-2">
                    <a href="" class="position-relative" @click.prevent="GET_FILE(4);">
                      <i class="far fa-2x fa-play-circle"
                         style="color: white; position: absolute; top: 45%; left: 45%;"
                      />
                      <img :src="Chooseback('https://thumb.upera.shop/thumb?w=1920&h=1200&q=100&a=c&src=https://cdn.upera.shop/s3/',data.item.back_teaser,data.item.backdrop)" class="img-fluid" :alt="'تیزر '+data.item.name_fa">
                    </a>
                  </div>
                </div>
              </b-tab>
              <b-tab v-if="medias.next === 1" title="آنچه در قسمت بعد خواهید دید">
                <div class="row">
                  <div class="col-lg-6 mb-2">
                    <a href="" class="position-relative" @click.prevent="GET_FILE(3);">
                      <i class="far fa-2x fa-play-circle"
                         style="color: white; position: absolute; top: 45%; left: 45%;"
                      />
                      <img :src="Chooseback('https://thumb.upera.shop/thumb?w=1920&h=1200&q=100&a=c&src=https://cdn.upera.shop/s3/',data.item.back_teaser,data.item.backdrop)" class="img-fluid" :alt="'تیزر '+data.item.name_fa">
                    </a>
                  </div>
                </div>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
    </section>
    <Download :id="data.item.id" :show="showDownloadModal" :ftb="ftb" :owned="owned" :traffic="data.item.traffic" :trafficoo="data.item.traffic_oo" :vod="data.item.vod" :free="data.item.free" :name="data.item.name" :namefa="data.item.name_fa" :posterf="data.item.poster" :backdrop="data.item.backdrop" :season="season" :itemdata="data.item" :type="type" @hide-modal="HIDE_MODAL2" />
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
              actions: null,
               activeTab: 0,
              galleryindex:null,
              ftb:false,
              main_download:0,
              main_free:0,
              ShowPresale:0,
              modalcontent: 0,
              showcomment: false,
              season: null,
              season_num: 0,
          selectseriesid: 1,
          seasontitle: 'فصل 1',
              episode_num: 0,
              episode: {
                id: null
              },
              medias: {},
              casts: [],
              directors: null,
              producers: null,
owned: 0,
owned_period_end: null,
              writers: null,
              investors: null,
              characters: null,
              commentsData: null,
              offer: null,
              similar:null,
              comments: 0,


                    current_time: 0,
      duration_time: 0,
      comm_num: 0,
      last_episode_seen :null,
      first_episode :null,
      last_episode :null,


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
            ...mapGetters({showplyrmodal: "showplyrmodal"}),
            ...mapGetters({showDownloadModal: "showDownloadModal"}),
            ...mapGetters({commentsloading: "comments/commentsloading"}),

    tabsKey() {
      // اگر داده‌های cast موجود باشند، key متفاوت از حالت بدون داده خواهد بود.
      return (this.casts || this.directors || this.producers) ? 'with-casts' : 'no-casts'
    }
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

this.INIT(0)
this.loadAdditionalData()
                if(this.$i18n.locale=="fa" && this.data.item.name_fa)
                document.title = this.data.item.name_fa
                else
                    document.title = this.data.item.name

            },
    casts(newVal) {
      if (newVal || this.directors || this.producers) {
        this.activeTab = 0
      }
    },
    directors(newVal) {
      if (newVal || this.casts || this.producers) {
        this.activeTab = 0
      }
    },
    producers(newVal) {
      if (newVal || this.casts || this.directors) {
        this.activeTab = 0
      }
    }
        },

        beforeDestroy() {
          this.$store.dispatch('SET_CONTENT_SUBSCRIPTION_ACTION',0)
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
        mounted() {
          this.INIT(1)
          this.loadAdditionalData()
        },

        methods: {

async loadAdditionalData() {
  try {

  const statisticsEndpoint = this.$auth.loggedIn
    ? '/get/statistics/'
    : '/ghost/get/statistics/'

  const accessibilityPromise = this.$auth.loggedIn
    ? this.$axios.get('/get/accessibility/' + this.type + '/' + this.data.item.id)
    : Promise.resolve({ data: { data: { owned: 0, owned_period_end: null, actions: this.data.item.actions } } })

if (this.type === 'movie') {
  const [castRes, mediaRes, similarRes, accessibilityRes, statisticsRes] = await Promise.all([
    this.$axios.get('/get/cast/' + this.type + '/' + this.data.item.id),
    this.$axios.get('/get/media/' + this.type + '/' + this.data.item.id),
    this.$axios.get('/ghost/get/similar/' + this.type + '/' + this.data.item.id),
    accessibilityPromise,
    this.$axios.get(statisticsEndpoint + this.type + '/' + this.data.item.id)
  ])

  // ادغام داده‌های دریافتی برای فیلم
  this.casts = castRes.data.data.casts
  this.directors = castRes.data.data.directors
  this.producers = castRes.data.data.producers
  this.writers = castRes.data.data.writers
  this.investors = castRes.data.data.investors
  this.characters = castRes.data.data.characters
  this.medias = mediaRes.data.data.medias
  this.similar = similarRes.data.data.similar
  this.offer = similarRes.data.data.offer
  this.owned = accessibilityRes.data.data.owned
  this.owned_period_end = accessibilityRes.data.data.owned_period_end
  this.actions = accessibilityRes.data.data.actions
  this.total_claps = statisticsRes.data.data.claps.total
  this.user_claps = statisticsRes.data.data.claps.user
  this.current_time = statisticsRes.data.data.current_time
  this.duration_time = statisticsRes.data.data.duration_time
  this.is_watchlist = statisticsRes.data.data.is_watchlist
  this.comm_num = statisticsRes.data.data.comm_num
} else {
  const seasonEndpoint = this.$auth.loggedIn
    ? '/get/season/'
    : '/ghost/get/season/'
    
  const [castRes, mediaRes, similarRes, accessibilityRes, statisticsRes, seasonRes] = await Promise.all([
    this.$axios.get('/get/cast/' + this.type + '/' + this.data.item.id),
    this.$axios.get('/get/media/' + this.type + '/' + this.data.item.id),
    this.$axios.get('/ghost/get/similar/' + this.type + '/' + this.data.item.id),
    accessibilityPromise,
    this.$axios.get(statisticsEndpoint + this.type + '/' + this.data.item.id),
    this.$axios.get(seasonEndpoint + this.type + '/' + this.data.item.id)
  ])

  // ادغام داده‌های دریافتی برای محتواهای غیر فیلم (سریال/اپیزود)
  this.casts = castRes.data.data.casts
  this.directors = castRes.data.data.directors
  this.producers = castRes.data.data.producers
  this.writers = castRes.data.data.writers
  this.investors = castRes.data.data.investors
  this.characters = castRes.data.data.characters
  this.medias = mediaRes.data.data.medias
  this.similar = similarRes.data.data.similar
  this.offer = similarRes.data.data.offer
  this.owned = accessibilityRes.data.data.owned
  this.owned_period_end = accessibilityRes.data.data.owned_period_end
  this.actions = accessibilityRes.data.data.actions
  this.total_claps = statisticsRes.data.data.claps.total
  this.user_claps = statisticsRes.data.data.claps.user
  this.current_time = statisticsRes.data.data.current_time
  this.duration_time = statisticsRes.data.data.duration_time
  this.is_watchlist = statisticsRes.data.data.is_watchlist
  this.comm_num = statisticsRes.data.data.comm_num
  // اختصاص داده‌های مربوط به فصل
  this.season = seasonRes.data.data.season
  this.last_episode_seen = seasonRes.data.data.last_episode_seen
  this.first_episode = seasonRes.data.data.first_episode
  this.last_episode = seasonRes.data.data.last_episode
}

            if(this.type=="series" && this.season){
              this.season_num=this.sizeofobj(this.season)

              if(this.season_num>0){
                var j=this

                for (const [key, value] of Object.entries(this.season)) {
                  j.episode_num=j.episode_num+j.sizeofobj(value)
                  key
                }

              }
            }
          



        if(this.type=='series'){
          if(this.last_episode_seen)
            this.episode=this.last_episode_seen
          else if(this.first_episode)
             this.episode=this.first_episode

        }

              if(this.$route.query.force_subscription==1){

                this.$store.dispatch('subscription/SHOW_MODAL',{content_type: this.type,content_id: this.data.item.id})
              }else if(this.$route.query.force_download==1){

                this.ftb=false
                this.DOWNLOAD_MODAL_LOAD()
              }
              if(this.type!='movie' && this.season){

                if(this.type=='episode'){
                  this.selectseriesid=this.data.item.season_number
                  this.seasontitle='فصل '+this.selectseriesid
                }else if(this.type=='series'){
                  if(this.data.last_episode)
                    this.selectseriesid=this.last_episode.season_number
                  else
                    this.selectseriesid=Object.keys(this.season)[0]
                  this.seasontitle='فصل '+this.selectseriesid
                }
              }

  } catch (error) {
    console.error("Error loading additional movie data:", error)
  }
},

          INIT(firstrun){
            if(firstrun==1){
          window.addEventListener("resize", this.itemsize)
        }
this.$store.dispatch('SET_CONTENT_SUBSCRIPTION_ACTION',this.data.item.vod)
          },
            PLAY(action=null) {
              if(action=="play"){
                if(this.type=='series'){
                  if(this.episode.id)
                    this.$router.push({ name: 'episode-show-id' , params: {id: this.episode.id }})
                }else{
                  this.$router.push({ name: this.type+'-show-id' , params: {id: this.data.item.id }})
                }
              }else if(action=="buy"){
                if(this.actions.downloadButton.exist)
                  this.ftb=true
                else
                  this.ftb=false
                this.DOWNLOAD_MODAL_LOAD()
              }else if(action=="subscription"){
                this.$store.dispatch('subscription/SHOW_MODAL',{content_type: this.type,content_id: this.data.item.id})
                //this.DOWNLOAD_MODAL_LOAD()
              }
            },
            HIDE_MODAL2() {
              this.$router.push({path: this.$route.path})
              // this.$router.replace({'force_download': null})
              this.$store.dispatch('DOWNLOAD_MODAL_CLEAN')
            },
            HIDE_MODAL3() {
              this.$store.dispatch('PLAYER_MODAL_CLEAN')
            },
            ChooseLang(en,fa){
                if(fa && this.$i18n.locale=="fa")
                    return fa
                else
                    return en
            },
            Chooseback(cdn,teaser,backdrop){
                if(teaser)
                    return cdn+'files/'+teaser
                else
                    return cdn+'backdrops/'+backdrop
            },
            hasHistory () { return window.history.length > 2 },

 
 

       GET_FILE(content) {
          this.modalcontent=content
          this.$store.dispatch('PLAYER_MODAL_LOAD')
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
    DOWNLOAD_MODAL_LOAD(action=null) {
      // this.$router.push({path: this.$route.path, query: { force_download: 1 }})
      this.$store.dispatch('DOWNLOAD_MODAL_LOAD')
      return action
    },
    isactiveseason(season){
      if(this.type=="episode")
        if(season==this.data.item.season_number)
          return true
        else
          return false
      else
        if(this.first_episode && season==this.first_episode.season_number)
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
    const w = window.innerWidth
  // محاسبه‌ی offset ثابت بسته به عرض صفحه
  let offset = 25
  if (w <= 357) {
    offset = 10
  } else if (w <= 375) {
    offset = 12
  }

  // کش کردن المان‌های پرکاربرد
  const outerWrapper = document.getElementById("showcase-thumbnail-wrapper-outter")
  const buttonWrapper = document.getElementById("showcase-button-wrapper")
  const bottomEl = document.querySelector(".showcase-bottom")

  if (!bottomEl || !outerWrapper || !buttonWrapper) {
    return e
  }

  // همیشه استایل‌های قدیمی را پاک کن
  bottomEl.style.removeProperty("height")
  bottomEl.style.removeProperty("padding-top")

  if (w <= 767.98) {
    // ارتفاع قابل استفاده
    const vh = outerWrapper.offsetHeight - buttonWrapper.offsetHeight - offset
    bottomEl.style.height = `${vh}px`

    // محاسبه‌ی padding-top اگر دکمه دانلود وجود نداشته باشد
    const hasDownload = this.actions?.downloadButton?.exist
    if (!hasDownload) {
      const factor = this.data.item.ir ? 0.5 : (1/3)
      bottomEl.style.paddingTop = `${vh * factor}px`
    }
  }

  return e
},
    selectseries(id){
       this.selectseriesid=id
       this.seasontitle='فصل '+id

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