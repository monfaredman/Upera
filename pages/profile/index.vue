<template>
  <div id="checkcontainer">
    <div v-if="!$auth.loggedIn" class="container-fluid">
      <section id="banner" class="mt-5 pt-lg-5 pt-md-5">
        <div class="container">
          <header class="headline mt-5">
            <h5 class="title font-weight-bold">
              {{ $t('new.account') }}
            </h5>
          </header>
          <div class="d-flex flex-column justify-content-center align-items-center">
            <img class="image-profile" src="@/assets/img/profile.png" alt="">
            <!--             <nuxt-link :to="{ path: 'login', query: { redirect: 'profile' }}" class="btn btn-lg btn-main px-4 px-md-4 py-md-2 my-2 mb-4">
              {{ $t('new.login_register') }}
            </nuxt-link> -->

            <a class="btn btn-lg btn-main px-4 px-md-4 py-md-2 my-2 mb-4" href="" @click.prevent="SHOW_MODAL();">
              {{ $t('new.login_register') }}
            </a>
            <p class="text-center h6 font-weight-normal">
              {{ $t('new.loginDescription') }}
            </p>
          </div>
        </div>
      </section>
    </div>
    <div v-else>
      <div class="container-fluid">
        <section id="banner" class="mt-5 pt-lg-5 pt-md-5">
          <div class="container">
            <header class="headline mt-5">
              <h5 class="title font-weight-bold">
                {{ $t('new.myMovies') }}
              </h5>
            </header>
          </div>
        </section>
      </div>
      <section v-if="data.recently && data.recently!==null" id="watching" class="horizontal-list-container mt-lg-4 pt-5">
        <div class="d-flex align-items-center justify-content-between w-full">
          <h4 class="font-weight-bold text-nowrap mr-5 px-5 in-watching">
            {{ ChooseLang(data.recently.list,data.recently.list_fa) }}
          </h4>
          <div v-swiper:watchSwip="swiperOption2" class="swiper-container watching-slide">
            <div class="swiper-wrapper">
              <!-- Slides -->
              <div v-for="(item,index) in data.recently.data" :key="index" class="swiper-slide">
                <nuxt-link v-if="item.type=='movie'" :to="{ name: 'movie-show-id', params: { id: item.id }}">
                  <img data-back="/images/364x190.png" :src="'https://thumb.upera.tv/thumb?w=364&h=190&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+item.backdrop" :alt="item.name">
                </nuxt-link>
                <nuxt-link v-else-if="item.type=='episode'" :to="{ name: 'episode-show-id', params: { id: item.id }}">
                  <img data-back="/images/364x190.png" :src="'https://thumb.upera.tv/thumb?w=364&h=190&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+item.backdrop" :alt="item.name">
                </nuxt-link>
                <nuxt-link v-else :to="{ name: 'series-show-id', params: { id: item.id }}">
                  <img data-back="/images/364x190.png" :src="'https://thumb.upera.tv/thumb?w=364&h=190&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+item.backdrop" :alt="item.name">
                </nuxt-link>
                <div class="progress">
                  <div class="progress-bar" :style="'width: '+(item.current_time/item.duration_time)*100+'%'" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section v-if="data.downloads && data.downloads!==null" class="horizontal-list-container reach-begin mt-5">
        <div class="d-flex justify-content-between align-items-center mb-2 container-fluid">
          <h4 class="font-weight-bold">
            {{ ChooseLang(data.downloads.list,data.downloads.list_fa) }}
          </h4>
          <nuxt-link :to="{ name: 'profile-list-list', params: { list: 'downloads' }}" class="mb-1">
            {{ $t('new.show_all') }}
            <img src="@/assets/img/more.svg" height="3" alt="">
          </nuxt-link>
        </div>
        <div v-swiper:downloadsSwiper="swiperOption" class="newset-slider">
          <div class="swiper-wrapper py-1">
            <!-- Slides -->
            <div v-for="(item,index) in data.downloads.data" :key="index" class="swiper-slide" :class="{'movielabel':item.type=='movie'}">
              <nuxt-link :to="{ name: item.type+'-id', params: { id: item.id }}" :class="{'is-series': item.type!='movie'}">
                <img data-back="/images/142x212.png" :src="'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                <img v-if="item.type!='movie'" data-back="/images/142x212.png" :src="'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                <img v-if="item.type!='movie'" data-back="/images/142x212.png" :src="'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                <span v-if="!item.ir && item.persian" class="label label-rounded label-red label-1">دوبله</span>
                <span v-if="!item.ir && !item.persian" class="label label-rounded label-warning label-1">زیرنویس</span>
                <span v-if="item.free" class="label label-blue label-2" :class="{'label-rotated':item.type=='movie'}">رایگان</span>
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

      <section v-if="data.watchlist && data.watchlist!==null" class="horizontal-list-container mt-5 reach-begin">
        <div class="d-flex justify-content-between align-items-center mb-2 container-fluid">
          <h4 class="font-weight-bold">
            {{ ChooseLang(data.watchlist.list,data.watchlist.list_fa) }}
          </h4>
          <nuxt-link :to="{ name: 'profile-list-list', params: { list: 'watchlist' }}" class="mb-1">
            {{ $t('new.show_all') }}
            <img src="@/assets/img/more.svg" height="3" alt="">
          </nuxt-link>
        </div>
        <div v-swiper:watchlistSwiper="swiperOption" class="newset-slider">
          <div class="swiper-wrapper py-1">
            <!-- Slides -->
            <div v-for="(item,index) in data.watchlist.data" :key="index" class="swiper-slide" :class="{'movielabel':item.type=='movie'}">
              <nuxt-link :to="{ name: item.type+'-id', params: { id: item.id }}" :class="{'is-series': item.type!='movie'}">
                <img data-back="/images/142x212.png" :src="'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                <img v-if="item.type!='movie'" data-back="/images/142x212.png" :src="'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                <img v-if="item.type!='movie'" data-back="/images/142x212.png" :src="'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                <span v-if="!item.ir && item.persian" class="label label-rounded label-red label-1">دوبله</span>
                <span v-if="!item.ir && !item.persian" class="label label-rounded label-warning label-1">زیرنویس</span>
                <span v-if="item.free" class="label label-blue label-2" :class="{'label-rotated':item.type=='movie'}">رایگان</span>
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

      <section v-if="data.likes && data.likes!==null" class="horizontal-list-container mt-5 reach-begin">
        <div class="d-flex justify-content-between align-items-center mb-2 container-fluid">
          <h4 class="font-weight-bold">
            {{ ChooseLang(data.likes.list,data.likes.list_fa) }}
          </h4>
          <nuxt-link :to="{ name: 'profile-list-list', params: { list: 'likes' }}" class="mb-1">
            {{ $t('new.show_all') }}
            <img src="@/assets/img/more.svg" height="3" alt="">
          </nuxt-link>
        </div>
        <div v-swiper:likesSwiper="swiperOption" class="newset-slider">
          <div class="swiper-wrapper py-1">
            <!-- Slides -->
            <div v-for="(item,index) in data.likes.data" :key="index" class="swiper-slide" :class="{'movielabel':item.type=='movie'}">
              <nuxt-link :to="{ name: item.type+'-id', params: { id: item.id }}" :class="{'is-series': item.type!='movie'}">
                <img data-back="/images/142x212.png" :src="'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                <img v-if="item.type!='movie'" data-back="/images/142x212.png" :src="'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                <img v-if="item.type!='movie'" data-back="/images/142x212.png" :src="'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                <span v-if="!item.ir && item.persian" class="label label-rounded label-red label-1">دوبله</span>
                <span v-if="!item.ir && !item.persian" class="label label-rounded label-warning label-1">زیرنویس</span>
                <span v-if="item.free" class="label label-blue label-2" :class="{'label-rotated':item.type=='movie'}">رایگان</span>
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

      <section v-if="data.offer && data.offer!==null" class="horizontal-list-container mt-5 reach-begin">
        <div class="d-flex justify-content-between align-items-center mb-2 container-fluid">
          <h4 class="font-weight-bold">
            {{ ChooseLang(data.offer.list,data.offer.list_fa) }}
          </h4>
          <nuxt-link :to="{ name: 'profile-list-list', params: { list: 'offer' }}" class="mb-1">
            {{ $t('new.show_all') }}
            <img src="@/assets/img/more.svg" height="3" alt="">
          </nuxt-link>
        </div>
        <div v-swiper:offerSwiper="swiperOption" class="newset-slider">
          <div class="swiper-wrapper py-1">
            <!-- Slides -->
            <div v-for="(item,index) in data.offer.data" :key="index" class="swiper-slide" :class="{'movielabel':item.type=='movie'}">
              <nuxt-link :to="{ name: item.type+'-id', params: { id: item.id }}" :class="{'is-series': item.type!='movie'}">
                <img data-back="/images/142x212.png" :src="'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                <img v-if="item.type!='movie'" data-back="/images/142x212.png" :src="'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                <img v-if="item.type!='movie'" data-back="/images/142x212.png" :src="'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                <span v-if="!item.ir && item.persian" class="label label-rounded label-red label-1">دوبله</span>
                <span v-if="!item.ir && !item.persian" class="label label-rounded label-warning label-1">زیرنویس</span>
                <span v-if="item.free" class="label label-blue label-2" :class="{'label-rotated':item.type=='movie'}">رایگان</span>
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


      <section v-if="data.watched && data.watched!==null" class="horizontal-list-container mt-5 reach-begin">
        <div class="d-flex justify-content-between align-items-center mb-2 container-fluid">
          <h4 class="font-weight-bold">
            {{ ChooseLang(data.watched.list,data.watched.list_fa) }}
          </h4>
          <nuxt-link :to="{ name: 'profile-list-list', params: { list: 'watched' }}" class="mb-1">
            {{ $t('new.show_all') }}
            <img src="@/assets/img/more.svg" height="3" alt="">
          </nuxt-link>
        </div>
        <div v-swiper:watchedSwiper="swiperOption" class="newset-slider">
          <div class="swiper-wrapper py-1">
            <!-- Slides -->
            <div v-for="(item,index) in data.watched.data" :key="index" class="swiper-slide" :class="{'movielabel':item.type=='movie'}">
              <nuxt-link :to="{ name: item.type+'-id', params: { id: item.id }}" :class="{'is-series': item.type!='movie'}">
                <img data-back="/images/142x212.png" :src="'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                <img v-if="item.type!='movie'" data-back="/images/142x212.png" :src="'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                <img v-if="item.type!='movie'" data-back="/images/142x212.png" :src="'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+item.poster" :alt="item.name">
                <span v-if="!item.ir && item.persian" class="label label-rounded label-red label-1">دوبله</span>
                <span v-if="!item.ir && !item.persian" class="label label-rounded label-warning label-1">زیرنویس</span>
                <span v-if="item.free" class="label label-blue label-2" :class="{'label-rotated':item.type=='movie'}">رایگان</span>
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
  head() {

    return { title:  this.$t('setting.profile') }
  },
    mounted() {
      if(this.data.recently!=null){
      
          const watching = document.getElementById("watching")
      if(this.watchSwip && watching){
    this.watchSwip.on('reachBeginning', () => {
        watching.classList.remove('swipe')
    })
    this.watchSwip.on('fromEdge', () => {
        watching.classList.add('swipe')
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
    },
    SHOW_MODAL(){
      this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})
    }
  }
  }
</script>
