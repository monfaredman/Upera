<template>
  <div class="horizontal-list-skeleton mt-4">
    <div class="container-fluid">
      <!-- Title skeleton -->
      <div class="skeleton-title mb-3"></div>

      <!-- Items skeleton -->
      <div class="d-flex gap-2 overflow-hidden">
        <div
          v-for="i in itemCount"
          :key="i"
          class="skeleton-item"
          :class="itemClass"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HorizontalListSkeleton',
  props: {
    variant: {
      type: String,
      default: 'poster', // 'poster' or 'backdrop'
    },
    itemCount: {
      type: Number,
      default: 7,
    },
  },
  computed: {
    itemClass() {
      return this.variant === 'backdrop'
        ? 'skeleton-item-backdrop'
        : 'skeleton-item-poster'
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

.skeleton-title,
.skeleton-item {
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

.skeleton-title {
  width: 200px;
  height: 28px;
  margin-bottom: 1rem;
}

.skeleton-item {
  flex-shrink: 0;
}

.skeleton-item-poster {
  width: 142px;
  height: 212px;
}

.skeleton-item-backdrop {
  width: 364px;
  height: 190px;
}

.gap-2 {
  gap: 10px;
}

@media (max-width: 768px) {
  .skeleton-item-poster {
    width: 120px;
    height: 180px;
  }

  .skeleton-item-backdrop {
    width: 280px;
    height: 150px;
  }

  .skeleton-title {
    width: 150px;
    height: 24px;
  }
}
</style>
