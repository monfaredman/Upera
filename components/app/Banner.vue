<template>
  <div
    class="banner text-center text-white d-flex align-items-center justify-content-center"
    role="img"
    aria-label="تو تصمیم می‌گیری چقدر پرداخت کنی!
دنیایی از فیلم‌های متنوع ایرانی و خارجی
آماده تماشا هستید؟"
  >
    <h3 class="display-4">
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
  --banner-shadow-color: rgba(0, 0, 0, 0.758);
  --banner-shadow-height: 16.666%;

  background-image: linear-gradient(
      to top,
      var(--banner-shadow-color) 0%,
      rgba(0, 0, 0, 0) var(--banner-shadow-height)
    ),
    var(--banner-image);
  background-position: center, center;
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;

  height: clamp(var(--banner-min-height), 80vh, var(--banner-height));
  width: 100%;
  min-width: var(--banner-min-width);
  min-height: var(--banner-min-height);
}

h3 {
  font-size: 3rem !important;
  line-height: 5.5rem !important;
  margin-top: 18rem;
  word-spacing: 0.2em;
  font-weight: 700 !important;
}

@media (max-width: 992px) {
  .banner {
    height: clamp(280px, 55vh, 600px);
  }

  h3 {
    font-size: 3rem !important;
    line-height: 5.5rem !important;
    margin-top: 20rem;
    font-weight: 600 !important;
    word-spacing: 0.2em;
  }
}

@media (max-width: 576px) {
  .banner {
    height: clamp(240px, 38vh, 520px);
    background-position: none !important;
  }

  .banner h3 {
    /* mobile: 22px = 1.375rem */
    font-size: 1.375rem !important;
    line-height: 3rem !important;
    margin-top: 10rem !important;
    word-spacing: 0.1em !important;
    font-weight: 500 !important;
  }
}
</style>
