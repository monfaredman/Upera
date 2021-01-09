<template>
  <div id="checkcontainer" class="container-fluid">
    <div class="container mt-5 pt-lg-5 pt-md-5 mb-5 faq-page">
      <section id="banner">
        <div class="container">
          <header class="headline mt-5">
            <h5 class="title font-weight-bold">
              {{ $t('footer.terms') }}
            </h5>
          </header>
        </div>
      </section>
      <br><br>
      <!--     <h4 class="font-weight-bold h6 mt-1 pt-2">
      <span class="pl-2 title">{{ $t('new.term') }}</span>
    </h4> -->
      <!-- <hr> -->
      <div class="body text-justify" v-html="data.terms" />

      <section id="banner">
        <div class="container">
          <header class="headline mt-5">
            <h5 class="title font-weight-bold">
              {{ $t('footer.privacy') }}
            </h5>
          </header>
        </div>
      </section>
      <br><br>
      <!--     <h4 class="font-weight-bold h6 mt-1 pt-2">
      <span class="pl-2 title">{{ $t('new.term') }}</span>
    </h4> -->
      <!-- <hr> -->
      <div class="body text-justify" v-html="data.privacy" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    let res
    res = await context.app.$axios.get('/get/app/details')
    if(context.app.i18n.locale=="fa")
    return {data:{terms:res.data.data.terms,privacy:res.data.data.privacy}}
    else
      return {data:{terms:res.data.data.terms_en,privacy:res.data.data.privacy_en}}
  },
    data () {
      return {
        data:{},
      }
    },
  head() {

    return { title:  this.$t('footer.terms') }
  }
}
</script>