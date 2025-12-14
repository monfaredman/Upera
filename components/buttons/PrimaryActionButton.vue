<template>
  <button
    v-if="exist"
    :class="['btn', 'btn-main', { 'btn-block': block }]"
    @click="onClick"
  >
    <span class="smallsrm">
      <i class="fa fa-play pr-2" />
      <span>
        {{ label }}
        <span v-if="action === 'play' && episodeId">
          {{ ' ' + $t('show.episode') + ' ' + episodeNumber }}
        </span>
      </span>
    </span>
  </button>
</template>

<script>
export default {
  name: 'PrimaryActionButton',
  props: {
    exist: { type: Boolean, default: false },
    label: { type: String, required: true },
    action: { type: String, required: true }, // 'play' | 'buy' | 'subscription'
    episodeId: { type: [Number, String], default: null },
    episodeNumber: { type: [Number, String], default: null },
    block: { type: Boolean, default: false },
  },
  methods: {
    onClick() {
      if (this.action === 'play') this.$emit('play')
      else if (this.action === 'buy') this.$emit('buy')
      else if (this.action === 'subscription') this.$emit('subscription')
    },
  },
}
</script>
