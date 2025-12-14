<template>
  <div class="content-language-info">
    <div
      v-if="!isIranianBool && hasPersianDubBool"
      class="text-invert mb-1 mb-md-3 persian-dub-badge"
    >
      دوبله فارسی
    </div>
    <div
      v-else-if="!isIranianBool && !hasPersianDubBool"
      class="text-invert mb-1 mb-md-3 persian-sub-badge"
    >
      زیرنویس فارسی
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentLanguageInfo',
  props: {
    isIranian: {
      type: [Boolean, Number, String],
      default: false,
    },
    hasPersianDub: {
      type: [Boolean, Number, String],
      default: false,
    },
  },
  computed: {
    isIranianBool() {
      return this.normalizeBool(this.isIranian)
    },
    hasPersianDubBool() {
      return this.normalizeBool(this.hasPersianDub)
    },
  },
  methods: {
    normalizeBool(v) {
      if (typeof v === 'string') v = v.trim()
      return v === true || v === 1 || v === '1'
    },
  },
}
</script>

<style scoped>
.persian-dub-badge,
.persian-sub-badge {
  /* display: inline-block;
  padding: 0.25rem 0.75rem;
  background: linear-gradient(45deg, #ff6b6b, #ee5a24);
  border-radius: 0.25rem; */
  font-size: 0.875rem;
  font-weight: 500;
}

/* .persian-sub-badge {
  background: linear-gradient(45deg, #4834d4, #686de0);
} */
</style>
