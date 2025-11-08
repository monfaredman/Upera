<template>
  <div id="checkcontainer" class="container-fluid">
    <div class="container pt-5 pt-lg-5 pt-md-5 mb-5 pt-1 faq-page">
      <section id="banner">
        <div class="container">
          <header class="headline mt-5">
            <h5 class="title font-weight-bold">
              {{ $t('footer.terms') }}
            </h5>
          </header>
        </div>
      </section>
      <br /><br />
      <!--     <h4 class="font-weight-bold h6 mt-1 pt-2">
      <span class="pl-2 title">{{ $t('new.term') }}</span>
    </h4> -->
      <!-- <hr> -->
      <div
        v-if="!checkuser.terms"
        v-lazy-load="data.terms"
        class="body text-justify"
      />
      <div v-else v-lazy-load="checkuser.terms" class="body text-justify" />

      <section id="banner">
        <div class="container">
          <header class="headline mt-5">
            <h5 class="title font-weight-bold">
              {{ $t('footer.privacy') }}
            </h5>
          </header>
        </div>
      </section>
      <br /><br />
      <!--     <h4 class="font-weight-bold h6 mt-1 pt-2">
      <span class="pl-2 title">{{ $t('new.term') }}</span>
    </h4> -->
      <!-- <hr> -->
      <div
        v-if="!checkuser.privacy"
        v-lazy-load="data.privacy"
        class="body text-justify"
      />
      <div v-else v-lazy-load="checkuser.privacy" class="body text-justify" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    let res
    res = await context.app.$axios.get('/get/app/details')
    // if(context.app.i18n.locale=="fa")
    return {
      data: { terms: res.data.data.terms, privacy: res.data.data.privacy },
    }
    // else
    //   return {data:{terms:res.data.data.terms_en,privacy:res.data.data.privacy_en}}
  },
  data() {
    return {
      data: {},
    }
  },
  head() {
    return { title: this.$t('footer.terms') }
  },
}
</script>
