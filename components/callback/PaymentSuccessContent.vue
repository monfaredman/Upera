<template>
  <div>
    <!-- Multiple Files -->
    <div v-if="files && files.length > 1">
      <div v-for="(item, index) in files" :key="index">
        <span v-if="item.presale || item.screening.ekran">
          <span
            v-show="item.presale && item.screening.ekran"
            class="text-danger h6 text-justify"
          >
            اکران سراسری فیلم از روز {{ item.presale_date }} آغاز خواهد شد، لطفا
            قبل از این تاریخ به هیچ عنوان برای جلوگیری از اشکال فنی احتمالی نسبت
            به تست اتصال و کیفیت پخش اقدام ننمایید و فقط با اکران سراسری فیلم را
            مشاهده نمایید.<br /><br />
            برای تماشا از خانه، سانس سینمای آنلاین
            {{ item.screening.ekran_hour }} ساعته است، طوری تنظیم کنید که تماشای
            کامل فیلم را در سانس خود از دست ندهید.<br /><br
          /></span>

          <span
            v-show="!item.presale && item.screening.ekran"
            class="text-danger h6 text-justify"
          >
            برای تماشا از خانه، سانس سینمای آنلاین
            {{ item.screening.ekran_hour }} ساعته است، دقیقا از از زمانی که فیلم
            را شروع به تماشا کنید، سانس شما آغاز و تا
            {{ item.screening.ekran_hour }} ساعت بعد به پایان می‌رسد، طوری تنظیم
            کنید که تماشای کامل فیلم را در سانس خود از دست ندهید.<br /><br
          /></span>
        </span>
      </div>

      <file-download-item
        v-for="(item, index) in files"
        :key="'file-' + index"
        :item="item"
        @watch="$emit('watch', $event)"
        @copy="$emit('copy', $event)"
      />
    </div>

    <!-- Single File -->
    <div v-else-if="files && files.length === 1" class="text-center">
      از خرید قانونی شما<br /><span style="color: #4b4bf9">ممنونیم</span>
      <div class="offset-2 col-8">
        <img class="img-fluid" src="@/assets/img/success.png" />
      </div>
      پرداخت شما موفقیت آمیز بود

      <span v-for="(item, index) in files" :key="index">
        <span v-if="!item.screening.ekran">
          <br /><br />

          در گوشی های اندروید از برنامه adm جهت دانلود فیلم استفاده کنید (
          <a
            href="https://play.google.com/store/apps/details?id=com.dv.adm&amp;hl=fa"
            target="_blank"
            >نصب</a
          >)<br />
          در گوشی ios از برنامه Documents جهت دانلود فیلم استفاده کنید (<a
            href="https://itunes.apple.com/us/app/documents-by-readdle/id364901807?mt=8"
            target="_blank"
            >آیتیونز</a
          >)<br />
          در کامپیوتر از برنامه Flash Get یا idm جهت دانلود فیلم استفاده نمایید
          <br /><br />
          توجه داشته باشید که برای جلوگیری از دانلود ناقص یا آسیب دیدن به فایل
          های خریداری شده، حتما باید از نرم افزارهای دانلود منیجر استفاده شود.
          بدین صورت حتی اگر دانلود شما در هر زمانی و به هر دلیلی نیمه کاره متوقف
          شد، میتوانید در زمان دلخواه خود به راحتی به ادامه دانلود بپردازید.
        </span>
      </span>
    </div>

    <!-- Subscription Success (logged in) -->
    <div
      v-else-if="purchaseType === 'subscription' && isLoggedIn && checkuser"
      class="text-center"
    >
      از خرید اشتراک شما<br /><span style="color: #4b4bf9">ممنونیم</span>
      <div class="offset-2 col-8">
        <img class="img-fluid" src="@/assets/img/success.png" />
      </div>
      پرداخت شما موفقیت آمیز بود

      <br /><br />

      {{ checkuser.days_period_to_end }} روز از اشتراک شما باقیمانده است
    </div>

    <!-- Subscription Success (not logged in) -->
    <div v-else-if="purchaseType === 'subscription'" class="text-center">
      از خرید اشتراک شما<br /><span style="color: #4b4bf9">ممنونیم</span>
      <div class="offset-2 col-8">
        <img class="img-fluid" src="@/assets/img/success.png" />
      </div>
      پرداخت شما موفقیت آمیز بود

      <br /><br />
    </div>

    <!-- Wallet Success -->
    <div v-else-if="purchaseType === 'wallet'" class="text-center">
      از افزایش موجودیتان<br /><span style="color: #4b4bf9">ممنونیم</span>
      <div class="offset-2 col-8">
        <img class="img-fluid" src="@/assets/img/success.png" />
      </div>
      پرداخت شما موفقیت آمیز بود

      <br /><br />
    </div>

    <!-- Direct Debit Success -->
    <div v-else-if="purchaseType === 'directdebit'" class="text-center">
      از شما جهت فعال کردن پرداخت خودکار<br /><span style="color: #4b4bf9"
        >ممنونیم</span
      >
      <div class="offset-2 col-8">
        <img class="img-fluid" src="@/assets/img/success.png" />
      </div>

      <button
        class="btn btn-copy btn-light btn-block"
        @click="$emit('show-direct-debit')"
      >
        تنظیمات پرداخت خودکار
      </button>
      <br /><br />
    </div>
  </div>
</template>

<script>
import FileDownloadItem from './FileDownloadItem.vue'

export default {
  name: 'PaymentSuccessContent',
  components: {
    FileDownloadItem,
  },
  props: {
    files: {
      type: Array,
      default: null,
    },
    purchaseType: {
      type: String,
      default: 'download',
      validator: (value) => {
        return ['download', 'subscription', 'wallet', 'directdebit'].includes(
          value
        )
      },
    },
    isLoggedIn: {
      type: Boolean,
      default: false,
    },
    checkuser: {
      type: Object,
      default: null,
    },
  },
}
</script>
