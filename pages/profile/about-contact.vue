<template>
  <div class="container mt-5  pt-md-3 pt-lg-4 mb-5 faq-page">
    <h4 class="font-weight-bold h6 mt-1 pt-2">
      <span class="pl-2 title">درباره و تماس با ما</span>
    </h4>
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    let res
    res = await context.app.$axios.get('/faq')
    if(context.app.i18n.locale=="fa")
    return {data:res.data.data.faq}
    else
      return {data:res.data.data.faq_en}
  },
    data () {
      return {
        data:{},
      }
    }
}
</script>