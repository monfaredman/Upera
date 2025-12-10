<template>
  <div class="statistics-item statistics-item-row text-muted">
    <i :class="iconClass" />
    <span class="statistics-item-caption">
      <span v-if="label" class="hide-mobile">{{ label }} </span>
      <span class="font-weight-bold">{{ displayValue }}</span>
      <span v-if="suffix" class="hide-mobile"> {{ suffix }}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'StatisticsItem',
  props: {
    icon: {
      type: String,
      required: true,
      validator: (value) =>
        [
          'icon-calendar',
          'icon-imdb',
          'icon-clap',
          'icon-episodes',
          'icon-profile',
        ].includes(value),
    },
    value: {
      type: [String, Number],
      default: null,
    },
    label: {
      type: String,
      default: '',
    },
    suffix: {
      type: String,
      default: '',
    },
    formatValue: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    iconClass() {
      return this.icon
    },
    displayValue() {
      if (this.value === null || this.value === undefined) return '0'

      if (this.formatValue && typeof this.value === 'number') {
        return this.formatNumber(this.value)
      }

      return this.value.toString()
    },
  },
  methods: {
    formatNumber(num) {
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M'
      } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K'
      }
      return num.toString()
    },
  },
}
</script>

<style scoped>
.statistics-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.statistics-item-caption {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: wrap;
}

@media (max-width: 767.98px) {
  .hide-mobile {
    display: none;
  }
}

@media (min-width: 768px) {
  .show-mobile {
    display: none;
  }
}
</style>
