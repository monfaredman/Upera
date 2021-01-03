<template>
  <div>
    <b-modal id="downloadLinks" ref="downloadLinks" :centered="staticmodal ? false : true" hide-footer hide-header size="lg" :no-close-on-backdrop="staticmodal ? true : false" :hide-backdrop="staticmodal ? true : false" :no-close-on-esc="staticmodal ? true : false" modal-class="modal-download-link" :static="staticmodal ? true : false" no-enforce-focus>
      <div class="download-links">
        <!-- <div class="download-links-poster" :style="'background-image: url(\'https://thumb.contentpanel.click/thumb?w=800&h=300&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+backdrop+'\')'"> -->

        <div class="download-links-poster download-links-poster2" :style="'background-image: url(\'https://thumb.contentpanel.click/thumb?w=800&h=412&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+backdrop+'\')'">
          <div class="download-links-info d-flex align-items-center">
            <div class="download-links-thumbnail">
              <img class="download-links-thumbnail" :src="'https://thumb.contentpanel.click/thumb?w=70&h=103&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+posterf">
            </div>
            <div v-if="type!='episode'" class="download-links-title font-weight-bold">
              <a href="" class="text-white" @click.prevent="Push(id,type)">
                {{ ChooseLang(name,namefa) }}
              </a>
            </div>
            <div v-else class="download-links-title font-weight-bold">
              <a href="" class="text-white" @click.prevent="Push(id,type)">
                {{ ChooseLang(itemdata.series_name,itemdata.series_name_fa) }}
              </a><br><h6 class="text-small">
                {{ ChooseLang(name,namefa) }}
              </h6>
            </div>
          </div>
          <button v-show="!staticmodal" type="button" class="close" @click="hideModal">
            <i class="fas fa-times" />
          </button>
        </div>
        <!-- !owned && (!free || (free && (ftb || $route.query.force_to_buy))) &&  -->
        <div v-if="!cartloading && (!free || ftb2) && Object.keys(downloadslist).length > 0 && cart.length > 0 && cart.some(function(el){ return downloadslist.some(function(el2){ return el.itemid === el2.id})})">
          <div class="download-links-body" :class="{ 'download-links-body2': (($auth.loggedIn || !totalamount) && !season)}">
            <div v-if="season" class="row py-4 download-options-wrapper">
              <div class="col-sm-6">
                <b-dropdown block :text="seasontitle" variant="dark">
                  <b-dropdown-item v-for="(item, index) in season" :key="index" href="#" :active="selectseriesid==index" @click.prevent="selectseries(index)">
                    فصل {{ index }}
                  </b-dropdown-item>
                </b-dropdown>
              </div>
              <div class="col-sm-6">
                <b-dropdown block :text="episodetitle" variant="outline-dark" class="srmb">
                  <b-dropdown-item v-for="(item, index) in season[selectseriesid]" :key="index" href="#" :active="type=='episode' && itemdata.episode_number==item.episode_number" @click.prevent="selectepisode(item.id)">
                    قسمت {{ item.episode_number }}
                  </b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
            <div v-show="!$auth.loggedIn && totalamount" class="row download-options-wrapper" :class="{ 'py-4': !season}">
              <div class="col-12">
                <div class="position-relative">
                  <label for="premobile">{{ $t('new.enter_mobile') }}</label>                  
                  <b-form-input id="premobile" v-model.trim="mobile" style="text-align:left!important" name="mobile" dir="ltr" class="form-control large text-right mobile-input" maxlength="13" :placeholder="$t('download.enter_mobile')" :title="$t('download.enter_mobile')" autofocus @keyup.enter="BUY" />
                  <div v-if="typeof errors === 'string'" class="text-danger">
                    {{ errors }}
                  </div>
                  <div v-else-if="errors && errors.mobile" class="text-danger">
                    {{ errors.mobile[0] }}
                  </div>
                  <div v-else class="invalid-feedback">
                    {{ $t('new.enter_correctly') }}
                  </div>
                </div>
              </div>
            </div>

            <div class="download-links-items" :class="{'download-links-items2': (!$auth.loggedIn && totalamount && !season),'download-links-season2': (!$auth.loggedIn && totalamount && season),'download-links-season':(($auth.loggedIn || !totalamount) && season)}">
              <div class="col-12">
                <svg v-if="buyloading" id="L9" class="svg-loader" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve"><path data-v-28f0b4cb="" fill="#373737" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50" transform="rotate(109.69 50 50)"><animateTransform data-v-28f0b4cb="" attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" /></path></svg>



                <p v-if="message" class="text-danger">
                  {{ message }}
                </p>
              </div>
              <div>
                <div v-for="(item, index) in cart" :key="index" class="download-links-item">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="row">
                        <div class="col-9">
                          <div class="download-quality font-weight-bold">
                            <a href="" @click.prevent="Push(item.id,item.type)">
                              {{ item.name }}
                            </a>
                          </div>
                          <div class="download-suitable">
                            {{ item.quality }}
                          </div>
                        </div>
                        <div class="col-3 d-flex justify-end align-items-end text-right">
                          <div class="download-size">
                            {{ item.size }}
                          </div>
                        </div>
                      </div>
                    </div>

                 

                    <div class="col-sm-6">
                      <div class="d-flex h-100 align-items-end">
                        <div class="download-link">
                          <a href="" class="text-sm text-danger" @click.prevent="REMOVEFROMCART(item.itemid,item.amount)">
                            حذف از سبد خرید
                          </a>
                        </div>

                        <div class="copy-link" :class="{ 'text-right': staticmodal,'text-left': !staticmodal }">
                          <span class="overlay_price font-weight-light"><span class="overlay_price_label position-relative"><i class="icon-toman" /></span><span>{{ charAt2(item.amount) }}</span>.{{ substring2(item.amount) }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div v-show="screening.ekran" class="col-12 text-info text-justify pt-4">
                توجه: به دلیل حفظ رعایت حقوق صاحبان اثر، فیلم‌های در حال اکران در سینما آنلاین قابل دانلود نیست.<br><br>
                مدت زمان سانس {{ screening.ekran_hour }} ساعت
                <span v-show="screening.ekran_owned" class="text-danger"><br>زمان باقیمانده تا پایان سانس شما: {{ screening.owned_period_end }} ساعت</span>
                <span class="text-danger"><br>آخرین روز اکران: {{ screening.ekran_period_end }}</span>
                <br><br>
              </div>

              <div v-show="false" class="col-12 p-4 text-right">
                <a href="tel:02191079979">تلفن پشتیبانی در ساعات اداری:‌ 02191079979</a><br>
                <a href="tel:09022018555">تلفن پشتیبانی در ساعات غیر اداری:‌ 09022018555</a><br>
                <a href="https://telegram.me/srmweb" target="_blank">تلگرام پشتیبانی</a>
              </div>

              
              <div class="col-12">
                <p v-show="totalamount && checkuser.tax" class="col-12 text-danger small">
                  + {{ (totalamount * 0.09) }} {{ $t('download.toman') }} (9 درصد مالیات بر ارزش افزوده)
                </p>
              </div>
            </div>
            <div class="download-links-footer footer-1">
              <div class="download-links-item">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="font-weight-bold d-none d-sm-block">
                      {{ $t('download.amount_payable') }}: 
                      <span v-if="checkuser.tax"><span class="overlay_price font-weight-light"><span class="overlay_price_label position-relative"><i class="icon-toman" /></span><span>{{ charAt2((totalamount+(totalamount * 0.09))) }}</span>.{{ substring2((totalamount+(totalamount * 0.09))) }}</span></span>
                      <span v-else><span class="overlay_price font-weight-light"><span class="overlay_price_label position-relative"><i class="icon-toman" /></span><span>{{ charAt2(totalamount) }}</span>.{{ substring2(totalamount) }}</span></span>

                      <svg v-if="buyloading" id="L9" class="svg-loader" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve"><path data-v-28f0b4cb="" fill="#373737" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50" transform="rotate(109.69 50 50)"><animateTransform data-v-28f0b4cb="" attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" /></path></svg>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <button v-if="disable_button || !totalamount" disabled class="btn btn-secondary btn-block">
                      <span v-if="!screening.ekran">{{ $t('download.pay_download') }}</span><span v-else>پرداخت و تماشا</span>

                      <i class="fa fa-money-bill pr-2" />
                    </button>

                    <button v-else class="btn btn-secondary btn-block" @click="BUY">
                      <span v-if="!screening.ekran">{{ $t('download.pay_download') }}</span><span v-else>پرداخت و تماشا</span>

                      <i class="fa fa-money-bill pr-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="download-links-body" :class="{ 'download-links-body2': !season,'download-links-0': (divcount+play_button)==0,'download-links-2': (divcount+play_button)==2,'download-links-3': (divcount+play_button)==3 }">
            <div v-if="season" class="row py-4 download-options-wrapper">
              <div class="col-sm-6">
                <b-dropdown block :text="seasontitle" variant="dark">
                  <b-dropdown-item v-for="(item, index) in season" :key="index" href="#" :active="selectseriesid==index" @click.prevent="selectseries(index)">
                    فصل {{ index }}
                  </b-dropdown-item>
                </b-dropdown>
              </div>
              <div class="col-sm-6">
                <b-dropdown block :text="episodetitle" variant="outline-dark" class="srmb">
                  <b-dropdown-item v-for="(item, index) in season[selectseriesid]" :key="index" href="#" :active="type=='episode' && itemdata.episode_number==item.episode_number" @click.prevent="selectepisode(item.id)">
                    قسمت {{ item.episode_number }}
                  </b-dropdown-item>
                </b-dropdown>
              </div>
            </div>


            <div class="download-links-items">
              <div class="col-12">
                <svg v-if="cartloading || downloadloading" id="L9" class="svg-loader" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve"><path data-v-28f0b4cb="" fill="#373737" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50" transform="rotate(109.69 50 50)"><animateTransform data-v-28f0b4cb="" attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" /></path></svg>


                <span v-if="!screening.ekran && !cartloading" class="text-danger h6 text-justify">حجم مصرفی: {{ fullrate_data.fa.title }}<br><br></span>

                <span v-if="!ftb2 && !cartloading && !owned && traffic && trafficoo && !(downloadslist.some(function(el){ return el.owned === 1}))" class="text-justify ">دسترسی رایگان به فیلم با اینترنت همراه اول و ایرانسل<br><button class="btn btn-secondary text-right" @click="SHOWAGAIN(0)">
                  بررسی اتصال اینترنت
                  <i class="fas fa-sync-alt" />
                </button><br>و یا خرید با اینترنت فعلی شما:<br><br></span>

                <span v-if="screening.ekran && !cartloading" class="text-danger h6 text-justify">مصرف اینترنت جهت تماشای آنلاین {{ fullrate_data.fa.title }} می باشد<br><br></span>

                <span v-if="!cartloading && notes" class="text-danger h6 text-justify">{{ notes }}<br><br></span>


                <span v-if="!cartloading && screening.ekran && presale" class="text-danger h6 text-justify">برای تماشا از خانه، سانس سینمای آنلاین {{ screening.ekran_hour }} ساعته است، طوری تنظیم کنید که تماشای کامل فیلم را در سانس خود از دست ندهید.<br><br></span>

                <span v-if="!cartloading && !presale && pass" class="text-danger h6 text-justify">رمز پیش خرید: <span class="text-primary">{{ pass }}</span> (مخصوص کسانی که قبلا خرید کرده اند)<br><br></span>
              </div>
              <div v-if="!cartloading && Object.keys(downloadslist).length > 0 && (downloadslist.some(function(el){ return el.owned === 1}) || !cart.some(function(el){ return downloadslist.some(function(el2){ return el.itemid === el2.id})}))">
                <div v-for="(item,index) in downloadslist" :key="index" class="download-links-item">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="row">
                        <div v-if="item.isfolder && type!='series'" class="col-9">
                          <div class="download-quality font-weight-bold">
                            {{ $t('download.all_qualities') }}
                          </div>
                          <div class="download-suitable">
                            {{ item.info }}
                          </div>
                        </div>
                        <div v-else class="col-9">
                          <div class="download-quality font-weight-bold">
                            {{ item.quality }}
                          </div>
                          <div class="download-suitable">
                            {{ item.info }}
                          </div>
                        </div>
                        <div class="col-3 d-flex justify-end align-items-end text-right">
                          <div v-if="item.isfolder==0" class="download-size">
                            {{ item.size }}
                          </div>
                        </div>
                      </div>
                    </div>

                 



                    <div v-if="item.owned==1 && item.isfolder==1 && !screening.ekran" class="col-sm-6">
                      <div class="d-flex h-100 align-items-end">
                        <div class="download-full-link">
                          <button class="btn btn-info btn-block">
                            خریداری شده
                            <i class="icon-download" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div v-else-if="item.owned==1 && item.isfolder==1" class="col-sm-6">
                      <div class="d-flex h-100 align-items-end">
                        <div class="download-full-link">
                          <button class="btn btn-secondary btn-block" @click="EKRAN(screening.ekran_id)">
                            تماشا
                            <i class="icon-play" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div v-else-if="item.owned==1" class="col-sm-6">
                      <div class="d-flex h-100 align-items-end">
                        <div class="download-link">
                          <button class="btn btn-secondary btn-block" @click="LINK_DOWNLOAD(item.id)">
                            {{ $t('show.download') }}
                            <i class="icon-download" />
                          </button>
                        </div>
                        <div class="copy-link">
                          <button class="btn btn-copy btn-block" @click="COPY_DOWNLOAD(item.id)">
                            کپی لینک
                          </button>
                        </div>
                      </div>
                    </div>

                    <div v-else-if="cart.some(function(el){ return el.itemid === item.id})" class="col-sm-6">
                      <div class="d-flex h-100 align-items-end">
                        <div class="download-full-link">
                          <button class="btn btn-secondary btn-block" @click="REMOVEFROMCART(item.id,item.amount)">
                            {{ $t('download.cancel') }}
                            <i class="icon-download" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div v-else class="col-sm-6">
                      <div class="d-flex h-100 align-items-end">
                        <div class="download-link">
                          <button class="btn btn-danger btn-block" @click="ADDTOCART(item.id,item.amount,item.size,item.quality)">
                            <span v-if="presale">{{ $t('download.presale') }}</span><span v-else>{{ $t('download.buy') }}</span><span v-if="staticmodal"> و دانلود</span>
                            <i class="icon-download" />
                          </button>
                        </div>

                        <div class="copy-link" :class="{ 'text-right': staticmodal,'text-left': !staticmodal }">
                          <span class="overlay_price font-weight-light"><span class="overlay_price_label position-relative"><i class="icon-toman" /></span><span>{{ charAt2(item.amount) }}</span>.{{ substring2(item.amount) }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="!cartloading" class="download-links-footer" :class="{ 'footer-0': (divcount+play_button)==0,'footer-1': (divcount+play_button)==1 }">
              <div v-show="play_button" class="download-links-item">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="font-weight-bold d-none d-sm-block">
                      کیفیت متناسب با سرعت اینترنت
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <a v-if="type=='movie'" href="" class="btn btn-main btn-block" @click.prevent="Push2(id,type)">
                      نمایش فیلم
                      <i class="icon-play" />
                    </a>
                    <a v-else-if="type=='series'" class="btn btn-main btn-block" href="" @click.prevent="Push2(id,type)">
                      نمایش قسمت اول سریال
                      <i class="icon-play" />
                    </a>
                    <a v-else href="" class="btn btn-main btn-block" @click.prevent="Push2(id,type)">
                      نمایش این قسمت
                      <i class="icon-play" />
                    </a>
                  </div>
                </div>
              </div>
              <div v-show="show_free" class="download-links-item">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="font-weight-bold d-none d-sm-block">
                      همه کیفیت ها
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <button class="btn btn-secondary btn-block" @click="SHOWAGAIN(0)">
                      دانلود رایگان
                      <i class="icon-download" />
                    </button>
                  </div>
                </div>
              </div>
              <div v-show="show_buy" class="download-links-item">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="font-weight-bold d-none d-sm-block">
                      خرید و دانلود
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <button class="btn btn-danger btn-block" @click="SHOWAGAIN(1)">
                      خرید و دانلود با حجم {{ fullrate_data.fa.alternative }}
                      <i class="fa fa-money-bill pr-2" />
                    </button>
                  </div>
                </div>
              </div>
              <div v-show="ussd" class="download-links-item">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="font-weight-bold d-none d-sm-block">
                      خرید با USSD
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <a :href="'tel:' + ussd" class="btn btn-danger btn-block">
                      خرید از طریق هف هشتاد
                      <i class="fa fa-money-bill pr-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {



  props: {
    show: Boolean,
    staticmodal: Boolean,
    owned: {
        type: Number,
        default: 0
    },
    traffic: {
        type: Number,
        default: 0
    },
    trafficoo: {
        type: Number,
        default: 0
    },
    vod: {
        type: Number,
        default: 0
    },
    free: {
        type: Number,
        default: 0
    },
    ftb: Boolean,
    id: {
        type: String,
        default: null
    },
    posterf: {
        type: String,
        default: null
    },
    backdrop: {
        type: String,
        default: null
    },
    name: {
        type: String,
        default: null
    },
    namefa: {
        type: String,
        default: null
    },
    type: {
        type: String,
        default: null
    },
    redirect: {
        type: String,
        default: null
    },
    season: {
        type: Object,
        default: null
    },
    itemdata: {
        type: Object,
        default: null
    }
  },

      data() {
      return {
        castShow: null,
        payment_method: "saman3",
        mobile: null,
        login: 0,
        ftb2: 0,
        downloadloading: false,
        message: null,
        premessage: null,
        buyloading: null,
        disable_button: false,
        play_button: 0,
          showBoxAnimation: false,
          selectseriesid: 1,
          seasontitle: 'فصل 1',
          episodetitle: 'قسمت ها'
      }
    },

      computed: {
          ...mapGetters({downloadslist: "download/downloadslist"}),
          ...mapGetters({cartloading: "download/cartloading"}),
          ...mapGetters({cart: "download/cart"}),
          ...mapGetters({presale: "download/presale"}),
          ...mapGetters({presale_date: "download/presale_date"}),
          ...mapGetters({pass: "download/pass"}),
          ...mapGetters({title_poster: "download/title_poster"}),
          ...mapGetters({screening: "download/screening"}),
          ...mapGetters({ussd: "download/ussd"}),
          ...mapGetters({fullrate_data: "download/fullrate_data"}),
          ...mapGetters({show_free: "download/show_free"}),
          ...mapGetters({show_buy: "download/show_buy"}),
          ...mapGetters({notes: "download/notes"}),
          ...mapGetters({totalamount: "download/total_amount"}),
          ...mapGetters({divcount: "download/divcount"})
      },

    watch: {
      show(val) {
        if (val !== null && this.show) {
          this.showModal()
        }else{
          this.hideModal()
        }
      },
      // id(val) {
      //     if (val !== null && this.id && this.show) {
      //       if (this.$auth.loggedIn) {
      //           this.$store.dispatch("download/GET_DOWNLOAD", {id: this.id,type:this.type,quality:this.$route.query.quality,force_to_buy:this.$route.query.force_to_buy})
      //       } else {
      //           this.$store.dispatch("download/GET_GHOST_DOWNLOAD", {id: this.id,type:this.type,quality:this.$route.query.quality,force_to_buy:this.$route.query.force_to_buy})
      //       }
      //       this.$route.query.quality=0
      //       this.$route.query.force_to_buy=0
      //     }
      //     return val

      // }
    },

        mounted() {
// if(this.show){
//             if (this.$auth.loggedIn) {
//                 this.$store.dispatch("download/GET_DOWNLOAD", {id: this.id,type:this.type,quality:this.$route.query.quality,force_to_buy:this.$route.query.force_to_buy})
//             } else {
//                 this.$store.dispatch("download/GET_GHOST_DOWNLOAD", {id: this.id,type:this.type,quality:this.$route.query.quality,force_to_buy:this.$route.query.force_to_buy})
//             }
//             this.$route.query.quality=0
//             this.$route.query.force_to_buy=0
//   }


if(this.owned || (this.free && this.vod) || (this.vod && this.checkuser.access)){
  this.play_button=1
}

                if (this.staticmodal) {
                this.showModal()
                $('.modal-content').removeAttr("tabindex")
//   this.$refs['downloadLinks'].$on('show', function() {
//     $('.modal-content').removeAttr("tabindex")
// })
              }



if(this.type=='episode'){
  this.selectseriesid=this.itemdata.season_number
  this.seasontitle='فصل '+this.selectseriesid
  this.episodetitle='قسمت '+this.itemdata.episode_number
}

        this.$refs['downloadLinks'].$on('hide', () => {
          $('.default').removeClass('blure')
          this.$emit("hide-modal", null)
        })
$('.download-options-label').removeClass('btn')

          $('body').addClass('loaded')



        },


        
    methods: {

        ChooseLang(en,fa){
            if(fa && this.$i18n.locale=="fa")
                return fa
            else
                return en
        },
        Push(id,type){
          if(this.staticmodal || id!=this.id){
            this.hideModal()

            this.$router.push({
                name: type+"-id",
                params: {
                    id: id
                }
            })
          }
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
        charAt2(string){
            string=String(string)
            var l=string.length
            if(l==4)
            return string.substring(0,1)
            else if(l==5)
              return string.substring(0,2)
            else
              return string.substring(0,3)
        },
        substring2(string){
            string=String(string)
            var l=string.length
            if(l==4)
              return string.substring(1)
            else if(l==5)
              return string.substring(2)
            else
              return string.substring(3)
        },
      showModal() {
        this.$refs['downloadLinks'].show()
        if(!this.staticmodal)
        $('.default').addClass('blure')



        if(!this.ftb)
          this.ftb2=0
        else
          this.ftb2=1

        if(this.ftb2!=1 && this.$route.query.force_to_buy==1)
          this.ftb2=1

            if (this.$auth.loggedIn) {
                this.$store.dispatch("download/GET_DOWNLOAD", {id: this.id,type:this.type,quality:this.$route.query.quality,force_to_buy:this.ftb2})
            } else {
                this.$store.dispatch("download/GET_GHOST_DOWNLOAD", {id: this.id,type:this.type,quality:this.$route.query.quality,force_to_buy:this.ftb2})
            }
            this.$route.query.quality=0
            this.$route.query.force_to_buy=0
      },
      hideModal() {
        this.$refs['downloadLinks'].hide()
        this.$emit("hide-modal", null)
        $('.default').removeClass('blure')
      },

      ADDTOCART(itemid,amount,size,quality) {

        var name

        if(this.type=='episode'){
          if(this.itemdata.season_number==1)
            name=this.ChooseLang(this.itemdata.series_name,this.itemdata.series_name_fa)+',قسمت '+this.itemdata.episode_number
          else
            name=this.ChooseLang(this.itemdata.series_name,this.itemdata.series_name_fa)+',قسمت '+this.itemdata.episode_number+' فصل '+this.itemdata.season_number
        }
        else
          name=this.ChooseLang(this.name,this.namefa)

        this.$store.dispatch("download/ADD_NEW_TO_DOWNLOAD", {itemid: itemid,amount:amount,size:size,name:name,quality:quality,id: this.id,type:this.type,poster:'https://thumb.contentpanel.click/thumb?w=70&h=103&q=100&a=c&src=https://cdn.upera.shop/s3/posters/'+this.posterf })
        $('.modal-download-link .download-links-items').scrollTop(0)
      },
      REMOVEFROMCART(itemid,amount) {
        this.$store.dispatch("download/DELETE_FROM_DOWNLOAD", {itemid: itemid,amount:amount})
        $('.modal-download-link .download-links-items').scrollTop(0)
      },
      EKRAN(ekranid) {
        this.hideModal()
        this.$router.push({
            name: "ekran-id",
            params: {
                id: ekranid
            }
        })
      },
      SHOWAGAIN(force_to_buy) {
          this.ftb2=force_to_buy
          if (this.$auth.loggedIn) {
              this.$store.dispatch("download/GET_DOWNLOAD", {id: this.id,type:this.type,quality:0,force_to_buy:force_to_buy})
          } else {
              this.$store.dispatch("download/GET_GHOST_DOWNLOAD", {id: this.id,type:this.type,quality:0,force_to_buy:force_to_buy})
          }
      },
      DOWNLOAD(itemid) {
        this.downloadloading=true
        var api_url
        if (this.$auth.loggedIn) {
            api_url='/get/download'
        } else {
            api_url='/ghost/get/download'
        }
        var traffic_button
        if (this.fullrate_data.rate) {
            traffic_button='دانلود '+this.fullrate_data.fa.title
        }else{
          traffic_button='دانلود'
        }
        this.$axios.post(api_url, {
            itemid: itemid
        }).then((res) => {
          this.downloadloading=false
          if(res.status === 200){

                        var dlsmbuttons={back: {
                                  text: this.$t('player.back'),
                                  value: "back",
                                  closeModal: true,
                                  className: 'swal-back'
                                }}

                        if(res.data.data.url2){
                            Object.assign(dlsmbuttons, {dl2: {
                                  text: 'لینک کمکی',
                                  value: "dl2",
                                  closeModal: true
                            }})
                        }

                        Object.assign(dlsmbuttons, {copy: {
                              text: 'کپی لینک',
                              value: "copy",
                              closeModal: true
                        }})

                        Object.assign(dlsmbuttons, {dl1: {
                              text: traffic_button,
                              value: "dl1",
                              closeModal: true,
                              className: 'btn-success'
                        }})

                        this.$swal({
                              title: this.ChooseLang(this.name,this.namefa)+'!',
                              icon: 'success',
                              dangerMode: false,
                              buttons: dlsmbuttons,
                            })
                            .then((value) => {
                              switch (value) {
                             
                                case "back":
                                  this.$swal.close()
                                  break
                             
                                case "dl1":
                                  window.location.href = res.data.data.url
                                  break

                                case "dl2":
                                  window.location.href = res.data.data.url2
                                  break

                                case "copy":
                                  this.copy(res.data.data.url)
                                break
                                default:
                                  this.$swal.close()
                                  break
                              }
                        })
          }else{
            this.message=res.data.message
          }
        }, (error) => {
          this.downloadloading=false
          return error
        })
      },
      LINK_DOWNLOAD(itemid) {
        this.downloadloading=true
        var api_url
        if (this.$auth.loggedIn) {
            api_url='/get/download'
        } else {
            api_url='/ghost/get/download'
        }
        this.$axios.post(api_url, {
            itemid: itemid
        }).then((res) => {
          this.downloadloading=false
          if(res.status === 200){

              window.location.href = res.data.data.url
          }else{
            this.message=res.data.message
          }
        }, (error) => {
          this.downloadloading=false
          return error
        })
      },
      COPY_DOWNLOAD(itemid) {
        this.downloadloading=true
        var api_url
        if (this.$auth.loggedIn) {
            api_url='/get/download'
        } else {
            api_url='/ghost/get/download'
        }
        this.$axios.post(api_url, {
            itemid: itemid
        }).then((res) => {
          this.downloadloading=false
          if(res.status === 200){

              this.copy(res.data.data.url)
          }else{
            this.message=res.data.message
          }
        }, (error) => {
          this.downloadloading=false
          return error
        })
      },
      BUY() {
        if(this.mobile){
          this.mobile=this.mobile.replace(/۱/g, "1")
          this.mobile=this.mobile.replace(/۲/g, "2")
          this.mobile=this.mobile.replace(/۳/g, "3")
          this.mobile=this.mobile.replace(/۴/g, "4")
          this.mobile=this.mobile.replace(/۵/g, "5")
          this.mobile=this.mobile.replace(/۶/g, "6")
          this.mobile=this.mobile.replace(/۷/g, "7")
          this.mobile=this.mobile.replace(/۸/g, "8")
          this.mobile=this.mobile.replace(/۹/g, "9")
          this.mobile=this.mobile.replace(/۰/g, "0")
        }

        var ref=this.$cookiz.get('ref')
        if(!ref || isNaN(ref))
          ref=0

        var api_url
        if (this.$auth.loggedIn) {
            api_url='/get/buy'
        } else {
            api_url='/ghost/get/buy'
        }
        this.buyloading=true
        this.$axios.post(api_url, {
            cart: this.cart,
            mobile: this.mobile,
            ekran: this.screening.ekran,
            callback_url: location.origin+'/callback?mobile='+this.mobile,
            payment_method: this.payment_method,
            ref: ref
        }).then((res) => {
          this.buyloading=false
          if(res.status === 200){
            window.location.href = res.data.data.pay_url
          }else{
            this.message=res.data.message
          }
        }, (error) => {
          this.buyloading=false
           this.premessage=error.response.data.message
            if(error.response.data.login)
              this.$store.dispatch('login/SHOW_MODAL',{premessage: this.premessage,premobile: this.mobile,preredirect: null,prerefresh: false})
        })
      },
    async copy(text) {
      try {
        await this.$copyText(text)
        this.$swal("لینک کپی شد", {
          icon: "success",
        })
      } catch (e) {
          this.$swal("لینک در دیوایس شما قابل کپی نیست.")
          return e
      }
    },
    selectseries(id){
      this.selectseriesid=id

      this.seasontitle='فصل '+id
    },

    selectepisode(id){
      if(id!=this.id){
            this.hideModal()

            this.$router.push({
                name:"episode-download-id",
                params: {
                    id: id
                }
            })
          }
    },
    },


}
</script>