<template>
  <div class="icon-actions" :class="{ 'row h-full': isMobile }">
    <a
      :class="clapClasses"
      @mousedown="$emit('clap-start')"
      @mouseleave="$emit('clap-stop')"
      @mouseup="$emit('clap-stop')"
      @touchstart="$emit('clap-start')"
      @touchend="$emit('clap-stop')"
      @touchcancel="$emit('clap-stop')"
    >
      <div class="likes">
        <span v-if="userClaps" class="badge badge-secondary">{{
          userClaps
        }}</span>
        <i class="icon-clap" />
      </div>
    </a>

    <a :class="shareClasses" @click.prevent="$emit('share')">
      <i class="icon-share-android" />
    </a>

    <a :class="watchlistClasses" @click.prevent="$emit('toggle-watchlist')">
      <i
        :class="{
          'icon-bookmark-empty': !isWatchlist,
          'icon-bookmark': isWatchlist == 1,
        }"
      />
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
        : ['btn btn-dark btn-icon ml-1 hide-mobile']
    },
    shareClasses() {
      return this.isMobile
        ? 'col-4 d-flex align-items-center justify-content-center text-darker'
        : 'btn btn-dark btn-icon ml-1 hide-mobile'
    },
    watchlistClasses() {
      return this.isMobile
        ? 'col-4 d-flex align-items-center justify-content-center text-darker'
        : 'btn btn-dark btn-icon ml-1 hide-mobile'
    },
  },
}
</script>
