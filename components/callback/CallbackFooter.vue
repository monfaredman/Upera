<template>
  <div class="download-links-footer" :class="footerClass">
    <!-- Multiple Files Footer -->
    <div v-if="files && files.length > 1" class="download-links-item">
      <div class="row">
        <div class="col-12">
          <nuxt-link to="/" class="btn btn-danger btn-block">
            بازگشت به صفحه اصلی
            <i class="fa fa-back pr-2" />
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- Single File Footer -->
    <div v-else-if="files && files.length === 1" class="download-links-item">
      <div v-for="(item, index) in files" :key="index" class="row">
        <div class="col-6">
          <a
            v-if="!item.screening.ekran"
            :href="item.link1"
            class="btn btn-main btn-block"
          >
            {{ $t('show.download') }}
            <i class="icon-download" />
          </a>
          <a v-else :href="item.link1" class="btn btn-main btn-block">
            مشاهده
            <i class="icon-play" />
          </a>
        </div>
        <div class="col-6">
          <button
            class="btn btn-copy btn-light btn-block"
            @click="$emit('copy', item.link1)"
          >
            کپی لینک
          </button>
        </div>
      </div>
    </div>

    <!-- Error State Footer -->
    <div v-else-if="!success" class="download-links-item">
      <!-- Check Again State -->
      <div v-if="checkagain" class="row">
        <div class="col-12">
          <a
            href=""
            class="btn btn-main btn-block"
            @click.prevent="$emit('retry-payment')"
          >
            پرداخت مجدد
            <i class="fa fa-money-bill pr-2" />
          </a>
        </div>
      </div>

      <!-- Show Login State -->
      <div v-else-if="showLogin" class="row">
        <div class="col-12">
          <a
            href=""
            class="btn btn-main btn-block"
            @click.prevent="$emit('login')"
          >
            ورود به سایت
            <i class="fa fa-sign-in-alt pr-2" />
          </a>
        </div>
      </div>

      <!-- Default Error State -->
      <div v-else class="row">
        <div class="col-6">
          <a
            href=""
            class="btn btn-main btn-block"
            @click.prevent="$emit('check-payment')"
          >
            بررسی پرداخت
            <i class="fa fa-check-double pr-2" />
          </a>
        </div>
        <div class="col-6">
          <a
            href=""
            class="btn btn-light btn-block"
            @click.prevent="$emit('retry-payment')"
          >
            پرداخت مجدد
            <i class="fa fa-money-bill pr-2" />
          </a>
        </div>
      </div>
    </div>

    <!-- Back to App Button -->
    <div v-if="backtoapp" class="download-links-item">
      <div class="row">
        <div class="col-12">
          <a
            href="uperaapp://upera?type=download&success=false"
            class="btn btn-main btn-block"
          >
            نمایش فیلم
            <i class="fa fa-back pr-2" />
          </a>
        </div>
      </div>
    </div>

    <!-- Return to Content Button -->
    <div v-if="title" class="download-links-item">
      <div class="row">
        <div class="col-12">
          <a
            v-if="title.type === 'movie'"
            href=""
            class="btn btn-second btn-block"
            @click.prevent="$emit('return-to-content', title)"
          >
            بازگشت به صفحه فیلم
            <i class="fa fa-arrow-alt-circle-left" />
          </a>
          <a
            v-else-if="title.type === 'series'"
            class="btn btn-second btn-block"
            href=""
            @click.prevent="$emit('return-to-content', title)"
          >
            بازگشت به صفحه سریال
            <i class="fa fa-arrow-alt-circle-left" />
          </a>
          <a
            v-else
            href=""
            class="btn btn-second btn-block"
            @click.prevent="$emit('return-to-content', title)"
          >
            بازگشت به صفحه این قسمت سریال
            <i class="fa fa-arrow-alt-circle-left" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CallbackFooter',
  props: {
    files: {
      type: Array,
      default: null,
    },
    success: {
      type: Boolean,
      default: false,
    },
    checkagain: {
      type: Boolean,
      default: false,
    },
    showLogin: {
      type: Boolean,
      default: false,
    },
    backtoapp: {
      type: Boolean,
      default: false,
    },
    title: {
      type: Object,
      default: null,
    },
    divcount: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    footerClass() {
      return {
        'footer-0': this.divcount === 0,
        'footer-1': this.divcount === 1,
      }
    },
  },
}
</script>

<style scoped>
/* Primary Action Buttons - Orange Background */
.btn-main,
.btn-danger {
  width: 160px;
  height: 36px;
  border-radius: 8px;
  padding: 8px 20px;
  background: #ff6633 !important;
  border: none;
  color: white;
  font-weight: 500;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-main:hover,
.btn-danger:hover {
  background: #ff5522 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(255, 102, 51, 0.3);
}

/* Secondary Action Buttons - Light Orange Background */
.btn-light,
.btn-second {
  width: 160px;
  height: 36px;
  border-radius: 8px;
  padding: 8px 20px;
  background: #ffece5 !important;
  border: none;
  color: #ff6633;
  font-weight: 500;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-light:hover,
.btn-second:hover {
  background: #ffe0d5 !important;
  color: #ff5522;
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(255, 102, 51, 0.2);
}

/* Block buttons - full width on mobile */
.btn-block {
  width: 100%;
  margin: 0 auto;
}

/* Copy button specific style */
.btn-copy {
  background: #ffece5 !important;
  color: #ff6633;
}

.btn-copy:hover {
  background: #ffe0d5 !important;
}

.download-links-item {
  margin-bottom: 12px;
}

.download-links-item:last-child {
  margin-bottom: 0;
}

/* Icon spacing */
.btn i,
.btn .fa,
.btn .icon-download,
.btn .icon-play {
  margin-right: 0;
  margin-left: 4px;
}

/* Responsive adjustments */
@media (max-width: 576px) {
  .btn-block {
    max-width: 100%;
  }

  .download-links-item .col-6 .btn {
    font-size: 13px;
    padding: 8px 12px;
  }
}

/* Footer state classes */
.footer-0 {
  padding-top: 24px;
}

.footer-1 {
  padding-top: 16px;
}
</style>
