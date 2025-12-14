<template>
  <div :id="`payment-${option.id}`" class="option">
    <input
      :id="`payment${option.id}`"
      :checked="selectedMethod === option.value"
      type="radio"
      name="card"
      :value="option.value"
      @change="$emit('change', option.value)"
    />
    <label :for="`payment${option.id}`" :aria-label="option.label">
      <span />
      {{ option.label }}

      <!-- Bank Gateway Card -->
      <div v-if="option.value === 'saman3'" class="card card--white card--sm">
        <div class="card__chip" />
        <div class="card__content">
          <div class="card__text">
            <div class="text__row">
              <div class="text__loader" />
              <div class="text__loader" />
            </div>
            <div class="text__row">
              <div class="text__loader" />
              <div class="text__loader" />
            </div>
          </div>
          <div class="card__symbol">
            <span />
            <span />
          </div>
        </div>
      </div>

      <!-- Direct Debit Card -->
      <div
        v-else-if="option.value === 'directdebit'"
        class="card card--blue card--sm"
      >
        <div class="card__chip" />
        <div class="card__content">
          <div class="card__text">
            <div class="text__row">
              <div class="text__loader" />
              <div class="text__loader" />
            </div>
            <div class="text__row">
              <div class="text__loader" />
              <div class="text__loader" />
            </div>
          </div>
          <div class="card__symbol">
            <span />
            <span />
          </div>
        </div>
      </div>

      <!-- Credit Card -->
      <div
        v-else-if="option.value === 'credit'"
        class="card card--white card--sm"
      >
        <div class="card__chip" />
        <img src="@/assets/img/logo.svg" />
      </div>

      <!-- Tally Card -->
      <div
        v-else-if="option.value === 'tally'"
        class="card card--white card--sm"
      >
        <img src="@/assets/img/tally.png" />
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'PaymentOption',
  props: {
    option: {
      type: Object,
      required: true,
      validator: (value) => {
        return value.id && value.value && value.label
      },
    },
    selectedMethod: {
      type: String,
      default: 'saman3',
    },
  },
  emits: ['change'],
}
</script>
