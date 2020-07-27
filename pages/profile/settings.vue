<template>
  <div class="container mt-5  pt-md-3 pt-lg-4 mb-5 faq-page">
    <div class="app_container_pricing mt-4 p-2 mt-md-4 mb-5">
      <header class="headline py-md-5">
        <h5 class="title font-weight-bold">
          تنظیمات سریع
        </h5>
      </header>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div class="setting_lable">
          فقط نمایش زبان فارسی‌ها
        </div>
        <div class="custom-switch custom-switch-label-yesno">
          <input id="checked-1" class="custom-switch-input" type="checkbox" checked>
          <label class="custom-switch-btn" for="checked-1" />
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div class="setting_lable">
          فعالسازی نسخه کودکان
        </div>
        <div class="custom-switch custom-switch-label-yesno">
          <input id="checked-2" class="custom-switch-input" type="checkbox">
          <label class="custom-switch-btn" for="checked-2" />
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div class="setting_lable">
          اطلاع رسانی ویدئوهای جدید
        </div>
        <div class="custom-switch custom-switch-label-yesno">
          <input id="checked-3" class="custom-switch-input" type="checkbox" checked>
          <label class="custom-switch-btn" for="checked-3" />
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div class="setting_lable">
          حالت شب - تا ۱۵٪ کاهش باتری
        </div>
        <div class="custom-switch custom-switch-label-yesno">
          <input id="checked-4" class="custom-switch-input" type="checkbox">
          <label class="custom-switch-btn" for="checked-4" />
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div class="setting_lable">
          شبکه های اجتماعی
        </div>
        <div class="d-flex socials setting_lable_socials">
          <a href="#" class="mr-2 mr-md-4">
            <i class="fab fa-2x fa-telegram-plane" />
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
          بیشتر
        </h5>
      </header>
      <div class="d-flex justify-content-between align-items-center mb-3 setting_lable">
        <a href="#" class="text-dark">شرایط استفاده از حجم مصرفی نیم بها</a>
      </div>

      <div class="d-flex justify-content-between align-items-center mb-3 setting_lable">
        <a href="#" class="text-dark">درخواست فیلم وسریال</a>
      </div>
      <div class="d-flex justify-content-between align-items-center mb-3 setting_lable">
        <a href="#" class="text-dark">سوالات پر تکرار</a>
      </div>
      <div class="d-flex justify-content-between align-items-center mb-3 setting_lable">
        <div>
          <span>دستگاههای متصل</span>
          <small class="text-black-50">به زودی</small>
        </div>
        <button class="btn btn-secondary rounded-pill setting_lable_connect_tv">
          <span>اتصال به تلویزیون</span>
          <img src="assets/img/icons/tv.svg" alt="">
        </button>
      </div>
      <div class="d-flex justify-content-between align-items-center mb-3 setting_lable">
        <a href="#" class="text-dark">درباره ما</a>
      </div>
      <div class="d-flex justify-content-between align-items-center mb-3 setting_lable">
        <div>
          نسخه اپلیکیشن
        </div>
        <button class="btn btn-secondary rounded-pill" disabled>
          <span>بروزرسانی</span>
        </button>
      </div>
      <div class="d-flex justify-content-between align-items-center mb-3 setting_lable">
        <a href="#" class="text-dark">قوانین و شرایط استفاده</a>
      </div>
      <div class="d-flex justify-content-between align-items-center mb-3 setting_lable">
        <a href="#" class="text-dark">خروج از حساب کاربری</a>
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