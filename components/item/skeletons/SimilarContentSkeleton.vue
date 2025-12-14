<template>
  <div class="similar-content-skeleton p-3">
    <div class="row">
      <div v-for="i in 8" :key="i" class="col-lg-3 col-md-4 col-6 mb-4">
        <div class="skeleton-card">
          <div class="skeleton-poster"></div>
          <div class="skeleton-title mt-2"></div>
          <div class="skeleton-meta mt-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimilarContentSkeleton',
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
.skeleton-title,
.skeleton-meta {
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

.skeleton-card {
  width: 100%;
}

.skeleton-poster {
  width: 100%;
  aspect-ratio: 2/3;
}

.skeleton-title {
  width: 90%;
  height: 20px;
}

.skeleton-meta {
  width: 60%;
  height: 16px;
}
</style>
