<template>
  <b-modal ref="loginModal" :centered="staticmodal ? false : true" hide-footer hide-header :no-close-on-backdrop="staticmodal ? true : false" :hide-backdrop="staticmodal ? true : false" :no-close-on-esc="staticmodal ? true : false" :static="staticmodal ? true : false" no-enforce-focus>
    <button v-show="!staticmodal" type="button" class="close" @click="hideModal">
      <span aria-hidden="true">&times;</span>
    </button>
    <div v-if="!sms_sent && !premobile">
      <h5 class="mt-2 mb-4 font-weight-bold text-center h6">
        {{ $t('new.login_register') }}
      </h5>
      <b-form @submit.prevent="sendcode">
        <fieldset>
          <div class="position-relative">
            <label for="mobile">{{ $t('new.enter_mobile') }}</label>                  
            <b-form-input id="mobile" v-model.trim="mobile" dir="ltr" class="form-control large text-right mobile-input" maxlength="13" :placeholder="$t('new.enter_mobile')" :title="$t('new.your_mobile')" pattern="(\+98|0|98|0098)?([ ]|-|[()]){0,2}9[0-9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}" inputmode="numeric" autofocus @paste="change_mobile" @keyup="change_mobile" @change="change_mobile" />
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
          <button id="submit-mobile" class="btn btn-main btn-block mt-5 mb-2" :disabled="isMobileDisabled">
            {{ $t('nav.login') }}
          </button>
          <div v-if="$i18n.locale=='fa' && $config.envname!='igapp'" class="text-center">
            <small>
              <span>با ثبت نام در {{ $config.name_fa }}، </span>
              <nuxt-link to="/profile/terms">قوانین و شرایط استفاده و حریم خصوصی</nuxt-link>
              <span>را میپذیرم</span>
            </small>
          </div>
        </fieldset>
      </b-form>
    </div>
    <div v-else>
      <h5 class="mt-2 mb-4 font-weight-bold text-center h6">
        {{ $t('new.mobile_verify') }}
      </h5>
      <b-form @submit.prevent="login">
        <fieldset>
          <h6 v-if="premessage" class="text-danger text-center">
            {{ premessage }}
          </h6>
          <div class="position-relative">
            <label for="sms">{{ $t('new.enter_sent_code') }}</label>
            <b-form-input id="password" v-model.trim="password" type="text" pattern="[0-9]*" data-formcore-type="numeric" inputmode="numeric" maxlength="4" data-numeric-input class="form-control large is-invalid text-left" data-validate="minlength" :data-message="$t('new.code_is_incorrect')" :placeholder="$t('new.digit_code')+' '+mobile" required on-key-press="if(this.value.length==4) return false;" autofocus />
            <div v-if="typeof errors === 'string' || errors.password || errors.mobile" class="invalid-feedback">
              <span v-if="typeof errors === 'string'">{{ errors }}</span>
              <span v-else-if="errors.password">{{ errors.password[0] }}</span>
              <span v-else>{{ errors.mobile[0] }}</span>
              <a v-show="countdown_finished" class="cup" @click.prevent="sendcode();countdown=90;countDownTimer();countdown_finished=false;">{{ $t('new.resend_again') }}</a>
            </div>
          </div>
                
          <button id="submit-code" class="btn btn-main btn-block mt-5">
            ورود
          </button>
          <div class="d-flex justify-content-center mt-2">
            <small>
              <span v-if="!countdown_finished">{{ $t('new.resend_code') }} {{ countdown }} {{ $t('new.another_seconds') }}</span>
              <a v-else href="" @click.prevent="sendcode();countdown=90;countDownTimer();countdown_finished=false;">{{ $t('new.resend_again_code') }}</a>
              <span> | </span>
              <a href="" @click.prevent="showLoginAgain()">{{ $t('new.edit_mobile') }}</a>
            </small>
          </div>
        </fieldset>
      </b-form>
    </div>
  </b-modal>
</template>
<script>
import {mapGetters} from 'vuex'

  export default {
  props: {
    show: Boolean,
    staticmodal: Boolean,
    redirect: {
        type: String,
        default: null
    }
  },
  data() {
    return {
                mobile: '',
                password: '',
                sms_sent: false,
                countdown: 90,
                countdown_finished: false,
                redirectTo: null,
                isMobileDisabled: true,
                app_mobile: this.$t('auth.mobile'),
                app_password: this.$t('player.pass')
    }
  },

        computed: {
            ...mapGetters({messageSent: "login/messageSent"}),
            ...mapGetters({button_loading: "login/button_loading"}),
            ...mapGetters({premessage: "login/premessage"}),
            ...mapGetters({premobile: "login/premobile"}),
            ...mapGetters({preredirect: "login/preredirect"}),
            ...mapGetters({prerefresh: "login/prerefresh"})
        },
        watch: {
            show(val) {
              if (val !== null && this.show) {
                  if(this.premobile){
                    this.mobile=this.premobile
                    this.sendcode()
                  }

                  if(this.redirect){
                    this.redirectTo=this.redirect
                  }else if(this.preredirect){
                    this.redirectTo=this.preredirect
                  }

                this.showModal()
              }else{
                this.hideModal()
              }
            },
            messageSent(val) {
                if(val){
                  this.sms_sent=true
                  this.countDownTimer()
                }
            },
            password(val) {
                if(val.length>3){
                  this.password=this.formatToNum(val)
                  this.login()
                }
            }
        },

    mounted() {
      if (this.staticmodal) {
                this.showModal()
  this.$refs['loginModal'].$on('show', function() {
    document.getElementsByClassName('modal-content')[0].removeAttribute('tabindex')
})
              }
        this.$refs['loginModal'].$on('hide', () => {
          if(document.getElementsByClassName('default').length)
            document.getElementsByClassName('default')[0].classList.remove('blure')
          else
            (window.history.length > 2) ? this.$router.go(-1) : this.$router.go()
          this.$emit("hide-modal", null)
        })

    },
    methods: {
            countDownTimer() {
                if(this.countdown > 0) {
                    setTimeout(() => {
                        this.countdown -= 1
                        if(this.countdown<=0){
                          this.countdown_finished=true
                        }else{
                          this.countDownTimer()
                        }
                    }, 1000)
                }
            },
            sendcode() {
                this.$store.dispatch('login/SET_MESSAGE_SENT_FALSE')
                this.$store.dispatch('validation/clearErrors')
                
                this.countdown=90
                this.countdown_finished=false

                this.$store.dispatch('login/SEND_LOGIN_CODE', {
                    'mobile': this.mobile.replace(/\s/g, '')
                }) 
            },
            async login() {
              const submitcode = document.getElementById('submit-code')
              if(submitcode){
                submitcode.setAttribute('disabled', true)
              }
              try {
                let response = await this.$auth.loginWith('local', { data: {mobile:this.mobile.replace(/\s/g, ''),password:this.password} })

                if(this.staticmodal && this.$route.query.redirect){
                  this.$router.push({ path: this.$route.query.redirect })
                }else if(this.redirectTo){
                  this.$router.push({ path: this.redirectTo })
                }else if(this.prerefresh){
                  if(this.$route.name ==='movie-download-id' || this.$route.name ==='episode-download-id' || this.$route.name ==='series-download-id'){
                    await this.$store.dispatch('login')
                    this.$nuxt.refresh()
                  }else{
                    await this.$auth.fetchUser()
                    this.$store.dispatch("SPA_INIT")
                    if(this.prerefresh=='directdebit'){
                      this.SHOW_MODAL_DIRECTDEBIT()
                      await this.$nuxt.refresh()
                    }else if(this.prerefresh=='subscription'){
                      this.SHOW_MODAL_SUBSCRIPTION()
                      await this.$nuxt.refresh()
                    }else{
                      await this.$router.go()
                    }
                  }
                }else{
                  await this.$store.dispatch('login')
                  this.$nuxt.refresh()
                }


                this.countdown=90
                this.countdown_finished=false
                this.sms_sent=false
                this.mobile=''
                this.password=''

                this.$store.dispatch('login/SET_MESSAGE_SENT_FALSE')
                this.$store.dispatch('validation/clearErrors')



                this.hideModal()

                
                return response
              } catch (err) {
                if(submitcode){
                 submitcode.setAttribute('disabled', false)
                }

                return err
              }
            },
      showModal() {
        this.$refs['loginModal'].show()
        if(!this.staticmodal && document.getElementsByClassName('default').length)
          document.getElementsByClassName('default')[0].classList.add('blure')

        if(document.getElementsByClassName('download').length){
          document.body.classList.remove('download')
          document.body.classList.add('login_dl')
        } else if(document.getElementsByClassName('callback').length){
          document.body.classList.remove('callback')
          document.body.classList.add('login_call')
        }


        this.LoginJquery()
      },
      showLoginAgain() {
        this.$store.dispatch('login/SET_MESSAGE_SENT_FALSE')
        this.sms_sent=false
        this.$store.dispatch('login/REMOVE_PREMOBILE')
        this.$store.dispatch('validation/clearErrors')
        this.mobile=''
        this.LoginJquery()

      },
      hideModal() {
        this.$refs['loginModal'].hide()
        this.$emit("hide-modal", null)

        if(document.getElementsByClassName('login_dl').length){
          document.body.classList.add('download')
          document.body.classList.remove('login_dl')
        }else if(document.getElementsByClassName('login_call').length){
          document.body.classList.add('callback')
          document.body.classList.remove('login_call')
        }

        if(document.getElementsByClassName('default').length)
          document.getElementsByClassName('default')[0].classList.remove('blure')
      },
      LoginJquery() {
        var self = this
this.$refs['loginModal'].$on('shown', function() {
document.getElementsByClassName('modal-content')[0].removeAttribute('tabindex')

if(!self.sms_sent){
              const inputElement2 = document.getElementById('password')
              if(inputElement2){
              inputElement2.addEventListener('keyup', self.formatToNumevent)

               }
              const inputElement = document.getElementById('mobile')
              if(inputElement){
                inputElement.addEventListener('keydown', self.enforceFormat)
                inputElement.addEventListener('keyup', self.formatToPhone)
              }
}
})

      },
      change_mobile(){
              const v = this.formatToNum(this.mobile)
              const input = v.replace(/\D/g, '').substring(0, 11)
              const k = input.length
              if (/(\+98|0|98|0098)?([ ]|-|[()]){0,2}9[0-9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/.test(v) && k == 11) {

                  document.getElementById("mobile").classList.remove('is-invalid')
                  this.isMobileDisabled=false
              } else if (k < 11) {
                this.isMobileDisabled=true
              } else {
                  document.getElementById("mobile").classList.add('is-invalid')
              }
      },
      formatToNum(num) {
          if(num){
            num=num.replace(/۱/g, "1")
            num=num.replace(/۲/g, "2")
            num=num.replace(/۳/g, "3")
            num=num.replace(/۴/g, "4")
            num=num.replace(/۵/g, "5")
            num=num.replace(/۶/g, "6")
            num=num.replace(/۷/g, "7")
            num=num.replace(/۸/g, "8")
            num=num.replace(/۹/g, "9")
            num=num.replace(/۰/g, "0")
          }
          return num
      },
      formatToNumevent(event) {
          if (this.isModifierKey(event)) { return }

          if(event.target.value)
            event.target.value=this.formatToNum(event.target.value)
      },
      enforceFormat(event)  {
          if (!this.isNumericInput(event) && !this.isModifierKey(event)) {
              event.preventDefault()
          }
      },

      formatToPhone (event)  {
          if (this.isModifierKey(event)) { return }
          const target = event.target
          if(target.value)
            target.value=this.formatToNum(target.value)
          var input = event.target.value.replace(/\D/g, '').substring(0, 11) 
          const zip = input.substring(0, 4)
          const middle = input.substring(4, 7)
          const last = input.substring(7, 11)
         
          if (input.length > 7) {
              target.value = `${zip} ${middle} ${last}`   
          }
          else if (input.length > 4) { target.value = `${zip} ${middle}` }
          else if (input.length > 0) { target.value = `${zip}` }
      },
      isNumericInput (event)  {
          const key = event.keyCode
          return ((key >= 48 && key <= 57) || 
              (key >= 96 && key <= 105) 
          )
      },

      SHOW_MODAL_DIRECTDEBIT() {
        this.$store.dispatch('directdebit/SHOW_MODAL',{premobile: null,subscription:false,id: null,type: null,paymentid:0})
      },
      HIDE_MODAL_DIRECTDEBIT() {
        this.$store.dispatch('directdebit/HIDE_MODAL')
      },
      SHOW_MODAL_SUBSCRIPTION() {
        this.$store.dispatch('subscription/SHOW_MODAL',{content_type: '',content_id: ''})
      },
      HIDE_MODAL_SUBSCRIPTION() {
        this.$store.dispatch('subscription/HIDE_MODAL')
      },
      isModifierKey(event) {
          const key = event.keyCode
          return (event.shiftKey === true || key === 35 || key === 36) || 
              (key === 8 || key === 9 || key === 13 || key === 46) || 
              (key > 36 && key < 41) || 
              (
                
                  (event.ctrlKey === true || event.metaKey === true) &&
                  (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
              )
      }
    },
  }
</script>