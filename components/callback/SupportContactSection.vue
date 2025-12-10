<template>
  <div>
    <div class="support-contact">
      <a href="https://telegram.me/srmweb" target="_blank" class="support-link">
        <img
          src="@/assets/images/telegram-icon.png"
          alt="Telegram Icon"
          class="telegram-icon"
        />
        پشتیبانی تلگرام
      </a>
      <div class="support-link">تلفن پشتیبانی (ساعات اداری) : 02191690309</div>
      <div class="support-link">
        تلفن پشتیبانی (ساعات غیراداری) : 02191690309
      </div>
    </div>
    <div class="divider" />
  </div>
</template>

<script>
export default {
  name: 'SupportContactSection',
}
</script>

<style scoped>
.support-contact {
  text-align: right;
}

.divider {
  width: 100%;
  height: 1px;
  margin: 0;
  background-color: var(--Gray-N100, #f5f5f5) !important;
}

.support-link {
  font-weight: 600;
  font-size: 14px;
  text-align: right;
  color: #0047f1;
  margin-bottom: 12px;
  display: block;
  text-decoration: none;
}

.support-link:hover {
  color: #0036c0;
  text-decoration: none;
}

.support-link i {
  margin-left: 8px;
}
.telegram-icon {
  width: 35px;
  object-fit: contain;
}
</style>
