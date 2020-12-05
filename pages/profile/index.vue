<template>
  <div>
    <div v-if="!this.$auth.loggedIn">
      <section id="banner" class="mt-5  pt-md-3 pt-lg-5">
        <div class="container">
          <header class="headline mt-5">
            <h5 class="title font-weight-bold">
              {{ $t('new.account') }}
            </h5>
          </header>
          <div class="d-flex flex-column justify-content-center align-items-center">
            <img class="image-profile" src="@/assets/img/profile.png" alt="">
            <nuxt-link :to="{ path: 'login', query: { redirect: 'profile' }}" class="btn btn-lg btn-primary px-4 px-md-4 py-md-2 my-2 mb-4">
              {{ $t('new.login_register') }}
            </nuxt-link>
            <p class="text-center h6 font-weight-normal">
              {{ $t('new.loginDescription') }}
            </p>
          </div>
        </div>
      </section>
    </div>
    <div v-else>
      <section id="banner" class="mt-5  pt-md-3 pt-lg-5">
        <div class="container">
          <header class="headline mt-5">
            <h5 class="title font-weight-bold">
              {{ $t('new.myMovies') }}
            </h5>
          </header>
        </div>
      </section>
      <section v-if="data.recently && data.recently!==null" id="watching" class="mt-lg-4 pt-5">
        <div class="d-flex align-items-center justify-content-between w-full">
          <h4 class="font-weight-bold text-nowrap mr-4 px-2 in-watching">
            {{ ChooseLang(data.recently.list,data.recently.list_fa) }}
          </h4>
          <div v-swiper:watchSwip="swiperOption2" class="pr-1 swiper-container watching-slider">
            <div class="swiper-wrapper">
              <!-- Slides -->
              <div v-for="(item,index) in data.recently.data" :key="index" class="swiper-slide">
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


      <section v-if="data.downloads && data.downloads!==null" class="mt-4 reach-begin">
        <div class="d-flex align-items-center justify-content-between w-full px-4 p-sm-3">
          <h4 class="font-weight-bold">
            {{ ChooseLang(data.downloads.list,data.downloads.list_fa) }}
          </h4>
          <div class="d-flex flex-column justify-content-center align-items-center small">
            <nuxt-link :to="{ name: 'profile-list-list', params: { list: 'downloads' }}" class="mb-1">
              {{ $t('new.show_all') }}
            </nuxt-link>
            <img src="@/assets/img/more.svg" height="3" alt="">
          </div>
        </div>
        <div v-swiper:downloadsSwiper="swiperOption" class="pr-1 newset-slider">
          <div class="swiper-wrapper py-4">
            <!-- Slides -->
            <div v-for="(item,index) in data.downloads.data" :key="index" class="swiper-slide">
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

      <section v-if="data.watchlist && data.watchlist!==null" class="mt-4 reach-begin">
        <div class="d-flex align-items-center justify-content-between w-full px-4 p-sm-3">
          <h4 class="font-weight-bold">
            {{ ChooseLang(data.watchlist.list,data.watchlist.list_fa) }}
          </h4>
          <div class="d-flex flex-column justify-content-center align-items-center small">
            <nuxt-link :to="{ name: 'profile-list-list', params: { list: 'watchlist' }}" class="mb-1">
              {{ $t('new.show_all') }}
            </nuxt-link>
            <img src="@/assets/img/more.svg" height="3" alt="">
          </div>
        </div>
        <div v-swiper:watchlistSwiper="swiperOption" class="pr-1 newset-slider">
          <div class="swiper-wrapper py-4">
            <!-- Slides -->
            <div v-for="(item,index) in data.watchlist.data" :key="index" class="swiper-slide">
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

      <section v-if="data.likes && data.likes!==null" class="mt-4 reach-begin">
        <div class="d-flex align-items-center justify-content-between w-full px-4 p-sm-3">
          <h4 class="font-weight-bold">
            {{ ChooseLang(data.likes.list,data.likes.list_fa) }}
          </h4>
          <div class="d-flex flex-column justify-content-center align-items-center small">
            <nuxt-link :to="{ name: 'profile-list-list', params: { list: 'likes' }}" class="mb-1">
              {{ $t('new.show_all') }}
            </nuxt-link>
            <img src="@/assets/img/more.svg" height="3" alt="">
          </div>
        </div>
        <div v-swiper:likesSwiper="swiperOption" class="pr-1 newset-slider">
          <div class="swiper-wrapper py-4">
            <!-- Slides -->
            <div v-for="(item,index) in data.likes.data" :key="index" class="swiper-slide">
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

      <section v-if="data.offer && data.offer!==null" class="mt-4 reach-begin">
        <div class="d-flex align-items-center justify-content-between w-full px-4 p-sm-3">
          <h4 class="font-weight-bold">
            {{ ChooseLang(data.offer.list,data.offer.list_fa) }}
          </h4>
          <div class="d-flex flex-column justify-content-center align-items-center small">
            <nuxt-link :to="{ name: 'profile-list-list', params: { list: 'offer' }}" class="mb-1">
              {{ $t('new.show_all') }}
            </nuxt-link>
            <img src="@/assets/img/more.svg" height="3" alt="">
          </div>
        </div>
        <div v-swiper:offerSwiper="swiperOption" class="pr-1 newset-slider">
          <div class="swiper-wrapper py-4">
            <!-- Slides -->
            <div v-for="(item,index) in data.offer.data" :key="index" class="swiper-slide">
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


      <section v-if="data.watched && data.watched!==null" class="mt-4 reach-begin">
        <div class="d-flex align-items-center justify-content-between w-full px-4 p-sm-3">
          <h4 class="font-weight-bold">
            {{ ChooseLang(data.watched.list,data.watched.list_fa) }}
          </h4>
          <div class="d-flex flex-column justify-content-center align-items-center small">
            <nuxt-link :to="{ name: 'profile-list-list', params: { list: 'watched' }}" class="mb-1">
              {{ $t('new.show_all') }}
            </nuxt-link>
            <img src="@/assets/img/more.svg" height="3" alt="">
          </div>
        </div>
        <div v-swiper:watchedSwiper="swiperOption" class="pr-1 newset-slider">
          <div class="swiper-wrapper py-4">
            <!-- Slides -->
            <div v-for="(item,index) in data.watched.data" :key="index" class="swiper-slide">
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
</template>
<script>
  export default {

  async asyncData (context) {
    let res
    if (context.app.$auth.loggedIn) {
        res = await context.app.$axios.get('/get/profile/get_list/all')

        return {data:res.data.data}
     }
    
  },
    data () {
      return {
        data:{
          recently: null,
          downloads: null,
          watchlist: null,
          likes: null,
          offer: null,
          watched: null
        },
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
      if(this.data.recently!=null){
      
          const watching = $('#watching')
      if(this.watchSwip){
    this.watchSwip.on('reachBeginning', () => {
        watching.removeClass('swipe')
    })
    this.watchSwip.on('fromEdge', () => {
        watching.addClass('swipe')
    })
  }
}


    },
  methods: {
    ChooseLang(en,fa){
        if(fa && this.$i18n.locale=="fa")
            return fa
        else
            return en
    }
  }
  }
</script>
