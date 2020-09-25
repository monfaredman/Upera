<template>
  <div class="container mt-5  pt-md-3 pt-lg-4 mb-5 faq-page">
    <section id="banner">
      <div class="container">
        <header class="headline mt-5">
          <h5 class="title font-weight-bold">
            {{ $t('new.halfPrice') }}
          </h5>
        </header>
      </div>
    </section>
    <br><br>
    <!--     <h4 class="font-weight-bold h6 mt-1 pt-2">
      <span class="pl-2 title">{{ $t('footer.halfPrice') }}</span>
    </h4> -->
    <!-- <hr> -->
            

    <ul class="list-unstyled">
      <li v-for="(item,index) in data" :key="index" class="media mb-5">
        <img :src="item.icon" class="align-self-center mr-3" :alt="item.operator" width="80px">
        <div class="media-body">
          <h5 class="mt-0 mb-1">
            {{ item.operator }}
          </h5>
          <div class="text-justify">
            {{ item.desc }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    let res
    res = await context.app.$axios.get('/get/app/details')
    // if(context.app.i18n.locale=="fa")
    return {data:res.data.data.operators}
    // else
    //   return {data:res.data.data.about_en}
  },
    data () {
      return {
        data:{},
      }
    }
}
</script>