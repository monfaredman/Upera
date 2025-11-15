<template>
  <section id="slideshow">
    <div class="swiper-container showcase showcase-theme-m-tn">
      <div class="swiper-slide">
        <div class="row no-gutters">
          <div />
          <!-- Skeleton for backdrop image -->
          <div class="col-12 showcase-pic showcase-pic-main">
            <div class="skeleton-backdrop d-none d-lg-block"></div>
            <div class="skeleton-backdrop-mobile d-lg-none"></div>
          </div>
        </div>

        <!-- Skeleton for content -->
        <div
          id="showcase-thumbnail-wrapper-outter"
          class="showcase-thumbnail-wrapper-outter d-flex align-items-center justify-content-between"
        >
          <div class="showcase-thumbnail-wrapper w-full container-fluid">
            <div
              class="d-flex h-full align-items-end d-flex align-items-center justify-content-start"
            >
              <div class="showcase-desc-wrapper h-full mb-2 mb-md-0">
                <!-- Logo skeleton -->
                <div class="skeleton-logo mb-2 mb-md-4"></div>

                <!-- Title skeleton -->
                <div class="skeleton-title mb-2"></div>
                <div class="skeleton-subtitle mb-3"></div>

                <!-- Stats row skeleton -->
                <div v-if="page !== 'home'" class="skeleton-stats mb-3">
                  <div class="skeleton-stat-item"></div>
                  <div class="skeleton-stat-item"></div>
                  <div class="skeleton-stat-item"></div>
                  <div class="skeleton-stat-item"></div>
                </div>

                <!-- Action buttons skeleton -->
                <div class="skeleton-actions d-flex align-items-center gap-2">
                  <div class="skeleton-btn skeleton-btn-primary"></div>
                  <div class="skeleton-btn skeleton-btn-secondary"></div>
                  <div class="skeleton-icon-btn"></div>
                  <div class="skeleton-icon-btn"></div>
                  <div class="skeleton-icon-btn"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ShowcaseSkeleton',
  props: {
    page: {
      type: String,
      default: 'home',
    },
  },
}
</script>

<style scoped>
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

/* Add high z-index to skeleton section */
#slideshow {
  position: relative;
  z-index: 100;
}

.swiper-container.showcase {
  position: relative;
  z-index: 100;
}

.skeleton-backdrop,
.skeleton-backdrop-mobile,
.skeleton-logo,
.skeleton-title,
.skeleton-subtitle,
.skeleton-stats,
.skeleton-stat-item,
.skeleton-btn,
.skeleton-icon-btn {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 25%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 75%
  );
  background-size: 2000px 100%;
  animation: shimmer 2s infinite;
  border-radius: 8px;
}

.skeleton-backdrop {
  width: 100%;
  height: 790px;
  border-radius: 0;
}

.skeleton-backdrop-mobile {
  width: 100%;
  height: 300px;
  border-radius: 0;
}

.skeleton-logo {
  width: 220px;
  height: 100px;
}

.skeleton-title {
  width: 60%;
  max-width: 400px;
  height: 36px;
}

.skeleton-subtitle {
  width: 40%;
  max-width: 300px;
  height: 20px;
}

.skeleton-stats {
  width: 360px;
  height: 52px;
  display: flex;
  gap: 8px;
  padding: 4px;
}

.skeleton-stat-item {
  flex: 1;
  height: 44px;
}

.skeleton-actions {
  display: flex;
  gap: 12px;
}

.skeleton-btn {
  height: 48px;
  border-radius: 8px;
}

.skeleton-btn-primary {
  width: 140px;
}

.skeleton-btn-secondary {
  width: 120px;
}

.skeleton-icon-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

@media (max-width: 1700px) {
  .skeleton-backdrop {
    width: 100%;
    height: 590px;
    border-radius: 0;
  }
}

@media (max-width: 576px) {
  .skeleton-backdrop {
    width: 100%;
    height: 200px !important;
    border-radius: 0;
  }

  .skeleton-logo {
    width: 150px;
    height: 90px;
  }

  .skeleton-title {
    width: 80%;
    height: 28px;
  }

  .skeleton-subtitle {
    width: 60%;
    height: 16px;
  }

  .skeleton-stats {
    width: 100%;
    max-width: 336px;
  }
}

.showcase-thumbnail-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 102;
  padding: 0 1rem !important;
  margin-top: 4rem !important;
}

.showcase-thumbnail-wrapper-outter {
  position: relative;
  z-index: 101;
}

@media (max-width: 992px) {
  .showcase-thumbnail-wrapper {
    margin-top: 10rem !important;
  }
}

@media (max-width: 1300px) {
  .showcase-thumbnail-wrapper {
    margin-top: 10rem !important;
  }
}

@media (min-width: 1300px) {
  .showcase-thumbnail-wrapper {
    margin-top: 18rem;
    margin-bottom: 3rem;
  }
}
</style>
