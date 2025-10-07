<template>
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
                <i v-else class="fa fa-tv section-icon"></i>
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
                      <nuxt-link
                        v-for="(imgSrc, idx) in link.imagesSrc"
                        :key="idx"
                        :to="link.href"
                        class="app-link-btn"
                      >
                        <img :src="imgSrc" :alt="link.label" />
                      </nuxt-link>
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
</template>

<script setup>
import apkDownload from '@/assets/img/app/apk-download.png'
import sibappIos from '@/assets/img/app/sibapp-ios.png'
import anarIos from '@/assets/img/app/anar-ios.png'
import pwaIos from '@/assets/img/app/pwa-ios.png'
import sibiraniIos from '@/assets/img/app/sibirani-ios.svg'

import iosIgm from '@/assets/images/app/ios.png'
import androidImg from '@/assets/images/app/android.png'
import desktopImg from '@/assets/images/app/desktop.png'

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
    href: '#',
  },
]

const appLinks = [
  {
    label: 'اندروید',
    type: 'android',
    href: '#',
    imagesSrc: [apkDownload],
  },
  {
    label: 'iOS',
    type: 'ios',
    href: '#',
    imagesSrc: [sibappIos, anarIos, pwaIos, sibiraniIos],
  },
  {
    label: 'تلویزیون',
    type: 'tv',
    href: '#',
    imagesSrc: [apkDownload],
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
  margin-left: 0.5rem;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin-top: 0.5rem;
}

@media (min-width: 576px) {
  .section-links {
    width: 66%;
    flex-wrap: nowrap;
  }
}

@media (min-width: 1200px) {
  .section-links {
    margin-right: 5rem;
  }
}

.app-link-group {
  margin-top: 0.5rem;
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
  margin-top: 0.5rem;
  margin-right: 0.5rem;
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
}

/* Desktop sizing for web button */
@media (min-width: 1200px) {
  .web-link-btn {
    width: 160px;
    height: 48px;
  }
}

.title {
  font-weight: bold;
  text-align: right;
}
</style>
