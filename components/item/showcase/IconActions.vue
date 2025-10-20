<template>
  <div class="icon-actions" :class="{ 'row h-full': isMobile }">
    <a
      :class="watchlistClasses"
      :style="customStyle"
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
      :style="customStyle"
      @click.prevent="$emit('share')"
      class="icon-btn-style"
    >
      <i class="icon-share-android fa-xs" />
    </a>
    <a
      :class="clapClasses"
      :style="customStyle"
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
    customStyle: {
      type: Object,
      default: () => ({}),
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
        : [' btn-dark btn-icon ml-1 ']
    },
    shareClasses() {
      return this.isMobile
        ? 'col-4 d-flex align-items-center justify-content-center text-darker'
        : ' btn-dark btn-icon ml-1 '
    },
    watchlistClasses() {
      return this.isMobile
        ? 'col-4 d-flex align-items-center justify-content-center text-darker'
        : ' btn-dark btn-icon ml-1 '
    },
  },
}
</script>
<style scoped>
.icon-actions {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Desktop styles */
@media (min-width: 768px) {
  .icon-actions {
    width: auto;
    height: 44px;
    opacity: 1;
    border-radius: 8px;
    padding: 10px 10px;
  }
}

/* Mobile styles */
@media (max-width: 767px) {
  .icon-actions.row.h-full {
    width: 100%;
    height: auto;
    padding: 8px 0;
    margin: 0;
  }

  .icon-actions .icon-btn-style {
    flex: 1;
    min-width: 0;
    padding: 12px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon-actions {
    gap: 8px !important;
  }
}

::v-deep .icon-actions .i {
  margin: 0 !important;
  border-radius: 8px !important;
}

a.icon-btn-style.btn-dark.btn-icon.ml-1 {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 2rem;
}

@media (max-width: 767px) {
  a.icon-btn-style.btn-dark.btn-icon.ml-1 {
    width: 44px;
    height: 30px;
    border-radius: 8px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 2rem;
  }
  a.icon-btn-style.btn-dark.btn-icon.ml-1 {
    width: 100%;
    margin-left: 0 !important;
  }
}

i {
  line-height: 2rem !important;
}

.likes {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.likes .badge {
  position: absolute;
  top: -8px;
  right: -8px;
  font-size: 10px;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 4px;
}
</style>
