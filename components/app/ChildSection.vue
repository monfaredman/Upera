<template>
  <div class="wrapper">
    <div class="child-section-container">
      <b-col
        md="3"
        class="d-flex flex-column align-items-start justify-content-start"
      >
        <div class="d-flex align-items-center justify-content-start mb-4">
          <img
            src="@/assets/images/app/child-icon.png"
            alt="Bob Image"
            class="img-fluid"
          />
          <img
            src="@/assets/images/app/child-text.png"
            alt="آپرا کودک"
            class="mr-2"
          />
        </div>
        <img
          src="@/assets/images/app/bob-image.png"
          alt="Icon"
          class="me-2 d-none d-md-block hero-icon"
          style="width: 340px; height: 240px"
        />
      </b-col>

      <b-col md="6" class="text-right mid-col">
        <div
          class="mb-4 feature-box first-section"
          style="
            background-color: #1c2163;
            padding: 1rem;
            border-radius: 8px;
            display: inline-block;
            width: fit-content;
          "
        >
          <h4>🎈 بخش اختصاصی کودکان</h4>
          <p style="text-align: right; margin-bottom: 0">
            آپرا یک بخش ویژه برای کودکان دارد که محیطی امن، سرگرم‌کننده و
            آموزنده را برای فرزندان شما فراهم می‌کند.
          </p>
        </div>
        <div
          class="mb-4 feature-box profile-box"
          style="
            background-color: #0f161f;
            padding: 1rem;
            border-radius: 8px;
            display: inline-block;
            width: 100%;
            box-shadow: -4px -4px 10px #0e264a, 4px 4px 10px #0e264a,
              -4px 4px 10px #0e264a, 4px -4px 10px #0e264a;
            margin-right: 12rem;
          "
        >
          <h4 style="text-align: right">👶 پروفایل مخصوص کودک شما</h4>
          <p style="text-align: right; margin-bottom: 0">
            🔒 امنیت و کنترل والدین
          </p>
          <p style="text-align: right; margin-bottom: 0">
            💡 یادگیری در کنار سرگرمی
          </p>
        </div>
      </b-col>

      <b-col
        md="3"
        class="text-center d-flex flex-row align-items-center justify-content-end mb-4 cta-col"
      >
        <img
          src="@/assets/images/app/bob-image.png"
          alt="Icon"
          class="me-2 d-md-none mobile-icon"
          style="width: 80px; height: 40px"
        />
        <b-button
          variant="primary"
          size="lg"
          href="/kids"
          class="child-cta-btn"
          style="border-radius: 0.8rem"
        >
          <img
            src="@/assets/images/app/login.png"
            alt="Icon"
            class="ml-1 d-none d-md-inline"
          />
          ورود به آپرا کودک
        </b-button>
      </b-col>
    </div>
  </div>
</template>
<style scoped>
.child-section-container {
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  direction: rtl;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 95%;
  margin: 0 auto;
  margin-top: 4rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
}

.child-section-container > :last-child {
  align-self: flex-end;
}

.wrapper {
  width: 100%;
  background: linear-gradient(to bottom, transparent, #012964);
}

.child-cta-btn {
  font-size: 1rem;
  padding: 0.8rem 0.7rem !important;
}

.mid-col {
  margin-right: -6rem;
}

.child-section-container h4 {
  font-size: 1.2rem;
  text-align: right;
}

.child-section-container p {
  font-size: 0.9rem;
  word-spacing: 0.1em;
}

@media (max-width: 992px) {
  .mid-col {
    margin-right: 0;
  }
}

@media (max-width: 768px) {
  .child-section-container {
    flex-direction: column;
    align-items: stretch;
    margin-bottom: -1rem;
  }

  .child-section-container > * {
    width: 100% !important;
    margin-right: 0 !important;
  }

  .mid-col {
    width: 100%;
  }

  .cta-col {
    justify-content: space-between !important;
    align-self: stretch;
  }

  .child-cta-btn {
    width: 10rem !important;
    font-size: 1rem;
    padding: 0.3rem 1.25rem;
    margin-top: 2.5rem;
    white-space: nowrap;
  }

  .hero-icon {
    width: 100% !important;
    height: auto !important;
  }

  .mobile-icon {
    width: 180px !important;
    height: 140px !important;
    margin-top: -2rem;
  }

  img[alt='Bob Image'] {
    width: 48px;
    height: auto;
    margin-left: 0.5rem;
  }

  .child-section-container h4 {
    font-size: 0.95rem;
    margin: 0 0 0.35rem;
  }

  .child-section-container p {
    font-size: 0.75rem;
    line-height: 1.3;
    margin: 0 0 0.35rem;
  }

  .child-section-container .mb-4 {
    margin-bottom: 0.75rem !important;
  }

  .feature-box {
    padding: 0.95rem !important;
  }

  .mid-col .feature-box {
    margin-right: 0;
  }

  .profile-box {
    width: fit-content !important;
    margin-right: 9rem !important;
    box-shadow: 0px -3px 12px 0px #97979740;
  }
}

@media (max-width: 576px) {
  .child-cta-btn {
    padding: 0.3rem 0.25rem !important;
  }
  .child-section-container {
    margin-top: 1rem;
  }
}
.profile-box {
  box-shadow: 0px -3px 12px 0px #97979740;
}

@media (min-width: 1790px) {
  .first-section.feature-box {
    margin-left: 8rem !important;
  }
}
</style>
