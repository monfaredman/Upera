<template>
  <section id="special" class="mb-5 special-skeleton">
    <div class="container-fluid">
      <div
        class="special d-flex flex-column justify-content-start align-items-start align-items-lg-center flex-lg-row"
      >
        <div class="position-relative w-full">
          <div class="special-content-wrapper">
            <div class="d-flex justify-content-start w-full special">
              <!-- Poster skeleton -->
              <div class="skeleton-poster"></div>

              <!-- Content area skeleton -->
              <div class="skeleton-content-area ml-2 ml-lg-5 w-full">
                <!-- Header with title and "show all" -->
                <div class="d-flex justify-content-between w-full mb-3">
                  <div>
                    <div class="skeleton-content-title mb-2"></div>
                    <div class="skeleton-genres"></div>
                  </div>
                  <div class="skeleton-show-all"></div>
                </div>

                <!-- Description lines -->
                <div class="skeleton-desc-line mb-2"></div>
                <div class="skeleton-desc-line mb-2"></div>
                <div class="skeleton-desc-line-short mb-3"></div>

                <!-- Button skeleton -->
                <div class="skeleton-button"></div>
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
  name: 'OccasionSectionSkeleton',
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

.skeleton-poster,
.skeleton-content-title,
.skeleton-genres,
.skeleton-show-all,
.skeleton-desc-line,
.skeleton-desc-line-short,
.skeleton-button {
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

.skeleton-poster {
  width: 142px;
  height: 212px;
  flex-shrink: 0;
}

.skeleton-content-area {
  display: flex;
  flex-direction: column;
}

.skeleton-content-title {
  width: 200px;
  height: 24px;
}

.skeleton-genres {
  width: 150px;
  height: 18px;
}

.skeleton-show-all {
  width: 80px;
  height: 20px;
}

.skeleton-desc-line {
  width: 100%;
  height: 16px;
}

.skeleton-desc-line-short {
  width: 70%;
  height: 16px;
}

.skeleton-button {
  width: 120px;
  height: 40px;
}

@media (max-width: 768px) {
  .skeleton-poster {
    width: 100px;
    height: 150px;
  }

  .skeleton-content-title {
    width: 150px;
    height: 20px;
  }

  .skeleton-desc-line,
  .skeleton-desc-line-short {
    height: 14px;
  }
}
</style>
