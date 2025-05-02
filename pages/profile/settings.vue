<template>
  <div id="checkcontainer" class="container-fluid">
    <div class="container mt-5 pt-lg-5 pt-md-5 mb-5 pt-1  faq-page">
      <div class="app_container_pricing mt-4 p-2 mt-md-4 mb-5">
        <header class="headline py-md-5">
          <h5 class="title font-weight-bold">
            {{ $t('new.quickSetting') }}
          </h5>
        </header>
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="setting_lable">
            {{ $t('new.nightMode') }}
          </div>

          <div class="custom-control custom-switch">
            <input id="nightMode" type="checkbox" class="custom-control-input" :checked="$colorMode.value==='dark'" @change="nightmode($event.target.checked)">
            <label class="custom-control-label" for="nightMode" />
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="setting_lable">
            {{ $t('new.persianLang') }}
          </div>
          <div class="custom-control custom-switch">
            <input id="language" disabled type="checkbox" class="custom-control-input" :checked="$i18n.locale==='fa'" @change="changelang()">
            <label class="custom-control-label" for="language" />
          </div>
        </div>
        <div v-if="$config.envname=='upera'" class="d-flex justify-content-between align-items-center mb-3">
          <div class="setting_lable">
            {{ $t('new.socialMedia') }}
          </div>
          <div class="d-flex socials setting_lable_socials">
            <a href="https://t.me/shop_upera" class="">
              <i class="fab fa-2x fa-telegram-plane" :class="{ 'mr-2 mr-md-4': $i18n.locale!='fa' }" />
            </a>
            <a href="https://instagram.com/uperatv" class="mr-2 mr-md-4">
              <i class="fab fa-2x fa-instagram" />
            </a>
            <a href="#">
              <i class="fab fa-2x fa-twitter" />
            </a>
          </div>
        </div>
        <div class="setting_lable">
          فیلترگذاری ثابت بر روی کل محتوا
        </div>
        <FilterContents :show="true" :savedata="true" :setting="true" :notop="false" @execute_content_filtering="execute_content_filtering" />

        <header class="headline py-4">
          <h5 class="title font-weight-bold">
            {{ $t('new.more') }}
          </h5>
        </header>
        <!--         <div v-if="$i18n.locale=='fa'" class="d-flex justify-content-between align-items-center mb-3 setting_lable">
          <nuxt-link to="/profile/internet">
            {{ $t('new.halfPrice') }}
          </nuxt-link>
        </div> -->

        <div class="d-flex justify-content-between align-items-center mb-3 setting_lable">
          <nuxt-link to="/profile/faq">
            {{ $t('new.FAQ') }}
          </nuxt-link>
        </div>
        <div class="d-flex justify-content-between align-items-center mb-3 setting_lable">
          <nuxt-link to="/profile/about-contact">
            {{ $t('footer.aboutus') }}
          </nuxt-link>
        </div>
        <div class="d-flex justify-content-between align-items-center mb-3 setting_lable">
          <nuxt-link to="/profile/terms">
            {{ $t('new.term') }}
          </nuxt-link>
        </div>
        <div v-if="$auth.loggedIn" class="d-flex justify-content-between align-items-center mb-3 setting_lable">
          <b-link class="text-danger" @click="logout()">
            خروج از حساب کاربری
          </b-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    let res
    res = await context.app.$axios.get('get/app/socials')

    return {data:res.data.data}
  },
    data () {
      return {
        data:{}
      }
    },
  head() {

    return { title:  this.$t('new.quickSetting') }
  },
    methods: {
      nightmode(e) {
        if(e==true)
          this.$colorMode.preference='dark'
        else
          this.$colorMode.preference='light'
      },
      async logout() {

        await this.$auth.logout()
        this.$router.go()
        

      },
      execute_content_filtering() {
        return this.data
      },
      changelang(){

        if(this.$i18n.locale==='en'){
          this.$i18n.setLocale('fa')
        }else{
           this.$i18n.setLocale('en')
        }

        
      }
    },
}
</script>