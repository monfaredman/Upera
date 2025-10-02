<template>
  <div class="d-flex comment">
    <div class="avatar">
      <img class="rounded-circle" :src="userImage" alt="" />
    </div>
    <div
      class="d-flex flex-column align-items-start ml-2 ml-lg-4 border-bottom flex-grow-1"
    >
      <b class="mb-2 comment-title">{{ userName }}</b>
      <p class="comment-text" :class="{ 'font-italic': !approved }">
        {{ content }}
      </p>

      <div class="comment-actions d-flex align-items-center">
        <button class="btn btn-outline-success btn-sm" @click="$emit('upvote')">
          👍
        </button>
        <span class="mx-2">{{ votes || 0 }}</span>
        <button
          class="btn btn-outline-danger btn-sm"
          @click="$emit('downvote')"
        >
          👎
        </button>

        <button
          v-if="showReplyButton"
          class="btn btn-outline-primary btn-sm mr-3"
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
    userImage: { type: String, required: true },
    userName: { type: String, required: true },
    content: { type: String, required: true },
    approved: { type: [Boolean, Number], default: true },
    votes: { type: Number, default: 0 },
    showReplyButton: { type: Boolean, default: false },
  },
}
</script>
