<template>
  <div>
    <section v-if="data.top!==null" id="feature">
      <VueSlickCarousel ref="carousel" v-bind="swiperOption3">
        <div v-for="(item,index) in data.top" :key="index">
          <div class="swiper-slide">
            <div class="feature-slide">
              <img data-not-lazy class="bg-img" :src="'https://thumb.contentpanel.click/thumb?w=850&h=500&q=100&a=c&zc=1&src=https://cdn.upera.shop/s3/backdrops/'+item.backdrop" :alt="item.name">
              <div dir="rtl" class="feature pb-lg-2">
                <h2 class="title mb-lg-3">
                  {{ ChooseLang(item.name,item.name_fa) }}
                </h2>
                <h4 class="tags mb-lg-4 d-none d-md-block">
                  <em v-for="(item2,index2) in ChooseLangAllGenres(item.genre)" :key="index2">{{ item2 }}<em v-if="index2+1 < ChooseLangAllGenres(item.genre).length"><span> + </span></em></em>
                </h4>
                <div class="d-flex align-items-center justify-content-around feature-buttons">
                  <nuxt-link v-if="item.type=='movie'" :to="{ name: 'movie-id', params: { id: item.id }}" class="feature-btn">
                    <i class="fas fa-2x fa-info-circle" />
                    <span>توضیحات فیلم</span>
                  </nuxt-link>
                  <nuxt-link v-else-if="item.type=='episode'" :to="{ name: 'episode-id', params: { id: item.id }}" class="feature-btn">
                    <i class="fas fa-2x fa-info-circle" />
                    <span>توضیحات این قسمت سریال</span>
                  </nuxt-link>
                  <nuxt-link v-else :to="{ name: 'series-id', params: { id: item.id }}" class="feature-btn">
                    <i class="fas fa-2x fa-info-circle" />
                    <span>توضیحات سریال</span>
                  </nuxt-link>

                  <nuxt-link v-if="item.type=='movie'" :to="{ name: 'movie-show-id', params: { id: item.id }}" class="show-btn">
                    <span>نمایش</span>
                    <img data-not-lazy class="ml-2" src="@/assets/img/play.svg" alt="">
                  </nuxt-link>
                  <nuxt-link v-else-if="item.type=='episode'" :to="{ name: 'episode-show-id', params: { id: item.id }}" class="show-btn">
                    <span>نمایش</span>
                    <img data-not-lazy class="ml-2" src="@/assets/img/play.svg" alt="">
                  </nuxt-link>
                  <nuxt-link v-else :to="{ name: 'series-show-id', params: { id: item.id }}" class="show-btn">
                    <span>نمایش</span>
                    <img data-not-lazy class="ml-2" src="@/assets/img/play.svg" alt="">
                  </nuxt-link>

                  <a class="feature-btn" @click="ADD_WATCHLIST(item.id, item.type, index, item.is_watchlist)">
                    <i :class="{ 'fa': item.is_watchlist==1,'far': item.is_watchlist==0 }" class="fa-2x fa-bookmark" />
                    <span>بعدا میبینم</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
      <div dir="rtl" class="feature-button-wrap">
        <img class="swiper-next" src="@/assets/img/icons/arrow-prev.svg" @click="showNext">
        <img class="swiper-prev" src="@/assets/img/icons/arrow-next.svg" @click="showPrev">
      </div>
    </section>

    <section v-if="data.occasions!==null" id="special" class="mb-5">
      <div v-for="(list,i) in data.occasions" :key="i" class="container-fluid">
        <div class="special d-flex flex-column justify-content-start align-items-start align-items-lg-center flex-lg-row">
          <h4 class="font-weight-bold text-nowrap mr-lg-5 mb-4 mb-lg-0 special-title">
            {{ ChooseLang(list.occasion,list.occasion_fa) }}
          </h4>
          <div class="position-relative w-full">
            <div id="special-slides">
              <div v-for="(item,index) in list.list" :key="index" class="special-slide" :class="{ active: index==0 }">
                <div class="d-flex justify-content-start w-full special">
                  <img class="special-image spec-1" :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
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
                          <span v-for="(item2,index2) in ChooseLangAllGenres(item.genre)" :key="index2">{{ item2 }}<span v-if="index2+1 < ChooseLangAllGenres(item.genre).length"> | </span></span>
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
    <section v-if="data.offer!==null" class="mt-4 reach-begin">
      <div class="d-flex align-items-center justify-content-between w-full px-4 p-sm-3">
        <h4 class="font-weight-bold">
          {{ ChooseLang(data.titles_en.offer,data.titles.offer) }}
        </h4>
        <div class="d-flex flex-column justify-content-center align-items-center small">
          <nuxt-link :to="{ name: 'lists-list', params: { list: 'offer' }}" class="mb-1">
            {{ $t('new.show_all') }}
          </nuxt-link>
          <img src="@/assets/img/more.svg" height="3" alt="">
        </div>
      </div>
      <div v-swiper:offerSwiper="swiperOption" class="pr-1 newset-slider">
        <div class="swiper-wrapper py-4">
          <!-- Slides -->
          <div v-for="(item,index) in data.offer" :key="index" class="swiper-slide">
            <nuxt-link v-if="item.type=='movie'" :to="{ name: 'movie-id', params: { id: item.id }}">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
            </nuxt-link>
            <nuxt-link v-else-if="item.type=='episode'" :to="{ name: 'episode-id', params: { id: item.id }}" class="is-series">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
            </nuxt-link>
            <nuxt-link v-else :to="{ name: 'series-id', params: { id: item.id }}" class="is-series">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
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

    <section v-if="data.free!==null" class="reach-begin">
      <div class="d-flex align-items-center justify-content-between w-full px-4 p-sm-3">
        <h4 class="font-weight-bold">
          {{ ChooseLang(data.titles_en.free,data.titles.free) }}
        </h4>
        <div class="d-flex flex-column justify-content-center align-items-center small">
          <nuxt-link :to="{ name: 'lists-list', params: { list: 'free' }}" class="mb-1">
            {{ $t('new.show_all') }}
          </nuxt-link>
          <img src="@/assets/img/more.svg" height="3" alt="">
        </div>
      </div>
      <div v-swiper:freeSwiper="swiperOption" class="pr-1 newset-slider">
        <div class="swiper-wrapper py-4">
          <!-- Slides -->
          <div v-for="(item,index) in data.free" :key="index" class="swiper-slide">
            <nuxt-link v-if="item.type=='movie'" :to="{ name: 'movie-id', params: { id: item.id }}">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
            </nuxt-link>
            <nuxt-link v-else-if="item.type=='episode'" :to="{ name: 'episode-id', params: { id: item.id }}" class="is-series">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
            </nuxt-link>
            <nuxt-link v-else :to="{ name: 'series-id', params: { id: item.id }}" class="is-series">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
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

    <section v-if="data.new_titles!==null" class="reach-begin">
      <div class="d-flex align-items-center justify-content-between w-full px-4 p-sm-3">
        <h4 class="font-weight-bold">
          {{ ChooseLang(data.titles_en.new_titles,data.titles.new_titles) }}
        </h4>
        <div class="d-flex flex-column justify-content-center align-items-center small">
          <nuxt-link :to="{ name: 'lists-list', params: { list: 'new_titles' }}" class="mb-1">
            {{ $t('new.show_all') }}
          </nuxt-link>
          <img src="@/assets/img/more.svg" height="3" alt="">
        </div>
      </div>
      <div v-swiper:new_titlesSwiper="swiperOption" class="pr-1 newset-slider">
        <div class="swiper-wrapper py-4">
          <!-- Slides -->
          <div v-for="(item,index) in data.new_titles" :key="index" class="swiper-slide">
            <nuxt-link v-if="item.type=='movie'" :to="{ name: 'movie-id', params: { id: item.id }}">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
            </nuxt-link>
            <nuxt-link v-else-if="item.type=='episode'" :to="{ name: 'episode-id', params: { id: item.id }}" class="is-series">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
            </nuxt-link>
            <nuxt-link v-else :to="{ name: 'series-id', params: { id: item.id }}" class="is-series">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
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

    <section v-if="data.soon!==null" class="reach-begin">
      <div class="d-flex align-items-center justify-content-between w-full px-4 p-sm-3">
        <h4 class="font-weight-bold">
          {{ ChooseLang(data.titles_en.soon,data.titles.soon) }}
        </h4>
        <div class="d-flex flex-column justify-content-center align-items-center small">
          <nuxt-link :to="{ name: 'lists-list', params: { list: 'soon' }}" class="mb-1">
            {{ $t('new.show_all') }}
          </nuxt-link>
          <img src="@/assets/img/more.svg" height="3" alt="">
        </div>
      </div>
      <div v-swiper:soonSwiper="swiperOption" class="pr-1 newset-slider">
        <div class="swiper-wrapper py-4">
          <!-- Slides -->
          <div v-for="(item,index) in data.soon" :key="index" class="swiper-slide">
            <nuxt-link v-if="item.type=='movie'" :to="{ name: 'movie-id', params: { id: item.id }}">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
            </nuxt-link>
            <nuxt-link v-else-if="item.type=='episode'" :to="{ name: 'episode-id', params: { id: item.id }}" class="is-series">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
            </nuxt-link>
            <nuxt-link v-else :to="{ name: 'series-id', params: { id: item.id }}" class="is-series">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
              <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
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

    <section v-if="data.recenlty!==null" id="watching" class="mt-lg-4 pt-5">
      <div class="d-flex align-items-center justify-content-between w-full">
        <h4 class="font-weight-bold text-nowrap mr-4 px-2 in-watching">
          {{ ChooseLang(data.titles_en.recenlty,data.titles.recenlty) }}
        </h4>
        <div v-swiper:watchSwip="swiperOption2" class="pr-1 swiper-container watching-slider">
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div v-for="(item,index) in data.recenlty" :key="index" class="swiper-slide">
              <nuxt-link v-if="item.type=='movie'" :to="{ name: 'movie-show-id', params: { id: item.id }}">
                <img :src="'https://thumb.contentpanel.click/thumb?w=364&h=190&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+item.backdrop" :alt="item.name">
              </nuxt-link>
              <nuxt-link v-else-if="item.type=='episode'" :to="{ name: 'episode-show-id', params: { id: item.id }}">
                <img :src="'https://thumb.contentpanel.click/thumb?w=364&h=190&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+item.backdrop" :alt="item.name">
              </nuxt-link>
              <nuxt-link v-else :to="{ name: 'series-show-id', params: { id: item.id }}">
                <img :src="'https://thumb.contentpanel.click/thumb?w=364&h=190&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+item.backdrop" :alt="item.name">
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div v-for="(list, rootindex) in data.data" :key="rootindex">
      <div v-if="list.list.length > 0 ">
        <section class="newset2 reach-begin">
          <div class="d-flex align-items-center justify-content-between w-full mb-2 px-4">
            <h4 class="font-weight-bold">
              {{ ChooseLangGenres(list.genre) }}
              <!--               <small v-if="list.type === 'Movies'" class="text-muted"> - {{ $t('home.movies') }} </small>
              <small v-else class="text-muted"> - {{ $t('home.series') }} </small> -->
            </h4>
            <div class="d-flex flex-column justify-content-center align-items-center small">
              <nuxt-link :to="{ name: 'genres-genre', params: { genre: list.genre.toLowerCase() }}" class="mb-1">
                {{ $t('new.show_all') }}
              </nuxt-link>
              <img src="@/assets/img/more.svg" height="3" alt="">
            </div>
          </div>
          <div v-swiper:[rootindex]="swiperOption" class="pr-1 swiper-container newset-slider2">
            <div class="swiper-wrapper py-4">
              <div v-for="(item, index) in list.list" :key="index" class="swiper-slide">
                <nuxt-link v-if="item.type=='movie'" :to="{ name: 'movie-id', params: { id: item.id }}">
                  <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                </nuxt-link>
                <nuxt-link v-else-if="item.type=='episode'" :to="{ name: 'episode-id', params: { id: item.id }}" class="is-series">
                  <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                  <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                  <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                </nuxt-link>
                <nuxt-link v-else :to="{ name: 'series-id', params: { id: item.id }}" class="is-series">
                  <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                  <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                  <img :src="'https://thumb.contentpanel.click/thumb?w=136&h=202&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
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
      </div>
    </div>
  </div>
</template>
<script>
    export default {
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
  	    res = await context.app.$axios.get('/get/discover')
  	 }else{
  	 	res = await context.app.$axios.get('/ghost/get/discover')
  	 }
    return {data:res.data.data}
  },
    data () {
      return {
      	data:{},
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
        swiperOption3: {
 "dots": false,
 "arrows": false,
  "infinite": true,
  "speed": 500,
  "slidesToShow": 1,
  "slidesToScroll": 1,
  "touchThreshold": 10
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
    mounted() {


      console.log(this.data)
    	if(this.data.recenlty!=null){
    	    const watching = $('#watching')
    	
    this.watchSwip.on('reachBeginning', () => {
        watching.removeClass('swipe')
    })
    this.watchSwip.on('fromEdge', () => {
        watching.addClass('swipe')
    })
}




if(this.data.occasions!=null){
 $(document).ready(function () {

    const spec = $('.special-slide')
    $('#special').height(spec.height()+20)

    $(window).resize(function () {
        setTimeout(() => {
            $('#special').height($('.special-slide').height())
        }, 500)
        // $(".modal:visible").each(alignModal);
    })

    var cur = 0
    var count = spec.length

    $('.special-slide.active').find('.special-image').css({ transform: 'translate3d(-15px, 15px, 0)', zIndex: '9' })
    spec.not('.active').each(function (index) {
        $(this).find('.special-image').css({
            transform: `translate3d(-${index * 5}px, ${index * 5}px, 0)`,
            zIndex: index
        })
    })

    setInterval(function () {
        spec.eq(cur).removeClass('active')
        cur = (cur + 1) % count
        spec.eq(cur).addClass('active')
        spec.eq(cur).find('.special-image').css({ transform: 'translate3d(-15px, 15px, 0)', zIndex: '9' })
        let curr = cur
        spec.not('.active').each(function (index) {
            curr = (cur + (index + 1)) % count
            spec.eq(curr).find('.special-image').css({
                transform: `translate3d(${- index * 5}px, ${index * 5}px, 0)`,
                zIndex: index + 1
            })
        })
    }, 3000)



})
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
                    this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null})

                }
                
    }
  }
  }
</script>