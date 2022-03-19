<template>
  <div id="checkcontainer" class="container-fluid">
    <section id="banner" class="mt-5 pt-lg-5 pt-md-5">
      <div class="container">
        <div>
          <b-modal id="callbackModal" ref="callbackModal" :centered="false" hide-footer hide-header size="lg" no-close-on-backdrop hide-backdrop no-close-on-esc modal-class="modal-download-link" static no-enforce-focus>
            <div class="download-links">
              <header v-if="!loading && error" class="modal-header">
                <h5 class="modal-title">
                  جهت نمایش فیلم به موارد زیر توجه کنید
                </h5>
              </header>

              <div>
                <div class="download-links-body download-links-body-header" :class="{ 'download-links-2': backtoapp }">
                  <div class="download-links-items">
                    <client-only>
                      <countdown v-if="presale" :left-time="presale * 1000">
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

                    <div class="col-12">
                      <svg v-if="loading" id="L9" class="svg-loader" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve"><path data-v-28f0b4cb="" fill="#373737" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50" transform="rotate(109.69 50 50)"><animateTransform data-v-28f0b4cb="" attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" /></path></svg>


                      <span v-if="error && !loading" class="text-danger h6 text-justify">{{ message }}<br><br></span>

                      <span v-else-if="!loading" class="h6 text-justify">مدت زمان سانس :{{ screening.ekran_hour }} ساعت | زمان باقیمانده تا پایان سانس شما : {{ screening.owned_period_end }}<br><br></span>

                      <span v-show="presale && !loading" class="text-danger h6">شما بلیط اکران را پیش خرید کرده اید، این به این معناست که شما برای مشاهده فیلم از طریق لینک پیامک شده که پس از خرید به شما ارسال شده است، از {{ presale_date }} می توانید فیلم را مشاهده کنید و در این روز از ساعتی که شروع به دیدن فیلم می کنید به مدت {{ screening.ekran_hour }} ساعت، وقت دارید تا فیلم را مشاهده نمایید.ما نیز از طریق پیامک در این روز شما را مطلع خواهیم کرد.<br><br></span>

                      <span v-show="presale && !loading" class="text-danger h6">آخرین روز اکران: {{ screening.ekran_period_end }}<br><br></span>

                      <span v-show="presale && !loading" class="text-danger h6 text-justify">برای تماشا از خانه، سانس سینمای آنلاین {{ screening.ekran_hour }} ساعته است، طوری تنظیم کنید که تماشای کامل فیلم را در سانس خود از دست ندهید.<br><br></span>
                    </div>
                    <div v-if="!loading && error">
                      <!--                       <div class="offset-2 col-8">
                        <img class="img-fluid" src="@/assets/img/failed.png">
                      </div> -->
                      <div v-show="get_verification" class="form-group">
                        <div class="col-12 col-sm-12">
                          <label for="verification">کد تاییدیه</label>
                          <input v-model="verification" name="verification"
                                 class="form-control" type="text" placeholder="کد تاییدیه"
                          >
                        </div>
                      </div>
                    </div>



          

                    <div v-if="!loading" class="col-12 p-4 text-right">
                      <br><a href="tel:02191079979">تلفن پشتیبانی در ساعات اداری:‌ <br>02191079979</a><br><br>
                      <a href="tel:09022018555">تلفن پشتیبانی در ساعات غیر اداری:‌ <br>09022018555</a><br><br>
                      <a href="https://telegram.me/srmweb" target="_blank">تلگرام پشتیبانی</a>
                    </div>
                  </div>
                </div>
                <div v-if="!loading" class="download-links-footer" :class="{ 'footer-1': !backtoapp }">
                  <div v-if="error" class="download-links-item">
                    <div v-if="get_verification" class="row">
                      <div class="col-6">
                        <a href="" class="btn btn-main btn-block" @click.prevent="SEND_VERIFICATION(verification,0)">
                          ارسال و نمایش فیلم
                        </a>
                      </div>
                      <div class="col-6">
                        <a href="" class="btn btn-light btn-copy btn-block" @click.prevent="SEND_VERIFICATION(verification,1)">
                          دریافت مجدد کد تاییدیه
                        </a>
                      </div>
                    </div>
                    <div v-else class="row">
                      <div class="col-12">
                        <nuxt-link to="/" class="btn btn-danger btn-block">
                          بازگشت به صفحه اصلی
                          <i class="fa fa-back pr-2" />
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div v-else class="download-links-item">
                    <div class="row">
                      <div class="col-12">
                        <a href="" class="btn btn-main btn-block" @click.prevent="player()">
                          تماشای فیلم
                          <i class="icon-play" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div v-if="backtoapp" class="download-links-item">
                    <div class="row">
                      <a href="uperaapp://upera?type=download&success=false" class="btn btn-main btn-block">
                        نمایش فیلم
                        <i class="fa fa-back pr-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-modal>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  
  export default {
    layout: "nofooter",
    data() {
      return {

                verification: '',
                id: null,
                get_verification: 0,
                send_unique_id: 0,
                screening: {
                    ekran: 0,
                    ekran_period_end: null,
                    ekran_hour: 0,
                    ekran_owned: null,
                    owned_period_end: null,
                    ekran_id: null
                },
                presale: null,
                presale_date: null,
                loading: true,
                error: 0,
                message: '',
                error_code: 0,
                backtoapp:false
      }
    },
  head() {

    return {
    bodyAttrs: {
      class: 'callback'
    }, title: 'بلیط اکران' }
  },

    mounted() {

        if(window.location.host=='app.upera.tv' || window.location.host=='app.pofefilm.tv')
          this.backtoapp=true

                this.showModal()
                document.getElementsByClassName('modal-content')[0].removeAttribute('tabindex')


        this.$refs['callbackModal'].$on('hide', () => {
          window.removeEventListener('resize', this.Resize)
          document.getElementsByClassName('default')[0].classList.remove('blure')
          this.$emit("hide-modal", null)
        })


          document.body.classList.add('loaded')

    },
    methods: {

            login(){
                this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: 'ekran/'+this.$route.params.id,prerefresh: false})
            },
        Push2(id,type){
            this.hideModal()

            this.$router.push({
                name: type+"-show-id",
                params: {
                    id: id
                }
            })
        },
            player(){
                this.$router.push({
                    name: "movie-show-id",
                    params: {
                        id: this.id
                    },
                    query: {
                        ekran_unique_id: this.screening.unique_id
                    }
                })
            },
      showModal() {
        this.$refs['callbackModal'].show()
        
this.$refs['callbackModal'].$on('shown', () => {
    window.addEventListener("resize", this.Resize)
    this.Resize('e')

})

        
            var api_url
            if (this.$auth.loggedIn) {
                api_url='/get/ekran/'+this.$route.params.id
            } else {
                api_url='/ghost/get/ekran/'+this.$route.params.id
            }
            this.loading=true
            this.$axios.get(api_url).then((res) => {
              this.loading=false
              if(res.status === 200){
                this.id=res.data.data.id
                this.get_verification=res.data.data.get_verification
                this.send_unique_id=res.data.data.send_unique_id
                this.screening=res.data.data.screening
                this.presale=res.data.data.presale
                this.presale_date=res.data.data.presale_date
                this.error=0
              }else{
                
                this.message=res.data.message
                this.error_code=res.data.error_code
                this.presale=res.data.presale
                this.presale_date=res.data.presale_date
                this.id=res.data.id
                this.screening=res.data.screening
                this.get_verification=res.data.get_verification
                this.error=1
              }
            }, (error) => {
                this.loading=false


                this.message=error.response.data.message
                this.error_code=error.response.data.error_code
                this.presale=error.response.data.presale
                this.presale_date=error.response.data.presale_date
                this.id=error.response.data.id
                this.screening=error.response.data.screening
                this.get_verification=error.response.data.get_verification
                this.error=1

            })

      },
      hideModal() {
        this.$refs['callbackModal'].hide()
        this.$emit("hide-modal", null)
        document.getElementsByClassName('default')[0].classList.remove('blure')
      },
            SEND_VERIFICATION(verification,send_code) {
                var api_url
                if (this.$auth.loggedIn) {
                    api_url='/get/ekran/'+this.$route.params.id
                } else {
                    api_url='/ghost/get/ekran/'+this.$route.params.id
                }
                this.loading=true
                this.$axios.get(api_url+'?verification='+verification+'&send_code='+send_code).then((res) => {
                  this.loading=false
                  if(res.status === 200){
                    this.id=res.data.data.id
                    this.get_verification=res.data.data.get_verification
                    this.send_unique_id=res.data.data.send_unique_id
                    this.screening=res.data.data.screening
                    this.presale=res.data.data.presale
                    this.presale_date=res.data.data.presale_date
                    this.error=0
                  }else{
                    
                    this.message=res.data.message
                    this.error_code=res.data.error_code
                    this.presale=res.data.presale
                    this.presale_date=res.data.presale_date
                    this.id=res.data.id
                    this.screening=res.data.screening
                    this.get_verification=res.data.get_verification
                    this.error=1
                  }
                }, (error) => {
                    this.loading=false


                this.message=error.response.data.message
                this.error_code=error.response.data.error_code
                this.presale=error.response.data.presale
                this.presale_date=error.response.data.presale_date
                this.id=error.response.data.id
                this.screening=error.response.data.screening
                this.get_verification=error.response.data.get_verification
                this.error=1

                })

            },
  Resize(e) {
    let vh = window.innerHeight * 0.01
    let element=document.getElementsByClassName('download-links')

    if(element.length)
      element[0].style.setProperty('--vh', `${vh}px`)
    
    return e
  },
            ChooseLang(en,fa){
                if(fa && this.$i18n.locale=="fa")
                    return fa
                else
                    return en
            }
    }
  }
</script>
<style>
.callback .modal{z-index:0}
.callback #tab-bar,.callback header,.callback footer{z-index:2000 !important}
.callback .search{z-index:9999999 !important}
.callback .modal{top:50px !important;height:100% !important;}
.callback #callbackModal___BV_modal_outer_{position:relative  !important;height:100% !important;}
// .callback .modal .modal-content{bottom:25px !important;}
</style>