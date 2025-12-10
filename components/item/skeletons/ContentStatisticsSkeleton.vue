<template>
  <div class="content-statistics-skeleton p-3">
    <!-- Main stats grid -->
    <div class="row mb-4">
      <div v-for="i in 6" :key="i" class="col-6 col-md-4 col-lg-2 mb-3">
        <div class="skeleton-stat-box"></div>
      </div>
    </div>

    <!-- Additional info sections -->
    <div class="mb-4">
      <div class="skeleton-info-title mb-3"></div>
      <div class="skeleton-info-text mb-2"></div>
      <div class="skeleton-info-text mb-2" style="width: 80%"></div>
      <div class="skeleton-info-text" style="width: 60%"></div>
    </div>

    <div class="mb-4">
      <div class="skeleton-info-title mb-3"></div>
      <div class="row">
        <div v-for="i in 4" :key="'tag-' + i" class="col-auto mb-2">
          <div class="skeleton-tag"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentStatisticsSkeleton',
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

.skeleton-stat-box,
.skeleton-info-title,
.skeleton-info-text,
.skeleton-tag {
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

.skeleton-stat-box {
  width: 100%;
  height: 100px;
}

.skeleton-info-title {
  width: 180px;
  height: 24px;
}

.skeleton-info-text {
  width: 100%;
  height: 18px;
}

.skeleton-tag {
  width: 80px;
  height: 32px;
  border-radius: 16px;
}
</style>
