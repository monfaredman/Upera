<template>
  <div class="download-links-footer" :class="footerClass">
    <!-- Play Button -->
    <div v-if="showPlay" class="download-links-item">
      <div class="row">
        <div class="col-sm-6">
          <div class="font-weight-bold d-none d-sm-block">
            کیفیت متناسب با سرعت اینترنت
          </div>
        </div>
        <div class="col-sm-6">
          <a
            v-if="contentInfo.type == 'movie'"
            href=""
            class="btn btn-main btn-block"
            @click.prevent="$emit('play')"
          >
            نمایش فیلم
            <i class="icon-play" />
          </a>
          <a
            v-else-if="contentInfo.type == 'series' && seasonFirstEpisode"
            class="btn btn-main btn-block"
            href=""
            @click.prevent="$emit('play', seasonFirstEpisode)"
          >
            نمایش قسمت اول سریال
            <i class="icon-play" />
          </a>
          <a
            v-else
            href=""
            class="btn btn-main btn-block"
            @click.prevent="$emit('play')"
          >
            نمایش این قسمت
            <i class="icon-play" />
          </a>
        </div>
      </div>
    </div>

    <!-- Subscription Button -->
    <div v-if="showSub" class="download-links-item">
      <div class="row">
        <div class="col-sm-6">
          <div class="font-weight-bold d-none d-sm-block">
            دسترسی همزمان به ۳۰۰۰۰ عنوان فیلم و اپیزود
          </div>
        </div>
        <div class="col-sm-6">
          <a
            href=""
            class="btn btn-main btn-block"
            @click.prevent="$emit('subscribe')"
          >
            خرید اشتراک<span v-if="fullrateData.rate == 1">
              (حجم مصرفی: نیم بها)</span
            >
            <i class="fa fa-money-bill pr-2" />
          </a>
        </div>
      </div>
    </div>

    <!-- Free Download Button -->
    <div v-if="showFree" class="download-links-item">
      <div class="row">
        <div class="col-sm-6">
          <div class="font-weight-bold d-none d-sm-block">همه کیفیت ها</div>
        </div>
        <div class="col-sm-6">
          <button
            class="btn btn-secondary btn-block"
            @click="$emit('free-download')"
          >
            دانلود رایگان
            <i class="icon-download" />
          </button>
        </div>
      </div>
    </div>

    <!-- Buy Download Button -->
    <div v-if="showBuy" class="download-links-item">
      <div class="row">
        <div class="col-sm-6">
          <div class="font-weight-bold d-none d-sm-block">خرید و دانلود</div>
        </div>
        <div class="col-sm-6">
          <button
            class="btn btn-danger btn-block"
            @click="$emit('buy-download')"
          >
            خرید و دانلود با حجم {{ fullrateData.fa?.alternative || '' }}
            <i class="fa fa-money-bill pr-2" />
          </button>
        </div>
      </div>
    </div>

    <!-- USSD Button -->
    <div v-if="ussd" class="download-links-item">
      <div class="row">
        <div class="col-sm-6">
          <div class="font-weight-bold d-none d-sm-block">خرید با USSD</div>
        </div>
        <div class="col-sm-6">
          <a
            :href="'tel:' + ussd"
            class="btn btn-danger btn-block"
            @click.prevent="$emit('ussd-call')"
          >
            خرید تکی از طریق هف هشتاد
            <i class="fa fa-money-bill pr-2" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActionButtonsSection',
  props: {
    showPlay: {
      type: Boolean,
      default: false,
    },
    showSub: {
      type: Boolean,
      default: false,
    },
    showFree: {
      type: Boolean,
      default: false,
    },
    showBuy: {
      type: Boolean,
      default: false,
    },
    ussd: {
      type: String,
      default: '',
    },
    contentInfo: {
      type: Object,
      default: () => ({}),
    },
    fullrateData: {
      type: Object,
      default: () => ({}),
    },
    seasons: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    footerClass() {
      let count = 0
      if (this.showPlay) count++
      if (this.showSub) count++
      if (this.showFree) count++
      if (this.showBuy) count++
      if (this.ussd) count++

      return {
        'footer-0': count === 0,
        'footer-1': count === 1,
      }
    },

    seasonFirstEpisode() {
      if (this.seasons && Object.keys(this.seasons).length > 0) {
        const firstSeason = this.seasons[Object.keys(this.seasons)[0]]
        return firstSeason && firstSeason[0] ? firstSeason[0].id : null
      }
      return null
    },
  },
  emits: ['play', 'subscribe', 'free-download', 'buy-download', 'ussd-call'],
}
</script>
