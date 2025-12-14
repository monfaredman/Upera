<template>
  <div class="offer-section-skeleton">
    <div class="container-fluid">
      <!-- Title skeleton -->
      <div class="skeleton-title mb-3"></div>

      <!-- Offer items skeleton -->
      <div class="d-flex gap-2 overflow-hidden">
        <div v-for="i in itemCount" :key="i" class="skeleton-offer-item"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OfferSectionSkeleton',
  props: {
    itemCount: {
      type: Number,
      default: 6,
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

.offer-section-skeleton {
  margin-top: -11rem;
}

.skeleton-title,
.skeleton-offer-item {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 25%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 75%
  );
  background-size: 2000px 100%;
  animation: shimmer 2s infinite;
  border-radius: 12px;
}

.skeleton-title {
  width: 200px;
  height: 28px;
  margin-bottom: 1rem;
}

.skeleton-offer-item {
  flex-shrink: 0;
  width: 764px;
  height: 400px;
  border-radius: 16px;
}

.gap-2 {
  gap: 10px;
}

/* Responsive styles matching OfferSection */
@media (max-width: 1500px) {
  .offer-section-skeleton {
    margin-top: -8rem;
  }
}

@media (max-width: 1400px) {
  .offer-section-skeleton {
    margin-top: -5rem;
  }
}

@media (max-width: 1200px) {
  .offer-section-skeleton {
    margin-top: -3rem;
  }

  .skeleton-offer-item {
    width: 600px;
    height: 320px;
  }
}

@media (max-width: 992px) {
  .offer-section-skeleton {
    margin-top: -2rem;
  }

  .skeleton-offer-item {
    width: 500px;
    height: 280px;
  }
}

@media (max-width: 768px) {
  .offer-section-skeleton {
    margin-top: -4rem !important;
  }

  .skeleton-offer-item {
    width: 350px;
    height: 200px;
  }

  .skeleton-title {
    width: 150px;
    height: 24px;
  }
}

@media (max-width: 576px) {
  .offer-section-skeleton {
    margin-top: 2rem;
  }

  .skeleton-offer-item {
    width: 280px;
    height: 160px;
  }
}

@media (max-width: 480px) {
  .skeleton-offer-item {
    width: 240px;
    height: 140px;
  }
}
</style>
