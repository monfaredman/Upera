<template>
  <div class="content-details-skeleton p-3">
    <!-- Story Section Skeleton -->
    <div class="mb-4">
      <div class="skeleton-section-title mb-3"></div>
      <div class="skeleton-text-line mb-2"></div>
      <div class="skeleton-text-line mb-2"></div>
      <div class="skeleton-text-line mb-2" style="width: 80%"></div>
    </div>

    <!-- Stats Grid Skeleton -->
    <div class="mb-4">
      <div class="row">
        <div v-for="i in 4" :key="i" class="col-6 col-md-3 mb-3">
          <div class="skeleton-stat-card"></div>
        </div>
      </div>
    </div>

    <!-- Cast Section Skeleton -->
    <div class="mb-4">
      <div class="skeleton-section-title mb-3"></div>
      <div class="row">
        <div v-for="i in 4" :key="i" class="col-6 col-md-3 mb-3">
          <div class="skeleton-cast-card">
            <div class="skeleton-cast-avatar"></div>
            <div class="skeleton-cast-name mt-2"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Gallery Section Skeleton -->
    <div class="mb-4">
      <div class="skeleton-section-title mb-3"></div>
      <div class="row">
        <div v-for="i in 6" :key="i" class="col-4 col-md-2 mb-3">
          <div class="skeleton-gallery-image"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentDetailsSkeleton',
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

.skeleton-section-title,
.skeleton-text-line,
.skeleton-stat-card,
.skeleton-cast-card,
.skeleton-cast-avatar,
.skeleton-cast-name,
.skeleton-gallery-image {
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

.skeleton-section-title {
  width: 200px;
  height: 32px;
}

.skeleton-text-line {
  width: 100%;
  height: 18px;
}

.skeleton-stat-card {
  width: 100%;
  height: 100px;
}

.skeleton-cast-card {
  width: 100%;
}

.skeleton-cast-avatar {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
}

.skeleton-cast-name {
  width: 80%;
  height: 20px;
  margin-left: auto;
  margin-right: auto;
}

.skeleton-gallery-image {
  width: 100%;
  aspect-ratio: 16/9;
}
</style>
