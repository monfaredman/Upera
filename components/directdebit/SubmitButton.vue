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
.submit-button-section {
  display: inline-block;
}

.submit-btn {
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  transition: all 0.3s ease;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.submit-btn:not(:disabled):hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.submit-btn:disabled {
  cursor: not-allowed;
  opacity: 0.65;
}
</style>
