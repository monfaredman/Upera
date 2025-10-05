<template>
  <section class="app-links-section d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-lg-6 text-center">
          <img
            src="@/assets/images/app/apps-images.png"
            alt="Apps"
            class="apps-image"
          />
        </div>
        <div class="col-12 col-lg-6 mb-4 mb-lg-0 align-self-end" dir="rtl">
          <h2 class="title mb-5 mr-4 !text-right">
            هر لحظه و هرجا با آپرا فیلم ببین!
          </h2>

          <div class="buttons-wrapper">
            <div class="buttons-row">
              <div
                class="static-btn text-white d-flex align-items-center justify-content-start flex-shrink-0"
                style="width: 170px"
              >
                <img
                  src="@/assets/images/app/mobile.png"
                  alt="Apps"
                  class="ml-2"
                />
                <span class="mr-2 text-nowrap text-right">اپ موبایل</span>
              </div>
              <div class="d-flex flex-row buttons-row button-mobile-col">
                <b-button
                  v-for="link in appLinks.filter(
                    (item) => item.type === 'mobile'
                  )"
                  :key="link.label"
                  variant="primary"
                  :href="link.href"
                  class="app-btn d-flex align-items-center justify-content-between equal-btn"
                >
                  <img :src="link.icon" alt="Apps" />
                  <span style="font-size: 16px">{{ link.label }}</span>
                </b-button>
              </div>
            </div>
            <div class="buttons-row mt-4">
              <div
                variant="link"
                class="static-btn text-white d-flex align-items-center justify-content-start flex-shrink-0"
                style="width: 170px"
              >
                <img src="@/assets/images/app/tv.png" alt="Apps" class="ml-2" />
                <span class="mr-2 text-nowrap text-right">اپ تلویزیون</span>
              </div>
              <div class="d-flex flex-row buttons-row button-mobile-col">
                <b-button
                  v-for="link in appLinks.filter((item) => item.type === 'tv')"
                  :key="link.label"
                  variant="primary"
                  :href="link.href"
                  class="app-btn d-flex align-items-center justify-content-between equal-btn"
                >
                  <img :src="link.icon" alt="Apps" />
                  <span style="font-size: 16px">{{ link.label }}</span>
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import iosImg from '@/assets/images/app/ios.png'
import androidImg from '@/assets/images/app/android.png'
import desktopImg from '@/assets/images/app/desktop.png'

// Use imported asset URLs so webpack/nuxt resolves them correctly
const appLinks = [
  {
    label: 'نسخه iOS',
    icon: iosImg,
    href: '#',
    type: 'mobile',
  },
  {
    label: 'نسخه اندروید',
    icon: androidImg,
    href: '#',
    type: 'mobile',
  },
  {
    label: 'اپ تلویزیون',
    icon: desktopImg,
    href: '#',
    type: 'tv',
  },
  {
    label: 'دسترسی با مرورگر',
    icon: androidImg, // replace with proper icon if available
    href: '#',
    type: 'tv',
  },
]
</script>

<style scoped>
.app-links-section {
  background: #000;
  color: #fff;
  padding: 5rem 0;
}

.title {
  font-size: 1.9rem;
  font-weight: 700;
  line-height: 1.6;
  font-family: 'dana-600';
  margin-right: 0 !important;
}

.buttons-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.buttons-row {
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
}

.equal-btn {
  display: flex !important;
  flex: 1 1 auto;
  min-width: 0;
  height: 40px;
  justify-content: space-between !important;
  text-align: center;
  white-space: nowrap;
}

.buttons-row .app-btn:nth-child(odd) {
  width: 9rem;
  max-width: 8.5rem;
}

.buttons-row .app-btn:nth-child(even) {
  width: 11rem;
  max-width: 14rem;
}

.label-btn {
  background: #111;
  border: 1px solid #222;
  border-radius: 10px;
  transition: 0.25s;
}

.label-btn:hover {
  background: #1d1d1d;
  border-color: #333;
  transform: translateY(-2px);
}

.app-btn {
  background: #111;
  border: 1px solid #222;
  border-radius: 10px;
  padding: 0.2rem 0.9rem !important;
  text-decoration: none;
  color: #fff;
  font-size: 0.95rem;
  transition: 0.25s;
}

.app-btn:hover {
  background: #1d1d1d;
  border-color: #333;
  transform: translateY(-2px);
}

.app-btn .icon {
  font-size: 1.2rem;
  margin-left: 0.6rem;
  display: inline-flex;
  width: 1.8rem;
  justify-content: center;
}

.apps-image {
  width: 420px;
  max-width: 100%;
  height: auto;
  display: inline-block;
}

@media (max-width: 575px) {
  .apps-image {
    width: 400px;
  }

  .buttons-row {
    flex-direction: column;
  }

  .button-mobile-col {
    flex-direction: row !important;
    justify-content: start !important;
  }

  .equal-btn {
    width: 20% !important;
    min-width: 48% !important;
    flex: none;
  }

  .app-links-section {
    padding: 1rem 0;
  }
}

@media (max-width: 991px) {
  .title {
    text-align: right !important;
    font-size: 1.1rem;
    margin-bottom: 1rem !important;
    margin-top: 2rem !important;
  }

  .buttons-wrapper {
    max-width: 420px;
    margin: 0 auto;
  }
}
.buttons-wrapper {
  max-width: 420px;
  margin: 0 0;
}

.static-btn {
  padding: 0.375rem 0.75rem;
}
@media (max-width: 575px) {
  .static-btn {
    padding: 0;
  }
}
</style>
