<template>
  <div class="col-12">
    <header class="headline">
      <h5 class="title font-weight-bold pt-1">انتخاب روش پرداخت</h5>
    </header>

    <div v-if="errors" class="text-danger">
      {{ errors }}
    </div>

    <div class="row position-relative payment_methods">
      <div class="container">
        <PaymentOption
          v-for="option in paymentOptions"
          :key="option.value"
          :option="option"
          :selected-method="selectedMethod"
          @change="onPaymentMethodChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PaymentOption from '@/components/download/PaymentOption.vue'

export default {
  name: 'PaymentMethods',
  components: {
    PaymentOption,
  },
  props: {
    selectedMethod: {
      type: String,
      default: 'saman3',
    },
    errors: {
      type: [String, Object],
      default: null,
    },
  },
  data() {
    return {
      paymentOptions: [
        {
          value: 'saman3',
          label: 'درگاه بانکی',
          tooltip: 'پرداخت با کلیه کارت های بانکی',
          cardClass: 'card--white',
        },
        {
          value: 'directdebit',
          label: 'پرداخت خودکار',
          tooltip: 'خرید خودکار در آپرا بدون وارد کردن اطلاعات بانکی',
          cardClass: 'card--blue',
        },
        {
          value: 'credit',
          label: 'موجودی آپرا',
          tooltip: 'خرید با اعتبار آپرا',
          cardClass: 'card--white',
          logo: true,
        },
        {
          value: 'tally',
          label: 'اعتبار تالی',
          tooltip: 'پرداخت با اعتبار تالی',
          cardClass: 'card--white',
          customLogo: 'tally',
        },
      ],
    }
  },

  methods: {
    onPaymentMethodChange(method) {
      this.$emit('update:selectedMethod', method)
    },
  },
}
</script>
