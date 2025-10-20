<template>
  <div class="movie-content-skeleton p-3">
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="skeleton-poster"></div>
      </div>
      <div class="col-md-8">
        <div class="skeleton-title mb-3"></div>
        <div class="skeleton-text mb-2"></div>
        <div class="skeleton-text mb-2"></div>
        <div class="skeleton-text mb-2" style="width: 80%"></div>

        <div class="mt-4">
          <div class="skeleton-button"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieContentTabSkeleton',
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
.skeleton-text,
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
  width: 100%;
  aspect-ratio: 2/3;
}

.skeleton-title {
  width: 70%;
  height: 32px;
}

.skeleton-text {
  width: 100%;
  height: 18px;
}

.skeleton-button {
  width: 140px;
  height: 48px;
}
</style>
