<template>
  <div class="container-fluid pt-4 pb-1 bg-filtermenu">
    <div class="mt-5 pt-lg-2 pt-md-2 pt-1">
      <div class="row">
        <div class="col-sm mb-1">
          <div class="skeleton-select"></div>
        </div>
        <div class="col-sm mb-1">
          <div class="skeleton-select"></div>
        </div>
        <div class="col-sm mb-1">
          <div class="skeleton-select"></div>
        </div>
        <div class="col-sm mb-1">
          <div class="skeleton-select"></div>
        </div>
        <div class="col-sm mb-1">
          <div class="skeleton-select"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterSkeleton',
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

.skeleton-select {
  width: 100%;
  height: 38px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 25%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 75%
  );
  background-size: 2000px 100%;
  animation: shimmer 2s infinite;
  border-radius: 4px;
}

@media (max-width: 576px) {
  .skeleton-select {
    height: 34px;
  }
}
</style>
