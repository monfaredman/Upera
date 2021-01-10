<template>
  <div>
    <section class="footer-sticky hide-mobile hide-tablet d-none">
      <div class="footer-sticky-wrapper-inner">
        <div class="container-fluid px-0">
          <div class="d-flex align-items-center justify-content-between">
            <ul class="nav nav-separator">
              <nuxt-link to="/app" class="nav-link">
                {{ $t('new.download_app') }}
              </nuxt-link>
              <nuxt-link to="/profile/faq" class="nav-link">
                {{ $t('new.FAQ') }}
              </nuxt-link>
              <!--               <nuxt-link to="/profile/internet" class="nav-link">
                {{ $t('new.halfPrice') }}
              </nuxt-link> -->
              <a href="https://web.upera.tv/affiliate.html" target="_blank" class="nav-link">
                همکاری
              </a>
            </ul>
            <div class="d-flex align-items-center">
              <ul class="nav">
                <a class="nav-link dir-ltr footer-sticky-link" href="tel:02191079979">۰۲۱ - ۹۱۰ ۷۹۹ ۷۹</a>
              </ul>
              <div class="socials d-flex align-items-center text-center text-md-left">
                <a v-if="shownotification" id="notif1" class="notification mr-3" href="" @click.prevent="notification('notif1')">
                  <i class="notif-ic" />
                  <i class="icon-notification" />

                  <div class="popover popover-3d fade bs-popover-top">
                    <div class="arrow" style="left: 147px;" />
                    <h3 class="popover-header">اطلاع رسانی</h3>
                    <div class="popover-body">می خواهید از زمان انتشار فیلم های روز مطلع بشین؟</div>
                    <div class="d-flex popover-footer">
                      <div class="pl-1">
                        <button class="btn btn-secondary btn-block" @click="addnotif()">بله</button>
                      </div>
                      <div class="pr-1">
                        <button class="btn btn-light btn-block" @click="cancelnotif('notif1')">الان نه</button>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="https://instagram.com/uperashop" class="mr-3">
                  <i class="icon-instagram" />
                </a>
                <a href="https://t.me/shop_upera" class="mr-3">
                  <i class="icon-telegram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer id="footer" class="mt-3">
      <section class="footer-links py-4">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-md-8 col-lg-4">
              <ul class="nav nav-separator">
                <nuxt-link to="/profile/faq" class="nav-link text-black">
                  {{ $t('new.FAQ') }}
                </nuxt-link>
                <!--                 <nuxt-link to="/profile/internet" class="nav-link text-black">
                  {{ $t('new.halfPrice') }}
                </nuxt-link> -->
                <a href="https://web.upera.tv/affiliate.html" target="_blank" class="nav-link text-black">
                  همکاری
                </a>
                <nuxt-link to="/profile/terms" class="nav-link text-black">
                  {{ $t('new.term') }}
                </nuxt-link>
                <nuxt-link to="/profile/about-contact" class="nav-link text-black">
                  {{ $t('footer.aboutus') }}
                </nuxt-link>
              </ul>
            </div>
            <div class="col-md-4 col-lg-4">
              <div class="d-flex justify-content-center position-relative">
                <div class="dl-app" @click="getapp">
                  <div class="d-flex align-items-center justify-content-center">
                    <div class="dl-links-wrapper text-center pl-lg-5">
                      <div class="text-invert mb-1 pb-1 d-inline-block dl-links-title">
                        <nuxt-link to="/app">
                          {{ $t('new.download_app') }}
                        </nuxt-link>
                      </div>
                      <div class="dl-links d-flex justify-content-between">
                        <a class="text-invert d-flex justify-content-center" href="" @click.prevent="install('https://play.google.com/store/apps/details?id=com.techera.upera')">
                          <i class="icon-android" />
                        </a>
                        <nuxt-link to="/app" class="text-invert d-flex justify-content-center">
                          <i class="icon-tv" />
                        </nuxt-link>
                        <nuxt-link to="/app" class="text-invert d-flex justify-content-center">
                          <i class="icon-ios" />
                        </nuxt-link>
                      </div>
                    </div>
                    <div class="dl-qr hide-mobile hide-tablet">
                      <nuxt-link to="/app">
                        <img :src="'https://chart.apis.google.com/chart?cht=qr&chs=150x150&chld=L|0&chl=https://upera.tv/app?ref='+$cookiz.get('ref')">
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 hide-mobile hide-tablet">
              <div class="d-flex namad-wrapper">
                <div class="namad pr-2">
                  <div class="namad-box-2" @click="samandehi">
                    <img src="/images/enamad.svg" width="80">
                  </div>
                  <div class="namad-box-2">
                    <img src="/images/enamad.svg" width="80">
                  </div>
                </div>
                <div class="namad pr-2">
                  <div class="namad-box">
                    <a href="https://satra.ir/fa/licensed-media/" target="_blank">
                      <img src="/images/satra.svg" width="80">
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="footer-copyright py-4">
        <div class="container-fluid">
          <div class="row align-items-center hide-tablet hide-mobile">
            <div class="col-md-4">
              <div class="chat-wrapper">
                <div class="chat-caption d-inline-block">
                  {{ $t('new.haveQuestion') }}
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="footer-info text-center">
                <a class="text-darker font-weight-normal" href="mailto:info@upera.tv">info@upera.tv</a>
                <span class="divider" />
                <a class="text-darker font-weight-normal" href="tel:02191079979">۰۲۱ - ۹۱۰ ۷۹۹ ۷۹</a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="socials text-center text-md-right">
                <a v-if="shownotification" id="notif2" class="text-darker notification mr-3" @click.prevent="notification('notif2')">
                  <i class="notif-ic" />
                  <i class="icon-notification" />


                  <div class="popover popover-3d fade bs-popover-top">
                    <div class="arrow" style="left: 147px;" />
                    <h3 class="popover-header">اطلاع رسانی</h3>
                    <div class="popover-body">می خواهید از زمان انتشار فیلم های روز مطلع بشین؟</div>
                    <div class="d-flex popover-footer">
                      <div class="pl-1">
                        <button class="btn btn-secondary btn-block" @click="addnotif()">بله</button>
                      </div>
                      <div class="pr-1">
                        <button class="btn btn-light btn-block" @click="cancelnotif('notif2')">الان نه</button>
                      </div>
                    </div>
                  </div>
                </a>


                <a class="text-darker mr-3" href="https://instagram.com/uperashop">
                  <i class="icon-instagram" />
                </a>
                <a class="text-darker mr-3" href="https://t.me/shop_upera">
                  <i class="icon-telegram" />
                </a>
                <!--                 <a class="text-darker mr-3" href="#">
                  <i class="icon-twitter" />
                </a> -->
              </div>
            </div>
          </div>
          <div class="hide-desktop hide-mobile d-flex align-items-center">
            <div class="chat-wrapper">
              <div class="chat-caption d-inline-block">
                {{ $t('new.haveQuestion') }}
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <div class="">
                <div class="footer-info text-center">
                  <a class="text-darker font-weight-normal" href="mailto:info@upera.tv">info@upera.tv</a>
                  <span class="divider" />
                  <a class="text-darker font-weight-normal" href="tel:02191079979">۰۲۱ - ۹۱۰ ۷۹۹ ۷۹</a>
                </div>
              </div>
              <div class="">
                <div class="socials text-center text-md-left">
                  <a v-if="shownotification" id="notif3" class="text-darker notification mr-2" href="" @click.prevent="notification('notif3')">
                    <i class="notif-ic" />
                    <i class="icon-notification" />
                    <div class="popover popover-3d fade bs-popover-top">
                      <div class="arrow" style="left: 147px;" />
                      <h3 class="popover-header">اطلاع رسانی</h3>
                      <div class="popover-body">می خواهید از زمان انتشار فیلم های روز مطلع بشین؟</div>
                      <div class="d-flex popover-footer">
                        <div class="pl-1">
                          <button class="btn btn-secondary btn-block" @click="addnotif()">بله</button>
                        </div>
                        <div class="pr-1">
                          <button class="btn btn-light btn-block" @click="cancelnotif('notif3')">الان نه</button>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a class="text-darker mr-2" href="https://instagram.com/uperashop">
                    <i class="icon-instagram" />
                  </a>
                  <a class="text-darker mr-2" href="https://t.me/shop_upera">
                    <i class="icon-telegram" />
                  </a>
                  <!--                   <a class="text-darker mr-2" href="#">
                    <i class="icon-twitter" />
                  </a> -->
                </div>
              </div>
            </div>
          </div>
          <div class="row align-items-center show-mobile">
            <div class="col-md-4 mb-3">
              <div class="footer-info text-center">
                <a class="text-darker font-weight-normal" href="mailto:info@upera.tv">info@upera.tv</a>
                <span class="divider" />
                <a class="text-darker font-weight-normal" href="tel:02191079979">۰۲۱ - ۹۱۰ ۷۹۹ ۷۹</a>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="socials text-center text-md-left">
                <a v-if="shownotification" id="notif4" class="text-darker notification mr-2" href="" @click.prevent="notification('notif4')">
                  <i class="notif-ic" />
                  <i class="icon-notification" />
                  <div class="popover popover-3d fade bs-popover-top">
                    <div class="arrow" style="left: 147px;" />
                    <h3 class="popover-header">اطلاع رسانی</h3>
                    <div class="popover-body">می خواهید از زمان انتشار فیلم های روز مطلع بشین؟</div>
                    <div class="d-flex popover-footer">
                      <div class="pl-1">
                        <button class="btn btn-secondary btn-block" @click="addnotif()">بله</button>
                      </div>
                      <div class="pr-1">
                        <button class="btn btn-light btn-block" @click="cancelnotif('notif4')">الان نه</button>
                      </div>
                    </div>
                  </div>
                </a>
                <a class="text-darker mr-2" href="https://instagram.com/uperashop">
                  <i class="icon-instagram" />
                </a>
                <a class="text-darker mr-2" href="https://t.me/shop_upera">
                  <i class="icon-telegram" />
                </a>
                <!--                 <a class="text-darker mr-2" href="#">
                  <i class="icon-twitter" />
                </a> -->
              </div>
            </div>
            <div class="col-md-4">
              <div class="chat-wrapper">
                <div class="chat-caption d-inline-block">
                  {{ $t('new.haveQuestion') }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  </div>
</template>
<script>
  export default {
  data() {
    return {
      shownotification: false

    }
  },   
  watch: {
     '$route.path': function () {
        setTimeout(function () { this.itemsize('e') }.bind(this), 1000)
       
      }
        
    },

    destroyed () {
    window.removeEventListener('resize', this.itemsize)
  },
    mounted() {
      if(!this.$cookiz.get('ref'))
        this.shownotification=true

      this.itemsize('e')
      window.addEventListener('resize', this.itemsize)
    },
  methods: {
    install(url){
      if (this.$auth.loggedIn || !this.$cookiz.get('ref')) {
        window.location.href = url
      }else{
        this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})
      }
    },
            itemsize(e){
      let element=document.getElementById('checkcontainer')

      if(element){
        let vh
        let header=document.getElementById("header")
        if(header)
          vh = document.getElementById("footer").offsetHeight+65
        else
          vh = document.getElementById("footer").offsetHeight

        element.style.setProperty('min-height', `${window.innerHeight-vh}px`)
      }
return e
            },
    notification(id){
      var p=$('#'+id).offset().right

      $('#'+id+' .popover-3d').css('right', p)
      $('#'+id+' .popover-3d').toggleClass('show')
    },
    addnotif(){
      this.$swal("این امکان به زودی افزوده می شود")
    },
    cancelnotif(id){
      return id
      // $('#'+id+' .popover-3d').removeClass('show')
    },
    getapp(){
      this.$router.push({ name: 'app' })
    },
samandehi(){
    window.open('https://logo.samandehi.ir/Verify.aspx?id=197123&p=rfthpfvljyoerfthuiwkxlao', 'Popup','toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30')
  }
  }
}
</script>