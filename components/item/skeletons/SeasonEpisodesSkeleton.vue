<template>
  <section id="watching" class="horizontal-list-container item mt-lg-2 pt-3">
    <!-- Season Dropdown Skeleton -->
    <div class="container-fluid mb-3">
      <div class="row align-items-center">
        <div class="col-auto">
          <div class="skeleton-dropdown"></div>
        </div>
        <div class="col-auto">
          <div class="skeleton-dropdown"></div>
        </div>
      </div>
    </div>

    <!-- Description Skeleton -->
    <div class="container-fluid mb-4">
      <div class="row">
        <div class="col-12">
          <div class="skeleton-description mb-2"></div>
          <div class="skeleton-description" style="width: 70%"></div>
        </div>
      </div>
    </div>

    <!-- Episodes Grid Skeleton -->
    <div class="container-fluid">
      <div class="row">
        <div v-for="i in 8" :key="i" class="col-lg-3 col-md-6 col-6 mb-3">
          <div class="episode-card-skeleton">
            <div class="skeleton-episode-image"></div>
            <div class="skeleton-episode-title mt-2"></div>
            <div class="skeleton-episode-meta mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SeasonEpisodesSkeleton',
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

.skeleton-dropdown,
.skeleton-description,
.skeleton-episode-image,
.skeleton-episode-title,
.skeleton-episode-meta {
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

.skeleton-dropdown {
  width: 140px;
  height: 40px;
}

.skeleton-description {
  width: 100%;
  height: 20px;
}

.episode-card-skeleton {
  width: 100%;
}

.skeleton-episode-image {
  width: 100%;
  height: 170px;
  border-radius: 8px;
}

.skeleton-episode-title {
  width: 80%;
  height: 24px;
}

.skeleton-episode-meta {
  width: 60%;
  height: 16px;
}

@media (max-width: 768px) {
  .skeleton-episode-image {
    height: 120px;
  }
}
</style>
