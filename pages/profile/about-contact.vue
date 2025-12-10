<template>
  <div id="checkcontainer" class="container-fluid">
    <div class="container pt-5 pt-lg-5 pt-md-5 mb-5 pt-1 faq-page">
      <section id="banner">
        <div class="container">
          <header class="headline mt-5">
            <h5 class="title font-weight-bold">
              {{ $t('footer.aboutus') }}
            </h5>
          </header>
        </div>
      </section>
      <br /><br />
      <!--     <h4 class="font-weight-bold h6 mt-1 pt-2">
      <span class="pl-2 title">{{ $t('footer.aboutus') }}</span>
    </h4> -->
      <!-- <hr> -->
      <div v-if="checkuser.about && checkuser.about.length > 5">
        <div v-lazy-load="checkuser.about" class="body text-justify" />
      </div>
      <div v-else>
        <div v-lazy-load="data" class="body text-justify" />
      </div>
      <section id="banner">
        <div class="container">
          <header class="headline mt-5">
            <h5 class="title font-weight-bold">سیستم درجه‌بندی سنی</h5>
          </header>
        </div>
      </section>
      <br /><br />
      <div>
        <b-table dark :items="items" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    let res
    res = await context.app.$axios.get('/get/app/details')
    if (context.app.i18n.locale == 'fa') return { data: res.data.data.about }
    else return { data: res.data.data.about_en }
  },
  data() {
    return {
      data: '',
      items: [
        {
          'درجه‌بندی/نشان': 'G',
          معنی: 'جی – تماشاگران عمومی',
          توضیحات:
            'مناسب تمامی سنین. هیچ چیزی باعث آزار والدین برای تماشای کودکان نمی‌شود.',
        },
        {
          'درجه‌بندی/نشان': 'PG',
          معنی: 'پی‌جی – سرپرستی والدین پیشنهاد می‌شود',
          توضیحات:
            'برخی از مواد ممکن است برای کودکان مناسب نباشد. راهنمایی و سرپرستی از سوی والدین تقاضا می‌شود. ممکن است حاوی مطالبی باشد که والدین برای فرزندان خردسال خود مناسب ندانند.',
        },
        {
          'درجه‌بندی/نشان': 'PG-13',
          معنی: 'پی‌جی-۱۳ – تذکر قاطع به والدین',
          توضیحات:
            'برخی از صحنه ها برای افراد زیر ۱۳ سال نامناسب است. از والدین درخواست می‌شود احتیاط کنند.',
        },
        {
          'درجه‌بندی/نشان': 'R',
          معنی: 'آر – محدود',
          توضیحات:
            'زیر ۱۸ سال به همراهی والدین یا سرپرست نیاز دارد. حاوی تعدادی محتوای بزرگسالانه است.',
        },
        {
          'درجه‌بندی/نشان': 'X',
          معنی: 'فقط بزرگسالان',
          توضیحات:
            'هیچ فرد کمتر از ۱۸ سال نباید این فیلم ها را ببینند. فقط بزرگسالان. کودکان اجازهٔ ورود ندارند.',
        },
      ],
    }
  },
  head() {
    return { title: this.$t('footer.aboutus') }
  },
}
</script>
<style>
.faq-page .table {
  color: #f8f9fa;
}
.title {
  border-radius: 8px !important;
}
</style>
