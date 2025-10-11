<template>
  <div>
    <section class="app-links-section">
      <div class="container custom-container">
        <div class="row align-items-center">
          <!-- App Image -->
          <div class="col-12 col-lg-4 text-center">
            <img
              src="@/assets/images/app/apps-images.png"
              alt="Apps"
              class="apps-image"
            />
          </div>

          <!-- App Links -->
          <div class="col-12 col-lg-8 app-links-content">
            <h2 class="title text-left mb-4 mt-4 mt-lg-0">
              هر لحظه و هرجا با آپرا فیلم ببین!
            </h2>

            <div class="buttons-wrapper">
              <div
                v-for="section in appSections"
                :key="section.label"
                class="app-section-row"
              >
                <!-- Section Header -->
                <div class="section-header">
                  <img
                    v-if="section.type !== 'web'"
                    :src="section.icon"
                    :alt="section.label"
                    class="section-icon"
                  />
                  <i v-else class="fa fa-tv fa-1x section-icon"></i>
                  <span class="section-label">{{ section.label }}</span>
                </div>

                <!-- Section Links -->
                <div class="section-links">
                  <template v-if="section.type !== 'web'">
                    <div
                      v-for="link in getAppLinksByType(section.type)"
                      :key="link.label"
                      class="app-link-group"
                    >
                      <div class="app-link-images">
                        <!-- Conditionally handle PWA action images -->
                        <template v-for="(img, idx) in link.imagesSrc">
                          <a
                            v-if="typeof img !== 'string' && img.action"
                            :key="`action-${idx}`"
                            href="#"
                            class="app-link-btn"
                            @click.prevent="showPWA(img.action)"
                          >
                            <img :src="img.src" :alt="link.label" />
                          </a>
                          <a
                            v-else
                            :key="`actions-${idx}`"
                            :href="
                              typeof img === 'string'
                                ? link.href
                                : img.href || link.href
                            "
                            class="app-link-btn"
                          >
                            <img
                              :src="typeof img === 'string' ? img : img.src"
                              :alt="link.label"
                            />
                          </a>
                        </template>
                      </div>
                    </div>
                  </template>
                  <template v-else>
                    <b-button :href="section.href" class="web-link-btn">
                      ورود به WEBTV
                    </b-button>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Add PWA modal -->
    <pwa :show="showModal" :type="apptype" @hide-modal="hideModal" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import pwa from '@/components/pwa'
import apkDownload from '@/assets/img/app/apk-download.png'
import sibappIos from '@/assets/img/app/sibapp-ios.png'
import anarIos from '@/assets/img/app/anar-ios.png'
import pwaIos from '@/assets/img/app/pwa-ios.png'
import sibiraniIos from '@/assets/img/app/sibirani-ios.svg'

import iosIgm from '@/assets/images/app/ios.png'
import androidImg from '@/assets/images/app/android.png'
import desktopImg from '@/assets/images/app/desktop.png'

// PWA modal state/handlers
const showModal = ref(false)
const apptype = ref('android')
const showPWA = (type) => {
  apptype.value = type
  showModal.value = true
}
const hideModal = () => {
  showModal.value = false
}

const appSections = [
  {
    label: 'اپلیکیشن اندروید',
    type: 'android',
    icon: androidImg,
  },
  {
    label: 'اپلیکیشن iOS',
    type: 'ios',
    icon: iosIgm,
  },
  {
    label: 'اپ تلویزیون',
    type: 'tv',
    icon: desktopImg,
  },
  {
    label: 'دسترسی با مرورگر تلویزیون و کنسول',
    type: 'web',
    icon: 'fa-solid fa-globe ml-2',
    href: 'https://upera.tv/tv', // WebTV href
  },
]

const appLinks = [
  {
    label: 'اندروید',
    type: 'android',
    href: 'https://app.upera.tv/get_app/apk', // Android APK
    imagesSrc: [
      { src: apkDownload, href: 'https://app.upera.tv/get_app/apk' },
      // Optional PWA for Android
      { src: pwaIos, action: 'android' },
    ],
  },
  {
    label: 'iOS',
    type: 'ios',
    href: '#',
    imagesSrc: [
      { src: sibiraniIos, href: 'https://sibirani.com/apps/Upera/' },
      { src: anarIos, href: 'https://anardoni.com/ios/app/gUFrGOKi' },
      {
        src: sibappIos,
        href: 'https://sibapp.com/applications/%D8%A2%D9%BE%D8%B1%D8%A7',
      },
      // PWA modal for iOS
      { src: pwaIos, action: 'ios' },
    ],
  },
  {
    label: 'تلویزیون',
    type: 'tv',
    href: 'https://app.upera.tv/get_app/android_tv', // TV APK
    imagesSrc: [
      { src: apkDownload, href: 'https://app.upera.tv/get_app/android_tv' },
    ],
  },
]

// Helper function to filter app links by type
const getAppLinksByType = (type) => {
  return appLinks.filter((item) => item.type === type)
}
</script>

<style scoped>
.app-links-section {
  margin: 5rem 0;
}

.custom-container {
  max-width: 1400px !important;
}

.app-links-content {
  margin-bottom: 1rem;
  align-self: end;
  margin-top: 1rem;
  direction: rtl;
}

@media (min-width: 992px) {
  .app-links-content {
    margin-bottom: 0;
    margin-top: 0;
  }
}

.app-section-row {
  display: flex;
  flex-direction: column;
  margin-top: 0.75rem;
  align-items: flex-start;
}

@media (min-width: 992px) {
  .app-section-row {
    flex-direction: row;
    align-items: center;
  }
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  flex-shrink: 0;
  padding: 0.5rem 0;
  width: 100%;
}

@media (min-width: 576px) {
  .section-header {
    width: 33%;
  }
}

@media (min-width: 1200px) {
  .section-header {
    width: 170px;
  }
}

.section-icon {
  margin-left: 0.5rem !important;
  width: 24px !important;
  height: 24px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: none !important;
}

.section-label {
  margin-right: 0.5rem;
  color: #ff6633;
  font-weight: 500;
  white-space: nowrap;
  text-align: right;
}

.section-links {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

@media (min-width: 576px) {
  .section-links {
    width: 66%;
    flex-wrap: nowrap;
    margin-right: 5rem;
  }
}

.app-link-group {
  width: 100%;
}

.app-link-images {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: flex-start;
  width: 100%;
}

/* Equal sizing for all app store buttons */
.app-link-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: transparent;
  border: none;
  padding: 0;
  text-decoration: none;
}

.app-link-btn img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.2s ease;
  display: block;
}

.app-link-btn:hover img {
  transform: scale(1.05);
}

/* Mobile sizing */
@media (max-width: 575.98px) {
  .app-link-btn {
    width: 140px;
    height: 42px;
    flex: 0 0 auto;
  }

  .app-link-images {
    justify-content: flex-start;
    gap: 0.75rem;
  }
}

/* Tablet sizing */
@media (min-width: 576px) and (max-width: 1199.98px) {
  .app-link-btn {
    width: 150px;
    height: 45px;
    flex: 0 0 auto;
  }

  .app-link-images {
    justify-content: flex-start;
    gap: 1rem;
  }
}

/* Desktop sizing */
@media (min-width: 1200px) {
  .app-link-btn {
    width: 160px;
    height: 48px;
    flex: 0 0 auto;
  }

  .app-link-images {
    justify-content: flex-start;
    gap: 1rem;
  }
}

/* Web button styling with equal dimensions */
.web-link-btn {
  background: #dc3645 !important;
  padding: 0;
  font-size: 14px;
  color: white;
  border: none;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  text-wrap: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  text-decoration: none;
}

.web-link-btn:hover {
  background: #c82333 !important;
  color: white;
}

/* Mobile sizing for web button */
@media (max-width: 575.98px) {
  .web-link-btn {
    width: 140px;
    height: 42px;
  }
}

/* Tablet sizing for web button */
@media (min-width: 576px) and (max-width: 1199.98px) {
  .web-link-btn {
    width: 150px;
    height: 45px;
  }
  .section-links {
    width: 66%;
    flex-wrap: nowrap;
    margin-right: 3rem;
  }
}

/* Desktop sizing for web button */
@media (min-width: 1200px) {
  .web-link-btn {
    width: 160px;
    height: 43px;
  }
}

.title {
  font-weight: bold;
  text-align: right;
}

@media (max-width: 576px) {
  .app-links-section {
    margin: 1rem 0;
  }
}
</style>
