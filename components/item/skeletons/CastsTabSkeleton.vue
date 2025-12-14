<template>
  <div class="casts-tab-skeleton p-3">
    <!-- Directors Section -->
    <div class="mb-5">
      <div class="skeleton-section-title mb-3"></div>
      <div class="row">
        <div
          v-for="i in 2"
          :key="'dir-' + i"
          class="col-6 col-md-4 col-lg-3 mb-4"
        >
          <div class="skeleton-cast-item">
            <div class="skeleton-avatar"></div>
            <div class="skeleton-name mt-2"></div>
            <div class="skeleton-role mt-1"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Cast Section -->
    <div class="mb-5">
      <div class="skeleton-section-title mb-3"></div>
      <div class="row">
        <div
          v-for="i in 8"
          :key="'cast-' + i"
          class="col-6 col-md-4 col-lg-3 mb-4"
        >
          <div class="skeleton-cast-item">
            <div class="skeleton-avatar"></div>
            <div class="skeleton-name mt-2"></div>
            <div class="skeleton-role mt-1"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CastsTabSkeleton',
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
.skeleton-avatar,
.skeleton-name,
.skeleton-role {
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
  width: 150px;
  height: 28px;
}

.skeleton-cast-item {
  width: 100%;
  text-align: center;
}

.skeleton-avatar {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  margin: 0 auto;
}

.skeleton-name {
  width: 80%;
  height: 20px;
  margin: 0.5rem auto 0;
}

.skeleton-role {
  width: 60%;
  height: 16px;
  margin: 0.25rem auto 0;
}
</style>
