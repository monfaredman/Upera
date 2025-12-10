<template>
  <div class="bank-management-section">
    <!-- Registered Card Display (Edit Mode) -->
    <div
      v-if="isEditMode && subscriptions.length > 0"
      class="registered-card-box mb-4"
    >
      <div class="card-info">
        <h6 class="font-weight-bold mb-2">کارت ثبت شده:</h6>
        <div class="d-flex justify-content-between align-items-center">
          <span class="bank-name">{{ subscriptions[0].bank }}</span>
          <b-button
            variant="outline-light"
            size="sm"
            @click="$emit('change-card')"
          >
            تغییر شماره کارت
          </b-button>
        </div>
      </div>
    </div>
    <!-- Bank Grid Selection (Step 1) -->
    <div v-if="!isEditMode" class="bank-selection-container mt-4">
      <h5 class="font-weight-bold mb-3">بانک کارت خودتان را انتخاب کنید</h5>

      <!-- Bank Grid -->
      <div class="bank-grid mb-3">
        <div
          v-for="bank in banks"
          :key="bank.value"
          class="bank-card"
          :class="{ selected: localFormData.bank === bank.value }"
          @click="selectBank(bank.value)"
        >
          <div class="bank-logo">
            <img
              :src="require(`@/assets/images/banks/${bank.value}.png`)"
              :alt="bank.text"
            />
          </div>
          <div class="bank-name">{{ bank.text }}</div>
        </div>
      </div>

      <!-- Mobile Number Input -->
      <b-form-group
        label="شماره موبایل متصل به بانک:"
        label-for="mobile-input"
        class="mb-3"
        label-class="text-black"
      >
        <b-form-input
          id="mobile-input"
          v-model="localFormData.mobile"
          type="text"
          placeholder="09xxxxxxxxx"
          required
          class="form-control"
        />
      </b-form-group>

      <!-- Terms Acceptance -->
      <div class="mb-3 mt-4 d-flex justify-content-start align-items-center">
        <b-form-checkbox
          v-model="acceptedTerms"
          class="ml-2"
          style="direction: ltr"
        ></b-form-checkbox>
        <span>
          <a href="#" @click.prevent="$emit('show-terms')">قوانین و مقررات</a>
          پرداخت خودکار را مطالعه کرده و با آن موافقم.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BankManagementSection',
  props: {
    subscriptions: {
      type: Array,
      default: () => [],
    },
    banks: {
      type: Array,
      default: () => [],
    },
    formData: {
      type: Object,
      default: () => ({
        bank: '012',
        mobile: '',
      }),
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    isEditMode: {
      type: Boolean,
      default: false,
    },
    acceptTerms: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    'change-card',
    'next-step',
    'show-terms',
    'update:formData',
    'update:acceptTerms',
  ],
  data() {
    return {
      localFormData: { ...this.formData },
    }
  },
  computed: {
    canProceed() {
      return (
        this.localFormData.bank &&
        this.localFormData.mobile &&
        this.acceptedTerms
      )
    },
    acceptedTerms: {
      get() {
        return this.acceptTerms
      },
      set(value) {
        this.$emit('update:acceptTerms', value)
      },
    },
  },

  watch: {
    formData: {
      handler(newVal) {
        this.localFormData = { ...newVal }
      },
      deep: true,
    },
    'localFormData.mobile': {
      handler() {
        this.$emit('update:formData', { ...this.localFormData })
      },
    },
  },
  methods: {
    selectBank(bankValue) {
      this.localFormData.bank = bankValue
      this.$emit('update:formData', { ...this.localFormData })
    },
  },
}
</script>

<style scoped>
/* Registered Card Box */
.registered-card-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1.5rem;
  border-radius: 0.5rem;
  color: white;
}

.registered-card-box .bank-name {
  font-size: 1.2rem;
  font-weight: 600;
}

/* Bank Grid */
.bank-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5rem;
}

.bank-card {
  width: 18%;
  border-radius: 0.5rem;
  padding: 0.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: white;
  width: 100% !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bank-card:hover {
  border-color: #007bff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.15);
}

.bank-card.selected {
  width: 20%;
  border: 2px solid #007bff;
}

.bank-logo {
  width: 40px;
  height: 40px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bank-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.bank-card .bank-name {
  font-weight: 600;
  color: #333;
}

/* Responsive */
@media (max-width: 768px) {
  .bank-grid {
    grid-template-columns: 1fr;
  }
}

::v-deep label.custom-control-label {
  padding: 0 !important;
}
</style>
