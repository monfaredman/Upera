<template>
  <div class="col-12">
    <!-- Screening Info -->
    <span
      v-if="!cartLoading && screening.ekran"
      class="text-info h6 text-justify"
    >
      مصرف اینترنت جهت تماشای آنلاین {{ fullrateData.fa?.title }} می باشد<br /><br />
    </span>

    <!-- Presale Warning -->
    <span
      v-if="!cartLoading && screening.ekran && presale"
      class="text-danger h6 text-justify"
    >
      برای تماشا از خانه، سانس سینمای آنلاین
      {{ screening.ekran_hour }} ساعته است، طوری تنظیم کنید که تماشای کامل فیلم
      را در سانس خود از دست ندهید.<br /><br />
    </span>

    <!-- Password Info -->
    <span
      v-if="!cartLoading && !presale && pass"
      class="text-danger h6 text-justify"
    >
      رمز پیش خرید:
      <span class="text-primary">{{ pass }}</span> (مخصوص کسانی که قبلا خرید
      کرده اند)<br /><br />
    </span>

    <!-- Traffic Info -->
    <span
      v-if="!screening.ekran && !cartLoading"
      class="text-info h6 text-justify"
    >
      حجم مصرفی: {{ fullrateData.fa?.title }}<br /><br />
    </span>

    <!-- Free Access Info -->
    <span
      v-if="
        !ftb2 &&
        !cartLoading &&
        traffic &&
        !downloadsList.some((el) => el.owned === 1)
      "
      class="text-justify"
    >
      دسترسی بدون خرید، با اینترنت {{ operatorFullrate }}<br />
      <button
        class="btn btn-secondary text-right"
        @click="$emit('check-connection')"
      >
        بررسی اتصال اینترنت
        <i class="fas fa-sync-alt" /></button
      ><br />
      و یا خرید با اینترنت فعلی شما:<br /><br />
    </span>

    <!-- Notes -->
    <span v-if="!cartLoading && notes" class="text-info h6 text-justify">
      <br />{{ notes }}<br /><br />
    </span>
  </div>
</template>

<script>
export default {
  name: 'DownloadInfoSection',
  props: {
    contentInfo: {
      type: Object,
      default: () => ({}),
    },
    screening: {
      type: Object,
      default: () => ({}),
    },
    presale: {
      type: Boolean,
      default: false,
    },
    pass: {
      type: String,
      default: '',
    },
    fullrateData: {
      type: Object,
      default: () => ({}),
    },
    traffic: {
      type: Number,
      default: 0,
    },
    ftb2: {
      type: Number,
      default: 0,
    },
    downloadsList: {
      type: Array,
      default: () => [],
    },
    cart: {
      type: Array,
      default: () => [],
    },
    cartLoading: {
      type: Boolean,
      default: false,
    },
    notes: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      operatorFullrate: 'همراه اول یا ایرانسل',
    }
  },
  emits: ['check-connection'],
}
</script>
