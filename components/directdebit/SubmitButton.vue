<template>
  <div class="submit-button-section">
    <b-button
      :variant="variant"
      :block="block"
      :disabled="isLoading"
      @click="$emit('click')"
      class="submit-btn"
    >
      <template v-if="isLoading">
        <b-spinner small class="mr-2" />
        {{ loadingText }}
      </template>
      <template v-else>
        {{ text }}
        <i v-if="icon" :class="icon" />
      </template>
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'SubmitButton',
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value) =>
        [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
        ].includes(value),
    },
    text: {
      type: String,
      default: 'ارسال',
    },
    loadingText: {
      type: String,
      default: 'در حال پردازش...',
    },
    icon: {
      type: String,
      default: '',
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
}
</script>

<style scoped>
.submit-btn {
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  transition: all 0.3s ease;
}

.submit-btn:not(:disabled):hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
</style>
