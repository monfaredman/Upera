<template>
  <div class="bank-management-section">
    <div v-if="Object.keys(subscriptions).length > 0">
      <h6 class="font-weight-bold mb-3">
        بانک های فعال شما جهت پرداخت خودکار:
      </h6>
      <div class="bank-buttons mb-3">
        <b-button
          v-for="(item, index) in subscriptions"
          :key="index"
          variant="dark"
          class="mr-2 mb-2"
          @click="$emit('delete-bank', index, item.id, item.bank)"
        >
          {{ item.bank }}
          <i class="fa fa-trash-alt pr-2" />
        </b-button>
        <b-button variant="success" @click="$emit('add-bank')">
          <i class="fa fa-plus pr-2" />
          افزودن بانک جدید
        </b-button>
      </div>
    </div>

    <!-- Add New Bank Form -->
    <b-card v-show="showAddBank" class="mt-2 mb-3 px-2 bank-form-card">
      <b-form-group
        label="انتخاب بانک:"
        label-for="bank-select"
        description="بانک مورد نظر خود را انتخاب کنید"
      >
        <b-form-select
          id="bank-select"
          v-model="localFormData.bank"
          :options="banks"
          class="form-control"
        />
      </b-form-group>

      <b-form-group
        label="شماره موبایلی را که به بانک شما متصل است را وارد کنید:"
        label-for="mobile-input"
        description="شماره موبایل مرتبط با حساب بانکی خود را وارد کنید"
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

      <div class="row mt-2">
        <div class="col-12">
          <b-button
            variant="success"
            block
            :disabled="isLoading"
            @click="handleSubmit"
          >
            <template v-if="isLoading">
              <b-spinner small class="mr-2" />
              در حال پردازش...
            </template>
            <template v-else>
              افزودن کارت بانکی شما به سیستم پرداخت خودکار
              <i class="fa fa-money-bill pr-2" />
            </template>
          </b-button>
        </div>
      </div>
    </b-card>
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
    showAddBank: {
      type: Boolean,
      default: false,
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
  },
  emits: ['add-bank', 'delete-bank', 'submit'],
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
    handleSubmit() {
      this.$emit('submit', this.localFormData)
    },
  },
}
</script>

<style scoped>
.bank-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.bank-form-card {
  border-right: 4px solid #28a745;
}
</style>
