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
            {{ $t('new.persianLang') }}
          </div>
          <div class="custom-switch custom-switch-label-yesno">
            <input id="checked-1" v-model="fa" class="custom-switch-input" type="checkbox">
            <label class="custom-switch-btn" for="checked-1" />
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="setting_lable">
            {{ $t('new.nightMode') }}
          </div>
          <div class="custom-switch custom-switch-label-yesno">
            <input id="checked-4" v-model="nightmode" class="custom-switch-input" type="checkbox">
            <label class="custom-switch-btn" for="checked-4" />
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="setting_lable">
            {{ $t('new.socialMedia') }}
          </div>
          <div class="d-flex socials setting_lable_socials">
            <a href="#" class="">
              <i class="fab fa-2x fa-telegram-plane" :class="{ 'mr-2 mr-md-4': $i18n.locale!='fa' }" />
            </a>
            <a href="#" class="mr-2 mr-md-4">
              <i class="fab fa-2x fa-instagram" />
            </a>
            <a href="#">
              <i class="fab fa-2x fa-twitter" />
            </a>
          </div>
        </div>

        <header class="headline py-4">
          <h5 class="title font-weight-bold">
            {{ $t('new.more') }}
          </h5>
        </header>
        <div v-if="$i18n.locale=='fa'" class="d-flex justify-content-between align-items-center mb-3 setting_lable">
          <nuxt-link to="/profile/internet">
            {{ $t('new.halfPrice') }}
          </nuxt-link>
        </div>

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
        data:{},
        fa:true,
        nightmode:false
      }
    },
  head() {

    return { title:  this.$t('new.quickSetting') }
  },
  watch: {
    'fa': function() {
      if(this.fa){
        this.$store.dispatch('SET_LANG','fa')
        this.$i18n.locale = 'fa'
      }
      else{
        this.$store.dispatch('SET_LANG','en')
        this.$i18n.locale = 'en'
      }
    },
    'nightmode': function() {

                if(this.nightmode){
                    this.$store.dispatch('SET_NIGHTMODE',true)
}else{
  this.$store.dispatch('SET_NIGHTMODE',false)
}
    }
    },
    mounted () {
       if (this.$colorMode.value=='dark')
      this.nightmode=true
      if(this.$i18n.locale=='fa')
        this.fa=true
      else
        this.fa=false
    }
}
</script>