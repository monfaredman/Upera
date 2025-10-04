<template>
  <div
    class="banner text-center text-white d-flex align-items-center justify-content-center"
    role="img"
    aria-label="تو تصمیم می‌گیری چقدر پرداخت کنی!
دنیایی از فیلم‌های متنوع ایرانی و خارجی
آماده تماشا هستید؟"
  >
    <h3
      class="display-4"
      style="
        font-size: 2.3rem;
        line-height: 4.5rem;
        font-weight: 700;
        margin-top: 18rem;
        word-spacing: 0.2em;
      "
    >
      <slot
        >"تو تصمیم می‌گیری چقدر پرداخت کنی!"
        <br />
        دنیایی از فیلم‌های متنوع ایرانی و خارجی
        <br />
        آماده تماشا هستید؟
      </slot>
    </h3>
  </div>
</template>

<style scoped>
.banner {
  --banner-image: url('@/assets/images/app/banner.png');
  --banner-height: 700px;
  --banner-min-width: 300px;
  --banner-min-height: 200px;
  background: var(--banner-image) center/cover no-repeat;
  height: clamp(var(--banner-min-height), 65vh, var(--banner-height));
  width: 100%;
  min-width: var(--banner-min-width);
  min-height: var(--banner-min-height);
}

h3 {
  font-size: 3rem !important;
  line-height: 5.5rem !important;
  margin-top: 20rem;
  word-spacing: 0.2em;
  font-family: 'dana-600' !important;
}

@media (max-width: 992px) {
  .banner {
    height: clamp(280px, 55vh, 600px);
  }

  h3 {
    font-size: 2.5rem !important;
    line-height: 4.5rem !important;
    margin-top: 20rem;
    word-spacing: 0.2em;
    font-family: 'dana-600' !important;
  }
}

@media (max-width: 576px) {
  .banner {
    height: clamp(240px, 38vh, 520px);
  }

  .banner h3 {
    font-size: 1.2rem !important;
    line-height: 3rem !important;
    margin-top: 10rem !important;
    word-spacing: 0.1em !important;
  }
}
</style>
