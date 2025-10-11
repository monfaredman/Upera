<template>
  <div class="payment-options-section">
    <!-- Payment Options Header -->
    <header class="headline mt-4">
      <h5 class="title font-weight-bold pt-1">
        انتخاب روش های استفاده از پرداخت خودکار
      </h5>
    </header>

    <!-- Pay Anything Option -->
    <b-card class="mt-2 mb-3 px-2 option-card">
      <b-form-group
        label-for="check-pay_anything"
        description="هر زمانی که شما، روش 'پرداخت خودکار' را جهت خرید انتخاب کنید، دیگر نیازی به وارد کردن اطلاعات کارت خود دارید و پرداخت خودکار از طریق کارت شما انجام می شود"
      >
        <b-form-checkbox
          id="check-pay_anything"
          v-model="localFormData.pay_anything"
          class="mx-3"
          name="check-pay_anything"
          switch
          @change="handleChange"
        >
          پرداخت خودکار به انتخاب شما
        </b-form-checkbox>
      </b-form-group>
    </b-card>

    <!-- Subscription Option -->
    <b-card class="px-2 option-card">
      <b-form-group
        label-for="check-subscription"
        :description="subscriptionDescription"
      >
        <b-form-checkbox
          id="check-subscription"
          v-model="localFormData.subscription"
          class="mx-3"
          name="check-subscription"
          switch
          @change="handleChange"
        >
          پرداخت خودکار اشتراک
          <span v-if="envName !== 'plus'">
            آپرا پلاس -
            <a target="_blank" href="https://plus.upera.tv"
              >مشاهده فیلم و سریال های آپرا پلاس</a
            >
          </span>
        </b-form-checkbox>
        <div v-if="localFormData.days_period_to_end" class="text-danger mt-2">
          مدت زمان باقیمانده تا پایان اشتراک:
          <strong>{{ localFormData.days_period_to_end }}</strong> روز
        </div>
        <div class="text-info mt-1">
          <strong
            >قیمت اشتراک ماهانه: {{ localFormData.subscribe_fee }} تومان</strong
          >
        </div>
      </b-form-group>
    </b-card>

    <!-- Series Options -->
    <b-card
      v-for="(item, index) in localFormData.series"
      :key="index"
      class="mt-2 mb-3 px-2 series-card"
      :img-src="getSeriesImage(item.poster)"
      img-right
      img-width="70"
      img-height="105"
    >
      <b-form-group
        :label-for="'check-series-' + index"
        description="قسمت های جدید سریال،در روز پخش، به صورت خودکار برای شما خرید و ارسال می شود"
      >
        <b-form-checkbox
          :id="'check-series-' + index"
          v-model="localFormData.series[index].directdebit"
          class="mx-3"
          :name="'check-series-' + index"
          switch
          @change="handleChange"
        >
          پرداخت خودکار قسمت های جدید
          <strong class="text-info">{{ item.name_fa }}</strong>
        </b-form-checkbox>
        <div class="text-info mt-1">
          <strong>قیمت تمامی کیفیت ها: {{ item.subscribe_fee }} تومان</strong>
        </div>
      </b-form-group>
    </b-card>

    <!-- Information Notice -->
    <div class="information-notice mt-4">
      <strong>توجه:</strong><br />
      1- شما در هر زمانی می توانید گزینه های بالا را فعال یا غیرفعال کنید<br />
      2- در حالتی که فیلم یا سریال انتخابی شما با روش های پرداخت دیگری خرید شده
      باشد، خرید مجددی با پرداخت خودکار توسط ما انجام نخواهد شد<br />
      3- بانک ملی به زودی اضافه می شود
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentOptionsSection',
  props: {
    formData: {
      type: Object,
      default: () => ({
        subscription: false,
        subscribe_fee: 0,
        days_period_to_end: 0,
        pay_anything: true,
        series: [],
      }),
    },
    subscriptionDescription: {
      type: String,
      default: '',
    },
    envName: {
      type: String,
      default: '',
    },
  },
  emits: ['change', 'update:formData'],
  data() {
    return {
      localFormData: { ...this.formData },
    }
  },
  watch: {
    formData: {
      handler(newVal) {
        this.localFormData = { ...newVal }
      },
      deep: true,
    },
  },
  methods: {
    getSeriesImage(poster) {
      if (!poster) return ''
      return `https://thumb.upera.shop/thumb?w=70&h=105&q=100&a=c&src=https://cdn.upera.shop/s3/posters/${poster}`
    },
    handleChange() {
      this.$emit('update:formData', { ...this.localFormData })
      this.$emit('change')
    },
  },
}
</script>

<style scoped>
.option-card {
  border-right: 4px solid #007bff;
}

.series-card {
  border-right: 4px solid #17a2b8;
}

.information-notice {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #666;
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 0.375rem;
  border-right: 4px solid #ffc107;
}
</style>
