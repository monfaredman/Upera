<template>
  <div class="payment-error-container">
    <!-- Error Icon -->
    <div class="error-icon-wrapper">
      <div v-if="isFailureState" class="error-icon">
        <i
          class="fa fa-times"
          aria-hidden="true"
          style="font-size: 50px; color: red"
        ></i>
        <span class="sr-only">پرداخت ناموفق</span>
      </div>
      <div v-else class="success-icon">
        <i
          class="fa fa-check"
          aria-hidden="true"
          style="font-size: 50px; color: green"
        ></i>
        <span class="sr-only">پرداخت موفق</span>
      </div>
    </div>

    <!-- Error Message Alert Box -->
    <div v-if="errorTitle" class="error-alert">
      <div class="alert-icon">
        <i
          v-if="isFailureState"
          class="fa fa-exclamation-triangle"
          aria-hidden="true"
          style="font-size: 18px; color: #ea2a33"
        ></i>
        <i
          v-else
          class="fa fa-info-circle"
          aria-hidden="true"
          style="font-size: 18px; color: orange"
        ></i>
      </div>
      <div class="alert-content">
        <div class="alert-title">{{ errorTitle }}</div>
        <div v-if="errorSubtitle" class="alert-subtitle">
          {{ errorSubtitle }}
        </div>
      </div>
    </div>
    <!-- Additional Messages -->
    <div v-if="showRefundMessage" class="info-box">
      <div class="info-icon">
        <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
      </div>
      <div class="info-text">
        اگر مبلغی از حساب شما کسر شده است، نهایتا ظرف ۷۲ ساعت آینده به حساب شما
        برگشت داده خواهد شد
      </div>
    </div>
    <div v-else-if="showRetryMessage" class="info-box">
      <div class="info-icon">
        <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
      </div>
      <div class="info-text">
        می توانید پرداخت خود را بررسی کنید و یا نسبت به پرداخت مجدد اقدام کنید
      </div>
    </div>

    <!-- Order Details -->
    <div v-if="refNum || message" class="order-details">
      <div v-if="refNum" class="order-item">
        <span class="order-label">شماره پیگیری :</span> :
        <span class="order-value">{{ refNum }}</span>
      </div>
      <div v-if="message" class="order-item">
        <span class="order-value">{{ message }}</span>
      </div>
    </div>
    <div class="divider" />
  </div>
</template>

<script>
export default {
  name: 'PaymentErrorContent',
  props: {
    errorType: {
      type: String,
      required: true,
      validator: (value) => {
        return ['checkagain', 'show_login', 'default'].includes(value)
      },
    },
    refNum: {
      type: [String, Number],
      default: null,
    },
    message: {
      type: String,
      default: null,
    },
  },
  computed: {
    isFailureState() {
      return this.errorType === 'checkagain' || this.errorType === 'default'
    },
    errorTitle() {
      if (this.errorType === 'show_login') {
        return 'پرداخت شما موفقیت آمیز بوده است'
      }
      return 'متاسفانه خرید شما موفقیت آمیز نبود'
    },
    errorSubtitle() {
      if (this.errorType === 'show_login') {
        return 'اما برای استفاده از آن باید وارد سایت شوید'
      }
      if (this.errorType === 'default') {
        return 'و یا در حین انجام تراکنش مشکلی رخ داده است'
      }
      return null
    },
    showRefundMessage() {
      return this.errorType === 'checkagain'
    },
    showRetryMessage() {
      return this.errorType === 'default'
    },
  },
}
</script>

<style scoped>
.payment-error-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.error-icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -2rem;
}

.error-icon {
  width: 112px;
  height: 112px;
  color: #ea2a33;
  border-radius: 50%;
  display: flex;
  border: 0.8rem solid red;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 12px rgba(234, 42, 51, 0.3);
}

.success-icon {
  width: 112px;
  height: 112px;
  color: #34c759;
  border-radius: 50%;
  border: 0.8rem solid green;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 12px rgba(52, 199, 89, 0.3);
}

.error-alert {
  background: #fce4e6;
  border: 1px solid #facacc;
  min-height: 36px;
  border-radius: 12px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
  justify-self: center;
}

.alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.alert-title {
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #1c1c1e;
}

.alert-subtitle {
  font-size: 13px;
  line-height: 18px;
  color: #3c3c43;
}

.info-message {
  font-size: 14px;
  line-height: 20px;
  color: #6c6c70;
  text-align: center;
  padding: 0 16px;
}

.info-box {
  border-radius: 8px;
  border-width: 1px;
  padding-top: 8px;
  padding-right: 12px;
  padding-bottom: 8px;
  padding-left: 12px;
  background: #dbe7fb;
  border: 1px solid #b6d0f7;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
}

.info-icon {
  flex-shrink: 0;
  color: #0047f1;
  font-size: 18px;
  margin-top: 2px;
}

.info-text {
  flex: 1;
  font-size: 14px;
  line-height: 20px;
  color: #1c1c1e;
  text-align: right;
}

.order-details {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding: 0 16px;
  color: #f2f2f7 !important;
  border-radius: 12px;
  margin-top: 8px;
}

.order-item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
}

.order-label {
  color: var(--Gray-N500, #737373);
  font-weight: 400;
  font-size: 13px;
  text-align: right;
  margin-left: 2px;
}

.order-value {
  color: #1c1c1e;
  font-weight: 500;
  text-align: right;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: var(--Gray-N100, #f5f5f5) !important;
}
</style>
