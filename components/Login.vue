<template>
  <b-modal ref="loginModal" centered hide-footer hide-header :no-close-on-backdrop="staticmodal ? true : false" :hide-backdrop="staticmodal ? true : false">
    <button v-show="!staticmodal" type="button" class="close" @click="hideModal">
      <span aria-hidden="true">&times;</span>
    </button>
    <div v-if="!sms_sent">
      <h5 class="mt-2 mb-4 font-weight-bold text-center h6">
        {{ $t('new.login_register') }}
      </h5>
      <b-form @submit.prevent="sendcode">
        <fieldset>
          <div class="position-relative">
            <label for="mobile">{{ $t('new.enter_mobile') }}</label>                  
            <b-form-input id="mobile" v-model.trim="mobile" dir="ltr" class="form-control large text-right mobile-input" maxlength="13" :placeholder="$t('new.enter_mobile')" :title="$t('new.your_mobile')" pattern="(\+98|0|98|0098)?([ ]|-|[()]){0,2}9[0-9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}" inputmode="numeric" autofocus />
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
          <button id="submit-mobile" class="btn btn-primary btn-block mt-5 mb-2" disabled>
            {{ $t('nav.login') }}
          </button>
          <div v-if="$i18n.locale=='fa'" class="text-center">
            <small>
              <span>با ثبت نام در آپرا، </span>
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
          <div class="position-relative">
            <label for="sms">{{ $t('new.enter_sent_code') }}</label>
            <b-form-input v-model.trim="password" type="number" pattern="[0-9]*" data-formcore-type="numeric" inputmode="numeric" maxlength="4" data-numeric-input class="form-control large is-invalid text-right" data-validate="minlength" :data-message="$t('new.code_is_incorrect')" :placeholder="$t('new.digit_code')+' '+mobile" required on-key-press="if(this.value.length==4) return false;" autofocus />
            <div v-if="typeof errors === 'string' || errors.password || errors.mobile" class="invalid-feedback">
              <span v-if="typeof errors === 'string'">{{ errors }}</span>
              <span v-else-if="errors.password">{{ errors.password[0] }}</span>
              <span v-else>{{ errors.mobile[0] }}</span>
              <a v-show="countdown_finished" class="cup" @click.prevent="sendcode();countdown=90;countDownTimer();countdown_finished=false;">{{ $t('new.resend_again') }}</a>
            </div>
          </div>
                
          <button class="btn btn-primary btn-block mt-5">
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
        default: ''
    }
  },
  data() {
    return {
                mobile: '',
                password: '',
                sms_sent: false,
                countdown: 90,
                countdown_finished: false,
                redirectTo: false,
                app_mobile: this.$t('auth.mobile'),
                app_password: this.$t('player.pass')
    }
  },

        computed: {
            ...mapGetters({messageSent: "login/messageSent"})
        },
        watch: {
            show(val) {
              if (val !== null && this.show) {
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
            }
        },

    mounted() {
      if (this.staticmodal) {
                this.showModal()
  this.$refs['loginModal'].$on('show', function() {
    $('.modal-content').removeAttr("tabindex")
})
              }
        this.$refs['loginModal'].$on('hide', () => {
          $('.default').removeClass('blure')
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
              try {
                let response = await this.$auth.loginWith('local', { data: {mobile:this.mobile.replace(/\s/g, ''),password:this.password} })
                $('.default').removeClass('blure')
                this.hideModal()
                this.countdown=90
                this.countdown_finished=false
                this.sms_sent=false
                this.mobile=''
                this.password=''
                this.$store.dispatch('login/SET_MESSAGE_SENT_FALSE')
                this.$store.dispatch('validation/clearErrors')
                if(this.staticmodal && this.$route.query.redirect){
                  this.$router.push({ path: this.$route.query.redirect })
                }else if(this.staticmodal && this.redirect){
                  this.$router.push({ path: this.redirect })
                }else{
                  if (process.client) {
                    this.$store.dispatch('login')
                  }
                  this.$nuxt.refresh()
                }
                // else{
                //   this.$router.go()
                // }
                
                return response
              } catch (err) {
                return err
              }
            },
      showModal() {
        this.$refs['loginModal'].show()
        if(!this.staticmodal)
        $('.default').addClass('blure')
        this.LoginJquery()
      },
      showLoginAgain() {
        this.$store.dispatch('login/SET_MESSAGE_SENT_FALSE')
        this.sms_sent=false
        this.$store.dispatch('validation/clearErrors')
        this.mobile=''
        this.LoginJquery()

      },
      hideModal() {
        this.$refs['loginModal'].hide()
        this.$emit("hide-modal", null)
        $('.default').removeClass('blure')
      },
      LoginJquery() {
        $(document).ready(function () {

$('.modal-content').removeAttr("tabindex")

if(!this.sms_sent){
              const isNumericInput = (event) => {
                  const key = event.keyCode
                  return ((key >= 48 && key <= 57) || 
                      (key >= 96 && key <= 105) 
                  )
              }

              const isModifierKey = (event) => {
                  const key = event.keyCode
                  return (event.shiftKey === true || key === 35 || key === 36) || 
                      (key === 8 || key === 9 || key === 13 || key === 46) || 
                      (key > 36 && key < 41) || 
                      (
                        
                          (event.ctrlKey === true || event.metaKey === true) &&
                          (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
                      )
              }

              const enforceFormat = (event) => {
                 
                  if (!isNumericInput(event) && !isModifierKey(event)) {
                      event.preventDefault()
                  }
              }

              const formatToPhone = (event) => {
                  if (isModifierKey(event)) { return }

                 
                  const target = event.target
                  const input = event.target.value.replace(/\D/g, '').substring(0, 11) 
                  const zip = input.substring(0, 4)
                  const middle = input.substring(4, 7)
                  const last = input.substring(7, 11)
                 
                  if (input.length > 7) {
                      target.value = `${zip} ${middle} ${last}`   
                  }
                  else if (input.length > 4) { target.value = `${zip} ${middle}` }
                  else if (input.length > 0) { target.value = `${zip}` }
              }
              const inputElement = document.getElementById('mobile')
              if(inputElement){
              inputElement.addEventListener('keydown', enforceFormat)
              inputElement.addEventListener('keyup', formatToPhone)
          $('#mobile').on("change paste keyup", function (e) {
              e.preventDefault()
              const v = $(this).val()
              const input = event.target.value.replace(/\D/g, '').substring(0, 11)
              const k = input.length   
              if (/(\+98|0|98|0098)?([ ]|-|[()]){0,2}9[0-9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/.test(v) && k == 11) {
                  $(this).removeClass('is-invalid')
                  $('#submit-mobile').attr('disabled', false)
              } else if (k < 11) {
                  $('#submit-mobile').attr('disabled', true)
              } else {
                  $(this).addClass('is-invalid')
              }
          })
              }
}
        })
      },
    },
  }
</script>