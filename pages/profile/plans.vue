<template>
  <div class="container  pt-md-3 pt-lg-4 mb-5 faq-page">
    <div class="app_container_pricing mt-4 p-2  pt-1 mt-md-4 mb-5">
      <div class="mt-3 pt-2 mt-lg-5 pt-lg-5 font-weight-normal">
        <p class="pricing_ads_lable">
          با خرید اشتراک پف‌‌‌‌‌‌‌‌‌‌‌‌‌فیلم <strong>بدون پرداخت هیچ‌گونه هزینه‌ی دیگری</strong> بی‌‌وقفه فیلم ببین.
        </p>
      </div>
      <div class="pricing_list_container mb-3 bg-light p-2 p-lg-3">
        <div class="setting_lable pricing_Subscribe mb-3 mt-0">
          اشتراک ۱ ماهه <small class="fa-xs ml-1">۳۰ روز هدیه</small>
        </div>
        <div class="text-right pricing_cost_box">
          <del>۱۵.۰۰۰</del>
          <span class="overlay_price font-weight-light ml-1"><span class="overlay_price_label position-relative"><i class="icon-toman" /></span><span>۱۳</span>.۰۰۰</span>
          <small>هزینه ماهیانه کمتر از یک بلیط سینما</small>
          <a href="" class="btn btn-main py-1 px-4 px-lg-4 float-left" data-toggle="modal" data-target="#">پرداخت</a>
        </div>
      </div>
      <div class="pricing_list_container mb-3 bg-light p-2 p-lg-3">
        <div class="text-right pricing_cost_box">
          <div class="pricing_Subscribe_boldmoves mt-0">
            اشتراک <span class="bold_number">۳</span> <span class="monthly_lable">ماهه</span> <small class="fa-xs ml-1">۱۲۰ روز هدیه</small><p>۳۰% تخفیف</p>
          </div>

          <del class="pricing_Subscribe_boldmoves_del">۴۵.۰۰۰</del>
          <span class="overlay_price overlay_price_boldmoves"><span class="overlay_price_label position-relative"><i class="icon-toman" /></span><span>۳۳</span>.۰۰۰</span>

          <a href="" class="btn btn-main py-1 px-4 px-lg-4 float-left" data-toggle="modal" data-target="#">پرداخت</a>
        </div>
      </div>
      <div class="pricing_list_container mb-3 bg-light p-2 p-lg-3">
        <div class="setting_lable pricing_Subscribe mb-3 mt-0">
          اشتراک ۶ ماهه + ۱ ماه هدیه اولین خرید
        </div>
        <div class="text-right pricing_cost_box">
          <del>۹۰.۰۰۰</del>
          <span style="flex:1" class="overlay_price font-weight-light ml-1"><span class="overlay_price_label position-relative"><i class="icon-toman" /></span><span>۵۹</span>.۰۰۰</span>
          <a href="" class="btn btn-main py-1 px-4 px-lg-4 float-left" data-toggle="modal" data-target="#">پرداخت</a>
        </div>
      </div>
      <div class="invite_friend_container mb-1 p-2 p-lg-3">
        <input id="Turnover_inventory" class="" type="checkbox">
        <span class="setting_lable pricing_Subscribe">استفاده از موجودی کیف پول</span>
        <button class="btn btn-secondary rounded-pill setting_lable_connect_tv">
          <span>افزایش موجودی با دعوت دوستان</span>
        </button>
      </div>
      <div id="Show_inventory" class="text-left p-3">
        <span class="overlay_price Turnover_inventory  font-weight-light ml-1"><small>موجودی شما:<span class="overlay_price_label position-relative"><i class="icon-toman" /></span><span>۲</span>.۰۰۰</small></span>
        <div class="text-left">
          <div class="input-group search-field my-4 insert_comment">
            <input class="form-control border-left-0 border shadow-none sell_code_input" type="text" placeholder="کد تخفیف خود را وارد کنید...">
            <fieldset>
              <div style="display:block" class="invalid-feedback p-2">
                کد تخفیف وارد شده منقضی شده است
              </div>
            </fieldset>
            <button class="btn rounded-pill btn-sm btn-secondary btn-send-comment sell-code_btn">
              بررسی کد
            </button>
          </div>
        </div>
      </div>
    </div>
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