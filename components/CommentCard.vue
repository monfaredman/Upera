<template>
  <div class="comment-card">
    <div class="comment-avatar">
      <img v-if="userImage" :src="userImage" alt="User avatar" />
      <div v-else class="avatar-placeholder">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </div>
    <div class="comment-content-wrapper">
      <div class="comment-header">
        <span class="comment-user-name">{{ userName }}</span>
        <span class="comment-timestamp">{{ formattedTime }}</span>
      </div>
      <p class="comment-text" :class="{ 'not-approved': !approved }">
        {{ content }}
      </p>

      <div class="comment-actions">
        <button class="action-btn upvote-btn" @click="$emit('upvote')">
          <i class="fa fa-thumbs-up"></i>
        </button>
        <span class="votes-count">{{ votes || 0 }}</span>
        <button class="action-btn downvote-btn" @click="$emit('downvote')">
          <i class="fa fa-thumbs-down"></i>
        </button>

        <button
          v-if="showReplyButton"
          class="action-btns reply-btn"
          @click="$emit('reply')"
        >
          پاسخ
        </button>
      </div>

      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentCard',
  props: {
    userImage: { type: String, default: '' },
    userName: { type: String, required: true },
    content: { type: String, required: true },
    approved: { type: [Boolean, Number], default: true },
    votes: { type: Number, default: 0 },
    showReplyButton: { type: Boolean, default: false },
    timestamp: { type: String, default: '' },
  },
  computed: {
    formattedTime() {
      if (!this.timestamp) return 'همین الان'

      const date = new Date(this.timestamp)
      const now = new Date()
      const diffInSeconds = Math.floor((now - date) / 1000)

      if (diffInSeconds < 60) return 'همین الان'
      if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60)
        return `${minutes} دقیقه پیش`
      }
      if (diffInSeconds < 86400) {
        const hours = Math.floor(diffInSeconds / 3600)
        return `${hours} ساعت پیش`
      }
      if (diffInSeconds < 604800) {
        const days = Math.floor(diffInSeconds / 86400)
        return `${days} روز پیش`
      }
      if (diffInSeconds < 2592000) {
        const weeks = Math.floor(diffInSeconds / 604800)
        return `${weeks} هفته پیش`
      }
      if (diffInSeconds < 31536000) {
        const months = Math.floor(diffInSeconds / 2592000)
        return `${months} ماه پیش`
      }

      const years = Math.floor(diffInSeconds / 31536000)
      return `${years} سال پیش`
    },
  },
}
</script>

<style scoped>
.comment-card {
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
}

/* Avatar */
.comment-avatar {
  width: 48px;
  height: 48px;
  border-radius: 24px;
  opacity: 1;
  padding: 0;
  background: #a3a3a3;
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.comment-avatar img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
}

.avatar-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

/* Content wrapper */
.comment-content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Header with name and time */
.comment-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.comment-user-name {
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  text-align: right;
  color: #ffffff;
}

.comment-timestamp {
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  text-align: right;
  color: #a3a3a3;
}

/* Comment text */
.comment-text {
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  text-align: right;
  color: #fafafa;
  word-wrap: break-word;
}

p.comment-text {
  margin: 0 !important;
}

.comment-text.not-approved {
  opacity: 0.6;
  font-style: italic;
}

/* Actions */
.comment-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.action-btn {
  background: transparent;
  border: none;
  color: #a3a3a3;
  cursor: pointer;
  padding: 6px 0 6px 12px;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 4px;
}

.action-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.upvote-btn:hover {
  color: #4ade80;
}

.downvote-btn:hover {
  color: #f87171;
}

.reply-btn {
  color: #1b6be5;
  font-weight: 500;
}

.reply-btn:hover {
  background: rgba(27, 107, 229, 0.1);
}

.votes-count {
  font-size: 14px;
  color: #fafafa;
  min-width: 24px;
  text-align: center;
}

.action-btns {
  background: transparent;
  border: none;
  color: #a3a3a3;
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 4px;
}

/* Responsive */
@media (max-width: 768px) {
  .comment-avatar {
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }

  .comment-user-name {
    font-size: 14px;
    line-height: 24px;
  }

  .comment-timestamp {
    font-size: 12px;
    line-height: 20px;
  }

  .comment-text {
    font-size: 14px;
    line-height: 24px;
  }

  .action-btn {
    padding: 4px 8px;
    font-size: 12px;
  }
}
</style>
