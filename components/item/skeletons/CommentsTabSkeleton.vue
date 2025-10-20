<template>
  <div class="comments-skeleton p-3">
    <!-- Comment form skeleton -->
    <div class="skeleton-comment-form mb-4"></div>

    <!-- Comments list skeleton -->
    <div v-for="i in 5" :key="i" class="skeleton-comment-item mb-4">
      <div class="d-flex">
        <div class="skeleton-avatar"></div>
        <div class="flex-grow-1 ml-3">
          <div class="skeleton-username mb-2"></div>
          <div class="skeleton-comment-text mb-2"></div>
          <div class="skeleton-comment-text" style="width: 70%"></div>
          <div class="skeleton-comment-meta mt-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentsTabSkeleton',
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

.skeleton-comment-form,
.skeleton-avatar,
.skeleton-username,
.skeleton-comment-text,
.skeleton-comment-meta {
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

.skeleton-comment-form {
  width: 100%;
  height: 100px;
}

.skeleton-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  flex-shrink: 0;
}

.skeleton-username {
  width: 150px;
  height: 20px;
}

.skeleton-comment-text {
  width: 100%;
  height: 16px;
}

.skeleton-comment-meta {
  width: 200px;
  height: 14px;
}
</style>
