<template>
  <b-modal
    ref="loginModal"
    :centered="staticmodal ? false : true"
    hide-footer
    hide-header
    :no-close-on-backdrop="staticmodal ? true : false"
    :hide-backdrop="staticmodal ? true : false"
    :no-close-on-esc="staticmodal ? true : false"
    :static="staticmodal ? true : false"
    no-enforce-focus
  >
    <div class="image-header-top">
      <img
        src="@/assets/images/upera-logo-text.png"
        alt="upera-logo"
        blank
        blank-color="#bbb"
      />
    </div>
    <h5 class="mt-4 mb-4 login-title">ورود | ثبت نام</h5>
    <div class="divider" />

    <div v-if="!sms_sent && !premobile">
      <b-form @submit.prevent="sendcode">
        <fieldset>
          <div class="position-relative">
            <label for="mobile">{{ $t('new.phone_number') }}</label>
            <b-form-input
              id="mobile"
              v-model.trim="mobile"
              dir="ltr"
              class="form-control large text-right mobile-input"
              :class="{ 'is-invalid': showPhoneError }"
              maxlength="13"
              :placeholder="$t('new.enter_mobile')"
              :title="$t('new.your_mobile')"
              pattern="(\+98|0|98|0098)?([ ]|-|[()]){0,2}9[0-9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}"
              inputmode="numeric"
              autofocus
              @paste="change_mobile"
              @keyup="change_mobile"
              @change="change_mobile"
              @blur="validatePhoneOnBlur"
            />
            <!-- <div v-if="typeof errors === 'string'" class="text-danger">
              {{ errors }}
            </div> -->
            <div v-if="errors && errors.mobile" class="text-danger">
              {{ errors.mobile[0] }}
            </div>
            <div v-else-if="showPhoneError" class="invalid-error-phone">
              {{ $t('new.enter_correctly') }}
            </div>
          </div>

          <div v-if="$i18n.locale == 'fa'" class="terms-section mt-2">
            <small>
              <span>با ثبت نام در {{ $config.name_fa }}، </span>
              <nuxt-link to="/profile/terms"
                >قوانین و شرایط استفاده و حریم خصوصی</nuxt-link
              >
              <span>را میپذیرم</span>
            </small>
          </div>
          <button
            id="submit-mobile"
            class="btn btn-main btn-block mt-5 custom-login-btn"
            :disabled="isMobileDisabled || loading.sendCode"
            :style="buttonStyle"
          >
            <span
              v-if="loading.sendCode"
              class="d-flex align-items-center justify-content-center"
            >
              <b-spinner small class="ml-2" />
              در حال ارسال...
            </span>
            <span v-else>دریافت کد</span>
          </button>
          <button
            class="custom-home-btn"
            :style="buttonStyle"
            :disabled="loading.sendCode"
            @click.prevent="goToHome"
          >
            بازگشت به خانه
          </button>
        </fieldset>
      </b-form>
    </div>
    <div v-else>
      <b-form @submit.prevent="login">
        <fieldset>
          <div class="position-relative">
            <label class="w-100">
              <div class="w-100 top-detail-section mt-2 mb-3">
                <p class="phone-mobile">{{ mobile }}</p>
                <a class="edit-phone" @click.prevent="showLoginAgain()"
                  >{{ $t('new.edit_mobile') }} <i class="fa fa-edit ml-2"
                /></a>
              </div>
            </label>
            <div class="d-flex justify-content-between mb-3">
              <div
                class="d-flex flex-column justify-content-center align-items-start"
              >
                <span v-if="!countdown_finished" class="time-countdown">
                  ثانیه {{ countdown }}
                </span>
                <a
                  v-else
                  class="retry-code"
                  :class="{ disabled: loading.sendCode || loading.resendCode }"
                  @click.prevent="handleResendCode"
                  >{{ $t('new.resend_again_code') }}</a
                >
              </div>
              <div class="otp-container d-flex justify-content-between">
                <input
                  v-for="index in 4"
                  :key="index"
                  :ref="`otp-${index - 1}`"
                  :value="toPersianDigit(otp[index - 1])"
                  type="text"
                  inputmode="numeric"
                  placeholder="-"
                  maxlength="1"
                  class="otp-input text-center"
                  :disabled="loading.login"
                  @input="handleOtpInput(index - 1, $event)"
                  @keydown="handleOtpKeydown(index - 1, $event)"
                  @paste="handleOtpPaste"
                />
              </div>
            </div>
            <div
              v-if="
                typeof errors === 'string' || errors.password || errors.mobile
              "
              class="text-danger position-absolute w-100 text-right d-flex justify-content-start align-content-center"
            >
              <span v-if="typeof errors === 'string'">{{ errors }}</span>
              <span v-else-if="errors.password">{{ errors.password[0] }}</span>
              <span v-else>{{ errors.mobile[0] }}</span>
            </div>
          </div>

          <button
            id="submit-code"
            class="btn btn-main btn-block mt-5 custom-login-btn"
            :style="buttonStyle"
            :disabled="loading.login || otp.join('').length !== 4"
          >
            <span
              v-if="loading.login"
              class="d-flex align-items-center justify-content-center"
            >
              <b-spinner small class="ml-2" />
              در حال ورود...
            </span>
            <span v-else>ورود</span>
          </button>
          <button
            class="custom-home-btn"
            :style="buttonStyle"
            :disabled="loading.login"
            @click.prevent="goToHome"
          >
            بازگشت به خانه
          </button>
        </fieldset>
      </b-form>
    </div>
  </b-modal>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    show: Boolean,
    staticmodal: Boolean,
    redirect: {
      type: String,
      default: null,
    },
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
      app_password: this.$t('player.pass'),
      otp: ['', '', '', ''],
      showPhoneError: false,
      phoneTouched: false,
      loading: {
        sendCode: false,
        login: false,
        resendCode: false,
      },
      countdownTimer: null,
    }
  },

  computed: {
    ...mapGetters({ messageSent: 'login/messageSent' }),
    ...mapGetters({ button_loading: 'login/button_loading' }),
    ...mapGetters({ premessage: 'login/premessage' }),
    ...mapGetters({ premobile: 'login/premobile' }),
    ...mapGetters({ preredirect: 'login/preredirect' }),
    ...mapGetters({ prerefresh: 'login/prerefresh' }),
    buttonStyle() {
      return {
        height: '48px',
        'border-radius': '8px',
        'padding-top': '12px',
        'padding-right': '28px',
        'padding-bottom': '12px',
        'padding-left': '28px',
        background: '#FF6633',
        color: '#FFFFFF',
        'font-weight': '600',
        'font-size': '16px',
        border: 'none',
        cursor: this.isMobileDisabled ? 'not-allowed' : 'pointer',
        opacity: this.isMobileDisabled ? '0.6' : '1',
      }
    },
  },
  watch: {
    show(val) {
      if (val !== null && this.show) {
        if (this.premobile) {
          this.mobile = this.premobile
          this.sendcode()
        }

        if (this.redirect) {
          this.redirectTo = this.redirect
        } else if (this.preredirect) {
          this.redirectTo = this.preredirect
        }

        this.showModal()
      } else {
        this.hideModal()
      }
    },
    messageSent(val) {
      if (val) {
        this.sms_sent = true
        this.startCountdown()
        this.otp = ['', '', '', '']

        // stop loading (send/resend) — store confirmed send
        this.loading.sendCode = false
        this.loading.resendCode = false

        // wait DOM update then focus first OTP input
        this.$nextTick(() => {
          // small delay helps when inputs are inside conditional v-if
          setTimeout(() => {
            this.focusRef('otp-0')
          }, 20)
        })
      } else {
        // If store resets messageSent, clear loading flags too
        this.loading.sendCode = false
        this.loading.resendCode = false
      }
    },

    otp: {
      handler(newVal) {
        const otpString = newVal.join('')
        this.password = otpString

        // Auto submit when OTP is complete
        if (otpString.length === 4 && !this.loading.login) {
          this.login()
        }
      },
      deep: true,
    },
    mobile(newVal) {
      if (newVal && this.phoneTouched) {
        this.validatePhoneNumber(newVal)
      }
    },
  },

  mounted() {
    if (this.staticmodal) {
      this.showModal()
      this.$refs['loginModal'].$on('show', function () {
        document
          .getElementsByClassName('modal-content')[0]
          .removeAttribute('tabindex')
      })
    }
    this.$refs['loginModal'].$on('hide', () => {
      this.clearCountdown()
      if (document.getElementsByClassName('default').length)
        document.getElementsByClassName('default')[0].classList.remove('blure')
      else window.history.length > 2 ? this.$router.go(-1) : this.$router.go()
      this.$emit('hide-modal', null)
    })
  },

  beforeDestroy() {
    this.clearCountdown()
  },

  methods: {
    startCountdown() {
      this.clearCountdown()
      this.countdown = 90
      this.countdown_finished = false

      const tick = () => {
        if (this.countdown > 0) {
          this.countdown -= 1
          this.countdownTimer = setTimeout(tick, 1000)
        } else {
          this.countdown_finished = true
          this.countdownTimer = null
        }
      }

      this.countdownTimer = setTimeout(tick, 1000)
    },

    clearCountdown() {
      if (this.countdownTimer) {
        clearTimeout(this.countdownTimer)
        this.countdownTimer = null
      }
    },

    async sendcode() {
      if (!this.validatePhoneNumber(this.mobile)) {
        this.showPhoneError = true
        // clear both loading flags (in case this was a resend)
        this.loading.sendCode = false
        this.loading.resendCode = false
        return
      }

      // If this call originates from "resend", we might have set loading.resendCode already.
      // Ensure sendCode shows spinner too (main spinner for both cases)
      this.loading.sendCode = true

      try {
        await this.$store.dispatch('login/SEND_LOGIN_CODE', {
          mobile: this.mobile.replace(/\s/g, ''),
        })
        // do not clear loading here — wait for messageSent watcher to clear it
      } catch (error) {
        // clear resend flag if it was a resend attempt
        this.loading.sendCode = false
        this.loading.resendCode = false
        throw error
      } finally {
        // do not forcibly clear sendCode here — allow watcher to clear it on success
      }
    },
    validatePhoneNumber(phone) {
      const v = this.formatToNum(phone)
      const input = v.replace(/\D/g, '').substring(0, 11)
      const k = input.length

      const isValid =
        /(\+98|0|98|0098)?([ ]|-|[()]){0,2}9[0-9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/.test(
          v
        ) && k == 11

      return isValid
    },

    validatePhoneOnBlur() {
      this.phoneTouched = true
      if (this.mobile) {
        this.showPhoneError = !this.validatePhoneNumber(this.mobile)
      }
    },

    change_mobile() {
      this.phoneTouched = true
      const v = this.formatToNum(this.mobile)
      const input = v.replace(/\D/g, '').substring(0, 11)
      const k = input.length

      const isValid = this.validatePhoneNumber(this.mobile)

      if (isValid && k == 11) {
        document.getElementById('mobile').classList.remove('is-invalid')
        this.isMobileDisabled = false
        this.showPhoneError = false
      } else if (k < 11) {
        this.isMobileDisabled = true
        this.showPhoneError = false
      } else {
        document.getElementById('mobile').classList.add('is-invalid')
        this.isMobileDisabled = true
        this.showPhoneError = true
      }
    },
    getRefEl(refName) {
      const refVal = this.$refs[refName]
      if (!refVal) return null
      // Vue sometimes provides array of nodes (if component wrapped or v-for).
      if (Array.isArray(refVal)) return refVal[0] || null
      return refVal
    },

    focusRef(refName) {
      const el = this.getRefEl(refName)
      if (!el) return false
      // in some cases ref might be a Vue component, get underlying input
      const node =
        el instanceof HTMLElement ? el : el.$el || el.$refs?.input || null
      if (node && typeof node.focus === 'function') {
        node.focus()
        // optional: place caret at end for input fields
        try {
          const len = node.value?.length || 0
          node.setSelectionRange && node.setSelectionRange(len, len)
        } catch (e) {
          // ignore
        }
        return true
      }
      return false
    },
    async login() {
      if (this.loading.login) return

      const submitcode = document.getElementById('submit-code')
      if (submitcode) {
        submitcode.setAttribute('disabled', true)
      }

      this.loading.login = true

      // Ensure password is the OTP joined together (with Latin digits)
      const otpPassword = this.otp.join('')

      try {
        let response = await this.$auth.loginWith('local', {
          data: {
            mobile: this.mobile.replace(/\s/g, ''),
            password: otpPassword,
          },
        })

        if (this.staticmodal && this.$route.query.redirect) {
          this.$router.push({ path: this.$route.query.redirect })
        } else if (this.redirectTo) {
          this.$router.push({ path: this.redirectTo })
        } else if (this.prerefresh) {
          if (
            this.$route.name === 'movie-download-id' ||
            this.$route.name === 'movie-payment-id' ||
            this.$route.name === 'episode-download-id' ||
            this.$route.name === 'episode-payment-id' ||
            this.$route.name === 'series-download-id'
          ) {
            await this.$store.dispatch('login')
            this.$nuxt.refresh()
          } else {
            await this.$auth.fetchUser()
            this.$store.dispatch('SPA_INIT')
            if (this.prerefresh == 'directdebit') {
              this.SHOW_MODAL_DIRECTDEBIT()
              await this.$nuxt.refresh()
            } else if (this.prerefresh == 'subscription') {
              this.SHOW_MODAL_SUBSCRIPTION()
              await this.$nuxt.refresh()
            } else {
              await this.$router.go()
            }
          }
        } else {
          await this.$store.dispatch('login')
          this.$nuxt.refresh()
        }

        this.clearCountdown()
        this.sms_sent = false
        this.mobile = ''
        this.password = ''
        this.otp = ['', '', '', '']
        this.showPhoneError = false
        this.phoneTouched = false

        this.$store.dispatch('login/SET_MESSAGE_SENT_FALSE')
        this.$store.dispatch('validation/clearErrors')

        this.hideModal()

        return response
      } catch (err) {
        if (submitcode) {
          submitcode.setAttribute('disabled', false)
        }
        return err
      } finally {
        this.loading.login = false
      }
    },

    showModal() {
      this.$refs['loginModal'].show()
      if (
        !this.staticmodal &&
        document.getElementsByClassName('default').length
      )
        document.getElementsByClassName('default')[0].classList.add('blure')

      if (document.getElementsByClassName('download').length) {
        document.body.classList.remove('download')
        document.body.classList.add('login_dl')
      } else if (document.getElementsByClassName('callback').length) {
        document.body.classList.remove('callback')
        document.body.classList.add('login_call')
      }

      this.LoginJquery()

      // ✅ Focus on mobile input after modal opens
      this.$nextTick(() => {
        const mobileInput = document.getElementById('mobile')
        if (mobileInput) mobileInput.focus()
        setTimeout(() => {
          this.focusRef('mobile')
        }, 20)
      })
    },

    showLoginAgain() {
      if (this.loading.sendCode || this.loading.login) return

      this.$store.dispatch('login/SET_MESSAGE_SENT_FALSE')
      this.sms_sent = false
      this.$store.dispatch('login/REMOVE_PREMOBILE')
      this.$store.dispatch('validation/clearErrors')
      this.otp = ['', '', '', '']
      this.showPhoneError = false
      this.phoneTouched = false
      this.loading.sendCode = false
      this.loading.login = false
      this.clearCountdown()
      this.LoginJquery()
    },

    hideModal() {
      this.$refs['loginModal'].hide()
      this.$emit('hide-modal', null)

      if (document.getElementsByClassName('login_dl').length) {
        document.body.classList.add('download')
        document.body.classList.remove('login_dl')
      } else if (document.getElementsByClassName('login_call').length) {
        document.body.classList.add('callback')
        document.body.classList.remove('login_call')
      }

      if (document.getElementsByClassName('default').length)
        document.getElementsByClassName('default')[0].classList.remove('blure')
    },

    goToHome() {
      if (this.loading.sendCode || this.loading.login) return
      this.hideModal()
      this.$router.push('/')
    },

    LoginJquery() {
      var self = this
      this.$refs['loginModal'].$on('shown', function () {
        document
          .getElementsByClassName('modal-content')[0]
          .removeAttribute('tabindex')

        if (!self.sms_sent) {
          const inputElement = document.getElementById('mobile')
          if (inputElement) {
            inputElement.addEventListener('keydown', self.enforceFormat)
            inputElement.addEventListener('keyup', self.formatToPhone)
          }
        }
      })
    },

    async handleResendCode() {
      if (this.loading.sendCode || this.loading.resendCode) return

      this.loading.resendCode = true

      try {
        await this.sendcode()
        this.otp = ['', '', '', '']

        // ✅ restart timer when resend is successful
        this.startCountdown()

        // ✅ focus again on first OTP input
        this.$nextTick(() => {
          setTimeout(() => {
            this.focusRef('otp-0')
          }, 20)
        })
      } catch (e) {
        this.loading.resendCode = false
        this.loading.sendCode = false
      }
    },
    formatToNum(num) {
      if (num) {
        num = num.replace(/۱/g, '1')
        num = num.replace(/۲/g, '2')
        num = num.replace(/۳/g, '3')
        num = num.replace(/۴/g, '4')
        num = num.replace(/۵/g, '5')
        num = num.replace(/۶/g, '6')
        num = num.replace(/۷/g, '7')
        num = num.replace(/۸/g, '8')
        num = num.replace(/۹/g, '9')
        num = num.replace(/۰/g, '0')
      }
      return num
    },

    enforceFormat(event) {
      if (!this.isNumericInput(event) && !this.isModifierKey(event)) {
        event.preventDefault()
      }
    },

    formatToPhone(event) {
      if (this.isModifierKey(event)) {
        return
      }
      const target = event.target
      if (target.value) target.value = this.formatToNum(target.value)
      var input = event.target.value.replace(/\D/g, '').substring(0, 11)
      const zip = input.substring(0, 4)
      const middle = input.substring(4, 7)
      const last = input.substring(7, 11)

      if (input.length > 7) {
        target.value = `${zip} ${middle} ${last}`
      } else if (input.length > 4) {
        target.value = `${zip} ${middle}`
      } else if (input.length > 0) {
        target.value = `${zip}`
      }

      // Update the mobile model with the formatted value
      this.mobile = target.value
    },

    // OTP Input Methods
    toPersianDigit(digit) {
      if (!digit) return ''
      const persianMap = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
      return String(digit).replace(/\d/g, (d) => persianMap[+d])
    },

    handleOtpInput(index, event) {
      if (this.loading.login) return

      let value = event.target.value

      // Convert Persian digits to Latin for storage
      value = this.formatToNum(value)

      // Only allow numbers
      if (!/^\d*$/.test(value)) {
        this.$set(this.otp, index, '')
        event.target.value = ''
        return
      }

      // Update the model with Latin digit using Vue.set for reactivity
      this.$set(this.otp, index, value)

      // If a number is entered, move to next input
      if (value && index < 3) {
        this.$nextTick(() => {
          if (
            this.$refs[`otp-${index + 1}`] &&
            this.$refs[`otp-${index + 1}`][0]
          ) {
            this.$refs[`otp-${index + 1}`][0].focus()
          }
        })
      } else if (value && index === 3) {
        // When last digit is entered, trigger auto-login
        this.$nextTick(() => {
          const otpString = this.otp.join('')
          if (otpString.length === 4 && !this.loading.login) {
            this.login()
          }
        })
      }
    },

    handleOtpKeydown(index, event) {
      if (this.loading.login) return

      // Handle backspace
      if (event.key === 'Backspace') {
        if (!this.otp[index] && index > 0) {
          // Move to previous input if current is empty
          this.$nextTick(() => {
            if (
              this.$refs[`otp-${index - 1}`] &&
              this.$refs[`otp-${index - 1}`][0]
            ) {
              this.$refs[`otp-${index - 1}`][0].focus()
            }
          })
        }
        this.$set(this.otp, index, '')
      }
    },

    handleOtpPaste(event) {
      if (this.loading.login) return

      event.preventDefault()
      let pasteData = event.clipboardData.getData('text').slice(0, 4)

      // Convert Persian digits to Latin
      pasteData = this.formatToNum(pasteData)

      const numbers = pasteData.replace(/\D/g, '')

      for (let i = 0; i < Math.min(numbers.length, 4); i++) {
        this.$set(this.otp, i, numbers[i])
      }

      // Focus on the last input and trigger auto-login if complete
      this.$nextTick(() => {
        const lastIndex = Math.min(numbers.length - 1, 3)
        if (
          this.$refs[`otp-${lastIndex}`] &&
          this.$refs[`otp-${lastIndex}`][0]
        ) {
          this.$refs[`otp-${lastIndex}`][0].focus()
        }
        
        // Auto-login if 4 digits pasted
        if (numbers.length === 4 && !this.loading.login) {
          this.login()
        }
      })
    },

    isNumericInput(event) {
      const key = event.keyCode
      return (key >= 48 && key <= 57) || (key >= 96 && key <= 105)
    },

    SHOW_MODAL_DIRECTDEBIT() {
      this.$store.dispatch('directdebit/SHOW_MODAL', {
        premobile: null,
        subscription: false,
        id: null,
        type: null,
        paymentid: 0,
      })
    },

    HIDE_MODAL_DIRECTDEBIT() {
      this.$store.dispatch('directdebit/HIDE_MODAL')
    },

    SHOW_MODAL_SUBSCRIPTION() {
      this.$store.dispatch('subscription/SHOW_MODAL', {
        content_type: '',
        content_id: '',
      })
    },

    HIDE_MODAL_SUBSCRIPTION() {
      this.$store.dispatch('subscription/HIDE_MODAL')
    },

    isModifierKey(event) {
      const key = event.keyCode
      return (
        event.shiftKey === true ||
        key === 35 ||
        key === 36 ||
        key === 8 ||
        key === 9 ||
        key === 13 ||
        key === 46 ||
        (key > 36 && key < 41) ||
        ((event.ctrlKey === true || event.metaKey === true) &&
          (key === 65 || key === 67 || key === 86 || key === 88 || key === 90))
      )
    },
  },
}
</script>

<style scoped>
/* Your existing styles remain the same */
.custom-login-btn {
  height: 48px;
  border-radius: 8px;
  padding: 12px 28px;
  background: #ff6633;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  border: none;
  width: 100%;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-login-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.custom-home-btn {
  height: 42px !important;
  border-radius: 8px !important;
  padding: 12px 28px !important;
  background: white !important;
  color: #ff6633 !important;
  font-weight: 600 !important;
  font-size: 16px !important;
  border: 1px solid #ff6633 !important;
  width: 100% !important;
  opacity: 1 !important;
  cursor: pointer !important;
  transition: opacity 0.3s ease;
  margin-top: 0.5rem;
}

.custom-home-btn:disabled {
  opacity: 0.6 !important;
  cursor: not-allowed !important;
}

.custom-resend-btn {
  color: #ff6633;
  text-decoration: none;
  font-weight: 600;
}

.custom-resend-btn:hover {
  text-decoration: underline;
}

.retry-code.disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}

.otp-container {
  gap: 20px;
  direction: ltr !important;
}

.otp-input {
  width: 60px;
  height: 60px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 600;
  background: #fff;
  transition: all 0.3s ease;
}

.otp-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.otp-input:focus {
  border-color: #ff6633;
  outline: none;
  box-shadow: 0 0 0 2px rgba(255, 102, 51, 0.2);
}

.otp-input.filled {
  border-color: #ff6633;
  background-color: rgba(255, 102, 51, 0.05);
}

@media (max-width: 768px) {
  .otp-input {
    width: 50px;
    height: 50px;
    font-size: 18px;
  }

  .otp-container {
    gap: 8px;
  }
}

.divider {
  width: 100%;
  height: 1px;
  margin: 0 0 1rem 0 !important;
  background-color: #e2e8f0 !important;
}

.image-header-top {
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  width: 100%;
}
.image-header-top img {
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  width: 193px;
  height: 109px;
}

.position-relative label {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: right;
}
.form-control {
  height: 48px;
  border-radius: 8px;
  border-width: 1px;
  padding-right: 12px;
  padding-left: 12px;
  border: 1px solid #cbd5e1;
}

.login-title {
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}

.invalid-error-phone {
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #ea2a33;
  margin-top: 4px;
  padding: 0;
  margin-top: 1rem;
}

.phone-mobile {
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  text-align: right;
  margin-bottom: 0 !important;
  direction: ltr !important;
}

.edit-phone {
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  text-align: left;
  color: #0047f1;
  cursor: pointer;
}

.edit-phone:hover {
  text-decoration: underline;
}

.time-countdown {
  font-weight: 500;
  font-size: 13px;
  line-height: 28px;
  text-align: right;
}
.retry-code {
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0%;
  color: #1b6be5;
  cursor: pointer;
}

.retry-code:hover {
  text-decoration: underline;
}

.terms-section {
  text-align: right;
}

.top-detail-section {
  display: flex;
  justify-content: space-between;
}

.modal-body {
  direction: rtl !important;
}
</style>
