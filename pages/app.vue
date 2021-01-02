<template>
  <div>
    <section id="slideshow" class="slideshow d-none d-md-block mt-5">
      <div class="container-fluid">
        <div v-swiper:topSwiper="swiperOption" class="swiper-container app-slider" dir="rtl">
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">
              <a href="#">
                <img src="@/assets/img/app/2@3x.png" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="@/assets/img/app/3@3x.png" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="@/assets/img/app/2@3x.png" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="@/assets/img/app/3@3x.png" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="@/assets/img/app/2@3x.png" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="@/assets/img/app/3@3x.png" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="@/assets/img/app/2@3x.png" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="@/assets/img/app/2@3x.png" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="@/assets/img/app/3@3x.png" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="@/assets/img/app/2@3x.png" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="@/assets/img/app/3@3x.png" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div id="page" class="mb-5 mt-5">
      <!--       <h5 class="text-center my-5 px-md-5">
        با دانلود اپلیکیشن پف‌فیلم هر هفته با اینترنت نیم‌بها هفت فیلم رایگان ایرانی و
        خارجی ببینید
      </h5> -->

      <div class="container-fluid mb-5 mt-5 app_container">
        <div class="accordion">
          <h5 class="mb-1 mt-4 collapse-header ">
            <b-button id="collapse-1" v-b-toggle="'accordion-1'" variant="link" class="app_container_title">
              <i class="fa fa-angle-down pr-4 " />
              <b>دانلود اپلیکیشن اندروید</b>
            </b-button>
          </h5>
          <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel" @shown="show(1)" @hide="hide(1)">
            <div class="pl-5 collapse-content row">
              <div class="col-6 col-sm-4 col-lg-2 col-md-3 mb-3 mb-4 pr-0 mr-lg-3">
                <a href="" @click.prevent="install('https://play.google.com/store/apps/details?id=com.techera.upera')">
                  <img src="@/assets/img/app/Group 579@3x.png" alt="">
                </a>
              </div>
              <div class="col-6 col-sm-4 col-lg-2 col-md-3 mb-3 mb-4 pr-0 mr-lg-3">
                <a href="" @click.prevent="install('http://app.upera.tv/get_app/apk')">
                  <img class="" src="@/assets/img/app/Group 580@3x.png" alt="">
                </a>
              </div>
            </div>
          </b-collapse>
        </div>


        <div class="accordion">
          <h2 class="mb-1 mt-4 collapse-header">
            <b-button id="collapse-2" v-b-toggle="'accordion-2'" variant="link" class="app_container_title">
              <i class="fa fa-angle-up pr-4" />
              <b>دانلود اپلیکیشن iOS</b>
            </b-button>
          </h2>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel" @shown="show(2)" @hide="hide(2)">
            <div class="pl-5 collapse-content row">
              <!--               <div class="col-6 col-sm-4 col-lg-2 col-md-3 mb-3 mb-4 pr-0 mr-lg-3">
                <a href="#" data-toggle="modal" data-target="#phoneModal">
                  <img src="@/assets/img/app/Download_on_the_App_Store_Badge@3x.png" alt="">
                </a>
              </div> -->
              <div class="col-6 col-sm-4 col-lg-2 col-md-3 mb-3 mb-4 pr-0 mr-lg-3">
                <a href="" @click.prevent="install('https://sibirani.com/apps/Upera/')">
                  <img src="@/assets/img/app/sibirani.svg" alt="">
                </a>
              </div>
              <div class="col-6 col-sm-4 col-lg-2 col-md-3 mb-3 mb-4 pr-0 mr-lg-3">
                <a href="" @click.prevent="install('https://anardoni.com/ios/app/gUFrGOKi')">
                  <img src="@/assets/img/app/Anardoni-Badge-White-Persian@3x.png" alt="">
                </a>
              </div>
              <div class="col-6 col-sm-4 col-lg-2 col-md-3 mb-3 mb-4 pr-0 mr-lg-3">
                <a href="" @click.prevent="install('https://sibapp.com/applications/%D8%A2%D9%BE%D8%B1%D8%A7')">
                  <img src="@/assets/img/app/Group 581@3x.png" alt="">
                </a>
              </div>
              <!--               <div class="col-6 col-sm-4 col-lg-2 col-md-3 mb-3 mb-4 pr-0 mr-lg-3">
                <a href="#" data-toggle="modal" data-target="#phoneModal">
                  <img src="@/assets/img/app/Layer 2@3x.png" alt="">
                </a>
              </div> -->
              <!--               <div class="col-6 col-sm-4 col-lg-2 col-md-3 mb-3 mb-4 pr-0 mr-lg-3">
                <a href="#" data-toggle="modal" data-target="#phoneModal">
                  <img src="@/assets/img/app/Group 582@3x.png" alt="">
                </a>
              </div> -->
              <!--               <div class="col-6 col-sm-4 col-lg-2 col-md-3 mb-3 mb-4 pr-0 mr-lg-3">
                <a href="#" data-toggle="modal" data-target="#phoneModal">
                  <img src="@/assets/img/app/Group 578@3x.png" alt="">
                </a>
              </div>
              <div class="col-6 col-sm-4 col-lg-2 col-md-3 mb-3 mb-4 pr-0 mr-lg-3">
                <a href="#" data-toggle="modal" data-target="#phoneModal">
                  <img src="@/assets/img/app/badge-onWhite@3x.png" alt="">
                </a>
              </div> -->
            </div>
          </b-collapse>
        </div>


        <div class="accordion">
          <h2 class="mb-1 mt-4 collapse-header">
            <b-button id="collapse-3" v-b-toggle="'accordion-3'" variant="link" class="app_container_title">
              <i class="fa fa-angle-up pr-4" />
              <b>دانلود اپلیکیشن تلویزیون</b>
            </b-button>
          </h2>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel" @shown="show(3)" @hide="hide(3)">
            <div class="pl-5 collapse-content row">
              <div class="col-6 col-sm-4 col-lg-2 col-md-3 mb-3 mb-4 pr-0 mr-lg-3">
                <a href="" @click.prevent="install('https://play.google.com/store/apps/details?id=com.techera.uperatv')">
                  <img src="@/assets/img/app/Group 579@3x.png" alt="">
                </a>
              </div>
              <div class="col-6 col-sm-4 col-lg-2 col-md-3 mb-3 mb-4 pr-0 mr-lg-3">
                <a href="" @click.prevent="install('http://app.upera.tv/get_app/android_tv')">
                  <img class="" src="@/assets/img/app/Group 580@3x.png" alt="">
                </a>
              </div>
            </div>
          </b-collapse>
        </div>


        <div class="accordion">
          <h2 class="mb-1 mt-4 collapse-header">
            <b-button id="collapse-4" v-b-toggle="'accordion-4'" variant="link" class="app_container_title">
              <i class="fa fa-angle-up pr-4" />
              <b>دسترسی از طریق مرورگر تلویزیون‌های هوشمند
                و کنسول‌های بازی (WEBTV)</b>
            </b-button>
          </h2>
          <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel" @shown="show(4)" @hide="hide(4)">
            <div class="pl-5 collapse-content row">
              <div class="col-6 col-sm-4 col-lg-2 col-md-3 mb-3 mb-4 pr-0 mr-lg-3">
                <a href="" class="btn btn-lg btn-danger btn-block" @click.prevent="install('https://tv.upera.tv/')">
                  
                  ورود به WEBTV
                </a>
              </div>
            </div>
          </b-collapse>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
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
                        slidesPerView: 3.5,
                    },
                    992: {
                        slidesPerView: 3.5,
                    },
                    1024: {
                        slidesPerView: 4.5,
                    },
                    1420: {
                        slidesPerView: 7.5,
                    },
                    1670: {
                        slidesPerView: 8.5,
                    },

                }
            }
    }
  },
  head() {

    return { title:  'نصب اپلیکیشن فیلم و سریال' }
  },
  methods: {
    show(index) {
      $("#collapse-"+index).find(".fa").addClass("fa-angle-down").removeClass("fa-angle-up")
    },
    hide(index) {
      $("#collapse-"+index).find(".fa").addClass("fa-angle-up").removeClass("fa-angle-down")
    },
    install(url){
      if (this.$auth.loggedIn || !this.$cookiz.get('ref')) {
        window.location.href = url
      }else{
        this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})
      }
    }
  }
}
</script>