<template>
  <div class="payment-options-section">
    <!-- Series Grid -->
    <div
      v-if="localFormData.series && localFormData.series.length > 0"
      class="series-section"
    >
      <h5 class="font-weight-bold mb-3">انتخاب سریال‌ها</h5>

      <div class="series-grid">
        <div
          v-for="(item, index) in localFormData.series"
          :key="index"
          class="series-card"
          :class="{ active: item.directdebit }"
        >
          <div class="series-poster">
            <img :src="getSeriesImage(item.backdrop)" :alt="item.name_fa" />
          </div>
          <div class="series-info">
            <h6 class="series-title">{{ item.name_fa }}</h6>
            <div class="series-details">
              <div class="series-price">
                <p>
                  <span>هزینه هر قسمت</span>: {{ item.subscribe_fee }} تومان
                </p>
                <p>خریدخودکار قسمت‌‌های جدید</p>
              </div>
              <b-form-checkbox
                v-model="localFormData.series[index].directdebit"
                switch
                class="series-switch"
                @change="handleChange"
              >
              </b-form-checkbox>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Information Notice -->
    <div class="information-notice">
      قسمت‌های جدید سریال‌هایی که در این بخش انتخاب میکنید به‌صورت خودکار در روز
      پخش برای شما خریداری می‌شوند
    </div>
    <!-- Auto Renewal Section -->
    <b-card class="auto-renewal-card">
      <b-form-checkbox
        v-model="localAutoRenewal"
        switch
        @change="handleAutoRenewalChange"
      >
        <strong class="mr-2"> تمدید خودکار اشتراک آپرا پلاس </strong>
      </b-form-checkbox>

      <div v-if="localAutoRenewal" class="subscription-options">
        <b-form-group label="اشتراک خودرا انتخاب کنید">
          <div class="subscription-plans">
            <div
              class="subscription-plan"
              :class="{ active: selectedPlan === 'monthly' }"
              @click="selectPlan('monthly')"
            >
              <div class="plan-title">اشتراک ماهانه</div>
              <div class="plan-price">
                {{ localFormData.subscribe_fee }} تومان
              </div>
            </div>
            <!-- <div
              class="subscription-plan"
              :class="{ active: selectedPlan === 'quarterly' }"
              @click="selectPlan('quarterly')"
            >
              <div class="plan-title">۳ ماهه</div>
              <div class="plan-price">۹۰,۰۰۰ تومان</div>
            </div>
            <div
              class="subscription-plan"
              :class="{ active: selectedPlan === 'semiannual' }"
              @click="selectPlan('semiannual')"
            >
              <div class="plan-title">۶ ماهه</div>
              <div class="plan-price">۱۲۰,۰۰۰ تومان</div>
            </div> -->
          </div>
          <!-- <small class="text-muted d-block mt-3">{{
            subscriptionDescription
          }}</small> -->

          <div v-if="localFormData.days_period_to_end" class="text-danger mt-2">
            مدت زمان باقیمانده تا پایان اشتراک:
            <strong>{{ localFormData.days_period_to_end }}</strong> روز
          </div>
        </b-form-group>

        <!-- <b-form-checkbox
          v-model="localFormData.pay_anything"
          class="mt-2"
          @change="handleChange"
        >
          پرداخت خودکار برای تمام خریدها
        </b-form-checkbox>
        <small class="text-muted d-block mt-1">
          هر زمانی که شما، روش 'پرداخت خودکار' را جهت خرید انتخاب کنید، دیگر
          نیازی به وارد کردن اطلاعات کارت خود ندارید
        </small> -->
      </div>
    </b-card>
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
    autoRenewal: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['change', 'update:formData', 'update:autoRenewal'],
  data() {
    return {
      localFormData: JSON.parse(JSON.stringify(this.formData)),
      selectedPlan: 'monthly',
      localAutoRenewal: this.autoRenewal,
    }
  },
  watch: {
    formData: {
      handler(newVal) {
        this.localFormData = JSON.parse(JSON.stringify(newVal))
      },
      deep: true,
    },
    autoRenewal(newVal) {
      this.localAutoRenewal = newVal
    },
  },
  methods: {
    getSeriesImage(poster) {
      if (!poster) return ''
      return `https://thumb.upera.shop/thumb?w=225&h=146&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/${poster}`
    },
    handleChange() {
      this.$emit('update:formData', { ...this.localFormData })
      this.$emit('change')
    },
    handleAutoRenewalChange() {
      this.$emit('update:autoRenewal', this.localAutoRenewal)
      this.handleChange()
    },
    selectPlan(plan) {
      this.selectedPlan = plan
      this.localFormData.subscription = true
      this.handleChange()
    },
  },
}
</script>

<style scoped>
/* Main Section */
.payment-options-section {
  max-height: 70vh !important;
}

/* Series Grid */
.series-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 0 0.5rem;
  max-height: 70vh !important;
}

.series-card {
  border: 2px solid #e9ecef;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
  background: white;
}

.series-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.series-card.active {
  border-color: #28a745;
  background: #f0fff4;
}

.series-poster {
  width: 100%;
  overflow: hidden;
  background: #f8f9fa;
}

.series-poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.series-info {
  padding: 0.5rem;
}

.series-title {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}

.series-price {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.75rem;
}
.series-price p {
  margin-bottom: 0 !important;
  font-size: 0.75rem;
}

.series-switch {
  font-size: 0.775rem;
  width: 6px;
  height: 25px;
  margin: 0;
}

.series-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.6rem !important;
}

/* Subscription Plans */
.subscription-plans {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.subscription-plan {
  flex: 0.33;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: white;
}

.subscription-plan:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.subscription-plan.active {
  border: 2px solid #17a2b8;
  border-radius: 0.5rem;
  background: #e7f7f9;
}

.plan-title {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: black;
}

.plan-price {
  font-size: 0.9rem;
  color: black;
  font-weight: 500;
}

/* Information Notice */
.information-notice {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #737373;
  padding: 1rem 0 1rem 1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .series-grid {
    grid-template-columns: 1fr;
  }
}

.series-section {
  max-height: 50vh;
  overflow-y: auto;
}

.card {
  border: none !important;
}

.custom-control.custom-switch {
  margin-right: 1rem !important;
}

/* Custom Scrollbar Styles */
.series-section::-webkit-scrollbar {
  width: 4px;
}

/* Try both selectors */
.series-section::-webkit-scrollbar-track,
.series-grid::-webkit-scrollbar-track {
  border-radius: 10px;
}

/* Webkit Scrollbar */

.series-section::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px !important;
}

.series-section::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Firefox Scrollbar */
.series-section {
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
}
</style>
