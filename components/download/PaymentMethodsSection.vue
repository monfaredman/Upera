<template>
  <div>
    <header class="headline">
      <h5 class="title font-weight-bold pt-1">انتخاب روش پرداخت</h5>
    </header>

    <div v-if="paymentErrors" class="text-danger">{{ paymentErrors }}</div>

    <div class="row position-relative payment_methods">
      <div class="container">
        <!-- Payment Option 1: Bank Gateway -->
        <div id="payment-1" class="option">
          <input
            id="payment1"
            :checked="selectedMethod === 'saman3'"
            type="radio"
            name="card"
            value="saman3"
            @change="$emit('update:selectedMethod', 'saman3')"
          />
          <label for="payment1" aria-label="درگاه بانکی">
            <span />
            درگاه بانکی
            <div class="card card--white card--sm">
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
          </label>
        </div>

        <!-- Payment Option 2: Direct Debit -->
        <div id="payment-2" class="option">
          <input
            id="payment2"
            :checked="selectedMethod === 'directdebit'"
            type="radio"
            name="card"
            value="directdebit"
            @change="$emit('update:selectedMethod', 'directdebit')"
          />
          <label for="payment2" aria-label="پرداخت خودکار">
            <span />
            پرداخت خودکار
            <div class="card card--blue card--sm">
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
          </label>
        </div>

        <!-- Payment Option 3: Credit -->
        <div id="payment-5" class="option">
          <input
            id="payment5"
            :checked="selectedMethod === 'credit'"
            type="radio"
            name="card"
            value="credit"
            @change="$emit('update:selectedMethod', 'credit')"
          />
          <label for="payment5" aria-label="اعتبار آپرا">
            <span />
            موجودی آپرا
            <div class="card card--white card--sm">
              <div class="card__chip" />
              <img src="@/assets/img/logo.svg" />
            </div>
          </label>
        </div>

        <!-- Payment Option 4: Tally -->
        <div id="payment-4" class="option">
          <input
            id="payment4"
            :checked="selectedMethod === 'tally'"
            type="radio"
            name="card"
            value="tally"
            @change="$emit('update:selectedMethod', 'tally')"
          />
          <label for="payment4" aria-label="اعتبار تالی">
            <span />
            اعتبار تالی
            <div class="card card--white card--sm">
              <img src="@/assets/img/tally.png" />
            </div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentMethodsSection',
  props: {
    selectedMethod: {
      type: String,
      default: 'saman3',
    },
    // Fixed: Renamed prop to avoid conflict
    paymentErrors: {
      type: [String, Object],
      default: null,
    },
  },
  // REMOVED: All computed properties
  emits: ['update:selectedMethod'],
}
</script>
