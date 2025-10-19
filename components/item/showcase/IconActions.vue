<template>
  <div class="icon-actions" :class="{ 'row h-full': isMobile }">
    <a
      :class="watchlistClasses"
      @click.prevent="$emit('toggle-watchlist')"
      class="icon-btn-style"
    >
      <i
        :class="{
          'icon-bookmark-empty fa-xs': !isWatchlist,
          'icon-bookmark fa-xs': isWatchlist == 1,
        }"
      />
    </a>

    <a
      :class="shareClasses"
      @click.prevent="$emit('share')"
      class="icon-btn-style"
    >
      <i class="icon-share-android fa-xs" />
    </a>
    <a
      :class="clapClasses"
      @mousedown="$emit('clap-start')"
      @mouseleave="$emit('clap-stop')"
      @mouseup="$emit('clap-stop')"
      @touchstart="$emit('clap-start')"
      @touchend="$emit('clap-stop')"
      @touchcancel="$emit('clap-stop')"
      class="icon-btn-style"
    >
      <div class="likes">
        <span v-if="userClaps" class="badge badge-secondary">{{
          userClaps
        }}</span>
        <i class="fa fa-thumbs-up fa-xs" />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'IconActions',
  props: {
    variant: {
      type: String,
      default: 'desktop', // 'mobile' | 'desktop'
    },
    isWatchlist: {
      type: [Number, Boolean],
      default: 0,
    },
    userClaps: {
      type: [Number, String],
      default: 0,
    },
    clapActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isMobile() {
      return this.variant === 'mobile'
    },
    clapClasses() {
      return this.isMobile
        ? [
            { active: this.clapActive },
            'col-4 d-flex align-items-center justify-content-center text-darker',
          ]
        : [' btn-dark btn-icon ml-1 hide-mobile']
    },
    shareClasses() {
      return this.isMobile
        ? 'col-4 d-flex align-items-center justify-content-center text-darker'
        : ' btn-dark btn-icon ml-1 hide-mobile'
    },
    watchlistClasses() {
      return this.isMobile
        ? 'col-4 d-flex align-items-center justify-content-center text-darker'
        : ' btn-dark btn-icon ml-1 hide-mobile'
    },
  },
}
</script>
<style scoped>
.icon-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px !important;
  height: 44px !important;
  opacity: 1;
  border-radius: 8px !important;
  padding-top: 10px;
  padding-right: 85px !important;
  padding-bottom: 10px;
  padding-left: 20px;
  gap: 2px;
}

::v-deep .icon-actions .i {
  margin: 0 !important;
  border-radius: 8px !important;
}

a.icon-btn-style.btn-dark.btn-icon.ml-1.hide-mobile {
  width: 44px !important;
  border-radius: 8px !important;
  padding-top: 10px;
  padding-right: 24px;
  padding-bottom: 10px;
  padding-left: 24px;
  line-height: 2rem;
}

i {
  line-height: 2rem !important;
}
</style>
